<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Leg 1 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header">
              <span class="card-header-icon">&#9992;</span>
              Leg 1 &mdash; AUS &rarr; EWR
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="flight-label mb-3">
                <span class="flight-num">UA1449 &nbsp;&middot;&nbsp; United</span>
                <span class="flight-class">Economy (YN)</span>
              </div>
              <div class="flight-route mt-2">
                <div class="route-endpoint">
                  <div class="route-time">07:05 AM</div>
                  <div class="route-iata">AUS</div>
                  <div class="route-city">Austin, TX</div>
                  <div class="route-date">Mon, Jun 01</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#9992;</span>
                  <div class="route-arrow-line"></div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-time">11:50 AM</div>
                  <div class="route-iata">EWR</div>
                  <div class="route-city">Newark / New York</div>
                  <div class="route-date">Mon, Jun 01</div>
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Layover chip -->
          <div class="layover-row mb-4" style="text-align:center;">
            <v-chip size="small" color="#546E7A" variant="elevated" style="font-size:0.78rem;">
              &#128336; Layover at EWR &mdash; 4h 05m
            </v-chip>
          </div>

          <!-- Leg 2 -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header">
              <span class="card-header-icon">&#9992;</span>
              Leg 2 &mdash; EWR &rarr; ATH
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="flight-label mb-3">
                <span class="flight-num">UA124 &nbsp;&middot;&nbsp; United</span>
                <span class="flight-class premium">Premium Plus (ON)</span>
              </div>
              <div class="flight-route mt-2">
                <div class="route-endpoint">
                  <div class="route-time">03:55 PM</div>
                  <div class="route-iata">EWR</div>
                  <div class="route-city">Newark / New York</div>
                  <div class="route-date">Mon, Jun 01</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#9992;</span>
                  <div class="route-arrow-line"></div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-time">08:10 AM</div>
                  <div class="route-iata">ATH</div>
                  <div class="route-city">Athens, GR</div>
                  <div class="route-date">Tue, Jun 02</div>
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Traveler Details -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header">
              <span class="card-header-icon">&#128100;</span>
              Traveler Details
            </v-card-title>
            <v-card-text class="pa-4">

              <!-- MILLER/JESSICA -->
              <v-card variant="outlined" class="traveler-card mb-3 pa-3">
                <div class="traveler-name mb-2">MILLER / JESSICA</div>
                <div class="traveler-detail">
                  <span class="detail-label">eTicket:</span>
                  <span class="detail-value">0162390534026</span>
                </div>
                <div class="seat-row mt-2">
                  <span class="detail-label">Seats:</span>
                  <span class="seat-badge">AUS&ndash;EWR&nbsp;20E</span>
                  <span class="seat-badge">EWR&ndash;ATH&nbsp;20C</span>
                </div>
                <div class="upgrade-row mt-2">
                  <v-chip size="small" color="#C1440E" variant="elevated" class="upgrade-chip">
                    Economy Plus Seat
                  </v-chip>
                  <span class="upgrade-segment">AUS&ndash;EWR</span>
                  <span class="upgrade-ticket">(0164384719526)</span>
                </div>
              </v-card>

              <!-- SMITH/JOHN -->
              <v-card variant="outlined" class="traveler-card pa-3">
                <div class="traveler-name mb-2">SMITH / JOHN</div>
                <div class="traveler-detail">
                  <span class="detail-label">eTicket:</span>
                  <span class="detail-value">0162390534025</span>
                </div>
                <div class="traveler-detail mt-1">
                  <span class="detail-label">Frequent Flyer:</span>
                  <span class="ff-badge">UA&#8209;XXXXX327 Member</span>
                </div>
                <div class="seat-row mt-2">
                  <span class="detail-label">Seats:</span>
                  <span class="seat-badge">AUS&ndash;EWR&nbsp;20F</span>
                  <span class="seat-badge">EWR&ndash;ATH&nbsp;20A</span>
                </div>
                <div class="upgrade-row mt-2">
                  <v-chip size="small" color="#C1440E" variant="elevated" class="upgrade-chip">
                    Economy Plus Seat
                  </v-chip>
                  <span class="upgrade-segment">AUS&ndash;EWR</span>
                  <span class="upgrade-ticket">(0164384719527)</span>
                </div>
              </v-card>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
