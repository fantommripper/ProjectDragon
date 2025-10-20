<script setup lang="ts">
defineProps<{
  activeTab: 'home' | 'library'
}>()

const emit = defineEmits<{
  (e: 'change-tab', tab: 'home' | 'library'): void
}>()

const handleTabClick = (tab: 'home' | 'library') => {
  emit('change-tab', tab)
}
</script>

<template>
  <div class="home-page">
    <h1>Добро пожаловать в <span class="maliaTxt">ProjectDragon</span></h1>
    <p>Ваш универсальный набор инструментов для D&D 5e. Библиотека правил,<br> генераторы контента и полезные утилиты для <br> мастеров и игроков.</p>
  </div>

  <div id="tollsBars">
    <h1>Инструменты</h1>
    <div class="tileMenu">
        <button>
            <img src="../assets/ProjectDragon.svg" alt="ProjectDragon" width="120">
            Токинатор (скоро...)
        </button>
    </div>

    <h1>Быстрый доступ</h1>
    <div class="tileMenuQuickAccess">
        <button
            id="libraryTileBTN"
            @click="handleTabClick('library')">

            <img src="../assets/Books.svg" alt="Library">
            Библиотека
        </button>
        <!-- <button>
            <img src="../assets/ProjectDragon.svg" alt="ProjectDragon" width="120">

        </button> -->
    </div>
  </div>
</template>

<style scoped>
.home-page {
    padding: 40px;
    text-align: center;
}

.home-page h1 {
    color: var(--text-color);
    font-size: 48px;
    margin-bottom: 20px;
}

.home-page p {
    color: var(--gray-text-color);
    font-size: 24px;
}

.maliaTxt{
    color: var(--light-malina-color);
}

.tileMenu {
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.tileMenu button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--malina-color);
    padding: 30px 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 18px;
    transition: 0.3s;
    color: var(--gray-text-color);
    font-size: 20px;
    min-height: 200px;
    cursor: pointer;
}

.tileMenu button:hover {
    border-color: var(--light-malina-color);
    transform: translateY(-5px);
    background-color: rgba(109, 51, 80, 0.2);
}

.tileMenu button img {
    margin-bottom: 15px;
}

.tileMenuQuickAccess{
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
}


#libraryTileBTN{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 18px;
    border: 2px solid var(--malina-color);
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.3);
    color: var(--text-color);
    font-size: 28px;
    padding: 20px 30px;
    min-height: 120px;
}

#libraryTileBTN img{
    width: 80px;
    margin-right: 20px;
    transition: all 0.3s ease;
}

#libraryTileBTN:hover{
    transform: translateY(-8px);
    border-color: var(--light-malina-color);
    background-color: rgba(109, 51, 80, 0.3);
    box-shadow: 0 10px 30px rgba(166, 77, 121, 0.3);
}

#libraryTileBTN:hover img{
    transform: scale(1.1);
}

#tollsBars{
    margin: 40px auto;
    max-width: 1200px;
    padding: 0 20px;
}

#tollsBars h1 {
    color: var(--text-color);
    font-size: 36px;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: left;
    border-bottom: 2px solid var(--malina-color);
    padding-bottom: 10px;
}
</style>