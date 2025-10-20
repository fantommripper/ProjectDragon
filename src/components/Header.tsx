import { Search, BookOpen, Menu, Home, Library } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface HeaderProps {
  onMenuClick: () => void;
  currentPage: "home" | "library";
  onPageChange: (page: "home" | "library") => void;
}

export function Header({ onMenuClick, currentPage, onPageChange }: HeaderProps) {
  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <button 
              onClick={() => onPageChange("home")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <BookOpen className="h-6 w-6 text-purple-400" />
              <h1 className="text-xl text-white">ProjectDragon</h1>
            </button>
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant={currentPage === "home" ? "secondary" : "ghost"}
              onClick={() => onPageChange("home")}
              className={currentPage === "home" ? "bg-purple-500/20 text-purple-300" : "text-gray-400"}
            >
              <Home className="h-4 w-4 mr-2" />
              Главная
            </Button>
            <Button
              variant={currentPage === "library" ? "secondary" : "ghost"}
              onClick={() => onPageChange("library")}
              className={currentPage === "library" ? "bg-purple-500/20 text-purple-300" : "text-gray-400"}
            >
              <Library className="h-4 w-4 mr-2" />
              Библиотека
            </Button>
          </nav>
          
          {currentPage === "library" && (
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Поиск заклинаний, классов, монстров..."
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
