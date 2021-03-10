const pages = [
  {
    name: "Getting Started",
    props: {
      defaultExpanded: true
    },
    children: [
      {
        name: "Installation",
        pathname: "/getting-started/installation"
      },
      {
        name: "Usage",
        pathname: "/getting-started/usage"
      }
    ]
  },
  {
    name: "Components",
    props: {
      defaultExpanded: true
    },
    children: [
      {
        name: "Accordion",
        pathname: "/components/accordion"
      },
      {
        name: "App Bar",
        pathname: "/components/app-bar"
      },
      {
        name: "Avatar",
        pathname: "/components/avatar"
      },
      {
        name: "Badge",
        pathname: "/components/badge"
      },
      {
        name: "Banner",
        pathname: "/components/banner"
      },
      {
        name: "Breadcrumbs",
        pathname: "/components/breadcrumbs"
      },
      {
        name: "Button",
        pathname: "/components/button"
      },
      {
        name: "Checkbox",
        pathname: "/components/checkbox"
      },
      {
        name: "Chip",
        pathname: "/components/chip"
      },
      {
        name: "Container",
        pathname: "/components/container"
      },
      {
        name: "Divider",
        pathname: "/components/divider"
      },
      {
        name: "Drawer",
        pathname: "/components/drawer"
      },
      {
        name: "Form",
        pathname: "/components/form"
      },
      {
        name: "Grid",
        pathname: "/components/grid"
      },
      {
        name: "Hidden",
        pathname: "/components/hidden"
      },
      {
        name: "Input",
        pathname: "/components/input"
      },
      {
        name: "Link",
        pathname: "/components/link"
      },
      {
        name: "List",
        pathname: "/components/list"
      },
      {
        name: "Menu",
        pathname: "/components/menu"
      },
      {
        name: "No SSR",
        pathname: "/components/no-ssr"
      },
      {
        name: "Notice",
        pathname: "/components/notice"
      },
      {
        name: "Paper",
        pathname: "/components/paper"
      },
      {
        name: "Popover",
        pathname: "/components/popover"
      },
      {
        name: "Progress Bar",
        pathname: "/components/progress-bar"
      },
      {
        name: "Vertical Progress Bar",
        pathname: "/components/vertical-progress-bar"
      },
      {
        name: "Radio",
        pathname: "/components/radio"
      },
      {
        name: "Switch",
        pathname: "/components/switch"
      },
      {
        name: "Rich Text Editor",
        pathname: "/components/rich-text-editor"
      },
      {
        name: "Tabs",
        pathname: "/components/tabs"
      },
      {
        name: "Table",
        pathname: "/components/table"
      },
      {
        name: "Tooltip",
        pathname: "/components/tooltip"
      },
      {
        name: "Typography",
        pathname: "/components/typography"
      }
    ]
  },
  {
    name: "API",
    props: {},
    children: [
      {
        name: "App Bar",
        pathname: "/components-api/app-bar"
      },
      {
        name: "Avatar",
        pathname: "/components-api/avatar"
      },
      {
        name: "Backdrop",
        pathname: "/components-api/backdrop"
      },
      {
        name: "Banner",
        pathname: "/components-api/banner"
      },
      {
        name: "Click Away",
        pathname: "/components-api/click-away"
      },
      {
        name: "Container",
        pathname: "/components-api/container"
      },
      {
        name: "Divider",
        pathname: "/components-api/divider"
      },
      {
        name: "Drawer",
        pathname: "/components-api/drawer"
      },
      {
        name: "EditorBlockStyleControls",
        pathname: "/components-api/editor-block-style-controls"
      },
      {
        name: "EditorControlButton",
        pathname: "/components-api/editor-control-button"
      },
      {
        name: "Editor",
        pathname: "/components-api/editor"
      },
      {
        name: "EditorImage",
        pathname: "/components-api/editor-image"
      },
      {
        name: "EditorInlineStyleControls",
        pathname: "/components-api/editor-inline-style-controls"
      },
      {
        name: "EditorLink",
        pathname: "/components-api/editor-link"
      },
      {
        name: "Grid",
        pathname: "/components-api/grid"
      },
      {
        name: "Grid Item",
        pathname: "/components-api/grid-item"
      },
      {
        name: "Input",
        pathname: "/components-api/input"
      },
      {
        name: "Link",
        pathname: "/components-api/link"
      },
      {
        name: "List",
        pathname: "/components-api/list"
      },
      {
        name: "List Item",
        pathname: "/components-api/list-item"
      },
      {
        name: "Menu",
        pathname: "/components-api/menu"
      },
      {
        name: "Menu List",
        pathname: "/components-api/menu-list"
      },
      {
        name: "Menu Item",
        pathname: "/components-api/menu-item"
      },
      {
        name: "Paper",
        pathname: "/components-api/paper"
      },
      {
        name: "Popover",
        pathname: "/components-api/popover"
      },
      {
        name: "Progress Bar",
        pathname: "/components-api/progress-bar"
      },
      {
        name: "Vertical Progress Bar",
        pathname: "/components-api/vertical-progress-bar"
      },
      {
        name: "Rich Text Editor",
        pathname: "/components-api/rich-text-editor"
      },
      {
        name: "Switch",
        pathname: "/components-api/switch"
      },
      {
        name: "Table",
        pathname: "/components-api/table"
      },
      {
        name: "Table Body",
        pathname: "/components-api/table-body"
      },
      {
        name: "Table Cell",
        pathname: "/components-api/table-cell"
      },
      {
        name: "Table Cell Header",
        pathname: "/components-api/table-cell-header"
      },
      {
        name: "Table Column",
        pathname: "/components-api/table-column"
      },
      {
        name: "Table Header",
        pathname: "/components-api/table-header"
      },
      {
        name: "Table Header Cell",
        pathname: "/components-api/table-header-cell"
      },
      {
        name: "Table Row",
        pathname: "/components-api/table-row"
      },
      {
        name: "Toolbar",
        pathname: "/components-api/toolbar"
      },
      {
        name: "Tooltip",
        pathname: "/components-api/tooltip"
      },
      {
        name: "Typography",
        pathname: "/components-api/typography"
      },
      {
        name: "Warning",
        pathname: "/components-api/warning"
      }
    ]
  },
  {
    name: "Guides",
    props: {},
    children: [
      {
        name: "Bundle Size",
        pathname: "/guides/bundle-size"
      }
    ]
  }
];

export default pages;
