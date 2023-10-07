<template>
  <v-container fluid>
    <v-row class="img_phone">
      <v-col cols="12" md="6" class="left-content">
        <div class="image-and-phone">
          <v-img
            src="Images/LibHeros_Logo.png"
            alt="Logo"
            max-height="48"
            class="mr-3"
          ></v-img>
          <p>01 75 43 44 47</p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <div class="text-center">
          ©libheros 2023, tous droits réservés, Conditions Générales de
          Prestations de Services et Politique de confidentialité
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.img_phone {
  display: flex;
  justify-content: space-between;
}

.left-content {
  display: flex;
  align-items: flex-start;
  margin-left: 30px;
  margin-bottom: 40px;
}

.image-and-phone {
  display: flex;
  flex-direction: column;
}
</style>
