<template>
  <div >
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template class="red" v-slot:activator="{ on }">
        <p
          color="blue"
          style="cursor: pointer;color:blue"
          class="ma-0 mt-2 mb-0"
          v-on="on"
        >
          See More
        </p>

        <!-- <v-btn
          small
          outline
          dark
          color="grey"
          class="ma-0 mt-2"
          v-on="on"
        >
          see more
        </v-btn> -->
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{data.jsonData.title}}
        </v-card-title>

        <v-card-text>
            <p class="google-font mb-0">{{data.jsonData.des}}</p>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props:{
        data:{
            jsonData:[]
        }
    },
    data () {
      return {
        dialog: false
      }
    }
  }
</script>