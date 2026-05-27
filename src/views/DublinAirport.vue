<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Timeline -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header">
              <span class="card-header-icon">&#9992;</span>
              Friday, Jul 3 &mdash; Airport Timeline
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="warning" variant="tonal" class="mb-4" style="font-size:0.9rem;">
                <strong>&#127482;&#127480; US Preclearance at DUB:</strong> You clear US Customs &amp; Border Protection <em>before boarding</em> in Dublin, landing in DFW as a domestic passenger. Due to peak summer travel and double-security, <strong>arrive 3 hours before departure</strong>.
              </v-alert>

              <div class="checkin-row">
                <div class="checkin-block">
                  <div class="checkin-label">Check-out</div>
                  <div class="checkin-time">9:00 AM</div>
                  <div class="checkin-date">Depart Westbury</div>
                </div>
                <div class="checkin-divider">&#128661;</div>
                <div class="checkin-block">
                  <div class="checkin-label">Arrive DUB</div>
                  <div class="checkin-time">9:30 AM</div>
                  <div class="checkin-date">Terminal 2</div>
                </div>
                <div class="checkin-divider">&#9992;</div>
                <div class="checkin-block text-right">
                  <div class="checkin-label">Departs</div>
                  <div class="checkin-time">12:40 PM</div>
                  <div class="checkin-date">IB 4245</div>
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Transit Options -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header">
              <span class="card-header-icon">&#128661;</span>
              Transit Options &mdash; Westbury to Dublin Airport
            </v-card-title>
            <v-card-text class="pa-4">

              <p style="font-size:0.9rem;line-height:1.65;margin-bottom:16px;opacity:0.8;">
                The airport is approximately 12 km (7.5 miles) north of the hotel. At 9:00 AM on a Friday, expect standard morning commuter traffic.
              </p>

              <div class="benefits-heading mb-2">&#128661; Option 1 &mdash; Private Taxi / Chauffeur <span style="font-weight:400;font-size:0.82rem;opacity:0.75;">(Highly Recommended)</span></div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:110px;">Travel Time:</span>
                <span style="font-size:0.9rem;">25–35 minutes</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:110px;">Cost:</span>
                <span style="font-size:0.9rem;">~€30–€45</span>
              </div>
              <div class="confirm-row mb-4">
                <span class="detail-label" style="min-width:110px;">Logistics:</span>
                <span style="font-size:0.9rem;">Most seamless option for luggage. Ask the <strong>Westbury front desk</strong> or doorman to pre-arrange a taxi or private executive car for a <strong>9:00 AM pickup</strong> the evening before you depart.</span>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#128652; Option 2 &mdash; Dublin Express Bus (Route 782)</div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:110px;">Travel Time:</span>
                <span style="font-size:0.9rem;">~35 minutes</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label" style="min-width:110px;">Cost:</span>
                <span style="font-size:0.9rem;">~€8–€10 per person</span>
              </div>
              <div class="confirm-row">
                <span class="detail-label" style="min-width:110px;">Logistics:</span>
                <span style="font-size:0.9rem;">Walk 5 minutes east to <strong>Aston Quay (Stop 325)</strong> in Temple Bar. Bus takes the Dublin Port Tunnel directly to Terminal 2. Runs every 15 minutes.</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- Terminal 2 Logistics -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header">
              <span class="card-header-icon">&#127977;</span>
              Terminal 2 &mdash; Step-by-Step
            </v-card-title>
            <v-card-text class="pa-4">

              <ol style="font-size:0.92rem;line-height:2;padding-left:18px;">
                <li>
                  <strong>Check-In &amp; Bags:</strong> Head to the <strong>American Airlines desks</strong> in Terminal 2 to check your bags and collect your physical boarding passes.
                </li>
                <li>
                  <strong>Main Security:</strong> Clear standard Dublin Airport security screening.
                </li>
                <li>
                  <strong>US Preclearance (Gates 400+):</strong> Follow signs for <strong>"US Preclearance."</strong> You'll go through a secondary TSA-style security screening followed by the USCBP immigration desks — scan your passport here.
                </li>
                <li>
                  <strong>US Departure Lounge:</strong> Once through Preclearance you enter the US departure gates. Duty-free shops, coffee, and lounges are available while you wait for boarding.
                </li>
              </ol>

              <v-alert type="info" variant="tonal" class="mt-4" style="font-size:0.88rem;">
                <strong>&#128161; Tip:</strong> After clearing Preclearance you will land in DFW as a <strong>domestic arrival</strong> — no customs hall on the US side, just collect bags and connect.
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
