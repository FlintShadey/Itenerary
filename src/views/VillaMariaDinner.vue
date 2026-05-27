<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Evening Coordination Tip -->
          <v-alert type="warning" variant="tonal" class="mb-5" style="font-size:0.9rem;">
            <strong>&#9888;&#65039; Evening Coordination Tip:</strong> You are already tackling <strong>3 flights of stairs</strong> just to exit your third-floor Airbnb.
            The walk to Villa Maria is a <strong>steep uphill climb on stone paths</strong> &mdash; sneakers or supportive flats are mandatory.
            If you plan to dress up for the 8:00 PM dinner, consider <strong>carrying your dinner shoes in a bag</strong> and changing once you arrive on the restaurant terrace.
          </v-alert>

          <!-- Route 1 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#3E2723 0%,#6D4C41 60%,#8D6E63 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#129438;</span>
              Route 1 &mdash; Via Pioppi Stairs <span style="font-weight:400;font-size:0.82rem;opacity:0.85;">(Direct &amp; Quickest)</span>
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Time:</span>
                <span>~10–12 minutes uphill</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Terrain:</span>
                <span>Entirely stone staircases up the terraced hillside</span>
              </div>

              <div class="benefits-heading mb-2">&#128205; Directions</div>
              <div class="hotel-contact">
                <div><span class="detail-label">1.</span> Exit the building on Via San Pietro &amp; head slightly down toward the main town stream/road.</div>
                <div><span class="detail-label">2.</span> Hang a left to cross over toward <strong>Via Pioppi / Via Cesare Carola</strong>.</div>
                <div><span class="detail-label">3.</span> Follow signs for <strong>Sentiero dei Limoni</strong> (Path of the Lemons) or <em>Villamena</em>.</div>
                <div><span class="detail-label">4.</span> Merge onto <strong>Via Portatrici di Limoni</strong> &mdash; stone steps lead directly to the Agriturismo entrance.</div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Route 2 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#3E2723 0%,#6D4C41 60%,#8D6E63 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128694;</span>
              Route 2 &mdash; Via Ravello to Via Pioppi <span style="font-weight:400;font-size:0.82rem;opacity:0.85;">(More Gradual)</span>
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Time:</span>
                <span>~15 minutes uphill</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Terrain:</span>
                <span>Main inland road then stone walkways &mdash; less steep initially</span>
              </div>

              <div class="benefits-heading mb-2">&#128205; Directions</div>
              <div class="hotel-contact">
                <div><span class="detail-label">1.</span> Walk down Via San Pietro and turn right onto the main inland road, <strong>Via Ravello (SS373)</strong>.</div>
                <div><span class="detail-label">2.</span> Walk north alongside the road for <strong>3–4 minutes</strong>.</div>
                <div><span class="detail-label">3.</span> Make a sharp right turn onto <strong>Via Pioppi</strong>.</div>
                <div><span class="detail-label">4.</span> Follow the path as it becomes <strong>Via Portatrici di Limoni</strong> stone walkways leading up to Villa Maria.</div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Route 3 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#3E2723 0%,#6D4C41 60%,#8D6E63 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128661;</span>
              Route 3 &mdash; Local Taxi / Shuttle
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Time:</span>
                <span>~5 min drive + 2–3 min walk</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Note:</span>
                <span>Hire a local taxi from the center of Minori. The driver takes the winding mountain road up as close as legally permitted.</span>
              </div>

              <v-alert type="error" variant="tonal" density="compact" style="font-size:0.88rem;">
                <strong>&#128683; Important:</strong> Taxis <em>cannot</em> pull up directly to the restaurant doors. They will drop you at the designated parking turnaround area &mdash; you still need to walk the final <strong>2–3 minutes</strong> up a stone path to reach the terrace.
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
