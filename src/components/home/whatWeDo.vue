<template>
    <v-container class="elevation-0 pa-2" style="border-radius: 15px; border:1px solid #bdbdbd">
        <v-layout wrap align-center justify-center row fill-height>
           <v-flex xs12 md3 lg3 class="pa-3 text-xs-center">
               <img src="https://www.gstatic.com/images/branding/product/1x/google_cloud_48dp.png" width="40vh">
               <p class="google-font" style="font-size:180%">What to expect?</p>
            </v-flex> 
            <v-flex xs12 md9 lg9 class="py-4">
                <v-layout row wrap>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%;color:#EA4335">chat_bubble</v-icon>
                        <p class="google-font" style="font-size:130%;color:#EA4335">Session</p>
                        <p class="google-font" style="font-size:110%">Sessions and talks on topics like Google Cloud Platform and its services</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%;color:#FBBC05">code</v-icon>
                        <p class="google-font" style="font-size:130%;color:#FBBC05">Codelabs</p>
                        <p class="google-font" style="font-size:110%">Get hands-on experience and guidance on Google Cloud Platform</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%;color:#4285F4">supervisor_account</v-icon>
                        <p class="google-font" style="font-size:130%;color:#4285F4">Networking</p>
                        <p class="google-font" style="font-size:110%">Work hard and enjoy, Next'19 Extended is the best place to meet new people</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%;color:#34A853">group_work</v-icon>
                        <p class="google-font" style="font-size:130%;color:#34A853">Showcases</p>
                        <p class="google-font" style="font-size:110%">Demo zone with the latest of Google tech: Actions by members in tech all in one place</p>
                    </v-flex>

                </v-layout>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        
    }
}
</script>
