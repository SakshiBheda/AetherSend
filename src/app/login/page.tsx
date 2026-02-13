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

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get("email") as string

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      if (email === "karmarealtors1@gmail.com") {
        toast.success("Welcome back!", {
          description: "Login successful.",
        })
        router.push("/dashboard")
      } else {
        toast.error("Invalid credentials", {
          description: "Please use the demo email: karmarealtors1@gmail.com",
        })
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#09090b] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

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
        className="w-full max-w-[400px] px-6"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 mb-4">
            <Send className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
          <p className="text-zinc-400 mt-2 text-center">
            Sign in to your AetherSend account to continue.
          </p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300">Email Address</Label>
              <Input
                id="email"
                name="email"
                placeholder="karmarealtors1@gmail.com"
                type="email"
                className="bg-black/40 border-white/5 h-12 focus:ring-primary/20"
                disabled={isLoading}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" title="Password" className="text-zinc-300">Password</Label>
                <button
                  type="button"
                  onClick={() => toast.info("Password reset link sent to your email (simulated).")}
                  className="text-xs text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                className="bg-black/40 border-white/5 h-12 focus:ring-primary/20"
                disabled={isLoading}
                required
              />
            </div>
            <Button disabled={isLoading} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20">
              {isLoading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2 h-4 w-4 border-2 border-white/20 border-t-white rounded-full"
                />
              )}
              Sign In
            </Button>
          </form>

          <div className="relative my-8">
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
            onClick={() => toast.info("GitHub login coming soon")}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-white hover:text-primary transition-colors font-medium underline underline-offset-4"
          >
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
