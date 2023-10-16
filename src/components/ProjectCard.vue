<script>
import axios from 'axios';
export default {
  data() {
    return {
      projects: [],
      pagination: {}
    }
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/projects")
        .then((response) => {
          console.log(response);
          const results = response.data;
          this.projects = results.data;
          delete results.data;
          this.pagination = results
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
  <div class="col-4" v-for="project in projects">
    <a href="#">
      <div class="card">
        <img :src="getUrlImage(project)" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text"> {{ project.language }} </p>
        </div>
      </div>
    </a>
  </div>
</template>
<style scoped lang="scss">
a {
  text-decoration: none;
  font-style: none;
}

.card {
  height: 100%;
}
</style>