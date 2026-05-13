import { Button } from "@/components/ui/button";

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
        <div>
          <h2 className="text-4xl font-serif italic mb-2 tracking-tight">Global Overview</h2>
          <p className="text-muted-foreground font-light">Real-time intelligence from Warehouse, Stores & Digital Channels</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-primary text-secondary text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-none px-6">Export PDF</Button>
          <Button variant="outline" className="border-primary text-primary text-xs font-bold uppercase tracking-widest hover:bg-muted transition-colors rounded-none px-6">Print Summary</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-card p-6 border border-border relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 text-8xl opacity-5 font-serif italic">₹</div>
          <p className="text-[10px] uppercase font-bold text-muted-foreground mb-4 tracking-widest">Total Revenue (INR)</p>
          <p className="text-3xl font-serif">842,590.00</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 font-bold">+14%</span>
            <span className="text-[10px] text-muted-foreground">vs last month</span>
          </div>
        </div>
        <div className="bg-card p-6 border border-border relative overflow-hidden">
          <p className="text-[10px] uppercase font-bold text-muted-foreground mb-4 tracking-widest">E-com Conversion</p>
          <p className="text-3xl font-serif">4.82%</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 font-bold">+0.2%</span>
            <span className="text-[10px] text-muted-foreground">Industry Avg: 2.1%</span>
          </div>
        </div>
        <div className="bg-muted p-6 border border-border relative overflow-hidden">
          <p className="text-[10px] uppercase font-bold text-secondary-foreground mb-4 tracking-widest hover:text-primary">Active Franchises</p>
          <p className="text-3xl font-serif">24</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground">3 Pending Onboarding</span>
          </div>
        </div>
        <div className="bg-card p-6 border border-border relative overflow-hidden">
          <p className="text-[10px] uppercase font-bold text-muted-foreground mb-4 tracking-widest">Warehouse Capacity</p>
          <p className="text-3xl font-serif">72%</p>
          <div className="mt-4 w-full bg-secondary/30 h-1">
            <div className="bg-ring h-full" style={{width: '72%'}}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif italic text-xl">Store Performance Matrix</h3>
            <div className="flex gap-4 text-[10px] font-bold uppercase">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ring"></span> Sales</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Returns</span>
            </div>
          </div>
          <div className="flex items-end gap-3 h-48">
            <div className="flex-1 bg-muted flex flex-col justify-end gap-1 px-1">
              <div className="w-full bg-ring" style={{height: '80%'}}></div>
              <div className="w-full bg-primary" style={{height: '10%'}}></div>
              <span className="text-[8px] text-center mt-2 uppercase text-muted-foreground">Mumbai</span>
            </div>
            <div className="flex-1 bg-muted flex flex-col justify-end gap-1 px-1">
              <div className="w-full bg-ring" style={{height: '60%'}}></div>
              <div className="w-full bg-primary" style={{height: '15%'}}></div>
              <span className="text-[8px] text-center mt-2 uppercase text-muted-foreground">E-Commerce</span>
            </div>
            <div className="flex-1 bg-muted flex flex-col justify-end gap-1 px-1">
              <div className="w-full bg-ring" style={{height: '95%'}}></div>
              <div className="w-full bg-primary" style={{height: '5%'}}></div>
              <span className="text-[8px] text-center mt-2 uppercase text-muted-foreground">Delhi</span>
            </div>
            <div className="flex-1 bg-muted flex flex-col justify-end gap-1 px-1">
              <div className="w-full bg-ring" style={{height: '45%'}}></div>
              <div className="w-full bg-primary" style={{height: '20%'}}></div>
              <span className="text-[8px] text-center mt-2 uppercase text-muted-foreground">Pune</span>
            </div>
            <div className="flex-1 bg-muted flex flex-col justify-end gap-1 px-1">
              <div className="w-full bg-ring" style={{height: '70%'}}></div>
              <div className="w-full bg-primary" style={{height: '12%'}}></div>
              <span className="text-[8px] text-center mt-2 uppercase text-muted-foreground">BGLR</span>
            </div>
          </div>
        </div>
        
        <div className="bg-primary text-background p-8">
          <h3 className="font-serif italic text-xl mb-6 text-secondary">Critical Stock Alerts</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-muted-foreground/30 pb-3">
              <div>
                <p className="text-xs font-bold">Silk Embroidered Tunic</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Category: Festive Wear</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-secondary">4 units left</p>
                <span className="text-[8px] bg-red-900 px-1 text-white">RESTOCK</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-muted-foreground/30 pb-3">
              <div>
                <p className="text-xs font-bold">Rose Gold Cuff Bracelet</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Category: Jewelry</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-orange-400">12 units left</p>
                <span className="text-[8px] bg-orange-900 px-1 text-white">LOW</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-muted-foreground/30 pb-3">
              <div>
                <p className="text-xs font-bold">Leather Bucket Bag (Nude)</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Category: Accessories</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-red-500">0 units</p>
                <span className="text-[8px] bg-red-600 px-1 text-white">OUT</span>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-2 border border-secondary text-secondary text-[10px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all">
            Procurement Portal
          </button>
        </div>
      </div>
    </div>
  );
}
