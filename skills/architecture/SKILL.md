---

name: architecture
description: Maintain clean, scalable and modular project architecture.
-----------------------------------------------------------------------

# Core Principles

* Never place everything in one file.
* Prefer small and reusable modules.
* Refactor instead of growing huge files.
* Reuse existing components before creating new ones.
* Keep files focused on a single responsibility.
* Avoid duplicate code.

# File Size Rules

- Prefer small and maintainable files.
- Split files only when readability, maintainability or responsibility separation starts to suffer.
- Do not split files purely to satisfy arbitrary line limits.
- Keep related code together when it improves clarity.
- Large files are acceptable when they remain clear, cohesive and easy to modify.
- Avoid excessive fragmentation into too many tiny files.
- Extract complex logic only when it makes future changes safer and easier.

# Folder Structure

Keep folder structure appropriate to the framework.

Avoid monolithic folders.

Group related files together.

Separate UI, business logic, services and utilities.


# Logic Rules

- Follow the conventions of the current framework and platform.
- Separate UI, business logic, data access, state management and utilities.
- Keep related logic grouped together when it improves clarity.
- Place shared logic where it can be reused safely without creating hidden dependencies.
- Avoid forcing a folder pattern that does not fit the project.

# Component Rules

* Components should be reusable.
* Components should receive props instead of depending on globals.
* Keep components focused on one task.
* Prefer composition over inheritance.

# Editing Existing Code

Before writing code:

1. Inspect the current structure.
2. Reuse existing components if possible.
3. Avoid creating duplicate logic.
4. Preserve backward compatibility.
5. Make the smallest safe change.

# When adding new features

* Create new files instead of expanding unrelated files.
* Keep features isolated.
* Organize related files into their own folders.
* Maintain readability for future modifications.

# Goal

Always optimize for maintainability, readability and long-term evolution of the codebase rather than short-term speed.
