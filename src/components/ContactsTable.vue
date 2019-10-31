<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company</th>
          <th>Position</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in entries" :key="entry.guid">
          <td>{{ entry.firstName }}</td>
          <td>{{ entry.lastName }}</td>
          <td>{{ entry.Company }}</td>
          <td>{{ entry.position }}</td>
          <td>{{ entry.commercial }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js';
export default {
  data() {
    return {
      entries: [
        {
          guid: '6884d1bc-3745-4260-8524-cd273fccc0da',
          firstName: 'Constance',
          lastName: 'Ziehms',
          Company: 'RP, Inc',
          department: 'Accounting',
          position: 'Web Designer III',
          email: 'Constance.Ziehms@mail.mil',
          commercial: '917-911-4999',
          cell: '818-654-6085',
          Address: '64 Anthes Circle',
          State: 'New York'
        },
        {
          guid: '4bea5631-d57c-420c-bd6a-7a20ff30d3b4',
          firstName: 'Viviana',
          lastName: 'Wands',
          Company: 'Booze, Books, and Boards',
          department: 'Business Development',
          position: 'Compensation Analyst',
          email: 'Viviana.Wands@mail.mil',
          commercial: '915-139-8530',
          cell: '704-666-2495',
          Address: '845 Heath Circle',
          State: 'Texas'
        }
      ]
    };
  },
  methods: {},
  computed: {
    name() {
      return this.data;
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 1000px;
}
tbody {
  & tr:nth-child(even) {
    background-color: #eaf5ff;
  }
  td {
    border: 1px solid black;
  }
}
.table-container {
  max-height: 600px;
  width: 1002px;
  overflow-x: auto;
}
</style>
