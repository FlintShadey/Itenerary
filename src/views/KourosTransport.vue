<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Transfer Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#128652;</span>
              Getting to Kouros Hotel &mdash; Ferry Port &rarr; Tagoo &nbsp;&middot;&nbsp; Fri, Jun 05, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="success" variant="tonal" density="compact" class="mb-4">
                &#10003; <strong>Transfer Confirmed</strong> &mdash; Your driver will be waiting outside the ferry terminal holding a <strong>Kouros sign</strong>.
              </v-alert>

              <div class="confirm-row mb-1">
                <span class="detail-label">Cost:</span>
                <span><strong>&euro;28 total</strong> &mdash; &euro;14 per person, each way</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Payment:</span>
                <span>Payable upon check-out</span>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-3">&#128222; Hotel Contact</div>

              <div class="hotel-contact">
                <div><span class="detail-label">&#128205; Address:</span> Tagoo, 84600 Mykonos, Greece</div>
                <div><span class="detail-label">&#128222; Phone:</span> <a href="tel:+302289025381" class="med-link">+30 22890 25381</a></div>
                <div><span class="detail-label">&#128241; Mobile:</span> <a href="tel:+306944657530" class="med-link">+30 6944 657530</a></div>
                <div><span class="detail-label">&#128140; Email:</span> <a href="mailto:concierge@kouros-hotel.com" class="med-link">concierge@kouros-hotel.com</a></div>
                <div><span class="detail-label">&#127758; Website:</span> <a href="https://www.kouroshotelmykonos.gr" target="_blank" rel="noopener" class="med-link">www.kouros-hotel.com &#8599;</a></div>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#128100; Lifestyle Manager</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Contact:</span>
                <span>Paola Mancelli</span>
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
