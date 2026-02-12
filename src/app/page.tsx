"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Mail,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Clock,
  CheckCircle2,
  ChevronRight,
  Globe
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] text-white selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">AetherSend</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="text-zinc-400 hover:text-white">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-zinc-200 rounded-full px-6">
              <Link href="/signup">Start for free</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-primary/10 blur-[120px] rounded-full -z-10 opacity-50" />
          <div className="absolute top-1/4 right-0 w-1/3 h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

          <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">
                <Zap className="h-3 w-3 fill-current" /> Next-Gen Email Infrastructure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500"
            >
              SCHEDULE EMAILS <br /> WITH PRECISION.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
            >
              AetherSend empowers modern teams to orchestrate high-impact email campaigns with AI-driven timing and real-time analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button size="lg" asChild className="h-14 px-10 rounded-full text-base font-bold bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30">
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-full text-base font-bold border-white/10 hover:bg-white/5">
                View Demo
              </Button>
            </motion.div>

            {/* Dashboard Preview Component */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-20 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="h-8 bg-zinc-800/50 border-b border-white/5 flex items-center px-4 gap-2">
                   <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
                   <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
                   <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
                </div>
                <div className="p-4 md:p-8 bg-black/40">
                   <div className="grid grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-20 md:h-28 rounded-xl bg-zinc-800/30 border border-white/5 animate-pulse"></div>
                      ))}
                   </div>
                   <div className="mt-6 h-40 md:h-64 rounded-xl bg-zinc-800/20 border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <BarChart3 className="h-12 w-12 text-zinc-700" />
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-32 space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Performance</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Everything you need to deliver world-class email experiences at any scale.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Smart Scheduling",
                desc: "AI-driven engagement patterns determine the optimal moment for every recipient.",
                color: "text-amber-500"
              },
              {
                icon: Shield,
                title: "Safe Delivery",
                desc: "Enterprise-grade infrastructure ensuring your emails land exactly where they should.",
                color: "text-emerald-500"
              },
              {
                icon: BarChart3,
                title: "Real-time Metrics",
                desc: "Deep-dive analytics that update the millisecond your audience interacts.",
                color: "text-primary"
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 transition-colors space-y-4 group"
              >
                <div className={`h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center ${f.color} group-hover:scale-110 transition-transform`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-32">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-r from-primary to-indigo-600 p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">READY TO SEND <br /> BETTER EMAILS?</h2>
            <p className="text-white/80 text-xl max-w-xl mx-auto">Join 10,000+ teams who use AetherSend to drive more engagement and revenue.</p>
            <div className="pt-4">
               <Button size="lg" asChild className="h-16 px-12 rounded-full text-lg font-bold bg-white text-black hover:bg-zinc-100">
                 <Link href="/signup">Get Started Now</Link>
               </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-bold tracking-tight">AetherSend</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p className="text-sm text-zinc-600">© 2026 AetherSend Inc.</p>
        </div>
      </footer>
    </div>
  )
}
