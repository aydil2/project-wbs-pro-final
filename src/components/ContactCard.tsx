import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

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
  const [showDialog, setShowDialog] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  
  const labelColors = {
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-800",
  };

  const handleTouchStart = () => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 500);
    setPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  const handleMouseDown = () => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 500);
    setPressTimer(timer);
  };

  const handleMouseUp = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  const handleCancel = () => {
    setShowDialog(false);
    setSelectedLabel("");
  };

  return (
    <>
      <div 
        className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary/50 cursor-pointer select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
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

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-primary">Pilih label</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Select value={selectedLabel} onValueChange={setSelectedLabel}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih label" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pegawai-baru">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    Pegawai Baru
                  </div>
                </SelectItem>
                <SelectItem value="pegawai-lama">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    Pegawai Lama
                  </div>
                </SelectItem>
                <SelectItem value="ultramen-jingga">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-300" />
                    Ultramen jingga
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={handleCancel}
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Batal
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
