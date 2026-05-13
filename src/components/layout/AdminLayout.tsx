import { Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-hidden">
      <aside className="w-64 bg-card border-r flex flex-col h-screen sticky top-0 hidden md:flex shrink-0">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
            <span className="text-secondary font-serif text-xl font-bold italic uppercase">F</span>
          </div>
          <h1 className="text-2xl font-serif tracking-widest uppercase italic font-black">FAB</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <NavItem to="/admin" end label="Dashboard" />
          <NavItem to="/admin/warehouse" label="Warehouse" />
          <NavItem to="/admin/stores" label="Store Management" />
          <NavItem to="/admin/pos" label="POS Billing" />
          <NavItem to="/admin/orders" label="E-commerce" />
          <NavItem to="/admin/products" label="Franchise Hub" />
          <NavItem to="/admin/users" label="HR & RBAC" />
        </nav>
        
        <div className="p-6 border-t">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary border-2 border-card shadow-sm flex items-center justify-center text-primary-foreground font-bold">SA</div>
            <div>
              <p className="text-xs font-bold">Super Admin</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Head Office Access</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-20 bg-card border-b px-10 flex items-center justify-between shrink-0">
          <div className="relative w-full max-w-sm hidden md:block">
            <input type="text" placeholder="Search anything..." className="w-full bg-muted border-none px-4 py-2 text-sm italic focus:ring-1 focus:ring-ring transition-all rounded-none outline-none" />
          </div>
          <div className="md:hidden">
            <h1 className="text-xl font-serif tracking-widest uppercase italic font-black">FAB</h1>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="cursor-pointer hover:text-foreground transition-colors">Support</span>
              <span className="cursor-pointer hover:text-foreground transition-colors">Logs</span>
              <span className="cursor-pointer hover:text-foreground transition-colors">Settings</span>
            </div>
            <div className="relative flex items-center h-10 w-10 justify-center bg-muted rounded-full cursor-pointer">
              <span className="absolute top-0 right-0 w-3 h-3 bg-secondary border-2 border-card rounded-full"></span>
              <Settings className="w-5 h-5 text-foreground" />
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {children}
        </div>
        <footer className="h-12 shrink-0 bg-card border-t px-10 flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-widest">
          <div className="flex gap-10">
            <span>Server Status: <span className="text-emerald-500 font-bold">Optimal</span></span>
            <span>Last Sync: Just now</span>
          </div>
          <div>FAB Enterprise Ecosystem</div>
        </footer>
      </main>
    </div>
  );
}

function NavItem({ to, label, end = false }: { to: string; label: string; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn(
          "px-4 py-3 flex items-center gap-3 font-medium cursor-pointer transition-colors text-sm",
          isActive 
            ? "bg-background border-l-4 border-secondary text-foreground" 
            : "border-l-4 border-transparent text-muted-foreground hover:text-foreground"
        )
      }
    >
      {({ isActive }) => (
        <>
          {isActive ? (
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
          ) : (
            <div className="w-1.5 h-1.5 border border-muted-foreground rotate-45 shrink-0"></div>
          )}
          {label}
        </>
      )}
    </NavLink>
  );
}
