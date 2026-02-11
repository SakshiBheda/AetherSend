"use client"

import * as React from "react"
import { EditorHeader } from "@/components/editor/editor-header"
import { EditorForm } from "@/components/editor/editor-form"
import { EditorPreview } from "@/components/editor/editor-preview"
import { useRouter } from "next/navigation"

export default function EditorPage() {
  const router = useRouter()
  const [content, setContent] = React.useState<{
    subject: string
    from: string
    recipientGroup: string
    body: string
    scheduledAt: Date | null
  }>({
    subject: "Product Launch: The New Era",
    from: "sender@example.com",
    recipientGroup: "Beta Testers",
    body: "We're excited to announce the launch of our latest features. Experience a whole new way to manage your workflows with our AI-powered scheduling engine.",
    scheduledAt: new Date("2026-03-01T10:00:00Z"),
  })

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <EditorHeader onSchedule={() => {
        setTimeout(() => {
          router.push("/scheduler")
        }, 1500)
      }} />
      <div className="flex-1 flex overflow-hidden">
        <div className="w-[480px] border-r border-border bg-card/20 overflow-y-auto p-8 custom-scrollbar">
          <EditorForm
            values={content}
            onChange={(newValues) => setContent(prev => ({ ...prev, ...newValues }))}
          />
        </div>
        <div className="flex-1 bg-muted/10 overflow-y-auto p-12 flex flex-col items-center custom-scrollbar">
          <EditorPreview values={content} />
        </div>
      </div>
    </div>
  )
}
