<template lang="html">
    <div>
      <p class="text-center caption">DESIGNED AND DEVELOPED BY VALERII TANCHOV &copy;2019-2020</p>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="css" scoped>

.v-toolbar {
  flex: none;
}

.nav_link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  text-decoration: none;
  font-weight: 500;
}

.router-link-exact-active {
  background: #1976d2;
  color: #fff;
}
</style>