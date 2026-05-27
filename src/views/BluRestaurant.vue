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
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127860;</span>
              BLU Restaurant &mdash; Dinner &nbsp;&middot;&nbsp; Tue, Jun 09, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Date &amp; Time:</span>
                <span>Tuesday, June 9 &nbsp;&middot;&nbsp; <strong>9:00 PM</strong></span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Location:</span>
                <span>Malteza Square, Imerovigli 847 00</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">&#128222; Contact:</span>
                <a href="tel:+302286071474" class="med-link">+30 2286 071474</a>
              </div>

              <div class="confirm-row mb-1">
                <span class="detail-label">&#128205; Maps:</span>
                <a href="https://www.google.com/maps/search/BLU+Restaurant+Imerovigli+Santorini" target="_blank" rel="noopener" class="med-link">Open in Google Maps &#8599;</a>
              </div>

              <v-alert type="info" variant="tonal" class="mt-3" style="font-size:0.88rem;">
                Sunset on June 9 is around <strong>8:40 PM</strong> &mdash; your 9:00 PM seating transitions into an elegant night ambiance under the stars with illuminated cliffside views.
              </v-alert>

            </v-card-text>
          </v-card>

          <!-- Getting There -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128663;</span>
              Getting There &mdash; Aigialos &rarr; BLU
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-3">
                <span class="detail-label">Distance:</span>
                <span>~3 km &nbsp;&middot;&nbsp; Fira to Imerovigli heading north</span>
              </div>

              <div class="benefits-heading mb-2">&#128661; Option 1 &mdash; Taxi / Private Transfer <span style="font-weight:400;font-size:0.82rem;opacity:0.75;">(recommended)</span></div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:80px;">Time:</span>
                <span style="font-size:0.9rem;">~8–10 minutes</span>
              </div>
              <div class="confirm-row mb-4">
                <span class="detail-label" style="min-width:80px;">Note:</span>
                <span style="font-size:0.9rem;">Most seamless option for a 9:00 PM evening reservation.</span>
              </div>

              <div class="benefits-heading mb-2">&#128694; Option 2 &mdash; Walking</div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:80px;">Time:</span>
                <span style="font-size:0.9rem;">~35–40 minutes</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:80px;">Route:</span>
                <span style="font-size:0.9rem;">Head north along the iconic caldera pedestrian path through <strong>Firostefani</strong>.</span>
              </div>
              <div class="confirm-row">
                <span class="detail-label" style="min-width:80px;">Heads Up:</span>
                <span style="font-size:0.9rem;">Path has intermittent inclines and stone steps. After dark, wear appropriate footwear.</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- The Setting -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127759;</span>
              The Setting
            </v-card-title>
            <v-card-text class="pa-4">

              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:12px;">
                Designed by the <strong>Rockwell Group</strong>, BLU is situated on an elevated terrace overlooking <strong>Skaros Rock</strong>, the Aegean Sea, and the Caldera. A live resident DJ sets the mood under the stars with illuminated cliffside views.
              </p>

              <div class="confirm-row mb-1">
                <span class="detail-label">&#127981; Views:</span>
                <span style="font-size:0.9rem;">Skaros Rock, Aegean Sea &amp; Caldera panorama</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#127926; Ambiance:</span>
                <span style="font-size:0.9rem;">Live resident DJ &mdash; night atmosphere begins after 8:40 PM sunset</span>
              </div>
              <div class="confirm-row">
                <span class="detail-label">&#127981; Design:</span>
                <span style="font-size:0.9rem;">Elevated terrace by the Rockwell Group</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- Culinary Highlights -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127868;</span>
              Culinary Highlights
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-3">
                <span class="detail-label">Chef:</span>
                <span style="font-size:0.9rem;"><strong>Chef Elvis Giovaso</strong> &mdash; elevated Greek Mediterranean gastronomy with global influences</span>
              </div>

              <div class="benefits-heading mb-2">&#129388; Signature Starters</div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">&#129419; Calamari:</span>
                <span style="font-size:0.9rem;">Grilled calamari</span>
              </div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">&#127807; Fava:</span>
                <span style="font-size:0.9rem;">Local Santorinian fava</span>
              </div>
              <div class="confirm-row mb-4" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">&#127826; Signature:</span>
                <span style="font-size:0.9rem;">Eggplant paired with red pepper foam</span>
              </div>

              <div class="benefits-heading mb-2">&#127857; Mains</div>
              <p style="font-size:0.9rem;line-height:1.6;margin-bottom:16px;">
                Fresh, regionally sourced seafood &middot; Native volcanic land produce &middot; Curated Mediterranean cuts
              </p>

              <div class="benefits-heading mb-2">&#127863; Wine &amp; Beverages</div>
              <p style="font-size:0.9rem;line-height:1.6;">
                Robust local wine list emphasizing crisp, volcanic <strong>Santorini Assyrtiko</strong> and premium estate whites, alongside a creative cocktail menu from the adjacent pool lounge.
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
