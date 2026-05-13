import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart } from "lucide-react";

export function HomePage() {
  const trendingProducts = [
    { id: 1, name: "Silk Chiffon Blouse", price: "$145.00", category: "Tops", image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Pleated Midi Skirt", price: "$120.00", category: "Skirts", image: "https://images.unsplash.com/photo-1583496920970-87747e92ea01?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Cashmere Turtleneck", price: "$295.00", category: "Sweaters", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Tailored Wide-Leg Trousers", price: "$180.00", category: "Pants", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary/50 py-24 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
              Spring Collection 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
              Elevate Your <br />
              <span className="text-primary italic font-light">Everyday Elegance</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Discover our latest collection of premium women's wear, crafted with the finest materials for an effortless luxury feel.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full px-8">
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View Lookbook
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 w-full max-w-md ml-auto">
               <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" alt="Fashion model" className="object-cover w-full h-full" />
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/10 -z-0 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Trending Now</h2>
            <p className="text-muted-foreground">The most loved pieces of the season.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex gap-2">
            View All <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full shadow-lg gap-2 bg-white/90 text-black hover:bg-white backdrop-blur-sm">
                    <ShoppingCart size={16} /> Add to Cart
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground tracking-wide uppercase">{product.category}</p>
                <h3 className="font-medium text-foreground">{product.name}</h3>
                <p className="text-primary font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Editorial Section */}
      <section className="bg-primary text-primary-foreground py-24">
         <div className="container mx-auto px-4 text-center max-w-3xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">"Fashion is the armor to survive the reality of everyday life."</h2>
            <p className="tracking-widest uppercase text-sm font-medium opacity-80">— Bill Cunningham</p>
         </div>
      </section>
    </div>
  );
}
