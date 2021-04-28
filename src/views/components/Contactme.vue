<template>
          <ion-content class="cbody-content">
               <div class="cuser-description">
                    <ion-content class="chome-image">
                         <div class="cimg">    
                              <img src="../../assets/home1.jpg" >
                         </div>
                    </ion-content>
                    <ul class="clistview">
                         <li class="cname">Contact Me</li>
                         <li class="cposition">I'm available almost every second, every minute, every hour,<br>24/7 on my social media accounts below. 
                              Feel free to message <br>me and ill reply as soon as i see the message. I can help you<br> with your tasks, pwede pod mag party 
                              tag Mobile Legends<br> or Call of Duty Mobile. Let's Rank up Together, Thank you!</li>             
                    </ul>
                    <ion-toolbar class="ctoolbar">
                         <div class="ccontent-container">
                              <div class="cnavmenu">
                                   <ul class="clist">
                                        <a href="#" class="cicon"><img src="../../assets/instagram.png" width="30" class="image"></a>
                                        <a href="#" class="cicon"><img src="../../assets/facebook.png" width="30" class="image"></a>
                                        <a href="#" class="cicon"><img src="../../assets/gmail.png" width="30" class="image"></a>
                                        <a href="#" class="cicon"><img src="../../assets/github.png" width="30" class="image"></a>
                                        <a href="#" class="cicon"><img src="../../assets/gitlab.png" width="30" class="image"></a>
                                  </ul>
                              </div>
                         </div>
                    </ion-toolbar>
                    
                    
               </div>
               
          </ion-content>
</template>
<script lang="ts">
     import {
		IonContent,
          IonToolbar
	} from "@ionic/vue";
     import { defineComponent } from 'vue';
     export default defineComponent({
          name: 'Contactme',
          components: {
               IonContent,
               IonToolbar
          }
     });
</script>