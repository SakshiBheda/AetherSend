"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardMetrics } from "@/lib/mock-data";
import { Mail, MousePointer2, Percent, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function KPIStats() {
  const stats = [
    {
      label: "Open Rate",
      value: `${dashboardMetrics.openRate}%`,
      icon: Percent,
      description: "+2.1% from last month",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      label: "Click Rate",
      value: `${dashboardMetrics.clickRate}%`,
      icon: MousePointer2,
      description: "+0.5% from last month",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      label: "Total Sent",
      value: dashboardMetrics.totalSent.toLocaleString(),
      icon: Mail,
      description: "Across 24 campaigns",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      label: "Bounced",
      value: `${dashboardMetrics.bounced}%`,
      icon: AlertCircle,
      description: "Down from 1.5%",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={item}>
          <Card className="border-border/50 bg-card/50 backdrop-blur hover:bg-card transition-colors group">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
