import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Upload, ChevronDown, MoreVertical } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Broadcast = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto px-7 py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-foreground mb-4">Broadcast</h1>

        {/* Progress Bar */}
        <p className="text-muted-foreground text-[10px] mb-2">Sending Progress 0%</p>
        <div className="w-full h-[1px] bg-border mb-6"></div>

        {/* Nomor WA Button */}
        <button className="w-full h-[60px] rounded-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center justify-between px-3 mb-4 hover:opacity-90 transition-opacity relative">
          <span className="text-white text-[15px] font-medium">Nomor WA</span>
          <MoreVertical className="w-4 h-4 text-white absolute right-3 top-3" />
        </button>

        {/* Contact List Section */}
        <div className="w-full h-[106px] rounded-[3px] border border-border bg-card mb-4"></div>

        {/* Pilih Template */}
        <button className="w-full h-[31px] rounded-[3px] border border-border bg-card flex items-center justify-between px-3 mb-4">
          <span className="text-muted-foreground text-xs">Pilih Template</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Text Area */}
        <div className="w-full h-[79px] rounded-[3px] border border-border bg-card mb-4 p-3">
          <textarea 
            className="w-full h-full bg-transparent resize-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
            placeholder="Tulis pesan..."
          />
        </div>

        {/* SpinText Toggle */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-foreground text-xs">SpinText</span>
          <Switch />
        </div>

        {/* Upload Files */}
        <div className="w-full h-[43px] rounded-[3px] border border-border bg-card flex items-center px-3 mb-4">
          <button className="flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-card hover:bg-accent transition-colors">
            <Upload className="w-4 h-4" />
            <span className="text-xs font-bold">Upload Files</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 justify-end mb-4">
          <Button className="bg-[#F63033] hover:bg-[#d42528] text-white font-bold text-[15px] px-6 h-[25px] rounded-[3px]">
            Stop
          </Button>
          <Button className="bg-[#30B7F6] hover:bg-[#2a9fd6] text-white font-bold text-[15px] px-6 h-[25px] rounded-[3px]">
            Kirim
          </Button>
        </div>

        {/* File Display Area */}
        <div className="w-full h-[76px] rounded-[3px] border border-border bg-card"></div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Broadcast;
