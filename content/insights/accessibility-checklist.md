---
title: "A practical accessibility checklist for every launch"
excerpt: "The quick checks I run before shipping any interface, so it works for keyboard and screen-reader users."
date: "2026-09-12"
category: "Accessibility"
image: "https://picsum.photos/seed/post-2/1200/630"
---

Accessibility doesn't have to be overwhelming. Before every launch I run through this short list.

## Keyboard

- Can you reach every interactive element with **Tab**?
- Is the focus outline clearly visible?
- Do menus and dialogs close with **Escape**?

## Content

- Do images have meaningful `alt` text (or empty `alt` if decorative)?
- Are headings in a logical order?
- Is text contrast at least 4.5:1?

## Forms

- Does every input have a visible label?
- Are errors explained in text, not just color?

## Motion

- Do animations respect `prefers-reduced-motion`?

It takes about fifteen minutes and catches most of the common problems.
