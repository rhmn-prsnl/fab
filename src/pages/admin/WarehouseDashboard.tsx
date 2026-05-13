import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDownRight, ArrowUpRight, Package, Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function WarehouseDashboard() {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const inventory = [
    { id: "PRD001", name: "Silk Chiffon Blouse", category: "Tops", sku: "FAB-BLS-01", vendor: "SilkCorp Ltd", total: 1450, warehouse: 800, store1: 250, store2: 400 },
    { id: "PRD002", name: "Pleated Midi Skirt", category: "Skirts", sku: "FAB-SKT-02", vendor: "FashionCo", total: 450, warehouse: 200, store1: 150, store2: 100 },
    { id: "PRD003", name: "Cashmere Turtleneck", category: "Sweaters", sku: "FAB-SWT-03", vendor: "WinterWear Inc", total: 890, warehouse: 500, store1: 200, store2: 190 },
    { id: "PRD004", name: "Wide-Leg Trousers", category: "Pants", sku: "FAB-PNT-04", vendor: "FashionCo", total: 120, warehouse: 0, store1: 50, store2: 70 },
    { id: "PRD005", name: "Floral Summer Dress", category: "Dresses", sku: "FAB-DRS-05", vendor: "SummerVibes", total: 2100, warehouse: 1600, store1: 300, store2: 200 },
  ];

  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Central Warehouse</h2>
          <p className="text-muted-foreground">Inventory Distribution across Stores</p>
        </div>
        <div className="flex gap-2">
           <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
             <DialogTrigger asChild>
               <Button className="gap-2">
                 <Plus size={16} /> Add Product
               </Button>
             </DialogTrigger>
             <DialogContent className="sm:max-w-[600px]">
               <DialogHeader>
                 <DialogTitle>Add New Product</DialogTitle>
                 <DialogDescription>
                   Add a new product to the central warehouse inventory system.
                 </DialogDescription>
               </DialogHeader>
               <div className="grid gap-4 py-4">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col gap-2">
                     <Label htmlFor="name">Product Name</Label>
                     <Input id="name" placeholder="e.g. Silk Chiffon Blouse" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <Label htmlFor="sku">SKU Code</Label>
                     <Input id="sku" placeholder="e.g. FAB-BLS-01" />
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col gap-2">
                     <Label htmlFor="category">Category</Label>
                     <Select>
                       <SelectTrigger>
                         <SelectValue placeholder="Select category" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="tops">Tops</SelectItem>
                         <SelectItem value="skirts">Skirts</SelectItem>
                         <SelectItem value="dresses">Dresses</SelectItem>
                         <SelectItem value="accessories">Accessories</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                   <div className="flex flex-col gap-2">
                     <Label htmlFor="vendor">Vendor / Supplier</Label>
                     <Select>
                       <SelectTrigger>
                         <SelectValue placeholder="Select vendor" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="vendor1">SilkCorp Ltd</SelectItem>
                         <SelectItem value="vendor2">FashionCo</SelectItem>
                         <SelectItem value="vendor3">WinterWear Inc</SelectItem>
                         <SelectItem value="new">+ Add New Vendor</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col gap-2">
                     <Label htmlFor="price">Unit Price (₹)</Label>
                     <Input id="price" type="number" placeholder="0.00" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <Label htmlFor="stock">Initial Warehouse Stock</Label>
                     <Input id="stock" type="number" placeholder="0" />
                   </div>
                 </div>
                 
                 <div className="flex flex-col gap-2">
                     <Label htmlFor="desc">Description / Notes</Label>
                     <Input id="desc" placeholder="Optional details about this batch..." />
                 </div>
               </div>
               <DialogFooter>
                 <Button variant="outline" onClick={() => setIsAddProductOpen(false)}>Cancel</Button>
                 <Button onClick={() => setIsAddProductOpen(false)}>Save Product</Button>
               </DialogFooter>
             </DialogContent>
           </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Global Inventory Status</CardTitle>
          <CardDescription>View stock levels across the central warehouse and all connected branches.</CardDescription>
        </CardHeader>
        <CardContent>
           <div className="flex justify-between items-center mb-4">
             <div className="relative w-72">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, SKU or vendor..." className="pl-8" />
             </div>
             <div className="flex gap-2">
               <Button variant="outline" size="sm">Filter</Button>
               <Button variant="outline" size="sm">Export CSV</Button>
             </div>
           </div>
           
           <div className="overflow-x-auto border rounded-lg">
              <Table>
                 <TableHeader className="bg-muted/50">
                   <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead className="text-center">Total Stock</TableHead>
                      <TableHead className="text-center">Central Warehouse</TableHead>
                      <TableHead className="text-center">Store 1 (Mumbai)</TableHead>
                      <TableHead className="text-center">Store 2 (Delhi)</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                   </TableRow>
                 </TableHeader>
                 <TableBody>
                    {inventory.map(item => (
                       <TableRow key={item.id}>
                          <TableCell>
                             <div className="flex items-center gap-2">
                                <div className="h-8 w-8 bg-secondary rounded flex items-center justify-center shrink-0">
                                   <Package size={14} className="text-muted-foreground" />
                                </div>
                                <div>
                                   <p className="font-medium text-sm">{item.name}</p>
                                   <p className="text-xs text-muted-foreground font-mono">{item.sku} • {item.category}</p>
                                </div>
                             </div>
                          </TableCell>
                          <TableCell className="text-sm">{item.vendor}</TableCell>
                          <TableCell className="text-center font-bold">{item.total}</TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            <span className={item.warehouse === 0 ? "text-destructive font-medium" : ""}>
                              {item.warehouse}
                            </span>
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground">{item.store1}</TableCell>
                          <TableCell className="text-center text-muted-foreground">{item.store2}</TableCell>
                          <TableCell className="text-right">
                             <Button variant="ghost" size="sm">Manage</Button>
                          </TableCell>
                       </TableRow>
                    ))}
                 </TableBody>
              </Table>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
