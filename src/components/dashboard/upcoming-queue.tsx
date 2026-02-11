import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { campaigns } from "@/lib/mock-data";
import { Calendar, Clock } from "lucide-react";

export function UpcomingQueue() {
  const upcoming = campaigns
    .filter(c => c.status === "scheduled")
    .slice(0, 5);

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur h-full">
      <CardHeader>
        <CardTitle>Upcoming Queue</CardTitle>
        <CardDescription>Next 5 scheduled emails</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 pt-2">
          {upcoming.map((item) => (
            <div key={item.id} className="flex items-start gap-4 transition-all hover:translate-x-1 duration-200">
              <div className="mt-1 h-8 w-8 flex items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div className="space-y-1 overflow-hidden">
                <p className="text-sm font-medium leading-none truncate">{item.subject}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(item.scheduled_for).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                  <span>•</span>
                  <span className="truncate">{item.recipient_group}</span>
                </div>
              </div>
            </div>
          ))}
          {upcoming.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-sm text-muted-foreground">No upcoming campaigns.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
