'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function SearchBar() {
  return (
    <form className="relative flex items-center w-full min-w-[400px]">
      <Input
        type="search"
        placeholder="Buscar peças, marcas ou modelos..."
        className="w-full pl-10 pr-12 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-border"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-[#0252A7] transition-colors"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Buscar</span>
      </button>
    </form>
  );
}