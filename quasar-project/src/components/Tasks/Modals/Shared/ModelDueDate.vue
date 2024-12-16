<template>
  <div class="row q-mb-sm">
    <q-input
      color="purple-12"
      v-model="localValue"
      label="Task Date"
      outlined
      rounded
      ref="date"
    >
      <template v-slot:append>
        <q-icon
          name="close"
          v-if="localValue"
          @click="$emit('clear')"
          class="cursor-pointer"
        />

        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="localValue" color="purple">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="purple-12" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  model: {
    prop: "DueDate",
    event: "update:DueDate",
  },
  props: {
    clearDueDate: {
      type: Function, 
      required: false,   },
    DueDate: {
      type: String,
      required: true,
    },
  },
  computed: {
    localValue: {
      get() {
        return this.DueDate;
      },
      set(value) {
        this.$emit("update:DueDate", value);
      },
    },
  },
};
</script>
