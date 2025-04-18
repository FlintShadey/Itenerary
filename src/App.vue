<script setup>
// Arabic translation of the itinerary entries
const arabicTranslations = [
  {
    date: "٢١ أبريل، ٢٠٢٥",
    flight: "AUS إلى LHR رحلة BA0190 الخطوط الجوية البريطانية",
  },
  {
    date: "٢٢ أبريل، ٢٠٢٥",
    flight: "SEN إلى RAK رحلة K8ZCQ51 إيزي جيت الساعة ١٤:٤٠ رقم الرحلة EZY5739",
    accommodation: "رياض قصر سيبان",
    address: "٤٣ درب مولاي عبد الله بن حسين، زنقة القصور، مراكش ٤٠٠٠٠، المغرب",
  },
  {
    date: "٢٥ أبريل، ٢٠٢٥",
    accommodation: "فندق رياض باحمو",
    address: "دوار آيت أوفي ASJS كم ٢٦ R ٧٠٤ مضيق بومالن دادس ٤٥١٥٠، المغرب",
  },
  {
    date: "٢٧ أبريل، ٢٠٢٥",
    accommodation: "رياض سملالية",
    address: "٢٠، درب سورناس، درب الزيات، فاس ٣٠١١٠، المغرب",
    phone: "٢١٢٥٣٥٦٣٣١٩٨+",
  },
  {
    date: "١ مايو، ٢٠٢٥",
    flight: "ريان إير ٥٩٣٠ فاس - مدريد",
    accommodation: "غرف أوبتيمي مدريد",
    address: "كاي دي لا بويبلا 7، باخو، وسط مدينة مدريد، 28004 مدريد، إسبانيا",
    phone: "34 617 42 76 76+",
    email: "madrid@optimirooms.com",
  },
  {
    date: "٤ مايو، ٢٠٢٥",
    flight: "آير أوروبا مدريد -> كانكون UX0063",
    accommodation: "ويندام ألترا بلايا ديل كارمن",
    address:
      "شارع كونستيتوينتس رقم ١، جونزالو جيريرو، ٧٧٧١٠ بلايا ديل كارمن، كينتانا رو، المكسيك",
    phone: "٥٢٩٨٤٨٧٣٤٠٠٠+",
  },
  {
    date: "٨ مايو، ٢٠٢٥",
    flight: "AA2588 الساعة ١١:٤٥ صباحًا كانكون إلى أوستن",
  },
];
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-card class="text-center pa-4 mb-6" elevation="3">
              <v-card-title class="text-h4 primary--text"
                >John Smith <br />
                & Jessica Miller</v-card-title
              >
              <v-card-subtitle class="text-h5 mb-4"
                >Travel Itinerary</v-card-subtitle
              >

              <v-card-text>
                <div class="text-body-1">
                  <p>
                    <strong class="primary--text">Primary:</strong> +1 210
                    385-9809 (Whatsapp available)
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

            <!-- April 21 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">April 21, 2025</v-card-title>
                  <v-card-text>
                    <p>AUS to LHR BA0190 British Airways</p>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">{{
                    arabicTranslations[0].date
                  }}</v-card-title>
                  <v-card-text>
                    <p>{{ arabicTranslations[0].flight }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- April 22 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">April 22, 2025</v-card-title>
                  <v-card-text>
                    <p>
                      SEN to RAK K8ZCQ51 easy jet 1440pm flight number EZY5739
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <h3 class="text-h6 secondary--text mb-2">
                      Riad Palais Sebban
                    </h3>
                    <p>
                      43 Derb My Abdellah Ben Hssein, Rue el Ksour, Marrakech
                      40000, Morocco
                    </p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="https://www.palaissebban.com/"
                      target="_blank"
                    >
                      Visit website
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">{{
                    arabicTranslations[1].date
                  }}</v-card-title>
                  <v-card-text>
                    <p>{{ arabicTranslations[1].flight }}</p>
                    <v-divider class="my-3"></v-divider>
                    <h3 class="text-h6 secondary--text mb-2">
                      {{ arabicTranslations[1].accommodation }}
                    </h3>
                    <p>{{ arabicTranslations[1].address }}</p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="https://www.palaissebban.com/"
                      target="_blank"
                    >
                      زيارة الموقع
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- April 25 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">April 25, 2025</v-card-title>
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      Hotel Riad Bahammou
                    </h3>
                    <p>
                      Douar Ait Ouffi ASJS Km 26 R 704 Gorges du, Boumalne Dades
                      45150, Morocco
                    </p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="http://www.riadbahammou.com/"
                      target="_blank"
                    >
                      Visit website
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">{{
                    arabicTranslations[2].date
                  }}</v-card-title>
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      {{ arabicTranslations[2].accommodation }}
                    </h3>
                    <p>{{ arabicTranslations[2].address }}</p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="http://www.riadbahammou.com/"
                      target="_blank"
                    >
                      زيارة الموقع
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- April 27 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">April 27, 2025</v-card-title>
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">Riad Semlalia</h3>
                    <p>20, Derb Sornass, Derb Ziat, Fès 30110, Morocco</p>
                    <p><strong>Phone:</strong> +212 535 633 198</p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="https://www.riadsemlalia.com/"
                      target="_blank"
                    >
                      Visit website
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">{{
                    arabicTranslations[3].date
                  }}</v-card-title>
                  <v-card-text>
                    <h3 class="text-h6 secondary--text mb-2">
                      {{ arabicTranslations[3].accommodation }}
                    </h3>
                    <p>{{ arabicTranslations[3].address }}</p>
                    <p>
                      <strong>هاتف:</strong> {{ arabicTranslations[3].phone }}
                    </p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="https://www.riadsemlalia.com/"
                      target="_blank"
                    >
                      زيارة الموقع
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- May 1 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">May 1, 2025</v-card-title>
                  <v-card-text>
                    <p>Ryanair 5930 FEZ - MAD</p>
                    <v-divider class="my-3"></v-divider>
                    <h3 class="text-h6 secondary--text mb-2">
                      Optimi Rooms Madrid
                    </h3>
                    <p>
                      Calle de la Puebla 7, Bajo, Madrid City Center, 28004
                      Madrid, Spain
                    </p>
                    <p><strong>Phone:</strong> +34 617 42 76 76</p>
                    <p><strong>Email:</strong> madrid@optimirooms.com</p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="https://www.optimirooms.com/inicio_madrid/"
                      target="_blank"
                    >
                      Visit website
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">{{
                    arabicTranslations[4].date
                  }}</v-card-title>
                  <v-card-text>
                    <p>{{ arabicTranslations[4].flight }}</p>
                    <v-divider class="my-3"></v-divider>
                    <h3 class="text-h6 secondary--text mb-2">
                      {{ arabicTranslations[4].accommodation }}
                    </h3>
                    <p>{{ arabicTranslations[4].address }}</p>
                    <p>
                      <strong>هاتف:</strong> {{ arabicTranslations[4].phone }}
                    </p>
                    <p>
                      <strong>بريد إلكتروني:</strong>
                      {{ arabicTranslations[4].email }}
                    </p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="https://www.optimirooms.com/inicio_madrid/"
                      target="_blank"
                    >
                      زيارة الموقع
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- May 4 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">May 4, 2025</v-card-title>
                  <v-card-text>
                    <p>AirEuropa MAD -> CUN UX0063</p>
                    <v-divider class="my-3"></v-divider>
                    <h3 class="text-h6 secondary--text mb-2">
                      Wyndham Alltra Playa Del Carmen
                    </h3>
                    <p>
                      Av. Constituyentes #1, Gonzalo Guerrero, 77710 Playa del
                      Carmen, Q.R., Mexico
                    </p>
                    <p><strong>Phone:</strong> +52 984 873 4000</p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="https://alltrabyplaya.com/playa-del-carmen"
                      target="_blank"
                    >
                      Visit website
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">{{
                    arabicTranslations[5].date
                  }}</v-card-title>
                  <v-card-text>
                    <p>{{ arabicTranslations[5].flight }}</p>
                    <v-divider class="my-3"></v-divider>
                    <h3 class="text-h6 secondary--text mb-2">
                      {{ arabicTranslations[5].accommodation }}
                    </h3>
                    <p>{{ arabicTranslations[5].address }}</p>
                    <p>
                      <strong>هاتف:</strong> {{ arabicTranslations[5].phone }}
                    </p>
                    <v-btn
                      color="primary"
                      variant="text"
                      href="https://alltrabyplaya.com/playa-del-carmen"
                      target="_blank"
                    >
                      زيارة الموقع
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- May 8 -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">May 8, 2025</v-card-title>
                  <v-card-text>
                    <p>AA2588 1145am CUN to AUS</p>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card hover elevation="2" class="mb-4">
                  <v-card-title class="primary">{{
                    arabicTranslations[6].date
                  }}</v-card-title>
                  <v-card-text>
                    <p>{{ arabicTranslations[6].flight }}</p>
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
</style>
