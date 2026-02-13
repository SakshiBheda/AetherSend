"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Mail,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Globe,
  Star,
  MessageSquare,
  Layout
} from "lucide-react"

const words = ["PRECISION", "INTELLIGENCE", "SPEED", "CONFIDENCE", "IMPACT"]

export default function LandingPage() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] text-white selection:bg-primary/30 overflow-x-hidden">
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
            <button onClick={() => toast.info("Features section coming soon")} className="hover:text-white transition-colors">Features</button>
            <button onClick={() => toast.info("Solutions overview coming soon")} className="hover:text-white transition-colors">Solutions</button>
            <button onClick={() => toast.info("Pricing plans coming soon")} className="hover:text-white transition-colors">Pricing</button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="text-zinc-400 hover:text-white">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-zinc-200 rounded-full px-6 transition-all active:scale-95">
              <Link href="/signup">Start for free</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 overflow-hidden">
          {/* Animated Background Gradients */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-primary/10 blur-[120px] rounded-full -z-10"
          />
          <div className="absolute top-1/4 right-0 w-1/3 h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

          <div className="max-w-6xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Next-Gen Email Infrastructure
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white"
              >
                SCHEDULE EMAILS <br /> WITH{" "}
                <div className="inline-block relative min-w-[280px] md:min-w-[500px] h-[1em] overflow-hidden align-top">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[index]}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -80, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute left-0 right-0 text-transparent bg-clip-text bg-gradient-to-b from-primary to-indigo-400"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              AetherSend empowers high-growth teams to orchestrate complex email workflows with AI-driven timing and deep analytics. Landing in the inbox, every single time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
            >
              <Button size="lg" asChild className="h-16 px-12 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all hover:scale-105 active:scale-95">
                <Link href="/signup">
                  Get Started for free <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-12 rounded-full text-lg font-bold border-white/10 hover:bg-white/5 transition-all"
                onClick={() => toast.info("Demo environment is being prepared. Check back shortly!")}
              >
                View Demo
              </Button>
            </motion.div>

            {/* Interactive Preview */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="mt-24 relative group max-w-5xl mx-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-indigo-600/50 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0c0c0e] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="h-10 bg-zinc-900/50 border-b border-white/5 flex items-center px-6 gap-2">
                   <div className="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
                   <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                   <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
                   <div className="ml-4 h-4 w-64 rounded bg-white/5"></div>
                </div>
                <div className="p-8 md:p-12">
                   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {[
                        { label: "Open Rate", val: "94.2%", color: "text-emerald-500" },
                        { label: "Click Rate", val: "12.8%", color: "text-primary" },
                        { label: "Scheduled", val: "1,204", color: "text-amber-500" },
                        { label: "Bounced", val: "0.12%", color: "text-rose-500" }
                      ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                           <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                           <p className={`text-3xl font-black ${stat.color}`}>{stat.val}</p>
                        </div>
                      ))}
                   </div>
                   <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 h-80 rounded-2xl bg-white/[0.02] border border-white/5 p-8 relative flex items-center justify-center">
                         <div className="w-full space-y-6">
                            {[1, 2, 3].map(j => (
                              <div key={j} className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-white/5 shrink-0" />
                                <div className="space-y-2 flex-grow">
                                   <div className="h-3 w-1/3 rounded bg-white/10" />
                                   <div className="h-2 w-full rounded bg-white/5" />
                                </div>
                                <div className="h-6 w-20 rounded-full bg-primary/20" />
                              </div>
                            ))}
                         </div>
                      </div>
                      <div className="h-80 rounded-2xl bg-primary/10 border border-primary/20 p-8 flex flex-col justify-between">
                         <div className="space-y-4">
                           <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                             <Zap className="h-6 w-6 text-white" />
                           </div>
                           <h4 className="text-xl font-bold">AI Smart Time</h4>
                           <p className="text-sm text-zinc-400">Optimization engine active. Suggesting 10:45 AM for peak engagement.</p>
                         </div>
                         <Button
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
                            onClick={() => toast.success("AI Optimization applied to your schedule!")}
                         >
                            Apply Optimization
                         </Button>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Feature Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-40">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">THE NEW STANDARD FOR <br /> EMAIL TEAMS.</h2>
              <p className="text-zinc-400 text-xl leading-relaxed">Stop guessing when your audience is active. AetherSend uses behavioral data to make sure your message is at the top of the stack.</p>
            </div>
            <div className="flex gap-4">
               <div className="p-4 rounded-2xl border border-white/5 bg-zinc-900 flex items-center gap-3">
                  <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                  <span className="font-bold">4.9/5 Rating</span>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Clock,
                title: "Temporal AI",
                desc: "Our engine predicts exactly when each recipient is most likely to click, across 140+ countries.",
                color: "bg-amber-500/10 text-amber-500"
              },
              {
                icon: Shield,
                title: "Inbox Authority",
                desc: "Built-in warm-up protocols and reputation monitoring to keep you out of the spam folder.",
                color: "bg-emerald-500/10 text-emerald-500"
              },
              {
                icon: BarChart3,
                title: "Deep Attribution",
                desc: "Go beyond opens and clicks. Track full user journeys from email send to conversion.",
                color: "bg-primary/10 text-primary"
              },
              {
                icon: MessageSquare,
                title: "Dynamic Content",
                desc: "Personalize every aspect of your email using our powerful Liquid-based templating engine.",
                color: "bg-indigo-500/10 text-indigo-500"
              },
              {
                icon: Layout,
                title: "Visual Workflow",
                desc: "Drag and drop to build complex sequence logic with branch conditions and delays.",
                color: "bg-rose-500/10 text-rose-500"
              },
              {
                icon: Globe,
                title: "Global CDN",
                desc: "Lightning fast asset delivery via our edge network, ensuring your images load instantly.",
                color: "bg-sky-500/10 text-sky-500"
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300 group"
              >
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-8 ${f.color} group-hover:scale-110 transition-transform duration-500`}>
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Animated Carousel Section / Scrolling Content */}
        <section className="py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden">
           <div className="flex whitespace-nowrap animate-marquee">
              {[1, 2].map(k => (
                <div key={k} className="flex gap-20 items-center px-10">
                   {["NETFLIX", "STRIPE", "LINEAR", "AIRBNB", "REVOLUT", "RAILWAY", "VERCEL"].map(brand => (
                     <span key={brand} className="text-4xl md:text-6xl font-black text-white/10 tracking-tighter hover:text-white/30 transition-colors cursor-default select-none">
                       {brand}
                     </span>
                   ))}
                </div>
              ))}
           </div>
        </section>

        {/* High-Impact CTA */}
        <section className="px-6 py-40">
          <div className="max-w-6xl mx-auto relative">
            <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full" />
            <div className="relative rounded-[3.5rem] bg-gradient-to-br from-indigo-600 via-primary to-purple-600 p-12 md:p-32 text-center space-y-12 overflow-hidden shadow-2xl">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 blur-[100px] rounded-full"
              />
              <div className="space-y-6">
                <h2 className="text-5xl md:text-8xl font-black tracking-tight text-white leading-[0.9]">READY TO SCALE <br /> YOUR IMPACT?</h2>
                <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto font-medium">Join 2,500+ engineering teams building the future of communication.</p>
              </div>
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Button size="lg" asChild className="h-20 px-16 rounded-full text-xl font-bold bg-white text-black hover:bg-zinc-100 shadow-2xl transition-all hover:scale-105 active:scale-95">
                   <Link href="/signup">Start Sending for free</Link>
                 </Button>
                 <span className="text-white/60 font-medium">No credit card required.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#09090b] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">AetherSend</span>
            </div>
            <p className="text-zinc-500 text-lg max-w-sm">The high-performance mail scheduling infrastructure for modern software teams.</p>
            <div className="flex gap-6">
              {["Twitter", "LinkedIn", "GitHub", "Discord"].map(social => (
                <button
                  key={social}
                  onClick={() => toast.info(`Following AetherSend on ${social}`)}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Product</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><button onClick={() => toast.info("Features details coming soon")} className="hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => toast.info("Pricing details coming soon")} className="hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={() => toast.info("Documentation is being updated")} className="hover:text-white transition-colors">Documentation</button></li>
              <li><button onClick={() => toast.info("API Reference coming soon")} className="hover:text-white transition-colors">API Reference</button></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Company</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><button onClick={() => toast.info("About Us page coming soon")} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => toast.info("We are currently hiring! Check back soon.")} className="hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={() => toast.info("Privacy Policy updated 2026")} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => toast.info("Terms of Service updated 2026")} className="hover:text-white transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-zinc-600 text-sm">
          <p>© 2026 AetherSend Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Status: All systems operational</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
