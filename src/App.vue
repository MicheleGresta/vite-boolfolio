<script>


export default {


}

</script>
<template>
  <header>
    <div class="container">
      <ul class="d-flex gap-3 list-unstyled">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'projects' }">Projects</router-link></li>
        <li><router-link :to="{ name: 'contacts' }">Contacts</router-link></li>
        <li><router-link :to="{ name: 'about' }">About Me</router-link></li>
      </ul>
    </div>
  </header>
  <main>
    <div class="container">
      <h3>main</h3>
      <div class="d-flex gap-3">


        <router-view></router-view>
      </div>
    </div>
  </main>
  <footer>
    <div class="container">
      <h3>footer</h3>
    </div>
  </footer>
</template>
<style lang="scss"></style>