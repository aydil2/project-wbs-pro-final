import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

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
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);

  const labels = [
    { id: "pegawai-baru", name: "Pegawai Baru", color: "bg-blue-400" },
    { id: "pegawai-lama", name: "Pegawai Lama", color: "bg-yellow-400" },
    { id: "ultramen-jingga", name: "Ultramen jingga", color: "bg-blue-300" },
  ];
  
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
    setSelectedLabels([]);
  };

  const handleToggleLabel = (labelId: string) => {
    setSelectedLabels(prev => 
      prev.includes(labelId) 
        ? prev.filter(id => id !== labelId)
        : [...prev, labelId]
    );
  };

  const handleRemoveLabel = () => {
    console.log("Hapus label dari kontak:", name);
    setShowDialog(false);
    setSelectedLabels([]);
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
            <div className="border border-border rounded-lg p-3 space-y-3">
              {labels.map((labelItem) => (
                <div key={labelItem.id} className="flex items-center gap-3">
                  <Checkbox
                    id={labelItem.id}
                    checked={selectedLabels.includes(labelItem.id)}
                    onCheckedChange={() => handleToggleLabel(labelItem.id)}
                  />
                  <label
                    htmlFor={labelItem.id}
                    className="flex items-center gap-2 flex-1 cursor-pointer"
                  >
                    <div className={`w-3 h-3 rounded-full ${labelItem.color}`} />
                    <span>{labelItem.name}</span>
                  </label>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button 
                onClick={handleRemoveLabel}
                variant="destructive"
                className="flex-1"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Hapus label
              </Button>
              <Button 
                onClick={handleCancel}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white"
              >
                Batal
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
