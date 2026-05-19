import { createRouter, createWebHashHistory } from 'vue-router'
import Itinerary from './views/Itinerary.vue'
import BusTransferDetail from './views/BusTransferDetail.vue'
import AthensHotelTransport from './views/AthensHotelTransport.vue'
import AthensWalkingTour from './views/AthensWalkingTour.vue'
import AthensWalkingDay from './views/AthensWalkingDay.vue'
import EwrLayover from './views/EwrLayover.vue'

const routes = [
  { path: '/', component: Itinerary },
  { path: '/bus-transfer-detail', component: BusTransferDetail },
  { path: '/athens-hotel-transport', component: AthensHotelTransport },
  { path: '/athens-walking-tour', component: AthensWalkingTour },
  { path: '/athens-walking-day', component: AthensWalkingDay },
  { path: '/ewr-layover', component: EwrLayover },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
