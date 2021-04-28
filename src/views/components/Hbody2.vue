<template>
          <ion-content class="body-content2">
               <div class="user-description2">
                    <ion-content class="home-image2">
                         <div class="img2">    
                              <img src="../../assets/home1.jpg" >
                         </div>
                    </ion-content>
                    <ul class="listview2">
                         <li class="name2">Front End Development</li>
                         <ion-toolbar class="htoolbar2">
                         <div class="hcontent-container2">
                              <div class="hnavmenu2">
                                   <ul class="hlist2">
                                        <a href="#" class="icon2"><img src="../../assets/instagram.png" width="30" class="image"></a>
                                        <a href="#" class="icon2"><img src="../../assets/facebook.png" width="30" class="image"></a>
                                        <a href="#" class="icon2"><img src="../../assets/gmail.png" width="30" class="image"></a>
                                        <a href="#" class="icon2"><img src="../../assets/github.png" width="30" class="image"></a>
                                        <a href="#" class="icon2"><img src="../../assets/gitlab.png" width="30" class="image"></a>
                                  </ul>
                              </div>
                         </div>
                    </ion-toolbar>
                         <li class="position2">>> Builds responsive website front end</li>             
                    </ul>
                    
                    
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
          name: 'Hbody',
          components: {
               IonContent,
               IonToolbar
          }
     });
</script>