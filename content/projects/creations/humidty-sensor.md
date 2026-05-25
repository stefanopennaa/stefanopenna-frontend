{
"title": "Humidity Sensor - ESP8266 + SSD1306",
"date": "2026-05-01T00:00:00Z",
"image": "https://cdn.stefanopenna.it/images/ESP12F/humidity-sensor.png",
"link": "https://github.com/stefanopennaa/humidity-sensor",
"description": "Firmware per un monitor di umidità del suolo basato su ESP8266, con sensore capacitivo, display OLED SSD1306, dashboard web responsive, storico 24h su LittleFS, notifiche email automatiche via Resend e aggiornamenti OTA.",
"tags": [
"Embedded",
"ESP8266",
"C++",
"Arduino",
"IoT",
"LittleFS",
"OTA",
"REST API",
"DHT11",
"SSD1306",
"Resend",
"WiFi"
],
"fact": "",
"featured": true
}

Firmware hobby per un monitor di umidità del suolo basato su ESP8266, sviluppato con Arduino IDE. Il dispositivo legge l'umidità del suolo tramite un sensore capacitivo su A0 e la temperatura/umidità ambientale tramite un DHT11 su D2, mostrando i valori su un display OLED SSD1306 (I2C su D5/D6).

Mi sono occupato dell'intero progetto, dalla scelta dell'architettura firmware alla gestione del ciclo di vita della connettività WiFi, fino all'integrazione dei vari sottosistemi: web server, storico su filesystem, email e OTA.

In particolare ho curato la realizzazione della dashboard web responsive con grafico dello storico 24h, il salvataggio dei campioni su LittleFS con rolling retention, il sistema di notifiche email automatiche (riepilogo giornaliero e alert umidità bassa) via API Resend con preflight di rete, validazione heap e TLS, la robustezza della connettività WiFi con debounce disconnect e recovery automatico, e l'endpoint OTA per aggiornamenti firmware over-the-air.

<table class="image-gallery mb-2">
  <tr>
    <td><img src="https://cdn.stefanopenna.it/images/ESP12F/humidity-sensor.png" alt="Humidity Sensor — dashboard" width="100%"></td>
  </tr>
</table>

Un ringraziamento speciale a [PCBWay](https://www.pcbway.com/) per aver sponsorizzato il progetto con un sample gratuito dello shield 3D che ho progettato per l'ESP8266. Lo shield mi ha permesso di realizzare un enclosure compatto e robusto per il microcontrollore, mantenendo il montaggio ordinato e più adatto all'uso quotidiano. PCBWay offre servizi di produzione PCB, assemblaggio e stampa 3D di alta qualità a prezzi competitivi, con un ottimo supporto per maker, studenti e piccoli team.

<table class="image-gallery mb-2">
  <tr>
    <td><img src="https://cdn.stefanopenna.it/images/PCBWay/PCBWay_1.png" alt="PCBWay shield 3D per ESP8266 — vista 1" width="100%"></td>
    <td><img src="https://cdn.stefanopenna.it/images/PCBWay/PCBWay_2.png" alt="PCBWay shield 3D per ESP8266 — vista 2" width="100%"></td>
    <td><img src="https://cdn.stefanopenna.it/images/PCBWay/PCBWay_3.png" alt="PCBWay shield 3D per ESP8266 — vista 3" width="100%"></td>
  </tr>
</table>
