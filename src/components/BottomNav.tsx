import { Radio, FileText, Users, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export const BottomNav = () => {
  const navItems: NavItem[] = [
    { icon: <Radio className="w-5 h-5" />, label: "Broadcast" },
    { icon: <FileText className="w-5 h-5" />, label: "Template" },
    { icon: <Users className="w-5 h-5" />, label: "List Contact", active: true },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Report" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg rounded-t-3xl">
      <div className="flex items-center justify-around h-20 max-w-md mx-auto px-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors min-w-[60px]",
              item.active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
