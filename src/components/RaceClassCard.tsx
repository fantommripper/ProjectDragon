import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RaceClassCardProps {
  title: string;
  description: string;
  type?: string;
  tags?: string[];
  image: string;
}

export function RaceClassCard({ 
  title, 
  description, 
  type,
  tags = [],
  image
}: RaceClassCardProps) {
  return (
    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors cursor-pointer overflow-hidden group">
      <div className="relative">
        {/* Image Background */}
        <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative p-4 min-h-[200px] flex flex-col justify-end">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-white">{title}</h3>
            </div>
            
            {type && (
              <p className="text-sm text-purple-300">{type}</p>
            )}
            
            <p className="text-sm text-gray-300">{description}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-2">
                {tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-black/40 backdrop-blur-sm text-gray-300 text-xs border border-white/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
