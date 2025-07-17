'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserMenu } from '@/components/layout/user-menu';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { CartButton } from '@/components/cart/cart-button';
import { MiniCartDrawer } from '@/components/cart/cart-drawer';
import { mainNav } from '@/lib/config/navigation';
import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </Button>

            {/* Cart Drawer (Desktop) */}
            <div className="hidden md:block">
              <MiniCartDrawer />
            </div>

            {/* Cart Button (Mobile) */}
            <div className="md:hidden">
              <CartButton />
            </div>

            {/* User Menu */}
            <UserMenu />

            {/* Mobile Menu */}
            <MobileMenu>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </MobileMenu>
          </div>
        </div>
      </div>
    </header>
  );
}