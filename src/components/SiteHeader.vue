<template>
  <header class="site-header">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="topbar">
      <div class="container topbar__inner">
        <span>{{ conference.location }}</span>
        <span>{{ conference.date }}</span>
        <a :href="`mailto:${conference.email}`">{{ conference.email }}</a>
      </div>
    </div>
    <nav class="navbar" aria-label="Main navigation">
      <div class="container navbar__inner">
        <RouterLink class="brand" to="/" aria-label="ICCWAMTIP home">
          <img src="/images/logo.png" alt="ICCWAMTIP" />
        </RouterLink>
        <button
          class="nav-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <Menu v-if="!menuOpen" />
          <Close v-else />
        </button>
        <ul id="primary-navigation" class="nav-list" :class="{ 'nav-list--open': menuOpen }">
          <li v-for="item in primaryNav" :key="item.to">
            <RouterLink :to="item.to" @click="menuOpen = false">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Close, Menu } from '@element-plus/icons-vue'
import { conference, primaryNav } from '../data/site'

const menuOpen = ref(false)
</script>
