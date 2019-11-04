# Minimizing Bundle Size

<p class="description">Learn more about the tools you can leverage to reduce the bundle size.</p>

## How to reduce the bundle size?

For convenience, Riipen-UI exposes its full API on the top-level `riipen-ui` import.
If you're using ES6 modules and a bundler that supports tree-shaking ([`webpack` >= 2.x](https://webpack.js.org/guides/tree-shaking/), [`parcel` with a flag](https://en.parceljs.org/cli.html#enable-experimental-scope-hoisting/tree-shaking-support)) you can safely
use named imports and expect only a minimal set of riipen-UI components in your bundle:

```js
import { Button } from 'riipen-ui/components';
```

⚠️ Be aware that tree-shaking is an optimization that is usually only applied to production
bundles. Development bundles will contain the full library which can lead to **slower
startup times**.

If this is an issue for you, you have various options:

### Imports

You can use path imports to avoid pulling in unused modules.
For instance, use:

```js
// 🚀 Fast
import Button from 'riipen-ui/components/Button';
```

instead of top level imports (without a Babel plugin):

```js
import { Button } from 'riipen-ui/components';
```

This is the option we document in all the demos, since it requires no configuration.
It is encouraged for library authors extending the components.
Head to [Option 2](#option-2) for the approach that yields the best DX and UX.

While importing directly in this manner doesn't use the exports in `riipen-ui/components/index.js`,
this file can serve as a handy reference as to which modules are public.

## ECMAScript

The package published on npm is **transpiled**, with [Babel](https://github.com/babel/babel), to take into account the [supported platforms](/getting-started/supported-platforms/).
