<template>
  <aside class="sidebar" aria-label="Conference shortcuts">
    <nav class="side-card">
      <RouterLink v-for="item in sideNav" :key="item.to" :to="item.to">
        {{ item.label }}
      </RouterLink>
    </nav>
    <section class="download-card">
      <h2>ICCWAMTIP Conference Flyer</h2>
      <p>Everything you need to know here.</p>
      <a v-for="item in downloadLinks" :key="item.href" :href="item.href" :download="item.download">
        <Download />
        {{ item.label }}
      </a>
    </section>
  </aside>
</template>

<script setup>
import { Download } from '@element-plus/icons-vue'
import { downloadLinks, sideNav } from '../data/site'
</script>
