"use client"

import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { campaigns } from "@/lib/mock-data";
import { MoreHorizontal, Edit2, Trash2, PauseCircle, PlayCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import { motion } from "framer-motion";

const MotionTableBody = motion.tbody;
const MotionTableRow = motion.tr;

export function SchedulerTable({ filter }: { filter: string }) {
  const filteredCampaigns = filter === "all"
    ? campaigns
    : campaigns.filter(c => c.status === filter);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-none px-2 py-0.5">Sent</Badge>;
      case "scheduled":
        return (
          <Badge className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-none flex items-center gap-1.5 px-2 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            Scheduled
          </Badge>
        );
      case "draft":
        return <Badge variant="secondary" className="border-none text-muted-foreground px-2 py-0.5">Draft</Badge>;
      case "archive":
        return <Badge variant="outline" className="text-muted-foreground border-muted-foreground/30 px-2 py-0.5">Archive</Badge>;
      default:
        return <Badge variant="secondary" className="px-2 py-0.5">{status}</Badge>;
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Table>
      <TableHeader className="bg-muted/30">
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-[300px] pl-6 font-semibold">Campaign</TableHead>
          <TableHead className="font-semibold">Recipient Group</TableHead>
          <TableHead className="font-semibold">Status</TableHead>
          <TableHead className="font-semibold">Scheduled For</TableHead>
          <TableHead className="text-right pr-6 font-semibold">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <MotionTableBody
        variants={container}
        initial="hidden"
        animate="show"
        className="[&_tr:last-child]:border-0"
      >
        {filteredCampaigns.map((campaign) => (
          <MotionTableRow
            key={campaign.id}
            variants={item}
            className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors group"
          >
            <TableCell className="font-medium pl-6 py-4 p-2 align-middle whitespace-nowrap">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 border border-border/50 shadow-sm transition-transform group-hover:scale-110">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${campaign.subject}`} />
                  <AvatarFallback>{campaign.subject[0]}</AvatarFallback>
                </Avatar>
                <span className="truncate max-w-[220px] group-hover:text-primary transition-colors">{campaign.subject}</span>
              </div>
            </TableCell>
            <TableCell className="text-muted-foreground p-2 align-middle whitespace-nowrap">{campaign.recipient_group}</TableCell>
            <TableCell className="p-2 align-middle whitespace-nowrap">{getStatusBadge(campaign.status)}</TableCell>
            <TableCell className="text-muted-foreground text-sm font-medium p-2 align-middle whitespace-nowrap">
              {campaign.status === "sent"
                ? `Sent ${formatDistanceToNow(new Date(campaign.scheduled_for))} ago`
                : campaign.status === "scheduled"
                  ? `In ${formatDistanceToNow(new Date(campaign.scheduled_for))}`
                  : "Not scheduled"}
            </TableCell>
            <TableCell className="text-right pr-6 p-2 align-middle whitespace-nowrap">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Open menu"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[180px] p-1.5 backdrop-blur-xl bg-card/80">
                  <DropdownMenuItem onClick={() => toast.info(`Editing ${campaign.subject}`)} className="cursor-pointer rounded-md">
                    <Edit2 className="mr-2 h-4 w-4" /> Edit Campaign
                  </DropdownMenuItem>
                  {campaign.status === "scheduled" ? (
                    <DropdownMenuItem onClick={() => toast.success("Campaign paused")} className="cursor-pointer rounded-md">
                      <PauseCircle className="mr-2 h-4 w-4" /> Pause
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onClick={() => toast.success("Campaign resumed")} className="cursor-pointer rounded-md">
                      <PlayCircle className="mr-2 h-4 w-4" /> Resume
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    onClick={() => toast.error("Campaign deleted")}
                    className="text-rose-500 focus:text-rose-500 cursor-pointer rounded-md"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </MotionTableRow>
        ))}
        {filteredCampaigns.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="h-40 text-center">
              <div className="flex flex-col items-center justify-center text-muted-foreground space-y-2">
                <p className="font-medium">No campaigns found</p>
                <p className="text-xs">Try changing your filter or creating a new campaign.</p>
              </div>
            </TableCell>
          </TableRow>
        )}
      </MotionTableBody>
    </Table>
  );
}
