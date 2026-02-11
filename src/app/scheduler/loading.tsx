import { Skeleton } from "@/components/ui/skeleton";

export default function SchedulerLoading() {
  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-10 w-36" />
      </div>

      <Skeleton className="h-10 w-full max-w-[400px]" />

      <div className="mt-6 border border-border/50 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b bg-muted/30 flex gap-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-4 flex-1" />
          ))}
        </div>
        <div className="p-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-4 border-b last:border-0 flex gap-4 items-center">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-1/2" />
              </div>
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
