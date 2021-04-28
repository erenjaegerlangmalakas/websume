<template>
          <ion-content class="ebody-content1">
               <div class="euser-description1">
                    <ion-toolbar class="etoolbar1">
                         <div class="econtent-container1">
                              <div class="enavmenu1">
                                   <ul class="elist1">
                                        <ion-card class="card">
                                            <ion-card-header class="card-header">
                                                <ion-card-title class="card-title">Experience3 Title</ion-card-title>
                                                <ion-card-subtitle class="card-sub">Experience3 Subtitle</ion-card-subtitle>
                                            </ion-card-header>
                                            <ion-card-content class="card-content"><br>
                                                Experience description Experience description Experience description Experience description
                                                Experience description Experience description Experience description Experience description 
                                                Experience description Experience description Experience description Experience description 
                                                <br>  
                                            </ion-card-content>
                                        </ion-card>
                                        <ion-card class="card1" width="400px">
                                                <ion-card-header class="card-header1">
                                                    <ion-card-title class="card-title1">Experience1 Title</ion-card-title>
                                                    <ion-card-subtitle class="card-sub1">Experience1  Subtitle</ion-card-subtitle>
                                                </ion-card-header>

                                                <ion-card-content class="card-content1"><br>
                                                Experience description Experience description Experience description Experience description
                                                Experience description Experience description Experience description Experience description 
                                                Experience description Experience description Experience description Experience description 
                                                <br>
                                                </ion-card-content>
                                        </ion-card>
                                        <ion-card class="card2" width="400px">
                                                <ion-card-header class="card-header2">
                                                    <ion-card-title class="card-title2">Experience2 Title</ion-card-title>
                                                    <ion-card-subtitle class="card-sub2">Experience2 Subtitle</ion-card-subtitle>
                                                </ion-card-header>

                                                <ion-card-content class="card-content2"><br>
                                                Experience description Experience description Experience description Experience description
                                                Experience description Experience description Experience description Experience description 
                                                Experience description Experience description Experience description Experience description 
                                                <br>
                                                </ion-card-content>
                                        </ion-card>
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
          IonCard,
          IonCardHeader,
          IonCardTitle,
          IonCardSubtitle,
          IonCardContent,
          IonToolbar
	} from "@ionic/vue";
     import { defineComponent } from 'vue';
     export default defineComponent({
          name: 'Experience1',
          components: {
               IonContent,
               IonCard,
               IonCardHeader,
               IonCardTitle,
               IonCardSubtitle,
               IonCardContent,
               IonToolbar
          }
     });
</script>