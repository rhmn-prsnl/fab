import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  Body,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function AdminProducts() {
  const products = [
    { id: "PRD001", name: "Silk Chiffon Blouse", category: "Tops", stock: 145, price: "₹1,450", status: "Active" },
    { id: "PRD002", name: "Pleated Midi Skirt", category: "Skirts", stock: 24, price: "₹1,200", status: "Low Stock" },
    { id: "PRD003", name: "Cashmere Turtleneck", category: "Sweaters", stock: 89, price: "₹2,950", status: "Active" },
    { id: "PRD004", name: "Tailored Wide-Leg Trousers", category: "Pants", stock: 0, price: "₹1,800", status: "Out of Stock" },
    { id: "PRD005", name: "Floral Summer Dress", category: "Dresses", stock: 210, price: "₹2,200", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">Manage your inventory, pricing, and variants.</p>
        </div>
        <Button className="gap-2">
          <Plus size={16} /> Add Product
        </Button>
      </div>

      <div className="bg-card border rounded-lg overflow-hidden">
        <div className="p-4 border-b flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="pl-8" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={16} /> Filters
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Stock ID</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-mono text-xs">{product.id}</TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge variant={
                      product.status === 'Active' ? 'default' : 
                      product.status === 'Low Stock' ? 'secondary' : 'destructive'
                    }>
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
