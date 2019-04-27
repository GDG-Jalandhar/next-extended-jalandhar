<template>
  <v-content class="pa-0" :style="{'background-image':'url('+require('@/assets/img/svg/3.svg')+')'}" style="background-size:5000px;background-position: left center">

    <v-container fluid class="pt-3 mb-0" >
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-5 ">
          <img src="https://www.gstatic.com/images/branding/product/1x/google_cloud_48dp.png" class="mb-0" width="30vh">
          <p class="google-font mb-0 mt-0" style="font-size:200%;">{{eventDetails.EventName}}</p>
          <p class="google-font" style="font-size: 120%">Join us at Venue Name as we celebrate product and platform innovations at Google.</p>

          <p class="google-font mt-0" style="font-size:130%">When: {{eventDetails.EventDate.Date}}-{{eventDetails.EventDate.Month}}-{{eventDetails.EventDate.Year}} <br>Where: {{eventDetails.EventVenue}}  </p> 
          
            <v-btn :href="eventDetails.RegistrationLink" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">Requst for an Invatation</v-btn>

            &nbsp;

            <v-btn :href="eventDetails.MeetupLink" target="_blank" round color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outline  class="ml-0" dark>Meetup</v-btn>
        
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="pt-0 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-3 ">
          <p class="google-font mb-0 mt-0" style="font-size:200%;">What to expect and explore</p>
          <p class="google-font" style="max-width:700px;font-size: 120%">Next Extended 2019 Jalandhar features hands-on learning, Google's latest developer products, and technical talks given by the engineers who are developing our latest APIs and tools–plus a few surprises along the way.</p>

          <p class="google-font mb-0" style="font-size:120%;color:#4B515D"><b>Sessions</b></p>
          <p class="google-font mt-0">Learn Google's latest developer products from developers, Google Developer Experts and more.</p>

          <p class="google-font mb-0" style="font-size:120%;color:#4B515D"><b>Sandbox</b></p>
          <p class="google-font mt-0">Dedicated spaces to explore, learn, and play with our latest products and platforms via interactive demos, physical installations, and more..</p>

          <p class="google-font mb-0" style="font-size:120%;color:#4B515D"><b>Meals</b></p>
          <p class="google-font mt-0">Attendees are offered complimentary lunch.</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="pt-0 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-2 pa-0">
          <faq/>
        </v-flex>
      </v-layout>
    </v-container>

 


  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import faq from '@/components/common/faq'
import eventDetails from '@/assets/data/eventDetails.json'
  export default {
    components: {
      faq
    },
    data() {
      return {
        ChapterDetails: ChapterDetails,
        eventDetails:eventDetails,
        currentItem: 'tab-Sessions',
        items: [
          'Sessions', 'Schedule'
        ],
      }
    },
  }
</script>
