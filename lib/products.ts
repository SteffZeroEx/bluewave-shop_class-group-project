// === Dummy Daten ===


import { Product } from "./types";

export const products: Product[] = [
  {
    product_id: 1,
    product_name: "LED Display Blau",
    short_description: "Kompakte LED Display für Prototypen",
    product_description:
      "Hochwertiges blaues LED Display, ideal für Arduinoe und Raspberry Pi Projekte, Einfache Integration.",
    stock: 186,
    price: 11.0,
    product_image: "https://picsum.photos/300/300?random=1",
  },
  {
    product_id: 2,
    product_name: "OLED Monitor",
    short_description:
      "Hochauflösender OLED-Monitor mit lebendigen Farben, tiefem Schwarz und schneller Reaktionszeit für Gaming und professionelle Anwendungen.",
    product_description:
      "Dieser OLED-Monitor liefert eine außergewöhnliche Bildqualität mit perfektem Schwarz, intensiven Farben und einem extrem hohen Kontrastverhältnis. Dank der schnellen Reaktionszeit eignet er sich ideal für Gaming, kreative Arbeit und Multimedia. Die moderne OLED-Technologie sorgt für eine präzise Farbdarstellung und ein immersives Seherlebnis – perfekt für anspruchsvolle Nutzer, die höchste Bildqualität erwarten.",
    stock: 73,
    price: 139,
    product_image: "https://picsum.photos/300/300?random=2",
  },
  {
    product_id: 3,
    product_name: "Smartphone",
    short_description:
      "Leistungsstarkes Smartphone mit hochauflösendem Display, schneller Performance und vielseitiger Kamera.",
    product_description:
      "Dieses Smartphone kombiniert moderne Technologie mit elegantem Design. Das hochauflösende Display sorgt für brillante Darstellung von Fotos, Videos und Apps. Ein leistungsstarker Prozessor ermöglicht flüssiges Multitasking und schnelle Reaktionszeiten. Mit der integrierten Kamera lassen sich beeindruckende Fotos und Videos aufnehmen – ideal für Alltag, Arbeit und Unterhaltung.",
    stock: 57,
    price: 379,
    product_image: "https://picsum.photos/300/300?random=3",
  },
  {
    product_id: 4,
    product_name: "Tastatur",
    short_description: "Moderne Tastatur mit angenehmem Tippgefühl und zuverlässiger Eingabe für Arbeit und Gaming.",
    product_description:
      "Diese Tastatur überzeugt durch ein komfortables Tippgefühl und eine präzise Eingabe. Die langlebigen Tasten sorgen für eine zuverlässige Nutzung im Alltag, egal ob beim Schreiben, Programmieren oder Gaming. Das schlanke Design passt ideal auf jeden Arbeitsplatz und unterstützt effizientes und angenehmes Arbeiten.",
    stock: 137,
    price: 90,
    product_image: "https://picsum.photos/300/300?random=4",
  },
  {
    product_id: 5,
    product_name: "Computer Maus",
    short_description: "Ergonomische Computermaus mit präzisem Sensor für komfortables und effizientes Arbeiten.",
    product_description:
      "Diese ergonomisch gestaltete Computermaus bietet präzise Steuerung und hohen Bedienkomfort. Der moderne Sensor ermöglicht exakte Bewegungen auf verschiedenen Oberflächen und eignet sich sowohl für Büroarbeit als auch für Gaming. Durch die angenehme Form liegt die Maus auch bei längerer Nutzung komfortabel in der Hand.",
    stock: 111,
    price: 50,
    product_image: "https://picsum.photos/300/300?random=5",
  },
];
