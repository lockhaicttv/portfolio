# Portfolio Redesign Implementation Plan

**Project:** Chien Le --- Developer Portfolio\
**Design direction:** Premium Dark Engineering × Swiss Editorial\
**Reference:** The approved portfolio mockup supplied in this
conversation\
**Primary accent:** `#FF9D0A` (Electric Amber)\
**Stack:** Existing React / Next.js application, Tailwind CSS v4

------------------------------------------------------------------------

## 1. Design vision

Build a polished, confident engineering portfolio that communicates
backend depth, full-stack delivery, enterprise-system experience, and an
emerging cloud-engineering focus.

The design should follow the supplied reference closely:

-   Deep charcoal surfaces and restrained borders.
-   Strong, editorial typography with clear hierarchy.
-   Electric amber used selectively for emphasis and interaction.
-   A distinctive hero composition with portrait and architectural
    imagery.
-   Compact, image-led project cards.
-   Dense but readable experience and technical-expertise sections.
-   A restrained monochrome city image in the contact area.
-   Subtle transitions rather than decorative animation.

The result should feel like a senior engineer's considered
portfolio---not a generic agency template, gaming interface, or
AI-generated landing page.

### Design principles

1.  **Content before decoration:** every section should help a visitor
    understand capability, ownership, or evidence.
2.  **Amber is a signal:** use `#FF9D0A` for important emphasis, active
    states, markers, and primary actions---not as a general background.
3.  **Strong alignment:** use a consistent content grid, shared gutters,
    and deliberate section boundaries.
4.  **Real evidence:** project descriptions, dates, technologies,
    metrics, and personal contributions must be accurate and
    confidentiality-safe.
5.  **Responsive by design:** preserve the visual hierarchy on mobile
    rather than shrinking the desktop layout.

------------------------------------------------------------------------

## 2. Visual system

### 2.1 Color tokens

  -----------------------------------------------------------------------
  Token                   Value                   Usage
  ----------------------- ----------------------- -----------------------
  Background              `#101112`               Main page background

  Surface                 `#191B1D`               Project cards, chips,
                                                  secondary panels

  Surface elevated        `#202224`               Hover surfaces and
                                                  subtle emphasis

  Border                  `#292D30`               Dividers, card
                                                  outlines, separators

  Foreground              `#F0F0EC`               Main headings and body
                                                  text

  Muted                   `#A1A5A5`               Supporting text and
                                                  metadata

  Subtle                  `#747A7C`               Low-priority labels

  Accent                  `#FF9D0A`               CTAs, selected words,
                                                  active nav, timeline
                                                  markers

  Accent hover            `#FFB13D`               Hover/focus emphasis

  Accent foreground       `#171717`               Text on amber-filled
                                                  buttons
  -----------------------------------------------------------------------

**Accent discipline:** most of the page should remain charcoal, grey, or
off-white. Amber should be concentrated in small, intentional areas.
Avoid large amber panels except for a small decorative hero shape if it
remains balanced.

### 2.2 Typography

Recommended stack:

-   **Primary:** Geist Sans or Inter.
-   **Monospace metadata:** Geist Mono or IBM Plex Mono.
-   Use a bold display weight for the hero headline.
-   Use medium/semibold weights for section headings and project titles.
-   Use small uppercase labels with modest letter spacing for section
    numbers and metadata.

Suggested responsive scale:

  ----------------------------------------------------------------------------------
  Element                                    Desktop                          Mobile
  ------------------- ------------------------------ -------------------------------
  Hero headline         `clamp(3.2rem, 5vw, 4.8rem)`   `clamp(2.5rem, 11vw, 3.5rem)`

  Section heading                       2rem--2.4rem                  1.6rem--1.9rem

  Project title                      1.05rem--1.2rem                    1rem--1.1rem

  Body                                          1rem                         0.95rem

  Eyebrow / metadata                 0.72rem--0.8rem                 0.7rem--0.75rem
  ----------------------------------------------------------------------------------

Keep line lengths controlled. The hero heading should not span the
entire page width.

### 2.3 Layout and spacing

-   Maximum content width: approximately `1280px`.
-   Desktop page gutters: `40px`--`76px`, depending on viewport.
-   Tablet gutters: `28px`--`36px`.
-   Mobile gutters: `20px`--`24px`.
-   Use a 12-column grid on wide screens.
-   Use consistent horizontal divider lines between major page bands.
-   Desktop section spacing: approximately `88px`--`120px` vertically.
-   Mobile section spacing: approximately `64px`--`80px`.
-   Prefer square or subtly rounded corners; avoid excessive pill and
    card styling.

------------------------------------------------------------------------

## 3. Page structure and section specifications

