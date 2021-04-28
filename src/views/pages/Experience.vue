<template>
     <ion-page>
          <ion-content :fullscreen="true">
               <Header />
               <Exp0 />
               <Exp1 />
               <Exp3 />
          </ion-content>
     </ion-page>
</template>  

<script lang="ts">
     import { IonContent, IonPage } from "@ionic/vue";

     import Header from "../components/Header.vue";
     import Exp0 from "../components/Experience0.vue";
     import Exp1 from "../components/Experience1.vue";
     import Exp3 from "../components/Experience3.vue";

     import { defineComponent } from "vue";

     export default defineComponent({
          name: "Experience",
          components: {
               IonContent,
               IonPage,
               Header,
               Exp0,
               Exp1,
               Exp3
          },
     });
</script>
<style scoped>

</style>