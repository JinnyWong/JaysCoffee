"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
        Cart Items:
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      <Button onClick={() => window.location.href="https://jayscoffee-map.vercel.app"} className="flex items-center rounded-full bg-black px-4 py-2">
        Map to Shop
      </Button>
      <Button onClick={() => window.location.href="https://jayscoffee-backend.vercel.app"} className="flex items-center rounded-full bg-black px-4 py-2">
        Admin Dashboard
      </Button>
      
    </div>
  );
}
 
export default NavbarActions;