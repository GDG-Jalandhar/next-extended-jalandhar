<template>
  <v-content class="pa-0">

    <v-container fluid class="my-4" >
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10 >
          <HomeStartScreen />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid  >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <whatWeDo />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <speakers />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <sessions />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <partners />
        </v-flex>
      </v-layout>
    </v-container>

    


  </v-content>
  
</template>

<script>
  import HomeStartScreen from '@/components/home/HomeStartScreen'
  import whatWeDo from '@/components/home/whatWeDo'
  import speakers from '@/components/home/speaker'
  import sessions from '@/components/home/sessions'
  import partners from '@/components/home/partners'
  
  export default {
    components: {
      HomeStartScreen,
      whatWeDo,
      speakers,
      sessions,
      partners,
      
    }
  }
</script>
