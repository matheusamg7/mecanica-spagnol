// API de Produtos - Mecânica Spagnol

import { supabase } from '@/lib/supabase/client';
import { Product, Category } from '@/types/database';

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  featured?: boolean;
  inStock?: boolean;
}

export interface ProductsQuery {
  filters?: ProductFilters;
  sortBy?: 'name' | 'price' | 'created_at';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface ProductsResponse {
  success: boolean;
  data?: {
    products: Product[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  error?: string;
}

export interface ProductResponse {
  success: boolean;
  data?: Product;
  error?: string;
}

export interface CategoriesResponse {
  success: boolean;
  data?: Category[];
  error?: string;
}

// Buscar produtos com filtros e paginação
export async function getProducts(query: ProductsQuery = {}): Promise<ProductsResponse> {
  try {
    const {
      filters = {},
      sortBy = 'created_at',
      sortOrder = 'desc',
      page = 1,
      limit = 20
    } = query;

    let queryBuilder = supabase
      .from('products')
      .select(`
        *,
        category:categories(*)
      `, { count: 'exact' })
      .eq('is_active', true);

    // Aplicar filtros
    if (filters.category) {
      queryBuilder = queryBuilder.eq('category_id', filters.category);
    }

    if (filters.minPrice) {
      queryBuilder = queryBuilder.gte('price', filters.minPrice);
    }

    if (filters.maxPrice) {
      queryBuilder = queryBuilder.lte('price', filters.maxPrice);
    }

    if (filters.search) {
      queryBuilder = queryBuilder.or(
        `name.ilike.%${filters.search}%,description.ilike.%${filters.search}%,sku.ilike.%${filters.search}%`
      );
    }

    if (filters.featured) {
      queryBuilder = queryBuilder.eq('is_featured', true);
    }

    if (filters.inStock) {
      queryBuilder = queryBuilder.gt('stock_quantity', 0);
    }

    // Aplicar ordenação
    queryBuilder = queryBuilder.order(sortBy, { ascending: sortOrder === 'asc' });

    // Aplicar paginação
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    queryBuilder = queryBuilder.range(from, to);

    const { data, error, count } = await queryBuilder;

    if (error) {
      return {
        success: false,
        error: 'Erro ao buscar produtos',
      };
    }

    const totalPages = Math.ceil((count || 0) / limit);

    return {
      success: true,
      data: {
        products: data || [],
        total: count || 0,
        page,
        limit,
        totalPages,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao buscar produtos',
    };
  }
}

// Buscar produto por slug
export async function getProductBySlug(slug: string): Promise<ProductResponse> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*)
      `)
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) {
      return {
        success: false,
        error: 'Produto não encontrado',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro ao buscar produto',
    };
  }
}

// Buscar produto por ID
export async function getProductById(id: string): Promise<ProductResponse> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*)
      `)
      .eq('id', id)
      .eq('is_active', true)
      .single();

    if (error) {
      return {
        success: false,
        error: 'Produto não encontrado',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro ao buscar produto',
    };
  }
}

// Buscar todas as categorias ativas
export async function getCategories(): Promise<CategoriesResponse> {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('name', { ascending: true });

    if (error) {
      return {
        success: false,
        error: 'Erro ao buscar categorias',
      };
    }

    return {
      success: true,
      data: data || [],
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao buscar categorias',
    };
  }
}

// Buscar produtos em destaque
export async function getFeaturedProducts(limit: number = 8): Promise<ProductsResponse> {
  try {
    const { data, error, count } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*)
      `, { count: 'exact' })
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      return {
        success: false,
        error: 'Erro ao buscar produtos em destaque',
      };
    }

    return {
      success: true,
      data: {
        products: data || [],
        total: count || 0,
        page: 1,
        limit,
        totalPages: 1,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao buscar produtos em destaque',
    };
  }
}

// Buscar produtos relacionados (mesma categoria)
export async function getRelatedProducts(productId: string, categoryId: number, limit: number = 4): Promise<ProductsResponse> {
  try {
    const { data, error, count } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*)
      `, { count: 'exact' })
      .eq('is_active', true)
      .eq('category_id', categoryId)
      .neq('id', productId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      return {
        success: false,
        error: 'Erro ao buscar produtos relacionados',
      };
    }

    return {
      success: true,
      data: {
        products: data || [],
        total: count || 0,
        page: 1,
        limit,
        totalPages: 1,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao buscar produtos relacionados',
    };
  }
}

// Buscar produtos por categoria
export async function getProductsByCategory(categoryId: number, query: Omit<ProductsQuery, 'filters'> = {}): Promise<ProductsResponse> {
  return getProducts({
    ...query,
    filters: {
      category: categoryId.toString(),
    },
  });
}

// Buscar sugestões de produtos (para autocomplete)
export async function searchProductSuggestions(query: string, limit: number = 5): Promise<ProductsResponse> {
  if (!query.trim()) {
    return {
      success: true,
      data: {
        products: [],
        total: 0,
        page: 1,
        limit,
        totalPages: 0,
      },
    };
  }

  try {
    const { data, error, count } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*)
      `, { count: 'exact' })
      .eq('is_active', true)
      .or(`name.ilike.%${query}%,sku.ilike.%${query}%`)
      .order('name', { ascending: true })
      .limit(limit);

    if (error) {
      return {
        success: false,
        error: 'Erro ao buscar sugestões',
      };
    }

    return {
      success: true,
      data: {
        products: data || [],
        total: count || 0,
        page: 1,
        limit,
        totalPages: 1,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao buscar sugestões',
    };
  }
}