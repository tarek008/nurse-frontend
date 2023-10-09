<template>
  <v-row>
    <v-col cols="12" lg="2" md="2"> </v-col>
    <v-col cols="12" lg="8" md="8">
      <Nurses
        :nurses="nurses"
        @filter-changed="handleFilterChange"
        @page-changed="handlePageChange"
      />
    </v-col>
    <v-col cols="12" lg="2" md="2"> </v-col>
  </v-row>
</template>

<script>
import Nurses from "@/components/Nurses.vue";

export default {
  name: "NursesView",
  components: {
    Nurses,
  },
  data() {
    return {
      nurses: [],
      page: 1,
      limit: 10,
    };
  },
  methods: {
    async fetchNurses() {
      return await fetch(process.env.VUE_APP_ALL_NURSES_ENDPOINT).then((res) =>
        res.json()
      );
    },
    handlePageChange(page) {
      this.page = page;
    },
    async fetchNursesParPage() {
      const url = `${process.env.VUE_APP_PAGINATION_ENDPOINT}?page=${this.page}&limit=${this.limit}`;
      const res = await fetch(url);
      const data = await res.json();
      return data.data;
    },
    async fetchNursesByField(sortBy) {
      const url = `${process.env.VUE_APP_SORT_BY_Field_ENDPOINT}?sortBy=${sortBy}`;
      return await fetch(url).then((res) => res.json());
    },
    async handleFilterChange(filter) {
      this.page = 1;
      switch (filter) {
        case "FirstName":
          this.nurses = await this.fetchNursesByField("firstname");
          break;
        case "LastName":
          this.nurses = await this.fetchNursesByField("lastname");
          break;
        case "ZipCode":
          this.nurses = await this.fetchNursesByField("zipcode");
          break;
        default:
          this.nurses = await this.fetchNurses();
          break;
      }
    },
  },
  watch: {
    page: "fetchNursesParPage",
  },
  async created() {
    this.nurses = await this.fetchNurses();
  },
};
</script>

<style scoped></style>
