<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Booking Note -->
          <v-alert type="warning" variant="tonal" class="mb-5" style="font-size:0.9rem;">
            <strong>&#127915; Booking Note:</strong> The Guinness Storehouse uses <strong>strict timed entry slots</strong>.
            July 2 is peak summer &mdash; book a <strong>3:15 PM or 3:30 PM slot online in advance</strong> and select the
            <strong>Guinness Academy</strong> or <strong>STOUTie Experience</strong> tier.
          </v-alert>

          <!-- 1:45 PM Lunch -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127869;</span>
              1:45 PM &mdash; Luxury Lunch at WILDE
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Where:</span>
                <span><strong>WILDE</strong> &mdash; inside The Westbury Hotel</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Setting:</span>
                <span>Covered, light-filled garden terrace</span>
              </div>
              <p style="font-size:0.92rem;line-height:1.65;">
                A relaxed pre-tour lunch. Focus on the <strong>locally sourced Irish seafood</strong> or <strong>aged steaks</strong> before heading out to St. James's Gate.
              </p>

            </v-card-text>
          </v-card>

          <!-- 2:45 PM Walk / Ride -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128694;</span>
              2:45 PM &mdash; To St. James's Gate
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127963; Option A &mdash; Scenic Walk <span style="font-weight:400;font-size:0.82rem;opacity:0.75;">(recommended)</span></div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:80px;">Time:</span>
                <span style="font-size:0.9rem;">20–25 minutes, flat walk heading west</span>
              </div>
              <div class="confirm-row mb-4">
                <span class="detail-label" style="min-width:80px;">Route:</span>
                <span style="font-size:0.9rem;">Pass <strong>Dublin Castle</strong> and <strong>Christ Church Cathedral</strong> along the way</span>
              </div>

              <div class="benefits-heading mb-2">&#128661; Option B &mdash; Taxi</div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:80px;">Time:</span>
                <span style="font-size:0.9rem;">~5–10 minutes depending on Dame Street traffic</span>
              </div>
              <div class="confirm-row">
                <span class="detail-label" style="min-width:80px;">How:</span>
                <span style="font-size:0.9rem;">Request from The Westbury doorman</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- 3:15 PM Guinness Storehouse -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127866;</span>
              3:15 PM &mdash; The Guinness Storehouse
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127915; The Upgrade</div>
              <p style="font-size:0.9rem;line-height:1.65;margin-bottom:16px;">
                Skip standard general admission. Select the <strong>Guinness Academy</strong> or the <strong>STOUTie Experience</strong> when booking.
              </p>

              <div class="benefits-heading mb-2">&#127981; What to Expect</div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:100px;">&#127981; Brewery:</span>
                <span style="font-size:0.9rem;">Walk through the historic <strong>7-floor brewery</strong> design surrounding the world's largest pint glass.</span>
              </div>
              <div class="confirm-row mb-4" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:100px;">&#127866; Pour:</span>
                <span style="font-size:0.9rem;">Learn the precise <strong>6-step ritual</strong> to pour your own perfect pint &mdash; or get your image laser-printed into the foam of your stout (STOUTie).</span>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#127956; 4:30 PM &mdash; The Gravity Bar</div>
              <p style="font-size:0.9rem;line-height:1.65;">
                Conclude your tour on the <strong>top floor</strong>. Enjoy your complimentary pint with <strong>360&deg; panoramic views</strong> across the Dublin skyline and out to the Dublin mountains.
              </p>

            </v-card-text>
          </v-card>

          <!-- 5:15 PM Historic Pubs -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127981;</span>
              5:15 PM &mdash; Historic Local Pubs
            </v-card-title>
            <v-card-text class="pa-4">

              <p style="font-size:0.9rem;line-height:1.65;margin-bottom:14px;">
                Head back toward the hotel area to decompress. Both pubs are <strong>2 minutes from The Westbury</strong> &mdash; dark mahogany wood, authentic Victorian snug seating, and an excellent pour of Guinness far removed from Temple Bar crowds.
              </p>

              <div class="confirm-row mb-1">
                <span class="detail-label">&#127981; Neary's:</span>
                <span style="font-size:0.9rem;">Chatham Street &nbsp;&middot;&nbsp; <a href="https://www.google.com/maps/search/Neary's+pub+Dublin" target="_blank" rel="noopener" class="med-link">Google Maps &#8599;</a></span>
              </div>
              <div class="confirm-row">
                <span class="detail-label">&#127981; Kehoe's:</span>
                <span style="font-size:0.9rem;">South Anne Street &nbsp;&middot;&nbsp; <a href="https://www.google.com/maps/search/Kehoe's+pub+Dublin" target="_blank" rel="noopener" class="med-link">Google Maps &#8599;</a></span>
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
