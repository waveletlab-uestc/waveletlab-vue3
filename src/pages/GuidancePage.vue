<template>
  <PageFrame
    title="Author Guidance"
    breadcrumb="Author Guidance"
    description="Submission format, CMT submission steps, fees, and acknowledgement."
  >
    <section class="section-block faq-list">
      <article>
        <h2>How to know the paper format of the conference?</h2>
        <p>
          Please pay an attention to the left side of this website, you can find
          <a href="/doc/PaperFormat-EN.dotx">PAPER FORMAT (EN)</a> or
          <a href="/doc/PaperFormat-CN.dotx">PAPER FORMAT (CN)</a> (please download format file to see specifications).
        </p>
      </article>
      <article>
        <h2>Where can I find the detailed information for this conference?</h2>
        <p>
          Call for paper (CN): <a href="/doc/CallforPaper-CN.pdf">CallForPaper-CN</a>. Call for paper (EN):
          <a href="/doc/CallforPaper-EN.pdf">CallForPaper-EN</a>.
        </p>
      </article>
      <article>
        <h2>How to submit my paper?</h2>
        <p>We use CMT system to manager our conference this time.</p>
        <ol>
          <li>Register an account in <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noreferrer">CMT system</a>.</li>
          <li>
            Log in your account, then go to the
            <a href="https://cmt3.research.microsoft.com/ICCWAMTIP2025/Submission/Index" target="_blank" rel="noreferrer">
              submission page
            </a>.
          </li>
          <li>Submit your paper.</li>
        </ol>
      </article>
      <article>
        <h2>How to know whether my paper is accepted by our conference?</h2>
        <p>Once your paper is accepted, we will send an email to you. And you can check your paper status all the time in the system.</p>
      </article>
    </section>

    <section class="section-block">
      <h2>About the paper fee</h2>
      <DataTable :columns="feeColumns" :rows="fees" />
      <p>Example: 6 pages will be charged for 3600￥(2800+400×2).</p>
    </section>

    <section class="section-block">
      <h2>More questions?</h2>
      <p>
        If you have any question about our conference, please send email to us or join our WeChat group in
        <RouterLink to="/contact.html">contact page</RouterLink>.
      </p>
      <p>Our email: <a :href="`mailto:${conference.email}`">{{ conference.email }}</a></p>
    </section>

    <section class="section-block">
      <h2>Acknowledgment</h2>
      <p>
        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was
        provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as
        for software development and support.
      </p>
    </section>
  </PageFrame>
</template>

<script setup>
import DataTable from '../components/DataTable.vue'
import PageFrame from '../components/PageFrame.vue'
import { conference } from '../data/site'

const feeColumns = [
  { key: 'pages', label: 'Number of pages' },
  { key: 'fee', label: 'Fee' },
]

const fees = [
  { pages: 'Less than 4 pages (include 4 pages)', fee: '2800￥' },
  { pages: 'More than 4 pages, for each additional page', fee: '400￥' },
]
</script>
