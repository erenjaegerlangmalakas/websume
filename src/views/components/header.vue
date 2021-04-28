<template>
	<ion-header class="header">
          <ion-toolbar class="toolbar">
               <div class="content-container">
                    <div class="logo">
                         <a href="#" class="logo-link">
                              <img src="../../assets/logo1.png" width="70" class="image">
                         </a>
                    </div>
                    <div class="navmenu">
                         <ul class="list">
                              <a href= "Home" class="item">Home</a>
                              <a href= "Education" class="item">Education</a>
                              <a href= "#" class="item">Experience</a>
                              <a href= "#" class="item">Projects</a>
                              <a href= "#" class="item">Skills</a>
                              <a href= "ContactMe" class="item">Contact Me</a>
                         </ul>
                    </div>
               </div>
          </ion-toolbar>
     </ion-header>
</template>
<script lang="ts">
	import {
		IonHeader,
		IonToolbar,
	} from "@ionic/vue";

	import { defineComponent } from 'vue';
	export default defineComponent({
          name: 'Header',
          components: {
               IonHeader,
               IonToolbar,
          }
	});
</script>