The page should follow the order and overall composition in the
reference image.

### 3.1 Navigation

**Reference composition:** compact logo on the left, centered
navigation, outlined contact action on the right.

Content: - Logo: `L.C.` with the period in amber. - Links: Home,
Projects, Experience, About, Contact. - Right-side CTA: `Let's Talk`
with a small arrow.

Behavior: - Sticky or fixed navigation only if it does not obscure
content. - Active section indicator uses a thin amber underline. -
Mobile navigation becomes a compact menu with accessible open/close
controls. - Add visible keyboard focus states.

### 3.2 Hero

**Reference composition:** left-aligned text, portrait/architecture
composition on the right, compact proof points at the far right on wide
screens.

Suggested copy:

Eyebrow: `FULL-STACK ENGINEER / FINLAND`

Headline: `Engineering systems that scale beyond the interface.`

Highlight only `beyond` in amber.

Supporting copy:
`I build robust backend architectures, modern web applications, and reliable cloud-native systems.`

Technology chips: - TypeScript - NestJS - React - PostgreSQL - Docker

Actions: - Primary: `View My Projects` - Secondary: `Learn More`

Proof points: - Full-stack engineering experience - Enterprise systems -
Cloud engineering studies --- MSc at VAMK

**Important content validation:** - Confirm the exact experience
duration before publishing "5+ Years". - Use "MSc in Cloud-Based
Software Engineering" or the official programme name accurately. - Do
not imply years of production cloud architecture experience if that is
not supported by work history.

Visual treatment: - Use a real, high-quality portrait if available and
desired. - Use a monochrome architectural photograph as supporting
imagery. - Add a geometric amber diagonal or block behind the portrait,
with restrained opacity and no glow. - Ensure the portrait remains
legible and does not compete with the headline. - On mobile, stack the
copy and image; do not force the desktop composition into a narrow
viewport.

### 3.3 Selected work

Section label: `01. SELECTED WORK`

Intro heading: `Turning ideas into reliable products.`

Supporting text:
`From enterprise platforms to scalable cloud services, here are some of my works.`

Project cards in the reference: 1. Equipment Movement System ---
Enterprise Logistics 2. Rite Aid --- E-commerce Platform 3. B2B
Enterprise --- Business Platform

Each card should contain: - Project image or a carefully designed
visual. - Project name. - Short domain/category label. - Three or fewer
relevant technology tags. - A clear link or arrow to the case study.

**Flagship project:** Equipment Movement System.

Its case study should explain: - Business and operational context. - The
system's purpose and main workflows. - The user's actual role and
ownership. - Architecture and technology choices. - A difficult
engineering problem and how it was approached. - Verified results, if
measurable and permitted to disclose.

Confidentiality: - Do not publish customer data, internal URLs,
credentials, private screenshots, proprietary diagrams, or sensitive
operational details. - Anonymize the client or system where necessary. -
Clearly distinguish personal contributions from team achievements. - Do
not invent traffic, throughput, performance, or business-impact metrics.

### 3.4 Experience

Section label: `02. EXPERIENCE`

Suggested layout: - Left column: short headline and link to detailed
experience. - Right column: vertical timeline with company, role, dates,
and concise contribution summary.

Companies to validate against the final CV: - Cyberlogitec Vietnam -
Digicommerce

Each entry should answer: 1. What product or business domain was
involved? 2. What was the user's responsibility? 3. What technical
challenge or system area did the user work on? 4. What changed because
of the work?

Prefer specific statements such as backend architecture, business-logic
migration, API development, and enterprise logistics workflows---only
where they accurately describe the user's contribution.

### 3.5 Technical expertise

Section label: `03. TECHNICAL EXPERTISE`

Heading: `Modern technologies. Real-world impact.`

Use a compact two-column capability list rather than a wall of
technology badges.

Suggested groups: - **Backend:** NestJS, Node.js - **Frontend:** React,
Next.js - **Database:** PostgreSQL, MongoDB - **API & Integration:**
GraphQL, REST - **Cloud & DevOps:** Docker, Linux, Nginx -
**Architecture:** microservices and system design, where supported by
actual project work

Use small amber line icons or restrained icon containers. Keep
descriptions and technology labels readable.

Avoid presenting every technology ever used as an equal-level expertise
claim. Separate strong working experience from familiarity or current
learning when necessary.

### 3.6 About

Section label: `04. ABOUT ME`

Suggested headline:
`A developer who turns complex problems into elegant solutions.`

Supporting copy should be personal but concise. Mention the transition
from full-stack product engineering toward cloud-based software
engineering, and the motivation to build reliable systems.

Do not repeat the entire hero introduction. Use this section to add
context and personality.

