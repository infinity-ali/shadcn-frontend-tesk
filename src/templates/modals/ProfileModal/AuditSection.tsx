import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Gift,
  Settings,
  Users,
  FileText,
  CreditCard,
  Lock,
  Shield,
  Boxes,
  ClipboardList,
  Bell,
  Link as LinkIcon,
} from "lucide-react";

export default function Component() {
  const auditLogs = [
    {
      user: {
        name: "Albert Flores",
        email: "chambers@acmelabs.com",
        avatar: "/placeholder.svg",
      },
      event: "Edited Private page",
      date: "2022/11/05 11:23 PM",
    },
    {
      user: {
        name: "Kristin Watson",
        email: "jackson.graham@gmail.com",
        avatar: "/placeholder.svg",
      },
      event: "Viewed Secret Project Q4",
      date: "2022/11/05 11:22 PM",
    },
    {
      user: {
        name: "Bessie Cooper",
        email: "deanna.curtis@acmelabs.com",
        avatar: "/placeholder.svg",
      },
      event: "Viewed OS",
      date: "2022/11/05 11:21 PM",
    },
    // Add more audit logs as needed
  ];

  return (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Audit log</h1>
        <Button variant="default">Export</Button>
      </div>
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-6 grid grid-cols-3 gap-4 border-b pb-4">
          <div className="text-sm font-medium text-gray-500">User</div>
          <div className="text-sm font-medium text-gray-500">Event</div>
          <div className="text-sm font-medium text-gray-500">Date</div>
        </div>

        <div className="space-y-4">
          {auditLogs.map((log, index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={log.user.avatar} alt={log.user.name} />
                  <AvatarFallback>{log.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {log.user.name}
                  </div>
                  <div className="text-sm text-gray-500">{log.user.email}</div>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-900">
                {log.event}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                {log.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
