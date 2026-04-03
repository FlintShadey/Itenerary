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
