<template>
  <div id="cesiumContainer" ref="cesiumContainer"></div>
</template>


<script setup lang="ts">
import {onMounted} from 'vue'
import * as Cesium from 'cesium'
import './Widgets/widgets.css'
window.CESIUM_BASE_URL = "/"
onMounted(() => {
  var view = new Cesium.Viewer('cesiumContainer')
})
</script>

<style>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>
