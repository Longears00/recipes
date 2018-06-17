<template>
<v-layout row justify-center>
  <v-flex xs9 sm9 md9>
    <v-data-table :headers="headers" :items="test" :pagination.sync="pagination" :total-items="totalDesserts" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
            <td>{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.body }}</td>
           </template>
    </v-data-table>
  </v-flex>
  <v-spacer></v-spacer>
  <v-flex xs3 sm3 md3>
    <Card/>
  </v-flex>

</v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Table from '~/components/Table.vue'
import Card from '~/components/Card.vue'
export default {
  data() {
    return {
      totalDesserts: 0,
      pagination: {},
      headers: [{
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Calories',
          value: 'calories'
        }
      ],
      test: []
    }
  },
  created() {
    this.test = this.$store.state.test;
    this.totalDesserts = this.test.length;
  },
  middleware: 'search',
  components: {
    Logo,
    VuetifyLogo,
    Table,
    Card
  },

}
</script>
