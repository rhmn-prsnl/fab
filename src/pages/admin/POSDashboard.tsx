import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ShoppingCart, Plus, Minus, CreditCard, Banknote, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function POSDashboard() {
  const [cart, setCart] = useState<{id: string, name: string, price: number, qty: number}[]>([]);
  
  const products = [
    { id: "PRD001", name: "Silk Chiffon Blouse", price: 1450, stock: 12 },
    { id: "PRD002", name: "Pleated Midi Skirt", price: 1200, stock: 5 },
    { id: "PRD003", name: "Cashmere Turtleneck", price: 2950, stock: 8 },
    { id: "PRD005", name: "Floral Summer Dress", price: 2200, stock: 15 },
    { id: "PRD006", name: "Linen Crop Top", price: 850, stock: 20 },
    { id: "PRD007", name: "Denim Jacket", price: 3400, stock: 4 },
  ];

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }).filter(item => item.qty > 0));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col md:flex-row gap-6">
      {/* Left side: Products List */}
      <div className="flex-1 flex flex-col gap-4 min-h-0">
        <div className="flex gap-2">
           <div className="relative flex-1">
             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
             <Input placeholder="Scan barcode or search products..." className="pl-8" autoFocus />
           </div>
           <Button variant="outline">Categories</Button>
        </div>

        <ScrollArea className="flex-1 border rounded-lg bg-card">
           <div className="p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map(p => (
                 <Card key={p.id} className="cursor-pointer hover:border-primary transition-colors hover:shadow-sm" onClick={() => addToCart(p)}>
                    <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                       <div className="h-20 w-20 bg-secondary rounded-md mb-2 flex items-center justify-center text-muted-foreground">
                         <ShoppingCart size={24} />
                       </div>
                       <h3 className="font-medium text-sm leading-tight line-clamp-2 h-10">{p.name}</h3>
                       <Badge variant="outline" className="w-full justify-center">₹{p.price}</Badge>
                       <p className="text-xs text-muted-foreground mt-1">{p.stock} in stock</p>
                    </CardContent>
                 </Card>
              ))}
           </div>
        </ScrollArea>
      </div>

      {/* Right side: Current Bill */}
      <div className="w-full md:w-96 flex flex-col bg-card border rounded-lg overflow-hidden shrink-0">
         <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
            <h2 className="font-semibold">Current Order</h2>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20" onClick={() => setCart([])}>
              <Trash2 size={16} />
            </Button>
         </div>
         
         <ScrollArea className="flex-1">
            <div className="p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground flex flex-col items-center">
                  <ShoppingCart size={48} className="mb-4 opacity-20" />
                  <p>Cart is empty</p>
                  <p className="text-sm">Scan a product to begin</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex justify-between items-start">
                     <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">₹{item.price} each</p>
                     </div>
                     <div className="flex flex-col items-end gap-2">
                        <p className="font-semibold">₹{item.price * item.qty}</p>
                        <div className="flex items-center gap-2 border rounded-md p-1">
                           <Button variant="ghost" size="icon" className="h-5 w-5 rounded-sm" onClick={() => updateQty(item.id, -1)}>
                             <Minus size={12} />
                           </Button>
                           <span className="text-sm font-medium w-4 text-center">{item.qty}</span>
                           <Button variant="ghost" size="icon" className="h-5 w-5 rounded-sm" onClick={() => updateQty(item.id, 1)}>
                             <Plus size={12} />
                           </Button>
                        </div>
                     </div>
                  </div>
                ))
              )}
            </div>
         </ScrollArea>

         <div className="p-4 bg-muted/50 border-t space-y-3">
            <div className="flex justify-between text-sm">
               <span className="text-muted-foreground">Subtotal</span>
               <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
               <span className="text-muted-foreground">GST (18%)</span>
               <span className="font-medium">₹{tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-xl font-bold">
               <span>Total</span>
               <span className="text-primary">₹{total.toFixed(2)}</span>
            </div>
         </div>

         <div className="p-4 grid grid-cols-2 gap-2 border-t bg-card">
            <Button variant="outline" className="h-12 w-full gap-2" disabled={cart.length === 0}>
               <Banknote size={16} /> Cash
            </Button>
            <Button className="h-12 w-full gap-2" disabled={cart.length === 0}>
               <CreditCard size={16} /> Pay / Card
            </Button>
         </div>
      </div>
    </div>
  );
}
