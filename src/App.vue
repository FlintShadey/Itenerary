<script setup>
import { onMounted } from 'vue'
import JsBarcode from 'jsbarcode'

onMounted(() => {
  document.querySelectorAll('.disney-ticket-barcode').forEach(el => {
    JsBarcode(el, 'VRGJ91333333', {
      format: 'CODE128',
      width: 2,
      height: 80,
      displayValue: true,
      fontSize: 16,
      font: 'Nunito',
      margin: 10,
      background: '#ffffff',
    })
  })
})
</script>

<template>
  <v-app class="disney-app">
    <v-main>
      <!-- Floating sparkles decoration -->
      <div class="sparkle sparkle-1">&#10022;</div>
      <div class="sparkle sparkle-2">&#10022;</div>
      <div class="sparkle sparkle-3">&#9733;</div>
      <div class="sparkle sparkle-4">&#10022;</div>

      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <!-- Logo Section -->
            <div class="text-center mb-4">
              <img src="./LOGO.png" alt="Logo" class="logo-image" />
            </div>

            <!-- Header Card -->
            <v-card class="text-center pa-5 mb-6 header-card" elevation="6">
              <div class="castle-icon mb-2">&#127984;</div>
              <v-card-title class="text-h4 header-names">
                Flint Smith<br />
                Jessica (Maryam) Heathcock<br />
                Ocean Smith<br />
                Sienna Smith
              </v-card-title>
              <v-card-subtitle class="text-h5 mb-4 subtitle-text">
                &#9733; Walt Disney World Travel Itinerary &#9733;
              </v-card-subtitle>

              <v-card-text>
                <div class="text-body-1">
                  <p>
                    <strong class="accent--text">Primary:</strong> +1 210
                    385-9809 <br />(Whatsapp available)
                  </p>
                  <p>
                    <strong class="accent--text">Secondary:</strong> +1 415
                    860-2970
                  </p>
                  <p>
                    <strong class="accent--text">Email:</strong>
                    flintsmith@gmail.com
                  </p>
                </div>
              </v-card-text>
            </v-card>

            <h2 class="text-h4 text-center section-title mb-6">
              &#127775; Itinerary &#127775;
            </h2>

            <!-- MAR 14 - Saturday -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="3" class="mb-4 day-card">
                  <v-card-title class="day-header">
                    &#128663; MAR 14 &mdash; Saturday
                  </v-card-title>
                  <v-card-text>
                    <div class="day-content">
                      <p>&#128205; Dad and Maryam are driving to Dallas</p>
                      <p>&#128588; We will pick up Ocean and force her to hang out with us</p>
                      <p class="mt-3">
                        <strong>&#9992; Sienna Flying to Dallas</strong><br />
                        American Airlines 2805<br />
                        <strong>Departure:</strong> 7:47 PM<br />
                        <strong>Confirmation:</strong> YIAWKF
                      </p>
                      <v-alert type="info" variant="tonal" class="mt-3" density="compact">
                        &#127769; We all sleep in Airbnb
                      </v-alert>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- MAR 15 - Sunday -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="3" class="mb-4 day-card">
                  <v-card-title class="day-header">
                    &#9992; MAR 15 &mdash; Sunday &mdash; Fly to Orlando!
                  </v-card-title>
                  <v-card-text>
                    <div class="day-content">
                      <v-card variant="outlined" class="mb-3 pa-3 info-card">
                        <h4 class="accent--text mb-1">&#128663; Parking Spot South</h4>
                        <p><strong>Confirmation:</strong> 125153756</p>
                        <p>1945 Valley View Lane, Irving, TX 75061</p>
                      </v-card>

                      <v-card variant="outlined" class="mb-3 pa-3 info-card">
                        <h4 class="accent--text mb-1">&#9992; Frontier Flight 4018 &mdash; DFW to MCO</h4>
                        <p><strong>Departure:</strong> 1:25 PM</p>
                        <p><strong>Passengers:</strong> All 4</p>
                        <div class="ml-3 mt-2">
                          <p><strong>Dad &amp; Maryam:</strong> CMM49B</p>
                          <p><strong>Ocean:</strong> TLI7XK</p>
                          <p><strong>Sienna:</strong> RJZZ4A</p>
                        </div>
                      </v-card>

                      <v-alert type="warning" variant="tonal" class="mb-3" density="compact">
                        <strong>&#9888; LUGGAGE RULES &mdash; 40 LBS ONLY</strong><br />
                        Each person: 1 checked bag (clothing ONLY, minimal toiletries)<br />
                        No laptops, no toys<br />
                        No carryon &mdash; 1 small personal item only
                      </v-alert>

                      <v-card variant="outlined" class="mb-3 pa-3 info-card">
                        <h4 class="accent--text mb-1">&#128664; Uber to Resort</h4>
                        <p><strong>Copper Creek Villas &amp; Cabins</strong></p>
                        <p>901 Timberline Drive, Lake Buena Vista, FL 32830</p>
                        <p><strong>Confirmation:</strong> 612664967850</p>
                      </v-card>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- MAR 16 - Monday -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="3" class="mb-4 day-card park-day">
                  <v-card-title class="day-header day-header-park">
                    &#127981; MAR 16 &mdash; Monday &mdash; Animal Kingdom + Hollywood Studios
                  </v-card-title>
                  <v-card-text>
                    <div class="day-content">
                      <v-card variant="outlined" class="mb-3 pa-3 info-card">
                        <h4 class="accent--text mb-1">&#127915; Disney Ticket</h4>
                        <p><strong>Confirmation Number:</strong> VRGJ91333333</p>
                        <div class="barcode-wrapper">
                          <svg class="disney-ticket-barcode"></svg>
                        </div>
                      </v-card>

                      <v-chip class="mb-3 hopper-chip" color="#1B5E20" variant="elevated">
                        &#127915; Hopper Pass &mdash; Early Access!
                      </v-chip>

                      <h4 class="park-name mt-2">&#127757; Animal Kingdom (Morning)</h4>
                      <ul class="ride-list">
                        <li>&#128757; <strong>Avatar: Flight of Passage</strong> &mdash; normal standby line</li>
                        <li>&#129427; <strong>Kilimanjaro Safaris</strong></li>
                        <li>&#127956; <strong>Expedition Everest</strong> (maybe!)</li>
                      </ul>

                      <v-divider class="my-4"></v-divider>

                      <h4 class="park-name">&#127908; Hollywood Studios (Afternoon)</h4>
                      <p>&#128664; Uber from Animal Kingdom</p>

                      <v-alert type="success" variant="tonal" class="my-3" density="compact">
                        <strong>&#9889; LIGHTNING LANE</strong> &mdash; Star Wars: Rise of the Resistance
                      </v-alert>
                      <p>&#128721; No big thrill rides for the littles</p>

                      <v-divider class="my-4"></v-divider>

                      <h4 class="accent--text">&#127860; Dinner Options</h4>
                      <div class="ml-3 mt-2">
                        <p>
                          <strong>Hollywood &amp; Vine</strong> (Buffet)<br />
                          <a href="https://disneyworld.disney.go.com/dining/hollywood-studios/hollywood-and-vine/" target="_blank" rel="noopener" class="disney-link">View Menu &amp; Info</a>
                        </p>
                        <p class="mt-2"><em>or</em></p>
                        <p class="mt-2">
                          <strong>The Hollywood Brown Derby</strong><br />
                          <a href="https://disneyworld.disney.go.com/dining/hollywood-studios/hollywood-brown-derby/" target="_blank" rel="noopener" class="disney-link">View Menu &amp; Info</a>
                        </p>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- MAR 17 - Tuesday -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="3" class="mb-4 day-card">
                  <v-card-title class="day-header">
                    &#127780; MAR 17 &mdash; Tuesday &mdash; Rest Day
                  </v-card-title>
                  <v-card-text>
                    <div class="day-content">
                      <p>&#128524; Mostly a day off &mdash; enjoy the resort!</p>
                      <p>
                        <a href="https://disneyworld.disney.go.com/resorts/copper-creek-villas-and-cabins/rates-rooms/" target="_blank" rel="noopener" class="disney-link">
                          Copper Creek Villas &amp; Cabins Info
                        </a>
                      </p>

                      <v-divider class="my-4"></v-divider>

                      <h4 class="accent--text">&#127860; Dinner at Disney Springs</h4>
                      <p>
                        <strong>Summer House on the Lake</strong><br />
                        <strong>Dinner at 9:00 PM</strong><br />
                        <a href="https://www.summerhouserestaurants.com/disney-springs/menus/" target="_blank" rel="noopener" class="disney-link">View Menu</a>
                      </p>

                      <v-alert type="info" variant="tonal" class="mt-3" density="compact">
                        &#128564; Go to bed early &mdash; Magic Kingdom tomorrow!
                      </v-alert>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- MAR 18 - Wednesday -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="3" class="mb-4 day-card park-day">
                  <v-card-title class="day-header day-header-park">
                    &#127984; MAR 18 &mdash; Wednesday &mdash; Magic Kingdom!
                  </v-card-title>
                  <v-card-text>
                    <div class="day-content">
                      <v-card variant="outlined" class="mb-3 pa-3 info-card">
                        <h4 class="accent--text mb-1">&#127915; Disney Ticket</h4>
                        <p><strong>Confirmation Number:</strong> VRGJ91333333</p>
                        <div class="barcode-wrapper">
                          <svg class="disney-ticket-barcode"></svg>
                        </div>
                      </v-card>

                      <v-alert type="success" variant="tonal" class="mb-3" density="compact">
                        <strong>&#9889; LIGHTNING LANE</strong> &mdash; TRON Lightcycle / Run
                      </v-alert>

                      <ul class="ride-list">
                        <li>&#128126; <strong>TRON Lightcycle / Run</strong></li>
                        <li>&#128120; Maryam wants some princess time! &#128081;</li>
                      </ul>

                      <v-divider class="my-4"></v-divider>

                      <h4 class="accent--text">&#127860; Dinner</h4>
                      <p>
                        <strong>Be Our Guest</strong> at The Beast's Magical Castle &#127984;<br />
                        An enchanted dining experience!
                      </p>

                      <v-divider class="my-4"></v-divider>

                      <v-alert type="info" variant="tonal" density="compact">
                        &#127878; <strong>Stay for the Fireworks!</strong> &#10024;&#127877;
                      </v-alert>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- MAR 19 - Thursday -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="3" class="mb-4 day-card">
                  <v-card-title class="day-header">
                    &#128230; MAR 19 &mdash; Thursday
                  </v-card-title>
                  <v-card-text>
                    <div class="day-content">
                      <p>&#127968; Checkout of Copper Creek Villas</p>

                      <v-divider class="my-4"></v-divider>

                      <v-card variant="outlined" class="mb-3 pa-3 info-card">
                        <h4 class="accent--text mb-1">&#127860; Boma &mdash; Flavors of Africa Dinner</h4>
                        <p><strong>Guests:</strong> 6</p>
                        <p><strong>Dinner at 5:05 PM</strong></p>
                        <p><strong>Location:</strong> Disney's Animal Kingdom Lodge</p>
                        <p><strong>Confirmation Number:</strong> 356047818354</p>
                      </v-card>

                      <v-divider class="my-4"></v-divider>

                      <p>&#128104;&#8205;&#128104;&#8205;&#128102; Go to Uncle Pete's</p>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- MAR 20 - Friday -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="3" class="mb-4 day-card">
                  <v-card-title class="day-header">
                    &#9992; MAR 20 &mdash; Friday
                  </v-card-title>
                  <v-card-text>
                    <div class="day-content">
                      <v-card variant="outlined" class="pa-3 info-card">
                        <h4 class="accent--text mb-1">&#9992; Ocean Flies Home</h4>
                        <p><strong>Frontier Flight 4191</strong> &mdash; MCO to DFW</p>
                        <p><strong>Departure:</strong> 1:16 PM</p>
                        <p><strong>Confirmation:</strong> TLI7XK</p>
                      </v-card>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- MAR 21 - Saturday -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="3" class="mb-4 day-card">
                  <v-card-title class="day-header">
                    &#127774; MAR 21 &mdash; Saturday
                  </v-card-title>
                  <v-card-text>
                    <div class="day-content">
                      <p>&#128524; Free day at Uncle Pete's</p>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- MAR 22 - Sunday -->
            <v-row>
              <v-col cols="12">
                <v-card hover elevation="3" class="mb-4 day-card">
                  <v-card-title class="day-header">
                    &#9992; MAR 22 &mdash; Sunday &mdash; Heading Home!
                  </v-card-title>
                  <v-card-text>
                    <div class="day-content">
                      <v-card variant="outlined" class="mb-3 pa-3 info-card">
                        <h4 class="accent--text mb-1">&#9992; Dad &amp; Maryam</h4>
                        <p><strong>Frontier Flight 2885</strong> &mdash; MCO to DFW</p>
                        <p><strong>Departure:</strong> 10:03 AM</p>
                        <p><strong>Confirmation:</strong> CMM49B</p>
                      </v-card>

                      <v-card variant="outlined" class="mb-3 pa-3 info-card">
                        <h4 class="accent--text mb-1">&#9992; Sienna</h4>
                        <p><strong>Southwest Flight 4782</strong></p>
                        <p><strong>Departure:</strong> 12:50 PM</p>
                        <p><strong>Confirmation:</strong> CMIYI2</p>
                      </v-card>

                      <v-card variant="outlined" class="pa-3 info-card">
                        <h4 class="accent--text mb-1">&#128663; Parking Spot South</h4>
                        <p><strong>Confirmation:</strong> 125153756</p>
                      </v-card>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- Footer -->
            <div class="text-center mt-6 mb-8 footer-text">
              <p>&#10024; Have a magical trip! &#10024;</p>
            </div>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* Disney-inspired theme */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Nunito:wght@400;600;700&display=swap');

