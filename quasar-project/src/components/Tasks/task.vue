<template>
  <q-item :class="!localCompleted ? 'bg-yellow-1' : 'bg-teal-1'" v-ripple>
    <q-item-section side top>
      <q-checkbox
        @click="updateTask({ id: id, updates: { completed: localCompleted } })"
        v-model="localCompleted"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': localCompleted }"
        >{{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>

        <div class="column">
          <q-item-label class="row justify-end" caption>
            <q-badge color="deep-orange-0" text-color="white">
              {{ task.dueDate }}
            </q-badge>
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            <q-badge color="cyan-5" text-color="white">
              {{ task.dueTime }}
            </q-badge>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
      <q-btn
        @click.stop="showEditTask =true"
        push
        dense
        color="white"
        text-color="teal"
        round
        icon="edit"
       
      />
      
        <q-btn
        @click.stop="promptToDelete(id)"
        push
        dense
        color="white"
        text-color="red"
        round
        icon="delete"
      />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
        <editTask @close="closeDialog" 
        :task="task"    :id="id"
        />
      </q-dialog>
  </q-item>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { useQuasar } from "quasar";
import  editTask from "./Modals/editTask.vue";

export default {
  //  computed: {
  //     ...mapGetters("storeTasks", ["tasks"]),
  //   },
  data() {
    return {
      localCompleted: this.task.completed,
    };
  },

  props: ["task", "id"],
  data(){
    return{
      showEditTask:false
    }
  },
  components:{
  editTask
},

  methods: {
    ...mapActions("storeTasks", ["updateTask", "deleteTask"]),

    promptToDelete(id) {
      const $q = this.$q; // الوصول إلى Quasar باستخدام this
      $q.dialog({
        title: "Confirm",
        message: "Really Delete ??",
        ok: {
          push: true,
          color: "purple",
        },
        cancel: {
          color: "purple-3",
        },
        persistent: true,
      })
        .onOk(() => {
          console.log(`Task ${id} deleted`);
          this.deleteTask(id);
        })
        .onCancel(() => {
          console.log("Task deletion canceled");
        });
    },

    // showEditTask(id){
    //       console.log("Task update ",id);

    // }
  },

};
</script>
