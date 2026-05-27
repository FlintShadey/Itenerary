<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Action Items Alert -->
          <v-alert type="warning" variant="tonal" class="mb-5" style="font-size:0.9rem;">
            <strong>&#128203; Immediate Action Items</strong>
            <ol style="margin:8px 0 0 0;padding-left:18px;line-height:1.8;">
              <li><strong>Agriturismo da Regina</strong> &mdash; secure lunch reservation as soon as possible.</li>
              <li><strong>Transportation</strong> &mdash; no ride-sharing in the Tramonti hills. Ask Airbnb host <strong>Ugo</strong> or a local concierge to book a dedicated private driver for the <strong>10:30 AM – 4:30 PM</strong> window.</li>
            </ol>
          </v-alert>

          <!-- Day Timeline -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#8E24AA 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128197;</span>
              Thursday, Jun 25 &mdash; Day Timeline
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#F3E5F5;">
                  <span class="sail-day-date" style="color:#4A148C;">10:30 AM</span>
                  <span class="sail-day-island" style="color:#4A148C;">&#128661; The Ascent &mdash; Private Driver from Minori</span>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#F3E5F5;">
                  <span class="sail-day-date" style="color:#4A148C;">11:00 AM – 12:45 PM</span>
                  <span class="sail-day-island" style="color:#4A148C;">&#127863; Stop 1 &mdash; Tenuta San Francesco</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Ancient vine walk + morning tasting (Tramonti Bianco &amp; reds)</div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#F3E5F5;">
                  <span class="sail-day-date" style="color:#4A148C;">1:00 PM – 2:45 PM</span>
                  <span class="sail-day-island" style="color:#4A148C;">&#127869; Lunch &mdash; Agriturismo da Regina</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Farm-to-table under the lemon pergola &mdash; Campinola hamlet</div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#F3E5F5;">
                  <span class="sail-day-date" style="color:#4A148C;">3:00 PM – 4:30 PM</span>
                  <span class="sail-day-island" style="color:#4A148C;">&#127863; Stop 2 &mdash; Cantine Apicella</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Production facility tour + structured premium tasting</div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#F3E5F5;">
                  <span class="sail-day-date" style="color:#4A148C;">4:30 PM</span>
                  <span class="sail-day-island" style="color:#4A148C;">&#127968; Return to Minori Airbnb</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Drop off bottles, freshen up</div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#F3E5F5;">
                  <span class="sail-day-date" style="color:#4A148C;">6:40 PM</span>
                  <span class="sail-day-island" style="color:#4A148C;">&#127754; Coastal Stroll or Ride to Maiori</span>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#F3E5F5;">
                  <span class="sail-day-date" style="color:#4A148C;">7:00 PM</span>
                  <span class="sail-day-island" style="color:#4A148C;">&#127869; Dinner &mdash; Torre Normanna, Maiori</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Medieval fortress dining above the sea</div>
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Tenuta San Francesco -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#8E24AA 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127863;</span>
              Stop 1 &mdash; Tenuta San Francesco
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127968; The Draw</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:16px;">
                Home to spectacular, <strong>pre-phylloxera Tintore and Per 'e Palummo vines between 300 and 500 years old</strong>. The vines are massive, twisting like tree trunks overhead in traditional chestnut pergolas — a walk through living history.
              </p>

              <div class="benefits-heading mb-2">&#127942; The Experience</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:16px;">
                An incredibly visual, romantic vine walk capped off by a tasting in a beautifully restored <strong>18th-century wine cellar</strong>. Focus on their crisp <strong>Tramonti Bianco</strong> and robust reds.
              </p>

              <div style="margin-top:4px;">
                <a href="https://www.google.com/maps/search/Tenuta+San+Francesco+Tramonti" target="_blank" rel="noopener" class="med-link">&#128506; Tenuta San Francesco on Google Maps &#8599;</a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Agriturismo da Regina -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#8E24AA 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127869;</span>
              Lunch &mdash; Agriturismo da Regina
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="warning" variant="tonal" density="compact" class="mb-3">
                <strong>&#9203; Reservation pending</strong> &mdash; book as soon as possible.
              </v-alert>

              <div class="confirm-row mb-1">
                <span class="detail-label">Location:</span>
                <span>Campinola hamlet, Tramonti</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Setting:</span>
                <span>Slow, rustic farm-to-table lunch under the <strong>lemon pergola</strong></span>
              </div>

              <a href="https://www.google.com/maps/search/Agriturismo+da+Regina+Tramonti" target="_blank" rel="noopener" class="med-link">&#128506; Agriturismo da Regina on Google Maps &#8599;</a>

            </v-card-text>
          </v-card>

          <!-- Cantine Apicella -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#8E24AA 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127863;</span>
              Stop 2 &mdash; Cantine Apicella
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127919; The Draw</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:16px;">
                Founded by <strong>Giuseppe Apicella</strong> in 1977 — the visionary who put Tramonti on the global wine map. This family was the <strong>very first to commercialize and bottle Tramonti DOC wines</strong>, championing rugged local grapes when everyone else looked elsewhere.
              </p>

              <div class="benefits-heading mb-2">&#127942; The Experience</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:16px;">
                A technical contrast to Tenuta San Francesco — focusing on family heritage, modern passion, and <strong>structured, elegant reds</strong> that showcase how these volcanic mountain wines age over time. Tour the production facility and finish with a premium tasting.
              </p>

              <a href="https://www.google.com/maps/search/Cantine+Apicella+Tramonti" target="_blank" rel="noopener" class="med-link">&#128506; Cantine Apicella on Google Maps &#8599;</a>

            </v-card-text>
          </v-card>

          <!-- Dinner -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#8E24AA 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127869;</span>
              Dinner &mdash; Ristorante Torre Normanna &nbsp;&middot;&nbsp; 7:00 PM
            </v-card-title>
            <v-card-text class="pa-4">

              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:16px;">
                Conclude the day inside a <strong>medieval Norman tower jutting over the sea</strong> in Maiori &mdash; contrasting the rustic mountain valleys of the afternoon with an elegant, wave-pounded seaside dinner. One of the most spectacular settings on the Amalfi Coast.
              </p>

              <div class="confirm-row mb-2">
                <span class="detail-label">Location:</span>
                <span>Maiori, SA, Italy</span>
              </div>

              <a href="https://www.google.com/maps/search/Ristorante+Torre+Normanna+Maiori" target="_blank" rel="noopener" class="med-link">&#128506; Torre Normanna on Google Maps &#8599;</a>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
