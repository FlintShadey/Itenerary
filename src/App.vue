<script setup></script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <!-- Logo Section -->
            <div class="text-center mb-4">
              <img src="./LOGO.png" alt="Logo" class="logo-image" />
            </div>

            <v-card class="text-center pa-4 mb-6" elevation="3">
              <v-card-title class="text-h4 primary--text"
                >John Smith <br />
                Jessica Miller</v-card-title
              >
              <v-card-subtitle class="text-h5 mb-4"
                >Travel Itinerary</v-card-subtitle
              >

              <v-card-text>
                <div class="text-body-1">
                  <p>
                    <strong class="primary--text">Primary:</strong> +1 210
                    385-9809 <br />(Whatsapp available)
                  </p>
                  <p>
                    <strong class="primary--text">Secondary:</strong> +1 415
                    860-2970
                  </p>
                  <p>
                    <strong class="primary--text">Email:</strong>
                    flintsmith@gmail.com
                  </p>
                </div>
              </v-card-text>
            </v-card>

            <h2 class="text-h4 text-center secondary--text mb-6">Itinerary</h2>

            <!-- Flight Confirmation Card -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary"
                    >Flight Confirmation</v-card-title
                  >
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      United Airlines
                    </h3>
                    <p><strong>Confirmation Number:</strong> NBB5EJ</p>
                    <p><strong>Class:</strong> United Economy (N)</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- Flight 1 - AUS to IAH -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary"
                    >Flight 1 of 4 - UA283</v-card-title
                  >
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      Tuesday, August 12, 2025
                    </h3>
                    <p>
                      <strong>Departure:</strong> 04:28 PM - Austin, TX (AUS)
                    </p>
                    <p>
                      <strong>Arrival:</strong> 05:31 PM - Houston, TX (IAH)
                    </p>
                    <p><strong>Class:</strong> United Economy (N)</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- Flight 2 - IAH to YYC -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary"
                    >Flight 2 of 4 - UA2198</v-card-title
                  >
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      Tuesday, August 12, 2025
                    </h3>
                    <p>
                      <strong>Departure:</strong> 06:31 PM - Houston, TX (IAH)
                    </p>
                    <p>
                      <strong>Arrival:</strong> 09:55 PM - Calgary, AB (YYC)
                    </p>
                    <p><strong>Class:</strong> United Economy (N)</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- Flight 3 - YYC to DEN -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary"
                    >Flight 3 of 4 - UA1953</v-card-title
                  >
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      Sunday, August 17, 2025
                    </h3>
                    <p>
                      <strong>Departure:</strong> 01:30 PM - Calgary, AB (YYC)
                    </p>
                    <p><strong>Arrival:</strong> 04:04 PM - Denver, CO (DEN)</p>
                    <p><strong>Class:</strong> United Economy (N)</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- Flight 4 - DEN to AUS -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary"
                    >Flight 4 of 4 - UA1942</v-card-title
                  >
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      Sunday, August 17, 2025
                    </h3>
                    <p>
                      <strong>Departure:</strong> 05:40 PM - Denver, CO (DEN)
                    </p>
                    <p><strong>Arrival:</strong> 08:55 PM - Austin, TX (AUS)</p>
                    <p><strong>Class:</strong> United Economy (N)</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- Traveler Details -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">Traveler Details</v-card-title>
                  <v-card-text>
                    <div class="mb-3">
                      <h3 class="text-h6 secondary--text mb-2">
                        SMITH/JOHNFLINT
                      </h3>
                      <p><strong>eTicket:</strong> 0162314808646</p>
                      <p><strong>Frequent Flyer:</strong> UA-XXXXX327 Member</p>
                      <p>
                        <strong>Seats:</strong> AUS-IAH ----- | IAH-YYC ----- |
                        YYC-DEN ----- | DEN-AUS -----
                      </p>
                    </div>

                    <v-divider class="my-3"></v-divider>

                    <div class="mb-3">
                      <h3 class="text-h6 secondary--text mb-2">
                        SMITH/OCEANCLAIRE
                      </h3>
                      <p><strong>eTicket:</strong> 0162314808645</p>
                      <p>
                        <strong>Seats:</strong> AUS-IAH ----- | IAH-YYC ----- |
                        YYC-DEN ----- | DEN-AUS -----
                      </p>
                    </div>

                    <v-divider class="my-3"></v-divider>

                    <div>
                      <h3 class="text-h6 secondary--text mb-2">
                        MILLER/JESSICACHRISTINE
                      </h3>
                      <p><strong>eTicket:</strong> 0162314808647</p>
                      <p>
                        <strong>Seats:</strong> AUS-IAH ----- | IAH-YYC ----- |
                        YYC-DEN ----- | DEN-AUS -----
                      </p>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* Add any additional custom styles here if needed */
.primary {
  background-color: #3a86ff !important;
  color: white !important;
}

.secondary--text {
  color: #fb5607 !important;
}

.primary--text {
  color: #3a86ff !important;
}

.logo-image {
  max-width: 200px;
  max-height: 120px;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
