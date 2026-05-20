#  README — Group 11 Week 4: CSS Box Model & Positioning

**Institution:** Ardhi University  
**School:** School of Earth Sciences, Real Estate, Business Studies and Informatics (SERBI)  
**Department:** Computer Systems and Mathematics (CSM)  
**Programme:** BSc. Computer Systems and Networks (BSc. CSN 2)  

---

##  Group Members

| S/N | Name | Registration Number | Course |
|-----|------|---------------------|--------|
| 01 | Farijallah, Sandra Hashim | 34258/T.2024 | CSN |
| 02 | Bideberi, Meckzedeck Vedastus | 32470/T.2024 | CSN |
| 03 | Mrema, Felista Salvastori | 33221/T.2024 | CSN |
| 04 | Masaulwa, Kelvin Daimon | 32913/T.2024 | CSN |
| 05 | Antony, Antony Aloyce | 33788/T.2024 | CSN |

---

## Objective

The objective of this project was to demonstrate a practical understanding of CSS layout techniques — specifically the CSS Box Model, CSS positioning (`fixed`, `sticky`, `relative`, `absolute`), float-based layouts, and the `clear` property. Each concept is visually demonstrated on a single page so the effect of each rule can be seen directly in the browser.

---

##  What Was Done

A single-page website (`index.html` + `style.css`) was built to showcase the following layout concepts:

- **Fixed Header** — A `<header>` with `position: fixed` that stays at the top of the viewport at all times, even while scrolling, using `z-index: 1000` to stay above other content
- **Sticky Navigation Bar** — A `<nav>` with `position: sticky` and `top: 100px` that scrolls with the page until it reaches the offset, then locks in place; contains anchor links to the three box sections
- **CSS Box Model (Three Boxes)** — Three `<div>` elements demonstrating `padding`, `border`, and `margin` working together; each box has `padding: 20px`, a `3px solid black` border, and `margin: 20px` to show spacing between elements
- **Relative + Absolute Positioning** — A container with `position: relative` holding a `<span>` label with `position: absolute` anchored to the top-right corner, demonstrating how absolute elements position themselves relative to their nearest positioned ancestor
- **Float Layout** — A two-column layout using `float: left` for the main content area (65% width) and `float: right` for the sidebar (20% width)
- **Clear Both Footer** — A `<footer>` using `clear: both` to drop below both floated elements and span the full width correctly

---

## What Was Learned

- **CSS Box Model:** Every HTML element is a box made up of content, padding, border, and margin — changing any one of these affects how much space an element takes up and how far it sits from its neighbours
- **`position: fixed`:** Removes an element from the normal document flow and pins it to the viewport; it does not move when the user scrolls. Requires `z-index` to ensure it sits above other content
- **`position: sticky`:** A hybrid between `relative` and `fixed` — the element scrolls normally until it hits the defined `top` offset, then sticks there. Unlike `fixed`, it remains within its parent container
- **`position: relative` and `position: absolute`:** A `relative` parent acts as an anchor point; an `absolute` child positions itself against that parent rather than the whole page. Without a `relative` parent, an `absolute` element positions itself against the `<body>`
- **CSS Floats:** `float: left` and `float: right` pull elements out of the normal flow so they sit side by side, enabling a basic two-column layout
- **`clear: both`:** Forces an element to move below all preceding floated elements. Without it, the footer would collapse up into the floated columns instead of appearing below them
- **`z-index`:** Controls the stacking order of overlapping elements — higher values appear on top
- **`margin-top` on `.boxes`:** Setting `margin-top: 170px` compensates for the fixed header and sticky nav taking up vertical space at the top of the viewport, preventing page content from being hidden underneath them

---

##  Challenges Faced

- **Fixed Header Overlapping Content:** When using `position: fixed`, the header sits on top of the page content. Without setting `margin-top: 170px` on the `.boxes` container, the first box would be hidden underneath the header and navbar — calculating the right offset required trial and error
- **Float Collapse:** Floated elements are removed from the document flow, which causes their parent container to collapse to zero height if it contains only floated children. The `clear: both` footer solves this for the bottom of the page, but a container wrapping the floated columns would still collapse — a `clearfix` or `overflow: hidden` on the parent would be the proper fix
- **Sticky vs Fixed Confusion:** Understanding the difference between `sticky` and `fixed` required testing — `sticky` only works if the parent element has a defined height and no `overflow: hidden`
- **`align="center"` on `<h1>` and `<p>` in Header:** The HTML uses the deprecated `align` attribute directly on elements inside the header. The correct approach is `text-align: center` in CSS, as `align` was removed in HTML5
- **Float Width Mismatch:** The main content is set to `float: left` at `65%` and the sidebar to `float: right` at `20%`, but both also have `margin: 20px` and `padding: 20px`. Adding those values to the percentage widths can cause the two columns to overflow their container on smaller screens, since by default CSS uses the `content-box` sizing model. Using `box-sizing: border-box` would make widths more predictable
- **No Responsive Design:** The float layout breaks on narrow screens. A modern approach would use CSS Flexbox or Grid instead of floats for two-column layouts

---

##  Technologies Used

- HTML5
- CSS3 (External stylesheet)

---

## Project Files

```
project/
├── index.html    # Single-page layout demonstrating all CSS concepts
└── style.css     # External stylesheet with all positioning and box model rules
```

---

