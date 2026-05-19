<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <!-- Back button -->
          <v-btn
            variant="text"
            color="white"
            class="mb-4 pl-0"
            @click="$router.back()"
          >
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Header Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128694;</span>
              Athens Walking Day &amp; Blade Runner Live &mdash; Thu, Jun 04, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-1">
                <span class="detail-label">Start:</span>
                <span>Mira Me Boutique Hotel, Ermou 118, Athina 105 54</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">End:</span>
                <span>Odeon of Herodes Atticus, Dionysiou Areopagitou, Athina 105 55</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Total Distance:</span>
                <span>~10.1 km &nbsp;&middot;&nbsp; ~2 hr 28 min walking</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Evening:</span>
                <span style="font-weight:600;color:#C62828;">Blade Runner Live &mdash; 9:00 PM at the Odeon</span>
              </div>

              <div class="mt-1" style="display:flex;gap:10px;flex-wrap:wrap;">
                <a href="https://maps.app.goo.gl/oairRXgQmPEGygXy5" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="indigo-darken-2" variant="tonal" size="small">
                    &#128205; Full Route on Google Maps
                  </v-btn>
                </a>
                <a href="https://maps.app.goo.gl/yEuTKBvWveMMo8kp7" target="_blank" rel="noopener" style="text-decoration:none;">
                  <v-btn color="indigo-darken-2" variant="outlined" size="small">
                    &#127981; Odeon on Maps
                  </v-btn>
                </a>
              </div>

            </v-card-text>
          </v-card>

          <!-- Blade Runner Live Event -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#0D0D0D 0%,#1A0033 55%,#2D004D 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127910;</span>
              Blade Runner Live (The Final Cut) &mdash; 9:00 PM
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="info" variant="tonal" density="compact" class="mb-4" style="background:rgba(41,182,246,0.10)!important;">
                <strong>Part of the Farewell Celebrations</strong> &mdash; the Odeon of Herodes Atticus closes for a multi-year restoration after this final historic one-month festival run.
              </v-alert>

              <div class="benefits-heading mb-3">&#127916; The Event</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Film:</span>
                <span>Blade Runner (The Final Cut) &mdash; Ridley Scott</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Music:</span>
                <span>Original Vangelis score performed live by <strong>The Avex Ensemble</strong> (11-member international touring group) &mdash; in perfect sync with the film</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Concept:</span>
                <span>Monumental HD screen against 2,000-year-old Roman stone, under the illuminated Acropolis &mdash; a dark futuristic noir inside an ancient theater</span>
              </div>

              <v-divider class="my-4"></v-divider>

              <div class="benefits-heading mb-3">&#9200; Logistics</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Date:</span>
                <span>Thursday, June 4, 2026</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Time:</span>
                <span style="font-weight:700;">9:00 PM (21:00)</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Venue:</span>
                <span>Odeon of Herodes Atticus (Herodion), Dionysiou Areopagitou, south slope of the Acropolis</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Tickets:</span>
                <span style="font-weight:600;color:#388E3C;">&#10003; Confirmed &mdash; 2 tickets</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Order Code:</span>
                <span class="confirm-code ferry-code">3883813065372609</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Transaction ID:</span>
                <span class="ferry-code" style="font-size:0.78rem;">8d2f464f-36ba-412c-8a34-acdfdd03d517</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Card:</span>
                <span>VISA 414720XXXXXX8872</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Amount Paid:</span>
                <span style="font-weight:700;">&euro;70.00 &mdash; Paid in full</span>
              </div>

              <div class="benefits-heading mb-2">&#129534; Payment Receipt</div>
              <div style="border-radius:8px;overflow:hidden;border:1px solid rgba(255,255,255,0.12);margin-bottom:16px;">
                <img
                  src="/viva-receipt-blade-runner.png"
                  alt="Viva.com payment receipt — Blade Runner Live, 2 tickets, €70.00"
                  style="width:100%;display:block;"
                />
              </div>

              <v-alert type="warning" variant="tonal" density="compact" class="mb-4">
                <strong>&#128336; Arrive by 8:15 PM</strong> &mdash; Gates close promptly at 9:00 PM. Allow time to navigate the ancient stone stairs to your assigned tier.
              </v-alert>

              <v-divider class="my-4"></v-divider>

              <div class="benefits-heading mb-3">&#9888; Strict Venue Rules</div>
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:30px;">1.</span>
                <span><strong>No high heels or sharp-soled shoes</strong> &mdash; entry strictly denied. Wear flat, soft-soled, or rubber-soled shoes (sneakers, loafers, or flat sandals). Enforced by the Greek Ministry of Culture to protect ancient marble steps.</span>
              </div>
              <div class="confirm-row mb-2" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:30px;">2.</span>
                <span><strong>No food or drink</strong> &mdash; bottled water only inside the seating bowl. No snacks, sodas, or alcohol past the gates.</span>
              </div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:30px;">3.</span>
                <span><strong>Arrive by 8:15 PM</strong> &mdash; gates close at 9:00 PM sharp when the performance begins.</span>
              </div>

            </v-card-text>
          </v-card>

          <!-- Printable Directions -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#004D40 0%,#00695C 55%,#00897B 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#128205;</span>
              Printable Directions
            </v-card-title>
            <v-card-text class="pa-4">

              <!-- Route Overview -->
              <div class="benefits-heading mb-3">&#9978; Route Overview</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Start:</span>
                <span><strong>Mira Me Boutique Hotel</strong>, Ermou 118, Athina 105 54</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">End:</span>
                <span><strong>Odeon of Herodes Atticus</strong>, Dionysiou Areopagitou, Athina 105 55</span>
              </div>

              <table class="fare-table mb-4">
                <thead>
                  <tr>
                    <th>Leg</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Time</th>
                    <th>Distance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mira Me Boutique Hotel</td>
                    <td>Ama Lachei</td>
                    <td>~1 hr 4 min</td>
                    <td>4.4 km</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ama Lachei</td>
                    <td>Odeon of Herodes Atticus</td>
                    <td>~1 hr 24 min</td>
                    <td>5.7 km</td>
                  </tr>
                  <tr class="fare-total">
                    <td colspan="3"><strong>Total</strong></td>
                    <td><strong>~2 hr 28 min</strong></td>
                    <td><strong>10.1 km</strong></td>
                  </tr>
                </tbody>
              </table>
              <div class="confirm-row mb-1">
                <span class="detail-label">Leg 1 Route:</span>
                <span>via Leokoriou and Lepeniotou</span>
              </div>
              <div class="confirm-row mb-4">
                <span class="detail-label">Leg 2 Route:</span>
                <span>via Kallidromiou and Kleomenous</span>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Leg 1 -->
              <div class="benefits-heading mb-3">&#128694; Leg 1 &mdash; Mira Me Hotel &rarr; Ama Lachei &nbsp;&middot;&nbsp; 4.4 km &nbsp;&middot;&nbsp; ~1 hr 4 min</div>

              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;">
                <li>From <strong>Mira Me Boutique Hotel</strong>, head toward <strong>Leokoriou</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Leokoriou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Lepeniotou</strong>.</li>
                <li>Arrive at <strong>Usurum Brunch &amp; Cocktails</strong>, Lepeniotou 19.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="5">
                <li>From <strong>Usurum</strong>, head toward <strong>Ogigou</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Ogigou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Sarri</strong>.</li>
                <li>Arrive at <strong>Sarri</strong>.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="9">
                <li>From <strong>Sarri</strong>, head toward <strong>Kranaou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Ag. Anargiron</strong>.</li>
                <li>Arrive at <strong>Ag. Anargiron</strong>.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="12">
                <li>Head toward <strong>Taki</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Pl. Iroon</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Pallados</strong>.</li>
                <li>Arrive at <strong>Pallados</strong>.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="16">
                <li>Head toward <strong>Miaouli</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Miaouli</strong>.</li>
                <li>Turn <strong>right</strong> to stay on <strong>Miaouli</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Ermou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Pl. Monastirakiou</strong>.</li>
                <li>Take the stairs.</li>
                <li>Turn <strong>left</strong> to stay on <strong>Pl. Monastirakiou</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Areos / Pl. Monastirakiou</strong>.</li>
                <li>Slight <strong>right</strong> onto <strong>Pandrossou</strong>.</li>
                <li>Arrive at <strong>Melas Martinos</strong>, Pandrossou 50.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="26">
                <li>Head toward <strong>Pl. Monastirakiou</strong>.</li>
                <li>Slight <strong>left</strong> onto <strong>Areos / Pl. Monastirakiou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Pl. Monastirakiou</strong>.</li>
                <li>Turn <strong>right</strong> to stay on <strong>Pl. Monastirakiou</strong>.</li>
                <li>Slight <strong>left</strong> to stay on <strong>Pl. Monastirakiou</strong>.</li>
                <li>Take the stairs.</li>
                <li>Turn <strong>left</strong> onto <strong>Ermou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Miaouli</strong>.</li>
                <li>Turn <strong>left</strong> to stay on <strong>Miaouli</strong>.</li>
                <li>Continue onto <strong>Pl. Iroon</strong>.</li>
                <li>Continue onto <strong>Ag. Anargiron</strong>.</li>
                <li>Continue onto <strong>Sachtouri</strong>.</li>
                <li>Slight <strong>left</strong> onto <strong>Evripidou</strong>.</li>
                <li>Slight <strong>right</strong> onto <strong>Pl. Eleftherias</strong>.</li>
                <li>Continue onto <strong>Kolokinthous</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Keramikou</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Iasonos</strong>.</li>
                <li>Arrive at <strong>Breeder Gallery</strong>, Iasonos 45.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="44">
                <li>Head toward <strong>Achilleos</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Achilleos</strong>.</li>
                <li>At <strong>Pl. Karaiskaki</strong>, take the 3rd exit onto <strong>Karolou</strong>.</li>
                <li>Continue onto <strong>Marni</strong>.</li>
                <li>Slight <strong>right</strong> onto <strong>Stournari</strong>.</li>
                <li>Arrive at <strong>Stournari</strong>.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="50">
                <li>Head toward <strong>Tzortz</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Mpotasi</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Koletti</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Themistokleous</strong>.</li>
                <li>Arrive at <strong>Themistokleous</strong>.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="55">
                <li>Head toward <strong>Tzavella</strong>.</li>
                <li>Continue on <strong>Tzavella</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Kallidromiou</strong>.</li>
                <li>&#127919; Arrive at <strong>Ama Lachei</strong>, Kallidromiou 69.</li>
              </ol>

              <v-alert type="warning" variant="tonal" density="compact" class="my-4">
                &#9888; <strong>Note:</strong> Google Maps shows <strong>Kallidromiou</strong> may be closed on Saturdays from 7:00 AM to 5:00 PM. (This is a Thursday &mdash; should be open.)
              </v-alert>

              <v-divider class="my-4"></v-divider>

              <!-- Leg 2 -->
              <div class="benefits-heading mb-3">&#128694; Leg 2 &mdash; Ama Lachei &rarr; Odeon of Herodes Atticus &nbsp;&middot;&nbsp; 5.7 km &nbsp;&middot;&nbsp; ~1 hr 24 min</div>

              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;">
                <li>From <strong>Ama Lachei</strong>, head toward <strong>Efklias</strong>.</li>
                <li>Continue on this stretch; parts of the road may be closed at certain times or days.</li>
                <li>Turn <strong>right</strong> onto <strong>Asklipiou</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Koronis</strong>.</li>
                <li>Take the stairs.</li>
                <li>Turn <strong>right</strong> onto <strong>Nikiforou Ouranou</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Patriarchou Fotiou</strong>.</li>
                <li>Take the stairs.</li>
                <li>Turn <strong>right</strong> onto <strong>Doxapatri</strong>.</li>
                <li>Slight <strong>right</strong> onto <strong>Sarantapichou</strong>.</li>
                <li>Continue straight onto <strong>Ilia Rogkakou</strong>.</li>
                <li>Slight <strong>left</strong> onto <strong>Kleomenous</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Anapiron Polemou</strong>.</li>
                <li>Arrive at <strong>Gagosian</strong>, 22 Anapiron Polemou Street.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="15">
                <li>Head toward <strong>Dinokratous</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Dinokratous</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Fokilidou</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Dimokritou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Solonos</strong>.</li>
                <li>Arrive at <strong>Philos Athens</strong>, Solonos 32.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="21">
                <li>Head toward <strong>Dimokritou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Voukourestiou</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>El. Venizelou / Panepistimiou</strong>.</li>
                <li>Continue onto <strong>Leof. Vasilisis Amalias</strong>.</li>
                <li>Arrive at <strong>Syntagma</strong>.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="26">
                <li>Head toward <strong>Othonos</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Othonos</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Pl. Sintagmatos / EO91</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Mitropoleos</strong>.</li>
                <li>Turn <strong>left</strong> toward <strong>Pandrossou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Pandrossou</strong>.</li>
                <li>Arrive at <strong>Monastiraki</strong>.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="33">
                <li>Head toward <strong>Kirikeioi</strong>.</li>
                <li>Slight <strong>left</strong> onto <strong>Areos / Pl. Monastirakiou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Pl. Monastirakiou</strong>.</li>
                <li>Turn <strong>right</strong> to stay on <strong>Pl. Monastirakiou</strong>.</li>
                <li>Slight <strong>left</strong> to stay on <strong>Pl. Monastirakiou</strong>.</li>
                <li>Take the stairs.</li>
                <li>Turn <strong>left</strong> onto <strong>Ermou</strong>.</li>
                <li>Arrive at <strong>Ermou</strong>.</li>
              </ol>
              <ol class="benefits-list" style="padding-left:1.4rem;line-height:1.9;" start="41">
                <li>Head toward <strong>Ifestou</strong>.</li>
                <li>Turn <strong>left</strong> onto <strong>Ifestou</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Nisou</strong>.</li>
                <li>Continue onto <strong>Vrisakiou</strong>.</li>
                <li><strong>Vrisakiou</strong> turns left and becomes <strong>Pikilis</strong>.</li>
                <li>Turn <strong>right</strong> onto <strong>Dioskouron</strong>.</li>
                <li>Take the stairs.</li>
                <li>Turn <strong>right</strong> onto <strong>Theorias</strong>.</li>
                <li>Turn left.</li>
                <li>Turn right.</li>
                <li>Turn right.</li>
                <li>Turn left.</li>
                <li>Turn left.</li>
                <li>&#127919; Arrive at <strong>Odeon of Herodes Atticus</strong>.</li>
              </ol>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
</script>
