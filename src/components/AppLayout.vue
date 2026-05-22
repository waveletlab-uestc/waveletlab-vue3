<template>
  <div class="site-shell">
    <SiteHeader />
    <main id="main-content">
      <RouterView />
    </main>
    <SubmitBanner />
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
import SubmitBanner from './SubmitBanner.vue'
</script>
