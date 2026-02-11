import { ContactsHeader } from "@/components/contacts/contacts-header";
import { ContactsTable } from "@/components/contacts/contacts-table";
import { PageWrapper } from "@/components/page-wrapper";

export default function ContactsPage() {
  return (
    <PageWrapper>
      <div className="p-8 space-y-8">
        <ContactsHeader />
        <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur overflow-hidden shadow-sm">
          <ContactsTable />
        </div>
      </div>
    </PageWrapper>
  );
}
