<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Route -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#9973;</span>
              Ferry Route &mdash; Rafina &rarr; Mykonos
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="flight-route mb-4">
                <div class="route-endpoint">
                  <div class="route-time">2:20 PM</div>
                  <div class="route-iata ferry-iata">RAF</div>
                  <div class="route-city">Rafina, GR</div>
                  <div class="route-date">Fri, Jun 05</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#9973;</span>
                  <div class="route-arrow-line ferry-line"></div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-time">5:00 PM</div>
                  <div class="route-iata ferry-iata">MYK</div>
                  <div class="route-city">Mykonos, GR</div>
                  <div class="route-date">Fri, Jun 05</div>
                </div>
              </div>

              <div class="ferry-vessel mb-3">
                <span class="vessel-icon">&#128674;</span>
                <span class="vessel-name">SUPERRUNNER JET</span>
              </div>

              <div class="confirm-row mb-1">
                <span class="detail-label">Operator:</span>
                <span style="font-weight:600;">SeaJets</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Booking Ref:</span>
                <span class="confirm-code ferry-code">1112QCMBH</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Reserved:</span>
                <span>03/04/2026</span>
              </div>

              <div style="text-align:right;">
                <a href="https://www.seajets.com/en/my-bookings/" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="cyan-darken-3" variant="tonal" size="small">
                    &#9973; SeaJets Reservation &nbsp;&#8250;
                  </v-btn>
                </a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Passengers -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#128100;</span>
              Passengers
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="passenger-table">
                <div class="passenger-row passenger-header">
                  <span>Name</span>
                  <span>Nationality</span>
                  <span>Type</span>
                  <span>Cabin</span>
                </div>
                <div class="passenger-row">
                  <span class="pax-name">SMITH JOHN FLINT</span>
                  <span>United States</span>
                  <span>Adult &middot; Male</span>
                  <span class="seat-badge">SLV</span>
                </div>
                <div class="passenger-row">
                  <span class="pax-name">MILLER JESSICA</span>
                  <span>United States</span>
                  <span>Adult &middot; Female</span>
                  <span class="seat-badge">SLV</span>
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Online Check-in -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#9989;</span>
              Online Check-In
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Order ID:</span>
                <span class="confirm-code ferry-code">1112QCMBH</span>
              </div>
              <div class="confirm-row mb-4">
                <span class="detail-label">Phone:</span>
                <span class="ferry-code">0012103859809</span>
              </div>

              <a href="https://webcheckin.seajets.com" target="_blank" rel="noopener" style="text-decoration:none;display:block;text-align:right;">
                <v-btn color="blue-darken-3" variant="elevated" size="small">
                  &#9989; Online Check-In &nbsp;&rarr;
                </v-btn>
              </a>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
