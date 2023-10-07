<template>
  <Nurses :nurses="nurses" @filter-changed="handleFilterChange" />
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
    };
  },
  methods: {
    fetchNurses() {
      const res = fetch(process.env.VUE_APP_ALL_NURSES_ENDPOINT);
      const data = res.then((res) => res.json());
      return data;
    },
    fetchNursesByFirstName() {
      const res = fetch(process.env.VUE_APP_SORT_BY_FIRSTNAME_ENDPOINT);
      const data = res.then((res) => res.json());
      return data;
    },
    fetchNursesByLastName() {
      const res = fetch(process.env.VUE_APP_SORT_BY_LASTNAME_ENDPOINT);
      const data = res.then((res) => res.json());
      return data;
    },
    fetchNursesByZipCode() {
      const res = fetch(process.env.VUE_APP_SORT_BY_ZIPCODE_ENDPOINT);
      const data = res.then((res) => res.json());
      return data;
    },
    async handleFilterChange(filter) {
      switch (filter) {
        case "FirstName":
          this.nurses = await this.fetchNursesByFirstName();
          break;
        case "LastName":
          this.nurses = await this.fetchNursesByLastName();
          break;
        case "ZipCode":
          this.nurses = await this.fetchNursesByZipCode();
          break;
        default:
          this.nurses = await this.fetchNurses();
          break;
      }
    },
  },
  async created() {
    this.nurses = await this.fetchNurses();
  },
};
</script>

<style scoped></style>