### 3.7 Contact

Section label: `05. LET'S CONNECT`

Heading: `Have a project in mind?`

Supporting copy:
`I'm always open to discussing new ideas, collaborations, and opportunities.`

CTA: `Get in Touch`

Visual: - Monochrome city/architecture photograph. - Dark overlay for
text contrast. - Amber CTA. - Use a real image with appropriate
licensing or an original photograph.

Include only contact methods the user wants public.

------------------------------------------------------------------------

## 4. Component and code architecture

Adapt this structure to the existing application rather than rebuilding
the project solely to match the plan.

``` text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    projects/
      equipment-movement-system/
        page.tsx
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      PageContainer.tsx
      SectionDivider.tsx
    sections/
      HeroSection.tsx
      SelectedWorkSection.tsx
      ExperienceSection.tsx
      ExpertiseSection.tsx
      AboutSection.tsx
      ContactSection.tsx
    projects/
      ProjectCard.tsx
      ProjectImage.tsx
      ProjectMetadata.tsx
    ui/
      Button.tsx
      TechTag.tsx
      SectionEyebrow.tsx
      SectionHeading.tsx
  data/
    projects.ts
    experience.ts
    expertise.ts
  lib/
    utils.ts
```

Suggested data-driven project model:

``` ts
type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  technologies: string[];
  featured?: boolean;
};
```

Keep content separate from presentation. This makes it easier to add
case studies and update project details without editing layout
components.

------------------------------------------------------------------------

## 5. Tailwind CSS v4 foundation

Define the design tokens in the existing global stylesheet. Adapt font
imports and existing project conventions as needed.

``` css
@import "tailwindcss";

@theme {
  --color-background: #101112;
  --color-surface: #191b1d;
  --color-surface-elevated: #202224;
  --color-border: #292d30;

  --color-foreground: #f0f0ec;
  --color-muted: #a1a5a5;
  --color-subtle: #747a7c;

  --color-accent: #ff9d0a;
  --color-accent-hover: #ffb13d;
  --color-accent-foreground: #171717;

  --font-sans: "Geist", "Inter", sans-serif;
  --font-mono: "Geist Mono", monospace;
}

:root {
  color-scheme: dark;
  --page-max-width: 1280px;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-background);
  color: var(--color-foreground);
}
```

Implementation notes: - Use the Tailwind v4 theme variables as the
source of truth. - Avoid scattering raw hex values throughout
components. - Check the existing font-loading strategy before adding
another font provider. - Add a reduced-motion fallback for smooth
scrolling and animations. - Confirm the final text and muted colors meet
WCAG contrast requirements.

------------------------------------------------------------------------

## 6. Motion and interaction

Use motion only to clarify hierarchy and provide feedback.

Recommended: - Hero text: subtle fade and short upward movement on
initial load. - Section content: one-time reveal as it enters the
viewport. - Project cards: slight image scale and border/arrow color
transition on hover. - Navigation: animated active underline. - Buttons:
subtle background and arrow transition.

Guidelines: - Typical transitions: `150ms`--`300ms`. - Avoid large
parallax effects, cursor-following effects, continuous background
animation, and excessive stagger. - Respect `prefers-reduced-motion`. -
Keep all interactive elements usable with keyboard and touch. - Do not
hide important content behind animations.

------------------------------------------------------------------------

## 7. Responsive behavior

### Desktop: 1280px and above

-   Preserve the full hero composition.
-   Use a wide content grid and three project cards where space allows.
-   Show proof points alongside the hero.

### Tablet: 768px--1279px

-   Reduce hero image and proof-point widths.
-   Allow project cards to become two columns or a balanced grid.
-   Keep experience and expertise sections from becoming cramped.

### Mobile: below 768px

-   Stack the hero copy, image, and proof points.
-   Use one project card per row.
-   Convert the experience timeline into a simple vertical list.
-   Stack technical-expertise groups.
-   Collapse navigation accessibly.
-   Ensure CTAs are comfortably tappable.
-   Prevent horizontal overflow and clipped headings.

Test at minimum: - 1440px - 1280px - 1024px - 768px - 390px - 360px

------------------------------------------------------------------------

## 8. Implementation roadmap

