<template>
      <div class="row justify-end">
          <q-btn
            type="submit"
            :loading="load"
            label="Save"
            class="q-mt-md"
            color="purple-4"
          >
            <template v-slot:loading>
              <q-spinner-facebook />
            </template>
          </q-btn>
        </div>
</template>

<script>
export default {
     props: {
    load: {
      type: Boolean, 
      required: false,  
       },
       }
}
</script>