<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Booking Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#127968;</span>
              Hotel Corallo Sorrento &mdash; Sant&rsquo;Agnello &nbsp;&middot;&nbsp; Jun 20&ndash;23, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="hotel-meta mb-3">
                <span class="hotel-dates">Sat, Jun 20 &ndash; Tue, Jun 23, 2026</span>
                <span class="hotel-nights">3 nights &middot; 2 guests</span>
              </div>

              <div class="hotel-room mb-4">
                <span class="room-type-icon">&#127953;</span>
                <span class="room-type-text">Standard &mdash; Internal view window &mdash; 2 Adults</span>
              </div>

              <!-- Check-in / Check-out -->
              <div class="checkin-row mb-4">
                <div class="checkin-block">
                  <div class="checkin-label">Check-in</div>
                  <div class="checkin-time">1:00 PM</div>
                  <div class="checkin-date">Sat, Jun 20</div>
                </div>
                <div class="checkin-divider">&#8594;</div>
                <div class="checkin-block text-right">
                  <div class="checkin-label">Check-out</div>
                  <div class="checkin-time">12:00 PM</div>
                  <div class="checkin-date">Tue, Jun 23</div>
                </div>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="confirm-row mb-1">
                <span class="detail-label">Booking #:</span>
                <span class="confirm-code">2026042047803518</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Meal Plan:</span>
                <span style="color:#2E7D32;font-weight:600;">Breakfast Included</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- Rate Includes -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-activity">
              <span class="card-header-icon">&#9733;</span>
              Rate Includes
            </v-card-title>
            <v-card-text class="pa-4">
              <ul class="benefits-list">
                <li>&#9749; Buffet Breakfast</li>
                <li>&#128246; Wi-Fi throughout the hotel</li>
                <li>&#127946; Panoramic swimming pool with umbrella, sun bed &amp; one pool towel per person</li>
                <li>&#128338; Early check-in 1:00 PM &amp; late check-out 12:00 PM <span style="color:#666;font-size:0.85em;">(subject to availability)</span></li>
                <li>&#127860; 10% discount at dinner &mdash; panoramic restaurant <span style="color:#666;font-size:0.85em;">(drinks not included)</span></li>
                <li>&#128652; Shuttle service to the centre of Sorrento</li>
                <li>&#127867; Welcome non-alcoholic drink</li>
              </ul>
            </v-card-text>
          </v-card>

          <!-- Getting There -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-transfer">
              <span class="card-header-icon">&#128652;</span>
              Getting to the Hotel
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="info" variant="tonal" density="compact" class="mb-4">
                &#128652; The <strong>bus from Naples</strong> drops you at Sant&rsquo;Agnello &mdash; the hotel is a short walk or taxi from the stop.
              </v-alert>

              <div class="confirm-row mb-1">
                <span class="detail-label">Bus stop:</span>
                <span>Corso Crawford / Via Bagnulo, Sant&rsquo;Agnello</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Hotel address:</span>
                <span>Via Nuovo Rione Cappuccini, 12 &mdash; Sant&rsquo;Agnello</span>
              </div>

              <div class="mt-1">
                <a href="https://maps.google.com/?q=Hotel+Corallo+Sorrento,+Via+Nuovo+Rione+Cappuccini+12,+Sant%27Agnello" target="_blank" rel="noopener" class="med-link">
                  &#128205; Open in Google Maps &#8599;
                </a>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="confirm-row mb-1">
                <span class="detail-label">GPS:</span>
                <span>40.6352413&deg; N, 14.391022&deg; E</span>
              </div>

              <v-alert type="success" variant="tonal" density="compact" class="mt-4">
                &#128652; The hotel also operates a <strong>shuttle to the centre of Sorrento</strong> &mdash; ask at reception for the schedule.
              </v-alert>

            </v-card-text>
          </v-card>

          <!-- Contact -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#128222;</span>
              Hotel Contact
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="hotel-contact">
                <div><span class="detail-label">&#128205; Address:</span> Via Nuovo Rione Cappuccini, 12 &mdash; Sant&rsquo;Agnello (NA), Italy</div>
                <div><span class="detail-label">&#128222; Phone:</span> <a href="tel:+390818073355" class="med-link">+39 081 8073355</a></div>
                <div><span class="detail-label">&#128223; Fax:</span> +39 081 8074407</div>
                <div><span class="detail-label">&#128140; Email:</span> <a href="mailto:info@hotelcorallosorrento.com" class="med-link">info@hotelcorallosorrento.com</a></div>
                <div><span class="detail-label">&#127758; Website:</span> <a href="http://www.hotelcorallosorrento.com" target="_blank" rel="noopener" class="med-link">hotelcorallosorrento.com &#8599;</a></div>
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
