<template>
  <div>
    <p>contacts control component</p>
    <SearchAndSort />
    <CreateNew />
  </div>
</template>

<script>
import CreateNew from '@/components/CreateNew.vue';
import SearchAndSort from '@/components/SearchAndSort.vue';
export default {
  components: {
    CreateNew,
    SearchAndSort
  }
};
</script>

<style lang="scss" scoped></style>
