---

name: safe-refactor
description: Perform large refactors safely while minimizing regressions and preserving behavior.
-------------------------------------------------------------------------------------------------

# Philosophy

Safety is more important than speed.

Never perform risky refactors without understanding the impact.

Prefer many small changes over one massive rewrite.

# Before Refactoring

Always:

1. Understand the existing architecture.
2. Identify dependencies.
3. Find consumers of modified code.
4. Preserve behavior.
5. Limit the scope of changes.

Never start with a rewrite.

# Preserve Existing Features

Assume working code exists for a reason.

Avoid changing:

* APIs
* State management
* Business rules

unless explicitly required.

# Incremental Refactoring

Prefer:

small, isolated changes.

Avoid:

large rewrites.

Split big refactors into multiple steps.

# Backward Compatibility

Maintain compatibility whenever possible.

Avoid breaking:

* imports
* props
* APIs
* types
* hooks

Introduce adapters instead of breaking consumers.

# Dependency Analysis

Before changing:

* shared components
* hooks
* services
* stores
* utilities

Find all usages and downstream dependencies.

Never assume.

# File Organization

When a file becomes hard to understand or safely modify, consider splitting it into:

* components
* hooks
* services
* utilities
* types

Keep responsibilities isolated.

# UI Refactoring

Changing UI must not affect:

* business logic
* APIs
* state

Keep presentation separate.

# State Refactoring

Avoid:

* duplicated state
* unnecessary globals
* hidden side effects

Keep state as local as possible.

# Safe Migration Strategy

Prefer:

old code + new code coexistence

before deleting old implementations.

Migrate gradually.

Remove old code only after new code is stable.

# Error Prevention

Never:

fix one issue by creating another.

Avoid touching unrelated code.

Minimize diffs.

# Validation Checklist

Before finishing:

✓ Existing behavior preserved

✓ No broken imports

✓ No duplicated logic

✓ No unnecessary rewrites

✓ Backward compatibility maintained

✓ Small and isolated changes

✓ Reused existing code

✓ No unrelated modifications

✓ Maintainability improved

# If Risk Is High

Stop.

Explain:

* risks
* affected files
* possible side effects

Request approval before destructive changes.

Never guess.

# Goal

Improve architecture without breaking functionality.

Leave the codebase cleaner, safer and easier to evolve.
