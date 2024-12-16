<template>
  <q-page class="q-pa-md">
    <div class="absolute-bottom-9 text-right q-mb">
      <!-- <q-btn
        color="grey-1"
        round
        size="20px"
        text-color="purple"
        glossy
        icon="library_add"
       
        @click="showAddTask = true"
      /> -->

      <q-dialog v-model="showAddTask">
        <addTask @close="closeDialog" />
      </q-dialog>
    </div>

    <q-list separator bordered>
      <q-item class="bg-grey-5 row" v-ripple>
        <div class="text-h6">Add Task</div>
        <q-space />
        <q-btn
          color="grey-1"
          rounded
          size="15px"
          text-color="purple"
          glossy
          icon="library_add"
          label="add"
          @click="showAddTask = true"
        />
      </q-item>
    </q-list>

    <q-list v-if="Object.keys(tasks).length" separator bordered>
      <taskComp
        v-for="(task, key) in tasks"
        :key="key"
        :id="key"
        :task="task"
      />
    </q-list>

    <q-list  v-else separator bordered>
      <q-item  class="bg-blue-grey-1 row" v-ripple>
        <div class="text-h6 ">
          No Task Founded
        </div>

      </q-item>
    </q-list>

  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import taskComp from "../components/Tasks/task.vue";
import addTask from "../components/Tasks/Modals/addTask.vue";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },

  components: {
    taskComp,
    addTask,
  },

  computed: {
    ...mapGetters("storeTasks", ["tasks"]),
  },
  methods: {
    closeDialog() {
      this.showAddTask = false;
    },
  },
};
</script>
