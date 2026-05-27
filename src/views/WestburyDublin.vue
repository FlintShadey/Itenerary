<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Booking Summary -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#127968;</span>
              The Westbury Dublin &mdash; Booking Details
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="hotel-meta mb-3">
                <span class="hotel-dates">Tue, Jun 30 &ndash; Fri, Jul 03, 2026</span>
                <span class="hotel-nights">3 nights &middot; 2 guests</span>
                <span class="hotel-nights" style="background:#E8F5E9;border-color:#A5D6A7;color:#1B5E20;">Free cancellation until Jun 29</span>
              </div>

              <div class="hotel-room mb-4">
                <span class="room-type-icon">&#127953;</span>
                <span class="room-type-text">Classic Room &mdash; 1 King Bed</span>
              </div>

              <!-- Check-in / Check-out -->
              <div class="checkin-row mb-4">
                <div class="checkin-block">
                  <div class="checkin-label">Check-in</div>
                  <div class="checkin-time">3:00 PM</div>
                  <div class="checkin-date">Tue, Jun 30</div>
                </div>
                <div class="checkin-divider">&#8594;</div>
                <div class="checkin-block text-right">
                  <div class="checkin-label">Check-out</div>
                  <div class="checkin-time">12:00 PM</div>
                  <div class="checkin-date">Fri, Jul 03</div>
                </div>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="confirm-row mb-1">
                <span class="detail-label">Confirmation:</span>
                <span class="confirm-code">6715SG041098</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Primary Guest:</span>
                <span>John Flint Smith</span>
              </div>
              <div class="confirm-row">
                <span class="detail-label">Total:</span>
                <span style="font-weight:600;color:#2E7D32;">$2,058.26</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- Cardmember Benefits -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#11088;</span>
              Cardmember Benefits
            </v-card-title>
            <v-card-text class="pa-4">

              <ul class="benefits-list">
                <li>&#9749; Daily breakfast for 2</li>
                <li>&#128176; $100 property credit <span class="benefit-note">(applied once per stay; not valid on room rate, taxes, fees, or gratuities)</span></li>
                <li>&#127873; Welcome amenity</li>
                <li>&#128246; Wi-Fi included</li>
                <li>&#127957; Room upgrade at check-in, if available</li>
                <li>&#128338; Early check-in &amp; late check-out, if available</li>
              </ul>

            </v-card-text>
          </v-card>

          <!-- Address & Contact -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#128205;</span>
              Address &amp; Getting There
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-2">
                <span class="detail-label">Address:</span>
                <span>Grafton Street, Dublin, D02 CH66, Ireland</span>
              </div>
              <div class="confirm-row mb-4">
                <span class="detail-label">Neighbourhood:</span>
                <span>Steps from Grafton Street shopping &amp; St. Stephen's Green</span>
              </div>

              <a href="https://www.google.com/maps/search/The+Westbury+Dublin+Grafton+Street" target="_blank" rel="noopener" class="med-link">&#128506; View on Google Maps &#8599;</a>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
