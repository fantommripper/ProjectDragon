import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ContentCard } from "./components/ContentCard";
import { RaceClassCard } from "./components/RaceClassCard";
import { HomePage } from "./components/HomePage";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

// Mock data for different categories
const mockData = {
  spells: [
    {
      title: "Огненный шар",
      description: "Яркая полоса вылетает из вашего указательного пальца к точке, которую вы выбираете в пределах дистанции, а затем превращается в огненный взрыв.",
      level: 3,
      school: "Воплощение",
      tags: ["Огонь", "Урон по области"]
    },
    {
      title: "Волшебная стрела",
      description: "Вы создаёте три светящиеся стрелы магической силы. Каждая стрела попадает в существо на ваш выбор, которое вы можете видеть в пределах дистанции.",
      level: 1,
      school: "Воплощение",
      tags: ["Сила", "Гарантированное попадание"]
    },
    {
      title: "Свет",
      description: "Вы касаетесь одного предмета, наибольший размер которого не превышает 10 футов. Пока заклинание активно, предмет испускает яркий свет в радиусе 20 футов.",
      level: 0,
      school: "Воплощение",
      tags: ["Освещение", "Утилита"]
    },
    {
      title: "Щит",
      description: "Невидимый барьер из магической силы появляется и защищает вас. Вы получаете бонус +5 к КД до начала вашего следующего хода.",
      level: 1,
      school: "Ограждение",
      tags: ["Защита", "Реакция"]
    },
    {
      title: "Невидимость",
      description: "Существо, которого вы касаетесь, становится невидимым до окончания действия заклинания.",
      level: 2,
      school: "Иллюзия",
      tags: ["Скрытность", "Концентрация"]
    },
    {
      title: "Телепортация",
      description: "Это заклинание мгновенно переносит вас и до восьми согласных существ на расстояние до 500 миль к месту назначения, которое вы определяете.",
      level: 7,
      school: "Преобразование",
      tags: ["Перемещение", "Утилита"]
    }
  ],
  classes: [
    {
      title: "Воин",
      description: "Мастер боевых искусств и различных видов оружия и брони. Воины хорошо знакомы со смертью, как с той, что наносят, так и с той, что смотрит им в глаза.",
      type: "Базовый класс",
      tags: ["Ближний бой", "Универсальный"],
      image: "https://images.unsplash.com/photo-1509718966846-7fb920af0ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMHdhcnJpb3IlMjBhcm1vcnxlbnwxfHx8fDE3NjA5NjA2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Волшебник",
      description: "Учёный заклинатель, способный манипулировать структурами реальности. Волшебники — опытные пользователи магии, объединённые в соответствии с избранными школами магии.",
      type: "Базовый класс",
      tags: ["Заклинания", "Контроль"],
      image: "https://images.unsplash.com/photo-1760574772950-f37de9dce85c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2l6YXJkJTIwbWFnaWN8ZW58MXx8fHwxNzYwOTYwNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Плут",
      description: "Мошенник, использующий скрытность и хитрость для преодоления препятствий и врагов. Плуты обладают талантом находить решение любой проблемы.",
      type: "Базовый класс",
      tags: ["Скрытность", "Урон", "Навыки"],
      image: "https://images.unsplash.com/photo-1659166847764-f0d39d56479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwcm9ndWUlMjB0aGllZnxlbnwxfHx8fDE3NjA5NjA2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Жрец",
      description: "Посредник между миром смертных и далёкими планами богов. Жрецы не только исцеляют раненых союзников, но и вредят врагам.",
      type: "Базовый класс",
      tags: ["Заклинания", "Исцеление", "Поддержка"],
      image: "https://images.unsplash.com/photo-1649105703438-0992d6844823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2xlcmljJTIwcHJpZXN0fGVufDF8fHx8MTc2MDkwOTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ],
  races: [
    {
      title: "Эльф",
      description: "Эльфы — это магический народ, обладающий неземным изяществом, живущий в мире, но не являющийся его частью. Они живут в местах, наполненных воздушной красотой.",
      type: "Раса",
      tags: ["Ловкость", "Магия", "Тёмное зрение"],
      image: "https://images.unsplash.com/photo-1750092701416-174aaa737e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZWxmJTIwd2FycmlvcnxlbnwxfHx8fDE3NjA5NjA2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Дворф",
      description: "Смелые и выносливые, дворфы известны как искусные воины, шахтёры и кузнецы. Они коренастые и крепкие, ростом от 4 до 5 футов.",
      type: "Раса",
      tags: ["Телосложение", "Устойчивость", "Тёмное зрение"],
      image: "https://images.unsplash.com/photo-1693921978742-c93c4a3e6172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZHdhcmYlMjB3YXJyaW9yfGVufDF8fHx8MTc2MDk1Mjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Человек",
      description: "Люди являются самой адаптивной и амбициозной расой среди распространённых рас. Они имеют широко различающиеся вкусы, нравы и обычаи.",
      type: "Раса",
      tags: ["Универсальность", "Бонусные навыки"],
      image: "https://images.unsplash.com/photo-1682806816936-c3ac11f65112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwaHVtYW4lMjBrbmlnaHR8ZW58MXx8fHwxNzYwOTYwNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Драконорождённый",
      description: "Рождённые от драконов, драконорождённые сочетают в себе лучшие качества драконов и гуманоидов. Они горды, благородны и обладают драконьим дыханием.",
      type: "Раса",
      tags: ["Сила", "Драконье дыхание", "Устойчивость"],
      image: "https://images.unsplash.com/photo-1667477603006-40e97d34afdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZHJhZ29uYm9ybnxlbnwxfHx8fDE3NjA5NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ],
  monsters: [
    {
      title: "Древний красный дракон",
      description: "Самый алчный из истинных драконов, красные драконы безжалостно ищут увеличения своих сокровищниц. Они исключительно тщеславны.",
      type: "Дракон",
      rarity: "Легендарный",
      tags: ["ПО 24", "Огонь", "Полёт"]
    },
    {
      title: "Гоблин",
      description: "Гоблины — маленькие, чёрные сердцем гуманоиды, которые укрываются в пещерах, заброшенных шахтах, разграбленных подземельях и других мрачных местах.",
      type: "Гуманоид",
      rarity: "Обычный",
      tags: ["ПО 1/4", "Слабый", "Многочисленный"]
    },
    {
      title: "Бехолдер",
      description: "Один из самых узнаваемых монстров D&D, бехолдер — это плавающая сфера плоти с большим центральным глазом и большим ртом с острыми зубами.",
      type: "Аберрация",
      rarity: "Легендарный",
      tags: ["ПО 13", "Магия глаз", "Интеллект"]
    },
    {
      title: "Тролль",
      description: "Рождённые со сверхъестественной жизненной силой, тролли обладают невероятной регенерацией. Они восстанавливаются даже от самых ужасных ран.",
      type: "Великан",
      rarity: "Редкий",
      tags: ["ПО 5", "Регенерация", "Сила"]
    }
  ],
  weapons: [
    {
      title: "Длинный меч",
      description: "Универсальное оружие, которое можно использовать одной или двумя руками. Классический выбор для воинов и паладинов.",
      type: "Оружие ближнего боя",
      rarity: "Обычный",
      tags: ["1к8 рубящий", "Универсальное"]
    },
    {
      title: "Длинный лук",
      description: "Мощное дальнобойное оружие, требующее силы и умения. Излюбленное оружие эльфийских лучников.",
      type: "Дальнобойное оружие",
      rarity: "Обычный",
      tags: ["1к8 колющий", "Дальность 150/600"]
    },
    {
      title: "Огненный меч",
      description: "Этот длинный меч вспыхивает пламенем по команде. Пламя испускает яркий свет в радиусе 40 футов и тусклый свет на 40 футов дальше.",
      type: "Оружие ближнего боя",
      rarity: "Редкий",
      tags: ["1к8+1к6 огнём", "Магический", "+1"]
    }
  ],
  armor: [
    {
      title: "Латные доспехи",
      description: "Латные доспехи состоят из фасонных переплетённых металлических пластин, покрывающих всё тело. Это лучшая защита, которую могут предложить доспехи.",
      type: "Тяжёлая броня",
      rarity: "Обычный",
      tags: ["КД 18", "Помеха скрытности"]
    },
    {
      title: "Кожаная броня",
      description: "Нагрудник и наплечники этой брони сделаны из кожи, которая была укреплена кипячением в масле.",
      type: "Лёгкая броня",
      rarity: "Обычный",
      tags: ["КД 11 + Ловкость", "Лёгкая"]
    }
  ],
  items: [
    {
      title: "Зелье лечения",
      description: "Вы восстанавливаете 2к4+2 хитов, когда выпиваете это зелье. Жидкость зелья красная и слегка мерцает при взбалтывании.",
      type: "Зелье",
      rarity: "Обычный",
      tags: ["Исцеление", "Расходуемое"]
    },
    {
      title: "Сумка хранения",
      description: "Эта сумка имеет внутреннее пространство значительно больше её внешних размеров. Она может вместить до 500 фунтов, не превышая объём 64 кубических футов.",
      type: "Чудесный предмет",
      rarity: "Редкий",
      tags: ["Утилита", "Хранение"]
    },
    {
      title: "Кольцо защиты",
      description: "Вы получаете бонус +1 к КД и испытаниям, пока носите это кольцо.",
      type: "Кольцо",
      rarity: "Редкий",
      tags: ["Защита", "Настройка"]
    }
  ]
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "library">("home");
  const [activeCategory, setActiveCategory] = useState("spells");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getCategoryTitle = (category: string) => {
    const titles: Record<string, string> = {
      spells: "Заклинания",
      classes: "Классы",
      races: "Расы",
      monsters: "Монстры",
      weapons: "Оружие",
      armor: "Броня",
      items: "Предметы"
    };
    return titles[category] || "Контент";
  };

  const currentData = mockData[activeCategory as keyof typeof mockData] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-950">
      {/* Hero background image */}
      <div className="fixed inset-0 z-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1748838602679-32d82ccf188e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZHJhZ29uJTIwZGFya3xlbnwxfHx8fDE3NjA5NjAzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dragon background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <Header 
          onMenuClick={() => setSidebarOpen(true)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        
        {currentPage === "home" ? (
          <main className="container mx-auto px-4 py-8">
            <HomePage />
          </main>
        ) : (
          <div className="flex">
            <Sidebar 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            
            <main className="flex-1 container mx-auto px-4 py-8">
              <div className="mb-6">
                <h2 className="text-3xl text-white mb-2">{getCategoryTitle(activeCategory)}</h2>
                <p className="text-gray-400">Всего найдено: {currentData.length}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(activeCategory === "races" || activeCategory === "classes") ? (
                  currentData.map((item: any, index) => (
                    <RaceClassCard
                      key={index}
                      {...item}
                    />
                  ))
                ) : (
                  currentData.map((item, index) => (
                    <ContentCard
                      key={index}
                      {...item}
                    />
                  ))
                )}
              </div>
            </main>
          </div>
        )}
      </div>
    </div>
  );
}
