---
title: "A small app for HSA receipts"
summary: "A local web app built with AI to track medical expenses for HSA reimbursement."
domain: "code"
kind: "AI app"
date: 2026-03-01
status: "complete"
tags: ["React", "Vite", "Supabase", "Tailwind", "Personal finance"]
order: 2
---

## The itch

HSAs let you reimburse yourself for qualified medical expenses at any
point — *years* later, even — as long as you have the receipts. The
optimal play, for someone who can afford to, is to let the HSA grow
tax-free and pay medical expenses out of pocket, keeping the receipts
for a future reimbursement.

The problem: that strategy is only as good as your records. And every
app I evaluated wanted either a subscription, broad access to my
financial accounts, or both. For a tool that needs to do four things
well, that’s too much.

## What it needs to do

- Capture a receipt (photo or import)
- Categorize and total the qualified amount
- Tag it as reimbursed or not
- Export everything to CSV or PDF on demand

That’s it. That’s the whole spec.

## Stack

React + Vite + Tailwind on the front end, Supabase for storage and auth.
The CSV/PDF export is the priority feature — without it the whole thing
is just a fancier notebook.

## Where it is

Working but rough. The capture flow is fine; the categorization is
crude; the export works for CSV and is in progress for PDF.

## Why this is in the personal-projects bin

Because the satisfaction of building exactly the tool I needed, owning
my own data, and not paying $9/month for the privilege is its own
reward. Because the boundary between “useful side project” and
“something I might one day open-source” is thin and I’d like to be ready
either way.
