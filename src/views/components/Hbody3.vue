<template>
          <ion-content class="body-content3">
               <div class="user-description3">
                    <ion-content class="home-image3">
                         <div class="img3">    
                              <img src="../../assets/home1.jpg" >
                         </div>
                    </ion-content>
                    <ul class="listview3">
                         <li class="name3">Back End Development</li>
                         <ion-toolbar class="htoolbar3">
                         <div class="hcontent-container3">
                              <div class="hnavmenu3">
                                   <ul class="hlist3">
                                        <a href="#" class="icon3"><img src="../../assets/instagram.png" width="30" class="image"></a>
                                        <a href="#" class="icon3"><img src="../../assets/facebook.png" width="30" class="image"></a>
                                        <a href="#" class="icon3"><img src="../../assets/gmail.png" width="30" class="image"></a>
                                        <a href="#" class="icon3"><img src="../../assets/github.png" width="30" class="image"></a>
                                        <a href="#" class="icon3"><img src="../../assets/gitlab.png" width="30" class="image"></a>
                                  </ul>
                              </div>
                         </div>
                    </ion-toolbar>
                         <li class="position3">>> Creates application Back End</li>             
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