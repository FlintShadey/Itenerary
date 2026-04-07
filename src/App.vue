<script setup>
// Greece Sailing & Italy Vacation — June 2026
</script>

<template>
  <v-app class="med-app">
    <!-- Floating Mediterranean decorations -->
    <div class="deco deco-1">&#9875;</div>
    <div class="deco deco-2">&#9728;</div>
    <div class="deco deco-3">&#9973;</div>
    <div class="deco deco-4">&#9875;</div>

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
                  <span class="detail-label">Booking Ref:</span>
                  <span class="confirm-code ferry-code">1112QCMBH</span>
                </div>
                <div class="confirm-row mb-3">
                  <span class="detail-label">Order ID:</span>
                  <span class="trip-id" style="font-family:'Courier New',monospace;color:#333;">1112QCMBH</span>
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

                <!-- Key Dates -->
                <div class="charter-dates mb-4">
                  <div class="charter-date-item">
                    <span class="charter-date-label">Board</span>
                    <span class="charter-date-value">Sat, Jun 13 (anytime)</span>
                  </div>
                  <div class="charter-date-item">
                    <span class="charter-date-label">Return to marina</span>
                    <span class="charter-date-value">Thu, Jun 19 evening</span>
                  </div>
                  <div class="charter-date-item">
                    <span class="charter-date-label">Turn in boat</span>
                    <span class="charter-date-value">Fri, Jun 20 early AM</span>
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
                  <div class="detail-label mb-1">&#9875; Base Marina &mdash; Rhodes</div>
                  <div class="company-details">
                    <div>&#128205; Rhodes Marinas, 124 Afstralia Street, Rhodes 85100, Dodecanese Islands, Greece</div>
                    <div><strong>Base Manager:</strong> Manolis Lampidonis</div>
                    <div>&#128222; <a href="tel:+306972290871" class="med-link">+30 6972 290 871</a></div>
                    <div>&#128231; <a href="mailto:charter@istion.com" class="med-link">charter@istion.com</a></div>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <!-- Daily sailing legs -->
                <div class="benefits-heading mb-3">&#128205; Daily Sailing Route</div>

                <!-- Day 1: Jun 13 — Rhodes -->
                <div class="sail-day">
                  <div class="sail-day-header">
                    <span class="sail-day-date">Jun 13 &middot; Sat</span>
                    <span class="sail-day-island">&#127964; Rhodes</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Board the boat at Rhodes marina. Settle in, provision, and explore the harbor.</div>
                    <div class="sail-fact island-fact">&#128218; Home to the Colossus of Rhodes, one of the Seven Wonders of the Ancient World, and a UNESCO-listed medieval Old Town.</div>
                  </div>
                </div>

                <!-- Day 2: Jun 14 — Symi -->
                <div class="sail-day">
                  <div class="sail-day-header">
                    <span class="sail-day-date">Jun 14 &middot; Sun</span>
                    <span class="sail-day-island">&#127964; Symi</span>
                    <span class="sail-nm">~23 NM</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Sail northwest from Rhodes to Symi&rsquo;s famously photogenic harbor.</div>
                    <div class="sail-fact island-fact">&#128218; Known for its stunning neoclassical pastel houses stacked up the hillside and a centuries-old sponge diving tradition.</div>
                  </div>
                </div>

                <!-- Day 3: Jun 15 — Nisyros -->
                <div class="sail-day">
                  <div class="sail-day-header">
                    <span class="sail-day-date">Jun 15 &middot; Mon</span>
                    <span class="sail-day-island">&#127964; Nisyros</span>
                    <span class="sail-nm">~30 NM</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Sail west past Tilos to reach the volcanic island of Nisyros.</div>
                    <div class="sail-fact island-fact">&#128218; One of Greece&rsquo;s few active volcanic islands &mdash; you can walk down into the Stefanos crater and smell the sulfur vents.</div>
                  </div>
                </div>

                <!-- Day 4: Jun 16 — Tilos -->
                <div class="sail-day">
                  <div class="sail-day-header">
                    <span class="sail-day-date">Jun 16 &middot; Tue</span>
                    <span class="sail-day-island">&#127964; Tilos</span>
                    <span class="sail-nm">~15 NM</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">A short sail southeast to tranquil Tilos.</div>
                    <div class="sail-fact island-fact">&#128218; The first Greek island to ban hunting entirely. Fossils of the last European dwarf elephants were discovered in a cave here.</div>
                  </div>
                </div>

                <!-- Day 5: Jun 17 — Chalki -->
                <div class="sail-day">
                  <div class="sail-day-header">
                    <span class="sail-day-date">Jun 17 &middot; Wed</span>
                    <span class="sail-day-island">&#127964; Chalki</span>
                    <span class="sail-nm">~20 NM</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Sail east to one of the smallest inhabited Dodecanese islands.</div>
                    <div class="sail-fact island-fact">&#128218; Chalki has just a few hundred residents. Don&rsquo;t miss the Agios Nikolaos clock tower overlooking the tiny harbor of Nimporio.</div>
                  </div>
                </div>

                <!-- Day 6: Jun 18 — Seskli -->
                <div class="sail-day">
                  <div class="sail-day-header">
                    <span class="sail-day-date">Jun 18 &middot; Thu</span>
                    <span class="sail-day-island">&#127964; Seskli</span>
                    <span class="sail-nm">~14 NM</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">A short hop northeast toward Rhodes, anchoring off the tiny islet of Seskli.</div>
                    <div class="sail-fact island-fact">&#128218; Seskli is an uninhabited rocky islet just south of Rhodes &mdash; crystal-clear anchorage and a peaceful final night at anchor.</div>
                  </div>
                </div>

                <!-- Day 7: Jun 19 — Return to Rhodes -->
                <div class="sail-day">
                  <div class="sail-day-header">
                    <span class="sail-day-date">Jun 19 &middot; Fri</span>
                    <span class="sail-day-island">&#127964; Rhodes (return)</span>
                    <span class="sail-nm">~8 NM</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact">Short morning sail back to Rhodes marina. Arrive by evening for boat return.</div>
                  </div>
                </div>

                <!-- Day 8: Jun 20 — Turn in boat -->
                <div class="sail-day sail-day-last">
                  <div class="sail-day-header">
                    <span class="sail-day-date">Jun 20 &middot; Sat</span>
                    <span class="sail-day-island">&#128274; Check off boat</span>
                  </div>
                  <div class="sail-day-body">
                    <div class="sail-fact"><strong>09:00</strong> &mdash; Check off boat with the charter company.</div>
                  </div>
                </div>

                <!-- Total distance -->
                <div class="sail-total mt-3">
                  &#9875; Approximate total sailing distance: ~110 NM
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
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap');

