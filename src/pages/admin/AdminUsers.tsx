import { Button } from "@/components/ui/button";
import { Plus, Search, ShieldAlert, User as UserIcon, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function AdminUsers() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [userType, setUserType] = useState('staff'); // 'staff' or 'vendor'

  const users = [
    { id: "EMP-001", name: "Ananya Sharma", email: "ananya@fab.com", role: "Store Manager", location: "Store 1 (Mumbai)", status: "Active", initials: "AS" },
    { id: "EMP-002", name: "Rahul Verma", email: "rahul@fab.com", role: "Warehouse Manager", location: "Central Warehouse", status: "Active", initials: "RV" },
    { id: "EMP-003", name: "Priya Singh", email: "priya@fab.com", role: "POS Cashier", location: "Store 2 (Delhi)", status: "Active", initials: "PS" },
    { id: "EMP-004", name: "Mohit Desai", email: "mohit@fab.com", role: "Sales Executive", location: "Store 1 (Mumbai)", status: "Inactive", initials: "MD" },
    { id: "EMP-000", name: "Super Admin", email: "admin@fab.com", role: "Super Admin", location: "HQ", status: "Active", initials: "SA" },
  ];

  const vendors = [
    { id: "VEN-001", name: "SilkCorp Ltd", contact: "Rajiv Menon", phone: "+91 98765 12345", category: "Fabrics, Tops", status: "Active" },
    { id: "VEN-002", name: "FashionCo", contact: "Neha Gupta", phone: "+91 87654 23456", category: "Skirts, Pants", status: "Active" },
    { id: "VEN-003", name: "WinterWear Inc", contact: "Vikram Singh", phone: "+91 76543 34567", category: "Sweaters", status: "Inactive" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Access Management</h2>
          <p className="text-muted-foreground">Manage employees, vendors, roles, and branch access.</p>
        </div>
        
        <Sheet open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <SheetTrigger asChild>
            <Button className="gap-2">
              <Plus size={16} /> Create User / Vendor
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-[600px] w-full flex flex-col p-0">
            <div className="p-6 border-b">
              <SheetHeader>
                <SheetTitle>Create New Profile</SheetTitle>
                <SheetDescription>
                  Add a new staff member or vendor to the system.
                </SheetDescription>
              </SheetHeader>
            </div>
            
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Profile Type</Label>
                  <Tabs value={userType} onValueChange={setUserType} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="staff">Internal Staff</TabsTrigger>
                      <TabsTrigger value="vendor">Vendor / Supplier</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {userType === 'staff' ? (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="space-y-4">
                      <h3 className="font-serif italic text-lg text-primary border-b pb-2">Basic Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Employee ID</Label>
                          <Input placeholder="Auto-generated" disabled />
                        </div>
                        <div className="space-y-2">
                          <Label>Full Name</Label>
                          <Input placeholder="e.g. Jane Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label>Email Address</Label>
                          <Input type="email" placeholder="jane@fab.com" />
                        </div>
                        <div className="space-y-2">
                          <Label>Mobile Number</Label>
                          <Input placeholder="+91" />
                        </div>
                        <div className="space-y-2">
                          <Label>Gender</Label>
                          <Select>
                            <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="f">Female</SelectItem>
                              <SelectItem value="m">Male</SelectItem>
                              <SelectItem value="o">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Date of Birth</Label>
                          <Input type="date" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-serif italic text-lg text-primary border-b pb-2">Professional Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Role / Designation</Label>
                          <Select>
                            <SelectTrigger><SelectValue placeholder="Select Role" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="store_manager">Store Manager</SelectItem>
                              <SelectItem value="cashier">POS Cashier</SelectItem>
                              <SelectItem value="sales">Sales Executive</SelectItem>
                              <SelectItem value="warehouse_manager">Warehouse Manager</SelectItem>
                              <SelectItem value="super_admin">Super Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Assigned Location</Label>
                          <Select>
                            <SelectTrigger><SelectValue placeholder="Select Location" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hq">Head Office</SelectItem>
                              <SelectItem value="wh">Central Warehouse</SelectItem>
                              <SelectItem value="s1">Store 1 (Mumbai)</SelectItem>
                              <SelectItem value="s2">Store 2 (Delhi)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Employment Type</Label>
                          <Select>
                            <SelectTrigger><SelectValue placeholder="Select Type" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full">Full-Time</SelectItem>
                              <SelectItem value="part">Part-Time</SelectItem>
                              <SelectItem value="contract">Contract</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Salary / Base Pay</Label>
                          <Input placeholder="Amount" type="number" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-serif italic text-lg text-primary border-b pb-2">Login Credentials</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Username</Label>
                          <Input placeholder="Will be used for login" />
                        </div>
                        <div className="space-y-2">
                          <Label>Temporary Password</Label>
                          <Input type="password" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="space-y-4">
                      <h3 className="font-serif italic text-lg text-primary border-b pb-2">Vendor Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Company Name</Label>
                          <Input placeholder="e.g. SilkCorp Ltd" />
                        </div>
                        <div className="space-y-2">
                          <Label>Vendor Type</Label>
                          <Select>
                            <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="manufacturer">Manufacturer</SelectItem>
                              <SelectItem value="wholesaler">Wholesaler</SelectItem>
                              <SelectItem value="distributor">Distributor</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>GST Number</Label>
                          <Input placeholder="Enter GSTIN" />
                        </div>
                        <div className="space-y-2">
                          <Label>PAN Number</Label>
                          <Input placeholder="Enter PAN" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-serif italic text-lg text-primary border-b pb-2">Contact Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Primary Contact Name</Label>
                          <Input placeholder="e.g. Rajiv Menon" />
                        </div>
                        <div className="space-y-2">
                          <Label>Primary Phone</Label>
                          <Input placeholder="+91" />
                        </div>
                        <div className="space-y-2">
                          <Label>Email Address</Label>
                          <Input type="email" placeholder="contact@company.com" />
                        </div>
                        <div className="space-y-2">
                          <Label>Website (Optional)</Label>
                          <Input placeholder="https://" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Full Registered Address</Label>
                        <Input placeholder="Street address, city, state, pincode" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-serif italic text-lg text-primary border-b pb-2">Banking & Terms</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Payment Terms</Label>
                          <Select>
                            <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="advance">100% Advance</SelectItem>
                              <SelectItem value="net30">Net 30 Days</SelectItem>
                              <SelectItem value="net60">Net 60 Days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Bank Account Number</Label>
                          <Input placeholder="A/C Number" />
                        </div>
                        <div className="space-y-2">
                          <Label>IFSC Code</Label>
                          <Input placeholder="IFSC Code" />
                        </div>
                        <div className="space-y-2">
                          <Label>Credit Limit (₹)</Label>
                          <Input type="number" placeholder="Optional" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-6 border-t bg-muted/20">
              <SheetFooter>
                <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
                <Button onClick={() => setIsCreateOpen(false)}>Save {userType === 'staff' ? 'Staff Member' : 'Vendor'}</Button>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Tabs defaultValue="staff" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="staff" className="gap-2"><UserIcon size={14} /> Employees / Staff</TabsTrigger>
          <TabsTrigger value="vendors" className="gap-2"><Building2 size={14} /> Vendors / Suppliers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="staff" className="m-0">
          <div className="bg-card border rounded-none overflow-hidden">
            <div className="p-4 border-b flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search employees..." className="pl-8 rounded-none border-border" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                         <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9 rounded-sm border border-border">
                              <AvatarFallback className="bg-muted text-foreground text-xs rounded-sm">{user.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                               <p className="font-medium">{user.name}</p>
                               <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                         </div>
                      </TableCell>
                      <TableCell>
                         <div className="flex items-center gap-2">
                           {user.role === 'Super Admin' && <ShieldAlert size={14} className="text-primary"/>}
                           <span className={user.role === 'Super Admin' ? 'font-bold' : ''}>{user.role}</span>
                         </div>
                      </TableCell>
                      <TableCell>{user.location}</TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'} className="rounded-none">
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="rounded-none">Manage</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
         </div>
        </TabsContent>
        
        <TabsContent value="vendors" className="m-0">
          <div className="bg-card border rounded-none overflow-hidden">
            <div className="p-4 border-b flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search vendors..." className="pl-8 rounded-none border-border" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company Name</TableHead>
                    <TableHead>Contact Person</TableHead>
                    <TableHead>Categories</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendors.map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell>
                         <div className="flex items-center gap-3">
                           <div className="h-9 w-9 bg-muted flex items-center justify-center border border-border">
                             <Building2 size={16} className="text-muted-foreground" />
                           </div>
                           <div>
                              <p className="font-bold">{vendor.name}</p>
                              <p className="text-xs text-muted-foreground font-mono">{vendor.id}</p>
                           </div>
                         </div>
                      </TableCell>
                      <TableCell>
                         <p className="font-medium">{vendor.contact}</p>
                         <p className="text-xs text-muted-foreground">{vendor.phone}</p>
                      </TableCell>
                      <TableCell>{vendor.category}</TableCell>
                      <TableCell>
                        <Badge variant={vendor.status === 'Active' ? 'default' : 'secondary'} className="rounded-none">
                          {vendor.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" className="rounded-none">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
         </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}
