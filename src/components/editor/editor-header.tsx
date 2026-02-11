"use client"

import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { toast } from "sonner"
import confetti from "canvas-confetti"

interface EditorHeaderProps {
  onSchedule?: () => void
}

export function EditorHeader({ onSchedule }: EditorHeaderProps) {
  const handleSchedule = () => {
    if (onSchedule) onSchedule()

    toast.success("Campaign scheduled successfully!", {
      description: "Your campaign is now in the queue.",
    })

    // Confetti effect
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#a855f7', '#ec4899']
    })
  }

  return (
    <div className="border-b border-border bg-card/50 px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-foreground">Create Campaign</h1>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={() => toast.success("Saved to drafts")}>Save Draft</Button>
        <Button
          className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
          onClick={handleSchedule}
        >
          <Send className="mr-2 h-4 w-4" /> Schedule
        </Button>
      </div>
    </div>
  )
}
