<template>
  <div class="home">
    <h1>Browse</h1>
    <ContactsFilter />
    <ContactsTable />
    <ContactsTablePagination />
    <ContactViewCard />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactViewCard from '@/components/ContactViewCard.vue';
import ContactsTable from '@/components/ContactsTable.vue';
import ContactsFilter from '@/components/ContactsFilter.vue';
import ContactsTablePagination from '@/components/ContactsTablePagination.vue';

export default {
  name: 'home',
  components: {
    ContactViewCard,
    ContactsFilter,
    ContactsTable,
    ContactsTablePagination
  }
};
</script>
