<template>
  <div class="search-sort-container">
    <button id="search" v-on:click="toggleSearch()">Search</button>
    <button id="filter" v-on:click="toggleFilter()">Filter</button>
    <input type="text" v-if="searchActive" />
    <select name="directorate" v-else>
      <option
        v-for="option in filterOptions"
        v-bind:value="option.value"
        v-bind:key="option.id"
      >{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchActive: true,
      filterOptions: [
        { text: 'Finance', val: 'Finance', id: 0 },
        { text: 'Legal', val: 'Legal', id: 1 },
        { text: 'Human Resources', val: 'Human Resources', id: 2 },
        { text: 'Marketing', val: 'Marketing', id: 3 }
      ]
    };
  },
  methods: {
    toggleSearch: function() {
      this.searchActive = true;
      console.log('hey');
    },
    toggleFilter: function() {
      this.searchActive = false;
      console.log('heyo');
    }
  }
};
</script>

<style lang="scss" scoped>
.search-sort-container {
  display: flex;
  justify-content: center;
}

#search,
#filter {
  background-color: #deedfc;
  color: #336699;
  font-size: 1.4em;
  padding: 0.3em 1em;
  border: none;
  margin-right: 0.2em;
}

select,
input {
  width: 350px;
}
</style>
