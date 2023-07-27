<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <img :src="logo" />
</template>



<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  imagePath: { type: String },
})

const logo = ref()
watchEffect(async () => {
  logo.value = (await import(/* @vite-ignore */ `../assets/${props.imagePath}`)).default
})
</script>