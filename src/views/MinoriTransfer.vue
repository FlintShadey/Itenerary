<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Booking Confirmation -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#128652;</span>
              Transfer &mdash; Hotel Corallo &rarr; Minori &nbsp;&middot;&nbsp; Tue, Jun 23, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="success" variant="tonal" density="compact" class="mb-4">
                &#10003; <strong>Booking Confirmed</strong> &mdash; Transfeero #78509119
              </v-alert>

              <div class="flight-route mb-4">
                <div class="route-endpoint">
                  <div class="route-time">1:45 PM</div>
                  <div class="route-city">Hotel Corallo Sorrento</div>
                  <div class="route-date" style="font-size:0.72rem;">Sant&rsquo;Agnello</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#128652;</span>
                  <div class="route-arrow-line ferry-line"></div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-city">Via San Pietro, 16</div>
                  <div class="route-date" style="font-size:0.72rem;">Minori, SA, Italy</div>
                </div>
              </div>

              <div class="confirm-row mb-1">
                <span class="detail-label">Date &amp; Time:</span>
                <span>Tue, Jun 23, 2026 &nbsp;&middot;&nbsp; 1:45 PM</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Booking #:</span>
                <span class="confirm-code ferry-code">78509119</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Vehicle:</span>
                <span>Economy</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Passengers:</span>
                <span>2</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Guest:</span>
                <span>John Smith &nbsp;&middot;&nbsp; <a href="tel:+12103859809" class="med-link">+1 210 385-9809</a></span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Transfer price:</span>
                <span style="font-weight:600;color:#2E7D32;">&euro;138.35</span>
              </div>
              <div class="confirm-row mb-0">
                <span class="detail-label">SMS/WhatsApp alert:</span>
                <span>&euro;1.49</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- Driver Details & Apple Wallet -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-activity">
              <span class="card-header-icon">&#128241;</span>
              Driver Details &amp; Ticket
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="info" variant="tonal" density="compact" class="mb-4">
                &#128338; Transfeero will send driver details <strong>6 hours before the transfer</strong> by text, email, and push notification.
              </v-alert>

              <div class="benefits-heading mb-2">&#128179; Apple Wallet / Google Pay</div>
              <div class="confirm-row mb-3">Your Transfeero ticket is available in the <strong>Transfeero app</strong> &mdash; add it to Apple Wallet from there for quick access on the day.</div>

              <div class="confirm-row mb-1">
                <span class="detail-label">&#128241; Manage booking:</span>
                <span>Change, cancel, or open live support in the Transfeero app.</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- Support -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#128222;</span>
              Transfeero Support &mdash; 24/7
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#128242; WhatsApp Support</div>
              <div class="confirm-row mb-3">
                <a href="https://wa.me/442078552543" target="_blank" rel="noopener" class="med-link">Open WhatsApp Chat &#8599;</a>
                <span style="color:#555;font-size:0.85em;"> &mdash; +44 20 785 52 543</span>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#128222; Phone Numbers</div>
              <div class="hotel-contact">
                <div><span class="detail-label">&#127482;&#127480; USA:</span>
                  <a href="tel:+19294163724" class="med-link">+1 929 416 3724</a>
                  &nbsp;&middot;&nbsp;
                  <a href="tel:+15622693528" class="med-link">+1 562 269 3528</a>
                </div>
                <div><span class="detail-label">&#127464;&#127462; Canada:</span>
                  <a href="tel:+13656546440" class="med-link">+1 365 654 6440</a>
                </div>
                <div><span class="detail-label">&#127462;&#127482; Australia:</span>
                  <a href="tel:+611300297730" class="med-link">+61 1300 297 730</a>
                </div>
                <div><span class="detail-label">&#127468;&#127463; UK:</span>
                  <a href="tel:+442045869665" class="med-link">+44 20 4586 9665</a>
                </div>
                <div><span class="detail-label">&#127470;&#127481; Italy:</span>
                  <a href="tel:+390694505426" class="med-link">+39 06 9450 5426</a>
                </div>
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
