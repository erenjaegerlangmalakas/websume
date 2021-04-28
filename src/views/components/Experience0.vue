<template>
          <ion-content class="ebody-content0">
               <div class="euser-description0">
                    
                    <ion-content class="ehome-image0">
                         <div class="eimg0">    
                              <img src="../../assets/home1.jpg" >
                         </div>
                    </ion-content>
                    <ul class="elistview0">
                         <li class="ename0">Trexcy Fe M. Torrefiel</li>
                         <li class="eposition0">Software Engineer</li>
                         <li class="edescription0">I am the future president of the Philippines <br> 
                         I am  member of the Seven Deadly Sins (Nanatsu no Taizai) <br> 
                         I am  poses the power of destruction and purification <br>
                         I also poses a 6 Leaf Grimoire, where the 6th leaf resides an Angel <br>  
                         </li>               
                    </ul>
                    <ion-toolbar class="etoolbar0">
                         <div class="econtent-container0">
                              <div class="enavmenu0">
                                   <ul class="elist0">
                                        <a href="#" class="eicon0"><img src="../../assets/instagram.png" width="30" class="image"></a>
                                        <a href="#" class="eicon0"><img src="../../assets/facebook.png" width="30" class="image"></a>
                                        <a href="#" class="eicon0"><img src="../../assets/gmail.png" width="30" class="image"></a>
                                        <a href="#" class="eicon0"><img src="../../assets/github.png" width="30" class="image"></a>
                                        <a href="#" class="eicon0"><img src="../../assets/gitlab.png" width="30" class="image"></a>
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