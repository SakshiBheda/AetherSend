"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Send, Github, ArrowLeft } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast.success("Account created successfully!", {
        description: "Welcome to AetherSend. Let's start scheduling.",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#09090b] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[450px] px-6 py-12"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 mb-4">
            <Send className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white text-center">Join AetherSend</h1>
          <p className="text-zinc-400 mt-2 text-center">
            Create your account and start sending smarter today.
          </p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-zinc-300">Company Name</Label>
              <Input
                id="company"
                placeholder="Acme Inc."
                className="bg-black/40 border-white/5 h-11 focus:ring-primary/20"
                disabled={isLoading}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-zinc-300">First Name</Label>
                <Input
                  id="first-name"
                  placeholder="Jane"
                  className="bg-black/40 border-white/5 h-11 focus:ring-primary/20"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-zinc-300">Last Name</Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  className="bg-black/40 border-white/5 h-11 focus:ring-primary/20"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300">Email Address</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                className="bg-black/40 border-white/5 h-11 focus:ring-primary/20"
                disabled={isLoading}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" title="Password" className="text-zinc-300">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                className="bg-black/40 border-white/5 h-11 focus:ring-primary/20"
                disabled={isLoading}
                required
              />
            </div>
            <Button disabled={isLoading} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 mt-2">
              {isLoading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2 h-4 w-4 border-2 border-white/20 border-t-white rounded-full"
                />
              )}
              Create Account
            </Button>
          </form>

          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-zinc-500">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            className="w-full h-12 border-white/5 hover:bg-white/5 text-white rounded-xl"
            onClick={() => toast.info("GitHub signup coming soon")}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white hover:text-primary transition-colors font-medium underline underline-offset-4"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
