<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Morning Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#E65100 0%,#EF6C00 55%,#FB8C00 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127774;</span>
              Morning &mdash; Iconic Views in Oia
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#128247; Early Arrival in Oia &nbsp;<span style="font-weight:400;font-size:0.82rem;opacity:0.75;">beat the afternoon crowds</span></div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:12px;">
                Start your morning in Oia to find the world-famous blue-domed churches and whitewashed lanes before the crowds arrive.
              </p>

              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:130px;">&#127981; Blue Domes:</span>
                <span style="font-size:0.9rem;">Head to the <strong>Three Domes viewpoint</strong> around <strong>9:00 AM</strong> for best lighting and manageable crowds.</span>
              </div>
              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:130px;">&#127965; Ammoudi Bay:</span>
                <span style="font-size:0.9rem;">Descend the <strong>200+ stairs</strong> from Oia for a seafood lunch by the water. Try grilled prawns or lobster pasta.</span>
              </div>

              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <a href="https://www.google.com/maps/search/Three+Domes+Oia+Santorini" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="orange-darken-3" variant="tonal" size="small">Three Domes &#8599;</v-btn>
                </a>
                <a href="https://www.google.com/maps/search/Ammoudi+Bay+Oia+Santorini" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="orange-darken-3" variant="tonal" size="small">Ammoudi Bay &#8599;</v-btn>
                </a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Afternoon Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1565C0 0%,#1976D2 55%,#1E88E5 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127939;</span>
              Afternoon &mdash; Caldera Coastal Exploration
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:140px;">&#127939; Fira&ndash;Oia Hike:</span>
                <span style="font-size:0.9rem;">~10 km cliffside trail with breathtaking Aegean views. Or take a <strong>30-minute bus / taxi</strong> to Fira if time is short.</span>
              </div>
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:140px;">&#127914; Explore Fira:</span>
                <span style="font-size:0.9rem;">Browse local boutiques and art galleries. Visit the <strong>Museum of Prehistoric Thera</strong> for history.</span>
              </div>
              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:140px;">&#9968; Imerovigli:</span>
                <span style="font-size:0.9rem;">Highest point on the caldera. See <strong>Skaros Rock</strong> and the <strong>Agios Georgios Chapel</strong> for panoramic views.</span>
              </div>

              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <a href="https://www.google.com/maps/search/Museum+of+Prehistoric+Thera+Fira+Santorini" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="blue-darken-2" variant="tonal" size="small">Museum of Prehistoric Thera &#8599;</v-btn>
                </a>
                <a href="https://www.google.com/maps/search/Skaros+Rock+Imerovigli+Santorini" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="blue-darken-2" variant="tonal" size="small">Skaros Rock &#8599;</v-btn>
                </a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Evening Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#9C27B0 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127751;</span>
              Evening &mdash; The Famous Sunset
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:130px;">&#127749; Sunset Dinner:</span>
                <span style="font-size:0.9rem;">Oia Castle is iconic but <strong>very crowded</strong>. For a more relaxed experience, book a table at a sunset-view restaurant in Imerovigli or a rooftop bar in Fira.</span>
              </div>
              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:130px;">&#127863; Recommended:</span>
                <span style="font-size:0.9rem;"><strong>The Athenian House</strong> in Imerovigli &mdash; sunset views without the Oia crush.</span>
              </div>

              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:130px;">&#127867; By Night:</span>
                <span style="font-size:0.9rem;">Explore Fira's nightlife or enjoy a glass of local <strong>Assyrtiko wine</strong> at a cliffside bar.</span>
              </div>

              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <a href="https://www.google.com/maps/search/The+Athenian+House+Imerovigli+Santorini" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="purple-darken-3" variant="tonal" size="small">The Athenian House &#8599;</v-btn>
                </a>
                <a href="https://www.google.com/maps/search/Oia+Castle+Santorini" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="purple-darken-3" variant="tonal" size="small">Oia Castle &#8599;</v-btn>
                </a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Travel Notes Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#37474F 0%,#455A64 55%,#546E7A 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128204;</span>
              Travel Notes &amp; Tips
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:100px;">&#128652; Getting around:</span>
                <span style="font-size:0.9rem;">ATV/quad rental is popular. Taxis can be scarce — book ahead or use the local bus (KTEL).</span>
              </div>
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:100px;">&#128246; Crowds:</span>
                <span style="font-size:0.9rem;">Oia and the Three Domes get <strong>extremely packed</strong> after 11 AM. Early start is essential.</span>
              </div>
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:100px;">&#128131; Stairs:</span>
                <span style="font-size:0.9rem;">Ammoudi Bay descent is steep — wear comfortable shoes. The climb back up is tiring.</span>
              </div>
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:100px;">&#128344; Next day:</span>
                <span style="font-size:0.9rem;">Ferry departs <strong>10:55 PM, Jun 10</strong>. Leave Aigialos by <strong>9:30 PM</strong> for Athinios Port.</span>
              </div>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
