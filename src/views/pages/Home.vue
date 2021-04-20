<template>
  <ion-page>
    <ion-header :translucent="true">
    </ion-header>
  </ion-page>
</template>

<script lang="ts">
import {IonHeader, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonHeader,
    IonPage
  }
});
</script>

<style scoped>

</style>