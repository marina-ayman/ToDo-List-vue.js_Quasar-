<template>
  <q-page class="flex flex-center" padding>
    <h2>TTkkkkkkkkkkkkkkk</h2>

    <!-- <div v-touch-pan="handler">...</div> -->
    <div v-touch-swipe="handler">...</div>
    <div v-ripple>Click me. I got ripples.</div>


    <div>
  <q-btn @click="doSomething" label="Do something" />
  <q-icon name="alarm" />
</div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: "index page",
    };
  },
};
</script>
