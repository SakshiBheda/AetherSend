"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Sparkles } from "lucide-react"
import { format } from "date-fns"
import * as React from "react"

interface EditorFormProps {
  values: {
    subject: string
    from: string
    recipientGroup: string
    body: string
    scheduledAt: Date | null
  }
  onChange: (newValues: Partial<{
    subject: string
    from: string
    recipientGroup: string
    body: string
    scheduledAt: Date | null
  }>) => void
}

export function EditorForm({ values, onChange }: EditorFormProps) {
  const applySmartSuggestion = () => {
    // Mock suggestion: Next Tuesday at 10 AM
    const nextTuesday = new Date()
    nextTuesday.setDate(nextTuesday.getDate() + ((7 - nextTuesday.getDay() + 2) % 7 || 7))
    nextTuesday.setHours(10, 0, 0, 0)
    onChange({ scheduledAt: nextTuesday })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="subject">Subject Line</Label>
          <Input
            id="subject"
            placeholder="Enter campaign subject..."
            className="bg-background border-border/50"
            value={values.subject}
            onChange={(e) => onChange({ subject: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="from">From</Label>
            <Input
              id="from"
              placeholder="sender@example.com"
              className="bg-background border-border/50"
              value={values.from}
              onChange={(e) => onChange({ from: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="recipientGroup">Recipient Group</Label>
            <Input
              id="recipientGroup"
              placeholder="Select group..."
              className="bg-background border-border/50"
              value={values.recipientGroup}
              onChange={(e) => onChange({ recipientGroup: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Schedule Date & Time</Label>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`flex-1 justify-start text-left font-normal bg-background border-border/50 ${!values.scheduledAt && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {values.scheduledAt ? format(values.scheduledAt, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={values.scheduledAt || undefined}
                  onSelect={(date) => onChange({ scheduledAt: date })}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Input
              type="time"
              className="w-[120px] bg-background border-border/50"
              value={values.scheduledAt ? format(values.scheduledAt, "HH:mm") : ""}
              onChange={(e) => {
                const [hours, minutes] = e.target.value.split(':').map(Number)
                const newDate = values.scheduledAt ? new Date(values.scheduledAt) : new Date()
                newDate.setHours(hours, minutes)
                onChange({ scheduledAt: newDate })
              }}
            />
          </div>
          <div className="mt-4 p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 flex items-start gap-3 border-dashed">
             <Sparkles className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
             <div className="space-y-1">
               <p className="text-sm font-medium text-indigo-100/90">Smart Suggestions</p>
               <p className="text-xs text-muted-foreground">Based on your audience engagement patterns, Tuesday at 10:00 AM is optimal.</p>
               <Button
                variant="link"
                className="h-auto p-0 text-xs text-indigo-400 hover:text-indigo-300"
                onClick={applySmartSuggestion}
              >
                Apply suggestion
              </Button>
             </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Email Content (HTML/Markdown)</Label>
        <Textarea
          id="content"
          placeholder="Start writing your campaign content..."
          className="min-h-[400px] bg-background border-border/50 resize-none font-mono text-sm"
          value={values.body}
          onChange={(e) => onChange({ body: e.target.value })}
        />
      </div>
    </div>
  )
}
