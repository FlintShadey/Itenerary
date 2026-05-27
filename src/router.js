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
import SeaPoolsWalk from './views/SeaPoolsWalk.vue'
import MinoriTransfer from './views/MinoriTransfer.vue'
import MinoriArrival from './views/MinoriArrival.vue'
import SorrentoMaioriFerry from './views/SorrentoMaioriFerry.vue'
import AmmoudiFishTavern from './views/AmmoudiFishTavern.vue'
import BluRestaurant from './views/BluRestaurant.vue'
import SailingCharter from './views/SailingCharter.vue'
import ElliBeachRonda from './views/ElliBeachRonda.vue'
import VillaMariaDinner from './views/VillaMariaDinner.vue'
import PathOfTheGods from './views/PathOfTheGods.vue'
import DublinDay from './views/DublinDay.vue'
import WestburyDublin from './views/WestburyDublin.vue'
import OldMillRestaurant from './views/OldMillRestaurant.vue'
import Cobblestone from './views/Cobblestone.vue'
import DublinJul1 from './views/DublinJul1.vue'
import DublinAirport from './views/DublinAirport.vue'
import DublinReturnFlights from './views/DublinReturnFlights.vue'
import OutboundFlights from './views/OutboundFlights.vue'

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
  { path: '/sea-pools-walk', component: SeaPoolsWalk },
  { path: '/minori-transfer', component: MinoriTransfer },
  { path: '/minori-arrival', component: MinoriArrival },
  { path: '/sorrento-maiori-ferry', component: SorrentoMaioriFerry },
  { path: '/ammoudi-fish-tavern', component: AmmoudiFishTavern },
  { path: '/blu-restaurant', component: BluRestaurant },
  { path: '/sailing-charter', component: SailingCharter },
  { path: '/elli-beach-ronda', component: ElliBeachRonda },
  { path: '/villa-maria-dinner', component: VillaMariaDinner },
  { path: '/path-of-the-gods', component: PathOfTheGods },
  { path: '/dublin-day', component: DublinDay },
  { path: '/westbury-dublin', component: WestburyDublin },
  { path: '/old-mill-restaurant', component: OldMillRestaurant },
  { path: '/cobblestone', component: Cobblestone },
  { path: '/dublin-jul1', component: DublinJul1 },
  { path: '/dublin-airport', component: DublinAirport },
  { path: '/dublin-return-flights', component: DublinReturnFlights },
  { path: '/outbound-flights', component: OutboundFlights },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
