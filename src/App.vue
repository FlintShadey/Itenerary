<script setup></script>

<template>
  <div class="container">
    <header>
      <h1>John Smith & Jessica Miller</h1>
      <p class="subtitle">Travel Itinerary</p>

      <div class="contact-info">
        <p>
          <span class="label">Primary:</span> +1 210 385-9809 (Whatsapp
          available)
        </p>
        <p><span class="label">Secondary:</span> +1 415 860-2970</p>
        <p><span class="label">Email:</span> flintsmith@gmail.com</p>
      </div>
    </header>

    <h2 class="itinerary-heading">Itinerary</h2>

    <div class="itinerary-cards">
      <div class="card">
        <div class="card-date">April 21, 2025</div>
        <div class="card-content">
          <p class="flight">AUS to LHR BA0190 British Airways</p>
        </div>
      </div>

      <div class="card">
        <div class="card-date">April 22, 2025</div>
        <div class="card-content">
          <p class="flight">
            SEN to RAK K8ZCQ51 easy jet 1440pm flight number EZY5739
          </p>
          <div class="accommodation">
            <h3>Riad Palais Sebban</h3>
            <p>
              43 Derb My Abdellah Ben Hssein, Rue el Ksour, Marrakech 40000,
              Morocco
            </p>
            <a href="https://www.palaissebban.com/" target="_blank"
              >Visit website</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-date">April 25, 2025</div>
        <div class="card-content">
          <div class="accommodation">
            <h3>Hotel Riad Bahammou</h3>
            <p>
              Douar Ait Ouffi ASJS Km 26 R 704 Gorges du, Boumalne Dades 45150,
              Morocco
            </p>
            <a href="http://www.riadbahammou.com/" target="_blank"
              >Visit website</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-date">April 27, 2025</div>
        <div class="card-content">
          <div class="accommodation">
            <h3>Riad Semlalia</h3>
            <p>20, Derb Sornass, Derb Ziat, Fès 30110, Morocco</p>
            <p class="phone">+212 535 633 198</p>
            <a href="https://www.riadsemlalia.com/" target="_blank"
              >Visit website</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-date">May 1, 2025</div>
        <div class="card-content">
          <p class="flight">Ryanair 5930 FEZ - MAD</p>
        </div>
      </div>

      <div class="card">
        <div class="card-date">May 4, 2025</div>
        <div class="card-content">
          <p class="flight">AirEuropa MAD -> CUN UX0063</p>
          <div class="accommodation">
            <h3>Wyndham Alltra Playa Del Carmen</h3>
            <p>
              Av. Constituyentes #1, Gonzalo Guerrero, 77710 Playa del Carmen,
              Q.R., Mexico
            </p>
            <p class="phone">+52 984 873 4000</p>
            <a href="https://alltrabyplaya.com/playa-del-carmen" target="_blank"
              >Visit website</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-date">May 8, 2025</div>
        <div class="card-content">
          <p class="flight">AA2588 1145am CUN to AUS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Modern color palette and base styles */
:root {
  --primary: #3a86ff;
  --secondary: #fb5607;
  --background: #f8f9fa;
  --text: #212529;
  --light-text: #6c757d;
  --card-bg: #ffffff;
  --border: #e9ecef;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, sans-serif;
  color: var(--text);
  background-color: var(--background);
  line-height: 1.6;
}

/* Header styling */
header {
  margin-bottom: 3rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.subtitle {
  font-size: 1.5rem;
  color: var(--light-text);
  margin-bottom: 2rem;
}

.contact-info {
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
}

.label {
  font-weight: 600;
  color: var(--primary);
}

/* Itinerary section */
.itinerary-heading {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 2rem 0;
  text-align: center;
  color: var(--secondary);
}

/* Cards */
.itinerary-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card {
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-date {
  background-color: var(--primary);
  color: blue;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
}

.card-content {
  padding: 1.5rem;
}

/* Content styling */
.flight {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.accommodation h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--secondary);
}

.accommodation p {
  margin-bottom: 0.5rem;
}

.phone {
  font-weight: 500;
}

a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-top: 0.5rem;
  transition: color 0.2s;
}

a:hover {
  color: var(--secondary);
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
}
</style>
