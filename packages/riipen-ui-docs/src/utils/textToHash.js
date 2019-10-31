export default function textToHash(text) {
  return encodeURI(
    text
      .toLowerCase()
      .replace(/<\/?[^>]+(>|$)/g, "") // remove HTML
      .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, "")
      .replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
  );
}
