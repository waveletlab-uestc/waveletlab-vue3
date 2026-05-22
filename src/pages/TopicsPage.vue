<template>
  <PageFrame
    title="Topics"
    breadcrumb="Topics"
    description="The conference welcomes work in wavelets, multimedia technology, intelligent systems, networks, and related areas."
  >
    <section class="section-block">
      <h2>Topic</h2>
      <p>The topics of the conference include and not only include:</p>
      <div class="topic-grid">
        <article v-for="group in topicGroups" :key="group.title" class="topic-card">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </PageFrame>
</template>

<script setup>
import PageFrame from '../components/PageFrame.vue'
import { topicGroups } from '../data/site'
</script>
