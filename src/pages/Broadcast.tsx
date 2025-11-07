import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContactCard } from "@/components/ContactCard";
import { MessageSquare, FileText, ClipboardList, Upload, Search, ChevronDown, MoreVertical } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Broadcast = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const contacts = [
    { 
      id: 1, 
      name: "Suantoni", 
      phone: "+62 234 5678 9999",
      label: { text: "Ultramen jingga", color: "red" as const }
    },
    { 
      id: 2, 
      name: "Suhendi", 
      phone: "+62 234 5678 9999"
    },
    { 
      id: 3, 
      name: "Lia", 
      phone: "+62 234 5678 9999",
      label: { text: "pegawai lama", color: "yellow" as const }
    },
    { 
      id: 4, 
      name: "Sabrina", 
      phone: "+62 234 5678 9999"
    },
    { 
      id: 5, 
      name: "Agus", 
      phone: "+62 234 5678 9999"
    },
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

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
        <div className="border border-border rounded-[3px] p-3 mb-4 bg-card min-h-[106px]">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari nama atau nomor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 bg-accent/40 border-border rounded-lg text-sm"
            />
          </div>
          <Button 
            variant="outline" 
            className="w-full mb-3 h-9 rounded-lg text-xs"
          >
            All labels
            <ChevronDown className="ml-2 w-3 h-3" />
          </Button>
          <div className="space-y-2 max-h-[200px] overflow-y-auto">
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="text-xs">
                <ContactCard
                  name={contact.name}
                  phone={contact.phone}
                  label={contact.label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pilih Template */}
        <button className="w-full h-[31px] rounded-[3px] border border-border bg-card flex items-center justify-between px-3 mb-4">
          <span className="text-muted-foreground text-xs">Pilih Template</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Text Area */}
        <div className="w-full h-[79px] rounded-[3px] border border-border bg-card mb-4 p-3">
          <textarea 
            className="w-full h-full bg-transparent resize-none outline-none text-sm"
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
          <button className="flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-card">
            <Upload className="w-4 h-4" />
            <span className="text-xs font-bold">Upload Files</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 justify-end mb-8">
          <Button className="bg-[#F63033] hover:bg-[#d42528] text-white font-bold text-[15px] px-6 h-[25px] rounded-[3px]">
            Stop
          </Button>
          <Button className="bg-[#30B7F6] hover:bg-[#2a9fd6] text-white font-bold text-[15px] px-6 h-[25px] rounded-[3px]">
            Kirim
          </Button>
        </div>

        {/* File Display Area */}
        <div className="w-full h-[76px] rounded-[3px] border border-border bg-card mb-6"></div>

        {/* Broadcast Type Buttons */}
        <div className="space-y-6">
          {/* Pesan Button */}
          <button className="w-full h-[50px] rounded-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center justify-between px-3 hover:opacity-90 transition-opacity relative">
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 text-white mr-3" />
              <span className="text-white text-[15px] font-medium">Pesan</span>
            </div>
            <MoreVertical className="w-4 h-4 text-white" />
          </button>

          {/* Files Button */}
          <button className="w-full h-[50px] rounded-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center px-3 hover:opacity-90 transition-opacity">
            <FileText className="w-5 h-5 text-white mr-3" />
            <span className="text-white text-[15px] font-medium">Files</span>
          </button>

          {/* LOG Button */}
          <button className="w-full h-[50px] rounded-[5px] bg-gradient-to-r from-[#45E3FF] to-[#147FEB] flex items-center justify-between px-3 hover:opacity-90 transition-opacity relative">
            <div className="flex items-center">
              <ClipboardList className="w-5 h-5 text-white mr-3" />
              <span className="text-white text-[15px] font-medium">LOG</span>
            </div>
            <MoreVertical className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Broadcast;
