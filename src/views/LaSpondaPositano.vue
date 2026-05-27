<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#880E4F 0%,#AD1457 55%,#E91E63 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127869;</span>
              Dinner — La Sponda, Positano · Sun, Jun 28, 2026
            </v-card-title>
            <v-card-text class="pa-4">
              <!-- Reservation summary -->
              <div class="checkin-row mb-4">
                <div class="checkin-block">
                  <div class="checkin-label">Arrives</div>
                  <div class="checkin-time">10:00 PM</div>
                  <div class="checkin-date">Sun, Jun 28</div>
                </div>
                <div class="checkin-divider">&#127860;</div>
                <div class="checkin-block">
                  <div class="checkin-label">Ends</div>
                  <div class="checkin-time">12:30 AM</div>
                  <div class="checkin-date">Mon, Jun 29</div>
                </div>
                <div class="checkin-divider">&#128101;</div>
                <div class="checkin-block text-right">
                  <div class="checkin-label">Party</div>
                  <div class="checkin-time">2 guests</div>
                </div>
              </div>

              <div class="confirm-row mb-1">
                <span class="detail-label">Name on Reservation:</span>
                <span>Jessica Miller</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Reservation #:</span>
                <span class="confirm-code ferry-code">4XBXED3LUNNS</span>
              </div>

              <v-alert type="error" variant="tonal" density="compact" class="mb-4">
                <strong>&#9203; Table held 15 minutes only.</strong> If running late, call <a href="tel:+39089875066" class="med-link">+39 089 875066</a> immediately.
              </v-alert>

              <v-divider class="my-3"></v-divider>

              <!-- Location & Contact -->
              <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#128205; Location & Contact</div>
              <div class="hotel-contact mb-3">
                <div><span class="detail-label">&#128205; Address:</span> Via Cristoforo Colombo, 30, Positano, Campania 84017</div>
                <div><span class="detail-label">&#128222; Phone:</span> <a href="tel:+39089875066" class="med-link">+39 089 875066</a></div>
              </div>

              <v-divider class="my-3"></v-divider>

              <!-- Policies for Non-Hotel Guests -->
              <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#128176; Policies for Non-Hotel Guests</div>
              <ul class="benefits-list mb-3">
                <li><strong>Minimum Spend:</strong> &euro;160 per person.</li>
                <li><strong>Service Charge:</strong> A discretionary 15% service charge will be added to the bill.</li>
                <li><strong>Seating:</strong> Preferences noted but a &ldquo;front row table&rdquo; is not guaranteed &mdash; priority given to hotel residents.</li>
              </ul>

              <v-divider class="my-3"></v-divider>

              <!-- Important Rules & Cancellation -->
              <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#9888;&#65039; Important Rules & Cancellation</div>
              <ul class="benefits-list mb-0">
                <li><strong>Cancellation Policy:</strong> Cancellations accepted up to <strong>24 hours before</strong> booking time.</li>
                <li><strong>No-Show / Late Cancellation Fee:</strong> <span style="color:#C62828;font-weight:700;">&euro;100.00 per person.</span></li>
                <li><strong>Photography:</strong> Professional photography is strictly prohibited in all public areas (bars, restaurants) to protect guest privacy.</li>
              </ul>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'LaSpondaPositano',
}
</script>
