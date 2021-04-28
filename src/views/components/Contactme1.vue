<template>
          <ion-content class="cbody-content1">
               <div class="cuser-description1">
                    
                    <ion-content class="chome-image1">
                         <div class="cimg">    
                              <img src="../../assets/home1.jpg" >
                         </div>
                    </ion-content>
                    <ul class="clistview1">
                         <li class="cname1">Trexcy Fe M. Torrefiel</li>
                         <li class="cposition1">Software Engineer</li>
                         <li class="cdescription1">I am the future president of the Philippines <br> 
                         I am  member of the Seven Deadly Sins (Nanatsu no Taizai) <br> 
                         I am  poses the power of destruction and purification <br>
                         I also poses a 6 Leaf Grimoire, where the 6th leaf resides an Angel <br>  
                         </li>               
                    </ul>
                    <ion-toolbar class="ctoolbar1">
                         <div class="ccontent-container1">
                              <div class="cnavmenu1">
                                   <ul class="clist1">
                                        <a href="#" class="cicon1"><img src="../../assets/instagram.png" width="30" class="image"></a>
                                        <a href="#" class="cicon1"><img src="../../assets/facebook.png" width="30" class="image"></a>
                                        <a href="#" class="cicon1"><img src="../../assets/gmail.png" width="30" class="image"></a>
                                        <a href="#" class="cicon1"><img src="../../assets/github.png" width="30" class="image"></a>
                                        <a href="#" class="cicon1"><img src="../../assets/gitlab.png" width="30" class="image"></a>
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