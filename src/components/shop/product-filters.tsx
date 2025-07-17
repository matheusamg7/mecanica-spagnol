'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, X, SlidersHorizontal, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Category } from '@/types/database';
import { ProductFilters as ProductFiltersType } from '@/lib/api/products';
import { cn } from '@/lib/utils';

interface ProductFiltersProps {
  categories: Category[];
  filters: ProductFiltersType;
  onFiltersChange: (filters: ProductFiltersType) => void;
  onSortChange: (sort: string) => void;
  currentSort: string;
  className?: string;
  resultsCount?: number;
}

export function ProductFilters({
  categories,
  filters,
  onFiltersChange,
  onSortChange,
  currentSort,
  className,
  resultsCount,
}: ProductFiltersProps) {
  const [searchTerm, setSearchTerm] = useState(filters.search || '');
  const [priceRange, setPriceRange] = useState({
    min: filters.minPrice?.toString() || '',
    max: filters.maxPrice?.toString() || '',
  });

  // Update search term when filters change
  useEffect(() => {
    setSearchTerm(filters.search || '');
  }, [filters.search]);

  // Update price range when filters change
  useEffect(() => {
    setPriceRange({
      min: filters.minPrice?.toString() || '',
      max: filters.maxPrice?.toString() || '',
    });
  }, [filters.minPrice, filters.maxPrice]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFiltersChange({
      ...filters,
      search: searchTerm.trim() || undefined,
    });
  };

  const handlePriceRangeApply = () => {
    onFiltersChange({
      ...filters,
      minPrice: priceRange.min ? parseFloat(priceRange.min) : undefined,
      maxPrice: priceRange.max ? parseFloat(priceRange.max) : undefined,
    });
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    onFiltersChange({
      ...filters,
      category: checked ? categoryId : undefined,
    });
  };

  const handleFeaturedChange = (checked: boolean) => {
    onFiltersChange({
      ...filters,
      featured: checked ? true : undefined,
    });
  };

  const handleInStockChange = (checked: boolean) => {
    onFiltersChange({
      ...filters,
      inStock: checked ? true : undefined,
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({});
    setSearchTerm('');
    setPriceRange({ min: '', max: '' });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.search) count++;
    if (filters.category) count++;
    if (filters.minPrice || filters.maxPrice) count++;
    if (filters.featured) count++;
    if (filters.inStock) count++;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();

  // Desktop filters
  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <Label htmlFor="search">Buscar produtos</Label>
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <Input
            id="search"
            placeholder="Nome, SKU ou descrição..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-3">
        <Label>Faixa de preço</Label>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            className="flex-1"
          />
          <span className="self-center text-muted-foreground">-</span>
          <Input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            className="flex-1"
          />
        </div>
        <Button
          onClick={handlePriceRangeApply}
          variant="outline"
          size="sm"
          className="w-full"
        >
          Aplicar
        </Button>
      </div>

      <Separator />

      {/* Categories */}
      <div className="space-y-3">
        <Label>Categorias</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={filters.category === category.id.toString()}
                onCheckedChange={(checked) => 
                  handleCategoryChange(category.id.toString(), checked as boolean)
                }
              />
              <label
                htmlFor={`category-${category.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Quick Filters */}
      <div className="space-y-3">
        <Label>Filtros rápidos</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              checked={filters.featured || false}
              onCheckedChange={handleFeaturedChange}
            />
            <label
              htmlFor="featured"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Produtos em destaque
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={filters.inStock || false}
              onCheckedChange={handleInStockChange}
            />
            <label
              htmlFor="inStock"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Apenas em estoque
            </label>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <>
          <Separator />
          <Button
            variant="outline"
            onClick={clearAllFilters}
            className="w-full"
          >
            <X className="h-4 w-4 mr-2" />
            Limpar filtros ({activeFiltersCount})
          </Button>
        </>
      )}
    </div>
  );

  return (
    <div className={cn('space-y-4', className)}>
      {/* Header with search and sort */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search (mobile) */}
        <div className="flex-1 w-full sm:max-w-md">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" variant="outline">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Sort and Filter Actions */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Sort */}
          <Select value={currentSort} onValueChange={onSortChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="created_at-desc">Mais recentes</SelectItem>
              <SelectItem value="created_at-asc">Mais antigos</SelectItem>
              <SelectItem value="name-asc">Nome (A-Z)</SelectItem>
              <SelectItem value="name-desc">Nome (Z-A)</SelectItem>
              <SelectItem value="price-asc">Menor preço</SelectItem>
              <SelectItem value="price-desc">Maior preço</SelectItem>
            </SelectContent>
          </Select>

          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:hidden relative">
                <SlidersHorizontal className="h-4 w-4" />
                {activeFiltersCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FiltersContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Results count */}
      {resultsCount !== undefined && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Package className="h-4 w-4" />
          {resultsCount} produto{resultsCount !== 1 ? 's' : ''} encontrado{resultsCount !== 1 ? 's' : ''}
        </div>
      )}

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.search && (
            <Badge variant="secondary">
              Busca: {filters.search}
              <button
                onClick={() => onFiltersChange({ ...filters, search: undefined })}
                className="ml-2 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.category && (
            <Badge variant="secondary">
              {categories.find(c => c.id.toString() === filters.category)?.name}
              <button
                onClick={() => onFiltersChange({ ...filters, category: undefined })}
                className="ml-2 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {(filters.minPrice || filters.maxPrice) && (
            <Badge variant="secondary">
              R$ {filters.minPrice || 0} - R$ {filters.maxPrice || '∞'}
              <button
                onClick={() => onFiltersChange({ 
                  ...filters, 
                  minPrice: undefined, 
                  maxPrice: undefined 
                })}
                className="ml-2 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.featured && (
            <Badge variant="secondary">
              Em destaque
              <button
                onClick={() => onFiltersChange({ ...filters, featured: undefined })}
                className="ml-2 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.inStock && (
            <Badge variant="secondary">
              Em estoque
              <button
                onClick={() => onFiltersChange({ ...filters, inStock: undefined })}
                className="ml-2 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}

      {/* Desktop Filters Sidebar */}
      <div className="hidden sm:block">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtros
              {activeFiltersCount > 0 && (
                <Badge variant="secondary">{activeFiltersCount}</Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FiltersContent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}