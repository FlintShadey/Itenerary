<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Ferry: Sorrento → Capri -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#9973;</span>
              Ferry &mdash; Sorrento &rarr; Capri &nbsp;&middot;&nbsp; Sun, Jun 21, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="flight-route mb-3">
                <div class="route-endpoint">
                  <div class="route-time">8:29 AM</div>
                  <div class="route-city">Sorrento</div>
                  <div class="route-sub">Deck 1</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#9973;</span>
                  <div class="route-arrow-line ferry-line"></div>
                  <div class="route-duration">25 min</div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-time">8:54 AM</div>
                  <div class="route-city">Capri</div>
                </div>
              </div>

              <div class="confirm-row mb-1">
                <span class="detail-label">Operator:</span>
                <span>General Gruson &nbsp;&middot;&nbsp; Alilauro Gruson</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Booking Ref:</span>
                <span class="confirm-code ferry-code">50008TVUBI</span>
              </div>
              <div class="confirm-row mb-2">
                <span class="detail-label">Class:</span>
                <span>Full Fare &nbsp;&middot;&nbsp; Deck-Lounge</span>
              </div>

              <table class="passenger-table mb-2">
                <tr class="passenger-row">
                  <td class="pax-name">John Smith</td>
                  <td><span class="confirm-code" style="font-size:0.78rem;">R1414469</span></td>
                </tr>
                <tr class="passenger-row">
                  <td class="pax-name">Jessica Miller</td>
                  <td><span class="confirm-code" style="font-size:0.78rem;">R1414470</span></td>
                </tr>
              </table>

              <div class="hotel-contact mb-3">
                <div><span class="detail-label">&#128222; Call Centre:</span> <a href="tel:+390814972238" class="med-link">+39 081 4972238</a></div>
                <div><span class="detail-label">&#128242; WhatsApp:</span> <a href="https://wa.me/393351278104" target="_blank" rel="noopener" class="med-link">+39 335 1278104</a></div>
              </div>

              <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#128247; Boarding QR Codes</div>
              <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;margin-bottom:4px;">
                <div style="text-align:center;">
                  <div style="font-size:0.8rem;font-weight:600;color:#555;margin-bottom:6px;">John &mdash; R1414469</div>
                  <img :src="'/John Sorrento to Capri QR.png'" alt="John boarding QR" style="width:140px;height:140px;border:1px solid #ddd;border-radius:8px;" />
                </div>
                <div style="text-align:center;">
                  <div style="font-size:0.8rem;font-weight:600;color:#555;margin-bottom:6px;">Jessica &mdash; R1414470</div>
                  <img :src="'/Jessica Sorrento to Capri QR.png'" alt="Jessica boarding QR" style="width:140px;height:140px;border:1px solid #ddd;border-radius:8px;" />
                </div>
              </div>

            </v-card-text>
          </v-card>

          <!-- Blue Grotto Boat Tour -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#0D47A1 0%,#1565C0 55%,#1976D2 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127700;</span>
              Capri Island Boat Tour with Blue Grotto Stop &nbsp;&middot;&nbsp; 10:00 AM
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="confirm-row mb-3" style="display:flex;align-items:center;gap:8px;">
                <span class="detail-label">Status:</span>
                <v-chip size="small" color="#E65100" variant="elevated" style="font-weight:600;">Reserved &mdash; No payment made yet</v-chip>
              </div>

              <v-alert type="warning" variant="tonal" class="mb-3" density="compact">
                <strong>&#9201; Arrive by 9:55 AM</strong> &mdash; 5 minutes before your 10:00 AM slot.
              </v-alert>

              <div class="confirm-row mb-1">
                <span class="detail-label">Activity Date:</span>
                <span>June 21, 2026 &nbsp;&middot;&nbsp; 10:00 AM</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Duration:</span>
                <span>2 hours</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Guests:</span>
                <span>2 Adults</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Language:</span>
                <span>English</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Total Cost:</span>
                <span style="font-weight:700;color:#1B5E20;">$58.72</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Payment:</span>
                <span>Card auto-charged <strong>June 18, 2026</strong>.</span>
              </div>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2">&#128205; Meeting Point</div>
              <div class="hotel-contact mb-2">
                <div>Molo Numero 0, Porto di Capri, Marina Grande, 80073 Capri NA, Italia</div>
                <div style="font-size:0.82rem;color:#555;margin-top:4px;">Go to Dock 0, Port of Capri (Motoscafisti Capri). Show your ticket and board the first available island tour.</div>
                <div style="font-size:0.82rem;color:#555;margin-top:2px;">Departures every ~30 minutes from 9:45 AM to 2:00 PM daily.</div>
                <div class="mt-2"><span class="detail-label">End Point:</span> Returns to starting location.</div>
              </div>

              <img :src="'/Capri Boat Tour meeting spot .webp'" alt="Capri Boat Tour meeting point" style="width:100%;max-width:340px;border-radius:10px;border:1px solid #ddd;display:block;margin-bottom:12px;margin-top:8px;" />

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-1" style="font-size:0.85rem;">&#9989; Included</div>
              <ul class="benefits-list mb-2">
                <li>Capri island boat tour</li>
                <li>Crew &amp; Captain</li>
              </ul>
              <div class="benefits-heading mb-1" style="font-size:0.85rem;">&#10060; Not Included</div>
              <ul class="benefits-list mb-3">
                <li>Blue Grotto entry by rowboat &mdash; purchase on the spot (~&euro;18)</li>
              </ul>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#9888;&#65039; Important Notes</div>
              <ul class="benefits-list mb-3">
                <li><strong>Weather:</strong> Full refund or replacement tour if weather is adverse.</li>
                <li><strong>Blue Grotto wait:</strong> If wait exceeds 60 min, crew may return to port &mdash; you'll receive a free Blue Grotto-only ticket.</li>
                <li><strong>Boat type:</strong> Subject to change based on availability.</li>
                <li><strong>Cancellation:</strong> Cancel before <strong>10:00 AM on June 20, 2026</strong> for a full refund.</li>
              </ul>

              <v-divider class="my-3"></v-divider>

              <div class="benefits-heading mb-2" style="font-size:0.85rem;">&#128273; Booking References</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Activity Provider:</span>
                <span>Motoscafisti Capri</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Booking Ref:</span>
                <span class="confirm-code ferry-code">GYG7VKZRZH3Q</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">PIN:</span>
                <span class="confirm-code">AqqxPS=w</span>
              </div>

              <v-alert type="info" variant="tonal" density="compact">
                &#128241; <strong>Tip:</strong> Download the GetYourGuide app to manage your booking and access mobile tickets.
              </v-alert>

            </v-card-text>
          </v-card>

          <!-- Lunch: Da Paolino -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-activity">
              <span class="card-header-icon">&#127869;</span>
              Lunch &mdash; Da Paolino &nbsp;&middot;&nbsp; 1:00 PM
            </v-card-title>
            <v-card-text class="pa-4">
              <div class="confirm-row mb-2">Famous lemon-tree canopy restaurant in Capri.</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">&#127758; Reserve:</span>
                <a href="https://www.paolinocapri.com" target="_blank" rel="noopener" class="med-link">paolinocapri.com &#8599;</a>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">&#128140; Email:</span>
                <a href="mailto:booking@paolinocapri.com" class="med-link">booking@paolinocapri.com</a>
              </div>
              <v-alert type="info" variant="tonal" density="compact">
                &#128395; Email Da Paolino in <strong>May</strong> to confirm the lunch reservation.
              </v-alert>
            </v-card-text>
          </v-card>

          <!-- Return Ferry: Capri → Sorrento -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header card-header-ferry">
              <span class="card-header-icon">&#9973;</span>
              Return Ferry &mdash; Capri &rarr; Sorrento &nbsp;&middot;&nbsp; Sun, Jun 21, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <div class="flight-route mb-3">
                <div class="route-endpoint">
                  <div class="route-time">6:35 PM</div>
                  <div class="route-city">Capri</div>
                  <div class="route-sub">Deck-Lounge</div>
                </div>
                <div class="route-middle">
                  <span class="route-arrow-plane">&#9973;</span>
                  <div class="route-arrow-line ferry-line"></div>
                  <div class="route-duration">32 min</div>
                </div>
                <div class="route-endpoint text-right">
                  <div class="route-time">7:07 PM</div>
                  <div class="route-city">Sorrento</div>
                </div>
              </div>

              <div class="confirm-row mb-1">
                <span class="detail-label">Operator:</span>
                <span>Laser Capri</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Booking Ref:</span>
                <span class="confirm-code ferry-code">50008TVUBI</span>
              </div>
              <div class="confirm-row mb-2">
                <span class="detail-label">Class:</span>
                <span>Full Fare &nbsp;&middot;&nbsp; Deck-Lounge</span>
              </div>

              <table class="passenger-table mb-2">
                <tr class="passenger-row">
                  <td class="pax-name">John Smith</td>
                  <td><span class="confirm-code" style="font-size:0.78rem;">R1414469</span></td>
                </tr>
                <tr class="passenger-row">
                  <td class="pax-name">Jessica Miller</td>
                  <td><span class="confirm-code" style="font-size:0.78rem;">R1414470</span></td>
                </tr>
              </table>

              <div class="hotel-contact mb-0">
                <div><span class="detail-label">&#128222; Call Centre:</span> <a href="tel:+390814972238" class="med-link">+39 081 4972238</a></div>
                <div><span class="detail-label">&#128242; WhatsApp:</span> <a href="https://wa.me/393351278104" target="_blank" rel="noopener" class="med-link">+39 335 1278104</a></div>
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
