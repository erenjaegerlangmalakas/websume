<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Header />
       <div className="education-main">
            <div className="basic-education">
                 <div className="heading-div">
              <div className="heading-img-div">
              </div>
                 </div>
            </div>
       </div>
      
    </ion-content>
  </ion-page>
</template>  


<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";

import Header from "../components/Header.vue";


import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
    Header
  },
});
</script>
<style scoped>
</style>