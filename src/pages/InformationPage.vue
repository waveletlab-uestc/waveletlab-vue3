<template>
  <PageFrame
    title="Conference Information"
    breadcrumb="Information"
    description="Call for paper, publication information, catalog numbers, and key dates."
  >
    <section class="section-block">
      <h2>Call For Paper</h2>
      <p>
        Dear Authors, The 23rd International Computer Conference on Wavelet Active Media Technology and Information
        Processing (the 23rd ICCWAMTIP) will be held in the University of Electronic Science and Technology of China
        (UESTC) on September 19th, 2026.
      </p>
      <p>
        The conference is sponsored by IEEE, undertaken by UESTC. The Conference will focus on recent advances in key
        information technologies. It will provide a remarkable opportunity for the academic and industrial community to
        address new challenges and share solutions, and discuss future research directions. The conference proceedings
        will be published by UESTC, all accepted papers are expected to be included in IEEE Xplore and will be indexed
        by EI. Some famous experts are going to present at the conference.
      </p>
      <p>The topics of the conference include:</p>
      <ul class="two-column-list">
        <li v-for="topic in callForPaperTopics" :key="topic">{{ topic }}</li>
      </ul>
      <p>
        We will recommend 10%-20% good papers to SCI journals, all the papers accepted by our conference in the past
        years are indexed by EI. Please log in the
        <a :href="conference.cmtUrl" target="_blank" rel="noreferrer">cmt system</a> to submit your paper
        (<strong>strongly recommend</strong>), and you can also e-mail your paper directly to
        <a :href="`mailto:${conference.email}`">{{ conference.email }}</a>.
      </p>
      <p>Looking forward to seeing you in Chengdu!</p>
    </section>

    <section class="section-block">
      <h2>Important Dates</h2>
      <ul class="date-list">
        <li v-for="item in importantDates" :key="item.event">
          <span>{{ item.event }}</span>
          <strong>{{ item.date }}</strong>
        </li>
      </ul>
    </section>

    <section class="section-block">
      <h2>Catalog Numbers</h2>
      <DataTable :columns="catalogColumns" :rows="catalogNumbers" />
    </section>

    <section class="section-block organization">
      <h2>Organization of the 23rd ICCWAMTIP</h2>
      <p>International Centre for Wavelet Analysis and Its Applications</p>
      <p>Chengdu China, UESTC</p>
      <p>September 19th, 2026</p>
    </section>
  </PageFrame>
</template>

<script setup>
import DataTable from '../components/DataTable.vue'
import PageFrame from '../components/PageFrame.vue'
import { callForPaperTopics, catalogNumbers, conference, importantDates } from '../data/site'

const catalogColumns = [
  { key: 'mediaType', label: 'Media Type Request' },
  { key: 'partNumber', label: 'Part Number' },
  { key: 'isbn', label: 'ISBN' },
  { key: 'printIssn', label: 'Print ISSN' },
  { key: 'onlineIssn', label: 'Online ISSN' },
  { key: 'quantity', label: 'Media Qty Request' },
]
</script>
