<template>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">

            <!-- Header Card -->
            <v-card class="text-center pa-6 mb-6 header-card" elevation="8">
              <div class="trip-icon mb-3">&#9973;</div>
              <v-card-title class="header-names">
                Jessica Miller &amp; John Smith
              </v-card-title>
              <v-card-subtitle class="subtitle-text mt-1 mb-2">
                &#9875; Greece Sailing &amp; Italy Vacation &nbsp;&middot;&nbsp; June 2026 &#9875;
              </v-card-subtitle>

              <v-card-text class="contact-text">
                <p><strong>Primary:</strong> +1 210 385-9809 &nbsp;<span class="contact-note">(WhatsApp available)</span></p>
                <p><strong>Secondary:</strong> +1 415 860-2970</p>
                <p><strong>Email:</strong> flintsmith@gmail.com</p>
              </v-card-text>
            </v-card>

            <h2 class="text-h4 text-center section-title mb-6">
              &#9992; Itinerary &#9992;
            </h2>

            <!-- Outbound Flights -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header">
                <span class="card-header-icon">&#9992;</span>
                Outbound Flights &mdash; Mon, Jun 01, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Flight 1 of 2 -->
                <div class="flight-segment mb-1">
                  <div class="flight-label">
                    <span class="flight-num">Flight 1 of 2 &nbsp;&middot;&nbsp; UA1449</span>
                    <span class="flight-class">United Economy (YN)</span>
                  </div>
                  <div class="flight-route mt-3">
                    <div class="route-endpoint">
                      <div class="route-time">07:05 AM</div>
                      <div class="route-iata">AUS</div>
                      <div class="route-city">Austin, TX, US</div>
                      <div class="route-date">Mon, Jun 01</div>
                    </div>
                    <div class="route-middle">
                      <span class="route-arrow-plane">&#9992;</span>
                      <div class="route-arrow-line"></div>
                    </div>
                    <div class="route-endpoint text-right">
                      <div class="route-time">11:50 AM</div>
                      <div class="route-iata">EWR</div>
                      <div class="route-city">Newark, NJ / New York, NY, US</div>
                      <div class="route-date">Mon, Jun 01</div>
                    </div>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>

                <!-- Flight 2 of 2 -->
                <div class="flight-segment mb-1">
                  <div class="flight-label">
                    <span class="flight-num">Flight 2 of 2 &nbsp;&middot;&nbsp; UA124</span>
                    <span class="flight-class premium">United Premium Plus (ON)</span>
                  </div>
                  <div class="flight-route mt-3">
                    <div class="route-endpoint">
                      <div class="route-time">03:55 PM</div>
                      <div class="route-iata">EWR</div>
                      <div class="route-city">Newark, NJ / New York, NY, US</div>
                      <div class="route-date">Mon, Jun 01</div>
                    </div>
                    <div class="route-middle">
                      <span class="route-arrow-plane">&#9992;</span>
                      <div class="route-arrow-line"></div>
                    </div>
                    <div class="route-endpoint text-right">
                      <div class="route-time">08:10 AM</div>
                      <div class="route-iata">ATH</div>
                      <div class="route-city">Athens, GR</div>
                      <div class="route-date">Tue, Jun 02</div>
                    </div>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>

                <!-- Traveler Details -->
                <div class="traveler-section">
                  <h4 class="traveler-heading mb-3">Traveler Details</h4>

                  <!-- MILLER/JESSICA -->
                  <v-card variant="outlined" class="traveler-card mb-3 pa-3">
                    <div class="traveler-name mb-2">MILLER / JESSICA</div>
                    <div class="traveler-detail">
                      <span class="detail-label">eTicket:</span>
                      <span class="detail-value">0162390534026</span>
                    </div>
                    <div class="seat-row mt-2">
                      <span class="detail-label">Seats:</span>
                      <span class="seat-badge">AUS&ndash;EWR&nbsp;20E</span>
                      <span class="seat-badge">EWR&ndash;ATH&nbsp;20C</span>
                    </div>
                    <div class="upgrade-row mt-2">
                      <v-chip size="small" color="#C1440E" variant="elevated" class="upgrade-chip">
                        Economy Plus Seat
                      </v-chip>
                      <span class="upgrade-segment">AUS&ndash;EWR</span>
                      <span class="upgrade-ticket">(0164384719526)</span>
                    </div>
                  </v-card>

                  <!-- SMITH/JOHN -->
                  <v-card variant="outlined" class="traveler-card pa-3">
                    <div class="traveler-name mb-2">SMITH / JOHN</div>
                    <div class="traveler-detail">
                      <span class="detail-label">eTicket:</span>
                      <span class="detail-value">0162390534025</span>
                    </div>
                    <div class="traveler-detail mt-1">
                      <span class="detail-label">Frequent Flyer:</span>
                      <span class="ff-badge">UA&#8209;XXXXX327 Member</span>
                    </div>
                    <div class="seat-row mt-2">
                      <span class="detail-label">Seats:</span>
                      <span class="seat-badge">AUS&ndash;EWR&nbsp;20F</span>
                      <span class="seat-badge">EWR&ndash;ATH&nbsp;20A</span>
                    </div>
                    <div class="upgrade-row mt-2">
                      <v-chip size="small" color="#C1440E" variant="elevated" class="upgrade-chip">
                        Economy Plus Seat
                      </v-chip>
                      <span class="upgrade-segment">AUS&ndash;EWR</span>
                      <span class="upgrade-ticket">(0164384719527)</span>
                    </div>
                  </v-card>

                </div>

                <div class="mt-4" style="text-align:right;">
                  <router-link to="/ewr-layover" style="text-decoration:none;">
                    <v-btn color="blue-darken-3" variant="tonal" size="small">
                      &#9992; EWR Layover Guide &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 02 — MiraMe Athens Boutique Hotel -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-hotel">
                <span class="card-header-icon">&#127968;</span>
                Athens &mdash; MiraMe Athens Boutique Hotel &mdash; House of Gastronomy
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="hotel-meta mb-3">
                  <span class="hotel-dates">Tue, Jun 02 &ndash; Fri, Jun 05, 2026</span>
                  <span class="hotel-nights">3 nights &middot; 2 guests</span>
                </div>

                <div class="hotel-room mb-4">
                  <span class="room-type-icon">&#127953;</span>
                  <span class="room-type-text">Superior Double Room, Balcony, City View &mdash; 1 King bed</span>
                </div>

                <!-- Check-in / Check-out -->
                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Check-in</div>
                    <div class="checkin-time">3:00 PM</div>
                    <div class="checkin-date">Tue, Jun 02</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Check-out</div>
                    <div class="checkin-time">11:00 AM</div>
                    <div class="checkin-date">Fri, Jun 05</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Confirmation:</span>
                  <span class="confirm-code">2430161022</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Trip ID:</span>
                  <span style="font-family:'Courier New',monospace;color:#333;">1015733282</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="hotel-contact">
                  <div><span class="detail-label">&#128205; Address:</span> Ermou 118, Athens 10554, GR</div>
                </div>

                <div class="mt-4" style="text-align:right;">
                  <router-link to="/athens-hotel-transport" style="text-decoration:none;">
                    <v-btn color="teal-darken-2" variant="tonal" size="small">
                      &#128652; Getting Here &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 02 — Walking Distance: Local Picks -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 55%,#43A047 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#128694;</span>
                Athens Walking Distance &mdash; Local Picks &nbsp;&middot;&nbsp; Tue, Jun 02, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Lunch -->
                <div class="benefits-heading mb-2">&#127860; Lunch</div>
                <div class="confirm-row mb-1">
                  <a href="https://www.karamanlidika.gr" target="_blank" rel="noopener" class="med-link" style="font-weight:600;">Karamanlidika tou Fani &#8599;</a>
                </div>
                <div class="confirm-row mb-3">
                  <span style="font-size:0.82rem;opacity:0.75;">Best atmospheric old Greek food</span>
                </div>

                <!-- Dinner -->
                <div class="benefits-heading mb-2">&#127869; Dinner</div>
                <div class="confirm-row mb-1">
                  <a href="https://www.google.com/maps/search/Nissos+Seafood+Tavern+Athens" target="_blank" rel="noopener" class="med-link" style="font-weight:600;">Nissos Seafood Tavern &#8599;</a>
                  <span style="margin-left:8px;font-size:0.82rem;opacity:0.75;">Opens 5:00 PM</span>
                </div>
                <div class="mb-3"></div>

                <!-- Art -->
                <div class="benefits-heading mb-2">&#127912; Art Gallery</div>
                <div class="confirm-row mb-3">
                  <a href="https://www.google.com/maps/search/Mon+Coin+Studio+Athens" target="_blank" rel="noopener" class="med-link" style="font-weight:600;">Mon Coin Studio &#8599;</a>
                </div>

                <!-- Cocktails -->
                <div class="benefits-heading mb-2">&#127864; Cocktails &nbsp;<span style="font-weight:400;font-size:0.82rem;opacity:0.75;">5 min walk from hotel</span></div>
                <div class="confirm-row mb-3">
                  <a href="https://aforathens.com" target="_blank" rel="noopener" class="med-link" style="font-weight:600;">A for Athens &#8599;</a>
                </div>

                <!-- Optional -->
                <v-divider class="my-3"></v-divider>
                <div class="benefits-heading mb-2">&#127981; Optional &nbsp;<span style="font-weight:400;font-size:0.82rem;opacity:0.75;">~30 min walk from hotel</span></div>
                <div class="confirm-row mb-1" style="align-items:flex-start;">
                  <span class="detail-label" style="min-width:90px;">Museum:</span>
                  <a href="https://www.emst.gr/en" target="_blank" rel="noopener" class="med-link" style="font-weight:600;">National Museum of Contemporary Art Athens (ΕΜΣΤ) &#8599;</a>
                </div>
                <div class="confirm-row mb-1" style="align-items:flex-start;margin-top:4px;">
                  <span class="detail-label" style="min-width:90px;"></span>
                  <span style="font-size:0.82rem;opacity:0.75;">Leof. Andrea Siggrou 51–53, Athina 117 43</span>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 03 — Athens Walking Tour (ToursByLocals) -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#9C27B0 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127981;</span>
                Athens Walking Tour &mdash; Acropolis &amp; Museum &nbsp;&middot;&nbsp; Wed, Jun 03, 2026
              </v-card-title>
              <v-card-text class="pa-4">

               

                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Time</div>
                    <div class="checkin-time">4:00 PM</div>
                    <div class="checkin-date">Wed, Jun 03</div>
                  </div>
                  <div class="checkin-divider">&#9201;</div>
                  <div class="checkin-block">
                    <div class="checkin-label">Duration</div>
                    <div class="checkin-time">3 hours</div>
                  </div>
                  <div class="checkin-divider">&#128101;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Guests</div>
                    <div class="checkin-time">2 people</div>
                  </div>
                </div>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Tour:</span>
                  <span>Acropolis, Acropolis Museum &amp; Theatre of Dionysos</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Guide:</span>
                  <span>Maria S. &nbsp;&middot;&nbsp; ToursByLocals</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Booking Ref:</span>
                  <span class="confirm-code ferry-code">#CQZDHZ</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Total:</span>
                  <span style="font-weight:700;color:#C62828;">$491.91 USD &mdash; Balance due on acceptance</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Meeting Point:</span>
                  <span>43 Rovertou Galli, Athina 117 42</span>
                </div>

                <v-alert type="success" variant="tonal" density="compact" class="mb-4">
                  &#10003; <strong>Acropolis &amp; Museum tickets confirmed</strong> &mdash; Booking ID <strong>31713020</strong> &nbsp;&middot;&nbsp; Jun 03 &nbsp;&middot;&nbsp; 10:00 AM &nbsp;&middot;&nbsp; 2 Adults
                </v-alert>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Tickets:</span>
                  <span>Combo: Acropolis Parthenon + Acropolis Museum &nbsp;&middot;&nbsp; via Headout</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Booking ID:</span>
                  <span class="confirm-code ferry-code">31713020</span>
                </div>

                <v-alert type="info" variant="tonal" density="compact" class="mb-4">
                  &#128241; <strong>Use the Headout app</strong> for offline ticket access &amp; real-time updates. Bring earphones for the audio guide.
                </v-alert>

                <div class="mt-2" style="text-align:right;">
                  <router-link to="/athens-walking-tour" style="text-decoration:none;">
                    <v-btn color="purple-darken-3" variant="tonal" size="small">
                      Full Details &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 03 — Dinner at Aleria -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#4E342E 0%,#6D4C41 55%,#8D6E63 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127869;</span>
                Dinner &mdash; Aleria Restaurant &nbsp;&middot;&nbsp; Wed, Jun 03, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Time</div>
                    <div class="checkin-time">9:00 PM</div>
                    <div class="checkin-date">Wed, Jun 03</div>
                  </div>
                  <div class="checkin-divider">&#127869;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Guests</div>
                    <div class="checkin-time">2 people</div>
                  </div>
                </div>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Reservation:</span>
                  <span>Smith Flint</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Address:</span>
                  <span>57 Megalou Alexandrou str., 104 35, Metaxourgio &mdash; Athens</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Phone:</span>
                  <span>210 522 2633</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Email:</span>
                  <span>info@aleria.gr</span>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 04 — Athens Walking Day & Blade Runner Live -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#128694;</span>
                Athens Walking Day &amp; Blade Runner Live &mdash; Thu, Jun 04, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Walk Start</div>
                    <div class="checkin-time">Morning</div>
                    <div class="checkin-date">Thu, Jun 04</div>
                  </div>
                  <div class="checkin-divider">&#128694;</div>
                  <div class="checkin-block">
                    <div class="checkin-label">Distance</div>
                    <div class="checkin-time">~10.1 km</div>
                  </div>
                  <div class="checkin-divider">&#127916;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Evening</div>
                    <div class="checkin-time">9:00 PM</div>
                    <div class="checkin-date">Blade Runner Live</div>
                  </div>
                </div>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Route:</span>
                  <span>Mira Me Hotel &rarr; Ama Lachei &rarr; Odeon of Herodes Atticus</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Walk Time:</span>
                  <span>~2 hr 28 min total &nbsp;&middot;&nbsp; 2 legs via Monastiraki &amp; Exarchia</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Evening:</span>
                  <span style="font-weight:700;color:#C62828;">Blade Runner (The Final Cut) &mdash; Vangelis score live by The Avex Ensemble</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Tickets:</span>
                  <span style="font-weight:600;color:#388E3C;">&#10003; Confirmed &mdash; 2 tickets &nbsp;&middot;&nbsp; &euro;70.00 paid &nbsp;&middot;&nbsp; Order #3883813065372609</span>
                </div>

                <v-alert type="warning" variant="tonal" density="compact" class="mb-3">
                  &#128336; <strong>Arrive at Odeon by 8:15 PM</strong> &mdash; gates close at 9:00 PM. No high heels. Bottled water only.
                </v-alert>

                <div class="mt-2" style="text-align:right;">
                  <router-link to="/athens-walking-day" style="text-decoration:none;">
                    <v-btn color="indigo-darken-2" variant="tonal" size="small">
                      Full Details &amp; Directions &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 05 — Transfer: MiraMe Hotel → Rafina Port -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#37474F 0%,#455A64 55%,#546E7A 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#128652;</span>
                Transfer &mdash; Hotel &rarr; Rafina Port &nbsp;&middot;&nbsp; Fri, Jun 05, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Pickup</div>
                    <div class="checkin-time">11:00 AM</div>
                    <div class="checkin-date">Fri, Jun 05</div>
                  </div>
                  <div class="checkin-divider">&#128652;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Drop-Off</div>
                    <div class="checkin-time">Rafina Port</div>
                  </div>
                </div>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Order:</span>
                  <span class="confirm-code ferry-code">#w-6457607-1</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">From:</span>
                  <span>MiraMe Athens Boutique Hotel, 118 Ermou, Athens 10554</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">To:</span>
                  <span>Rafina Port</span>
                </div>

                <v-alert type="info" variant="tonal" density="compact" class="mb-3">
                  &#128101; <strong>Meeting Point:</strong> Your driver will be waiting <strong>outside the hotel</strong> at the scheduled pickup time.
                </v-alert>

                <div class="mt-2" style="text-align:right;">
                  <a href="/welcome_receipt_KMvgE4EW.pdf" target="_blank" rel="noopener" style="text-decoration:none;">
                    <v-btn color="blue-grey-darken-2" variant="tonal" size="small">
                      &#128196; View Receipt PDF &nbsp;&#8250;
                    </v-btn>
                  </a>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 05 — Ferry: Rafina → Mykonos -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-ferry">
                <span class="card-header-icon">&#9973;</span>
                Ferry &mdash; Rafina &rarr; Mykonos &nbsp;&middot;&nbsp; Fri, Jun 05, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Route -->
                <div class="flight-route mb-4">
                  <div class="route-endpoint">
                    <div class="route-time">2:20 PM</div>
                    <div class="route-iata ferry-iata">RAF</div>
                    <div class="route-city">Rafina, GR</div>
                    <div class="route-date">Fri, Jun 05</div>
                  </div>
                  <div class="route-middle">
                    <span class="route-arrow-plane">&#9973;</span>
                    <div class="route-arrow-line ferry-line"></div>
                  </div>
                  <div class="route-endpoint text-right">
                    <div class="route-time">5:00 PM</div>
                    <div class="route-iata ferry-iata">MYK</div>
                    <div class="route-city">Mykonos, GR</div>
                    <div class="route-date">Fri, Jun 05</div>
                  </div>
                </div>

                <div class="ferry-vessel mb-4">
                  <span class="vessel-icon">&#128674;</span>
                  <span class="vessel-name">SUPERRUNNER JET</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Booking details -->
                <div class="confirm-row mb-1">
                  <span class="detail-label">Operator:</span>
                  <span style="font-weight:600;">SeaJets</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Booking Ref:</span>
                  <span class="confirm-code ferry-code">1112QCMBH</span>
                </div>
                <div class="confirm-row mb-2">
                  <span class="detail-label">Order ID:</span>
                  <span class="trip-id" style="font-family:'Courier New',monospace;color:#333;">1112QCMBH</span>
                  <span class="trip-id">&middot; Reserved 03/04/2026</span>
                </div>

                <div class="mb-3" style="text-align:right;">
                  <a href="https://www.seajets.com/en/my-bookings/" target="_blank" rel="noopener" style="text-decoration:none;">
                    <v-btn color="cyan-darken-3" variant="tonal" size="small">
                      &#9973; SeaJets Reservation &nbsp;&#8250;
                    </v-btn>
                  </a>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Passengers -->
                <div class="benefits-heading mb-2">&#128100; Passengers</div>
                <div class="passenger-table">
                  <div class="passenger-row passenger-header">
                    <span>Name</span>
                    <span>Nationality</span>
                    <span>Type</span>
                    <span>Cabin</span>
                  </div>
                  <div class="passenger-row">
                    <span class="pax-name">SMITH JOHN FLINT</span>
                    <span>United States</span>
                    <span>Adult &middot; Male</span>
                    <span class="seat-badge">SLV</span>
                  </div>
                  <div class="passenger-row">
                    <span class="pax-name">MILLER JESSICA</span>
                    <span>United States</span>
                    <span>Adult &middot; Female</span>
                    <span class="seat-badge">SLV</span>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Online Check-in:</span>
                  <span>Use Order ID &amp; phone to check in</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Order ID:</span>
                  <span class="confirm-code ferry-code">1112QCMBH</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Phone:</span>
                  <span class="ferry-code">0012103859809</span>
                </div>

                <a href="https://webcheckin.seajets.com" target="_blank" rel="noopener" style="text-decoration:none;display:block;text-align:right;">
                  <v-btn color="blue-darken-3" variant="elevated" size="small">
                    &#9989; Online Check-In &nbsp;&rarr;
                  </v-btn>
                </a>

              </v-card-text>
            </v-card>

            <!-- Jun 05 — Kouros Hotel & Suites, Mykonos -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-hotel">
                <span class="card-header-icon">&#127968;</span>
                Mykonos &mdash; Kouros Hotel &amp; Suites
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="hotel-meta mb-3">
                  <span class="hotel-dates">Fri, Jun 05 &ndash; Mon, Jun 08, 2026</span>
                  <span class="hotel-nights">3 nights &middot; 2 guests</span>
                </div>

                <div class="hotel-room mb-4">
                  <span class="room-type-icon">&#127953;</span>
                  <span class="room-type-text">Deluxe Sea View Suite &mdash; 2 Twin or 1 Queen bed</span>
                </div>

                <!-- Check-in / Check-out -->
                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Check-in</div>
                    <div class="checkin-time">3:00 PM</div>
                    <div class="checkin-date">Fri, Jun 05</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Check-out</div>
                    <div class="checkin-time">11:00 AM</div>
                    <div class="checkin-date">Mon, Jun 08</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Confirmation -->
                <div class="confirm-row mb-3">
                  <span class="detail-label">Confirmation:</span>
                  <span class="confirm-code">SAB266432734</span>
                  <span class="trip-id">Trip ID: 1015727541</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Cardmember Benefits -->
                <div class="benefits-heading mb-2">&#9733; Cardmember Benefits</div>
                <ul class="benefits-list">
                  <li>&#9749; Daily breakfast for 2</li>
                  <li>&#128181; $100 property credit <span class="benefit-note">(applied once; not valid on room rate, taxes, fees or gratuities)</span></li>
                  <li>&#127381; Welcome amenity</li>
                  <li>&#128246; Wi-Fi included</li>
                </ul>

                <v-divider class="my-3"></v-divider>

                <!-- Address & Contact -->
                <div class="hotel-contact">
                  <div><span class="detail-label">&#128205; Address:</span> Tagoo 0, Mikonos 846 00, Greece</div>
                  <div><span class="detail-label">&#128222; Phone:</span> <a href="tel:+302289025381" class="med-link">+30 2289 025381</a></div>
                  <div><span class="detail-label">&#127758; Website:</span> <a href="https://www.kouroshotelmykonos.gr" target="_blank" rel="noopener" class="med-link">kouroshotelmykonos.gr</a></div>
                </div>

                <div class="mt-3" style="text-align:right;">
                  <router-link to="/kouros-transport" style="text-decoration:none;">
                    <v-btn color="blue-grey-darken-2" variant="tonal" size="small">
                      Getting Here &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 06 — Explore Mykonos Town -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#006064 0%,#00838F 55%,#00ACC1 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127958;</span>
                Explore Mykonos Town (Chora) &nbsp;&middot;&nbsp; Sat, Jun 06, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Morning -->
                <div class="benefits-heading mb-2">&#128694; 11:30 AM &mdash; Chora Walk</div>
                <div class="confirm-row mb-1" style="align-items:flex-start;">
                  <span class="detail-label" style="min-width:110px;">Highlights:</span>
                  <span>Little Venice &nbsp;&middot;&nbsp; Matogianni Street &nbsp;&middot;&nbsp; The Windmills &nbsp;&middot;&nbsp; tiny white alleyways &nbsp;&middot;&nbsp; hidden churches &nbsp;&middot;&nbsp; luxury boutiques</span>
                </div>

                <div class="mb-3"></div>

                <!-- Shopping -->
                <div class="benefits-heading mb-2">&#128717; Best Shopping Streets</div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Matogianni</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Enoplon Dinameon</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Kalogera</span>
                </div>

                <!-- Lunch -->
                <div class="benefits-heading mb-2">&#127860; Best Authentic Lunch</div>
                <div class="confirm-row mb-3">
                  <a href="https://www.google.com/maps/search/To+Maereio+Mykonos" target="_blank" rel="noopener" class="med-link" style="font-weight:600;">To Maereio &#8599;</a>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Beach -->
                <div class="benefits-heading mb-2">&#127774; 3:00 PM &mdash; Psarou Beach + Nammos</div>
                <div class="confirm-row mb-3">
                  <a href="https://www.nammos.gr" target="_blank" rel="noopener" class="med-link" style="font-weight:600;">Nammos Beach Club &#8599;</a>
                </div>

                <!-- Sunset -->
                <div class="benefits-heading mb-2">&#127751; 6:45 PM &mdash; Sunset Cocktails</div>
                <div class="confirm-row mb-3">
                  <a href="https://www.google.com/maps/search/180+Sunset+Bar+Mykonos" target="_blank" rel="noopener" class="med-link" style="font-weight:600;">180&ordm; Sunset Bar &#8599;</a>
                  <span style="margin-left:8px;font-size:0.82rem;opacity:0.75;">Best choice</span>
                </div>

                <!-- Dinner -->
                <div class="benefits-heading mb-2">&#127869; Dinner</div>
                <div class="confirm-row mb-3">
                  <span style="opacity:0.75;">TBD</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Cavo Paradiso confirmed -->
                <v-alert type="success" variant="tonal" density="compact" class="mb-3">
                  &#10003; <strong>Cavo Paradiso &mdash; Table Confirmed</strong> &mdash; PRFX04 &nbsp;&middot;&nbsp; 2 guests &nbsp;&middot;&nbsp; 00:20 (early Jun 07) &nbsp;&middot;&nbsp; &euro;300 balance due
                </v-alert>

                <div class="mt-2" style="text-align:right;">
                  <router-link to="/cavo-paradiso" style="text-decoration:none;">
                    <v-btn color="indigo-darken-3" variant="tonal" size="small">
                      Full Details &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 07 — Mykonos Day -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#004D40 0%,#00695C 55%,#00897B 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127958;</span>
                Mykonos &nbsp;&middot;&nbsp; Sun, Jun 07, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <v-alert type="warning" variant="tonal" density="compact" class="mb-2">
                  &#9203; <strong>Pending:</strong> Cavo Tagoo &mdash; Pool evening experience (floating beds) &mdash; €200 minimum
                </v-alert>

              </v-card-text>
            </v-card>

            <!-- Jun 08 — Ferry: Mykonos → Santorini -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-ferry">
                <span class="card-header-icon">&#9973;</span>
                Ferry &mdash; Mykonos &rarr; Santorini &nbsp;&middot;&nbsp; Mon, Jun 08, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Route -->
                <div class="flight-route mb-4">
                  <div class="route-endpoint">
                    <div class="route-time">9:40 AM</div>
                    <div class="route-iata ferry-iata">MYK</div>
                    <div class="route-city">Mykonos, GR</div>
                    <div class="route-date">Mon, Jun 08</div>
                  </div>
                  <div class="route-middle">
                    <span class="route-arrow-plane">&#9973;</span>
                    <div class="route-arrow-line ferry-line"></div>
                  </div>
                  <div class="route-endpoint text-right">
                    <div class="route-time">12:05 PM</div>
                    <div class="route-iata ferry-iata">JTR</div>
                    <div class="route-city">Santorini (Thira), GR</div>
                    <div class="route-date">Mon, Jun 08</div>
                  </div>
                </div>

                <div class="ferry-vessel mb-4">
                  <span class="vessel-icon">&#128674;</span>
                  <span class="vessel-name">SUPERJET</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Booking details -->
                <div class="confirm-row mb-1">
                  <span class="detail-label">Booking Ref:</span>
                  <span class="confirm-code ferry-code">1112QCMXX</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Order ID:</span>
                  <span class="trip-id" style="font-family:'Courier New',monospace;color:#333;">1112QCMXX</span>
                  <span class="trip-id">&middot; Reserved 03/04/2026</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Passengers -->
                <div class="benefits-heading mb-2">&#128100; Passengers</div>
                <div class="passenger-table">
                  <div class="passenger-row passenger-header">
                    <span>Name</span>
                    <span>Nationality</span>
                    <span>Type</span>
                    <span>Cabin</span>
                  </div>
                  <div class="passenger-row">
                    <span class="pax-name">SMITH JOHN FLINT</span>
                    <span>United States</span>
                    <span>Adult &middot; Male</span>
                    <span class="seat-badge">SLV</span>
                  </div>
                  <div class="passenger-row">
                    <span class="pax-name">MILLER JESSICA</span>
                    <span>United States</span>
                    <span>Adult &middot; Female</span>
                    <span class="seat-badge">SLV</span>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="mt-2" style="text-align:right;">
                  <a href="https://webcheckin.seajets.com" target="_blank" rel="noopener" style="text-decoration:none;">
                    <v-btn color="teal-darken-2" variant="tonal" size="small">
                      &#10003; Online Check-In &rarr;
                    </v-btn>
                  </a>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 08 — Aigialos Luxury Traditional Settlement, Santorini -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-hotel">
                <span class="card-header-icon">&#127968;</span>
                Santorini &mdash; Aigialos Luxury Traditional Settlement
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="hotel-meta mb-3">
                  <span class="hotel-dates">Mon, Jun 08 &ndash; Wed, Jun 10, 2026</span>
                  <span class="hotel-nights">2 nights &middot; 2 guests</span>
                  <span class="hotel-nights" style="background:#FFF3E0;border-color:#FFAB91;color:#BF360C;">Non-refundable</span>
                </div>

                <div class="hotel-room mb-4">
                  <span class="room-type-icon">&#127953;</span>
                  <span class="room-type-text">Authentic Santorinia Residences &mdash; 1 Queen and 1 Twin Sofa bed</span>
                </div>

                <!-- Check-in / Check-out -->
                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Check-in</div>
                    <div class="checkin-time">3:00 PM</div>
                    <div class="checkin-date">Mon, Jun 08</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Check-out</div>
                    <div class="checkin-time">11:00 AM</div>
                    <div class="checkin-date">Wed, Jun 10</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Confirmation:</span>
                  <span class="confirm-code">2430138709</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Trip ID:</span>
                  <span class="trip-id" style="font-family:'Courier New',monospace;color:#333;">1015731655</span>
                  <span class="trip-id">&middot; $978.90 total</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="hotel-contact">
                  <div><span class="detail-label">&#128205; Address:</span> Fira, Santorini 84700, GR</div>
                </div>

                <div class="mt-3" style="text-align:right;">
                  <router-link to="/aigialos-transport" style="text-decoration:none;">
                    <v-btn color="purple-darken-3" variant="tonal" size="small">
                      Getting Here &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 09 — Explore Santorini -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#E65100 0%,#EF6C00 55%,#FB8C00 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127748;</span>
                Explore Santorini &nbsp;&middot;&nbsp; Tue, Jun 09, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Morning</div>
                    <div class="checkin-time">Oia</div>
                    <div class="checkin-date">Three Domes &amp; Ammoudi Bay</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block">
                    <div class="checkin-label">Afternoon</div>
                    <div class="checkin-time">Fira</div>
                    <div class="checkin-date">Hike &amp; Imerovigli</div>
                  </div>
                  <div class="checkin-divider">&#127751;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Evening</div>
                    <div class="checkin-time">Sunset</div>
                    <div class="checkin-date">Assyrtiko &amp; Nightlife</div>
                  </div>
                </div>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Morning:</span>
                  <span>Oia &mdash; Three Domes viewpoint (9:00 AM) &rarr; Ammoudi Bay seafood lunch</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Afternoon:</span>
                  <span>Fira&ndash;Oia hike or bus &rarr; Fira boutiques &rarr; Imerovigli &amp; Skaros Rock</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Evening:</span>
                  <span>Sunset dinner in Imerovigli &rarr; Fira nightlife &amp; local Assyrtiko wine</span>
                </div>

                <div class="mt-2" style="text-align:right;">
                  <router-link to="/santorini-day" style="text-decoration:none;">
                    <v-btn color="orange-darken-3" variant="tonal" size="small">
                      Full Day Guide &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 10 — Ferry: Santorini → Rhodes (ANEK Lines) -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-ferry">
                <span class="card-header-icon">&#9973;</span>
                Ferry &mdash; Santorini &rarr; Rhodes &nbsp;&middot;&nbsp; Wed, Jun 10, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Route -->
                <div class="flight-route mb-4">
                  <div class="route-endpoint">
                    <div class="route-time">10:55 PM</div>
                    <div class="route-iata ferry-iata">JTR</div>
                    <div class="route-city">Santorini, GR</div>
                    <div class="route-date">Wed, Jun 10</div>
                  </div>
                  <div class="route-middle">
                    <span class="route-arrow-plane">&#9973;</span>
                    <div class="route-arrow-line ferry-line"></div>
                  </div>
                  <div class="route-endpoint text-right">
                    <div class="route-time">4:20 PM</div>
                    <div class="route-iata ferry-iata">RHO</div>
                    <div class="route-city">Rhodes, GR</div>
                    <div class="route-date">Thu, Jun 11</div>
                  </div>
                </div>

                <div class="ferry-vessel mb-4">
                  <span class="vessel-icon">&#128674;</span>
                  <span class="vessel-name">Diagoras</span>
                  <span class="vessel-company">ANEK Lines</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Booking details -->
                <div class="confirm-row mb-1">
                  <span class="detail-label">Reservation No:</span>
                  <span class="confirm-code ferry-code">100792986</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Access Code:</span>
                  <span class="confirm-code ferry-code">726155</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Bank Transaction ID:</span>
                  <span class="trip-id" style="font-family:'Courier New',monospace;color:#333;">289649670</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Bank Approval Code:</span>
                  <span class="trip-id" style="font-family:'Courier New',monospace;color:#333;">03735I</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Passengers & Fare -->
                <div class="benefits-heading mb-2">&#128100; Passengers &amp; Fare</div>
                <div class="fare-table">
                  <div class="fare-row fare-header">
                    <span>Passenger</span>
                    <span>Accommodation</span>
                    <span class="text-right">Fare</span>
                  </div>
                  <div class="fare-row">
                    <span class="pax-name">JOHN FLINT SMITH</span>
                    <span class="fare-cabin">Seat &middot; Economy &middot; Full Fare</span>
                    <span class="fare-amount text-right">&euro;25.50</span>
                  </div>
                  <div class="fare-row">
                    <span class="pax-name">JESSICA MILLER</span>
                    <span class="fare-cabin">1 bed cabin Deluxe (double bed) &middot; Cabin with Window &middot; Full Fare</span>
                    <span class="fare-amount text-right">&euro;130.00</span>
                  </div>
                  <div class="fare-subtotal">
                    <span>Taxes &amp; Fees</span>
                    <span class="text-right">&euro;21.25</span>
                  </div>
                  <div class="fare-total">
                    <span>Total</span>
                    <span class="text-right">&euro;155.50</span>
                  </div>
                </div>

                <div class="mt-3" style="text-align:right;">
                  <a href="https://www.bluestarferries.com/en-gb/web-check-in/?reference=100792986&accesscode=726155" target="_blank" rel="noopener" style="text-decoration:none;">
                    <v-btn color="blue-darken-3" variant="tonal" size="small">
                      &#10003; Online Check-In &rarr;
                    </v-btn>
                  </a>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 11 — 10GR Boutique Hotel and Wine Bar, Rhodes -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-hotel">
                <span class="card-header-icon">&#127968;</span>
                Rhodes &mdash; 10GR Boutique Hotel and Wine Bar
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="hotel-meta mb-3">
                  <span class="hotel-dates">Thu, Jun 11 &ndash; Sat, Jun 13, 2026</span>
                  <span class="hotel-nights">2 nights &middot; 2 guests</span>
                  <span class="hotel-nights" style="background:#FFF3E0;border-color:#FFAB91;color:#BF360C;">Non-refundable</span>
                </div>

                <div class="hotel-room mb-4">
                  <span class="room-type-icon">&#127953;</span>
                  <span class="room-type-text">Deluxe Stone Room &mdash; 1 Queen bed</span>
                </div>

                <!-- Check-in / Check-out -->
                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Check-in</div>
                    <div class="checkin-time">2:00 PM</div>
                    <div class="checkin-date">Thu, Jun 11</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Check-out</div>
                    <div class="checkin-time">12:00 PM</div>
                    <div class="checkin-date">Sat, Jun 13</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Confirmation:</span>
                  <span class="confirm-code">2430151623</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Trip ID:</span>
                  <span style="font-family:'Courier New',monospace;color:#333;">1015732590</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="hotel-contact">
                  <div><span class="detail-label">&#128205; Address:</span> 16 Polidorou, Rhodes 851 00, GR</div>
                </div>

                <div class="mt-3" style="text-align:right;">
                  <router-link to="/rhodes-transport" style="text-decoration:none;">
                    <v-btn color="brown-darken-2" variant="tonal" size="small">
                      Getting Here &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 13–20 — Sailing Charter: Dodecanese Islands -->
            <v-card hover elevation="4" class="mb-6 itinerary-card charter-card">
              <v-card-title class="card-header card-header-charter">
                <span class="card-header-icon">&#9973;</span>
                Sailing Charter &mdash; Dodecanese Islands &nbsp;&middot;&nbsp; Jun 13&ndash;20
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Boat Info -->
                <div class="charter-boat mb-4">
                  <div class="boat-name">&#9973; Fountaine Pajot Lucia 40</div>
                  <div class="boat-specs">
                    <span class="boat-spec">4 cabin / 4 head</span>
                    <span class="boat-spec">A/C + Generator</span>
                    <span class="boat-spec warn">No water maker</span>
                  </div>
                </div>

                <!-- Flotilla -->
                <v-alert type="info" variant="tonal" class="mb-4" density="compact">
                  <strong>&#9973; Flotilla:</strong> 3 boats total &mdash; also skippered by <strong>Luke Eubanks</strong> and <strong>Chris Redmond</strong>
                </v-alert>

                <!-- Meeting Info -->
                <v-alert type="success" variant="tonal" class="mb-4" density="compact">
                  <strong>&#128205; Meet:</strong> Istion Yachting base station &mdash; Rhodes New Marina &mdash; <strong>11:00 AM local time, Sat Jun 13</strong>.<br>
                  Get organized &amp; determine if early check-in at 2:30 PM is available.
                </v-alert>

                <!-- Key Dates -->
                <div class="charter-dates mb-4">
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

                <v-divider class="my-3"></v-divider>

                <!-- Charter Company -->
                <div class="charter-company mb-4">
                  <div class="detail-label mb-1">&#127970; Charter Company &mdash; Istion Yachting</div>
                  <div class="company-details">
                    <div>1 Poseidonos Ave., 174 55, Alimos, Athens, Greece</div>
                    <div>&#128222; <a href="tel:+302109811515" class="med-link">+30 210 9811 515</a></div>
                    <div>&#128231; <a href="mailto:charter@istion.com" class="med-link">charter@istion.com</a></div>
                    <div>&#127758; <a href="https://www.istion.com" target="_blank" rel="noopener" class="med-link">istion.com</a></div>
                  </div>
                </div>

                <!-- Base Marina -->
                <div class="charter-company mb-4">
                  <div class="detail-label mb-1">&#9875; Base Marina &mdash; Rhodes New Marina</div>
                  <div class="company-details">
                    <div>&#128205; Rhodes Marinas, 124 Afstralia Street, Rhodes 85100, Dodecanese Islands, Greece</div>
                    <div><strong>Base Manager:</strong> Manolis Lampidonis</div>
                    <div>&#128222; <a href="tel:+306972290871" class="med-link">+30 6972 290 871</a></div>
                    <div>&#128231; <a href="mailto:charter@istion.com" class="med-link">charter@istion.com</a></div>
                    <div>&#127758; <a href="https://www.istion.com/bases/rhodes-charter-base" target="_blank" rel="noopener" class="med-link">istion.com/bases/rhodes-charter-base</a></div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Crew List -->
                <div class="benefits-heading mb-3">&#128101; Crew List &mdash; The Dodecanese, Greece &nbsp;&middot;&nbsp; Jun 13&ndash;20, 2026</div>

                <!-- Lucia 40 -->
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

                <!-- Lagoon 42 -->
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

                <!-- Lagoon 45 -->
                <div class="crew-boat-label mb-2">&#9973; Lagoon 45</div>
                <div class="crew-table mb-4">
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

                <v-divider class="my-3"></v-divider>

                <!-- Plan notice -->
                <v-alert type="warning" variant="tonal" class="mb-4" density="compact">
                  <strong>&#9888; Plan Notice:</strong> This is a planned itinerary &mdash; reality may change. As sailors we remain adaptable.
                  One stop (<strong>West Symi &mdash; Emilianos</strong>) is a <strong>REMOTE anchorage</strong> with <strong>zero facilities ashore</strong>.
                </v-alert>

                <!-- Daily sailing legs -->
                <div class="benefits-heading mb-3">&#128205; Daily Anchorage Route</div>

                <!-- Day 1: Jun 13 — Rhodes New Marina -->
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

                <!-- Day 2: Jun 14 — East Symi -->
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

                <!-- Day 3: Jun 15 — West Symi, Emilianos (REMOTE) -->
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

                <!-- Day 4: Jun 16 — Nisyros Pali -->
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

                <!-- Day 5: Jun 17 — Tilos, Lividia -->
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

                <!-- Day 6: Jun 18 — East Khalki -->
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

                <!-- Day 7: Jun 19 — Return to Rhodes New Marina -->
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

                <!-- Day 8: Jun 20 — Depart -->
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

                <!-- Total distance -->
                <div class="sail-total mt-3">
                  &#9875; Approximate total sailing distance: ~155 NM
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 20 — Ryanair FR3483: Rhodes → Naples -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header">
                <span class="card-header-icon">&#9992;</span>
                Ryanair FR3483 &mdash; Rhodes &rarr; Naples &nbsp;&middot;&nbsp; Sat, Jun 20, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="flight-segment mb-1">
                  <div class="flight-label">
                    <span class="flight-num">FR3483 &nbsp;&middot;&nbsp; Ryanair</span>
                    <span class="flight-class">Plus &middot; Checked Bag (20 kg)</span>
                  </div>
                  <div class="flight-route mt-3">
                    <div class="route-endpoint">
                      <div class="route-time">12:45</div>
                      <div class="route-iata">RHO</div>
                      <div class="route-city">Rhodes, GR</div>
                      <div class="route-date">Sat, Jun 20</div>
                    </div>
                    <div class="route-middle">
                      <span class="route-arrow-plane">&#9992;</span>
                      <div class="route-arrow-line"></div>
                    </div>
                    <div class="route-endpoint text-right">
                      <div class="route-time">14:05</div>
                      <div class="route-iata">NAP</div>
                      <div class="route-city">Naples, IT</div>
                      <div class="route-date">Sat, Jun 20</div>
                    </div>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>

                <div class="confirm-row mb-3">
                  <span class="detail-label">Reservation:</span>
                  <span class="confirm-code">IT7T3F</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Traveler Details -->
                <div class="traveler-section">
                  <h4 class="traveler-heading mb-3">Traveler Details</h4>

                  <v-card variant="outlined" class="traveler-card mb-3 pa-3">
                    <div class="traveler-name mb-2">MILLER / JESSICA</div>
                    <div class="seat-row mt-1">
                      <span class="detail-label">Seat:</span>
                      <span class="seat-badge">16E</span>
                    </div>
                    <div class="upgrade-row mt-2">
                      <v-chip size="small" color="#1565C0" variant="elevated" class="upgrade-chip">Plus</v-chip>
                      <v-chip size="small" color="#455A64" variant="elevated" class="upgrade-chip ml-1">Checked Bag 20 kg</v-chip>
                    </div>
                  </v-card>

                  <v-card variant="outlined" class="traveler-card pa-3">
                    <div class="traveler-name mb-2">SMITH / JOHN FLINT</div>
                    <div class="seat-row mt-1">
                      <span class="detail-label">Seat:</span>
                      <span class="seat-badge">16F</span>
                    </div>
                    <div class="upgrade-row mt-2">
                      <v-chip size="small" color="#1565C0" variant="elevated" class="upgrade-chip">Plus</v-chip>
                      <v-chip size="small" color="#455A64" variant="elevated" class="upgrade-chip ml-1">Checked Bag 20 kg</v-chip>
                    </div>
                  </v-card>

                </div>

                <div class="mt-3" style="text-align:right;">
                  <router-link to="/ryanair-departure" style="text-decoration:none;">
                    <v-btn color="red-darken-3" variant="tonal" size="small">
                      Departure Day Plan &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 20 — Bus Transfer: Naples Airport → Sant'Agnello -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-ferry">
                <span class="card-header-icon">&#128652;</span>
                Bus Transfer &mdash; Naples Airport &rarr; Sant&rsquo;Agnello &nbsp;&middot;&nbsp; Sat, Jun 20, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="flight-route mb-4">
                  <div class="route-endpoint">
                    <div class="route-time">4:30 PM</div>
                    <div class="route-iata ferry-iata" style="font-size:0.8rem;">NAP</div>
                    <div class="route-city">Naples Airport</div>
                    <div class="route-date" style="font-size:0.72rem;">Parcheggio Bus Turistici</div>
                  </div>
                  <div class="route-middle">
                    <span class="route-arrow-plane">&#128652;</span>
                    <div class="route-arrow-line ferry-line"></div>
                  </div>
                  <div class="route-endpoint text-right">
                    <div class="route-iata ferry-iata" style="font-size:0.8rem;">SAG</div>
                    <div class="route-city">Sant&rsquo;Agnello</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Reservation Code:</span>
                  <span class="confirm-code ferry-code">196440-MW7OAQ-I</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Seats:</span>
                  <span style="font-weight:600;">2</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="benefits-heading mb-2">&#128100; Passengers</div>
                <div class="passenger-table">
                  <div class="passenger-row">
                    <span class="pax-name">John Flint Smith</span>
                  </div>
                  <div class="passenger-row">
                    <span class="pax-name">Jessica Miller</span>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="hotel-contact">
                  <div>
                    <span class="detail-label">&#128205; Bus Stop:</span>
                    Naples Airport &mdash; Parcheggio Bus Turistici
                  </div>
                  <div class="mt-1">
                    <a href="https://www.google.com/maps/search/?api=1&query=40.875493,14.283609" target="_blank" rel="noopener" class="med-link">&#128506; View on Google Maps (40.875493, 14.283609)</a>
                  </div>
                </div>

                <div class="mt-4" style="text-align:right;">
                  <router-link to="/bus-transfer-detail" style="text-decoration:none;">
                    <v-btn color="blue-darken-2" variant="tonal" size="small">
                      Full Details &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 20–23 — Hotel Corallo Sorrento -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-hotel">
                <span class="card-header-icon">&#127968;</span>
                Sant'Agnello / Sorrento &mdash; Hotel Corallo Sorrento
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="hotel-meta mb-3">
                  <span class="hotel-dates">Sat, Jun 20 &ndash; Tue, Jun 23, 2026</span>
                  <span class="hotel-nights">3 nights &middot; 2 guests</span>
                </div>

                <div class="hotel-room mb-4">
                  <span class="room-type-icon">&#127953;</span>
                  <span class="room-type-text">Standard &mdash; Internal view window &mdash; 2 Adults</span>
                </div>

                <!-- Check-in / Check-out -->
                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Check-in</div>
                    <div class="checkin-time">1:00 PM</div>
                    <div class="checkin-date">Sat, Jun 20</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Check-out</div>
                    <div class="checkin-time">12:00 PM</div>
                    <div class="checkin-date">Tue, Jun 23</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Booking #:</span>
                  <span class="confirm-code">2026042047803518</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Meal Plan:</span>
                  <span style="color:#2E7D32;font-weight:600;">Breakfast Included</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="hotel-contact">
                  <div><span class="detail-label">&#128205; Address:</span> Via Nuovo Rione Cappuccini, 12 &mdash; Sant&rsquo;Agnello</div>
                </div>

                <div class="mt-3" style="text-align:right;">
                  <router-link to="/corallo-sorrento" style="text-decoration:none;">
                    <v-btn color="teal-darken-2" variant="tonal" size="small">
                      Hotel Details &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 21 — Day Trip: Capri -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-ferry">
                <span class="card-header-icon">&#127754;</span>
                Day Trip &mdash; Capri &nbsp;&middot;&nbsp; Sun, Jun 21, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Outbound</div>
                    <div class="checkin-time">8:29 AM</div>
                    <div class="checkin-date">Sorrento &rarr; Capri</div>
                  </div>
                  <div class="checkin-divider">&#127700;</div>
                  <div class="checkin-block">
                    <div class="checkin-label">Boat Tour</div>
                    <div class="checkin-time">10:00 AM</div>
                    <div class="checkin-date">Blue Grotto</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Return</div>
                    <div class="checkin-time">6:35 PM</div>
                    <div class="checkin-date">Capri &rarr; Sorrento</div>
                  </div>
                </div>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Ferry Ref:</span>
                  <span class="confirm-code ferry-code">50008TVUBI</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Boat Tour Ref:</span>
                  <span class="confirm-code ferry-code">GYG7VKZRZH3Q</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Lunch:</span>
                  <span>Da Paolino &mdash; 1:00 PM</span>
                </div>

                <div class="mt-2" style="text-align:right;">
                  <router-link to="/capri-day" style="text-decoration:none;">
                    <v-btn color="blue-darken-3" variant="tonal" size="small">
                      Full Day Details &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 22 — Cooking Class + Sea Pools Walk -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#1B5E20 0%,#388E3C 60%,#66BB6A 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127819;</span>
                Sorrento &mdash; Cooking Class &amp; Sea Pools &nbsp;&middot;&nbsp; Mon, Jun 22, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Sea Pools Walk — Morning -->
                <div class="benefits-heading mb-2">&#127946; Morning &mdash; Sorrento Old Town &rarr; Bagni della Regina Giovanna</div>
                <div class="confirm-row mb-1">~5 km stroll through the old town down to the sea pools &mdash; <strong>approx. 1.5 hours walk</strong>.</div>
                <v-alert type="info" variant="tonal" density="compact" class="mt-3 mb-0">
                  &#128241; <strong>Pack:</strong> bathing suit &amp; water shoes &mdash; natural sea-rock pools perfect for swimming.
                </v-alert>

                <v-divider class="my-3"></v-divider>

                <!-- Cooking Class — 5:00 PM -->
                <div class="benefits-heading mb-2">&#127819; Lemon Cooking Class &nbsp;&middot;&nbsp; 5:00 PM</div>
                <v-alert type="warning" variant="tonal" density="compact" class="mb-3">
                  <strong>&#9203; Pending confirmation</strong> &mdash; contacted Fattoria Terranova via website &amp; WhatsApp. Follow up if no reply.
                </v-alert>
                <div class="confirm-row mb-1">
                  <span class="detail-label">&#127758; Host:</span>
                  <a href="https://fattoriaterranova.it/contacts-confirmation/" target="_blank" rel="noopener" class="med-link">fattoriaterranova.it</a>
                </div>
                <div class="confirm-row mb-0">
                  <span class="detail-label">&#128222; Also contacted via WhatsApp</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div style="text-align:right;">
                  <router-link to="/sea-pools-walk" style="text-decoration:none;">
                    <v-btn color="green-darken-3" variant="tonal" size="small">
                      Walk Route &amp; Map &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 23 — Ferry: Sorrento → Maiori (Coastlines) -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-ferry">
                <span class="card-header-icon">&#9973;</span>
                Ferry &mdash; Sorrento &rarr; Maiori &nbsp;&middot;&nbsp; Tue, Jun 23, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="flight-route mb-4">
                  <div class="route-endpoint">
                    <div class="route-time">5:10 PM</div>
                    <div class="route-iata ferry-iata">SOR</div>
                    <div class="route-city">Sorrento</div>
                    <div class="route-date">Tue, Jun 23</div>
                  </div>
                  <div class="route-middle">
                    <span class="route-arrow-plane">&#9973;</span>
                    <div class="route-arrow-line ferry-line"></div>
                    <div style="font-size:0.75rem;color:#666;text-align:center;margin-top:2px;">1h 30m</div>
                  </div>
                  <div class="route-endpoint text-right">
                    <div class="route-time">6:40 PM</div>
                    <div class="route-iata ferry-iata">MAI</div>
                    <div class="route-city">Maiori</div>
                    <div class="route-date">Tue, Jun 23</div>
                  </div>
                </div>

                <div class="ferry-vessel mb-4">
                  <span class="vessel-icon">&#128674;</span>
                  <span class="vessel-name">Coastlines</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Booking Ref:</span>
                  <span class="confirm-code ferry-code">50008TVKJI</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Booked:</span>
                  <span>25/04/2026 &middot; Agency 50008</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="benefits-heading mb-2">&#128100; Passengers</div>
                <div class="passenger-table">
                  <div class="passenger-row passenger-header">
                    <span>Name</span>
                    <span>Ticket</span>
                    <span>Class</span>
                  </div>
                  <div class="passenger-row">
                    <span class="pax-name">John Smith</span>
                    <span class="seat-badge">T141266</span>
                    <span>Full Fare &middot; Deck-lounge <span class="benefit-note">(1 small bag)</span></span>
                  </div>
                  <div class="passenger-row">
                    <span class="pax-name">Jessica Miller</span>
                    <span class="seat-badge">T141267</span>
                    <span>Full Fare &middot; Deck-lounge <span class="benefit-note">(1 small bag)</span></span>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="hotel-contact">
                  <div><span class="detail-label">&#128222; Call Centre:</span> <a href="tel:+390814972238" class="med-link">+39 081 4972238</a></div>
                  <div><span class="detail-label">&#128242; WhatsApp:</span> <a href="https://wa.me/393351278104" target="_blank" rel="noopener" class="med-link">+39 335 1278104</a></div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="benefits-heading mb-3">&#128247; Boarding QR Codes</div>
                <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;">
                  <div style="text-align:center;">
                    <div style="font-size:0.8rem;font-weight:600;color:#555;margin-bottom:6px;">Flint &mdash; T141266</div>
                    <img src="/Flint Sorrento → Maiori ferry QR.png" alt="Flint boarding QR" style="width:140px;height:140px;border:1px solid #ddd;border-radius:8px;" />
                  </div>
                  <div style="text-align:center;">
                    <div style="font-size:0.8rem;font-weight:600;color:#555;margin-bottom:6px;">Jessica &mdash; T141267</div>
                    <img src="/Jessica Sorrento → Maiori ferry QR.png" alt="Jessica boarding QR" style="width:140px;height:140px;border:1px solid #ddd;border-radius:8px;" />
                  </div>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 23–29 — Airbnb: Vacation home in Minori -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-hotel">
                <span class="card-header-icon">&#127968;</span>
                Minori &mdash; Vacation Home &nbsp;&middot;&nbsp; Airbnb &middot; Hosted by Ugo
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="hotel-meta mb-3">
                  <span class="hotel-dates">Tue, Jun 23 &ndash; Mon, Jun 29, 2026</span>
                  <span class="hotel-nights">6 nights</span>
                </div>

                <!-- Check-in / Check-out -->
                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Check-in</div>
                    <div class="checkin-time">3:00 PM</div>
                    <div class="checkin-date">Tue, Jun 23</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Check-out</div>
                    <div class="checkin-time">10:00 AM</div>
                    <div class="checkin-date">Mon, Jun 29</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="hotel-contact mb-3">
                  <div><span class="detail-label">&#128205; Address:</span> Via San Pietro 16, scala unica, 3&deg; piano <span class="benefit-note">(senza ascensore &mdash; no elevator)</span></div>
                  <div style="margin-top:2px;">Minori, Campania 84010, Italy</div>
                  <div style="margin-top:2px;"><span class="detail-label">&#128242; Irene (host contact):</span> <a href="https://wa.me/393283044671" target="_blank" rel="noopener" class="med-link">+39 328 3044671</a></div>
                  <div style="margin-top:6px;">
                    <span class="detail-label">&#127759; GPS:</span> 40&deg;39&prime;05.1&Prime;N &nbsp; 14&deg;37&prime;37.7&Prime;E
                  </div>
                  <div style="margin-top:6px;">
                    <a href="https://maps.app.goo.gl/y9AskqsFHAvgdDPm9" target="_blank" rel="noopener" class="med-link">&#128506; Open in Google Maps</a>
                  </div>
                </div>

                <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#128247; Property &amp; Location</div>
                <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:8px;">
                  <img src="/hotel minori palace.png" alt="Hotel Minori Palace area" style="width:100%;max-width:340px;border-radius:10px;border:1px solid #ddd;" />
                  <img src="/map to airbnb .png" alt="Map to Airbnb" style="width:100%;max-width:340px;border-radius:10px;border:1px solid #ddd;" />
                </div>

                <div class="mt-3" style="text-align:right;">
                  <router-link to="/minori-arrival" style="text-decoration:none;">
                    <v-btn color="teal-darken-2" variant="tonal" size="small">
                      Getting Here &nbsp;&#8250;
                    </v-btn>
                  </router-link>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 23 — Dinner: Agriturismo Villa Maria, Minori -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#3E2723 0%,#6D4C41 60%,#8D6E63 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127869;</span>
                Welcome Dinner &mdash; Agriturismo Villa Maria &nbsp;&middot;&nbsp; Tue, Jun 23, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Time</div>
                    <div class="checkin-time">8:00 PM</div>
                  </div>
                  <div class="checkin-divider">&#127979;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Walk from Airbnb</div>
                    <div class="checkin-time">~12 min</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="hotel-contact">
                  <div><span class="detail-label">&#128205; Address:</span> Via Portatrici di Limoni, 53 &mdash; 84010 Minori (SA)</div>
                  <div><span class="detail-label">&#128231; Email:</span> <a href="mailto:info@agriturismovillamaria.it" class="med-link">info@agriturismovillamaria.it</a></div>
                  <div><span class="detail-label">&#127758; Website:</span> <a href="https://www.agriturismovillamaria.it/en/restaurant" target="_blank" rel="noopener" class="med-link">agriturismovillamaria.it</a></div>
                </div>

                <v-alert type="info" variant="tonal" density="compact" class="mt-3">
                  &#128395; Reservation submitted by email &mdash; follow up if no confirmation received.
                </v-alert>

              </v-card-text>
            </v-card>

            <!-- Jun 24 — Path of the Gods -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3949AB 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127956;</span>
                Path of the Gods &mdash; Bomerano &rarr; Positano &nbsp;&middot;&nbsp; Thu, Jun 24, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <v-alert type="warning" variant="tonal" density="compact" class="mb-4">
                  <strong>&#9888; Start early.</strong> The trail is exposed &amp; rocky &mdash; much less pleasant if started late in the day. Due biglietti Orario AC 2 per Bomerano, per favore.
                </v-alert>

                <!-- Timeline overview -->
                <div class="benefits-heading mb-3">&#128336; Day Timeline</div>
                <div class="hotel-contact mb-4">
                  <div><span class="detail-label">7:00 AM</span> &mdash; Depart Airbnb, Minori</div>
                  <div><span class="detail-label">8:30–9:00 AM</span> &mdash; Start hiking from Bomerano</div>
                  <div><span class="detail-label">12:00–1:00 PM</span> &mdash; Arrive Nocelle</div>
                  <div><span class="detail-label">Afternoon</span> &mdash; Bus or walk down to Positano &bull; Lunch in Positano</div>
                  <div><span class="detail-label">Evening</span> &mdash; Ferry, driver, or bus back to Minori <span class="benefit-note">(TBD on the day)</span></div>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Bus route: Minori → Bomerano -->
                <div class="benefits-heading mb-3">&#128652; Bus Route &mdash; Minori &rarr; Bomerano</div>
                <div class="hotel-contact mb-2">
                  <div><span class="detail-label">&#128205; Start:</span> Via S. Pietro, 47, Minori</div>
                </div>

                <!-- Leg 1: Walk to stop -->
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

                <!-- Map: walk to stop -->
                <img src="/walk from airbnb to bus stop board 5120.png" alt="Walk from Airbnb to bus stop" style="width:100%;max-width:380px;border-radius:10px;border:1px solid #ddd;display:block;margin:10px 0;" />

                <!-- Leg 2: Bus 5120 -->
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

                <!-- Leg 3: Transfer -->
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

                <!-- Map: transfer -->
                <img src="/transfer to 5080 in amalfi .png" alt="Transfer to Bus 5080 in Amalfi" style="width:100%;max-width:380px;border-radius:10px;border:1px solid #ddd;display:block;margin:10px 0;" />

                <!-- Leg 4: Bus 5080 -->
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

                <!-- Leg 5: Walk to trailhead -->
                <div class="sail-day mb-4" style="margin-bottom:16px!important;">
                  <div class="sail-day-header" style="background:#E8F5E9;">
                    <span class="sail-day-date" style="color:#2E7D32;">8:46 AM</span>
                    <span class="sail-day-island" style="color:#2E7D32;">&#128694; Walk to Bomerano trailhead</span>
                    <span class="sail-nm" style="color:#555;">3 min &bull; 170 m</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">&#128205; <strong>Piazza Paolo Capasso, 12 — 80051 Agerola NA, Italy</strong></div>
                    <div class="sail-fact">Arrival: 8:49 AM</div>
                  </div>
                </div>

                <v-alert type="info" variant="tonal" density="compact" class="mb-4">
                  &#128241; Use the <strong>Unico Campania app</strong> for bus tickets &amp; schedules.
                </v-alert>

                <v-divider class="my-3"></v-divider>

                <!-- What to bring -->
                <div class="benefits-heading mb-2">&#127920; What to Bring</div>
                <ul class="benefits-list">
                  <li>&#128095; Real hiking / trail shoes (not sandals)</li>
                  <li>&#128167; 1.5–2 liters of water per person</li>
                  <li>&#127913; Hat &amp; sunscreen — trail is exposed</li>
                  <li>&#127822; Light snack</li>
                </ul>

              </v-card-text>
            </v-card>

            <!-- Jun 25 — Tramonti: Wineries + Dinner -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#8E24AA 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127863;</span>
                Tramonti &mdash; Wineries &amp; Dinner &nbsp;&middot;&nbsp; Thu, Jun 25, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Lunch -->
                <div class="benefits-heading mb-2">&#127869; Lunch &mdash; Agriturismo da Regina</div>
                <v-alert type="warning" variant="tonal" density="compact" class="mb-3">
                  <strong>&#9203; TBD</strong> &mdash; reservation not yet confirmed.
                </v-alert>
                <div class="hotel-contact mb-4">
                  <div><span class="detail-label">&#127758; Location:</span> Tramonti, Amalfi Coast</div>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Wineries -->
                <div class="benefits-heading mb-2">&#127862; Winery Stops &mdash; Tramonti</div>
                <div class="hotel-contact mb-3">
                  <div><a href="https://www.google.com/maps/search/wineries+Tramonti+Amalfi" target="_blank" rel="noopener" class="med-link">&#128506; View Tramonti wineries on Google Maps</a></div>
                </div>
                <ul class="benefits-list mb-4">
                  <li>&#127863; <strong>Cantine Apicella</strong></li>
                  <li>&#127863; <strong>Tenuta San Francesco</strong></li>
                  <li>&#127863; <strong>Tagliafierro</strong></li>
                  <li>&#127863; <strong>Basileo</strong></li>
                </ul>

                <v-divider class="my-3"></v-divider>

                <!-- Dinner -->
                <div class="benefits-heading mb-2">&#127869; Dinner &mdash; Ristorante Torre Normanna &nbsp;&middot;&nbsp; 7:00 PM</div>
                <div class="confirm-row mb-2">
                  <span style="font-size:0.85rem;color:#555;font-style:italic;">Medieval Norman tower jutting into the sea &mdash; one of the most spectacular settings on the Amalfi Coast.</span>
                </div>
                <div class="hotel-contact mb-0">
                  <div><span class="detail-label">&#128205; Location:</span> Maiori, SA, Italy</div>
                  <div style="margin-top:6px;">
                    <a href="https://www.google.com/maps/search/Ristorante+Torre+Normanna+Maiori" target="_blank" rel="noopener" class="med-link">&#128506; View on Google Maps</a>
                  </div>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 26 — Amalfi Day -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#006064 0%,#00838F 55%,#00ACC1 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127963;</span>
                Amalfi Day &nbsp;&middot;&nbsp; Fri, Jun 26, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Getting There -->
                <div class="benefits-heading mb-2">&#128652; Getting to Amalfi &nbsp;&middot;&nbsp; 8:30 AM Depart Minori</div>
                <div class="hotel-contact mb-4">
                  <div><span class="detail-label">Option A:</span> <strong>Path of the Lemons</strong> &mdash; scenic walk from Minori toward Maiori / Amalfi</div>
                  <div style="margin-top:4px;"><span class="detail-label">Option B:</span> Ferry or taxi from Minori to Amalfi</div>
                  <div style="margin-top:6px;"><a href="https://www.google.com/maps/dir/Minori,+SA,+Italy/Amalfi,+SA,+Italy" target="_blank" rel="noopener" class="med-link">&#128506; Minori → Amalfi on Google Maps</a></div>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Schedule -->
                <div class="benefits-heading mb-3">&#128336; Day Schedule</div>

                <!-- 10:30 Arrive Amalfi -->
                <div class="sail-day" style="margin-bottom:0;">
                  <div class="sail-day-header" style="background:#E0F7FA;">
                    <span class="sail-day-date" style="color:#006064;">10:30 AM</span>
                    <span class="sail-day-island" style="color:#006064;">&#128205; Arrive Amalfi</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact"><a href="https://www.google.com/maps/search/Amalfi+waterfront" target="_blank" rel="noopener" class="med-link">&#128506; Amalfi on Google Maps</a></div>
                  </div>
                </div>

                <!-- 10:45 Cathedral -->
                <div class="sail-day" style="margin-bottom:0;">
                  <div class="sail-day-header" style="background:#E0F7FA;">
                    <span class="sail-day-date" style="color:#006064;">10:45 AM</span>
                    <span class="sail-day-island" style="color:#006064;">&#9964; Cathedral of St. Andrew &amp; Paradise Cloister</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Duomo di Amalfi &mdash; stunning 9th-century cathedral with the famous Arab-Norman cloister.</div>
                    <div class="sail-fact"><a href="https://www.google.com/maps/search/Cathedral+of+Saint+Andrew+Amalfi" target="_blank" rel="noopener" class="med-link">&#128506; Cathedral on Google Maps</a></div>
                  </div>
                </div>

                <!-- 11:45 Pansa -->
                <div class="sail-day" style="margin-bottom:0;">
                  <div class="sail-day-header" style="background:#E0F7FA;">
                    <span class="sail-day-date" style="color:#006064;">11:45 AM</span>
                    <span class="sail-day-island" style="color:#006064;">&#9749; Pasticceria Pansa</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Historic pastry shop on Piazza del Duomo since 1830 &mdash; sfogliatelle, limoncello, and almond pastries.</div>
                    <div class="sail-fact"><a href="https://www.google.com/maps/search/Pasticceria+Pansa+Amalfi" target="_blank" rel="noopener" class="med-link">&#128506; Pasticceria Pansa on Google Maps</a></div>
                  </div>
                </div>

                <!-- 12:30 Lunch -->
                <div class="sail-day" style="margin-bottom:0;">
                  <div class="sail-day-header" style="background:#E0F7FA;">
                    <span class="sail-day-date" style="color:#006064;">12:30 PM</span>
                    <span class="sail-day-island" style="color:#006064;">&#127869; Lunch &mdash; Amalfi</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Choose a restaurant in the old town or near the waterfront.</div>
                    <div class="sail-fact"><a href="https://www.google.com/maps/search/restaurants+Amalfi+Italy" target="_blank" rel="noopener" class="med-link">&#128506; Restaurants in Amalfi</a></div>
                  </div>
                </div>

                <!-- 1:45 Antichi Sapori -->
                <div class="sail-day" style="margin-bottom:0;">
                  <div class="sail-day-header" style="background:#E0F7FA;">
                    <span class="sail-day-date" style="color:#006064;">1:45 PM</span>
                    <span class="sail-day-island" style="color:#006064;">&#127787; Antichi Sapori d&rsquo;Amalfi</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Local specialty shop &mdash; limoncello, ceramics, and Amalfi Coast products.</div>
                    <div class="sail-fact"><a href="https://www.google.com/maps/search/Antichi+Sapori+d'Amalfi" target="_blank" rel="noopener" class="med-link">&#128506; Antichi Sapori on Google Maps</a></div>
                  </div>
                </div>

                <!-- 2:30 Paper Museum -->
                <div class="sail-day" style="margin-bottom:0;">
                  <div class="sail-day-header" style="background:#FFF8E1;">
                    <span class="sail-day-date" style="color:#F57F17;">2:30 PM</span>
                    <span class="sail-day-island" style="color:#F57F17;">&#128220; Paper Museum <span style="font-size:0.78rem;font-weight:400;">(optional)</span></span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Museo della Carta &mdash; Amalfi was once one of Europe&rsquo;s great papermaking centers.</div>
                    <div class="sail-fact"><a href="https://www.google.com/maps/search/Museo+della+Carta+Amalfi" target="_blank" rel="noopener" class="med-link">&#128506; Museo della Carta on Google Maps</a></div>
                  </div>
                </div>

                <!-- 3:45 Walk to Atrani -->
                <div class="sail-day" style="margin-bottom:0;">
                  <div class="sail-day-header" style="background:#E0F7FA;">
                    <span class="sail-day-date" style="color:#006064;">3:45 PM</span>
                    <span class="sail-day-island" style="color:#006064;">&#128694; Walk to Atrani</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">A 10-minute walk east along the beach &mdash; one of Italy&rsquo;s smallest and most charming towns, tucked into a cliff.</div>
                    <div class="sail-fact"><a href="https://www.google.com/maps/dir/Amalfi+SA+Italy/Atrani+SA+Italy" target="_blank" rel="noopener" class="med-link">&#128506; Amalfi → Atrani walk</a></div>
                  </div>
                </div>

                <!-- 4:30 Aperitivo -->
                <div class="sail-day" style="margin-bottom:0;">
                  <div class="sail-day-header" style="background:#E0F7FA;">
                    <span class="sail-day-date" style="color:#006064;">4:30 PM</span>
                    <span class="sail-day-island" style="color:#006064;">&#127867; Aperitivo &amp; Wander &mdash; Atrani</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Sit in the tiny piazza, have a spritz or limoncello, soak it in.</div>
                  </div>
                </div>

                <!-- 5:30 Return -->
                <div class="sail-day mb-4" style="margin-bottom:16px!important;">
                  <div class="sail-day-header" style="background:#E8F5E9;">
                    <span class="sail-day-date" style="color:#2E7D32;">5:30–6:30 PM</span>
                    <span class="sail-day-island" style="color:#2E7D32;">&#9973; Return to Minori</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Ferry, taxi, or bus back from Amalfi/Atrani to Minori.</div>
                    <div class="sail-fact"><a href="https://www.google.com/maps/dir/Atrani+SA+Italy/Minori+SA+Italy" target="_blank" rel="noopener" class="med-link">&#128506; Atrani → Minori on Google Maps</a></div>
                  </div>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 27 — Dinner: Il Flauto di Pan, Ravello -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#3E2723 0%,#6D4C41 60%,#8D6E63 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127869;</span>
                Dinner &mdash; Il Flauto di Pan &nbsp;&middot;&nbsp; Sat, Jun 27, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Date</div>
                    <div class="checkin-time">Sat, Jun 27</div>
                  </div>
                  <div class="checkin-divider">&#127860;</div>
                  <div class="checkin-block">
                    <div class="checkin-label">Time</div>
                    <div class="checkin-time">7:30 PM</div>
                  </div>
                  <div class="checkin-divider">&#128101;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Guests</div>
                    <div class="checkin-time">2 people</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="hotel-contact">
                  <div><span class="detail-label">&#128205; Address:</span> Via Santa Chiara, 26 &mdash; 84010 Ravello</div>
                  <div><span class="detail-label">&#128222; Phone:</span> <a href="tel:+39089857459" class="med-link">+39 089 857459</a></div>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 28 — Dinner: La Sponda, Positano -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#880E4F 0%,#AD1457 55%,#E91E63 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#127869;</span>
                Dinner &mdash; La Sponda, Positano &nbsp;&middot;&nbsp; Sun, Jun 28, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <!-- Reservation summary -->
                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Arrives</div>
                    <div class="checkin-time">10:00 PM</div>
                    <div class="checkin-date">Sun, Jun 28</div>
                  </div>
                  <div class="checkin-divider">&#127860;</div>
                  <div class="checkin-block">
                    <div class="checkin-label">Ends</div>
                    <div class="checkin-time">12:30 AM</div>
                    <div class="checkin-date">Mon, Jun 29</div>
                  </div>
                  <div class="checkin-divider">&#128101;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Party</div>
                    <div class="checkin-time">2 guests</div>
                  </div>
                </div>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Name on Reservation:</span>
                  <span>Jessica Miller</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Reservation #:</span>
                  <span class="confirm-code ferry-code">4XBXED3LUNNS</span>
                </div>

                <v-alert type="error" variant="tonal" density="compact" class="mb-4">
                  <strong>&#9203; Table held 15 minutes only.</strong> If running late, call <a href="tel:+39089875066" class="med-link">+39 089 875066</a> immediately.
                </v-alert>

                <v-divider class="my-3"></v-divider>

                <!-- Location & Contact -->
                <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#128205; Location &amp; Contact</div>
                <div class="hotel-contact mb-3">
                  <div><span class="detail-label">&#128205; Address:</span> Via Cristoforo Colombo, 30, Positano, Campania 84017</div>
                  <div><span class="detail-label">&#128222; Phone:</span> <a href="tel:+39089875066" class="med-link">+39 089 875066</a></div>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Policies for Non-Hotel Guests -->
                <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#128176; Policies for Non-Hotel Guests</div>
                <ul class="benefits-list mb-3">
                  <li><strong>Minimum Spend:</strong> &euro;160 per person.</li>
                  <li><strong>Service Charge:</strong> A discretionary 15% service charge will be added to the bill.</li>
                  <li><strong>Seating:</strong> Preferences noted but a &ldquo;front row table&rdquo; is not guaranteed &mdash; priority given to hotel residents.</li>
                </ul>

                <v-divider class="my-3"></v-divider>

                <!-- Important Rules & Cancellation -->
                <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#9888;&#65039; Important Rules &amp; Cancellation</div>
                <ul class="benefits-list mb-0">
                  <li><strong>Cancellation Policy:</strong> Cancellations accepted up to <strong>24 hours before</strong> booking time.</li>
                  <li><strong>No-Show / Late Cancellation Fee:</strong> <span style="color:#C62828;font-weight:700;">&euro;100.00 per person.</span></li>
                  <li><strong>Photography:</strong> Professional photography is strictly prohibited in all public areas (bars, restaurants) to protect guest privacy.</li>
                </ul>

              </v-card-text>
            </v-card>

            <!-- Jun 29–30 — Artemisia Domus, Naples -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-hotel">
                <span class="card-header-icon">&#127968;</span>
                Naples &mdash; Artemisia Domus &ndash; Giardino
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="hotel-meta mb-3">
                  <span class="hotel-dates">Mon, Jun 29 &ndash; Tue, Jun 30, 2026</span>
                  <span class="hotel-nights">1 night &middot; 1 adult</span>
                </div>

                <div class="hotel-room mb-4">
                  <span class="room-type-icon">&#127953;</span>
                  <span class="room-type-text">Luxury Suite &nbsp;&middot;&nbsp; Non-smoking</span>
                </div>

                <!-- Check-in / Check-out -->
                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Check-in</div>
                    <div class="checkin-time">2:30 PM</div>
                    <div class="checkin-date">Mon, Jun 29</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Check-out</div>
                    <div class="checkin-time">10:30 AM</div>
                    <div class="checkin-date">Tue, Jun 30</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Itinerary #:</span>
                  <span class="confirm-code">73431064875613</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Reserved for:</span>
                  <span>John Smith</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Total:</span>
                  <span style="font-weight:600;color:#2E7D32;">$234.54 &nbsp;<span class="benefit-note">(+$6.45 city tax due at property)</span></span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Included -->
                <div class="benefits-heading mb-2">&#9733; Included</div>
                <ul class="benefits-list mb-3">
                  <li>&#127864; 1 free beverage per person (once per stay)</li>
                  <li>&#11088; Free VIP check-in</li>
                </ul>

                <v-divider class="my-3"></v-divider>

                <!-- Special instructions -->
                <v-alert type="info" variant="tonal" density="compact" class="mb-3">
                  <strong>&#128338; Front desk hours:</strong> 7:30 AM – 9:00 PM. If arriving after 8:30 PM, contact property in advance — an access code will be sent within 24 hours of arrival.
                </v-alert>
                <v-alert type="info" variant="tonal" density="compact" class="mb-3">
                  <strong>&#128652; Airport transfer</strong> available (surcharges may apply) — contact property at least 24 hours prior to arrival.
                </v-alert>

                <v-divider class="my-3"></v-divider>

                <!-- Address & Contact -->
                <div class="hotel-contact">
                  <div><span class="detail-label">&#128205; Address:</span> Via Santa Lucia 62, Naples, NA, 80132, Italy</div>
                  <div style="margin-top:6px;">
                    <a href="https://www.google.com/maps/search/?api=1&query=Via+Santa+Lucia+62+Naples+Italy" target="_blank" rel="noopener" class="med-link">&#128506; View on Google Maps</a>
                  </div>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 30 — Ryanair FR6841: Naples → Dublin -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header">
                <span class="card-header-icon">&#9992;</span>
                Ryanair FR6841 &mdash; Naples &rarr; Dublin &nbsp;&middot;&nbsp; Tue, Jun 30, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="flight-segment mb-1">
                  <div class="flight-label">
                    <span class="flight-num">FR6841 &nbsp;&middot;&nbsp; Ryanair</span>
                    <span class="flight-class">Plus &middot; Checked Bag (20 kg)</span>
                  </div>
                  <div class="flight-route mt-3">
                    <div class="route-endpoint">
                      <div class="route-time">11:40</div>
                      <div class="route-iata">NAP</div>
                      <div class="route-city">Naples, IT</div>
                      <div class="route-date">Tue, Jun 30</div>
                    </div>
                    <div class="route-middle">
                      <span class="route-arrow-plane">&#9992;</span>
                      <div class="route-arrow-line"></div>
                    </div>
                    <div class="route-endpoint text-right">
                      <div class="route-time">14:05</div>
                      <div class="route-iata">DUB</div>
                      <div class="route-city">Dublin, IE</div>
                      <div class="route-date">Tue, Jun 30</div>
                    </div>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>

                <div class="confirm-row mb-3">
                  <span class="detail-label">Reservation:</span>
                  <span class="confirm-code">L29IWJ</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Traveler Details -->
                <div class="traveler-section">
                  <h4 class="traveler-heading mb-3">Traveler Details</h4>

                  <v-card variant="outlined" class="traveler-card mb-3 pa-3">
                    <div class="traveler-name mb-2">SMITH / JOHN</div>
                    <div class="seat-row mt-1">
                      <span class="detail-label">Seat:</span>
                      <span class="seat-badge">03E</span>
                    </div>
                    <div class="upgrade-row mt-2">
                      <v-chip size="small" color="#1565C0" variant="elevated" class="upgrade-chip">Plus</v-chip>
                      <v-chip size="small" color="#455A64" variant="elevated" class="upgrade-chip ml-1">Checked Bag 20 kg</v-chip>
                    </div>
                  </v-card>

                  <v-card variant="outlined" class="traveler-card pa-3">
                    <div class="traveler-name mb-2">MILLER / JESSICA</div>
                    <div class="seat-row mt-1">
                      <span class="detail-label">Seat:</span>
                      <span class="seat-badge">03F</span>
                    </div>
                    <div class="upgrade-row mt-2">
                      <v-chip size="small" color="#1565C0" variant="elevated" class="upgrade-chip">Plus</v-chip>
                      <v-chip size="small" color="#455A64" variant="elevated" class="upgrade-chip ml-1">Checked Bag 20 kg</v-chip>
                    </div>
                  </v-card>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="confirm-row mb-0">
                  <span class="detail-label">Total:</span>
                  <span style="font-weight:600;color:#2E7D32;">$497.14</span>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jun 30–Jul 03 — The Westbury Dublin -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header card-header-hotel">
                <span class="card-header-icon">&#127968;</span>
                Dublin &mdash; The Westbury Dublin
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="hotel-meta mb-3">
                  <span class="hotel-dates">Tue, Jun 30 &ndash; Fri, Jul 03, 2026</span>
                  <span class="hotel-nights">3 nights &middot; 2 guests</span>
                  <span class="hotel-nights" style="background:#E8F5E9;border-color:#A5D6A7;color:#1B5E20;">Free cancellation until Jun 29</span>
                </div>

                <div class="hotel-room mb-4">
                  <span class="room-type-icon">&#127953;</span>
                  <span class="room-type-text">Classic Room &mdash; 1 King Bed</span>
                </div>

                <!-- Check-in / Check-out -->
                <div class="checkin-row mb-4">
                  <div class="checkin-block">
                    <div class="checkin-label">Check-in</div>
                    <div class="checkin-time">3:00 PM</div>
                    <div class="checkin-date">Tue, Jun 30</div>
                  </div>
                  <div class="checkin-divider">&#8594;</div>
                  <div class="checkin-block text-right">
                    <div class="checkin-label">Check-out</div>
                    <div class="checkin-time">12:00 PM</div>
                    <div class="checkin-date">Fri, Jul 03</div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="confirm-row mb-1">
                  <span class="detail-label">Confirmation:</span>
                  <span class="confirm-code">6715SG041098</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Primary Guest:</span>
                  <span>John Flint Smith</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Total:</span>
                  <span style="font-weight:600;color:#2E7D32;">$2,058.26</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Cardmember Benefits -->
                <div class="benefits-heading mb-2">&#11088; Cardmember Benefits</div>
                <ul class="benefits-list mb-3">
                  <li>&#9749; Daily breakfast for 2</li>
                  <li>&#128176; $100 property credit <span class="benefit-note">(applied once per stay; not valid on room rate, taxes, fees, or gratuities)</span></li>
                  <li>&#127873; Welcome amenity</li>
                  <li>&#128246; Wi-Fi included</li>
                  <li>&#127957; Room upgrade at check-in, if available</li>
                  <li>&#128338; Early check-in &amp; late check-out, if available</li>
                </ul>

                <v-divider class="my-3"></v-divider>

                <!-- Address & Contact -->
                <div class="hotel-contact">
                  <div><span class="detail-label">&#128205; Address:</span> Grafton Street, Dublin, D02 CH66, Ireland</div>
                  <div style="margin-top:6px;">
                    <a href="https://www.google.com/maps/search/The+Westbury+Dublin+Grafton+Street" target="_blank" rel="noopener" class="med-link">&#128506; View on Google Maps</a>
                  </div>
                </div>

              </v-card-text>
            </v-card>

            <!-- Jul 03 — Return Flights: Dublin → Austin -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header">
                <span class="card-header-icon">&#9992;</span>
                Return Flights &mdash; Dublin &rarr; Austin &nbsp;&middot;&nbsp; Fri, Jul 03, 2026
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="confirm-row mb-1">
                  <span class="detail-label">Airline Confirmation:</span>
                  <span class="confirm-code">BFXWUC</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Trip ID:</span>
                  <span class="trip-id">1016681915</span>
                </div>
                <div class="confirm-row mb-4">
                  <span class="detail-label">Total:</span>
                  <span style="font-weight:600;color:#2E7D32;">$2,541.26</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Segment 1: DUB → DFW -->
                <div class="flight-segment mb-4">
                  <div class="flight-label mb-1">
                    <span class="flight-num">IB 4245 &nbsp;&middot;&nbsp; Iberia</span>
                    <span class="flight-class">operated by American Airlines &middot; Boeing 777-200</span>
                  </div>
                  <div class="flight-route mt-3">
                    <div class="route-endpoint">
                      <div class="route-time">12:40 PM</div>
                      <div class="route-iata">DUB</div>
                      <div class="route-city">Dublin, IE</div>
                      <div class="route-date">Fri, Jul 03</div>
                    </div>
                    <div class="route-middle">
                      <span class="route-arrow-plane">&#9992;</span>
                      <div class="route-arrow-line"></div>
                    </div>
                    <div class="route-endpoint text-right">
                      <div class="route-iata">DFW</div>
                      <div class="route-city">Dallas / Fort Worth, TX</div>
                    </div>
                  </div>
                </div>

                <!-- Layover -->
                <div class="layover-row mb-4">
                  <v-chip size="small" color="#546E7A" variant="elevated" style="font-size:0.78rem;">
                    &#128336; Layover at DFW &mdash; 1h 44m
                  </v-chip>
                </div>

                <!-- Segment 2: DFW → AUS -->
                <div class="flight-segment mb-3">
                  <div class="flight-label mb-1">
                    <span class="flight-num">IB 4074 &nbsp;&middot;&nbsp; Iberia</span>
                    <span class="flight-class">operated by SkyWest Airlines for Air Alaska &middot; Canadair CRJ-900</span>
                  </div>
                  <div class="flight-route mt-3">
                    <div class="route-endpoint">
                      <div class="route-iata">DFW</div>
                      <div class="route-city">Dallas / Fort Worth, TX</div>
                    </div>
                    <div class="route-middle">
                      <span class="route-arrow-plane">&#9992;</span>
                      <div class="route-arrow-line"></div>
                    </div>
                    <div class="route-endpoint text-right">
                      <div class="route-time">7:16 PM</div>
                      <div class="route-iata">AUS</div>
                      <div class="route-city">Austin, TX</div>
                      <div class="route-date">Fri, Jul 03</div>
                    </div>
                  </div>
                </div>

                <div class="route-sub text-center mb-4" style="color:#546E7A;font-size:0.82rem;">Total travel time: 12h 36m &middot; 1 stop (DFW)</div>

                <v-divider class="my-3"></v-divider>

                <!-- Fare Info -->
                <div class="confirm-row mb-1">
                  <span class="detail-label">Fare Class:</span>
                  <span>Flexible Economy (N)</span>
                </div>
                <ul class="benefits-list mb-3">
                  <li>&#10003; Checked bags included</li>
                  <li>&#10003; Carry-on bag included</li>
                  <li>&#10003; Refund included</li>
                  <li>&#10003; Exchange included</li>
                </ul>

                <v-divider class="my-3"></v-divider>

                <!-- Travelers -->
                <div class="traveler-section">
                  <h4 class="traveler-heading mb-2">Travelers</h4>
                  <div class="confirm-row mb-1"><span class="pax-name">1. John Flint Smith</span></div>
                  <div class="confirm-row"><span class="pax-name">2. Jessica Miller</span></div>
                </div>

              </v-card-text>
            </v-card>

            <!-- Travel Insurance -->
            <v-card hover elevation="4" class="mb-6 itinerary-card">
              <v-card-title class="card-header" style="background:linear-gradient(135deg,#0D47A1 0%,#1565C0 55%,#1976D2 100%)!important;color:#fff!important;">
                <span class="card-header-icon">&#128737;</span>
                Travel Insurance &mdash; AXA Assistance USA
              </v-card-title>
              <v-card-text class="pa-4">

                <div class="confirm-row mb-1">
                  <span class="detail-label">Flint Policy Number:</span>
                  <span class="confirm-code">5399093</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Jessica Policy Number:</span>
                  <span class="confirm-code">5401201</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Plan:</span>
                  <span style="font-weight:600;">Platinum</span>
                </div>
                <div class="confirm-row mb-1">
                  <span class="detail-label">Name:</span>
                  <span>John Smith</span>
                </div>
                <div class="confirm-row mb-4">
                  <span class="detail-label">Effective Date:</span>
                  <span>April 24, 2026</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="benefits-heading mb-2">&#128222; 24/7 Claims &amp; Assistance</div>
                <div class="hotel-contact mb-3">
                  <div><span class="detail-label">Within the U.S.:</span> <a href="tel:+18668426202" class="med-link">1-866-842-6202</a></div>
                  <div><span class="detail-label">Outside the U.S. (collect):</span> <a href="tel:+13129353532" class="med-link">1-312-935-3532</a></div>
                  <div><span class="detail-label">&#128231; Email:</span> <a href="mailto:ustravel@axa-assistance.us" class="med-link">ustravel@axa-assistance.us</a></div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="benefits-heading mb-2">&#9989; Coverages</div>
                <ul class="benefits-list">
                  <li>Trip Cancellation</li>
                  <li>Optional Trip Cancellation for Any Reason</li>
                  <li>Trip Interruption</li>
                  <li>Trip Delay</li>
                  <li>Missed Connection</li>
                  <li>Lost Golf Rounds</li>
                  <li>Lost Skier Days</li>
                  <li>Repatriation of Remains</li>
                  <li>Non-Medical Emergency Transportation</li>
                  <li>Baggage / Personal Effects</li>
                  <li>Baggage Delay</li>
                  <li>Sports Equipment Rental</li>
                </ul>

                <v-divider class="my-3"></v-divider>

                <div style="display:flex;flex-wrap:wrap;gap:10px;">
                  <a href="/Insurance Benefits list.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#1565C0;color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;font-size:0.85rem;text-decoration:none;">
                    &#128196; Flint Benefits 
                  </a>
                  <a href="/Flint Insurance Card.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#0D47A1;color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;font-size:0.85rem;text-decoration:none;">
                    &#128106; Flint &mdash; Insurance Card
                  </a>
                  <a href="/Jessica Insurance Card.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#0D47A1;color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;font-size:0.85rem;text-decoration:none;">
                    &#128106; Jessica &mdash; Insurance Card
                  </a>
                  <a href="/Jessica Insurance Benefits.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#1565C0;color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;font-size:0.85rem;text-decoration:none;">
                    &#128196; Jessica &mdash; Benefits
                  </a>
                </div>

              </v-card-text>
            </v-card>

            <!-- Footer -->
            <div class="text-center mt-4 mb-8 footer-text">
              <p>&#9875; Buon Viaggio &middot; &#922;&#945;&#955;&#972; &#932;&#945;&#958;&#943;&#948;&#953; &#9875;</p>
            </div>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>
