<template lang="html">
    <v-data-table
        :headers="headers"
        :items="desserts"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
         </template>
      </v-data-table>
</template>

<script>
export default {
  data() {
    return {
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
      desserts: [{
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      }]
    }
  },

}
</script>

<style scoped>
</style>
