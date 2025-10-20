import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ContentCardProps {
  title: string;
  description: string;
  level?: string | number;
  school?: string;
  type?: string;
  rarity?: string;
  tags?: string[];
}

export function ContentCard({ 
  title, 
  description, 
  level, 
  school, 
  type,
  rarity,
  tags = [] 
}: ContentCardProps) {
  return (
    <Card className="bg-black/40 backdrop-blur-sm border-white/10 hover:bg-black/50 transition-colors cursor-pointer">
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white">{title}</h3>
          {level !== undefined && (
            <Badge variant="outline" className="border-purple-500/30 text-purple-300 shrink-0">
              {level === 0 ? 'Заговор' : `${level} ур.`}
            </Badge>
          )}
          {rarity && (
            <Badge 
              variant="outline" 
              className={`shrink-0 ${
                rarity === 'Обычный' ? 'border-gray-500/30 text-gray-300' :
                rarity === 'Редкий' ? 'border-blue-500/30 text-blue-300' :
                rarity === 'Легендарный' ? 'border-orange-500/30 text-orange-300' :
                'border-white/30 text-white'
              }`}
            >
              {rarity}
            </Badge>
          )}
        </div>
        
        {(school || type) && (
          <p className="text-sm text-gray-400 mb-2">{school || type}</p>
        )}
        
        <p className="text-sm text-gray-300">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/5 text-gray-400 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
