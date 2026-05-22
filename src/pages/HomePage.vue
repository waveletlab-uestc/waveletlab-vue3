<template>
  <section class="home-hero" aria-labelledby="home-title">
    <div class="home-hero__image" aria-hidden="true"></div>
    <div class="home-hero__overlay"></div>
    <div class="container home-hero__content">
      <p class="eyebrow">September 19th, 2026 · Chengdu, China</p>
      <h1 id="home-title">
        <span class="hero-title-main">ICCWAMTIP</span>
        <span class="hero-year">2026</span>
      </h1>
      <p class="hero-subtitle">{{ conference.fullName }}</p>
      <div class="hero-actions">
        <el-button tag="a" :href="conference.cmtUrl" target="_blank" rel="noreferrer" type="success" size="large">
          Submit A Paper
        </el-button>
        <el-button tag="a" href="/doc/CallforPaper-EN.pdf" size="large">Call For Paper</el-button>
      </div>
    </div>
  </section>

  <div class="container content-layout home-layout">
    <ConferenceSidebar />
    <article class="content-panel">
      <section class="section-block">
        <img class="intro-image" src="/images/introduction.png" alt="ICCWAMTIP 2026 conference poster" />
        <h2>ICCWAMTIP 2026 | Chengdu, China | September 19th, 2026</h2>
        <p>
          ICCWAMTIP 2026, The 23rd International Computer Conference on Wavelet Active Media Technology and Information
          Processing, will take place in Chengdu, China, on September 19th, 2026. This event is organized by University
          of Electronic Science and Technology of China(UESTC), sponsored by The National Natural Science Foundation of
          China(NSFC), National High Technology Research and Development Program of China and China International Talent
          Exchange Foundation.
        </p>
        <p>
          ICCWAMTIP 2026 is a not-to-be-missed opportunity that distills the most current knowledge on a rapidly
          advancing discipline in one conference. Join key researchers and established professionals in the field of
          information technologies as they assess the current state-of-the-art and roadmap crucial areas for future
          research.
        </p>
        <p>
          We aim to building an idea-trading platform for the purpose of encouraging researcher participating in this
          event. The papers to be presented at ICCWAMTIP past conferences addressed many grand challenges in modern
          engineering.
        </p>
        <p>
          The full papers to be presented will be peer-reviewed by expert reviewers including the whole organising
          committees members. We will be thankful for the contributions to ICCWAMTIP 2026. We look forward to your
          participation and continued engagement at future ICCWAMTIP conferences.
        </p>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <h2>Latest News</h2>
          <RouterLink to="/news.html">View all news</RouterLink>
        </div>
        <ul class="news-list">
          <li v-for="item in latestNews.slice(0, 5)" :key="`${item.date}-${item.text}`">
            <time>{{ item.date }}</time>
            <a v-if="item.href" :href="item.href">{{ item.text }}</a>
            <span v-else>{{ item.text }}</span>
          </li>
        </ul>
      </section>

      <section class="section-block">
        <h2>Conference Routine</h2>
        <p>
          The conference will be held on <strong>September 19th, 2026 from 09:00 AM to 12:30</strong>. For authors who
          would like to participate in the conference online, please use
          <a href="https://meeting.tencent.com/" target="_blank" rel="noreferrer">Tencent Meeting</a> software join.
        </p>
        <div class="routine-list">
          <div v-for="item in routine" :key="`${item.time}-${item.title}`" class="routine-item">
            <time>{{ item.time }}</time>
            <span>{{ item.title }}<small v-if="item.note"> ({{ item.note }})</small></span>
          </div>
        </div>
      </section>

      <section class="section-block">
        <h2>Important Dates</h2>
        <DataTable :columns="dateColumns" :rows="importantDates" />
      </section>

      <section class="section-block">
        <h2>Catalog Numbers</h2>
        <DataTable :columns="catalogColumns" :rows="catalogNumbers" />
        <p>Any question, please <RouterLink to="/contact.html">contact us</RouterLink> by conference e-mail and phone number.</p>
      </section>
    </article>
  </div>
</template>

<script setup>
import ConferenceSidebar from '../components/ConferenceSidebar.vue'
import DataTable from '../components/DataTable.vue'
import { catalogNumbers, conference, importantDates, latestNews, routine } from '../data/site'

const dateColumns = [
  { key: 'event', label: 'Event' },
  { key: 'date', label: 'Date (China Standard Time, UTC+08:00)' },
]

const catalogColumns = [
  { key: 'mediaType', label: 'Media Type Request' },
  { key: 'partNumber', label: 'Part Number' },
  { key: 'isbn', label: 'ISBN' },
  { key: 'printIssn', label: 'Print ISSN' },
  { key: 'onlineIssn', label: 'Online ISSN' },
  { key: 'quantity', label: 'Media Qty Request' },
]
</script>
