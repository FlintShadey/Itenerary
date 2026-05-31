<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Reservation Confirmation -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#01579B 0%,#0277BD 55%,#0288D1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127860;</span>
              Dinner Reservation &mdash; Ronda
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="success" variant="tonal" density="compact" class="mb-4">
                &#10003; <strong>Reservation confirmed</strong> &mdash; Ronda Restaurant &amp; Beach Bar
              </v-alert>

              <div class="checkin-row mb-4">
                <div class="checkin-block">
                  <div class="checkin-label">Date</div>
                  <div class="checkin-time">Fri, Jun 12</div>
                </div>
                <div class="checkin-divider">&#127860;</div>
                <div class="checkin-block">
                  <div class="checkin-label">Time</div>
                  <div class="checkin-time">6:30 PM</div>
                </div>
                <div class="checkin-divider">&#128101;</div>
                <div class="checkin-block text-right">
                  <div class="checkin-label">Party</div>
                  <div class="checkin-time">6 guests</div>
                </div>
              </div>

              <div class="confirm-row mb-1">
                <span class="detail-label">Name:</span>
                <span>Jessica Miller</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Area:</span>
                <span>Restaurant</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#128222; Phone:</span>
                <a href="tel:+306937404446" class="med-link">+30 693 740 4446</a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Overview -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#01579B 0%,#0277BD 55%,#0288D1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127949;</span>
              Elli Beach &amp; Ronda &mdash; Fri, Jun 12, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:14px;">
                A day-to-night experience anchored at <strong>Ronda Restaurant &amp; Beach Bar</strong> on Elli Beach &mdash; deep turquoise waters, the historic Trampolino diving tower, and an Italian stone venue that shifts from luxury day club to upscale evening lounge.
              </p>

              <div class="confirm-row mb-1">
                <span class="detail-label">Getting There:</span>
                <span>15–20 min walk or ~5 min taxi north of 10GR Boutique Hotel</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#128205; Address:</span>
                <span>Pl. Kountourioti 6, Rhodes 851 00 &mdash; Elli Beach</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#128222; Booking:</span>
                <a href="tel:+306937404446" class="med-link">+30 693 740 4446</a>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">&#128231; Email:</span>
                <a href="mailto:info@ronda.gr" class="med-link">info@ronda.gr</a>
              </div>

              <div class="confirm-row">
                <span class="detail-label">&#128205; Maps:</span>
                <a href="https://www.google.com/maps/search/Ronda+Restaurant+Elli+Beach+Rhodes" target="_blank" rel="noopener" class="med-link">Open in Google Maps &#8599;</a>
              </div>

            </v-card-text>
          </v-card>

          <!-- The Venue -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#01579B 0%,#0277BD 55%,#0288D1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127963;</span>
              The Venue
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">&#127963; Setting:</span>
                <span style="font-size:0.9rem;">1930s vaulted Italian stone structure right on the sand at Punta della Sabia. Shifts from a <strong>luxury day club</strong> with premium sunbed rentals to an <strong>energetic evening lounge</strong> with a resident DJ.</span>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#128101; Group Suitability</div>
              <p style="font-size:0.9rem;line-height:1.65;">
                Routinely hosts large events and banquets. The spacious open-air layout easily accommodates massive tables, offering premium synchronized service, a lively atmosphere, and shisha options.
              </p>

              <v-alert type="info" variant="tonal" class="mt-3" density="compact" style="font-size:0.88rem;">
                &#9888; Reserve a unified group deck table well in advance for mid-June via <strong>info@ronda.gr</strong> or <strong>+30 693 740 4446</strong>.
              </v-alert>

            </v-card-text>
          </v-card>

          <!-- Culinary Highlights -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#01579B 0%,#0277BD 55%,#0288D1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127860;</span>
              Culinary Highlights
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127757; Modern Mediterranean</div>
              <p style="font-size:0.9rem;line-height:1.65;margin-bottom:16px;">
                Upscale seafood, steaks, and a dedicated vegan selection. Whole local catches can be selected by the kilo to be grilled fresh.
              </p>

              <div class="benefits-heading mb-2">&#127843; The Raw Bar</div>
              <p style="font-size:0.9rem;line-height:1.65;margin-bottom:16px;">
                High-end Japanese menu featuring premium sushi, sashimi, and sharing platters tailored for large groups.
              </p>

              <div class="benefits-heading mb-2">&#127863; Beverage Program</div>
              <p style="font-size:0.9rem;line-height:1.65;">
                Extensive cellar of indigenous Greek and international wines alongside a creative signature cocktail menu.
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
