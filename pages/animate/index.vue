<template>
  <div ref="dropdown" class="dropdown">
    <strong class="dropdown-label" @click="show = !show">
      Click me to open!
    </strong>
    <p v-if="show">
      Lorum ipsum...
      Lorum ipsum...
      Lorum ipsum...
      Lorum ipsum...
      Lorum ipsum...
      Lorum ipsum...  Lorum ipsum...  Lorum ipsum...  Lorum ipsum...

      Lorum ipsum...  Lorum ipsum...  Lorum ipsum...  Lorum ipsum...  Lorum ipsum...  Lorum ipsum...
      Lorum ipsum...

    </p>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import autoAnimate from "@formkit/auto-animate"

const dropdown = ref() // we need a DOM node
const show = ref(false)

onMounted(() => {
  autoAnimate(dropdown.value) // thats it!
})
</script>
<style scoped>
.dropdown{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #5c6669;
}

</style>
