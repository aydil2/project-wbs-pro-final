import { useState } from "react";
import { Search, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContactCard } from "@/components/ContactCard";
import { BottomNav } from "@/components/BottomNav";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);
  const [selectionMode, setSelectionMode] = useState(false);

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

  const toggleContactSelection = (id: number) => {
    setSelectedContacts(prev =>
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  const toggleSelectionMode = () => {
    setSelectionMode(!selectionMode);
    if (selectionMode) {
      setSelectedContacts([]);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto px-5 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-foreground">List Kontak</h1>
          {selectionMode && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSelectionMode}
              className="text-foreground"
            >
              <X className="w-6 h-6" />
            </Button>
          )}
        </div>

        {selectionMode && selectedContacts.length > 0 && (
          <div className="mb-4 p-3 bg-primary/10 rounded-lg flex items-center justify-between">
            <span className="text-sm font-medium text-primary">
              {selectedContacts.length} kontak terpilih
            </span>
            <Button size="sm" variant="default">
              Pilih Label
            </Button>
          </div>
        )}

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari nama atau nomor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-accent/40 border-none rounded-lg text-base placeholder:text-muted-foreground"
          />
        </div>

        {/* Filter Dropdown */}
        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
          <SelectTrigger className="mb-4 h-10 w-40 rounded-lg font-semibold">
            <SelectValue placeholder="All labels" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All labels</SelectItem>
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
                <div className="w-3 h-3 rounded-full bg-red-400" />
                Ultramen jingga
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Contacts Container */}
        <div className="relative">
          <div className="border border-border rounded-xl p-4 space-y-3 bg-card">
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="flex items-center gap-3">
                {selectionMode && (
                  <Checkbox
                    checked={selectedContacts.includes(contact.id)}
                    onCheckedChange={() => toggleContactSelection(contact.id)}
                  />
                )}
                <div className="flex-1">
                  <ContactCard
                    name={contact.name}
                    phone={contact.phone}
                    label={contact.label}
                    onLongPress={!selectionMode ? undefined : () => {}}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="absolute -bottom-4 -right-4 flex gap-2">
            {!selectionMode && (
              <Button
                size="icon"
                variant="secondary"
                onClick={toggleSelectionMode}
                className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                <Checkbox className="w-6 h-6" />
              </Button>
            )}
            <Button
              size="icon"
              className="w-16 h-16 rounded-full shadow-xl hover:scale-110 transition-transform"
            >
              <Plus className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
