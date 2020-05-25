<template>
  <div id="navbar">
    <nav>
      <h1 class="title">Vue Transitions CSS</h1>

      <ul class="links">
        <li>
          <a
            href="https://twitter.com/26th_edmund"
            target="_blank"
            rel="noopener"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/edmund1645"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style scoped>
#navbar nav {
  height: 60px;
  background-color: #44a1df;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
</style>
