# Supported Platforms

<p class="description">Learn about the platforms, from modern to old, that are supported by Riipen-UI.</p>

## Browser

Riipen-UI supports the latest, stable releases of all major browsers and platforms.
It also supports Internet Explorer 11.
You don't need to provide any JavaScript polyfill as it manages unsupported browser features internally and in isolation.

| IE    | Edge   | Firefox | Chrome | Safari | Googlebot |
|:------|:-------|:--------|:-------|:-------|:----------|
| 11    | >= 14  | >= 52   | >= 49  | >= 10  | ✅        |

Because Googlebot uses a web rendering service (WRS) to index the page content, it's critical that Riipen-UI supports it.
[WRS regularly updates the rendering engine it uses](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html).
You can expect Riipen-UI's components to render without major issues.

## Server

Because Riipen-UI supports server-side rendering, it needs to support the latest, stable releases of [Node.js](https://github.com/nodejs/node).
Where possible, the [LTS versions that are in maintenance](https://github.com/nodejs/Release#lts-schedule1) are supported. Right now, it supports **node v8.x** and newer versions.

### CSS prefixing

Be aware that some CSS features require an additional postprocessing step
that adds vendor-specific prefixes. These prefixes are automatically added to the client.

## React

Riipen-UI supports the most recent versions of React, starting with ^16.8.0 (the one with the hooks).
