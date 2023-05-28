<template>
  <div class="flex justify-center items-center text-3xl font-bold underline">
    <span>{{hello}}</span>
  </div>
</template>

<script lang="ts" setup>
import Vue from 'vue'
import {ref} from "vue";

const hello = ref("Hello world!")
</script>
