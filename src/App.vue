<template>
  <v-app class="med-app">
    <!-- Floating Mediterranean decorations -->
    <div class="deco deco-1">&#9875;</div>
    <div class="deco deco-2">&#9728;</div>
    <div class="deco deco-3">&#9973;</div>
    <div class="deco deco-4">&#9875;</div>

    <router-view />
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
  background:
    linear-gradient(135deg, rgba(11,37,69,0.72) 0%, rgba(19,75,126,0.60) 50%, rgba(11,37,69,0.72) 100%),
    url('/GreeceItaly Background.png') center center / cover no-repeat !important;
  color: #fff !important;
  border: 2px solid rgba(144, 224, 239, 0.45);
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

.sail-day-remote {
  border-left-color: #E65100;
}

.sail-day-remote::before {
  background: #E65100;
  border-color: #FF8A65;
}

.sail-remote-badge {
  font-size: 0.68rem;
  font-weight: 800;
  color: #FFF;
  background: #E65100;
  border: 1px solid #BF360C;
  padding: 1px 8px;
  border-radius: 20px;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.sail-coords {
  font-size: 0.78rem;
  color: #1565C0;
  font-family: 'Courier New', monospace;
  background: #E3F2FD;
  border-left: 2px solid #90CAF9;
  padding: 3px 10px;
  margin-top: 3px;
  border-radius: 0 6px 6px 0;
}

/* ─── Crew list ───────────────────────────────────────────── */
.crew-boat-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #0B2545;
  background: #E3F2FD;
  border-left: 3px solid #1565C0;
  padding: 4px 12px;
  border-radius: 0 6px 6px 0;
}

.crew-table {
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  overflow: hidden;
}

.crew-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.6fr;
  gap: 8px;
  padding: 7px 12px;
  font-size: 0.8rem;
  border-bottom: 1px solid #F0F0F0;
  align-items: center;
}

.crew-row:last-child {
  border-bottom: none;
}

.crew-header {
  background: #0B2545;
  color: #FFF;
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.crew-row-self {
  background: #E8F5E9;
  border-left: 3px solid #2E7D32;
}

.crew-name {
  font-weight: 600;
  color: #1A237E;
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

