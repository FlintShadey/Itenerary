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

          <!-- Header Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#0D47A1 0%,#1565C0 55%,#1976D2 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#9992;</span>
              EWR Layover Guide &mdash; Mon, Jun 01, 2026
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-1">
                <span class="detail-label">Airport:</span>
                <span>Newark Liberty International (EWR) &mdash; Terminal C</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Arrives:</span>
                <span>11:50 AM (UA1449 from AUS)</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Departs:</span>
                <span>3:55 PM (UA124 to ATH)</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Total Time:</span>
                <span style="font-weight:700;">4 hours, 5 minutes</span>
              </div>
            </v-card-text>
          </v-card>

          <!-- Step 1 -->
          <v-card hover elevation="4" class="mb-4 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#388E3C 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#9989;</span>
              11:50 AM &ndash; 12:15 PM &nbsp;&middot;&nbsp; Arrival &amp; Orientation
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">What to do:</span>
                <span>Deplane into <strong>Terminal C</strong>. Immediately check the nearest departures screen to confirm the exact departure gate for <strong>UA124 to Athens</strong>.</span>
              </div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">The Route:</span>
                <span>If your arrival gate is in <strong>Terminal A</strong> — do <em>not</em> leave security. Follow signs for the <strong>United Inter-Terminal Shuttle Bus</strong> near Gate A28; it drops you inside Terminal C near Gate C71. If you land in Terminal C, you're already set.</span>
              </div>
            </v-card-text>
          </v-card>

          <!-- Step 2 -->
          <v-card hover elevation="4" class="mb-4 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#004D40 0%,#00695C 55%,#00897B 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128703;</span>
              12:15 PM &ndash; 1:00 PM &nbsp;&middot;&nbsp; The Refresh
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">What to do:</span>
                <span>Walk to the flagship <strong>United Club near Gate C123</strong> (upper mezzanine level). Scan your pass at the automated entry gates.</span>
              </div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">First Priority:</span>
                <span>Head straight to the <strong>shower desk</strong> and put your name down for a private shower suite. Rinsing off after the Austin flight is the perfect reset before the Atlantic crossing.</span>
              </div>
            </v-card-text>
          </v-card>

          <!-- Step 3 -->
          <v-card hover elevation="4" class="mb-4 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#7B1FA2 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127978;</span>
              1:00 PM &ndash; 2:30 PM &nbsp;&middot;&nbsp; Lounge Oasis
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">The View:</span>
                <span>Grab a seat by the <strong>floor-to-ceiling windows</strong> for tarmac views and a distant glimpse of the Manhattan skyline.</span>
              </div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">Refuel:</span>
                <span>Enjoy the club's <strong>hot buffet</strong> &mdash; skip the terminal crowds. Get a handcrafted espresso or latte from the barista station, or a premium drink from the wrap-around bar. Every seat has outlets &mdash; charge <em>everything</em> to 100% now.</span>
              </div>
            </v-card-text>
          </v-card>

          <!-- Step 4 -->
          <v-card hover elevation="4" class="mb-4 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#E65100 0%,#EF6C00 55%,#F57C00 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128694;</span>
              2:30 PM &ndash; 3:05 PM &nbsp;&middot;&nbsp; Pre-Flight Stroll
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">What to do:</span>
                <span>Leave the lounge and take a <strong>leisurely walk toward your gate</strong>. Terminal C is long but flat — end-to-end takes about 12–15 minutes.</span>
              </div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">Pro Tip:</span>
                <span>If your gate is near the <strong>C70s</strong>, pop into the <strong>second United Club near Gate C74</strong> for a final water or espresso before boarding.</span>
              </div>
            </v-card-text>
          </v-card>

          <!-- Step 5 — Boarding -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#B71C1C 0%,#C62828 55%,#D32F2F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127881;</span>
              3:05 PM &nbsp;&middot;&nbsp; Boarding Call
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">What to do:</span>
                <span>Arrive at your gate for <strong>UA124</strong>. International boarding begins <strong>45 minutes prior to departure</strong>.</span>
              </div>
              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:90px;">The Finish:</span>
                <span>Passport and boarding pass ready. Flying <strong>United Premium Plus</strong> — listen for <strong>Group 2 (Premier Access)</strong> to board early, beat the overhead bin rush, and settle in for the overnight flight to Greece.</span>
              </div>

              <v-alert type="success" variant="tonal" density="compact">
                &#9992; <strong>3:55 PM — Wheels up for Athens!</strong> Have an incredible trip!
              </v-alert>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
