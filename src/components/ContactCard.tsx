import { Phone } from "lucide-react";

interface ContactCardProps {
  name: string;
  phone: string;
  label?: {
    text: string;
    color: "red" | "yellow" | "green";
  };
}

export const ContactCard = ({ name, phone, label }: ContactCardProps) => {
  const initial = name.charAt(0).toUpperCase();
  
  const labelColors = {
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-800",
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary/50">
      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground text-lg font-medium">{initial}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg text-foreground mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-1">{phone}</p>
        {label && (
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${labelColors[label.color]}`}>
            {label.text}
          </span>
        )}
      </div>
    </div>
  );
};
