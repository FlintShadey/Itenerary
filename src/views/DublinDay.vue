<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Day Timeline -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128197;</span>
              Thursday, Jul 2 &mdash; Day Timeline
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="checkin-row">
                <div class="checkin-block">
                  <div class="checkin-label">Arrive</div>
                  <div class="checkin-time">10:30 AM</div>
                  <div class="checkin-date">Guinness Storehouse</div>
                </div>
                <div class="checkin-divider">&#127866;</div>
                <div class="checkin-block">
                  <div class="checkin-label">Lunch</div>
                  <div class="checkin-time">2:00 PM</div>
                  <div class="checkin-date">WILDE at Westbury</div>
                </div>
                <div class="checkin-divider">&#127869;</div>
                <div class="checkin-block text-right">
                  <div class="checkin-label">Pubs</div>
                  <div class="checkin-time">6:00 PM</div>
                  <div class="checkin-date">Neary's / Kehoe's</div>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <!-- 10:30 AM Guinness Storehouse -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127866;</span>
              10:30 AM &ndash; 1:30 PM &mdash; Guinness Storehouse &amp; Connoisseur Experience
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="error" variant="tonal" density="compact" class="mb-4">
                <strong>&#9203; Arrive by 10:30 AM</strong> &mdash; 90 minutes before your 12:00 PM tasting. Check-in closes at <strong>11:45 AM</strong> sharp &mdash; latecomers will not be admitted.
              </v-alert>

              <div class="confirm-row mb-1">
                <span class="detail-label">Booking Ref:</span>
                <span class="confirm-code ferry-code">904179580</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Guests:</span>
                <span>2 Adults</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Tasting Slot:</span>
                <span style="font-weight:700;">12:00 PM &mdash; Connoisseur Experience</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#128205; Address:</span>
                <a href="https://maps.google.com/?q=Guinness+Storehouse+St+James+Gate+Dublin+8" target="_blank" rel="noopener" class="med-link">Guinness Storehouse, St. James&rsquo;s Gate, Dublin 8 &#8599;</a>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#128222; Contact:</span>
                <span><a href="mailto:Info@guinnessstorehouse.com" class="med-link">Info@guinnessstorehouse.com</a> &nbsp;&middot;&nbsp; <a href="tel:+35314084800" class="med-link">+353 1 408 4800</a> (Mon&ndash;Sun, 9 AM&ndash;5 PM)</span>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#9989; Critical Check-In Checklist</div>
              <ul class="benefits-list mb-3">
                <li><strong>Check in</strong> at the main Information Desk upon arrival &mdash; do not skip this step.</li>
                <li><strong>Self-guided tour first:</strong> The 90-minute window before 12:00 PM is for completing the Storehouse floors.</li>
                <li><strong>Over-18s only</strong> &mdash; the Connoisseur tasting is held in a private, hidden luxury bar. English language only.</li>
                <li><strong>Download tickets</strong> in advance. If images don&rsquo;t load in email, go to Email Preferences &rarr; toggle <em>Always Display External Images</em>.</li>
                <li><strong>Amenities:</strong> Complimentary audio guides on-site (subject to availability). Fully wheelchair accessible.</li>
              </ul>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-3">&#127915; Your Tickets</div>
              <div class="benefits-heading mb-2" style="font-size:0.85rem;">Ticket 1</div>
              <v-img src="/guiness_ticket_1.png" alt="Guinness Storehouse Ticket 1" rounded="lg" class="mb-4" cover></v-img>
              <div class="benefits-heading mb-2" style="font-size:0.85rem;">Ticket 2</div>
              <v-img src="/guiness_ticket_2.png" alt="Guinness Storehouse Ticket 2" rounded="lg" class="mb-2" cover></v-img>

            </v-card-text>
          </v-card>

          <!-- 2:00 PM Lunch at WILDE -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127869;</span>
              2:00 PM &ndash; 4:00 PM &mdash; Luxury Lunch at WILDE
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-1">
                <span class="detail-label">Where:</span>
                <span><strong>WILDE Restaurant</strong> &mdash; The Westbury, Balfe St, Dublin 2</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">&#128205; Maps:</span>
                <a href="https://maps.google.com/?q=WILDE+Restaurant+The+Westbury+Balfe+St+Dublin+2" target="_blank" rel="noopener" class="med-link">Open in Google Maps &#8599;</a>
              </div>
              <p style="font-size:0.92rem;line-height:1.65;">
                Take a 10&ndash;15 minute taxi back from St. James&rsquo;s Gate. Settle in on WILDE&rsquo;s 1930s-inspired covered terrace for a relaxed afternoon lunch featuring <strong>premium Irish seafood</strong>, <strong>dry-aged steaks</strong>, and a world-class wine list.
              </p>
            </v-card-text>
          </v-card>

          <!-- 4:00 PM Decompress -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127968;</span>
              4:00 PM &ndash; 6:00 PM &mdash; Decompress &amp; Unwind
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-3">
                <span class="detail-label">Where:</span>
                <span>The Westbury, Balfe St, Dublin 2</span>
              </div>
              <p style="font-size:0.92rem;line-height:1.65;">
                Head back to your room to refresh, relax, and drop off any items or souvenirs picked up from the Storehouse before the evening walk.
              </p>
            </v-card-text>
          </v-card>

          <!-- 6:00 PM Historic Pub Walk -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127981;</span>
              6:00 PM Onward &mdash; Historic Victorian Pub Walk
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">Stop 1 &mdash; Neary&rsquo;s</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#128205; Address:</span>
                <a href="https://maps.google.com/?q=Neary%27s+Chatham+St+Dublin+2" target="_blank" rel="noopener" class="med-link">1 Chatham St, Dublin 2 &#8599;</a>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">&#8987; Walk:</span>
                <span>2-minute walk from The Westbury</span>
              </div>
              <p style="font-size:0.9rem;line-height:1.65;margin-bottom:20px;">
                A protected UNESCO-heritage Victorian pub with dark mahogany wood, gas lamps, and cozy velvet-curtained snugs. <strong>No TVs, no music</strong> &mdash; an authentic environment centered around local chat and a perfect pour.
              </p>

              <div class="benefits-heading mb-2">Stop 2 &mdash; Kehoe&rsquo;s</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#128205; Address:</span>
                <a href="https://maps.google.com/?q=Kehoes+South+Anne+St+Dublin+2" target="_blank" rel="noopener" class="med-link">9 South Anne St, Dublin 2 &#8599;</a>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">&#8987; Walk:</span>
                <span>1-minute walk from Neary&rsquo;s</span>
              </div>
              <p style="font-size:0.9rem;line-height:1.65;">
                An unmissable local staple virtually untouched since the 19th century. Walk past the old grocery-style front counter to explore a warren of dark wood partitioned snugs and narrow serving hatches. Known for serving one of the <strong>freshest pints of Guinness</strong> in the city, completely removed from Temple Bar tourist crowds.
              </p>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
