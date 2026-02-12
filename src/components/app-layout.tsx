"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CommandMenu } from "@/components/command-menu"
import { LayoutHeader } from "@/components/layout-header"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Public routes that don't need the sidebar/header
  const isPublicRoute = pathname === "/" || pathname === "/login" || pathname === "/signup"

  if (isPublicRoute) {
    return <>{children}</>
  }

  return (
    <SidebarProvider>
      <TooltipProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex flex-col flex-1 min-h-screen bg-background relative">
            <LayoutHeader />
            <main className="flex-1">
              {children}
            </main>
          </SidebarInset>
        </div>
        <CommandMenu />
      </TooltipProvider>
    </SidebarProvider>
  )
}
