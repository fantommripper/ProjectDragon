import { 
  Sparkles, 
  Users, 
  PersonStanding, 
  Skull, 
  Swords, 
  Shield,
  Scroll,
  X
} from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: "spells", label: "Заклинания", icon: Sparkles },
  { id: "classes", label: "Классы", icon: Users },
  { id: "races", label: "Расы", icon: PersonStanding },
  { id: "monsters", label: "Монстры", icon: Skull },
  { id: "weapons", label: "Оружие", icon: Swords },
  { id: "armor", label: "Броня", icon: Shield },
  { id: "items", label: "Предметы", icon: Scroll },
];

export function Sidebar({ activeCategory, onCategoryChange, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 bg-black/40 backdrop-blur-sm border-r border-white/10 z-50
          transition-transform duration-300 lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4 lg:pt-0">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-white">Категории</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryChange(category.id);
                    onClose();
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
