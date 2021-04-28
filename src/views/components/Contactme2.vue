<template>
          <ion-content class="cbody-content2">
               <ion-fab vertical="bottom" horizontal="end" >
                         <ion-fab-button href="ContactMe">
                              <ion-icon name="arrow-forward-circle"></ion-icon>
                         </ion-fab-button>
                    </ion-fab>
               <div class="cuser-description2">
                    <ion-content class="chome-image2">
                         <div class="cimg2">    
                              <img src="../../assets/home1.jpg" >
                         </div>
                    </ion-content>
                    <ul class="clistview2">
                         <li class="cname2">Contact Me</li>
                         <li class="cposition2">I'm available almost every second, every minute, every hour,<br>24/7 on my social media accounts below. 
                              Feel free to message <br>me and ill reply as soon as i see the message. I can help you<br> with your tasks, pwede pod mag party 
                              tag Mobile Legends<br> or Call of Duty Mobile. Let's Rank up Together, Thank you!</li>             
                    </ul>
                    <ion-toolbar class="ctoolbar2">
                         <div class="ccontent-container2">
                              <div class="cnavmenu2">
                                   <ul class="clist2">
                                        <a href="#" class="cicon2"><img src="../../assets/instagram.png" width="30" class="image"></a>
                                        <a href="#" class="cicon2"><img src="../../assets/facebook.png" width="30" class="image"></a>
                                        <a href="#" class="cicon2"><img src="../../assets/gmail.png" width="30" class="image"></a>
                                        <a href="#" class="cicon2"><img src="../../assets/github.png" width="30" class="image"></a>
                                        <a href="#" class="cicon2"><img src="../../assets/gitlab.png" width="30" class="image"></a>
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
          name: 'Contactme2',
          components: {
               IonContent,
               IonToolbar
          }
     });
</script>