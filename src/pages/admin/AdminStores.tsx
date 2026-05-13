import { Button } from "@/components/ui/button";
import { Plus, Store as StoreIcon, ChevronLeft, Users, Package, TrendingUp, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody
} from "@/components/ui/table";

export function AdminStores() {
  const [selectedStore, setSelectedStore] = useState<any | null>(null);
  const [isAddStoreOpen, setIsAddStoreOpen] = useState(false);

  const stores = [
    { id: "STR-001", name: "Store 1 (Mumbai)", type: "Owned", location: "Bandra West, Mumbai", manager: "Ravi Sharma", staffCount: 12, revenue: "₹345K/mo", status: "Active" },
    { id: "STR-002", name: "Store 2 (Delhi)", type: "Owned", location: "South Ex, Delhi", manager: "Priya Singh", staffCount: 8, revenue: "₹280K/mo", status: "Active" },
    { id: "STR-003", name: "Store 3 (BGLR)", type: "Franchise", location: "Indiranagar, Bangalore", manager: "Anil Kumar", staffCount: 6, revenue: "₹190K/mo", status: "Active" },
    { id: "STR-004", name: "Store 4 (Pune)", type: "Franchise", location: "Koregaon Park, Pune", manager: "Meera Joshi", staffCount: 5, revenue: "₹150K/mo", status: "Active" },
  ];

  const storeInventory = [
    { sku: "FAB-BLS-01", name: "Silk Chiffon Blouse", stock: 250, reorder: 50 },
    { sku: "FAB-SKT-02", name: "Pleated Midi Skirt", stock: 150, reorder: 30 },
    { sku: "FAB-SWT-03", name: "Cashmere Turtleneck", stock: 200, reorder: 40 },
  ];

  const storeStaff = [
    { name: selectedStore?.manager || "Unknown", role: "Store Manager", phone: "+91 98765 43210" },
    { name: "Amit Verma", role: "Sales Associate", phone: "+91 87654 32109" },
    { name: "Sneha Reddy", role: "Cashier", phone: "+91 76543 21098" },
  ];

  if (selectedStore) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" className="gap-2 -ml-4" onClick={() => setSelectedStore(null)}>
          <ChevronLeft size={16} /> Back to Stores
        </Button>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold tracking-tight">{selectedStore.name}</h2>
              <Badge variant="outline">{selectedStore.type}</Badge>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={14} />
              <span>{selectedStore.location}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Edit Store</Button>
            <Button>POS Login Config</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{selectedStore.revenue}</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{selectedStore.staffCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Managed by {selectedStore.manager}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,245</div>
              <p className="text-xs text-muted-foreground mt-1">98% In-Stock Rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>In-Store Inventory</CardTitle>
              <CardDescription>Top selling items and stock alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>SKU</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead className="text-right">Stock</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {storeInventory.map((item) => (
                    <TableRow key={item.sku}>
                      <TableCell className="font-mono text-xs text-muted-foreground">{item.sku}</TableCell>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-right">
                        <span className={item.stock < item.reorder ? "text-destructive font-bold" : ""}>
                          {item.stock}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Staff & Management</CardTitle>
              <CardDescription>Personnel assigned to this location</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {storeStaff.map((staff, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{staff.name}</TableCell>
                      <TableCell>{staff.role}</TableCell>
                      <TableCell className="text-right text-muted-foreground text-sm">{staff.phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Store Management</h2>
          <p className="text-muted-foreground">Manage owned stores, franchises, and central warehouses.</p>
        </div>
        
        <Dialog open={isAddStoreOpen} onOpenChange={setIsAddStoreOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus size={16} /> Add New Store
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Store Location</DialogTitle>
              <DialogDescription>
                Enter the details for the new store or franchise branch.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input id="store-name" placeholder="e.g. Store 5 (Chennai)" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="store-type">Store Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owned">Owned</SelectItem>
                    <SelectItem value="franchise">Franchise</SelectItem>
                    <SelectItem value="pop-up">Pop-up/Temporary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="store-location">Full Address / Location</Label>
                <Input id="store-location" placeholder="e.g. Phoenix Marketcity, Chennai" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="store-manager">Store In-charge / Manager</Label>
                <Input id="store-manager" placeholder="Manager's Name" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddStoreOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsAddStoreOpen(false)}>Create Store</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <Card key={store.id} className="relative overflow-hidden group cursor-pointer hover:border-primary transition-colors" onClick={() => setSelectedStore(store)}>
            <div className={`absolute top-0 left-0 w-1 h-full ${store.type === 'Warehouse' ? 'bg-primary' : store.type === 'Franchise' ? 'bg-orange-400' : 'bg-slate-800'}`} />
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                 <div className="p-2 bg-secondary rounded-md">
                   <StoreIcon className="h-5 w-5 text-primary" />
                 </div>
                 <Badge variant="outline">{store.type}</Badge>
              </div>
              <CardTitle className="mt-4">{store.name}</CardTitle>
              <CardDescription>{store.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                <div>
                  <p className="text-muted-foreground">Manager</p>
                  <p className="font-semibold">{store.manager}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Staff</p>
                  <p className="font-semibold">{store.staffCount} Employees</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2 border-t mt-4">
               <span className="text-sm font-medium text-primary w-full text-center group-hover:underline">View Store Details</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
