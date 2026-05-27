<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#9C27B0 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127981;</span>
              Acropolis &amp; Slopes &nbsp;&middot;&nbsp; Wed, Jun 03, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-4">&#128247; John &mdash; Acropolis &amp; Slopes</div>
              <v-img
                src="/John ACROPOLIS and slopes .png"
                alt="John at the Acropolis and slopes"
                rounded="lg"
                class="mb-6"
                cover
              ></v-img>

              <v-divider class="my-4"></v-divider>

              <div class="benefits-heading mb-4">&#128247; Jessica &mdash; Acropolis &amp; Slopes</div>
              <v-img
                src="/Jessica ACROPOLIS and slopes .png"
                alt="Jessica at the Acropolis and slopes"
                rounded="lg"
                class="mb-2"
                cover
              ></v-img>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'AcropolisPhotos',
}
</script>
