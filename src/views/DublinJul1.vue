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
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A1A00 0%,#7B3F00 50%,#1A237E 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128197;</span>
              Wednesday, Jul 1 &mdash; Day Timeline
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="checkin-row">
                <div class="checkin-block">
                  <div class="checkin-label">Lunch</div>
                  <div class="checkin-time">12:00 PM</div>
                  <div class="checkin-date">The Old Mill</div>
                </div>
                <div class="checkin-divider">&#127869;</div>
                <div class="checkin-block">
                  <div class="checkin-label">Leave hotel</div>
                  <div class="checkin-time">6:30 PM</div>
                  <div class="checkin-date">The Palace Bar</div>
                </div>
                <div class="checkin-divider">&#127867;</div>
                <div class="checkin-block text-right">
                  <div class="checkin-label">Arrive</div>
                  <div class="checkin-time">7:50 PM</div>
                  <div class="checkin-date">The Cobblestone</div>
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Old Mill Lunch -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A1A00 0%,#6D2C00 55%,#8B3A0F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127869;</span>
              12:00 PM &mdash; Lunch at The Old Mill Restaurant
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Where:</span>
                <span><strong>The Old Mill Restaurant</strong> &mdash; Temple Bar, Dublin</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Party Size:</span>
                <span>2 people</span>
              </div>
              <div class="mb-4">
                <a href="https://www.google.com/maps/search/The+Old+Mill+Restaurant+Dublin+Temple+Bar" target="_blank" rel="noopener" class="med-link">&#128506; View on Google Maps &#8599;</a>
              </div>

              <div class="benefits-heading mb-2">&#127981; The Food</div>
              <ul class="benefits-list mb-3">
                <li>&#129385; Traditional lamb stew</li>
                <li>&#127867; Slow-cooked Guinness beef casserole</li>
                <li>&#129368; Cottage pie</li>
                <li>&#127843; Classic fish &amp; chips</li>
              </ul>

              <p style="font-size:0.9rem;line-height:1.65;">
                Traditional, lively Irish dining room with a <strong>dark-wood interior</strong> and <strong>exposed brick</strong>. Authentic Irish comfort classics in a genuine local setting.
              </p>

            </v-card-text>
          </v-card>

          <!-- Palace Bar -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4E342E 0%,#6D4C41 55%,#795548 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127867;</span>
              Stop 1 &mdash; The Palace Bar, Fleet Street
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127870; The Vibe</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:16px;">
                Established in <strong>1823</strong> &mdash; an untouched Victorian gem with original stained glass, mahogany partitions, and a legendary literary history. A favourite haunt of <strong>Flann O'Brien</strong> and <strong>Patrick Kavanagh</strong>.
              </p>

              <div class="benefits-heading mb-2">&#127942; The Drink</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:20px;">
                Skip the main bar and head to the <strong>Whiskey Palace upstairs</strong> for rare Irish single malts. Or settle into the back snug under the high glass skylight for a pristine pint of stout.
              </p>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#128694; Walking from The Westbury &mdash; 6 mins</div>
              <ol style="font-size:0.9rem;line-height:1.8;padding-left:18px;">
                <li>Exit the hotel onto <strong>Harry Street</strong>, turn left onto <strong>Grafton Street</strong>, and walk north.</li>
                <li>Turn left at the end of Grafton Street onto <strong>College Green</strong>, then take an immediate right onto <strong>Westmoreland Street</strong>.</li>
                <li>Turn left onto <strong>Fleet Street</strong>; The Palace Bar is immediately on your right.</li>
              </ol>
              <div style="margin-top:12px;">
                <a href="https://www.google.com/maps/place/The+Palace+Bar/@53.3463,-6.2593,17z" target="_blank" rel="noopener" class="med-link">&#128506; The Palace Bar on Google Maps &#8599;</a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Cobblestone -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#303F9F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127926;</span>
              Stop 2 &mdash; The Cobblestone, Smithfield
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Address:</span>
                <span>77 North King Street, Smithfield</span>
              </div>
              <div class="confirm-row mb-2">
                <span class="detail-label">Known as:</span>
                <span style="font-style:italic;">"A drinking pub with a music problem."</span>
              </div>
              <div class="mb-4">
                <a href="https://www.google.com/maps/place/The+Cobblestone/@53.3484,-6.2789,17z" target="_blank" rel="noopener" class="med-link">&#128506; The Cobblestone on Google Maps &#8599;</a>
              </div>

              <div class="benefits-heading mb-2">&#127926; The Music</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:4px;">
                Musicians sit at a corner table in the front bar playing <strong>fiddles</strong>, <strong>uilleann pipes</strong>, and <strong>tin whistles</strong> fully acoustic. A dedicated listening house &mdash; far removed from Temple Bar.
              </p>
              <p style="font-size:0.88rem;color:#E65100;font-weight:600;margin-top:10px;margin-bottom:20px;">
                &#9200; Arrive by <strong>7:50 PM</strong> to secure a standing spot near the front session circle.
              </p>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#128694; Walking from The Palace Bar &mdash; 20 mins</div>
              <ol style="font-size:0.9rem;line-height:1.8;padding-left:18px;margin-bottom:16px;">
                <li>Exit The Palace Bar and turn right, heading west down <strong>Fleet Street</strong> into the heart of Temple Bar.</li>
                <li>Continue straight as the road becomes <strong>Essex Street East</strong>, passing the Project Arts Centre.</li>
                <li>Turn right onto <strong>Parliament Street</strong> and walk 1 block north to the river.</li>
                <li>Cross the Liffey via <strong>Grattan Bridge</strong> (Essex Bridge).</li>
                <li>On the north side, turn left immediately onto <strong>Ormond Quay Upper</strong> and walk west along the boardwalk.</li>
                <li>Turn right up <strong>Church Street</strong> (just past the Four Courts) and walk straight north for 3 blocks.</li>
                <li>Turn left onto <strong>King Street North</strong>; the pub sits on the corner of Smithfield Square.</li>
              </ol>

              <v-alert type="info" variant="tonal" style="font-size:0.88rem;">
                <strong>&#128161; Strategy:</strong> Leave The Palace Bar at <strong>7:30 PM</strong> to arrive at The Cobblestone by 7:50 PM as the night's acoustic sessions hit their stride. Bring small Euro notes for the <strong>musician's tip jar</strong>.
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
