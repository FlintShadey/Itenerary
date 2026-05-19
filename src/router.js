import { createRouter, createWebHashHistory } from 'vue-router'
import Itinerary from './views/Itinerary.vue'
import BusTransferDetail from './views/BusTransferDetail.vue'
import AthensHotelTransport from './views/AthensHotelTransport.vue'
import AthensWalkingTour from './views/AthensWalkingTour.vue'

const routes = [
  { path: '/', component: Itinerary },
  { path: '/bus-transfer-detail', component: BusTransferDetail },
  { path: '/athens-hotel-transport', component: AthensHotelTransport },
  { path: '/athens-walking-tour', component: AthensWalkingTour },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
