"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav2({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.codenight_logo />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}


export function MainNav({ items }: MainNavProps) {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <Icons.menuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#">
            <Icons.codenight_logo />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
          <div className="grid gap-2 py-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link key={index} href={item.href} className="flex w-full items-center py-2 text-lg font-semibold">
                    {item.title}
                  </Link>
                ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="#">
        <Icons.codenight_logo />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {items?.map(
            (item, index) =>
              item.href && (
                <NavigationMenuLink  key={index} asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}



