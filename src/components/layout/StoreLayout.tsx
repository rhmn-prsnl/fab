import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu size={20} />
            </Button>
            <Link to="/">
              <h1 className="text-2xl font-serif font-bold tracking-tight text-primary">FAB</h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>New Arrivals</NavLink>
            <NavLink to="/category/clothing" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Clothing</NavLink>
            <NavLink to="/category/accessories" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Accessories</NavLink>
            <NavLink to="/category/sale" className="text-destructive hover:text-destructive/80">Sale</NavLink>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search size={20} />
            </Button>
            <Link to="/admin" className={buttonVariants({ variant: "ghost", size: "icon" })}>
                 <User size={20} />
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 h-4 w-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-card border-t py-12 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
           <div>
             <h2 className="text-2xl font-serif font-bold text-primary mb-4">FAB</h2>
             <p className="text-sm text-muted-foreground">Elevating women's fashion with luxury, elegance, and minimal design.</p>
           </div>
           <div>
             <h3 className="font-medium mb-4">Shop</h3>
             <ul className="space-y-2 text-sm text-muted-foreground">
               <li><Link to="#" className="hover:text-primary">All Products</Link></li>
               <li><Link to="#" className="hover:text-primary">Clothing</Link></li>
               <li><Link to="#" className="hover:text-primary">Accessories</Link></li>
               <li><Link to="#" className="hover:text-primary">Sale</Link></li>
             </ul>
           </div>
           <div>
             <h3 className="font-medium mb-4">Support</h3>
             <ul className="space-y-2 text-sm text-muted-foreground">
               <li><Link to="#" className="hover:text-primary">Track Order</Link></li>
               <li><Link to="#" className="hover:text-primary">Return Policy</Link></li>
               <li><Link to="#" className="hover:text-primary">Contact Us</Link></li>
               <li><Link to="#" className="hover:text-primary">FAQs</Link></li>
             </ul>
           </div>
           <div>
             <h3 className="font-medium mb-4">Admin Portal</h3>
             <p className="text-sm text-muted-foreground mb-4">Internal staff access</p>
             <Link to="/admin" className={buttonVariants({ variant: "outline", size: "sm" })}>Go to Admin</Link>
           </div>
        </div>
      </footer>
    </div>
  );
}
