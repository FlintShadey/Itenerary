import { createRouter, createWebHistory } from 'vue-router'
import Itinerary from './views/Itinerary.vue'
import BusTransferDetail from './views/BusTransferDetail.vue'

const routes = [
  { path: '/', component: Itinerary },
  { path: '/bus-transfer-detail', component: BusTransferDetail },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
