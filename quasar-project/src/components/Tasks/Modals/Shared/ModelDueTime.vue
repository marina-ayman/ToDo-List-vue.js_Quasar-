<template>
  <div v-if="DueDate" class="row q-mb-sm">
    <q-input
      v-model="localValue"
      label="Task Time"
      color="purple-12"
      outlined
      rounded
      ref="time"
      class="col"
    >
      <template v-slot:append>
        <q-icon
          name="close"
          v-if="localValue"
          @click="localValue = ''"
          class="cursor-pointer"
        />

        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="localValue" with-seconds format24h color="purple">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="purple" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  model: {
    prop: "DueTime",
    event: "update:DueTime",
  },
  props: {
    DueDate: {
      type: String,
      required: true,
    },
    DueTime: {
      type: String,
      required: true,
    },
  },
  computed: {
    localValue: {
      get() {
        return this.DueTime;
      },
      set(value) {
        this.$emit("update:DueTime", value);
      },
    },
  },
};
</script>
