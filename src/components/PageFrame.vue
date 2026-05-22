<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
    </div>
  </section>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <div class="container">
      <RouterLink to="/">Home</RouterLink>
      <span aria-hidden="true">/</span>
      <span>{{ breadcrumb || title }}</span>
    </div>
  </nav>
  <div class="container content-layout">
    <ConferenceSidebar />
    <article class="content-panel">
      <slot />
    </article>
  </div>
</template>

<script setup>
import ConferenceSidebar from './ConferenceSidebar.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  eyebrow: {
    type: String,
    default: 'ICCWAMTIP 2026',
  },
  breadcrumb: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
