<template>
    <v-container class="pa-0">
        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
            <v-flex xs12>
                <p class="google-font mt-2 mb-0" style="font-size:170%;color:#37474F;" >Our lineup of big thinkers and even bigger doers</p>
                <p class="google-font">Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup. See More</p>
            </v-flex>
            <v-flex xs6 sm3 md3 lg2 v-for="(item,i) in SpeakerDetails" :key="i" class="text-xs-center" style="text-align:center">
                <!-- style="text-align:center;border: 1px solid #e0e0e0;min-height:250px;border-radius:7px" -->
                <v-hover>
                <div slot-scope="{ hover }"
                    style="border-radius: 5px; border:1px solid white"
                    :class="`elevation-${hover ? 2 : 0}`"
                    class="text-xs-center ma-1 pa-1 py-3 my-0" >
                    <v-avatar size="100">
                        <v-img
                        :src="getImgUrl(item.profileImage)"
                        :lazy-src="getImgUrl(item.profileImage)">

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
                    </v-avatar>
                    <p class="mt-3 mb-0 google-font" style="font-size:130%">{{item.name}}</p>
                    <p class="mt-1 mb-0 google-font">{{item.company}}</p>

                    <v-btn class="mt-0 mx-0" icon v-if="(item.twitter).length>0" :href="item.twitter" target="_blank">
                        <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
                    </v-btn>

                    <v-btn class="mt-0 mx-0" icon v-if="(item.linkedin).length>0" :href="item.linkedin" target="_blank">
                        <v-icon small style="color:#0077b5">fab fa-linkedin-in</v-icon>
                    </v-btn>

                    <v-btn class="mt-0 mx-0" icon v-if="(item.github).length>0" :href="item.github" target="_blank">
                        <v-icon small style="color:#333">fab fa-github</v-icon>
                    </v-btn>
                    <v-btn class="mt-0 mx-0" icon v-if="(item.website).length>0" :href="item.website" target="_blank">
                        <v-icon style="color:#333">link</v-icon>
                    </v-btn>

                    <SpeakerDialog :data="{jsonData:item}" />
                    
                </div>
                </v-hover>

                
            </v-flex>
        </v-layout>



    </v-container>
</template>

<script>
import SpeakerDetails from '@/assets/data/speaker.json'
import SpeakerDialog from '@/components/common/SpeakerDialog'
export default {
    components:{
        SpeakerDialog
    },
    data() {
        return {
            SpeakerDetails: SpeakerDetails,
            showLoader: true,
            showData:false,
            dialog:false
        }
    },
    mounted(){
        
    },
    methods:{
        getImgUrl(pic) {
            if(pic.length>0){
                return require('@/assets/img/speakers/'+pic)
            }else{
                return require('@/assets/img/speakers/avatar.png')
            }
        },
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
}
</script>
