<template>
  <div class="contacts-table-container">
    <ContactsControl />
    <ContactsTable />
    <ContactsTablePagination />
    <ContactViewCard />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactViewCard from '@/components/ContactViewCard.vue';
import ContactsTable from '@/components/ContactsTable.vue';
import ContactsControl from '@/components/ContactsControl.vue';
import ContactsTablePagination from '@/components/ContactsTablePagination.vue';

export default {
  name: 'home',
  components: {
    ContactViewCard,
    ContactsControl,
    ContactsTable,
    ContactsTablePagination
  }
};
</script>
