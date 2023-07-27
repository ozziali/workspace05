<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    
    <Image imagePath="skull3.png" />

    <div class="wrapper" v-motion
    :initial="{ opacity: 100, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 6.2 }"
    :delay="200">
      <HelloWorld msg="You did it!" />
     
    </div>
  </header>
  
  <main>
    <TheWelcome />
   
  </main>
</template>

<script setup>
import Image from '@/components/Image.vue'

import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'


// export default {
//   name: 'App',
//   components: {
//     HelloWorld,
//     TheWelcome,
//     Image

//   },
// }


</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
