<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Overview -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#128652;</span>
              Getting to the Airbnb &mdash; Maiori Pier &rarr; Via San Pietro, Minori
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Arriving by:</span>
                <span>Ferry from Sorrento &nbsp;&middot;&nbsp; arrives Maiori 6:40 PM</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Destination:</span>
                <span>Via San Pietro 16, Minori &mdash; 3&deg; piano <span style="color:#555;font-size:0.87em;">(senza ascensore)</span></span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">&#128205; Maps:</span>
                <a href="https://maps.app.goo.gl/y9AskqsFHAvgdDPm9" target="_blank" rel="noopener" class="med-link">Open in Google Maps &#8599;</a>
              </div>

              <v-alert type="warning" variant="tonal" density="compact">
                &#9888; <strong>3° piano &mdash; no elevator.</strong> Prepare for a steep 3-flight stair climb with luggage once inside the building.
              </v-alert>

            </v-card-text>
          </v-card>

          <!-- Route 1: Coastal Walk -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-activity">
              <span class="card-header-icon">&#127939;</span>
              Route 1 &mdash; Coastal Walk &nbsp;&middot;&nbsp; Most Reliable
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="checkin-row mb-4">
                <div class="checkin-block">
                  <div class="checkin-label">Distance</div>
                  <div class="checkin-time">~1.5–2 km</div>
                </div>
                <div class="checkin-divider">&#8594;</div>
                <div class="checkin-block text-right">
                  <div class="checkin-label">Time</div>
                  <div class="checkin-time">20–25 min</div>
                </div>
              </div>

              <ol class="benefits-list" style="padding-left:1.2rem;">
                <li class="mb-2">Exit the Maiori pier and head <strong>west</strong> along the flat coastal sidewalk (<strong>Via Statale Amalfitana</strong>).</li>
                <li class="mb-2">Follow it directly into Minori.</li>
                <li>Turn <strong>right inland</strong> up <strong>Via San Pietro</strong>.</li>
              </ol>

              <v-alert type="info" variant="tonal" density="compact" class="mt-3">
                &#128694; There is a pedestrian walkway for most of the route &mdash; watch for traffic on curves. Often faster than waiting for transit.
              </v-alert>

            </v-card-text>
          </v-card>

          <!-- Route 2: Connector Ferry -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#9973;</span>
              Route 2 &mdash; Last Ferry of the Day &nbsp;&middot;&nbsp; Fastest Transit
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="flight-route mb-3">
                <div class="route-endpoint">
                  <div class="route-time">6:40 PM</div>
                  <div class="route-city">Maiori</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#9973;</span>
                  <div class="route-arrow-line ferry-line"></div>
                  <div class="route-duration">5 min</div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-time">6:45 PM</div>
                  <div class="route-city">Minori</div>
                </div>
              </div>

              <div class="confirm-row mb-1">
                <span class="detail-label">Operator:</span>
                <span>Travelmar</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Cost:</span>
                <span>~&euro;4 per person</span>
              </div>

              <v-alert type="warning" variant="tonal" density="compact" class="mb-3">
                &#9201; <strong>Tight connection.</strong> Your Sorrento ferry lands at 6:40 PM &mdash; the same time this boat departs. Any delay means missing it. If in doubt, walk Route 1.
              </v-alert>

              <div class="confirm-row mb-0">
                From the Minori pier it&rsquo;s a flat <strong>5-minute walk inland</strong> to Via San Pietro.
              </div>

            </v-card-text>
          </v-card>

          <!-- Route 3: SITA Bus -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-transfer">
              <span class="card-header-icon">&#128652;</span>
              Route 3 &mdash; SITA Sud Bus &nbsp;&middot;&nbsp; Line 5120 / 5020
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Frequency:</span>
                <span>Every 20–30 minutes</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Transit time:</span>
                <span>~5 minutes</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Cost:</span>
                <span>~&euro;1.50 per person</span>
              </div>

              <v-alert type="warning" variant="tonal" density="compact" class="mb-3">
                &#9888; <strong>Buy tickets before boarding</strong> &mdash; at a Tabaccheria or bar near the pier. Drivers do not sell tickets.
              </v-alert>

              <ol class="benefits-list" style="padding-left:1.2rem;">
                <li class="mb-2">Walk <strong>2 minutes</strong> from the Maiori pier to the main road bus stop.</li>
                <li class="mb-2">Catch any bus heading <strong>west toward Amalfi / Salerno</strong>.</li>
                <li class="mb-2">Get off at the <strong>very next major town stop: Minori</strong>.</li>
                <li>Walk inland to <strong>Via San Pietro</strong>.</li>
              </ol>

            </v-card-text>
          </v-card>

          <!-- Arrival Note -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#B71C1C 0%,#C62828 60%,#D32F2F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#9888;&#65039;</span>
              Arrival Note &mdash; Via San Pietro 16
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-2">
                <span class="detail-label">Floor:</span>
                <span>3&deg; piano &nbsp;&middot;&nbsp; <strong>senza ascensore</strong> (no elevator)</span>
              </div>
              <v-alert type="error" variant="tonal" density="compact">
                &#129657; After completing any route, prepare for a <strong>steep 3-flight stair climb with luggage</strong> once inside the building.
              </v-alert>
            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
