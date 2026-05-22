<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <section>
        <h2>{{ conference.shortName }}</h2>
        <p>{{ conference.fullName }}</p>
        <ul class="footer-contact">
          <li>
            <Phone />
            <span>Tel. {{ conference.phone }}</span>
          </li>
          <li>
            <Message />
            <a :href="`mailto:${conference.email}`">{{ conference.email }}</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Our Links</h2>
        <div class="footer-links">
          <a :href="conference.cmtUrl" target="_blank" rel="noreferrer">Submission</a>
          <RouterLink to="/information.html">Registration</RouterLink>
          <RouterLink to="/">Program</RouterLink>
          <RouterLink to="/news.html">News</RouterLink>
          <RouterLink to="/speakers.html">Speakers</RouterLink>
          <RouterLink to="/topics.html">Topics</RouterLink>
          <RouterLink to="/committees.html">Committees</RouterLink>
          <RouterLink to="/contact.html">Contact</RouterLink>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
import { Message, Phone } from '@element-plus/icons-vue'
import { conference } from '../data/site'
</script>
