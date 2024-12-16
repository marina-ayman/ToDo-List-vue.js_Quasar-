<template>
  <div class="row q-mb-sm">
    <q-input
      color="purple-12"
     
       v-model="localValue"
      :rules="[(val) => !!val || 'Field is required']"
      label="Task Name"
      outlined
      rounded
      ref="name"
      class="col"
    >
      <template v-slot:append>
        <q-icon
          name="close"
          v-if="localValue"
          @click="localValue = ''"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>


<script>
export default {
    model: {
    prop: 'modelName',
    event: 'update:modelName'
  },
  props: {
    modelName: {  // يطابق قيمة v-model
      type: String,
      required: true
    }
  },
  computed: {
    localValue: {
      get() {
        return this.modelName;  // الحصول على القيمة من المكون الأب
      },
      set(value) {
        this.$emit("update:modelName", value);  // إرسال التحديث إلى المكون الأب
    
      }
    }
  }
}
</script>

