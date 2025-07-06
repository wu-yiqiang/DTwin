<template>
  <div id="cesiumContainer" ref="cesiumContainer"></div>
</template>


<script setup lang="ts">
import {TrackedAnimate} from './datas'
import {onMounted} from 'vue'
import * as Cesium from 'cesium'
import './Widgets/widgets.css'
window.CESIUM_BASE_URL = "/"
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MTg2YmNmNS0zMmYxLTRiNzMtYmI2Ny1hNTY5YzY3NTc4MmMiLCJpZCI6MjcxMDI3LCJpYXQiOjE3Mzc2NDYxNjZ9.LztvFuf4W35H4kRFWVgMvzm77O-T-8jKqxuHaP1bpaY"

Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
  30.85,
  30.7,
  30.85,
  31
)
const init = () => {

}
onMounted(() => {
  var viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    geocoder: false,
    homeButton: true,
    sceneModePicker: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    // terrainProvider: Cesium.createWorldTerrainAsync({
    //   requestWaterMask: true,
    //   requestVertexNormals: true
    // }),
  })
  var position = Cesium.Cartesian3.fromDegrees(116.397428, 39.90923, 500)
  // 默认显示地点
  viewer.camera.setView({
    destination: position
  })
  // 飞行式移动到某个位置
  // viewer.camera.flyTo({
  //    destination: position
  // })
  viewer.cesiumWidget.creditContainer.style.display = "none"
  document.addEventListener('keyup', (e) => {
    const height = viewer.camera.positionCartographic.height
    const moveRate = height / 10
    if (e.key == 'w') {
      viewer.camera.moveUp(moveRate)
    }
    if (e.key == 's') {
      viewer.camera.moveDown(moveRate)
    }
    if (e.key == 'a') {
      viewer.camera.moveLeft(moveRate)
    }
    if (e.key == 'd') {
      viewer.camera.moveRight(moveRate)
    }
  })
})
</script>

<style>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>
