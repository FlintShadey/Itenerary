<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Getting There -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#006064 0%,#00838F 55%,#00ACC1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128652;</span>
              Getting to Amalfi &mdash; 8:30 AM Depart Minori
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-2">
                <span class="detail-label">Option A:</span>
                <span><strong>Path of the Lemons</strong> &mdash; scenic walk from Minori toward Maiori / Amalfi</span>
              </div>
              <div class="confirm-row mb-4">
                <span class="detail-label">Option B:</span>
                <span>Ferry or taxi from Minori to Amalfi</span>
              </div>

              <a href="https://www.google.com/maps/dir/Minori,+SA,+Italy/Amalfi,+SA,+Italy" target="_blank" rel="noopener" class="med-link">&#128506; Minori &rarr; Amalfi on Google Maps &#8599;</a>

            </v-card-text>
          </v-card>

          <!-- Day Schedule -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#006064 0%,#00838F 55%,#00ACC1 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128336;</span>
              Day Schedule &mdash; Fri, Jun 26, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E0F7FA;">
                  <span class="sail-day-date" style="color:#006064;">10:30 AM</span>
                  <span class="sail-day-island" style="color:#006064;">&#128205; Arrive Amalfi</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact"><a href="https://www.google.com/maps/search/Amalfi+waterfront" target="_blank" rel="noopener" class="med-link">&#128506; Amalfi on Google Maps</a></div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E0F7FA;">
                  <span class="sail-day-date" style="color:#006064;">10:45 AM</span>
                  <span class="sail-day-island" style="color:#006064;">&#9964; Cathedral of St. Andrew &amp; Paradise Cloister</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Duomo di Amalfi &mdash; stunning 9th-century cathedral with the famous Arab-Norman cloister.</div>
                  <div class="sail-fact"><a href="https://www.google.com/maps/search/Cathedral+of+Saint+Andrew+Amalfi" target="_blank" rel="noopener" class="med-link">&#128506; Cathedral on Google Maps</a></div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E0F7FA;">
                  <span class="sail-day-date" style="color:#006064;">11:45 AM</span>
                  <span class="sail-day-island" style="color:#006064;">&#9749; Pasticceria Pansa</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Historic pastry shop on Piazza del Duomo since 1830 &mdash; sfogliatelle, limoncello, and almond pastries.</div>
                  <div class="sail-fact"><a href="https://www.google.com/maps/search/Pasticceria+Pansa+Amalfi" target="_blank" rel="noopener" class="med-link">&#128506; Pasticceria Pansa on Google Maps</a></div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E0F7FA;">
                  <span class="sail-day-date" style="color:#006064;">12:30 PM</span>
                  <span class="sail-day-island" style="color:#006064;">&#127869; Lunch &mdash; Amalfi</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Choose a restaurant in the old town or near the waterfront.</div>
                  <div class="sail-fact"><a href="https://www.google.com/maps/search/restaurants+Amalfi+Italy" target="_blank" rel="noopener" class="med-link">&#128506; Restaurants in Amalfi</a></div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E0F7FA;">
                  <span class="sail-day-date" style="color:#006064;">1:45 PM</span>
                  <span class="sail-day-island" style="color:#006064;">&#127787; Antichi Sapori d&rsquo;Amalfi</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Local specialty shop &mdash; limoncello, ceramics, and Amalfi Coast products.</div>
                  <div class="sail-fact"><a href="https://www.google.com/maps/search/Antichi+Sapori+d'Amalfi" target="_blank" rel="noopener" class="med-link">&#128506; Antichi Sapori on Google Maps</a></div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#FFF8E1;">
                  <span class="sail-day-date" style="color:#F57F17;">2:30 PM</span>
                  <span class="sail-day-island" style="color:#F57F17;">&#128220; Paper Museum <span style="font-size:0.78rem;font-weight:400;">(optional)</span></span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Museo della Carta &mdash; Amalfi was once one of Europe&rsquo;s great papermaking centers.</div>
                  <div class="sail-fact"><a href="https://www.google.com/maps/search/Museo+della+Carta+Amalfi" target="_blank" rel="noopener" class="med-link">&#128506; Museo della Carta on Google Maps</a></div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E0F7FA;">
                  <span class="sail-day-date" style="color:#006064;">3:45 PM</span>
                  <span class="sail-day-island" style="color:#006064;">&#128694; Walk to Atrani</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">A 10-minute walk east along the beach &mdash; one of Italy&rsquo;s smallest and most charming towns, tucked into a cliff.</div>
                  <div class="sail-fact"><a href="https://www.google.com/maps/dir/Amalfi+SA+Italy/Atrani+SA+Italy" target="_blank" rel="noopener" class="med-link">&#128506; Amalfi &rarr; Atrani walk</a></div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E0F7FA;">
                  <span class="sail-day-date" style="color:#006064;">4:30 PM</span>
                  <span class="sail-day-island" style="color:#006064;">&#127867; Aperitivo &amp; Wander &mdash; Atrani</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Sit in the tiny piazza, have a spritz or limoncello, soak it in.</div>
                </div>
              </div>

              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E8F5E9;">
                  <span class="sail-day-date" style="color:#2E7D32;">5:30&ndash;6:30 PM</span>
                  <span class="sail-day-island" style="color:#2E7D32;">&#9973; Return to Minori</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Ferry, taxi, or bus back from Amalfi/Atrani to Minori.</div>
                  <div class="sail-fact"><a href="https://www.google.com/maps/dir/Atrani+SA+Italy/Minori+SA+Italy" target="_blank" rel="noopener" class="med-link">&#128506; Atrani &rarr; Minori on Google Maps</a></div>
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
