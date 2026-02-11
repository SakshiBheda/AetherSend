"use client"

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";

export function LayoutHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/50 px-6 bg-background/50 backdrop-blur sticky top-0 z-10">
      <SidebarTrigger className="-ml-1" />
      <div className="h-4 w-[1px] bg-border mx-2" />
      <div className="flex-1">
        <button
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-muted/50"
          onClick={() => {
            const event = new KeyboardEvent('keydown', {
              key: 'k',
              metaKey: true,
              bubbles: true
            });
            document.dispatchEvent(event);
          }}
        >
          <Search className="h-4 w-4" />
          <span>Search or jump to...</span>
          <kbd className="ml-2 pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>
    </header>
  );
}
