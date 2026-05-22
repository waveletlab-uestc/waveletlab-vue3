<template>
  <section class="submit-banner" aria-label="Paper submission">
    <div class="container submit-banner__inner">
      <p>Accepted abstract &amp; full paper will be invited to give the presentation at ICCWAMTIP 2026</p>
      <div class="submit-banner__actions">
        <el-button tag="a" :href="conference.cmtUrl" target="_blank" rel="noreferrer" type="primary" size="large">
          Submit A Paper Now
        </el-button>
        <el-button tag="a" :href="conference.submissionInstruction" size="large">
          Instruction for Submission
        </el-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { conference } from '../data/site'
</script>
