<template>
  <div>
    <Myheader></Myheader>
    <Opversion></Opversion>

  </div>
</template>

<script>
// @ is an alias to /src
import Myheader from '../indexCtrl/Myheader.vue'
import Opversion from "../page2/Opversion.vue"
export default {
  components: {
    Myheader,
     Opversion
  }
}
</script>