The sequence below is a practical order of work. Estimates are
indicative and should be adjusted after inspecting the current codebase.

  ---------------------------------------------------------------------------------------
  Phase           Priority      Work                          Estimate Deliverable
  --------------- ------------- -------------------- ----------------- ------------------
  0\. Audit       P0            Inspect current app,        2--4 hours Current-state
                                routes, components,                    checklist
                                assets, and content                    

  1\. Content     P0            Finalize hero copy,         3--5 hours Approved portfolio
                                experience facts,                      content
                                project summaries,                     
                                and public contact                     
                                details                                

  2\. Design      P0            Add                         3--5 hours Reusable design
  foundation                    color/type/spacing                     system
                                tokens, container,                     
                                buttons, tags,                         
                                dividers                               

  3\. Hero and    P0            Build responsive            5--8 hours First-screen
  navigation                    navigation and hero                    redesign
                                composition                            

  4\. Selected    P0            Build project cards        6--10 hours Project section
  work                          and flagship                           and case study
                                case-study page                        

  5\. Experience  P1            Implement timeline          4--6 hours Credible
  and expertise                 and capability                         career/skills
                                groups                                 sections

  6\. About and   P1            Implement concise           2--4 hours Complete page
  contact                       about and contact                      content
                                sections                               

  7\. Responsive  P1            Test breakpoints,           4--6 hours Responsive
  and                           keyboard navigation,                   accessible page
  accessibility                 focus, contrast,                       
                                reduced motion                         

  8\. Motion and  P2            Add restrained              2--4 hours Finished
  polish                        transitions and                        interactions
                                visual refinements                     

  9\. SEO and     P1            Metadata, Open              3--5 hours Production-ready
  release QA                    Graph, image                           release
                                optimization,                          
                                performance,                           
                                deployment checks                      
  ---------------------------------------------------------------------------------------

**Indicative total:** approximately 34--57 hours, depending on the state
of the current implementation, quality of available assets, and depth of
the case study.

### Suggested milestones

-   **M1 --- Content and foundation:** verified content and design
    tokens are ready.
-   **M2 --- Main visual implementation:** navigation, hero, and
    selected work match the approved direction.
-   **M3 --- Portfolio completeness:** experience, expertise, about, and
    contact sections are implemented.
-   **M4 --- Quality and launch:** responsive behavior, accessibility,
    SEO, performance, and deployment are verified.

------------------------------------------------------------------------

## 9. Quality checklist

### Visual

-   [ ] The page follows the supplied reference's overall composition.
-   [ ] Amber is used selectively and consistently.
-   [ ] Typography has clear hierarchy and comfortable line lengths.
-   [ ] Section dividers and content gutters align.
-   [ ] Project images have consistent aspect ratios and treatment.
-   [ ] No unnecessary gradients, glow, glassmorphism, or decorative
    clutter.

### Content

-   [ ] Experience duration and dates are verified.
-   [ ] Role titles and company names are accurate.
-   [ ] Project ownership and contributions are stated precisely.
-   [ ] Metrics and outcomes are supported by evidence.
-   [ ] Confidential information is removed or anonymized.
-   [ ] Technology lists distinguish experience from familiarity.

### Engineering

-   [ ] Components are reusable and content is data-driven where
    appropriate.
-   [ ] No console errors or broken routes.
-   [ ] Images are optimized and have meaningful alt text.
-   [ ] Navigation and CTAs work.
-   [ ] Keyboard focus is visible.
-   [ ] Reduced-motion preferences are respected.
-   [ ] No horizontal overflow at supported viewport sizes.
-   [ ] Metadata and Open Graph previews are correct.
-   [ ] Lighthouse checks are run and regressions are addressed.

------------------------------------------------------------------------

## 10. Definition of done

The redesign is ready to publish when:

1.  The deployed portfolio closely follows the approved dark graphite
    and amber visual direction.
2.  All main sections are complete and responsive.
3.  The Equipment Movement System case study demonstrates real
    engineering contribution without disclosing confidential
    information.
4.  Experience, education, skills, dates, and claims have been checked
    for accuracy.
5.  Navigation, project links, contact actions, and mobile menu work
    correctly.
6.  Accessibility, reduced motion, image optimization, SEO, and basic
    performance checks are complete.
7.  The site has been reviewed at desktop, tablet, and mobile widths.

## 11. Decisions to confirm before implementation

-   [ ] Is the supplied portrait an actual photo you want to publish, or
    should the hero use architecture/abstract imagery only?
-   [ ] Can the Equipment Movement System name and screenshots be shown
    publicly, or should the project be anonymized?
-   [ ] Which contact details should be public?
-   [ ] Confirm exact job dates, titles, and total years of experience.
-   [ ] Confirm the official English name of the VAMK master's
    programme.
-   [ ] Confirm which project images can be used and whether they are
    licensed or original.

------------------------------------------------------------------------

**Final direction:** Keep the structure and visual character of the
supplied reference, but make the content unmistakably yours. The
strongest portfolio will not be the one with the most effects; it will
be the one that makes your engineering decisions, ownership, and real
project experience easy to understand.
