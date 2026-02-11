import { KPIStats } from "@/components/dashboard/kpi-stats";
import { ActivityGraph } from "@/components/dashboard/activity-graph";
import { UpcomingQueue } from "@/components/dashboard/upcoming-queue";
import { PageWrapper } from "@/components/page-wrapper";

export default function DashboardPage() {
  return (
    <PageWrapper>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">High-level performance overview.</p>
        </div>

        <KPIStats />

        <div className="grid gap-6 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <ActivityGraph />
          </div>
          <div className="lg:col-span-3">
            <UpcomingQueue />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
