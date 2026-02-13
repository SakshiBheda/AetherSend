"use client"

import * as React from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { User, Bell, Shield, Key } from "lucide-react"

export default function SettingsPage() {
  const handleSave = () => {
    toast.success("Settings saved successfully")
  }

  return (
    <PageWrapper>
      <div className="p-8 max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Preferences</h1>
          <p className="text-muted-foreground">Manage your account settings and application preferences.</p>
        </div>

        <div className="grid gap-8">
          {/* Profile Section */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <CardTitle>Profile</CardTitle>
              </div>
              <CardDescription>Your personal information and avatar.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Alex Rivera" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="alex@example.com" className="bg-background" />
                </div>
              </div>
              <Button onClick={handleSave}>Update Profile</Button>
            </CardContent>
          </Card>

          {/* Notifications Section */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-amber-500" />
                <CardTitle>Notifications</CardTitle>
              </div>
              <CardDescription>Configure how you receive alerts and updates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive daily summaries of your campaign performance.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator className="bg-border/50" />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Security Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified of new login attempts or key changes.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* API Keys Section */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Key className="h-5 w-5 text-indigo-500" />
                <CardTitle>API Configuration</CardTitle>
              </div>
              <CardDescription>Manage your API keys for third-party integrations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">Public API Key</Label>
                <div className="flex gap-2">
                  <Input id="api-key" value="as_live_51P..." readOnly className="bg-background font-mono" />
                  <Button variant="outline" onClick={() => {
                    navigator.clipboard.writeText("as_live_51P...")
                    toast.success("API Key copied to clipboard")
                  }}>Copy</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-rose-500/20 bg-rose-500/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-rose-500" />
                <CardTitle className="text-rose-500">Danger Zone</CardTitle>
              </div>
              <CardDescription>Irreversible actions for your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" onClick={() => toast.error("Delete functionality is disabled in demo")}>
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  )
}
