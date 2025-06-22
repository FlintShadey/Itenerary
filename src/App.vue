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

            <!-- June 27 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">June 27, 2025</v-card-title>
                  <v-card-text>
                    <p>AUS to MCO Southwest WN 1994 arriving @ 19:30</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- June 28 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">June 28, 2025</v-card-title>
                  <v-card-text>
                    <p>
                      <strong>Staying at:</strong> 1731 Rutledge Rd, Longwood FL
                      32779
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- June 29 - July 6 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary"
                    >June 29 - July 6, 2025</v-card-title
                  >
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      Royal Caribbean Cruise
                    </h3>
                    <p><strong>Port:</strong> Port Canaveral, Florida</p>
                    <p><strong>Ship:</strong> Wonder of the Seas</p>
                    <p><strong>Reservation:</strong> 538289</p>
                    <p><strong>Stateroom:</strong> 9584</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- July 2 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary"
                    >July 2, 2025 at 10:00 AM</v-card-title
                  >
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      Chacchoben Archaeological Site Private Tour
                    </h3>
                    <p>
                      Discover these amazing Mayan Ruins on a half day guided
                      tour
                    </p>
                    <p><strong>Duration:</strong> 4 hours</p>
                    <p><strong>People:</strong> 4 people</p>
                    <p>
                      <strong>Location:</strong> Mahahual, Quintana Roo, 77976,
                      Mexico
                    </p>
                    <v-divider class="my-2"></v-divider>
                    <p><strong>Booking Reference:</strong> #CLRCYJ</p>
                    <p><strong>ToursByLocals:</strong> #684517</p>
                    <p><strong>Tour Guide:</strong> Juan Carlos A.</p>
                    <p><strong>Guide Phone:</strong> 529831078052</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- July 7 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">July 7, 2025</v-card-title>
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      Car Rental - Thrifty
                    </h3>
                    <p><strong>Car Type:</strong> Fullsize car</p>
                    <p><strong>Confirmation:</strong> L25443770C0</p>
                    <p><strong>Route:</strong> MCO to JAX</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- July 8 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">July 8, 2025</v-card-title>
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">Airbnb</h3>
                    <p><strong>Confirmation:</strong> HMSR3DJ5HB</p>
                    <p>
                      <strong>Address:</strong> 11218 Hendon Dr, Jacksonville,
                      FL 32246
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- July 9 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">July 9, 2025</v-card-title>
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      Jessica & Flint Departure
                    </h3>
                    <p><strong>Confirmation:</strong> A8OW64</p>
                    <p>
                      <strong>Tickets:</strong> 5262356004722, 5262356004721
                    </p>
                    <v-divider class="my-2"></v-divider>
                    <p>
                      <strong>Flight #1303:</strong> JAX 11:50AM → BNA 12:25PM
                      (Nashville)
                    </p>
                    <p>
                      <strong>Flight #0623:</strong> BNA 02:40PM → AUS 04:55PM
                      (Austin)
                    </p>
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
