<script setup></script>

<template>
  <div class="itinerary">
    <h1>John Smith & Jessica Miller</h1>
    <h1>Travel Itinerary</h1>
    <h2>telephone number: +1 210 385-9809 (Whatsapp available)</h2>
    <h2>alternate phone number: +1 415 860-2970</h2>
    <h3>email: flintsmith@gmail.com</h3>
    <h1 class="heading-spacing">Itinerary:</h1>

    <div class="day centered">
      <p class="larger-text">
        April 21, 2025 
      </p>
      <p>AUS to LHR BA0190 British Airways </p>
      <p class="larger-text">
        April 22, 2025 
      </p>
      <p>SEN to RAK K8ZCQ51 easy jet  1440pm flight number 
EZY5739	</p>
      <p>Riad Palais Sebban 43 Derb My Abdellah Ben Hssein,, Rue el Ksour, Marrakech 40000, Morocco https://www.palaissebban.com/</p>
      <p>April 25</p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.itinerary {
  margin: 2em;
}
.day {
  margin-bottom: 1em;
}
.heading-spacing {
  margin-bottom: 2em;
}
.centered {
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
}
.larger-text {
  font-size: 1.5em;
}
</style>
