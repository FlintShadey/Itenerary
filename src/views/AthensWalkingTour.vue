<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#4A148C 0%,#6A1B9A 55%,#9C27B0 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127981;</span>
              Athens Walking Tour &mdash; Full Details &nbsp;&middot;&nbsp; Wed, Jun 03, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <!-- Status -->
              <div class="confirm-row mb-3" style="display:flex;align-items:center;gap:8px;">
                <span class="detail-label">Status:</span>
                <v-chip size="small" color="#E65100" variant="elevated" style="font-weight:600;">Booking Requested &mdash; Pending Guide Acceptance</v-chip>
              </div>

              <!-- Booking refs -->
              <div class="confirm-row mb-1">
                <span class="detail-label">Booking Reference:</span>
                <span class="confirm-code ferry-code">#CQZDHZ</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Tour #:</span>
                <span class="confirm-code">217591</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Booked by:</span>
                <span>Flint Smith</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Booking Date:</span>
                <span>May 19, 2026</span>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Itinerary -->
              <div class="benefits-heading mb-2">&#127981; What You&rsquo;ll Explore (3 Hours)</div>
              <ul class="benefits-list mb-4">
                <li>Collections of the <strong>Acropolis Museum</strong></li>
                <li>Ancient theatre of <strong>Dionysos</strong> and remnants of the ancient city</li>
                <li>Original ancient path to the Acropolis &mdash; monuments of the South Slope (Temple of Asclepios, Thrasyllos Monument, cisterns)</li>
                <li>Views of <strong>Philopappus Hill</strong> &amp; monument, Herodes Atticus Odeon</li>
                <li>Views over Mars Hill, Pnyx, Ancient Agora</li>
                <li>Acropolis monuments &mdash; <strong>Parthenon, Propylaia, Temple of Nike, Erechtheion</strong></li>
              </ul>

              <v-divider class="my-4"></v-divider>

              <!-- Guide -->
              <div class="benefits-heading mb-2">&#128100; Tour Guide</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Guide:</span>
                <span><strong>Maria S.</strong> &nbsp;&middot;&nbsp; Guide #13580</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Languages:</span>
                <span>English (Fluent) &nbsp;&middot;&nbsp; Greek (Fluent) &nbsp;&middot;&nbsp; French (Conversational)</span>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Price -->
              <div class="benefits-heading mb-2">&#128176; Price Details</div>
              <div class="fare-table mb-3">
                <div class="fare-row fare-header">
                  <span>Item</span>
                  <span class="text-right">Amount</span>
                </div>
                <div class="fare-row">
                  <span>Tour Cost</span>
                  <span class="fare-amount text-right">$460.75</span>
                </div>
                <div class="fare-row">
                  <span>Service Fee</span>
                  <span class="fare-amount text-right">$31.16</span>
                </div>
                <div class="fare-row">
                  <span>Standard Cancellation Policy</span>
                  <span class="fare-amount text-right">$0.00</span>
                </div>
                <div class="fare-total">
                  <span>Total</span>
                  <span class="text-right">$491.91 USD</span>
                </div>
                <div class="fare-subtotal">
                  <span>Amount Paid</span>
                  <span class="text-right">$0.00</span>
                </div>
                <div class="fare-subtotal" style="color:#C62828;font-weight:700;">
                  <span>Balance Due</span>
                  <span class="text-right">$491.91 USD</span>
                </div>
              </div>
              <p style="font-size:0.82rem;color:#666;margin-bottom:16px;">&#9432; Payment will be charged once the booking is accepted by the guide.</p>

              <v-divider class="my-4"></v-divider>

              <!-- Included / Not Included -->
              <div class="benefits-heading mb-1" style="font-size:0.85rem;">&#9989; Included</div>
              <ul class="benefits-list mb-3">
                <li>Private guide (Maria S.)</li>
              </ul>
              <div class="benefits-heading mb-1" style="font-size:0.85rem;">&#10060; Not Included</div>
              <ul class="benefits-list mb-3">
                <li>Personal expenses</li>
                <li><strong>Acropolis ticket: &euro;30</strong> per person</li>
                <li><strong>Acropolis Museum: &euro;20</strong> per person</li>
                <li>Souvenirs, food, drinks, snacks</li>
              </ul>

              <v-alert type="warning" variant="tonal" density="comfortable" class="mb-4">
                <strong>&#127981; Buy Acropolis Tickets in Advance!</strong><br>
                <span style="font-size:0.87rem;line-height:1.6;">Tickets sell out fast, especially in high season. Contact Maria S. for the official link and timing details. Do <strong>not</strong> purchase from third-party sites &mdash; tickets may not be valid.</span>
              </v-alert>

              <v-divider class="my-4"></v-divider>

              <!-- Logistics -->
              <div class="benefits-heading mb-2">&#128205; Meeting Point</div>
              <div class="hotel-contact mb-3">
                <div><span class="detail-label">Address:</span> 43 Rovertou Galli, Athina, 117 42, Greece</div>
                <div style="margin-top:6px;">
                  <a href="https://www.google.com/maps/search/?api=1&query=43+Rovertou+Galli+Athens+Greece" target="_blank" rel="noopener" class="med-link">&#128506; View on Google Maps</a>
                </div>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Transportation:</span>
                <span>Walking tour &mdash; no transport included</span>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Activity details -->
              <div class="benefits-heading mb-2">&#127939; Activity Details</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Activity Level:</span>
                <span>Moderate</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Accessibility:</span>
                <span>Kid Friendly</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Categories:</span>
                <span>Museums &nbsp;&middot;&nbsp; City Highlights &nbsp;&middot;&nbsp; History</span>
              </div>

              <v-divider class="my-4"></v-divider>

              <!-- Emergency & Support -->
              <div class="benefits-heading mb-2">&#128222; Emergency &amp; Support</div>
              <v-alert type="error" variant="tonal" density="compact" class="mb-3">
                <strong>Emergency Line:</strong> <a href="tel:+16046367058" class="med-link">+1-604-636-7058</a> (if unable to reach guide)
              </v-alert>
              <div class="hotel-contact mb-3">
                <div><span class="detail-label">&#128222; Customer Support:</span> <a href="tel:+16047774141" class="med-link">+1-604-777-4141</a></div>
                <div style="margin-top:4px;font-size:0.85rem;color:#555;">Communicate all changes through the ToursByLocals messaging system to keep records in one place.</div>
              </div>

            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
