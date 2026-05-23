<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Day-of Timeline Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#B71C1C 0%,#C62828 55%,#E53935 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#9992;</span>
              Departure Day Timeline &mdash; Sat, Jun 20, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="warning" variant="tonal" density="compact" class="mb-4">
                &#128246; <strong>Night before:</strong> check in on the Ryanair app and make sure your digital boarding pass loads offline.
              </v-alert>

              <!-- Timeline -->
              <div style="border-left:3px solid #E53935;padding-left:16px;">

                <div class="mb-4">
                  <div style="font-weight:700;font-size:1rem;color:#B71C1C;">9:35 AM</div>
                  <div style="font-size:0.92rem;margin-top:2px;">Off the boat, packed, and ready at <strong>Istion Yachting, Rhodes New Marina</strong>.</div>
                </div>

                <div class="mb-4">
                  <div style="font-weight:700;font-size:1rem;color:#B71C1C;">9:50 AM</div>
                  <div style="font-size:0.92rem;margin-top:2px;">&#128662; <strong>Leave Istion Yachting by taxi.</strong> Do not take the bus — from the new marina, bus takes ~55 min with a transfer; taxi is the direct option.</div>
                </div>

                <div class="mb-4">
                  <div style="font-weight:700;font-size:1rem;color:#B71C1C;">~10:10 AM</div>
                  <div style="font-size:0.92rem;margin-top:2px;">&#128507; Arrive at <strong>Rhodes Airport (RHO)</strong>. Drive is ~17 min / 14.8 km from the new marina.</div>
                </div>

                <div class="mb-4">
                  <div style="font-weight:700;font-size:1rem;color:#B71C1C;">12:05 PM</div>
                  <div style="font-size:0.92rem;margin-top:2px;color:#C62828;font-weight:600;">&#128274; Bag drop deadline &mdash; latest time to check bags.</div>
                </div>

                <div class="mb-4">
                  <div style="font-weight:700;font-size:1rem;color:#B71C1C;">12:15 PM</div>
                  <div style="font-size:0.92rem;margin-top:2px;">&#9992; <strong>Be at the gate.</strong></div>
                </div>

                <div class="mb-0">
                  <div style="font-weight:700;font-size:1rem;color:#B71C1C;">12:45 PM</div>
                  <div style="font-size:0.92rem;margin-top:2px;font-weight:600;">&#128747; <strong>FR3483 departs Rhodes (RHO) &rarr; Naples (NAP)</strong></div>
                </div>

              </div>

            </v-card-text>
          </v-card>

          <!-- Quick Reference Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#37474F 0%,#455A64 55%,#546E7A 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128205;</span>
              Quick Reference &amp; Links
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Departure:</span>
                <span>Istion Yachting, Rhodes New Marina</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Taxi ride:</span>
                <span>~17 min &nbsp;&middot;&nbsp; 14.8 km &nbsp;&middot;&nbsp; <strong>no bus</strong></span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Airport:</span>
                <span>Rhodes International (RHO)</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Flight:</span>
                <span>FR3483 &nbsp;&middot;&nbsp; departs 12:45 PM &nbsp;&middot;&nbsp; arrives Naples 14:05</span>
              </div>

              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <a href="https://www.rome2rio.com/s/MV83-new-marina-Rhodes-Town/Rhodes-Airport-RHO" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="blue-grey-darken-1" variant="tonal" size="small">Marina &rarr; RHO Route &#8599;</v-btn>
                </a>
                <a href="https://help.ryanair.com/hc/en-ie/articles/12890590563857-When-does-the-check-in-desk-open-and-close-for-my-flight" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="blue-grey-darken-1" variant="tonal" size="small">Ryanair Desk Times &#8599;</v-btn>
                </a>
                <a href="https://www.istion.com/company/about/offices" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="blue-grey-darken-1" variant="tonal" size="small">Istion Rhodes Base &#8599;</v-btn>
                </a>
                <a href="https://www.google.com/maps/search/Istion+Yachting+Rhodes+New+Marina" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="blue-grey-darken-1" variant="tonal" size="small">&#128205; Marina on Map &#8599;</v-btn>
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
