---

name: ui-ux
description: Create professional, maintainable and modular user interfaces.
---------------------------------------------------------------------------

# Core Principles

* Prioritize maintainability over short-term speed.
* Never redesign unrelated screens.
* Minimize side effects.
* Preserve existing behavior unless explicitly requested.
* Make the smallest safe change.

# Component Structure

* Every screen must have its own folder.
* Every modal must have its own component.
* Every card must have its own component.
* Reuse components instead of duplicating them.
* Avoid giant components.

# Styling Rules

* Avoid inline styles.
* Use shared design tokens.
* Keep spacing and typography consistent.
* Use soft shadows and rounded corners.
* Maintain visual consistency across screens.

# Editing Existing UI

Before changing anything:

1. Understand the current structure.
2. Modify only the affected components.
3. Avoid touching unrelated files.
4. Preserve existing functionality.
5. Prefer refactoring over rewriting.

# Design Rules

* Clear hierarchy.
* Modern and clean appearance.
* Avoid flashy or unnecessary effects.
* Design for the target platform first.
* Use responsive layouts when needed.
* Use appropriate touch targets for mobile and appropriate interaction patterns for desktop.

# Color Rules

* Propose a color palette before major redesigns.
* Maintain consistent colors throughout the app.
* Avoid random colors.

# Animation Rules

* Use subtle animations only.
* Never add animations that affect functionality.
* Animations should be isolated from business logic.

# Safety Rules

* Never break existing screens.
* Never change APIs unless required.
* Never rewrite working code without a clear reason.
* Prefer isolated modifications.
* If uncertain, ask before making destructive changes.

# Goal

Build beautiful interfaces that remain easy to maintain, extend and debug over time.
