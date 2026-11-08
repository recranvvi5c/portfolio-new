---
title: "5 habits for building fast Next.js sites"
excerpt: "Small decisions that add up to a site that feels instant — from images to fonts to data fetching."
date: "2026-10-20"
category: "Performance"
image: "https://picsum.photos/seed/post-1/1200/630"
---

Speed is a feature. Users notice when a site responds instantly, and they notice even more when it doesn't. Here are five habits I rely on in every project.

## 1. Prerender whatever you can

If a page doesn't change per user, render it at build time. Static HTML served from a CDN is hard to beat.

## 2. Size your images

Always give images explicit dimensions and serve them at the size they're displayed. This prevents layout shift and saves bandwidth.

## 3. Load fonts carefully

Use `next/font` so fonts are self-hosted and preloaded, and stick to the weights you actually use.

## 4. Ship less JavaScript

Keep components on the server by default and only add `"use client"` where you need interactivity.

## 5. Measure, don't guess

Run Lighthouse and check real-user metrics after each release. Performance regressions creep in quietly.

> Fast sites aren't built with one trick — they're built with many small, consistent choices.
