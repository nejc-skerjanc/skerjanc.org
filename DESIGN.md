---
name: HyperWare Solutions
description: A marked mountain trail for a one-engineer software practice in Kranj; you always see where you are, what comes next and who walks it with you.
colors:
  rock: "#e3e5e0"
  rock-2: "#d5d8d2"
  post: "#747a74"
  ink: "#142019"
  ink-soft: "#38443d"
  ink-faint: "#4f5b54"
  rule: "#a9afa8"
  yellow: "#f5c400"
  yellow-2: "#e6b600"
  red: "#c4161c"
  red-2: "#a51117"
  spruce: "#1d3a2d"
  on-dark: "#eef1ec"
  on-dark-soft: "#bccabf"
  on-dark-rule: "#3d5a4b"
  enamel-white: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(42px, 6.4vw, 96px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(36px, 5vw, 68px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 72"
  statement:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(34px, 5vw, 72px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(22px, 2.2vw, 30px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 72"
  plate:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(20px, 2vw, 26px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 72"
  lede:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 20px)"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "17.5px"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  nav:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 85"
  button:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 80"
  label:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 85"
rounded:
  none: "0px"
  blaze: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  point: "26px"
  gutter: "clamp(16px, 4vw, 40px)"
  section-y: "clamp(80px, 10vw, 144px)"
  container: "1200px"
components:
  plate-destination:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    padding: "15px 48px 15px 24px"
  plate-destination-hover:
    backgroundColor: "{colors.yellow-2}"
    padding: "15px 60px 15px 24px"
  plate-enquiry:
    backgroundColor: "{colors.red}"
    textColor: "{colors.enamel-white}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    padding: "15px 48px 15px 24px"
  plate-enquiry-hover:
    backgroundColor: "{colors.red-2}"
    padding: "15px 60px 15px 24px"
  plate-title:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
  plate-location:
    backgroundColor: "{colors.enamel-white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.enamel-white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 44px 16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.red-2}"
    padding: "16px 52px 16px 24px"
  input-field:
    backgroundColor: "{colors.enamel-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  tag:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "5px 9px"
  nav-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.nav}"
  nav-link-current:
    textColor: "{colors.ink}"
  lang-toggle-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
    typography: "{typography.label}"
    padding: "6px 10px"
  link-box:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  link-box-hover:
    backgroundColor: "{colors.yellow}"
  route-number:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
    typography: "{typography.title}"
---

# Design System: HyperWare Solutions

## Overview

**Creative North Star: "The Marked Trail"**

The site is a Slovenian mountain trail rendered as a page. The visitor arrives at a signpost: a galvanised grey post carrying a large arrow-pointed yellow enamel plate with the headline, destination plates beneath it with real counts, and one red plate that is the way to the enquiry. From there a single dashed trail line runs down the page, every section hangs from it by a ring, and the Knafelc blaze (a red disc with a white centre) marks only where you are now. Working with the business should feel like walking a well-marked route: always legible, never lost, never sold to.

The ground is cool limestone grey, the ink is spruce-black, and colour is spent like real signage spends it: yellow owns large plates and the whole contact field, deep spruce green carries the one quiet passage, red appears only for position and the primary action. Density is calm and register-like; content sits in ruled lists (services, industries, principles, facts) rather than tiles. One family, Archivo, does everything: condensed heavy caps for anything that would be lettered on a sign, normal-width sentence case for anything that is read.

The world refuses the cream-and-serif-italic agency brochure: no eyebrow labels over headings, no coloured keyword highlights inside headlines, no metric strips, no trios of rounded cards.

**Key Characteristics:**
- Arrow-pointed plates (clip-path point, 26px) bolted to a grey post; the signature silhouette.
- Red reserved for "you are here" and the primary enquiry action.
- One dashed trail line per page with a neutral ring per section that turns into the red blaze only when that section is current.
- Archivo variable: 72% width, 800 weight, uppercase for signpost lettering; 100% width, 400 for reading.
- Square corners everywhere; borders of 2px ink for structure, 1px rule for list dividers.
- Flat enamel surfaces; depth comes from colour fields, not shadows.

## Colors

Weathered limestone and spruce ink, with signpost enamel yellow as the dominant accent and trail-blaze red held back for position.

### Primary
- **Signpost Enamel Yellow** (yellow): the plates (title, destinations, name plate, legal and 404 titles), the full contact section ground, text selection, input focus ring and the ext-link hover fill. Pressed to a deeper **Worn Enamel** (yellow-2) on destination-plate hover.

### Secondary
- **Trail Blaze Red** (red): the blaze marker, the primary enquiry plate and submit button, the current nav item's dot, the current section's trail ring, the current route stop, legal list markers, the input caret and error states. **Deep Blaze** (red-2) is its hover state only.

### Tertiary
- **Spruce Forest** (spruce): the full-bleed statement passage, and the success message colour. On it, **Mist** (on-dark) for text, **Lichen** (on-dark-soft) for secondary footer text and **Forest Rule** (on-dark-rule) for the trail line where it crosses the forest.

### Neutral
- **Limestone** (rock): page ground, form panel, inside of the neutral trail ring, nav backdrop.
- **Weathered Stone** (rock-2): language-toggle hover and image placeholder.
- **Galvanised Post** (post): the signpost post, the neutral trail ring stroke, the inactive route blaze tone, scrollbar thumb.
- **Spruce-Black Ink** (ink): headings, body text, 2px structural rules, input borders, footer ground, focus outline.
- **Ink Soft** (ink-soft): body copy in lists, intros and prose; inactive nav links.
- **Ink Faint** (ink-faint): small uppercase field labels in fact lists, placeholders, help text, "optional" markers.
- **Path Rule** (rule): 1px list dividers and the dashed trail line on limestone.
- **Enamel White** (enamel-white): text on red, the location board, input fields.

### Named Rules
**The Blaze Rule.** Red marks position or the one primary action, nothing else: the current nav item, the current section ring, the current route stop, the enquiry plate and the submit button (plus error states and the caret, which are also "attend here"). Never use red for decoration, emphasis or a second CTA.

**The Enamel Rule.** Yellow is applied as a whole field (a plate or a full section), never as a thin accent stripe, underline or highlighted word.

## Typography

**Display Font:** Archivo variable (with Arial Narrow, Arial, sans-serif); weight 100–900, width 62–125%, self-hosted.
**Body Font:** Archivo at normal width.

**Character:** One family split by width rather than by face. Condensed heavy caps read as stencilled sign lettering; the same family at 100% width and 400 weight reads as calm, plain prose.

### Hierarchy
- **Display** (800, 72% width, clamp(42px, 6.4vw, 96px), 0.92, uppercase): the headline on the hero's title plate and the 404 plate only.
- **Headline** (800, 72% width, clamp(36px, 5vw, 68px), 0.98, uppercase, balanced wrap): section titles; the contact title runs slightly smaller (clamp(38px, 4.6vw, 66px), 0.95).
- **Statement** (800, 72% width, clamp(34px, 5vw, 72px), 1.02, sentence case, max 20ch): the single sentence in the spruce passage.
- **Title** (800, 72% width, clamp(22px, 2.2vw, 30px), 1.02, uppercase): service names and route stops; board and principle names step down to clamp(20px, 1.8vw, 24px).
- **Plate** (800, 72% width, clamp(20px, 2vw, 26px), 1, uppercase): destination and enquiry plates; the count beside it ("5 areas") is 600 weight, 85% width, 0.72em.
- **Lede** (400, 100% width, clamp(18px, 1.5vw, 20px), 1.55, max 44ch): the hero lede; section intros use clamp(17px, 1.35vw, 19px) at 48ch.
- **Body** (400, 100% width, 17.5px, 1.6): prose, max 58–62ch; list descriptions at 16–16.5px.
- **Nav** (700, 85% width, 15px, 0.04em, uppercase): primary navigation.
- **Button** (800, 80% width, 17px, 0.02em, uppercase): form buttons.
- **Label** (700, 85% width, 13px, 0.05em, uppercase): fact-list keys, field labels, tags, the location board, legal "updated" line.

### Named Rules
**The Signpost Lettering Rule.** Anything that would be painted on a sign (plates, section titles, item names, labels) is condensed uppercase Archivo; anything that is read as sentences stays normal width, sentence case. Never introduce a second family, a serif or italics (`em` is set upright and carries no colour).

**The Size Carries Importance Rule.** The scale is steep: hierarchy comes from size and width, not from colour accents or kicker labels above headings.

## Layout

A centred 1200px container with a fluid gutter (clamp(16px, 4vw, 40px)) and generous vertical sections (clamp(80px, 10vw, 144px)). Sections are separated by a 2px ink rule; full-bleed colour fields (spruce statement, yellow contact) break the limestone rhythm twice.

The hero is a 1.55fr / 1fr grid: the signpost stack on the left (post 16px wide, plates overlapping it by 28px so they read as bolted on), the lede and a ruled fact list on the right, bottom-aligned. Content below is organised as registers: ruled lists with a fixed-width uppercase key column (9.5–13em) and a description column. Services use three columns (name, description, tags); industries a two-column board; approach a four-stop horizontal route on a dashed line; about a 0.8fr / 1.2fr portrait and prose split; contact a 1fr / 1fr intro and form.

At 1100px and above, a 2px dashed trail line runs down the left edge of the container (15px in), and each section title carries a 22px ring on it (38px left of the title). Below 1100px the line and rings are removed. At 1024px services drop tags under the description, the board goes single-column and the route becomes a 2×2 grid without its dashed line. At 900px navigation collapses to a toggle and all split grids stack. At 600px the arrow point tightens to 20px, plates go full width and key/value rows stack.

## Elevation & Depth

Flat. Surfaces are enamel and stone: depth is conveyed by colour fields, the post that plates overlap, and 2px ink borders. The sticky nav uses a 92% limestone wash with a 10px backdrop blur and gains a 2px ink bottom border once scrolled.

### Shadow Vocabulary
- **Form lift** (`box-shadow: 0 30px 60px -36px rgb(20 32 25 / 0.55)`): the limestone form panel lying on the yellow contact board. The only shadow in the system.

### Named Rules
**The Flat Enamel Rule.** Nothing floats except the one form panel on the contact board. Plates, cards and buttons carry no shadow.

## Shapes

Square corners throughout (0px), including inputs, buttons, tags and the language toggle. The recurring silhouette is the arrow plate: a rectangle whose right edge comes to a point via `clip-path: polygon(0 0, calc(100% - point) 0, 100% 50%, calc(100% - point) 100%, 0 100%)`, with point 26px (20px on phones, 34–56px on the title plate). Buttons share the plate point. The only round forms are the blaze (a disc with a white centre), the section rings and the nav dot. Strokes are 2px ink for structure and boxes, 1.5px for tags, 1px rule for list dividers, 2px dashed for trail and route lines.

## Components

### Plates
Enamel signs bolted to a post: confident, legible, pointing somewhere.
- **Shape:** square, arrow-pointed right edge (26px point).
- **Destination plate:** yellow, ink lettering, name left and count right, min-width 420px. Hover deepens to Worn Enamel and the plate extends (right padding grows by 12px over 0.35s).
- **Enquiry plate:** red with white lettering and an inverted blaze (white disc, red centre); same extend on hover to Deep Blaze. One per page.
- **Title plate:** the hero headline at display size with a larger point (clamp(34px, 4vw, 56px)), max 15.5ch (20ch in Slovenian).
- **Location board:** unpointed white board with a 2px ink border and label type; closes the signpost stack.
- **Name plate:** yellow plate overlapping the bottom-left of the portrait, name above role.
- **Motion:** on load, plates swing out from the post once (clip-path reveal from the left plus 12px slide, 0.9s, staggered 90ms). Disabled under reduced motion.

### Buttons
- **Shape:** square with the plate's arrow point (16px 44px 16px 24px padding).
- **Primary:** red, white lettering, condensed 800 caps, with a trailing arrow icon. Hover: Deep Blaze and the button extends 8px. Disabled: 70% opacity, progress cursor.
- **Ink (latent):** the base button is ink on limestone; no shipped surface uses it yet.

### Tags
- **Style:** transparent ground, 1.5px ink border, square, label type at 12.5px. Used only for a service's three technology tags; not interactive.

### Inputs / Fields
- **Style:** white field, 2px ink border, square, 12px 14px padding, 16px text, red caret. Labels above in label type; "optional" marker in Ink Faint sentence case.
- **Focus:** no outline; a 4px yellow ring (box-shadow) around the field.
- **Error:** border turns red with a 3px translucent red ring; the consent text turns red.

### Navigation
- **Style:** sticky bar, 72px tall, brand mark and condensed caps wordmark at left, nav links in Ink Soft at centre-right, a square EN/SL toggle (2px ink border, active state ink with yellow lettering) at right.
- **Current section:** the link turns ink and a 12px blaze dot scales in before it, sliding from -20px (0.4s ease-out). Only one link carries it; none on the hero.
- **Mobile:** below 900px a two-bar toggle that crosses on open; links stack at 26px condensed caps with 1px rule dividers.

### Link boxes
- **Style:** 2px ink bordered box with an inline icon and 600 weight text (email, LinkedIn). Hover fills with yellow.

### Signature: The Trail and Route
- **Trail ring:** each trailed section title carries a 22px ring: 5px Galvanised Post stroke, limestone centre. When the section is current it becomes the blaze (red disc with white centre) at 1.1 scale. The statement passage shows no ring; on the contact board the ring is a yellow disc with an ink stroke.
- **Route:** the four approach phases sit on a 2px dashed ink line, each with a blaze above. Stops ahead are greyed (grayscale, brightened), passed stops partially desaturated, and the current stop full red at 1.25 scale (0.5s ease-out). Without IntersectionObserver the first stop is current.
- **Route number:** the phase numeral is set on a small ink tile in yellow, like a trail-number plate.

## Do's and Don'ts

### Do:
- **Do** letter every plate, section title and item name in Archivo 800 at 72% width, uppercase.
- **Do** point plates and buttons with the shared arrow clip-path (26px point, 20px on phones).
- **Do** spend yellow as whole plates and fields; spend red only on the current position and the single primary action.
- **Do** keep trail rings neutral (Galvanised Post stroke, limestone centre) and let only the current section turn red.
- **Do** organise content as ruled registers: 2px ink rule on top, 1px rule between rows, a fixed uppercase key column.
- **Do** keep corners square and surfaces flat; the contact form panel is the only shadowed surface.

### Don't:
- **Don't** add eyebrow or kicker labels above headings.
- **Don't** colour or highlight individual keywords inside headlines; `em` stays upright and uncoloured.
- **Don't** build card trios, metric strips or rounded tiles; use registers and plates.
- **Don't** use red for decoration, a secondary action, or more than one "you are here" at a time.
- **Don't** introduce a second typeface, a serif, or italics.
- **Don't** round corners or add shadows to plates, buttons or inputs.
