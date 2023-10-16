<script>

import ProjectCard from './components/ProjectCard.vue';
export default{

  components:{
    ProjectCard
},
}

</script>
<template>
  <div class="container">
    <h1 class="text-center py-3">Projects List</h1>
    <div class="row row-cols-3 my-5">
        <ProjectCard></ProjectCard>      
    </div>
    
  </div>
</template>
<style lang="scss"></style>