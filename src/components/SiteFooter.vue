<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <section>
        <h2>{{ conference.shortName }}</h2>
        <p>{{ conference.fullName }}</p>
        <ul class="footer-contact">
          <li>
            <Phone />
            <span>{{ t('footer.tel') }} {{ conference.phone }}</span>
          </li>
          <li>
            <Message />
            <a :href="`mailto:${conference.email}`">{{ conference.email }}</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>{{ t('footer.linksTitle') }}</h2>
        <div class="footer-links">
          <a :href="conference.cmtUrl" target="_blank" rel="noreferrer">{{ t('footer.links.submission') }}</a>
          <RouterLink to="/information.html">{{ t('footer.links.registration') }}</RouterLink>
          <RouterLink to="/">{{ t('footer.links.program') }}</RouterLink>
          <RouterLink to="/news.html">{{ t('footer.links.news') }}</RouterLink>
          <RouterLink to="/speakers.html">{{ t('footer.links.speakers') }}</RouterLink>
          <RouterLink to="/topics.html">{{ t('footer.links.topics') }}</RouterLink>
          <RouterLink to="/committees.html">{{ t('footer.links.committees') }}</RouterLink>
          <RouterLink to="/contact.html">{{ t('footer.links.contact') }}</RouterLink>
        </div>
      </section>
      <section class="footer-map">
        <p class="footer-map__eyebrow">{{ t('footer.mapEyebrow') }}</p>
        <a class="footer-map__card" :href="conference.mapUrl" target="_blank" rel="noreferrer">
          <span class="footer-map__icon" aria-hidden="true">
            <MapLocation />
          </span>
          <span>
            <strong>{{ conference.venue }}</strong>
            <span>{{ conference.address }}</span>
            <em>{{ t('footer.openMap') }}</em>
          </span>
          <Position class="footer-map__arrow" aria-hidden="true" />
        </a>
      </section>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { MapLocation, Message, Phone, Position } from '@element-plus/icons-vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const conference = computed(() => tm('conference'))
</script>
