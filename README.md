# Hugo Font Awesome SVG JS Module

This Hugo module add supports for the [Font Awesome](https://fontawesome.com/) SVG + JS framework.

## Features

- Add icons on demand, in order to reduce the size of icons set.
- Customable by modules developers.
- Customable by theme's developers.
- Customable by users.
- Compatible with Font Awesome `v5` and `v6`.
- Supports [HugoPress](https://github.com/razonyang/hugopress).

## Installation

> Requires extended Hugo and Go.

Append the `github.com/razonyang/hugo-mod-font-awesome-svg-js` to the `theme`.

```toml
theme = [
    "github.com/razonyang/hugo-mod-font-awesome-svg-js"
]
```

## Usage

> See the [example site](https://projects.razonyang.com/hugo-mod-font-awesome-svg-js) and it's [source code](exampleSite).

### Adding Icons

There are three ways to add icons, however, I only recommend using the first one, since it cross modules and themes, and the rest will be overridden by others which is unexpected.

#### Adding Icons via Configuration (recommended)

Just put the icons you want to add inside `config.toml`, for example.

```toml
# Brands icons.
[params.fontAwesome.icons.brands.google] # fab fa-google
[params.fontAwesome.icons.brands.github] # fab fa-github
[params.fontAwesome.icons.brands.yandex-international] # fab fa-yandex-international

# Regular icons.
[params.fontAwesome.icons.regular.file] # far fa-file

# Solid icons.
[params.fontAwesome.icons.solid.star] # fas fa-star
[params.fontAwesome.icons.solid.terminal] # fas fa-terminal
```

> The type of icons is object/map, but there are no defined properties of icons so far.
> Since the Hugo will override the array instead of appending the elements, that is why we use the object type instead.

#### Adding Icons via icons.js (deprecated)

Firstly, we need to add some icons by creating the `assets/font-awesome/js/icons.js` file with following content.

```js
import { config } from 'js/font-awesome/fontawesome-svg-core';
import { faGithub } from 'js/font-awesome/free-brands-svg-icons/faGithub';
import { faFile } from 'js/font-awesome/free-regular-svg-icons/faFile';
import { faTerminal } from 'js/font-awesome/free-solid-svg-icons/faTerminal';
import { faTimeline } from 'js/font-awesome/free-solid-svg-icons/faTimeline';

// Configuration.
// See also https://fontawesome.com/docs/apis/javascript/configuration for v6.
// See also https://fontawesome.com/v5/docs/apis/javascript/configuration for v5.
config.showMissingIcons = false;

const icons = [
    // Regular icons
    faFile,

    // Solid icons
    faTerminal, faTimeline, 

    // Brand icons
    faGithub,
];

export default icons;
```

> You can find all the available icons on https://github.com/FortAwesome/Font-Awesome/tree/6.x/js-packages/%40fortawesome.

Please note that you SHOULD not import the icons as follows.

```js
// It'll import all the icons, which causes the bundle size become extreme large, even you've specified the icon.
// This behavior is weird, it works fine with `node_modules`, but doesn't work with Hugo module.
import { faTimeline } from 'js/font-awesome/free-solid-svg-icons';

// Use following instead.
import { faTimeline } from 'js/font-awesome/free-solid-svg-icons/faTimeline';
```

#### Adding Icons custom.js (deprecated)

The `assets/font-awesome/js/custom.js` is reserved for users, it has the same format as `icons.js`.

### Load Script

> You can skip this step if your theme supports [HugoPress](https://github.com/razonyang/hugopress).

Then import the script into page, you can either use the `font-awesome/script` partial or the `font-awesome/script-resource` partial.
The former renders a script tag, and the later return a script resource, which allow customizing the script tag and [concatting](https://gohugo.io/hugo-pipes/bundling/) with other scripts.

```html
{{- partial "font-awesome/script" . }}
``` 

```html
{{- $js := partial "font-awesome/script-resource" . }}
<script
  src="{{ $js.RelPermalink }}"
  {{ if hugo.IsProduction }}integrity="{{ $js.Data.Integrity }}"{{ end }}
  defer
></script>
```

### Upgrade Font Awesome

```
hugo mod get github.com/FortAwesome/Font-Awesome@[version]
```

The `[version]` can be a [release](https://github.com/FortAwesome/Font-Awesome/releases), a tag, a branch, or even a commit, such as `6.2.0`.
