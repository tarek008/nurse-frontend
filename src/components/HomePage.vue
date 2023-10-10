<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>
          LIBHEROS FACILITE L'ACCÈS AUX SOINS ET À SANTÉ
          <h3 class="displayText">{{ displayText }}</h3>
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      text: ["PARTOUT,", "POUR TOUS"],
      currentLine: 0,
      currentChar: 0,
      displayText: "",
    };
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      if (this.currentChar < this.text[this.currentLine].length) {
        this.displayText += this.text[this.currentLine][this.currentChar];
        this.currentChar++;
        setTimeout(this.typeText, 400); // Time between each letter
      } else if (this.currentLine < this.text.length - 1) {
        this.displayText = "";
        this.currentLine++;
        this.currentChar = 0;
        setTimeout(this.typeText, 2000); // Time between each line
      } else {
        this.displayText = "";
        this.currentLine = 0;
        this.currentChar = 0;
        setTimeout(this.typeText, 2000); // Time  Restart
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #424d60;
  padding-top: 100px;
}
.displayText {
  color: #62e1ff;
}
</style>
