<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Start Early Warning -->
          <v-alert type="warning" variant="tonal" class="mb-5" style="font-size:0.9rem;">
            <strong>&#9888; Start early.</strong> The trail is exposed &amp; rocky &mdash; much less pleasant if started late in the day.<br>
            <em>Due biglietti Orario AC 2 per Bomerano, per favore.</em>
          </v-alert>

          <!-- Day Timeline -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128336;</span>
              Day Timeline
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="hotel-contact">
                <div><span class="detail-label">7:00 AM</span> &mdash; Depart Airbnb, Minori</div>
                <div><span class="detail-label">8:30–9:00 AM</span> &mdash; Start hiking from Bomerano</div>
                <div><span class="detail-label">12:00–1:00 PM</span> &mdash; Arrive Nocelle</div>
                <div><span class="detail-label">Afternoon</span> &mdash; Bus or walk down to Positano &bull; Lunch in Positano</div>
                <div><span class="detail-label">Evening</span> &mdash; Ferry, driver, or bus back to Minori <span class="benefit-note">(TBD on the day)</span></div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Bus Route -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128652;</span>
              Bus Route &mdash; Minori &rarr; Bomerano
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-3">
                <span class="detail-label">&#128205; Start:</span>
                <span>Via S. Pietro, 47, Minori</span>
              </div>

              <!-- Leg 1 -->
              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E8EAF6;">
                  <span class="sail-day-date" style="color:#283593;">7:26 AM</span>
                  <span class="sail-day-island" style="color:#283593;">&#128694; Walk to bus stop</span>
                  <span class="sail-nm" style="color:#555;">4 min &bull; 260 m</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Stop: <strong>Hotel 7 Bello</strong> (Minori)</div>
                </div>
              </div>

              <img :src="'/walk from airbnb to bus stop board 5120.png'" alt="Walk from Airbnb to bus stop" style="width:100%;max-width:380px;border-radius:10px;border:1px solid #ddd;display:block;margin:10px 0;" />

              <!-- Leg 2 -->
              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E8EAF6;">
                  <span class="sail-day-date" style="color:#283593;">7:30 AM</span>
                  <span class="sail-day-island" style="color:#283593;">&#128652; Bus 5120</span>
                  <span class="sail-nm" style="color:#555;">15 min &bull; 14 stops</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Route: Maiori – Minori – Amalfi</div>
                  <div class="sail-fact">Arrival: <strong>Amalfi at 7:45 AM</strong></div>
                  <div class="sail-fact" style="color:#888;font-size:0.8rem;">Alt. departures: 7:50 AM or 8:10 AM</div>
                </div>
              </div>

              <!-- Leg 3 -->
              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#FFF8E1;">
                  <span class="sail-day-date" style="color:#F57F17;">7:45 AM</span>
                  <span class="sail-day-island" style="color:#F57F17;">&#8635; Transfer in Amalfi</span>
                  <span class="sail-nm" style="color:#555;">~20 min wait</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Board Bus 5080 at Amalfi.</div>
                </div>
              </div>

              <img :src="'/transfer to 5080 in amalfi .png'" alt="Transfer to Bus 5080 in Amalfi" style="width:100%;max-width:380px;border-radius:10px;border:1px solid #ddd;display:block;margin:10px 0;" />

              <!-- Leg 4 -->
              <div class="sail-day" style="margin-bottom:0;">
                <div class="sail-day-header" style="background:#E8EAF6;">
                  <span class="sail-day-date" style="color:#283593;">8:05 AM</span>
                  <span class="sail-day-island" style="color:#283593;">&#128652; Bus 5080</span>
                  <span class="sail-nm" style="color:#555;">41 min &bull; 29 stops</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Route: Amalfi – Conca – Bomerano – San Lazzaro</div>
                  <div class="sail-fact">Get off: <strong>Via Villani (Pianillo)</strong> at 8:46 AM</div>
                  <div class="sail-fact" style="color:#888;font-size:0.8rem;">Alt. departures: 8:45 AM or 10:15 AM</div>
                </div>
              </div>

              <!-- Leg 5 -->
              <div class="sail-day mb-4" style="margin-bottom:16px!important;">
                <div class="sail-day-header" style="background:#E8F5E9;">
                  <span class="sail-day-date" style="color:#2E7D32;">8:46 AM</span>
                  <span class="sail-day-island" style="color:#2E7D32;">&#128694; Walk to Bomerano trailhead</span>
                  <span class="sail-nm" style="color:#555;">3 min &bull; 170 m</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">&#128205; <strong>Piazza Paolo Capasso, 12 &mdash; 80051 Agerola NA, Italy</strong></div>
                  <div class="sail-fact">Arrival: 8:49 AM</div>
                </div>
              </div>

              <v-alert type="info" variant="tonal" density="compact">
                &#128241; Use the <strong>Unico Campania app</strong> for bus tickets &amp; schedules.
              </v-alert>

            </v-card-text>
          </v-card>

          <!-- What to Bring -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127920;</span>
              What to Bring
            </v-card-title>
            <v-card-text class="pa-4">
              <ul class="benefits-list">
                <li>&#128095; Real hiking / trail shoes (not sandals)</li>
                <li>&#128167; 1.5–2 liters of water per person</li>
                <li>&#127913; Hat &amp; sunscreen &mdash; trail is exposed</li>
                <li>&#127822; Light snack</li>
              </ul>
            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
