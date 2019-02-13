<template>
     <v-container fluid grid-list-xl>

      <v-layout column>
        <v-flex>
            <v-layout>
                <v-flex d-flex xs12 sm12 md12>
              
                  <v-data-table :headers="mainHeaders"
                                :items="respositories"
                                item-key="name"
                                hide-actions
                                class="elevation-1">

                    <template slot="items" slot-scope="props">
                      <tr>
                        <td>  
                          <v-list-tile-avatar> 
                            <img :src="props.item.owner.avatar_url"> 
                          </v-list-tile-avatar>
                        </td>
                        <td class="text-xs">{{ props.item.full_name }}</td>
                        <td class="text-xs">{{ props.item.stargazers_count }}</td>
                        <td class="text-xs">{{ props.item.forks_count }}</td>
                      </tr>
                    </template>
               
                  </v-data-table>
                </v-flex>
            </v-layout>
        </v-flex>
      </v-layout>
   </v-container>

</template>

<script>
export default {
  data () {
    return {
      mainHeaders: [
          { text: 'Avatar', value: 'avatar' },
          { text: 'Name', value: 'name' },
          { text: 'Star', value: 'star' },
          { text: 'Fork', value: 'forks' }
      ]
    }
  },
  mounted(){
     this.$store.dispatch('getRespositories');
  },
  computed: {
     respositories(){
       return this.$store.state.repositories;
     }
  }
}
</script>