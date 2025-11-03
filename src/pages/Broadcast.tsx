import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, ClipboardList } from "lucide-react";

const Broadcast = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto px-7 py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-foreground mb-12">Broadcast</h1>

        {/* Buttons Container */}
        <div className="space-y-12">
          {/* Pesan Button */}
          <button className="w-full h-[50px] rounded-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center px-3 hover:opacity-90 transition-opacity">
            <MessageSquare className="w-5 h-5 text-white mr-3" />
            <span className="text-white text-[15px] font-normal">Pesan</span>
          </button>

          {/* Files Button */}
          <button className="w-full h-[50px] rounded-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center px-3 hover:opacity-90 transition-opacity">
            <FileText className="w-5 h-5 text-white mr-3" />
            <span className="text-white text-[15px] font-normal">Files</span>
          </button>

          {/* LOG Button */}
          <button className="w-full h-[50px] rounded-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center px-3 hover:opacity-90 transition-opacity">
            <ClipboardList className="w-5 h-5 text-white mr-3" />
            <span className="text-white text-[15px] font-normal">LOG</span>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Broadcast;
