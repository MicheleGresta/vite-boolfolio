<script>
import axios from 'axios';
export default {
  data() {
    return {
      projects: {}
    }
  },
  methods: {
    fetchData() {
        axios.get("http://127.0.0.1:8000/api/projects/" + this.$route.params.id)
        .then((resp) => {
            this.projects = resp.data;
            console.log(this.projects);
        })
      
    },
    getUrlImage(project) {
      return `http://127.0.0.1:8000/storage/${project.image}`;
    }
  },
  mounted() {
    this.fetchData();
  }
}

</script>
<template>
  <div class="container">
    <img :src="getUrlImage(projects)">
    <h1>{{ projects.title }}</h1>

  </div>
</template>
<style scoped lang="scss">

</style>