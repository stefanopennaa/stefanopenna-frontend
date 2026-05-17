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
