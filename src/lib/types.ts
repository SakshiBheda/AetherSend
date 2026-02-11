export type Campaign = {
  id: string;
  subject: string;
  recipient_group: string;
  scheduled_for: string;
  status: "draft" | "scheduled" | "sending" | "sent" | "archive";
  metrics: {
    opens: number;
    clicks: number;
  };
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  status: "new" | "active" | "unsubscribed";
  last_active: string;
  avatar?: string;
};

export type DashboardMetrics = {
  openRate: number;
  clickRate: number;
  totalSent: number;
  bounced: number;
};

export type ActivityData = {
  date: string;
  volume: number;
};
