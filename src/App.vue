<script setup lang="ts">
import { ref } from 'vue'
import topMenu from './components/topMenu.vue'
import HomePage from './components/HomePage.vue'
import LibraryPage from './components/LibraryPage.vue'

const activeTab = ref<'home' | 'library'>('home')

const handleTabChange = (tab: 'home' | 'library') => {
  activeTab.value = tab
}
</script>

<template>
  <div>
    <topMenu :activeTab="activeTab" @change-tab="handleTabChange"></topMenu>
    
    <div class="page-content">
      <HomePage :activeTab="activeTab" @change-tab="handleTabChange" v-if="activeTab === 'home'" />
      <LibraryPage v-if="activeTab === 'library'" />
    </div>
  </div>
</template>

<style scoped>
.page-content {
  width: 100%;
  min-height: calc(100vh - 75px);
}
</style>
