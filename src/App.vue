<script setup>
import { RouterView } from "vue-router";
import Cursor from '@/components/Cursor.vue';
import PreLoader from '@/components/PreLoader.vue';

</script>

<template>
  <!-- wrapper -->
  <div class="mil-wrapper" id="top">
    <Cursor/>
    <PreLoader/>
    <RouterView />
  </div>
  <!-- wrapper end -->
</template>

<style scoped>
</style>
