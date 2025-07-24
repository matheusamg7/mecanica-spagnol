'use client';

import { MapPin, Phone } from 'lucide-react';

export function TopBar() {
  return (
    <div className="w-full bg-[#0252A7] text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-sm gap-8">
          <span className="font-medium">Maior estoque de peças da região</span>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>Av. Dom Pedro II, 120, Centro, Tapejara/RS</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            <a href="tel:+555433441455" className="hover:underline">(54) 3344-1455</a>
          </div>
        </div>
      </div>
    </div>
  );
}