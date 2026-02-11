"use client"

import { Button } from "@/components/ui/button";
import { UserPlus, Download } from "lucide-react";
import { toast } from "sonner";

export function ContactsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Contacts</h1>
        <p className="text-muted-foreground mt-1">Manage your audience and segments.</p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="border-border/50 hover:bg-muted/50"
          onClick={() => toast.info("Preparing contact export...")}
        >
          <Download className="mr-2 h-4 w-4" /> Export
        </Button>
        <Button
          className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 active:scale-95 transition-all"
          onClick={() => toast.info("Add contact modal would open here")}
        >
          <UserPlus className="mr-2 h-4 w-4" /> Add Contact
        </Button>
      </div>
    </div>
  );
}
