<template>
          <ion-content class="body-content4">
               <div class="user-description4">
                    <ion-content class="home-image4">
                         <div class="img4">    
                              <img src="../../assets/home1.jpg" >
                         </div>
                    </ion-content>
                    <ul class="listview4">
                         <li class="name4">Android Development</li>
                         <ion-toolbar class="htoolbar4">
                         <div class="hcontent-container4">
                              <div class="hnavmenu4">
                                   <ul class="hlist4">
                                        <a href="#" class="icon4"><img src="../../assets/instagram.png" width="30" class="image"></a>
                                        <a href="#" class="icon4"><img src="../../assets/facebook.png" width="30" class="image"></a>
                                        <a href="#" class="icon4"><img src="../../assets/gmail.png" width="30" class="image"></a>
                                        <a href="#" class="icon4"><img src="../../assets/github.png" width="30" class="image"></a>
                                        <a href="#" class="icon4"><img src="../../assets/gitlab.png" width="30" class="image"></a>
                                  </ul>
                              </div>
                         </div>
                    </ion-toolbar>
                         <li class="position4">>> Developes mobile application using Android <br> Studio and Ionic Vue</li>             
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