<template>
  <body>
  
    <router-view />
  </body>
</template>
<script lang="ts" setup>

</script>
<style>

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  font-family: "Source Sans Pro", sans-serif;
}
/* flexbox */
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
}

</style>
