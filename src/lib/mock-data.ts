import { Campaign, Contact, DashboardMetrics, ActivityData } from "./types";

export const campaigns: Campaign[] = [
  {
    id: "uuid-1",
    subject: "Product Launch: The New Era",
    recipient_group: "Beta Testers",
    scheduled_for: "2026-03-01T09:00:00Z",
    status: "scheduled",
    metrics: {
      opens: 0,
      clicks: 0
    }
  },
  {
    id: "uuid-2",
    subject: "Weekly Newsletter #42",
    recipient_group: "All Subscribers",
    scheduled_for: "2026-02-10T10:00:00Z",
    status: "sent",
    metrics: {
      opens: 1240,
      clicks: 342
    }
  },
  {
    id: "uuid-3",
    subject: "February Promotions",
    recipient_group: "VIP Customers",
    scheduled_for: "2026-02-15T14:30:00Z",
    status: "draft",
    metrics: {
      opens: 0,
      clicks: 0
    }
  },
  {
    id: "uuid-4",
    subject: "Re-engagement Campaign",
    recipient_group: "Inactive Users",
    scheduled_for: "2026-03-05T08:00:00Z",
    status: "scheduled",
    metrics: {
      opens: 0,
      clicks: 0
    }
  },
  {
    id: "uuid-5",
    subject: "Summer Collection Sneak Peek",
    recipient_group: "Waitlist",
    scheduled_for: "2026-01-20T12:00:00Z",
    status: "archive",
    metrics: {
      opens: 450,
      clicks: 89
    }
  }
];

export const contacts: Contact[] = [
  {
    id: "c1",
    name: "Alex Rivera",
    email: "alex@example.com",
    status: "active",
    last_active: "2 mins ago",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    id: "c2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    status: "new",
    last_active: "1 hour ago",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: "c3",
    name: "Marcus Thorne",
    email: "marcus@example.com",
    status: "unsubscribed",
    last_active: "2 days ago",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    id: "c4",
    name: "Elena Rodriguez",
    email: "elena@example.com",
    status: "active",
    last_active: "5 mins ago",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    id: "c5",
    name: "Jordan Smith",
    email: "jordan@example.com",
    status: "active",
    last_active: "10 mins ago",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan"
  }
];

export const dashboardMetrics: DashboardMetrics = {
  openRate: 64.2,
  clickRate: 12.5,
  totalSent: 12840,
  bounced: 1.2
};

export const activityData: ActivityData[] = [
  { date: "Feb 01", volume: 400 },
  { date: "Feb 05", volume: 300 },
  { date: "Feb 10", volume: 900 },
  { date: "Feb 15", volume: 500 },
  { date: "Feb 20", volume: 1500 },
  { date: "Feb 25", volume: 1100 },
  { date: "Mar 01", volume: 2400 },
];
