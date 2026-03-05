# Bluewave Electronics – Frontend

E-Commerce Frontend für Bluewave Electronics, gebaut mit Next.js.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules

## Setup
```bash
npm install
npm run dev
```

Läuft auf `http://localhost:3000`

## Backend

Das zugehörige Backend-Repository ist zu finden auf `https://github.com/Gmed28/BluewaveShopBackend`

Das Frontend erwartet die Django REST API auf `http://localhost:8000/api/`.

### Endpoints

- `GET /api/products/` – Alle Produkte
- `GET /api/products/{id}/` – Einzelnes Produkt
- `POST /api/products/create/` – Produkt anlegen
- `PUT /api/products/{id}/` – Produkt bearbeiten
- `DELETE /api/products/{id}/` – Produkt löschen

## Projektstruktur
```
app/              → Seiten (App Router)
components/       → Wiederverwendbare Komponenten
lib/              → API-Funktionen, Typen, Mock-Daten
```

## Team

- Frontend: [@SteffZeroEx](https://github.com/SteffZeroEx); [@TheRedTiger08](https://github.com/TheRedTiger08); [@Julian]();
- Backend: [@Gmed28](https://github.com/Gmed28); [@Ms-Lepidoptera](https://github.com/Ms-Lepidoptera); [@Fiftyeight58](https://github.com/Fiftyeight58); [@florian199812](https://github.com/florian199812);