<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Overview -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#303F9F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127926;</span>
              The Cobblestone &mdash; Overview
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Address:</span>
                <span>77 North King Street, Smithfield, Dublin</span>
              </div>
              <div class="confirm-row mb-4">
                <span class="detail-label">Known as:</span>
                <span style="font-style:italic;">"A drinking pub with a music problem."</span>
              </div>
              <p style="font-size:0.92rem;line-height:1.65;">
                Dublin's premier, no-frills neighbourhood institution for <strong>authentic, unamplified traditional Irish music</strong>. A dedicated listening house where patrons respect the musicians &mdash; a completely local experience far removed from Temple Bar.
              </p>

            </v-card-text>
          </v-card>

          <!-- The Experience -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#303F9F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127931;</span>
              The Experience
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127926; The Music</div>
              <p style="font-size:0.92rem;line-height:1.65;margin-bottom:16px;">
                Musicians gather around a dedicated table in the front bar corner playing <strong>fiddles</strong>, <strong>uilleann pipes</strong>, and <strong>tin whistles</strong> completely acoustic. Sessions run 7 nights a week, kicking off by late afternoon and running late into the night.
              </p>

              <div class="benefits-heading mb-2">&#127870; The Atmosphere</div>
              <p style="font-size:0.92rem;line-height:1.65;">
                Low ceilings, dark wood, and a front bar entirely oriented around the session circle. No stage, no PA, no tourist gimmicks &mdash; just musicians who have been coming here for decades.
              </p>

            </v-card-text>
          </v-card>

          <!-- Directions -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#303F9F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128694;</span>
              Directions from The Westbury
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#128694; Option 1 &mdash; Walk <span style="font-weight:400;font-size:0.82rem;opacity:0.75;">(25&ndash;30 mins)</span></div>
              <ol style="font-size:0.9rem;line-height:1.8;padding-left:18px;margin-bottom:20px;">
                <li>Head north down <strong>Grafton Street</strong>, continuing straight onto <strong>College Green</strong> and <strong>Westmoreland Street</strong>.</li>
                <li>Cross <strong>O'Connell Bridge</strong> to the north side of the Liffey.</li>
                <li>Turn left immediately onto <strong>Ormond Quay Lower</strong> and walk west along the river boardwalk.</li>
                <li>Turn right up <strong>Church Street</strong> (just past the Four Courts) and walk straight for 3 blocks.</li>
                <li>Turn left onto <strong>King Street North</strong>; the pub sits on the corner of Smithfield Square.</li>
              </ol>

              <div class="benefits-heading mb-2">&#128661; Option 2 &mdash; Taxi <span style="font-weight:400;font-size:0.82rem;opacity:0.75;">(8&ndash;10 mins)</span></div>
              <p style="font-size:0.9rem;line-height:1.65;">
                The simplest evening option. Have the <strong>Westbury doorman</strong> hail a cab directly from the hotel alley.
              </p>

            </v-card-text>
          </v-card>

          <!-- Strategy -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#303F9F 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128161;</span>
              Wednesday Night Strategy
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:80px;">&#8987; Timing:</span>
                <span style="font-size:0.9rem;">Arrive by <strong>7:30 PM</strong> to secure a standing spot or stool near the front session circle before the night crowd fills the room.</span>
              </div>
              <div class="confirm-row" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:80px;">&#128181; Cash:</span>
                <span style="font-size:0.9rem;">Bring small Euro notes or coins for the <strong>musician's tip jar</strong>.</span>
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
