import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Upload, ChevronDown, MoreVertical } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Broadcast = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

  const handleImportManual = () => {
    console.log("Import Manual");
  };

  const handleImportSS = () => {
    console.log("Import Screenshot");
  };

  const handleImportCSV = () => {
    console.log("Import CSV");
  };

  const handleImportFromContact = () => {
    console.log("Import From Contact");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto px-7 py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-foreground mb-4">Broadcast</h1>

        {/* Progress Bar */}
        <p className="text-muted-foreground text-[10px] mb-2">Sending Progress 0%</p>
        <div className="w-full h-[1px] bg-border mb-6"></div>

        {/* Nomor WA Card */}
        <div className="mb-4">
          <div className="w-full h-[40px] rounded-t-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center justify-between px-3 relative">
            <span className="text-white text-[15px] font-medium">Nomor WA</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:bg-white/10 rounded p-1 transition-colors">
                  <MoreVertical className="w-4 h-4 text-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[140px]">
                <DropdownMenuItem onClick={handleImportManual}>
                  Import manual
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleImportSS}>
                  Import SS
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleImportCSV}>
                  Import CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleImportFromContact}>
                  Import From Contact
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="w-full h-[106px] border border-t-0 border-border bg-card rounded-b-[3px] p-3">
            {selectedNumbers.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedNumbers.map((number, idx) => (
                  <div key={idx} className="text-xs text-foreground bg-accent px-2 py-1 rounded">
                    {number}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">Pilih metode import nomor WA</p>
            )}
          </div>
        </div>

        {/* Pesan Card */}
        <div className="mb-4">
          <div className="w-full h-[40px] rounded-t-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center px-3">
            <span className="text-white text-[15px] font-medium">Pesan</span>
          </div>
          <div className="border border-t-0 border-border bg-card rounded-b-[3px] p-3">
            {/* Pilih Template */}
            <button className="w-full h-[31px] rounded-[3px] border border-border bg-card flex items-center justify-between px-3 mb-3 hover:bg-accent transition-colors">
              <span className="text-muted-foreground text-xs">Pilih Template</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Text Area */}
            <div className="w-full h-[79px] rounded-[3px] border border-border bg-card mb-3 p-2">
              <textarea 
                className="w-full h-full bg-transparent resize-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
                placeholder="Tulis pesan..."
              />
            </div>

            {/* SpinText Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-foreground text-xs">SpinText</span>
              <Switch />
            </div>
          </div>
        </div>

        {/* Files Card */}
        <div className="mb-4">
          <div className="w-full h-[40px] rounded-t-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center px-3">
            <span className="text-white text-[15px] font-medium">Files</span>
          </div>
          <div className="border border-t-0 border-border bg-card rounded-b-[3px] p-3">
            {/* Upload Files */}
            <div className="w-full h-[43px] rounded-[3px] border border-border bg-card flex items-center px-3 mb-3">
              <button className="flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-card hover:bg-accent transition-colors">
                <Upload className="w-4 h-4" />
                <span className="text-xs font-bold">Upload Files</span>
              </button>
            </div>

            {/* File Display Area */}
            <div className="w-full h-[76px] rounded-[3px] border border-border bg-card mb-3"></div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-end">
              <Button className="bg-[#F63033] hover:bg-[#d42528] text-white font-bold text-[15px] px-6 h-[25px] rounded-[3px]">
                Stop
              </Button>
              <Button className="bg-[#30B7F6] hover:bg-[#2a9fd6] text-white font-bold text-[15px] px-6 h-[25px] rounded-[3px]">
                Kirim
              </Button>
            </div>
          </div>
        </div>

        {/* LOG Card */}
        <div className="mb-4">
          <div className="w-full h-[40px] rounded-t-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center justify-between px-3 relative">
            <span className="text-white text-[15px] font-medium">LOG</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:bg-white/10 rounded p-1 transition-colors">
                  <MoreVertical className="w-4 h-4 text-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[120px]">
                <DropdownMenuItem>Clear Log</DropdownMenuItem>
                <DropdownMenuItem>Export Log</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="w-full h-[76px] border border-t-0 border-border bg-card rounded-b-[3px] p-3 overflow-y-auto">
            <p className="text-xs text-muted-foreground">Log broadcast akan muncul di sini...</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Broadcast;
