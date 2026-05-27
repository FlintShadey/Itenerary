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
            <v-card-title class="card-header">
              <span class="card-header-icon">&#9992;</span>
              Return Flights &mdash; Booking Details
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Airline Confirmation:</span>
                <span class="confirm-code">BFXWUC</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Trip ID:</span>
                <span class="trip-id">1016681915</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Total:</span>
                <span style="font-weight:600;color:#2E7D32;">$2,541.26</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Fare Class:</span>
                <span>Flexible Economy (N)</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Travelers:</span>
                <span>John Flint Smith &middot; Jessica Miller</span>
              </div>
              <ul class="benefits-list">
                <li>&#10003; Checked bags included</li>
                <li>&#10003; Carry-on bag included</li>
                <li>&#10003; Refund included</li>
                <li>&#10003; Exchange included</li>
              </ul>

            </v-card-text>
          </v-card>

          <!-- Segment 1 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header">
              <span class="card-header-icon">&#9992;</span>
              Leg 1 &mdash; DUB &rarr; DFW
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="flight-label mb-3">
                <span class="flight-num">IB 4245 &nbsp;&middot;&nbsp; Iberia</span>
                <span class="flight-class">operated by American Airlines &middot; Boeing 777-200</span>
              </div>
              <div class="flight-route mt-2">
                <div class="route-endpoint">
                  <div class="route-time">12:40 PM</div>
                  <div class="route-iata">DUB</div>
                  <div class="route-city">Dublin, IE</div>
                  <div class="route-date">Fri, Jul 03</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#9992;</span>
                  <div class="route-arrow-line"></div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-iata">DFW</div>
                  <div class="route-city">Dallas / Fort Worth, TX</div>
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Layover -->
          <div class="layover-row mb-4" style="text-align:center;">
            <v-chip size="small" color="#546E7A" variant="elevated" style="font-size:0.78rem;">
              &#128336; Layover at DFW &mdash; 1h 44m
            </v-chip>
          </div>

          <!-- Segment 2 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header">
              <span class="card-header-icon">&#9992;</span>
              Leg 2 &mdash; DFW &rarr; AUS
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="flight-label mb-3">
                <span class="flight-num">IB 4074 &nbsp;&middot;&nbsp; Iberia</span>
                <span class="flight-class">operated by SkyWest Airlines for Air Alaska &middot; Canadair CRJ-900</span>
              </div>
              <div class="flight-route mt-2">
                <div class="route-endpoint">
                  <div class="route-iata">DFW</div>
                  <div class="route-city">Dallas / Fort Worth, TX</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#9992;</span>
                  <div class="route-arrow-line"></div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-time">7:16 PM</div>
                  <div class="route-iata">AUS</div>
                  <div class="route-city">Austin, TX</div>
                  <div class="route-date">Fri, Jul 03</div>
                </div>
              </div>

              <div class="route-sub text-center mt-3" style="color:#546E7A;font-size:0.82rem;">Total travel time: 12h 36m &middot; 1 stop (DFW)</div>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
