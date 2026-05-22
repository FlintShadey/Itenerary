<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Main Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#128652;</span>
              Getting to 10GR Hotel &mdash; Rhodes Port &rarr; Old Town &nbsp;&middot;&nbsp; Thu, Jun 11, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="success" variant="tonal" density="compact" class="mb-4">
                &#10003; <strong>Free hotel transfer available on request</strong> &mdash; contact 10GR directly to arrange pickup from the port.
              </v-alert>

              <!-- Best Option -->
              <div class="benefits-heading mb-2">&#11088; Best Option &mdash; Hotel Pickup</div>
              <p class="mb-3" style="font-size:0.93rem;line-height:1.6;">
                10GR Boutique Hotel offers <strong>free guest &amp; luggage transfer from the port on request</strong>. Simply contact them ahead of time with your arrival details.
              </p>

              <div class="confirm-row mb-1">
                <span class="detail-label">&#128205; Address:</span>
                <span>Polidorou 16, Rhodes Old Town</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#128222; Phone:</span>
                <a href="tel:+302241020910" class="med-link" style="font-weight:600;">+30 22410 20910</a>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">&#128140; Email:</span>
                <a href="mailto:info@10grhotel.com" class="med-link" style="font-weight:600;">info@10grhotel.com</a>
              </div>

              <div class="mt-2 mb-4" style="display:flex;gap:8px;flex-wrap:wrap;">
                <a href="https://10grhotel.com/services/" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="brown-darken-2" variant="tonal" size="small">Hotel Services &#8599;</v-btn>
                </a>
                <a href="https://10grhotel.com/contact/" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="brown-darken-2" variant="tonal" size="small">Hotel Contact &#8599;</v-btn>
                </a>
              </div>

              <v-divider class="my-3"></v-divider>

              <!-- Port Info -->
              <div class="benefits-heading mb-2">&#9973; Port to Hotel &mdash; Distance Guide</div>

              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:130px;">From Mandraki:</span>
                <span style="font-size:0.9rem;"><strong>~450 m</strong> &mdash; short walk, right by Old Town walls. Most convenient arrival point.</span>
              </div>
              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:130px;">From Akandia:</span>
                <span style="font-size:0.9rem;">Commercial/larger ferry harbor &mdash; <strong>15–20 min on foot</strong> or <strong>5–10 min by taxi</strong>.</span>
              </div>

              <v-alert type="info" variant="tonal" density="compact" class="mb-3">
                &#128674; Your ferry (Diagoras, ANEK Lines) arriving at <strong>4:20 PM Jun 11</strong> will likely dock at <strong>Akandia harbor</strong> &mdash; the commercial port. Confirm with the hotel when you contact them so they can send the car to the right terminal.
              </v-alert>

              <div class="mt-2" style="display:flex;gap:8px;flex-wrap:wrap;">
                <a href="https://www.rhodesferry.com/rhodes-port" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="blue-grey-darken-1" variant="tonal" size="small">Rhodes Port Overview &#8599;</v-btn>
                </a>
                <a href="https://www.nomadotravel.app/en/attractions/rhodes-port" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="blue-grey-darken-1" variant="tonal" size="small">Akandia Harbor Guide &#8599;</v-btn>
                </a>
                <a href="https://www.google.com/maps/search/10GR+Boutique+Hotel+Rhodes" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="blue-grey-darken-1" variant="tonal" size="small">&#128205; Hotel on Map &#8599;</v-btn>
                </a>
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
