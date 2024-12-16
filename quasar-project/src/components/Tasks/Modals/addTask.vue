<template>
  <q-card>
    <modalHeader @close="CloseDialog"/>
    <q-card-section>
      <form @submit.prevent="formSubmit">
       <ModalTaskName 
       v-model:modelName="taskToSubmiting.name"
      ref="modalTaskName"
       />

       <ModalDueDate  v-model:DueDate="taskToSubmiting.dueDate"
       @clear="clearDueDate"
       ref="ModalDueDate"
        />


         <ModalDueTime 
         :DueDate="taskToSubmiting.dueDate"
          v-model:DueTime="taskToSubmiting.dueTime"
       ref="ModalDueTime"

        />

       
<ModalSaveBtn :load="loading"/>
      
      </form>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import modalHeader from "./Shared/ModelHeader.vue";
import ModalTaskName from "./Shared/ModelTaskName.vue";
import ModalDueDate from "./Shared/ModelDueDate.vue";
import ModalDueTime from "./Shared/ModelDueTime.vue";
import ModalSaveBtn from "./Shared/ModelSaveBtn.vue";


export default {
  data() {
    return {
      loading: false,
      taskToSubmiting: {
        name: "",
        completed: false,
        dueDate: "",
        dueTime: "",
      },
    };
  },

  methods: {
    ...mapActions("storeTasks", ["addTask"]),
    formSubmit() {
      this.loading = true;

      setTimeout(() => {

       // الوصول إلى الـ ref داخل المكون الفرعي
        const modalTaskNameRef = this.$refs.modalTaskName;
        const modalTaskDateRef = this.$refs.ModalDueDate;
        const modalTaskTimeRef = this.$refs.ModalDueTime;


        // الوصول إلى الـ ref داخل ModalTaskName
        const inputName = modalTaskNameRef.$refs.name;
        const inputDate = modalTaskDateRef.$refs.date;
        const inputTime = modalTaskTimeRef.$refs.time;

        
        // التحقق من صحة الحقول
        inputName.validate();
        inputDate.validate();
        inputTime.validate();
        // this.$refs.time.validate();

        if (
          !inputName.hasError
          //  && !this.$refs.date.hasError &&
          // !this.$refs.time.hasError
        ) {
          this.addTask(this.taskToSubmiting);
        }

        this.loading = false;
        this.$emit("close");
      }, 500);
    },

    clearDueDate() {
     
      this.taskToSubmiting.dueDate = "";
      this.taskToSubmiting.dueTime = "";
    },

    CloseDialog(){
        this.$emit("close");

    }
  },

  components:{
   modalHeader,
   ModalTaskName,
   ModalDueDate,
   ModalDueTime,
   ModalSaveBtn
  }
};
</script>
