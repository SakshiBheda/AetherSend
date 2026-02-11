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
import { Checkbox } from "@/components/ui/checkbox";
import { contacts } from "@/lib/mock-data";
import { MoreHorizontal, UserCog, History, UserMinus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import * as React from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const MotionTableBody = motion.tbody;
const MotionTableRow = motion.tr;

export function ContactsTable() {
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggleAll = () => {
    if (selected.length === contacts.length) {
      setSelected([]);
    } else {
      setSelected(contacts.map(c => c.id));
    }
  };

  const toggleOne = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-none px-2 py-0.5">Active</Badge>;
      case "new":
        return <Badge className="bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20 border-none px-2 py-0.5">New</Badge>;
      case "unsubscribed":
        return <Badge className="bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 border-none px-2 py-0.5">Unsubscribed</Badge>;
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
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {selected.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-indigo-600/10 px-6 py-3 border-b border-indigo-500/20 flex items-center justify-between overflow-hidden"
          >
            <span className="text-sm font-semibold text-indigo-400">{selected.length} contacts selected</span>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => toast.success(`Moved ${selected.length} contacts`)}
                className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 font-bold"
              >
                Move to List
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => toast.error(`Deleted ${selected.length} contacts`)}
                className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 font-bold"
              >
                Delete
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Table>
        <TableHeader className="bg-muted/30">
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="w-[60px] pl-6">
              <Checkbox
                checked={selected.length === contacts.length && contacts.length > 0}
                onCheckedChange={toggleAll}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Email</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Last Active</TableHead>
            <TableHead className="text-right pr-6 font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <MotionTableBody
          variants={container}
          initial="hidden"
          animate="show"
          className="[&_tr:last-child]:border-0"
        >
          {contacts.map((contact) => (
            <MotionTableRow
              key={contact.id}
              variants={item}
              className="hover:bg-muted/50 transition-colors border-border/50 group"
            >
              <TableCell className="pl-6 p-2 align-middle whitespace-nowrap">
                <Checkbox
                  checked={selected.includes(contact.id)}
                  onCheckedChange={() => toggleOne(contact.id)}
                  aria-label={`Select ${contact.name}`}
                />
              </TableCell>
              <TableCell className="font-medium p-2 align-middle whitespace-nowrap py-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9 border border-border/50 shadow-sm group-hover:scale-110 transition-transform">
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback>{contact.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="group-hover:text-primary transition-colors">{contact.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground p-2 align-middle whitespace-nowrap">{contact.email}</TableCell>
              <TableCell className="p-2 align-middle whitespace-nowrap">{getStatusBadge(contact.status)}</TableCell>
              <TableCell className="text-muted-foreground text-sm font-medium p-2 align-middle whitespace-nowrap">{contact.last_active}</TableCell>
              <TableCell className="text-right pr-6 p-2 align-middle whitespace-nowrap">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-8 w-8 p-0 hover:bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Open menu for ${contact.name}`}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[180px] p-1.5 backdrop-blur-xl bg-card/80">
                    <DropdownMenuItem onClick={() => toast.info(`Editing ${contact.name}`)} className="cursor-pointer rounded-md">
                      <UserCog className="mr-2 h-4 w-4" /> Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info(`Engagement history for ${contact.name}`)} className="cursor-pointer rounded-md">
                      <History className="mr-2 h-4 w-4" /> View Engagement
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => toast.error(`${contact.name} unsubscribed`)}
                      className="text-rose-500 focus:text-rose-500 cursor-pointer rounded-md"
                    >
                      <UserMinus className="mr-2 h-4 w-4" /> Unsubscribe
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </MotionTableRow>
          ))}
        </MotionTableBody>
      </Table>
    </div>
  );
}
