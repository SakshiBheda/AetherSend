import { SchedulerHeader } from "@/components/scheduler/scheduler-header";
import { SchedulerTable } from "@/components/scheduler/scheduler-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageWrapper } from "@/components/page-wrapper";

export default function SchedulerPage() {
  return (
    <PageWrapper>
      <div className="p-8 space-y-6">
        <SchedulerHeader />

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-muted/50 p-1 border border-border/50">
            <TabsTrigger value="all" className="px-6">All</TabsTrigger>
            <TabsTrigger value="scheduled" className="px-6">Scheduled</TabsTrigger>
            <TabsTrigger value="drafts" className="px-6">Drafts</TabsTrigger>
            <TabsTrigger value="archive" className="px-6">Archive</TabsTrigger>
          </TabsList>
          <div className="mt-6 border border-border/50 rounded-xl bg-card/50 backdrop-blur overflow-hidden shadow-sm">
            <TabsContent value="all" className="m-0 border-none outline-none">
              <SchedulerTable filter="all" />
            </TabsContent>
            <TabsContent value="scheduled" className="m-0 border-none outline-none">
              <SchedulerTable filter="scheduled" />
            </TabsContent>
            <TabsContent value="drafts" className="m-0 border-none outline-none">
              <SchedulerTable filter="draft" />
            </TabsContent>
            <TabsContent value="archive" className="m-0 border-none outline-none">
              <SchedulerTable filter="archive" />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </PageWrapper>
  );
}
