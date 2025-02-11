"use strict";

module.exports = {
  multipass: true,
  js2svg: {
    eol: "lf"
  },
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeUnknownsAndDefaults: {
            keepRoleAttr: true
          },
          removeViewBox: false
        }
      }
    },
    "cleanupListOfValues",
    {
      name: "removeAttrs",
      params: {
        attrs: ["clip-rule", "data-name", "fill"]
      }
    },
    {
      name: "explicitAttrs",
      type: "visitor",
      params: {
        attributes: {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          class: "vi",
          viewBox: "0 0 16 16"
        }
      },
      fn(_root, params) {
        if (!params.attributes) {
          return null;
        }

        return {
          element: {
            enter(node, parentNode) {
              if (node.name === "svg" && parentNode.type === "root") {
                node.attributes = {};
                for (const [key, value] of Object.entries(params.attributes)) {
                  node.attributes[key] = value;
                }
              }
            }
          }
        };
      }
    }
  ]
};
