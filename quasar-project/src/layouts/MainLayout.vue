<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-purple">
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="absolute-center">
        Awesome ToDo
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

   <q-footer elevated class="bg-purple">
     <q-tabs >
        <q-route-tab  v-for="(link,i) in linksList"
         :key="i"
         :name="link.name"
          :icon="link.icon" 
          :to="link.link"
          exact
           />
       
     </q-tabs>
      
      </q-footer>
     
    <q-drawer
    :breakpoint="767"
    :width="200"
   class="bg-deep-purple-1"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
         Navigation
        </q-item-label  >
  

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'ToDo List',
    caption: 'your lists',
    icon: 'view_list',
    link: '/'
  },
  {
    title: 'Settings',
    caption: 'Settings',
    icon: 'settings',
    link: '/settings'
  },
  // {
  //   title: 'Discord Chat Channel',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: 'https://chat.quasar.dev'
  // },
  // {
  //   title: 'Forum',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: 'https://forum.quasar.dev'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>


<style>
@media screen and(min-width: 768px){
  .q-footer{
    display: none;
  }
}

q-drawer .q-router-link-exact-active{
  color: white !important;
}
</style>
