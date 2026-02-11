"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Monitor, Smartphone } from "lucide-react"
import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface EditorPreviewProps {
  values: {
    subject: string
    from: string
    recipientGroup: string
    body: string
    scheduledAt: Date | null
  }
}

export function EditorPreview({ values }: EditorPreviewProps) {
  const [view, setView] = React.useState("desktop")

  return (
    <div className="w-full flex flex-col items-center gap-8 animate-in slide-in-from-right-4 duration-700">
      <div className="flex items-center justify-between w-full max-w-[800px]">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">Live Preview</h2>
        <Tabs value={view} onValueChange={setView} className="w-auto">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="desktop" className="px-4"><Monitor className="h-4 w-4" /></TabsTrigger>
            <TabsTrigger value="mobile" className="px-4"><Smartphone className="h-4 w-4" /></TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className={`transition-all duration-700 ease-in-out border border-border shadow-2xl bg-white text-black overflow-hidden relative ${view === "desktop" ? "w-full max-w-[800px] h-[600px] rounded-xl" : "w-[375px] h-[667px] rounded-[3rem] border-[12px] border-zinc-900"}`}>
        <div className="h-full w-full bg-white overflow-y-auto custom-scrollbar">
          <div className="p-10 space-y-8 text-black">
            <div className="flex justify-between items-center border-b pb-6 border-zinc-100">
              <div className="font-black text-2xl tracking-tighter italic">AETHER SEND</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">View in browser</div>
            </div>

            <div className="aspect-video w-full bg-zinc-100 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner relative">
               <Image
                 src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80"
                 alt="Hero"
                 fill
                 className="object-cover"
               />
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-extrabold tracking-tight leading-tight text-zinc-900">
                {values.subject || "The New Era of Smart Campaigns"}
              </h1>
              <div className="text-zinc-500 leading-relaxed text-lg whitespace-pre-wrap min-h-[100px]">
                {values.body || "Start writing your campaign content in the editor to see it appear here in real-time. You can use Markdown or plain text."}
              </div>
              <Button
                onClick={() => toast.success("This action would trigger your campaign's primary call-to-action.")}
                className="bg-indigo-600 text-white px-8 h-14 rounded-xl font-bold shadow-xl shadow-indigo-600/20 hover:scale-[1.02] transition-transform w-fit"
              >
                Take Action
              </Button>
            </div>

            <div className="pt-12 border-t border-zinc-100 text-[10px] text-zinc-400 text-center space-y-1 font-medium">
              <p>© 2026 AetherSend Inc. • 123 Innovation Way, San Francisco, CA</p>
              <p>You&apos;re receiving this because you&apos;re a valued member of our community. <span className="underline cursor-pointer">Unsubscribe</span></p>
            </div>
          </div>
        </div>
        {view === "mobile" && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full" />
        )}
      </div>
    </div>
  )
}
