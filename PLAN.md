# QR Site Project Plan

## 1. Project Overview

The goal of this project is to build a modern, maintainable, and production-ready QR Code Generator website.

This project is **web-only**.

The first version focuses exclusively on generating QR Codes.

QR scanning is intentionally excluded from the project because it is outside the scope of the MVP.

The application should be ready for deployment on Vercel.

---

# 2. Technology Stack

The project must use:

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- react-qr-code (preferred)

Additional libraries may be used only if they clearly improve maintainability.

---

# 3. Development Principles

The project must be designed from the beginning to be:

- Modular
- Scalable
- Maintainable
- Easy to extend
- Production-ready

General rules:

- Separate UI from business logic.
- Build reusable components.
- Never hardcode colors.
- Never hardcode Persian UI strings.
- Keep configuration centralized.
- Keep validation centralized.
- Prefer composition over duplication.
- Keep the codebase clean and readable.

---

# 4. Folder Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    common/
      Button.tsx
      Card.tsx
      Input.tsx
      Toast.tsx

    qr/
      QrGenerator.tsx
      QrPreview.tsx
      QrActions.tsx

  config/
    app.ts

  localization/
    fa.ts
    i18n.ts

  theme/
    colors.ts
    spacing.ts
    typography.ts

  utils/
    validators.ts
    downloadQr.ts
```

---

# 5. Architecture

## Theme

- Centralized colors
- Centralized spacing
- Centralized typography

No component may define colors directly.

---

## Localization

All user-visible text must come from localization files.

Version 1 supports Persian only.

The architecture must allow adding more languages later.

---

## Config

Create:

```ts
export const APP_CONFIG = {
  name: "QR Site",
  version: "1.0.0",
  defaultLanguage: "fa",
  maxQrTextLength: 1000,
} as const;
```

---

## Utilities

Utility modules should contain:

- Validation
- QR download
- Clipboard helpers
- Error formatting

---

# 6. UI Requirements

The website must be:

- Persian
- RTL
- Responsive
- Modern
- Minimal
- Mobile-friendly
- Accessible

Preferred font:

Vazirmatn

The home page should directly present the QR Generator.

Do not create a separate marketing landing page.

---

# 7. MVP Features

Version 1 includes:

- Persian UI
- RTL layout
- Responsive layout
- Text / URL input
- Generate QR Code
- Input validation
- Persian validation messages
- QR preview
- Copy text to clipboard
- Download QR

Preferred download format:

- SVG

PNG may also be implemented if it can be done reliably.

---

# 8. Validation Rules

Validation rules:

- Empty input is invalid.
- Input length must not exceed APP_CONFIG.maxQrTextLength.
- Invalid input must display a clear Persian message.
- Invalid input must never crash the application.

---

# 9. Features That Must NOT Be Implemented

Do NOT implement:

- Android application
- React Native
- Expo
- QR Scanner
- Camera
- Camera permission
- Native mobile APIs
- Android sharing
- Android file system
- Mobile navigation
- Scanner pages
- Scan history

---

# 10. Error Handling

The application must never crash because of user input.

Errors should:

- be logged to the console
- show a readable Persian message
- never expose technical details to users

---

# 11. Acceptance Criteria

Before the project is considered complete:

Development

- npm install completes successfully
- npm run dev starts correctly
- npm run build completes successfully
- TypeScript reports no errors

UI

- Website is fully Persian
- Website is fully RTL
- Responsive on desktop
- Responsive on tablet
- Responsive on mobile

QR Generator

- Empty input shows validation error
- Input longer than 1000 characters shows validation error
- Valid text generates a QR Code
- Valid URL generates a QR Code
- QR preview renders correctly
- Copy to clipboard works
- QR download works

Architecture

- No React Native packages
- No Expo packages
- No camera packages
- No QR scanning functionality
- No hardcoded Persian strings
- No hardcoded colors
- Centralized configuration
- Centralized validation

---

# 12. Future Features

The architecture should make future implementation easy for:

- QR for phone numbers
- QR for email
- QR for Wi-Fi
- QR color customization
- QR size customization
- Download formats
- Local history
- Multiple languages
- Dark mode
- About page

These features should NOT be implemented in Version 1.

---

# 13. Deployment

Target deployment:

- Vercel

Domain registrar:

- User will purchase the domain separately (for example, IranServer).

The project should be compatible with connecting a custom domain through Vercel.

---

# 14. Instructions for Codex

Follow this document throughout development.

Ignore all previous Android-related plans.

Do not generate any code related to:

- Android
- React Native
- Expo
- Camera
- QR Scanner
- Native Mobile APIs

Focus only on building a clean, maintainable, production-ready Next.js application.

Whenever there are multiple implementation choices:

- Prefer the simpler solution.
- Prefer maintainability over cleverness.
- Avoid unnecessary dependencies.
- Keep the project scalable for future versions.