.disney-app {
  background: linear-gradient(180deg, #0d1b3e 0%, #1a237e 30%, #283593 60%, #1a1a4e 100%) !important;
  min-height: 100vh;
  font-family: 'Nunito', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Floating sparkles */
.sparkle {
  position: fixed;
  color: rgba(255, 215, 0, 0.5);
  font-size: 24px;
  animation: sparkle-float 6s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}
.sparkle-1 { top: 10%; left: 5%; animation-delay: 0s; }
.sparkle-2 { top: 30%; right: 8%; animation-delay: 1.5s; }
.sparkle-3 { top: 60%; left: 3%; animation-delay: 3s; }
.sparkle-4 { top: 80%; right: 5%; animation-delay: 4.5s; }

@keyframes sparkle-float {
  0%, 100% { opacity: 0.3; transform: translateY(0) scale(1); }
  50% { opacity: 1; transform: translateY(-20px) scale(1.3); }
}

/* Header card */
.header-card {
  background: linear-gradient(135deg, #1a237e 0%, #311b92 50%, #4a148c 100%) !important;
  color: #fff !important;
  border: 2px solid rgba(255, 215, 0, 0.4);
  border-radius: 16px !important;
  position: relative;
  z-index: 1;
}

.castle-icon {
  font-size: 56px;
  line-height: 1;
}

.header-names {
  color: #ffd54f !important;
  font-family: 'Playfair Display', serif !important;
  font-weight: 700 !important;
  white-space: normal !important;
  line-height: 1.4 !important;
}

.subtitle-text {
  color: #e0e0e0 !important;
  font-weight: 600 !important;
}

.header-card .text-body-1 {
  color: #e0e0e0;
}

/* Section title */
.section-title {
  color: #ffd54f !important;
  font-family: 'Playfair Display', serif !important;
  font-weight: 700 !important;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

/* Day cards */
.day-card {
  background: rgba(255, 255, 255, 0.95) !important;
  border-radius: 14px !important;
  border-left: 5px solid #ffd54f;
  position: relative;
  z-index: 1;
}

.park-day {
  border-left: 5px solid #e040fb !important;
  box-shadow: 0 4px 20px rgba(224, 64, 251, 0.15) !important;
}

.day-header {
  background: linear-gradient(135deg, #1565c0, #0d47a1) !important;
  color: white !important;
  font-family: 'Nunito', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  line-height: 1.5 !important;
  white-space: normal !important;
  padding: 12px 16px !important;
}

.day-header-park {
  background: linear-gradient(135deg, #7b1fa2, #4a148c) !important;
}

.day-content {
  padding: 8px 0;
  color: #333;
}

.day-content p {
  margin-bottom: 6px;
}

/* Info sub-cards */
.info-card {
  border-color: rgba(21, 101, 192, 0.3) !important;
  background: rgba(227, 242, 253, 0.5) !important;
  border-radius: 10px !important;
}

/* Ride list */
.ride-list {
  list-style: none;
  padding-left: 8px;
}
.ride-list li {
  padding: 4px 0;
  font-size: 1rem;
}

/* Park subheading */
.park-name {
  color: #1565c0;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

/* Accent text */
.accent--text {
  color: #7b1fa2 !important;
}

/* Links */
.disney-link {
  color: #1565c0;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px dashed #1565c0;
  transition: color 0.2s;
}
.disney-link:hover {
  color: #7b1fa2;
  border-bottom-color: #7b1fa2;
}

/* Hopper chip */
.hopper-chip {
  color: white !important;
  font-weight: 700 !important;
}

/* Footer */
.footer-text {
  color: #ffd54f;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

/* Barcode */
.barcode-wrapper {
  text-align: center;
  margin-top: 8px;
  background: #fff;
  border-radius: 8px;
  padding: 8px 0;
}
.barcode-wrapper svg {
  max-width: 100%;
  height: auto;
}

/* Logo */
.logo-image {
  max-width: 200px;
  max-height: 120px;
  width: auto;
  height: auto;
  object-fit: contain;
}

/* Responsive tweaks */
@media (max-width: 600px) {
  .header-names {
    font-size: 1.3rem !important;
  }
  .castle-icon {
    font-size: 40px;
  }
  .day-header {
    font-size: 0.95rem !important;
  }
}
</style>
