<template>
  <PageFrame
    title="Conference Timeline"
    breadcrumb="Conference Timeline"
    description="Important milestones for submission, review, author notification, camera-ready submission, and conference day."
  >
    <section class="section-block">
      <h2>Conference Timeline</h2>
      <DataTable :columns="timelineColumns" :rows="timelineRows" />
    </section>
  </PageFrame>
</template>

<script setup>
import DataTable from '../components/DataTable.vue'
import PageFrame from '../components/PageFrame.vue'
import { timelineRows } from '../data/site'

const timelineColumns = [
  { key: 'event', label: 'Event' },
  { key: 'schedule', label: 'Schedule (China Standard Time, UTC+08:00)' },
]
</script>
