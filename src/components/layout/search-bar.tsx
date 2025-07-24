'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SearchBar() {
  return (
    <form className="relative flex items-center w-full min-w-[400px]">
      <Input
        type="search"
        placeholder="Buscar peças, marcas ou modelos..."
        className="w-full pl-10 pr-24 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-border"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Button
        type="submit"
        size="sm"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-9 hover:opacity-90 transition-opacity"
        style={{ backgroundColor: '#0252A7', color: '#FFFFFF' }}
      >
        Buscar
      </Button>
    </form>
  );
}