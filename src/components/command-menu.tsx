"use client"

import * as React from "react"
import {
  Calendar,
  Users,
  PenTool,
  LayoutDashboard,
  Cog,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useRouter } from "next/navigation"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => runCommand(() => router.push("/dashboard"))} className="cursor-pointer">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/scheduler"))} className="cursor-pointer">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Scheduler</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/editor"))} className="cursor-pointer">
            <PenTool className="mr-2 h-4 w-4" />
            <span>Editor</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/contacts"))} className="cursor-pointer">
            <Users className="mr-2 h-4 w-4" />
            <span>Contacts</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => runCommand(() => router.push("/settings"))} className="cursor-pointer">
            <Cog className="mr-2 h-4 w-4" />
            <span>Preferences</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
