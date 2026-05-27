<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Reservation -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#006064 0%,#00838F 55%,#00ACC1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127840;</span>
              Ammoudi Fish Tavern &mdash; Lunch &nbsp;&middot;&nbsp; Tue, Jun 09, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Date &amp; Time:</span>
                <span>Tuesday, June 9 &nbsp;&middot;&nbsp; <strong>1:45 PM</strong></span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Location:</span>
                <span>Ammoudi Bay &mdash; base of the Oia cliffs, Santorini</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Confirmation:</span>
                <span class="confirm-code ferry-code">AMMS.D351B50B3C</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">&#128222; Contact:</span>
                <a href="tel:+302286072298" class="med-link">+30 22860 72298</a>
              </div>

              <div class="confirm-row">
                <span class="detail-label">&#128205; Maps:</span>
                <a href="https://www.google.com/maps/search/Ammoudi+Fish+Tavern+Oia+Santorini" target="_blank" rel="noopener" class="med-link">Open in Google Maps &#8599;</a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Getting There -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#006064 0%,#00838F 55%,#00ACC1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128694;</span>
              Getting to Ammoudi Bay
            </v-card-title>
            <v-card-text class="pa-4">

              <p style="font-size:0.9rem;color:#555;margin-bottom:16px;">
                Ammoudi Bay sits directly beneath the ruins of <strong>Oia Castle</strong>. Two ways to reach the waterfront tavern:
              </p>

              <div class="benefits-heading mb-2">&#129438; Option 1 &mdash; The Oia Steps <span style="font-weight:400;font-size:0.82rem;opacity:0.75;">(recommended)</span></div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:100px;">Route:</span>
                <span style="font-size:0.9rem;">From Oia Castle, descend the <strong>~200–300 steep stone steps</strong> cut into the red volcanic cliffside.</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:100px;">Time:</span>
                <span style="font-size:0.9rem;">~15 minutes walking down</span>
              </div>
              <div class="confirm-row mb-4">
                <span class="detail-label" style="min-width:100px;">Heads Up:</span>
                <span style="font-size:0.9rem;">Stones can be slick &mdash; watch your step. Expect <strong>donkeys</strong> along the path.</span>
              </div>

              <div class="benefits-heading mb-2">&#128663; Option 2 &mdash; Driving / Taxi</div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:100px;">Route:</span>
                <span style="font-size:0.9rem;">Take the main coastal road that snakes down the backside of the cliff directly into the Ammoudi Bay parking area.</span>
              </div>
              <div class="confirm-row">
                <span class="detail-label" style="min-width:100px;">Heads Up:</span>
                <span style="font-size:0.9rem;">Parking at the bottom is <strong>extremely tight</strong>. Give yourself extra time if arriving by car or taxi.</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- Dining & Menu Highlights -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#006064 0%,#00838F 55%,#00ACC1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127860;</span>
              Dining &amp; Menu Highlights
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127754; The Setting</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:16px;">
                Multi-level open-air patios right on the edge of the <strong>old pier</strong>. The main walkway runs through the outdoor seating, putting tables right next to the lapping waves of the Aegean.
              </p>

              <div class="benefits-heading mb-2">&#127801; Signature Dishes</div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">&#129419; Octopus:</span>
                <span style="font-size:0.9rem;">Sun-dried octopus hanging outside the kitchen &mdash; a Santorini classic.</span>
              </div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">&#129422; Lobster:</span>
                <span style="font-size:0.9rem;">Fresh lobster spaghetti.</span>
              </div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">&#127840; Sea Bream:</span>
                <span style="font-size:0.9rem;">Grilled sea bream, caught daily by local fishermen.</span>
              </div>
              <div class="confirm-row mb-4" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">&#128293; Scorpion Fish:</span>
                <span style="font-size:0.9rem;">Cooked in parchment paper.</span>
              </div>

              <div class="benefits-heading mb-2">&#127863; Wine</div>
              <p style="font-size:0.92rem;line-height:1.65;">
                Excellent selection of crisp, volcanic local <strong>Assyrtiko</strong> and estate Santorini white wines &mdash; perfectly paired for a mid-day seafood lunch.
              </p>

            </v-card-text>
          </v-card>

          <!-- Useful Tip -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#BF360C 0%,#D84315 55%,#E64A19 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#9888;&#65039;</span>
              Useful Tip
            </v-card-title>
            <v-card-text class="pa-4">
              <p style="font-size:0.92rem;line-height:1.65;">
                The <strong>walk back up the steps</strong> to Oia after lunch in the afternoon heat can be strenuous.
                If you prefer not to hike back up, local taxis can usually be arranged from the bay road at the bottom for a quick drive back up to town.
              </p>
            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
