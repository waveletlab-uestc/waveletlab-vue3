<template>
  <PageFrame
    title="Speakers"
    breadcrumb="Speakers"
    description="Invited speakers and academic leaders for ICCWAMTIP 2026."
  >
    <section class="speaker-list">
      <article v-for="speaker in speakers" :key="speaker.name" class="speaker-card">
        <img :src="speaker.image" :alt="speaker.name" />
        <div>
          <p class="eyebrow">{{ speaker.title }}</p>
          <h2>{{ speaker.name }}</h2>
          <p class="speaker-affiliation">{{ speaker.affiliation }}</p>
          <p>{{ speaker.bio }}</p>
        </div>
      </article>
    </section>
  </PageFrame>
</template>

<script setup>
import PageFrame from '../components/PageFrame.vue'
import { speakers } from '../data/site'
</script>
