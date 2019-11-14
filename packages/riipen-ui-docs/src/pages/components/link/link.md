# Link

<p class="description">The Link component allows you to easily customize anchor elements with your theme colors and typography styles.</p>

## Underline

{{"demo": "pages/components/link/Underline.js"}}

## Color

{{"demo": "pages/components/link/Color.js"}}

## Security

When you use `target="_blank"` with Links, it is recommended to always set `rel="noopener"` or `rel="noreferrer"` when linking to third party content.

- `rel="noopener"` prevents the new page from being able to access the window.opener property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL.
- `rel="noreferrer"` has the same effect, but also prevents the Referer header from being sent to the new page. ⚠️ Removing the referrer header will affect analytics.

## Accessibility

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)

- When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use specific descriptions.
- For the best user experience, links should stand out from the text on the page.
- If a link doesn't have a meaningful href, it should be rendered using a `<button>` element.
