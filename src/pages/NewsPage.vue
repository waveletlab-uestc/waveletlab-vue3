<template>
  <PageFrame title="News" breadcrumb="News" description="Latest updates from ICCWAMTIP.">
    <section class="section-block">
      <h2>Latest News</h2>
      <ul class="news-list news-list--full">
        <li v-for="item in latestNews" :key="`${item.date}-${item.text}`">
          <time>{{ item.date }}</time>
          <a v-if="item.href" :href="item.href">{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>
        </li>
      </ul>
    </section>
  </PageFrame>
</template>

<script setup>
import PageFrame from '../components/PageFrame.vue'
import { latestNews } from '../data/site'
</script>
