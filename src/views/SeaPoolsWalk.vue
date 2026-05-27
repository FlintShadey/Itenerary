<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Header -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#388E3C 60%,#66BB6A 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127946;</span>
              Walk to Bagni della Regina Giovanna &nbsp;&middot;&nbsp; Mon, Jun 22, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="checkin-row mb-4">
                <div class="checkin-block">
                  <div class="checkin-label">Part 1</div>
                  <div class="checkin-time">2.2 km</div>
                  <div class="checkin-date">Hotel &rarr; Old Town</div>
                </div>
                <div class="checkin-divider">&#8594;</div>
                <div class="checkin-block">
                  <div class="checkin-label">Part 2</div>
                  <div class="checkin-time">2 km</div>
                  <div class="checkin-date">Old Town &rarr; Trailhead</div>
                </div>
                <div class="checkin-divider">&#8594;</div>
                <div class="checkin-block text-right">
                  <div class="checkin-label">Part 3</div>
                  <div class="checkin-time">1 km</div>
                  <div class="checkin-date">Descent to Pools</div>
                </div>
              </div>

              <div class="confirm-row mb-1">
                <span class="detail-label">Total distance:</span>
                <span>~5.2 km &nbsp;&middot;&nbsp; approx. 1 hr 15 min walking</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Destination:</span>
                <span>Bagni della Regina Giovanna sea pools</span>
              </div>
              <div class="confirm-row mb-0">
                <span class="detail-label">&#128205; Maps:</span>
                <a href="https://maps.google.com/?q=Bagni+della+Regina+Giovanna,+Sorrento" target="_blank" rel="noopener" class="med-link">Open in Google Maps &#8599;</a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Part 1 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-activity">
              <span class="card-header-icon">&#128336;</span>
              Part 1 &mdash; Hotel Corallo &rarr; Sorrento Old Town &nbsp;&middot;&nbsp; 2.2 km / 30 min
            </v-card-title>
            <v-card-text class="pa-4">

              <ol class="benefits-list" style="padding-left:1.2rem;">
                <li class="mb-2">Exit Hotel Corallo and head <strong>south</strong> on Via Nuovo Rione Cappuccini.</li>
                <li class="mb-2">Turn <strong>right onto Corso Italia</strong> and walk straight into Sorrento.</li>
                <li>Pass through <strong>Piazza Tasso</strong> to enter the historic centre via <strong>Via San Cesareo</strong> for the old town stroll.</li>
              </ol>

            </v-card-text>
          </v-card>

          <!-- Part 2 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-activity">
              <span class="card-header-icon">&#127956;</span>
              Part 2 &mdash; Old Town &rarr; Capo di Sorrento Trailhead &nbsp;&middot;&nbsp; 2 km / 30 min
            </v-card-title>
            <v-card-text class="pa-4">

              <ol class="benefits-list" style="padding-left:1.2rem;">
                <li class="mb-2">Exit the historic centre heading <strong>west toward Via Capo</strong>.</li>
                <li class="mb-2">Follow <strong>Via Capo uphill</strong> <span style="color:#555;font-size:0.9em;">(use caution on narrow sidewalk sections)</span>.</li>
                <li>Walk past <strong>Hotel Spicy</strong>. Near the local gas station, look for the sign on the right for <em>&ldquo;Ruderi della Villa Romana di Pollio / Bagni della Regina Giovanna&rdquo;</em>.</li>
              </ol>

            </v-card-text>
          </v-card>

          <!-- Part 3 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#01579B 0%,#0277BD 60%,#0288D1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127946;</span>
              Part 3 &mdash; Descent to the Sea Pools &nbsp;&middot;&nbsp; 1 km / 15 min
            </v-card-title>
            <v-card-text class="pa-4">

              <ol class="benefits-list" style="padding-left:1.2rem;">
                <li class="mb-2">Turn right down the cobblestone path, <strong>Traversa Punta Capo</strong>.</li>
                <li>
                  At the bottom fork:
                  <ul style="margin-top:8px;padding-left:1rem;">
                    <li class="mb-1"><strong>Left</strong> &mdash; Roman villa ruins</li>
                    <li><strong>Right</strong> &mdash; wooden steps down to the <strong>Bagni della Regina Giovanna</strong> sea pool</li>
                  </ul>
                </li>
              </ol>

            </v-card-text>
          </v-card>

          <!-- Essential Logistics -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-transfer">
              <span class="card-header-icon">&#127397;</span>
              Essential Logistics
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127462;&#127463; Gear &amp; Supplies</div>
              <ul class="benefits-list mb-4">
                <li>Wear <strong>sturdy walking shoes</strong> for the rocky descent and uneven ruins.</li>
                <li>Pack <strong>water, sunscreen, and swimwear</strong> &mdash; no facilities at the pools.</li>
              </ul>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#128652; Return Option &mdash; Skip the Uphill Walk</div>
              <v-alert type="info" variant="tonal" density="compact">
                Take the <strong>EAV Bus (Line A)</strong> from the <strong>Capo di Sorrento</strong> stop on the main road back to Sorrento centre.
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
