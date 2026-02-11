"use client"

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export function SchedulerHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Scheduler</h1>
        <p className="text-muted-foreground mt-1">Manage your email campaigns and schedule.</p>
      </div>
      <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 active:scale-95 transition-all">
        <Link href="/editor">
          <Plus className="mr-2 h-4 w-4" /> New Campaign
        </Link>
      </Button>
    </div>
  );
}
