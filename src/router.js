import { createRouter, createWebHashHistory } from 'vue-router'
import Itinerary from './views/Itinerary.vue'
import BusTransferDetail from './views/BusTransferDetail.vue'
import AthensHotelTransport from './views/AthensHotelTransport.vue'
import AthensWalkingTour from './views/AthensWalkingTour.vue'
import AthensWalkingDay from './views/AthensWalkingDay.vue'
import EwrLayover from './views/EwrLayover.vue'
import AigialosTransport from './views/AigialosTransport.vue'
import KourosTransport from './views/KourosTransport.vue'
import CavoParadiso from './views/CavoParadiso.vue'
import RhodesTransport from './views/RhodesTransport.vue'
import RyanairDeparture from './views/RyanairDeparture.vue'
import SantoriniDay from './views/SantoriniDay.vue'
import CoralloSorrento from './views/CoralloSorrento.vue'
import CapriDay from './views/CapriDay.vue'

const routes = [
  { path: '/', component: Itinerary },
  { path: '/bus-transfer-detail', component: BusTransferDetail },
  { path: '/athens-hotel-transport', component: AthensHotelTransport },
  { path: '/athens-walking-tour', component: AthensWalkingTour },
  { path: '/athens-walking-day', component: AthensWalkingDay },
  { path: '/ewr-layover', component: EwrLayover },
  { path: '/aigialos-transport', component: AigialosTransport },
  { path: '/kouros-transport', component: KourosTransport },
  { path: '/cavo-paradiso', component: CavoParadiso },
  { path: '/rhodes-transport', component: RhodesTransport },
  { path: '/ryanair-departure', component: RyanairDeparture },
  { path: '/santorini-day', component: SantoriniDay },
  { path: '/corallo-sorrento', component: CoralloSorrento },
  { path: '/capri-day', component: CapriDay },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
