{
"title": "SmallTV RSS - ESP8266 + ST7789",
"date": "2026-03-15T00:00:00Z",
"image": "https://cdn.stefanopenna.it/images/ESP12F/small-tv-rss.png",
"link": "https://github.com/stefanopennaa/small-tv-rss",
"description": "Firmware per il GeekMagic SmallTV (ESP8266 + ST7789) con meteo OpenWeatherMap, notizie RSS ANSA, orologio NTP, monitoraggio GTT, dashboard web responsive e aggiornamenti OTA.",
"tags": [
"Embedded",
"ESP8266",
"C++",
"Arduino",
"IoT",
"OTA",
"REST API",
"ST7789",
"OpenWeatherMap",
"RSS",
"NTP",
"WiFi"
],
"fact": "",
"featured": true
}

Firmware hobby per il GeekMagic SmallTV, un piccolo display a colori basato su ESP8266 con schermo ST7789 240×240. Il dispositivo alterna su TFT diverse schermate: meteo in tempo reale da OpenWeatherMap, notizie RSS di ANSA con rotazione automatica, orologio NTP con gestione del fuso orario italiano (CET/CEST) e partenze GTT da due fermate configurabili in un layout 4×2.

Mi sono occupato dell'intero progetto, dalla progettazione del firmware alla messa a punto della robustezza della connettività WiFi, fino all'integrazione dei vari sottosistemi: rendering TFT, web server, recupero dati remoti e OTA.

In particolare ho curato la realizzazione della dashboard web responsive con badge di stato online in tempo reale e controllo luminosità display, la gestione della resilienza WiFi con health-check periodico end-to-end e recovery automatico soglia-based, la correzione di una race condition nel loop principale e di falsi positivi nel badge di stato, la tipografia TFT con font OswaldSemiBold per le schermate GTT, e l'endpoint OTA per aggiornamenti firmware over-the-air.

<table class="image-gallery mb-2">
  <tr>
    <td><img src="https://cdn.stefanopenna.it/images/ESP12F/small-tv-rss.png" alt="SmallTV RSS — dashboard" width="100%"></td>
  </tr>
</table>
