<template>
  <v-content class="pa-0">

    <v-container fluid class=" pa-0 pt-3" style="border-bottom: 1px solid #e0e0e0;" >
      <v-layout wrap align-center justify-center row fill-height class="my-0" >
        <v-flex xs12 md10 class="my-0">
          <v-toolbar 
            color="white"
            tabs
            flat
            >
           

            <v-toolbar-title class="google-font" style="font-weight: 350;color: #616161;font-size:200%">Agenda</v-toolbar-title>
            <template v-slot:extension>
                <v-tabs
                  v-model="currentItem"
                  color="transparent"
                  slider-color="indigo"
                >
                  <v-tab
                    v-for="item in items"
                    :key="item"
                    :href="'#tab-' + item"
                    style="text-transform: capitalize"
                  >
                    {{ item }}
                  </v-tab>
        
                  
                </v-tabs>
              </template>
          </v-toolbar>
        </v-flex>
      </v-layout>
    </v-container>

    <v-tabs-items class="" v-model="currentItem">
      <v-tab-item
        value="tab-Sessions"
      >
        <v-container fluid class="my-0 py-0">
          <v-layout wrap align-center justify-center row fill-height class="my-0">
            <v-flex xs12 md10 class="my-3">
              <sessions/>
            </v-flex>
          </v-layout>
        </v-container>
      
      </v-tab-item>

      <v-tab-item
        value="tab-Schedule"
      
      >
      <v-container fluid class="my-0 py-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="my-3">
            <schedule/>
          </v-flex>
        </v-layout>
      </v-container>
      
      </v-tab-item>

    </v-tabs-items>

  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import sessions from '@/components/agenda/sessions'
import schedule from '@/components/agenda/schedule'
  export default {
    components: {
      sessions,
      schedule
    },
    data() {
      return {
        ChapterDetails: ChapterDetails,
        currentItem: 'tab-Sessions',
        items: [
          'Sessions', 'Schedule'
        ],
      }
    },
  }
</script>
