---

name: localization
description: Build multilingual applications with proper RTL/LTR support, typography and maintainable localization.
-------------------------------------------------------------------------------------------------------------------

# Philosophy

Localization should be independent from business logic.

Support multilingual applications without redesigning the UI.

Maintain compatibility across web, mobile and desktop platforms.

Do not assume a specific programming language, framework or operating system.

# Language Support

* Support multiple languages.
* Keep text resources maintainable.
* Avoid hardcoded strings when possible.
* Allow adding new languages without rewriting the UI.
* Preserve consistency across translations.

# RTL and LTR Support

* Support both right-to-left and left-to-right layouts.
* Ensure alignment and spacing adapt correctly.
* Avoid assumptions about text direction.
* Preserve layout integrity when switching languages.

# Typography

* Fonts should be configurable.
* Avoid hardcoding font families.
* Avoid hardcoding font sizes.
* Prefer centralized typography definitions when supported.
* Layouts should adapt gracefully to font changes.
* Preserve readability and spacing when typography changes.

# Persian Recommendations

* Vazirmatn is the preferred Persian font.
* Support both Persian and English digits.
* Do not force a number style unless explicitly requested.
* Ensure Persian text remains natural and readable.

# Numbers

* Support multiple number styles.
* Preserve consistency within the same screen.
* Keep number formatting configurable.

# Date and Time

* Support localized formats.
* Avoid hardcoded locale assumptions.
* Keep formatting configurable.

# UI Rules

* Prevent text overflow.
* Support different text lengths across languages.
* Ensure buttons, cards and dialogs remain usable after translation.
* Preserve responsive behavior.

# Platform Independence

* Support websites.
* Support web applications.
* Support mobile applications.
* Support desktop applications.

# Maintainability

* Keep localization separate from business logic.
* Reuse translations consistently.
* Avoid duplicated text resources.
* Keep localization easy to modify.

# Safety Rules

* Never break existing layouts when adding languages.
* Preserve compatibility with existing languages.
* Avoid changing unrelated components.
* Keep multilingual support scalable.

# Future Growth

* New languages should be easy to add.
* Support two-language and multi-language applications.
* Support dynamic language switching when required.
* Support future typography and theme changes.

# Goal

Create scalable multilingual applications that remain readable, maintainable and visually stable across platforms and languages.
