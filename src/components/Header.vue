<template>
  <v-app>
    <v-app-bar app color="blue-darken-2" dark>
      <v-toolbar-title>
        <v-img
          src="Images/LibHeros_Logo.png"
          alt="Logo"
          max-height="48"
          class="mr-3"
        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/" class="nav-link"> Home </router-link>

      <router-link
        data-testid="Nurses_Nav_Bar"
        :to="{ name: 'nurses' }"
        class="nav-link"
      >
        Nurses
      </router-link>
    </v-app-bar>
  </v-app>
</template>

<style scoped>
.v-app-bar {
  background-color: #1565c0;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin-right: 60px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>

<script>
export default {
  name: "Header",
};
</script>
