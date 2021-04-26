<template>
     <ion-page>
          <ion-content :fullscreen="true">
               <Header />
               <Hbody />
               <Hbody1 />
               <Hbody2 />
               <Hbody3 />
               <Hbody4 />
          </ion-content>
     </ion-page>
</template>  

<script lang="ts">
     import { IonContent, IonPage } from "@ionic/vue";

     import Header from "../components/Header.vue";
     import Hbody from "../components/Hbody.vue";
     import Hbody1 from "../components/Hbody1.vue";
     import Hbody2 from "../components/Hbody2.vue";
     import Hbody3 from "../components/Hbody3.vue";
     import Hbody4 from "../components/Hbody4.vue";

     import { defineComponent } from "vue";

     export default defineComponent({
          name: "Home",
          components: {
               IonContent,
               IonPage,
               Header,
               Hbody,
               Hbody1,
               Hbody2,
               Hbody3,
               Hbody4
          },
     });
</script>
<style scoped>

</style>