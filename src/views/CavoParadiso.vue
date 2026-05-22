<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-btn variant="text" color="white" class="mb-4 pl-0" @click="$router.back()">
            &#8592; Back to Itinerary
          </v-btn>

          <!-- Confirmation Card -->
          <v-card hover elevation="4" class="mb-6 itinerary-card">
            <v-card-title class="card-header" style="background:linear-gradient(135deg,#1A237E 0%,#283593 55%,#3F51B5 100%)!important;color:#fff!important;">
              <span class="card-header-icon">&#127881;</span>
              Cavo Paradiso &mdash; Table Booking Confirmed &nbsp;&middot;&nbsp; Sat, Jun 06, 2026
            </v-card-title>
            <v-card-text class="pa-4">

              <v-alert type="success" variant="tonal" density="compact" class="mb-4">
                &#10003; <strong>Table Confirmed</strong> &mdash; PRF Area (PRFX04) &nbsp;&middot;&nbsp; 2 guests &nbsp;&middot;&nbsp; Jun 06–07, 2026
              </v-alert>

              <!-- Event details -->
              <div class="benefits-heading mb-2">&#127881; Event Details</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Date:</span>
                <span>Saturday, Jun 06, 2026</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Entry Time:</span>
                <span><strong>00:20</strong> &mdash; technically early morning Jun 07</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Guest:</span>
                <span>Jessica Heathcock</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Guests:</span>
                <span>2</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">DJs:</span>
                <span>Agent Greg &nbsp;&middot;&nbsp; Junior Rush &nbsp;&middot;&nbsp; Tsouko G &nbsp;&middot;&nbsp; Mareen</span>
              </div>

              <v-divider class="my-3"></v-divider>

              <!-- Table & Payment -->
              <div class="benefits-heading mb-2">&#128179; Table &amp; Payment</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Table:</span>
                <span class="confirm-code">PRFX04</span>
                <span style="margin-left:6px;font-size:0.85rem;opacity:0.75;">PRF Area</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Total:</span>
                <span style="font-weight:700;">&euro;600</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Deposit Paid:</span>
                <span style="font-weight:700;color:#2E7D32;">&euro;300 &#10003;</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Balance Due:</span>
                <span style="font-weight:700;color:#C62828;">&euro;300</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Transaction ID:</span>
                <span class="confirm-code" style="font-size:0.85rem;">35017397557</span>
              </div>
              <div class="confirm-row mb-3">
                <span class="detail-label">Order ID:</span>
                <span class="confirm-code" style="font-size:0.85rem;">MT260522172617</span>
              </div>

              <v-divider class="my-3"></v-divider>

              <!-- Entry Instructions -->
              <div class="benefits-heading mb-2">&#128681; Entry Instructions</div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">Entrance:</span>
                <span style="font-weight:600;color:#1565C0;">Use the <strong>VIP entrance</strong></span>
              </div>
              <div class="confirm-row mb-1" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">Check In:</span>
                <span>With <strong>Mr. Panos Apostolidis</strong></span>
              </div>
              <div class="confirm-row mb-3" style="align-items:flex-start;">
                <span class="detail-label" style="min-width:110px;">Phone:</span>
                <a href="https://wa.me/306948504989" target="_blank" rel="noopener" class="med-link" style="font-weight:600;">&#128242; +30 6948 504989 (WhatsApp) &#8599;</a>
              </div>

              <v-alert type="warning" variant="tonal" density="compact" class="mb-3">
                &#128248; <strong>Action Required:</strong> Screenshot this confirmation and send it to Mr. Panos Apostolidis via WhatsApp at <strong>+30 6948 504989</strong>
              </v-alert>

              <v-divider class="my-3"></v-divider>

              <!-- Cancellation Policy -->
              <div class="benefits-heading mb-2">&#128221; Cancellation Policy</div>
              <ul style="font-size:0.88rem;line-height:1.7;padding-left:1.2rem;color:#555;">
                <li>All deposits are <strong>final and non-refundable</strong>.</li>
                <li>Confirmed reservations <strong>cannot be cancelled, amended, or changed</strong>.</li>
                <li><strong>Exception:</strong> if the scheduled DJ cancels on your booked night, you may transfer your reservation to another date or request a full refund.</li>
              </ul>

              <v-divider class="my-3"></v-divider>

              <!-- Contact -->
              <div class="benefits-heading mb-2">&#128140; Contact</div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Confirmed by:</span>
                <span>Margharita Antonini &nbsp;&middot;&nbsp; Cavo Paradiso Club</span>
              </div>
              <div class="confirm-row mb-1">
                <span class="detail-label">Booking Phone:</span>
                <span>+1 415 860 2970</span>
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
