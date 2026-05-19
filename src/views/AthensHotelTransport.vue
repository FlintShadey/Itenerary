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

          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-hotel">
              <span class="card-header-icon">&#127968;</span>
              Getting to MiraMe Athens &mdash; ATH Airport &rarr; Hotel
            </v-card-title>
            <v-card-text class="pa-4">

              <p style="font-size:0.9rem;color:#444;line-height:1.6;margin-bottom:16px;">
                The MiraMe Athens Boutique Hotel sits on Ermou Street in the historic centre &mdash; just a <strong>2&ndash;4 minute walk (~200&ndash;300 m)</strong> from Monastiraki. Here are the best ways to get there from Athens International Airport (ATH), ranked by convenience.
              </p>

              <v-divider class="my-3"></v-divider>

              <!-- Option 1: Metro -->
              <div class="benefits-heading mb-3">
                <span style="background:#1565C0;color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;font-size:0.8rem;font-weight:700;margin-right:8px;">1</span>
                Metro &mdash; Most Efficient &amp; Highly Recommended
              </div>
              <v-alert type="success" variant="tonal" density="compact" class="mb-3">
                &#9989; Bypasses Athens&rsquo; city traffic entirely. Drops you steps from the hotel.
              </v-alert>
              <div class="confirm-row mb-1">
                <span class="detail-label">Line:</span>
                <span><strong>Blue Line 3</strong> from airport &rarr; toward <strong>Dimotiko Theatro</strong></span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Exit:</span>
                <span><strong>Monastiraki Station</strong> &mdash; then 3-min flat walk down Ermou St to MiraMe</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Travel Time:</span>
                <span>40&ndash;45 minutes</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Frequency:</span>
                <span>Every 30 min &nbsp;&middot;&nbsp; 6:30 AM &ndash; 11:30 PM</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Cost:</span>
                <span>&euro;10 single &nbsp;&middot;&nbsp; <strong>&euro;18 for 2 people</strong> (group ticket)</span>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Option 2: Taxi / Transfer -->
              <div class="benefits-heading mb-3">
                <span style="background:#E65100;color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;font-size:0.8rem;font-weight:700;margin-right:8px;">2</span>
                Private Transfer or Taxi &mdash; Most Comfortable
              </div>
              <p style="font-size:0.87rem;color:#555;margin-bottom:12px;line-height:1.5;">Ideal after a long flight or with heavy luggage &mdash; door-to-door with no station navigation.</p>

              <div class="benefits-heading mb-2" style="font-size:0.82rem;">&#128661; Standard Taxi (Official Yellow)</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Pickup:</span>
                <span>Official airport taxi queue at arrivals</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Flat Rate:</span>
                <span><strong>&euro;40</strong> daytime (6:00 AM&ndash;midnight) &nbsp;&middot;&nbsp; <strong>&euro;55</strong> night (midnight&ndash;6:00 AM)</span>
              </div>

              <div class="benefits-heading mb-2" style="font-size:0.82rem;">&#128663; Pre-Booked Private Transfer (e.g. Welcome Pickups)</div>
              <ul class="benefits-list mb-3">
                <li>Driver meets you in arrivals and tracks your flight</li>
                <li>Helps with luggage, English-speaking, premium vehicle</li>
                <li>Cost is usually similar to or slightly above a standard taxi</li>
              </ul>
              <div class="confirm-row mb-3">
                <span class="detail-label">Travel Time:</span>
                <span>35&ndash;50 min <span class="benefit-note">(highly traffic-dependent entering the historic centre)</span></span>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Option 3: Express Bus -->
              <div class="benefits-heading mb-3">
                <span style="background:#555;color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;font-size:0.8rem;font-weight:700;margin-right:8px;">3</span>
                Express Bus X95 &mdash; Budget Option
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Route:</span>
                <span>Airport &rarr; <strong>Syntagma Square</strong> (final stop), runs 24/7</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">From Syntagma:</span>
                <span>12-min walk down Ermou St to hotel <em>or</em> Metro Line 3 one stop to Monastiraki</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Travel Time:</span>
                <span>60&ndash;75 min on bus + walk</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Cost:</span>
                <span>&euro;6 per person</span>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Summary -->
              <v-alert type="info" variant="tonal" density="comfortable" class="mb-2">
                <div style="font-weight:700;margin-bottom:4px;">&#128161; Recommendation</div>
                <div style="font-size:0.88rem;line-height:1.6;">
                  <strong>Daytime arrival?</strong> Take the Metro (Line 3) &mdash; 40 min, seamless, no traffic, drops you steps from the hotel.<br>
                  <strong>Prefer door-to-door?</strong> Pre-book a private transfer for the smoothest arrival after a long flight.
                </div>
              </v-alert>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
