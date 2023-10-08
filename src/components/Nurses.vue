<template>
  <div class="nurses-page">
    <h1>Nurses Page</h1>
    <p>
      Welcome to the Nurses page. Here you can find information about our
      dedicated nurses.
    </p>

    <div class="table-container">
      <div class="serach-tri">
        <v-responsive class="mx-auto" max-width="344">
          <v-text-field
            data-testid="Search"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-responsive>
        <v-responsive class="mx-auto" max-width="344">
          <!--v-model="selectedFilter" to track the selected filter -->
          <v-select
            v-model="selectedFilter"
            :items="items"
            density="compact"
            label="Filter By"
            data-testid="Filter_Button"
          ></v-select>
        </v-responsive>
      </div>

      <v-table class="bordered-table">
        <thead>
          <tr>
            <th class="text-left T-header">Firstname</th>
            <th class="text-left T-header">Lastname</th>
            <th class="text-left T-header">Zipcode</th>
            <th class="text-left T-header">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="item in displayedNurses">
            <td class="text-left">{{ item.firstname }}</td>
            <td class="text-left">{{ item.lastname }}</td>
            <td class="text-left">{{ item.zipcode }}</td>
            <td class="text-left">{{ item.email }}</td>
          </tr>
        </tbody>
      </v-table>

      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nurses",
  props: {
    nurses: {
      type: Array,
    },
  },
  data() {
    return {
      search: "",
      items: ["All", "FirstName", "LastName", "ZipCode"],
      page: 1,
      itemsPerPage: 10,
      selectedFilter: "All",
    };
  },
  watch: {
    selectedFilter(newValue) {
      this.$emit("filter-changed", newValue);
      this.page = 1;
    },
    page(newValue) {
      this.$emit("page-changed", newValue);
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.nurses.length / this.itemsPerPage);
    },
    filteredNurses() {
      return this.nurses.filter((nurse) => {
        let searchText = this.search.toLowerCase();

        switch (this.selectedFilter) {
          case "FirstName":
            return nurse.firstname.toLowerCase().includes(searchText);
          case "LastName":
            return nurse.lastname.toLowerCase().includes(searchText);
          case "ZipCode":
            return nurse.zipcode.toLowerCase().includes(searchText);
          default:
            return (
              nurse.firstname.toLowerCase().includes(searchText) ||
              nurse.lastname.toLowerCase().includes(searchText) ||
              nurse.zipcode.toLowerCase().includes(searchText) ||
              (nurse.email && nurse.email.toLowerCase().includes(searchText))
            );
        }
      });
    },
    displayedNurses() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredNurses.slice(start, end);
    },
  },
};
</script>

<style scoped>
.nurses-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.table-container {
  width: 80%;
  margin-top: 20px;
}

.T-header {
  background-color: lightblue;
  font-weight: bold;
  color: white !important ;
}
.bordered-table {
  border: 1px solid black;
  border-collapse: collapse;
}

.serach-tri {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
