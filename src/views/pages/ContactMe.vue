<template>
     <ion-page>
          <ion-content :fullscreen="true">
               <Header />
               <Contactme />
               <Contactme1 />
               <Contactme2 />
          </ion-content>
     </ion-page>
</template>  

<script lang="ts">
     import { IonContent, IonPage } from "@ionic/vue";

     import Header from "../components/Header.vue";
     import Contactme from "../components/Contactme.vue";
     import Contactme1 from "../components/Contactme1.vue";
     import Contactme2 from "../components/Contactme2.vue";

     import { defineComponent } from "vue";

     export default defineComponent({
          name: "ContactMe",
          components: {
               IonContent,
               IonPage,
               Header,
               Contactme,
               Contactme1,
               Contactme2
          },
     });
</script>
<style scoped>

</style>