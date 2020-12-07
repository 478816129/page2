<template>
    <div class="page2">
     <Opversion></Opversion>
     <!-- discovery -->
     <Opdiscovery></Opdiscovery>
     <Opmonitor></Opmonitor>


    </div>
</template>
<script>
import Opversion from "../page2/Opversion.vue"
import Opdiscovery from '../page2/Opdiscovery.vue';
import Opmonitor from '../page2/Opmonitor.vue';
export default {
    components: { 
    Opversion ,
    Opdiscovery,
    Opmonitor
    }
}
</script>
<style>
body{
  background-color: rgb(34, 18, 138);
}
</style>