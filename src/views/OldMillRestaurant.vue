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
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A1A00 0%,#6D2C00 55%,#8B3A0F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127869;</span>
              Reservation Details
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Where:</span>
                <span><strong>The Old Mill Restaurant</strong> &mdash; Temple Bar, Dublin</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">When:</span>
                <span><strong>Wed, Jul 1 at 12:00 PM</strong> (IST)</span>
              </div>
              <div class="confirm-row">
                <span class="detail-label">Party Size:</span>
                <span>2 people</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- About -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A1A00 0%,#6D2C00 55%,#8B3A0F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127981;</span>
              About The Old Mill
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127981; The Vibe</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:16px;">
                Traditional, lively Irish dining room &mdash; low-lit, clubby <strong>dark-wood interior</strong> with <strong>exposed brick</strong>. A proper Dublin pub-restaurant atmosphere without being touristy.
              </p>

              <div class="benefits-heading mb-2">&#127869; The Food</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:8px;">
                Authentic, hearty Irish comfort classics:
              </p>
              <ul class="benefits-list">
                <li>&#129385; Traditional lamb stew</li>
                <li>&#127867; Slow-cooked Guinness beef casserole</li>
                <li>&#129368; Cottage pie</li>
                <li>&#127843; Classic fish &amp; chips</li>
              </ul>

            </v-card-text>
          </v-card>

          <!-- Walking Directions -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A1A00 0%,#6D2C00 55%,#8B3A0F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128694;</span>
              Walking from The Westbury &mdash; 6 Minutes
            </v-card-title>
            <v-card-text class="pa-4">

              <ol style="font-size:0.92rem;line-height:1.8;padding-left:18px;margin-bottom:16px;">
                <li>Exit the hotel onto <strong>Harry Street</strong>, turn left onto <strong>Grafton Street</strong>.</li>
                <li>Take the first left onto <strong>Wicklow Street</strong>, then turn right onto <strong>St. Andrew's Street</strong>.</li>
                <li>Continue straight onto <strong>Trinity Street</strong>, cross the major intersection at <strong>Dame Street</strong>, and proceed into <strong>Fownes Street Lower</strong>. The restaurant is in that immediate block.</li>
              </ol>

              <v-alert type="info" variant="tonal" style="font-size:0.88rem;">
                <strong>&#9928; If it rains:</strong> A 5-minute taxi will drop you at the edge of the pedestrian zone on Dame Street &mdash; just a 1-minute walk to the entrance.
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
