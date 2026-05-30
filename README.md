# ClaimYourOffer UI

A mobile-first Next.js web app that powers charitable campaign landing pages for FreeDrops.ae. Users scan a QR code or follow a campaign link, see that their purchase donated 20 Fils to charity, and are presented with an exclusive offer they can claim by submitting their contact details.

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript 5 |
| Skeleton loading | react-loading-skeleton |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # / — Campaign landing page
│   ├── claim/
│   │   └── page.tsx             # /claim — Lead capture form
│   ├── success/
│   │   └── page.tsx             # /success — Confirmation screen
│   ├── whatsapp-campaign/
│   │   └── page.tsx             # /whatsapp-campaign — WhatsApp variant
│   └── campaign-error/
│       └── page.tsx             # /campaign-error — Expired link error
└── components/
    ├── PageHeader.tsx           # Samsung logo header (with skeleton)
    └── PageFooter.tsx           # FreeDrops branding + nav footer
```

## Page Routes

### `GET /`
**Campaign Landing Page**

The main entry point. Displays:
- Charity impact message ("You Just Donated 20 Fils")
- Three-tab section: **Offers** (Samsung Galaxy S24 Ultra promo card), **About**, **Contact**
- "Claim Offer" CTA button → navigates to `/claim`

---

### `GET /claim`
**Lead Capture Form**

Collects user contact details:
- Full Name (text input)
- Mobile Number (UAE +971 prefix, tel input)
- Submit button → navigates to `/success`

> **Note:** Form submission currently simulates an 800ms delay. The backend integration (`TODO: submit lead to backend`) is not yet implemented.

---

### `GET /success`
**Offer Confirmation Screen**

Shown after successful form submission:
- Success checkmark animation
- "Offer unlocked" message
- Support phone number: `+971 55 333 3333`
- "Done" button → returns to `/`

---

### `GET /whatsapp-campaign`
**WhatsApp Campaign Variant**

Identical layout to `/` but the CTA is "Claim on WhatsApp" (green WhatsApp button) instead of the standard claim flow. The button currently links to `/campaign-error`.

---

### `GET /campaign-error`
**Expired / Invalid Campaign Link**

Shown when a campaign link is no longer active:
- Error state UI
- "Visit Website" CTA → `https://freedrops.ae`
- WhatsApp support link → `https://wa.me/971553333333` with pre-filled message

---

## User Flow

```
/ (Campaign Page)
│
├─► /claim (Enter name + phone)
│       │
│       └─► /success (Confirmation)
│                   │
│                   └─► / (Done)
│
/whatsapp-campaign
│
└─► /campaign-error (Link expired)
        │
        ├─► https://freedrops.ae
        └─► WhatsApp support
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run start
```

## Branding

- **Samsung** logo served from `/public/samsunglogo.png`
- **FreeDrops** logo served from `/public/freedrops.png`
- Brand red: `#a8201a`
- All pages are constrained to a 430px max-width mobile card (with `md:rounded-[3rem]` on desktop)

## Copyright

© 2026 Freewater Advertising LLC — Powered by FreeDrops.ae
