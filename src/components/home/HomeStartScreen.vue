<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height  >
            <v-flex xs12 sm5 md5 lg5 xl5 class="text-xs-center pa-1">
                <v-img
                    :src="require('@/assets/img/mainhome.png')"
                    :lazy-src="require('@/assets/img/mainhome.png')"
                    width="100%">
                    <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
            </v-flex> 
            
            <v-flex xs12 sm7 md7 lg7 xl7 class="">
                <p class="google-font mb-0" style="color: #616161;font-size:150%"><b>Cloud for 
                    everyone.</b>
                </p>
                <p class="google-font mb-0 mb-1" style="font-size:300%"><b>
                    <span style="color: #1A73E8;">{{eventDetails.EventName}}</span></b>
                </p>
                <p class="google-font mt-0" style="font-size:180%">{{chapterDetails.ChapterName}}</p>

                <p class="google-font mt-0" style="font-size:110%">{{eventDetails.EventDate.Date}}-{{eventDetails.EventDate.Month}}-{{eventDetails.EventDate.Year}} | {{eventDetails.EventTime.StartTime}}-{{eventDetails.EventTime.EndTime}} | {{eventDetails.EventVenue}}  </p> 

                <p class="google-font" style="font-size:110%">{{eventDetails.EventDescription}}</p>
                <p class="google-font" style="font-size:110%;color:#9e9e9e">
                    <span v-for="(item,i) in chapterDetails.ChapterHashTags" :key="i">
                        <v-chip>#{{item}}</v-chip>
                    </span>
                </p>

                <v-btn :href="eventDetails.RegistrationLink" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">Requst for an Invitation</v-btn>

                &nbsp;

                <v-btn :href="eventDetails.MeetupLink" target="_blank" round color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outline  class="ml-0" dark>Meetup</v-btn>
                
            </v-flex>

           
        </v-layout>


    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import eventDetails from '@/assets/data/eventDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
            eventDetails:eventDetails
        }
    },
}
</script>
