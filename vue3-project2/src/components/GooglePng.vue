<template>
  <img :src="imageUrl" v-bind:id="headingId"/>
</template>




<script setup>
import { ref } from 'vue';

  const imageUrl = new URL('../assets/google.svg', import.meta.url).href;
  const headingId = ref('heading')
</script>


<!-- https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-image-src
var imagePath = computed(() => {
  switch (condition.value) {
    case 1:
      const imgUrl = new URL('../assets/1.jpg',
        import.meta.url)
      return imgUrl
      break;
    case 2:
      const imgUrl2 = new URL('../assets/2.jpg',
        import.meta.url)
      return imgUrl2
      break;
    case 3:
      const imgUrl3 = new URL('../assets/3.jpg',
        import.meta.url)
      return imgUrl3
      break;
  }
}); -->