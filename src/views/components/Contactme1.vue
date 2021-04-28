<template>
          <ion-content class="body-content">
               <div class="user-description">
                    <ion-content class="home-image">
                         <div class="img">    
                              <img src="../../assets/home1.jpg" >
                         </div>
                    </ion-content>
                    <ul class="listview">
                         <li class="name">Trexcy Fe M. Torrefiel</li>
                         <li class="position">Information Technology Student</li>
                         <li class="description">I am an aspiring Mobile Developer and Cybersecurity Professional <br> 
                         I am  member of the Seven Deadly Sins (Nanatsu no Taizai) <br> 
                         I am  poses the power of destruction and purification <br>
                         I also poses a 6 Leaf Grimoire, where the 6th leaf resides an Angel <br>  
                         </li>               
                    </ul>
                    <ion-toolbar class="htoolbar">
                         <div class="hcontent-container">
                              <div class="hnavmenu">
                                   <ul class="hlist">
                                        <a href="#" class="icon"><img src="../../assets/instagram.png" width="30" class="image"></a>
                                        <a href="#" class="icon"><img src="../../assets/facebook.png" width="30" class="image"></a>
                                        <a href="#" class="icon"><img src="../../assets/gmail.png" width="30" class="image"></a>
                                        <a href="#" class="icon"><img src="../../assets/github.png" width="30" class="image"></a>
                                        <a href="#" class="icon"><img src="../../assets/gitlab.png" width="30" class="image"></a>
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
          name: 'Contactme1',
          components: {
               IonContent,
               IonToolbar
          }
     });
</script>