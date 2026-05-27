<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Ferry Route -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#9973;</span>
              Ferry &mdash; Sorrento &rarr; Maiori &nbsp;&middot;&nbsp; Tue, Jun 23, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="flight-route mb-4">
                <div class="route-endpoint">
                  <div class="route-time">5:10 PM</div>
                  <div class="route-iata ferry-iata">SOR</div>
                  <div class="route-city">Sorrento</div>
                  <div class="route-date">Tue, Jun 23</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#9973;</span>
                  <div class="route-arrow-line ferry-line"></div>
                  <div style="font-size:0.75rem;color:#666;text-align:center;margin-top:2px;">1h 30m</div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-time">6:40 PM</div>
                  <div class="route-iata ferry-iata">MAI</div>
                  <div class="route-city">Maiori</div>
                  <div class="route-date">Tue, Jun 23</div>
                </div>
              </div>

              <div class="ferry-vessel mb-3">
                <span class="vessel-icon">&#128674;</span>
                <span class="vessel-name">Coastlines</span>
              </div>

              <v-alert type="info" variant="tonal" density="compact" class="mb-3">
                &#127378; <strong>No ticket collection required.</strong> Board directly with your e-ticket.
              </v-alert>

              <v-divider class="my-3"></v-divider>

              <div class="confirm-row mb-1">
                <span class="detail-label">Ferryhopper Code:</span>
                <span class="confirm-code ferry-code">FH84MY2582HM</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Reservation Code:</span>
                <span class="confirm-code ferry-code">50008TVKJI</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Lead Passenger:</span>
                <span>John Smith</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Email:</span>
                <span>flintsmith@gmail.com</span>
              </div>
              <div class="confirm-row mb-0">
                <span class="detail-label">Phone:</span>
                <span><a href="tel:+12103859809" class="med-link">+1 210 385-9809</a></span>
              </div>

            </v-card-text>
          </v-card>

          <!-- Passengers -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-activity">
              <span class="card-header-icon">&#128100;</span>
              Passengers &amp; Tickets
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="passenger-table mb-3">
                <div class="passenger-row passenger-header">
                  <span>Name</span>
                  <span>Ticket</span>
                  <span>Class</span>
                </div>
                <div class="passenger-row">
                  <span class="pax-name">John Smith</span>
                  <span class="seat-badge">T141266</span>
                  <span>Full Fare &middot; Deck-lounge <span class="benefit-note">(1 small bag)</span></span>
                </div>
                <div class="passenger-row">
                  <span class="pax-name">Jessica Miller</span>
                  <span class="seat-badge">T141267</span>
                  <span>Full Fare &middot; Deck-lounge <span class="benefit-note">(1 small bag)</span></span>
                </div>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#127921; Luggage Allowance</div>
              <div class="confirm-row mb-0" style="font-size:0.88rem;color:#444;">
                1 bag per person &mdash; max <strong>50 &times; 35 &times; 20 cm</strong> / <strong>9 kg</strong>. Extra charges apply for oversized luggage.
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-3">&#128247; Boarding QR Codes</div>
              <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;">
                <div style="text-align:center;">
                  <div style="font-size:0.8rem;font-weight:600;color:#555;margin-bottom:6px;">John &mdash; T141266</div>
                  <img :src="'/Flint Sorrento → Maiori ferry QR.png'" alt="John boarding QR" style="width:140px;height:140px;border:1px solid #ddd;border-radius:8px;" />
                </div>
                <div style="text-align:center;">
                  <div style="font-size:0.8rem;font-weight:600;color:#555;margin-bottom:6px;">Jessica &mdash; T141267</div>
                  <img :src="'/Jessica Sorrento → Maiori ferry QR.png'" alt="Jessica boarding QR" style="width:140px;height:140px;border:1px solid #ddd;border-radius:8px;" />
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Price Breakdown -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#128176;</span>
              Price Breakdown
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-1">
                <span class="detail-label">Ticket price:</span>
                <span>$50.54</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Booking fee:</span>
                <span>$5.41</span>
              </div>
              <div class="confirm-row mb-2">
                <span class="detail-label">SMS notifications:</span>
                <span>$2.29</span>
              </div>
              <v-divider class="my-2"></v-divider>
              <div class="confirm-row mb-0">
                <span class="detail-label" style="font-weight:700;">Total:</span>
                <span style="font-weight:700;color:#1B5E20;font-size:1.05rem;">$58.24</span>
              </div>
            </v-card-text>
          </v-card>

          <!-- Useful Tips -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-transfer">
              <span class="card-header-icon">&#128205;</span>
              Departure Port &amp; Useful Tips
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="info" variant="tonal" density="compact" class="mb-3">
                &#128203; Your departure port has only one ferry terminal.
                <a href="https://www.ferryhopper.com" target="_blank" rel="noopener" class="med-link" style="margin-left:4px;">View on map &#8599;</a>
              </v-alert>

              <ul class="benefits-list mb-3">
                <li>Arrive at the port <strong>at least 1 hour before departure</strong> (5:10 PM &rarr; be there by 4:10 PM).</li>
                <li>Ferry services can be affected by strong winds. Check with the local port authority or a travel agency to confirm your departure time if it's very windy.</li>
                <li>If you have trouble with online check-in or haven't received your boarding pass, visit the Ferryhopper Web Check-in FAQ.</li>
              </ul>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#128241; Ferryhopper App</div>
              <div class="confirm-row mb-1">Track your ferry live, view your booking, and manage your trip in the Ferryhopper app (4M+ downloads).</div>
              <div class="confirm-row mb-0">
                <a href="https://apps.apple.com/app/ferryhopper/id1109380019" target="_blank" rel="noopener" class="med-link">&#128241; Download on the App Store &#8599;</a>
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
