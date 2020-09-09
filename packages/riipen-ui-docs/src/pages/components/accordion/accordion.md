# Accordion

<p class="description">Accordions contain creation flows and allow lightweight editing of an element.</p>

An accordion is a lightweight container that may either stand alone or be connected to a larger surface, 
such as a card.

## Simple accordion

{{"demo": "pages/components/accordion/Simple.js"}}

## Performance

The content of Accordions is mounted by default even if the accordion is not expanded. This default behavior has server-side rendering and SEO in mind.

## Accessibility

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#accordion)

For optimal accessibility we recommend setting id and aria-controls on the AccordionSummary. The Accordion will derive the necessary aria-labelledby and id for the content region of the accordion.
