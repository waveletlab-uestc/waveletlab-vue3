<template>
  <PageFrame
    title="Committees"
    breadcrumb="Committees"
    description="International advisory board, chairs, editors, and organizing committees."
  >
    <section class="committee-grid">
      <article v-for="group in committeeGroups" :key="group.title" class="committee-card">
        <h2>{{ group.title }}</h2>
        <ul>
          <li v-for="member in group.members" :key="member">{{ member }}</li>
        </ul>
      </article>
    </section>
  </PageFrame>
</template>

<script setup>
import PageFrame from '../components/PageFrame.vue'
import { committeeGroups } from '../data/site'
</script>
