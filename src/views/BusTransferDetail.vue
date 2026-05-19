<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <!-- Back button -->
          <v-btn
            variant="text"
            color="white"
            class="mb-4 pl-0"
            @click="$router.back()"
          >
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Detail Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#128652;</span>
              Bus Transfer &mdash; Naples Airport &rarr; Sant&rsquo;Agnello &nbsp;&middot;&nbsp; Sat, Jun 20, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <!-- Trip Overview -->
              <div class="benefits-heading mb-3">&#128203; Trip Overview</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Operator:</span>
                <span>Curreri Viaggi &mdash; direct shuttle to the Sorrento Peninsula</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Departure:</span>
                <span>4:30 PM (16:30)</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Arrival:</span>
                <span>~5:55 PM (17:55)</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Duration:</span>
                <span>~1 hr 25 min <span class="benefit-note">(subject to summer traffic on the SS145 coastal road)</span></span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Cost:</span>
                <span>&euro;10 per person</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Reservation Code:</span>
                <span class="confirm-code ferry-code">196440-MW7OAQ-I</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Seats:</span>
                <span style="font-weight:600;">2</span>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Boarding locations -->
              <div class="benefits-heading mb-3">&#128205; Boarding &amp; Drop-Off</div>

              <div class="hotel-contact mb-4">
                <div style="font-weight:700;margin-bottom:6px;">&#9992; Departure &mdash; Naples Airport (NAP)</div>
                <div><span class="detail-label">Location:</span> <em>Parcheggio Bus Turistici</em> (Tourist Bus Parking)</div>
                <div style="margin-top:6px;font-size:0.88rem;color:#444;line-height:1.6;">
                  Exit arrivals at Terminal 1, walk straight out and slightly to the far right. Follow signs for coach &amp; tourist buses. The bus pulls into the bay ~10 minutes before the 4:30 PM departure. Look for the blue-and-white <strong>Curreri Viaggi</strong> coach.
                </div>
                <div class="mt-2">
                  <a href="https://www.google.com/maps/search/?api=1&query=40.875493,14.283609" target="_blank" rel="noopener" class="med-link">&#128506; View on Google Maps (40.875493, 14.283609)</a>
                </div>
              </div>

              <div class="hotel-contact mb-4">
                <div style="font-weight:700;margin-bottom:6px;">&#127974; Arrival &mdash; Sant&rsquo;Agnello (SAG)</div>
                <div><span class="detail-label">Location:</span> <em>Piazza Matteotti</em> (or the Corso Italia roadside stop)</div>
                <div style="margin-top:6px;font-size:0.88rem;color:#444;line-height:1.6;">
                  The bus drops you directly on the main thoroughfare in Sant&rsquo;Agnello before continuing down to its final stop at the Sorrento Train Station.
                </div>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Passengers -->
              <div class="benefits-heading mb-2">&#128100; Passengers</div>
              <div class="passenger-table mb-4">
                <div class="passenger-row">
                  <span class="pax-name">John Flint Smith</span>
                </div>
                <div class="passenger-row">
                  <span class="pax-name">Jessica Miller</span>
                </div>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Luggage & Tips -->
              <div class="benefits-heading mb-3">&#128188; Luggage &amp; Practical Tips</div>
              <ul class="benefits-list mb-2">
                <li><strong>Luggage Allowance:</strong> One large bag stored in the hold + one small carry-on per person.</li>
                <li>
                  <strong>Tickets:</strong> Pre-booked online at
                  <a href="https://www.curreriviaggi.it" target="_blank" rel="noopener" class="med-link">curreriviaggi.it</a>
                  (recommended for a mid-June weekend afternoon &mdash; slots fill fast). Also available at the airport booth or from the driver if seats remain.
                </li>
                <li><strong>Motion Sickness:</strong> The coastal SS145 has tight curves &mdash; sit near the front of the coach if needed.</li>
              </ul>

              <v-alert type="info" variant="tonal" density="compact" class="mt-3">
                <strong>&#128337; Alternate NAP departures:</strong> 3:00 PM &nbsp;&middot;&nbsp; 4:30 PM &nbsp;&middot;&nbsp; 6:00 PM &mdash; useful if your flight lands early or is delayed.
              </v-alert>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
