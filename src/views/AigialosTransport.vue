<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Header Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#127968;</span>
              Getting to Aigialos &mdash; Athinios Port &rarr; Fira &nbsp;&middot;&nbsp; Mon, Jun 08, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="info" variant="tonal" density="compact" class="mb-4">
                Arriving via SeaJets means docking at <strong>Athinios Port</strong> &mdash; the main ferry terminal at the base of the caldera.
              </v-alert>

              <!-- Step 1 -->
              <div class="benefits-heading mb-2">&#9312; The Port Experience &mdash; Athinios</div>
              <p class="mb-2" style="font-size:0.93rem;line-height:1.6;">
                When your ferry docks, the ramp drops and hundreds of passengers exit simultaneously onto the pier alongside cars and delivery trucks.
              </p>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:120px;">Atmosphere:</span>
                <span style="font-size:0.9rem;">Loud, high-energy, and can feel a bit chaotic — normal for Santorini arrivals.</span>
              </div>
              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:120px;">Cliff Climb:</span>
                <span style="font-size:0.9rem;">Your vehicle climbs the famous switchback road up the massive caldera cliff — <strong>10–15 minutes</strong>, longer if multiple ferries arrive simultaneously.</span>
              </div>

              <!-- Step 2 -->
              <div class="benefits-heading mb-2">&#9313; The Pedestrian Drop-Off Rule</div>
              <p class="mb-2" style="font-size:0.93rem;line-height:1.6;">
                Aigialos is situated directly on the cliffside edge of Fira, which is <strong>entirely a pedestrian-only zone</strong>. No cars or taxis can pull up to the front door.
              </p>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:120px;">Drop-Off Point:</span>
                <span style="font-size:0.9rem;">The nearest designated vehicle drop-off — usually the <strong>square by the Orthodox Metropolitan Cathedral</strong>.</span>
              </div>
              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:120px;">To the Hotel:</span>
                <span style="font-size:0.9rem;">A short but scenic walk along cobblestone paths and steps to reach the settlement.</span>
              </div>

              <!-- Step 3 -->
              <div class="benefits-heading mb-2">&#9314; Best Coordination Strategy</div>
              <p class="mb-3" style="font-size:0.93rem;line-height:1.6;">
                Because of the pedestrian layout, the most seamless approach is to have the hotel handle the logistics directly.
              </p>

              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:140px;">&#128222; Contact Aigialos:</span>
                <span style="font-size:0.9rem;">Give them your ferry details — SeaJets, arriving <strong>Jun 08 at 12:05 PM</strong>.</span>
              </div>
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:140px;">&#129381; Bellhop Handoff:</span>
                <span style="font-size:0.9rem;">Book the private transfer through the hotel — they coordinate a synchronized meet-up. The hotel porter meets your driver right at the vehicle door at the Fira drop-off point.</span>
              </div>
              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:140px;">&#10003; The Result:</span>
                <span style="font-size:0.9rem;color:#2E7D32;font-weight:600;">The porter takes your heavy bags on a cart and leads you through the cobblestone walkways straight to check-in — no hauling luggage up stone steps.</span>
              </div>

              <v-alert type="warning" variant="tonal" density="compact" class="mb-0">
                &#128241; <strong>If using an independent transfer</strong> (e.g. Welcome Pickups): message the Aigialos concierge your exact drop-off ETA once off the boat so they can send a staff member to meet you at the car.
              </v-alert>

            </v-card-text>
          </v-card>

          <!-- Quick Reference -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#9C27B0 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128205;</span>
              Quick Reference
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Port:</span>
                <span>Athinios Port, Santorini</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Arrives:</span>
                <span>12:05 PM, Mon Jun 08</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Hotel:</span>
                <span>Aigialos Luxury Traditional Settlement, Fira 84700</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Check-in:</span>
                <span>3:00 PM</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Drop-Off:</span>
                <span>Orthodox Metropolitan Cathedral square, Fira</span>
              </div>

              <div class="mt-2" style="text-align:center;">
                <a href="https://www.google.com/maps/search/Athinios+Port+Santorini" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="purple-darken-3" variant="tonal" size="small" class="mr-2">
                    &#128205; Athinios Port Map &#8599;
                  </v-btn>
                </a>
                <a href="https://www.google.com/maps/search/Aigialos+Fira+Santorini" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="purple-darken-3" variant="tonal" size="small">
                    &#127968; Aigialos Map &#8599;
                  </v-btn>
                </a>
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
