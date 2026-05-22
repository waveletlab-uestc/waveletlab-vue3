<template>
  <PageFrame
    title="Contact"
    breadcrumb="Contact"
    description="Secretariat contact information for ICCWAMTIP 2026."
  >
    <section class="section-block">
      <h2>2026 23rd ICCWAMTIP Secretariat</h2>
      <p>For more information about ICCWAMTIP, feel free to contact.</p>
      <div class="contact-grid">
        <a class="contact-card" :href="`tel:${conference.phone.replaceAll(' ', '')}`">
          <Phone />
          <span>Tel.</span>
          <strong>{{ conference.phone }}</strong>
        </a>
        <a class="contact-card" :href="`mailto:${conference.email}`">
          <Message />
          <span>E-mail</span>
          <strong>{{ conference.email }}</strong>
        </a>
      </div>
    </section>
    <section class="section-block">
      <h2>QQ Group Chat</h2>
      <p>We will answer your question about the submission of the paper or other related questions here.</p>
      <img class="qr-image" src="/images/QQGroup.jpg" alt="ICCWAMTIP QQ group QR code" />
    </section>
  </PageFrame>
</template>

<script setup>
import { Message, Phone } from '@element-plus/icons-vue'
import PageFrame from '../components/PageFrame.vue'
import { conference } from '../data/site'
</script>
