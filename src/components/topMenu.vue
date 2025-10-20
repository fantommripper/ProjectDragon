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
  <div id="topMenu">
    <a href="" id="logo">
      <img src="../assets/ProjectDragon.svg" alt="ProjectDragon">
      <span>ProjectDragon</span>
    </a>

    <div class="rightBtns">
        <button
          id="homeBTN"
          :class="{ active: activeTab === 'home' }"
          @click="handleTabClick('home')"
        >
          <img src="../assets/Home.svg" alt="Home">
          <span>Главноя</span>
        </button>

        <button
          id="LibraryBTN"
          :class="{ active: activeTab === 'library' }"
          @click="handleTabClick('library')"
        >
          <img src="../assets/Books.svg" alt="Library">
          <span>Библиотека</span>
        </button>
    </div>
  </div>
</template>

<style scoped>
#topMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  box-sizing: border-box;
}

.rightBtns {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

#logo,
#homeBTN,
#LibraryBTN {
  display: flex;
  align-items: center;
  text-decoration: none;
}

#homeBTN,
#LibraryBTN{
  width: 250px;
  height: 50px;
  margin-left: 10px;
  justify-content: center;
  transition: 0.5s;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

#homeBTN:hover,
#LibraryBTN:hover{
  background-color: var(--malina-color);
}

#homeBTN.active,
#LibraryBTN.active{
  background-color: rgba(255, 255, 255, 0.9);
  border: 3px solid var(--light-malina-color);
}

#logo img,
#homeBTN img,
#LibraryBTN img {
  width: 40px;
  height: 40px;
}

#logo span {
  color: var(--text-color);
  font-size: 35px;
  margin-left: 10px;
}

#homeBTN span,
#LibraryBTN span {
  color: var(--text-color);
  font-size: 30px;
  margin-left: 10px;
}
</style>