/* ─── App background ─────────────────────────────────────── */
.med-app {
  background: linear-gradient(180deg, #0B2545 0%, #134B7E 40%, #1A6BAA 70%, #0B2545 100%) !important;
  min-height: 100vh;
  font-family: 'Lato', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* ─── Floating decorations ──────────────────────────────── */
.deco {
  position: fixed;
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
  animation: deco-float 8s ease-in-out infinite;
  color: #90E0EF;
}
.deco-1 { top: 8%;  left: 4%;  font-size: 26px; animation-delay: 0s;   }
.deco-2 { top: 25%; right: 5%; font-size: 32px; animation-delay: 2s;   }
.deco-3 { top: 58%; left: 3%;  font-size: 28px; animation-delay: 4s;   }
.deco-4 { top: 78%; right: 4%; font-size: 24px; animation-delay: 6s;   }

@keyframes deco-float {
  0%, 100% { transform: translateY(0)    scale(1);   opacity: 0.18; }
  50%       { transform: translateY(-14px) scale(1.1); opacity: 0.32; }
}

/* ─── Header card ────────────────────────────────────────── */
.header-card {
  background: linear-gradient(135deg, #0B2545 0%, #134B7E 55%, #1A6BAA 100%) !important;
  color: #fff !important;
  border: 2px solid rgba(144, 224, 239, 0.35);
  border-radius: 18px !important;
  position: relative;
  z-index: 1;
}

.trip-icon {
  font-size: 52px;
  line-height: 1;
}

.header-names {
  color: #90E0EF !important;
  font-family: 'Playfair Display', serif !important;
  font-weight: 700 !important;
  white-space: normal !important;
  line-height: 1.4 !important;
  font-size: 1.6rem !important;
  justify-content: center !important;
}

.subtitle-text {
  color: rgba(255, 255, 255, 0.82) !important;
  font-size: 0.95rem !important;
  font-weight: 400 !important;
}

.contact-text {
  color: rgba(255, 255, 255, 0.85) !important;
  font-size: 0.9rem;
  line-height: 1.9;
}

.contact-text strong {
  color: #90E0EF;
}

.contact-note {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.82rem;
}

/* ─── Section title ─────────────────────────────────────── */
.section-title {
  color: #90E0EF !important;
  font-family: 'Playfair Display', serif !important;
  font-weight: 700 !important;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
}

/* ─── Itinerary card ─────────────────────────────────────── */
.itinerary-card {
  background: rgba(255, 255, 255, 0.97) !important;
  border-radius: 16px !important;
  border-left: 5px solid #1565C0;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.card-header {
  background: linear-gradient(135deg, #1565C0, #0D47A1) !important;
  color: white !important;
  font-family: 'Playfair Display', serif !important;
  font-weight: 700 !important;
  font-size: 1.05rem !important;
  line-height: 1.5 !important;
  white-space: normal !important;
  padding: 14px 18px !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}

.card-header-hotel {
  background: linear-gradient(135deg, #00695C, #00897B) !important;
}

.card-header-icon {
  font-size: 1.2rem;
}

/* ─── Flight segment ─────────────────────────────────────── */
.flight-segment {
  background: #F0F7FF;
  border-radius: 12px;
  padding: 14px 16px;
  border: 1px solid #BBDEFB;
}

.flight-label {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.flight-num {
  font-weight: 700;
  font-size: 0.92rem;
  color: #0D47A1;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

.flight-class {
  font-size: 0.82rem;
  color: #555;
  background: #E3F2FD;
  padding: 2px 10px;
  border-radius: 20px;
  border: 1px solid #90CAF9;
}

.flight-class.premium {
  background: #EDE7F6;
  border-color: #B39DDB;
  color: #4527A0;
  font-weight: 600;
}

/* ─── Route display ──────────────────────────────────────── */
.flight-route {
  display: flex;
  align-items: center;
  gap: 8px;
}

.route-endpoint {
  flex: 1;
}

.route-endpoint.text-right {
  text-align: right;
}

.route-time {
  font-size: 1.35rem;
  font-weight: 700;
  color: #0B2545;
  line-height: 1.2;
}

.route-iata {
  font-size: 1.9rem;
  font-weight: 900;
  color: #1565C0;
  letter-spacing: 2px;
  line-height: 1.1;
}

.route-city {
  font-size: 0.76rem;
  color: #555;
  line-height: 1.35;
}

.route-date {
  font-size: 0.76rem;
  color: #888;
  margin-top: 2px;
}

.route-middle {
  flex: 0 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}

.route-arrow-plane {
  font-size: 1.05rem;
  color: #1565C0;
}

.route-arrow-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #BBDEFB, #1565C0, #BBDEFB);
  border-radius: 2px;
}

/* ─── Traveler section ───────────────────────────────────── */
.traveler-heading {
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0D47A1;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid #BBDEFB;
  padding-bottom: 6px;
}

.traveler-card {
  border-color: #BBDEFB !important;
  background: #FAFCFF !important;
  border-radius: 10px !important;
}

.traveler-name {
  font-size: 1rem;
  font-weight: 700;
  color: #0B2545;
  letter-spacing: 0.5px;
}

.traveler-detail {
  font-size: 0.87rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.detail-label {
  font-weight: 700;
  color: #1565C0;
}

.detail-value {
  font-family: 'Courier New', monospace;
  font-size: 0.87rem;
  color: #333;
}

.ff-badge {
  background: #E8F5E9;
  color: #2E7D32;
  padding: 1px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid #A5D6A7;
}

.seat-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 0.87rem;
}

.seat-badge {
  background: #E3F2FD;
  color: #0D47A1;
  padding: 2px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  border: 1px solid #90CAF9;
  white-space: nowrap;
}

.upgrade-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.upgrade-chip {
  color: white !important;
  font-size: 0.76rem !important;
}

.upgrade-segment {
  font-weight: 700;
  color: #C1440E;
  font-size: 0.82rem;
}

.upgrade-ticket {
  color: #888;
  font-size: 0.77rem;
  font-family: 'Courier New', monospace;
}

/* ─── Ferry card ──────────────────────────────────────────── */
.card-header-ferry {
  background: linear-gradient(135deg, #1565C0, #283593) !important;
}

.ferry-iata {
  color: #283593 !important;
}

.ferry-line {
  background: linear-gradient(90deg, #C5CAE9, #283593, #C5CAE9) !important;
}

.ferry-vessel {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #EDE7F6;
  border: 1px solid #B39DDB;
  border-radius: 10px;
  padding: 9px 14px;
}

.vessel-icon {
  font-size: 1.2rem;
}

.vessel-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: #283593;
  letter-spacing: 0.5px;
}

.ferry-code {
  background: #EDE7F6 !important;
  border-color: #B39DDB !important;
  color: #283593 !important;
}

.passenger-table {
  font-size: 0.84rem;
  color: #333;
  width: 100%;
}

.passenger-row {
  display: grid;
  grid-template-columns: 2fr 1.4fr 1.4fr 0.5fr;
  gap: 6px;
  padding: 5px 4px;
  align-items: center;
  border-bottom: 1px solid #EEE;
}

.passenger-row:last-child {
  border-bottom: none;
}

.passenger-header {
  font-size: 0.73rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #888;
  font-weight: 700;
  border-bottom: 2px solid #BBDEFB !important;
}

.pax-name {
  font-weight: 700;
  color: #0B2545;
}

/* ─── Hotel card ──────────────────────────────────────────── */
.hotel-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.hotel-dates {
  font-weight: 700;
  color: #0B2545;
  font-size: 0.92rem;
}

.hotel-nights {
  font-size: 0.82rem;
  color: #555;
  background: #E0F2F1;
  border: 1px solid #80CBC4;
  padding: 2px 10px;
  border-radius: 20px;
}

.hotel-room {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #F0F7FF;
  border: 1px solid #BBDEFB;
  border-radius: 10px;
  padding: 10px 14px;
}

.room-type-icon {
  font-size: 1.2rem;
}

.room-type-text {
  font-size: 0.92rem;
  font-weight: 600;
  color: #0B2545;
}

.checkin-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkin-block {
  flex: 1;
}

.checkin-block.text-right {
  text-align: right;
}

.checkin-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #888;
  font-weight: 700;
}

.checkin-time {
  font-size: 1.3rem;
  font-weight: 700;
  color: #00695C;
  line-height: 1.2;
}

.checkin-date {
  font-size: 0.78rem;
  color: #555;
}

.checkin-divider {
  font-size: 1.4rem;
  color: #80CBC4;
  flex: 0;
  padding: 0 6px;
}

.confirm-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 0.88rem;
}

.confirm-code {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  font-weight: 700;
  color: #00695C;
  background: #E0F2F1;
  padding: 2px 10px;
  border-radius: 6px;
  border: 1px solid #80CBC4;
}

.trip-id {
  font-size: 0.78rem;
  color: #888;
}

.benefits-heading {
  font-weight: 700;
  font-size: 0.88rem;
  color: #0B2545;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.benefits-list {
  list-style: none;
  padding-left: 4px;
  font-size: 0.9rem;
  color: #333;
}

.benefits-list li {
  padding: 3px 0;
}

.benefit-note {
  font-size: 0.78rem;
  color: #888;
}

.hotel-contact {
  font-size: 0.88rem;
  color: #333;
  line-height: 2;
}

.med-link {
  color: #00695C;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px dashed #80CBC4;
}

.med-link:hover {
  color: #004D40;
}

/* ─── Charter card ────────────────────────────────────────── */
.charter-card {
  border-left-color: #E65100 !important;
}

.card-header-charter {
  background: linear-gradient(135deg, #BF360C, #E65100) !important;
}

.charter-boat {
  background: linear-gradient(120deg, #FFF3E0, #FBE9E7);
  border: 1px solid #FFAB91;
  border-radius: 12px;
  padding: 14px 16px;
}

.boat-name {
  font-weight: 700;
  font-size: 1.05rem;
  color: #BF360C;
  margin-bottom: 8px;
}

.boat-specs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.boat-spec {
  font-size: 0.78rem;
  font-weight: 600;
  color: #4E342E;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #FFCCBC;
  padding: 2px 10px;
  border-radius: 20px;
}

.boat-spec.warn {
  background: #FFF9C4;
  border-color: #FFF176;
  color: #F57F17;
}

.charter-dates {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.charter-date-item {
  flex: 1;
  min-width: 150px;
  background: #FBE9E7;
  border: 1px solid #FFAB91;
  border-radius: 8px;
  padding: 8px 12px;
  text-align: center;
}

.charter-date-label {
  display: block;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #888;
  font-weight: 700;
}

.charter-date-value {
  display: block;
  font-size: 0.88rem;
  font-weight: 700;
  color: #BF360C;
  margin-top: 2px;
}

.charter-company {
  font-size: 0.87rem;
  color: #333;
}

.company-details {
  font-size: 0.84rem;
  line-height: 1.9;
  color: #444;
  padding-left: 4px;
}

/* ─── Sail day blocks ─────────────────────────────────────── */
.sail-day {
  border-left: 3px solid #FFAB91;
  padding: 8px 0 8px 14px;
  margin-bottom: 2px;
  position: relative;
}

.sail-day::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 14px;
  width: 9px;
  height: 9px;
  background: #E65100;
  border-radius: 50%;
  border: 2px solid #FFF;
}

.sail-day-last {
  border-left-color: #BDBDBD;
}

.sail-day-last::before {
  background: #9E9E9E;
}

.sail-day-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.sail-day-date {
  font-size: 0.78rem;
  font-weight: 700;
  color: #BF360C;
  min-width: 85px;
}

.sail-day-island {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0B2545;
}

.sail-nm {
  font-size: 0.75rem;
  font-weight: 600;
  color: #1565C0;
  background: #E3F2FD;
  border: 1px solid #90CAF9;
  padding: 1px 8px;
  border-radius: 20px;
  white-space: nowrap;
}

.sail-day-body {
  padding-left: 0;
}

.sail-fact {
  font-size: 0.85rem;
  color: #444;
  line-height: 1.5;
  margin-bottom: 3px;
}

.island-fact {
  font-size: 0.8rem;
  color: #666;
  background: #FAFAFA;
  border-left: 2px solid #FFE0B2;
  padding: 4px 10px;
  margin-top: 4px;
  border-radius: 0 6px 6px 0;
}

.sail-total {
  font-weight: 700;
  font-size: 0.9rem;
  color: #BF360C;
  text-align: center;
  background: #FFF3E0;
  border: 1px solid #FFAB91;
  border-radius: 8px;
  padding: 8px;
}

/* ─── Fare table ──────────────────────────────────────────── */
.vessel-company {
  font-size: 0.78rem;
  color: #555;
  background: #E8EAF6;
  border: 1px solid #C5CAE9;
  padding: 2px 9px;
  border-radius: 20px;
  margin-left: 4px;
}

.fare-table {
  font-size: 0.84rem;
  color: #333;
  width: 100%;
}

.fare-row {
  display: grid;
  grid-template-columns: 1.8fr 2.2fr 0.6fr;
  gap: 6px;
  padding: 5px 4px;
  align-items: start;
  border-bottom: 1px solid #EEE;
}

.fare-row:last-child {
  border-bottom: none;
}

.fare-header {
  font-size: 0.73rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #888;
  font-weight: 700;
  border-bottom: 2px solid #BBDEFB !important;
  align-items: center;
}

.fare-cabin {
  color: #555;
  font-size: 0.8rem;
}

.fare-amount {
  font-weight: 700;
  color: #283593;
  white-space: nowrap;
}

.fare-subtotal {
  display: flex;
  justify-content: space-between;
  padding: 5px 4px;
  font-size: 0.82rem;
  color: #555;
  border-top: 1px solid #EEE;
}

.fare-total {
  display: flex;
  justify-content: space-between;
  padding: 7px 4px 3px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0B2545;
  border-top: 2px solid #BBDEFB;
}

/* ─── Footer ─────────────────────────────────────────────── */
.footer-text {
  color: #90E0EF;
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

/* ─── Responsive ──────────────────────────────────────────── */
@media (max-width: 600px) {
  .header-names { font-size: 1.2rem !important; }
  .trip-icon    { font-size: 38px; }
  .route-iata   { font-size: 1.4rem; }
  .route-time   { font-size: 1.05rem; }
  .route-middle { width: 44px; }
  .card-header  { font-size: 0.9rem !important; }
}
</style>
