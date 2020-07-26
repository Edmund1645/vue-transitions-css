<template>
  <div id="navbar">
    <nav>
      <h1 class="title">Vue Transitions with CSS</h1>

     
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
}
#navbar nav {
  height: 60px;
  background-color: var(--color-primary);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  margin-bottom: 1.5rem;
}
.title {
  display: inline-block;
  font-weight: 800;
  color: #ffffff;
}
.links {
  list-style: none;
  display: flex;
}
.links li {
  margin-right: 20px;
}
.links li a {
  color: #ffffff;
}

@media only screen and (max-width: 600px) {
  #navbar nav {
    height: unset; 
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>
