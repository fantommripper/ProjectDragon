import { Card } from "./ui/card";
import { Dices, Map, Swords, Calculator, Users, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const tools = [
  {
    title: "Токинатор",
    description: "Генератор токенов для ваших персонажей. Создавайте уникальные изображения для использования в виртуальных настольных играх.",
    icon: Users,
    status: "Скоро",
    image: "https://images.unsplash.com/photo-1547638375-ebf04735d792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWNlJTIwZ2FtZSUyMGZhbnRhc3l8ZW58MXx8fHwxNzYwOTYwNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Генератор карт",
    description: "Создавайте детальные карты для ваших приключений. От подземелий до целых континентов.",
    icon: Map,
    status: "Скоро",
    image: "https://images.unsplash.com/photo-1677295922463-147d7f2f718c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFwJTIwdHJlYXN1cmV8ZW58MXx8fHwxNzYwOTYwNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Калькулятор боя",
    description: "Быстрый расчёт урона, инициативы и других параметров боя. Упростите процесс ведения сражений.",
    icon: Swords,
    status: "Скоро"
  },
  {
    title: "Генератор персонажей",
    description: "Быстрое создание NPC и персонажей со случайными характеристиками, предысторией и снаряжением.",
    icon: Dices,
    status: "Скоро"
  },
  {
    title: "Калькулятор опыта",
    description: "Рассчитывайте опыт для группы, балансируйте сложность столкновений.",
    icon: Calculator,
    status: "Скоро"
  },
  {
    title: "Библиотека заметок",
    description: "Сохраняйте заметки о ваших кампаниях, персонажах и важных событиях.",
    icon: BookOpen,
    status: "Скоро"
  }
];

export function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <h1 className="text-5xl text-white">
          Добро пожаловать в <span className="text-purple-400">ProjectDragon</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Ваш универсальный набор инструментов для D&D 5e. Библиотека правил, генераторы контента и полезные утилиты для мастеров и игроков.
        </p>
      </div>

      {/* Tools Grid */}
      <div>
        <h2 className="text-3xl text-white mb-6">Инструменты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer overflow-hidden group relative"
              >
                {tool.image && (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <ImageWithFallback
                      src={tool.image}
                      alt={tool.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="relative p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                      <Icon className="h-6 w-6 text-purple-300" />
                    </div>
                    {tool.status && (
                      <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm text-orange-300">
                        {tool.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl text-white">{tool.title}</h3>
                  <p className="text-gray-400">{tool.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-3xl text-white mb-6">Быстрый доступ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer">
            <div className="p-6">
              <h3 className="text-xl text-white mb-2">📚 Библиотека</h3>
              <p className="text-gray-400">
                Полная база данных заклинаний, классов, рас, монстров и предметов
              </p>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 hover:border-orange-500/40 transition-all cursor-pointer">
            <div className="p-6">
              <h3 className="text-xl text-white mb-2">🎲 Генераторы</h3>
              <p className="text-gray-400">
                Инструменты для создания контента и упрощения игрового процесса
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
