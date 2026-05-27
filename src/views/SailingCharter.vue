<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Charter Overview -->
          <v-card hover elevation="4" class="mb-6 itinerary-card charter-card">
            <v-card-title class="card-header card-header-charter">
              <span class="card-header-icon">&#9973;</span>
              Sailing Charter &mdash; Dodecanese Islands &nbsp;&middot;&nbsp; Jun 13&ndash;20
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="charter-boat mb-4">
                <div class="boat-name">&#9973; Fountaine Pajot Lucia 40</div>
                <div class="boat-specs">
                  <span class="boat-spec">4 cabin / 4 head</span>
                  <span class="boat-spec">A/C + Generator</span>
                  <span class="boat-spec warn">No water maker</span>
                </div>
              </div>

              <v-alert type="info" variant="tonal" class="mb-3" density="compact">
                <strong>&#9973; Flotilla:</strong> 3 boats total &mdash; also skippered by <strong>Luke Eubanks</strong> and <strong>Chris Redmond</strong>
              </v-alert>

              <v-alert type="success" variant="tonal" class="mb-4" density="compact">
                <strong>&#128205; Meet:</strong> Istion Yachting base station &mdash; Rhodes New Marina &mdash; <strong>11:00 AM local time, Sat Jun 13</strong>.<br>
                Get organized &amp; determine if early check-in at 2:30 PM is available.
              </v-alert>

              <div class="charter-dates mb-3">
                <div class="charter-date-item">
                  <span class="charter-date-label">Meet at base</span>
                  <span class="charter-date-value">Sat, Jun 13 &middot; 11:00 AM</span>
                </div>
                <div class="charter-date-item">
                  <span class="charter-date-label">Possible check-in</span>
                  <span class="charter-date-value">Sat, Jun 13 &middot; 2:30 PM</span>
                </div>
                <div class="charter-date-item">
                  <span class="charter-date-label">Return to marina</span>
                  <span class="charter-date-value">Fri, Jun 19 evening</span>
                </div>
                <div class="charter-date-item">
                  <span class="charter-date-label">Depart / turn in</span>
                  <span class="charter-date-value">Sat, Jun 20 &middot; ~9:00 AM</span>
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Charter Company & Base Marina -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-charter">
              <span class="card-header-icon">&#127970;</span>
              Charter Company &amp; Base Marina
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="benefits-heading mb-2">&#127970; Istion Yachting</div>
              <div class="hotel-contact mb-4">
                <div>1 Poseidonos Ave., 174 55, Alimos, Athens, Greece</div>
                <div>&#128222; <a href="tel:+302109811515" class="med-link">+30 210 9811 515</a></div>
                <div>&#128231; <a href="mailto:charter@istion.com" class="med-link">charter@istion.com</a></div>
                <div>&#127758; <a href="https://www.istion.com" target="_blank" rel="noopener" class="med-link">istion.com</a></div>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#9875; Base Marina &mdash; Rhodes New Marina</div>
              <div class="hotel-contact">
                <div>&#128205; Rhodes Marinas, 124 Afstralia Street, Rhodes 85100, Dodecanese Islands, Greece</div>
                <div><strong>Base Manager:</strong> Manolis Lampidonis</div>
                <div>&#128222; <a href="tel:+306972290871" class="med-link">+30 6972 290 871</a></div>
                <div>&#128231; <a href="mailto:charter@istion.com" class="med-link">charter@istion.com</a></div>
                <div>&#127758; <a href="https://www.istion.com/bases/rhodes-charter-base" target="_blank" rel="noopener" class="med-link">istion.com/bases/rhodes-charter-base</a></div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Crew List -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-charter">
              <span class="card-header-icon">&#128101;</span>
              Crew List &mdash; Jun 13&ndash;20, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="crew-boat-label mb-2">&#9973; Lucia 40 &mdash; Fountaine Pajot</div>
              <div class="crew-table mb-4">
                <div class="crew-row crew-header">
                  <span>Name</span>
                  <span>Cell</span>
                  <span>Email</span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Jason Burns</span>
                  <span><a href="tel:+15129631287" class="med-link">512-963-1287</a></span>
                  <span><a href="mailto:jason@outboundsailing.com" class="med-link">jason@outboundsailing.com</a></span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Dawn Price</span>
                  <span><a href="tel:+15128507843" class="med-link">512-850-7843</a></span>
                  <span><a href="mailto:dmprice612@gmail.com" class="med-link">dmprice612@gmail.com</a></span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Joe Price</span>
                  <span><a href="tel:+17039551906" class="med-link">703-955-1906</a></span>
                  <span><a href="mailto:rprice@vt.edu" class="med-link">rprice@vt.edu</a></span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">John Biehn</span>
                  <span><a href="tel:+18302216476" class="med-link">830-221-6476</a></span>
                  <span><a href="mailto:jhbiehn@yahoo.com" class="med-link">jhbiehn@yahoo.com</a></span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Becky Biehn</span>
                  <span><a href="tel:+12106874056" class="med-link">210-687-4056</a></span>
                  <span><a href="mailto:amor_y_paz1962@yahoo.com" class="med-link">amor_y_paz1962@yahoo.com</a></span>
                </div>
                <div class="crew-row crew-row-self">
                  <span class="crew-name">Flint Smith</span>
                  <span><a href="tel:+12103859809" class="med-link">210-385-9809</a></span>
                  <span><a href="mailto:flintsmith@gmail.com" class="med-link">flintsmith@gmail.com</a></span>
                </div>
                <div class="crew-row crew-row-self">
                  <span class="crew-name">Jessica Miller</span>
                  <span><a href="tel:+14158602970" class="med-link">415-860-2970</a></span>
                  <span><a href="mailto:jcmill210@gmail.com" class="med-link">jcmill210@gmail.com</a></span>
                </div>
              </div>

              <div class="crew-boat-label mb-2">&#9973; Lagoon 42</div>
              <div class="crew-table mb-4">
                <div class="crew-row crew-header">
                  <span>Name</span>
                  <span>Cell</span>
                  <span>Email</span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Chris Redmond</span>
                  <span><a href="tel:+18325150818" class="med-link">832-515-0818</a></span>
                  <span><a href="mailto:crredmond@gmail.com" class="med-link">crredmond@gmail.com</a></span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Dave Cosen</span>
                  <span><a href="tel:+12149144051" class="med-link">214-914-4051</a></span>
                  <span><a href="mailto:dave_coSen@yahoo.com" class="med-link">dave_coSen@yahoo.com</a></span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Christa Jones</span>
                  <span><a href="tel:+18173749863" class="med-link">817-374-9863</a></span>
                  <span><a href="mailto:christafish79@gmail.com" class="med-link">christafish79@gmail.com</a></span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Patrick Dolan</span>
                  <span><a href="tel:+19402069735" class="med-link">940-206-9735</a></span>
                  <span><a href="mailto:dolanp@gmail.com" class="med-link">dolanp@gmail.com</a></span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Diana Dolan</span>
                  <span><a href="tel:+19402069703" class="med-link">940-206-9703</a></span>
                  <span><a href="mailto:dianacdolan@gmail.com" class="med-link">dianacdolan@gmail.com</a></span>
                </div>
              </div>

              <div class="crew-boat-label mb-2">&#9973; Lagoon 45</div>
              <div class="crew-table">
                <div class="crew-row crew-header">
                  <span>Name</span>
                  <span>Cell</span>
                  <span>Email</span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Luke Eubanks</span>
                  <span><a href="tel:+15123480579" class="med-link">512-348-0579</a></span>
                  <span><a href="mailto:eubanks.joshua@gmail.com" class="med-link">eubanks.joshua@gmail.com</a></span>
                </div>
                <div class="crew-row">
                  <span class="crew-name">Eliza Eubanks</span>
                  <span><a href="tel:+15126630738" class="med-link">512-663-0738</a></span>
                  <span><a href="mailto:eliza.eubanks8@gmail.com" class="med-link">eliza.eubanks8@gmail.com</a></span>
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Daily Anchorage Route -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-charter">
              <span class="card-header-icon">&#128205;</span>
              Daily Anchorage Route &mdash; ~155 NM total
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="warning" variant="tonal" class="mb-4" density="compact">
                <strong>&#9888; Plan Notice:</strong> This is a planned itinerary &mdash; reality may change. As sailors we remain adaptable.
                One stop (<strong>West Symi &mdash; Emilianos</strong>) is a <strong>REMOTE anchorage</strong> with <strong>zero facilities ashore</strong>.
              </v-alert>

              <div class="sail-day">
                <div class="sail-day-header">
                  <span class="sail-day-date">Jun 13 &middot; Sat</span>
                  <span class="sail-day-island">&#127960; Rhodes New Marina</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Meet at Istion Yachting base station at <strong>11:00 AM</strong>. Board, get organized, provision &amp; settle in.</div>
                  <div class="sail-fact sail-coords">&#127759; 36&deg;25&prime;58&Prime;N &nbsp; 28&deg;14&prime;21&Prime;E</div>
                  <div class="sail-fact island-fact">&#128218; Home to the Colossus of Rhodes, one of the Seven Wonders of the Ancient World, and a UNESCO-listed medieval Old Town.</div>
                </div>
              </div>

              <div class="sail-day">
                <div class="sail-day-header">
                  <span class="sail-day-date">Jun 14 &middot; Sun</span>
                  <span class="sail-day-island">&#127964; East Symi</span>
                  <span class="sail-nm">28&ndash;33 NM</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Sail northwest from Rhodes to Symi&rsquo;s east side.</div>
                  <div class="sail-fact sail-coords">&#127759; 36&deg;36&prime;54&Prime;N &nbsp; 27&deg;51&prime;30&Prime;E</div>
                  <div class="sail-fact island-fact">&#128218; Known for its stunning neoclassical pastel houses stacked up the hillside and a centuries-old sponge diving tradition.</div>
                </div>
              </div>

              <div class="sail-day sail-day-remote">
                <div class="sail-day-header">
                  <span class="sail-day-date">Jun 15 &middot; Mon</span>
                  <span class="sail-day-island">&#127964; West Symi &mdash; Emilianos</span>
                  <span class="sail-nm">12 NM</span>
                  <span class="sail-remote-badge">REMOTE</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Short sail to the remote western anchorage at Emilianos. <strong>Zero facilities ashore &mdash; be fully self-sufficient.</strong></div>
                  <div class="sail-fact sail-coords">&#127759; 36&deg;36&prime;27&Prime;N &nbsp; 27&deg;46&prime;35&Prime;E</div>
                  <div class="sail-fact island-fact">&#128218; A secluded bay on Symi&rsquo;s wild western coast &mdash; crystal water, dramatic cliffs, complete solitude.</div>
                </div>
              </div>

              <div class="sail-day">
                <div class="sail-day-header">
                  <span class="sail-day-date">Jun 16 &middot; Tue</span>
                  <span class="sail-day-island">&#127755; Nisyros &mdash; Pali</span>
                  <span class="sail-nm">38 NM</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Longer day sail west to the volcanic island of Nisyros, anchoring at Pali.</div>
                  <div class="sail-fact sail-coords">&#127759; 36&deg;37&prime;10&Prime;N &nbsp; 27&deg;10&prime;16&Prime;E</div>
                  <div class="sail-fact island-fact">&#128218; One of Greece&rsquo;s few active volcanic islands &mdash; you can walk down into the Stefanos crater and smell the sulfur vents. Pali is the fishing village on the north coast.</div>
                </div>
              </div>

              <div class="sail-day">
                <div class="sail-day-header">
                  <span class="sail-day-date">Jun 17 &middot; Wed</span>
                  <span class="sail-day-island">&#127964; Tilos &mdash; Lividia</span>
                  <span class="sail-nm">18 NM</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Sail southeast to tranquil Tilos, anchoring in the bay of Lividia.</div>
                  <div class="sail-fact sail-coords">&#127759; 36&deg;24&prime;54&Prime;N &nbsp; 27&deg;23&prime;15&Prime;E</div>
                  <div class="sail-fact island-fact">&#128218; The first Greek island to ban hunting entirely. Lividia is the main bay &mdash; calm, clear water with easy access to the village.</div>
                </div>
              </div>

              <div class="sail-day">
                <div class="sail-day-header">
                  <span class="sail-day-date">Jun 18 &middot; Thu</span>
                  <span class="sail-day-island">&#127964; East Khalki</span>
                  <span class="sail-nm">19 NM</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Sail east to Khalki, anchoring on the island&rsquo;s eastern side.</div>
                  <div class="sail-fact sail-coords">&#127759; 36&deg;13&prime;15&Prime;N &nbsp; 27&deg;36&prime;50&Prime;E</div>
                  <div class="sail-fact island-fact">&#128218; Khalki (Halki) is one of the smallest inhabited Dodecanese islands with just a few hundred residents &mdash; unspoiled, car-free, and wonderfully quiet.</div>
                </div>
              </div>

              <div class="sail-day">
                <div class="sail-day-header">
                  <span class="sail-day-date">Jun 19 &middot; Fri</span>
                  <span class="sail-day-island">&#127960; Rhodes New Marina (return)</span>
                  <span class="sail-nm">35 NM</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact">Longer sail back to Rhodes New Marina. Arrive by evening.</div>
                  <div class="sail-fact sail-coords">&#127759; 36&deg;25&prime;58&Prime;N &nbsp; 28&deg;14&prime;21&Prime;E</div>
                </div>
              </div>

              <div class="sail-day sail-day-last">
                <div class="sail-day-header">
                  <span class="sail-day-date">Jun 20 &middot; Sat</span>
                  <span class="sail-day-island">&#128274; Depart &amp; check off boat</span>
                </div>
                <div class="sail-day-body">
                  <div class="sail-fact"><strong>~9:00 AM</strong> &mdash; Depart and check off boat with Istion Yachting.</div>
                  <div class="sail-fact sail-coords">&#127759; 36&deg;25&prime;58&Prime;N &nbsp; 28&deg;14&prime;21&Prime;E</div>
                </div>
              </div>

              <div class="sail-total mt-3">
                &#9875; Approximate total sailing distance: ~155 NM
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
