<template>
  <router-view />
</template>

<style>
/* Global override */
a {
  text-decoration: none;
  color: black;
}

.overflow-x-scroll {
  overflow-x: scroll;
}

.nav-tabs .nav-link.active {
  color: #d9534f;
}

.nav-tabs .nav-link {
  color: black;
}

::-webkit-scrollbar {
  display: none;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border-bottom: 2px solid red;
}
</style>
 
