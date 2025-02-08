"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.7.0",
  ssgName: "nextjs",
  nodeVersion: "22",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/workspaces/yanabourne",
      contentDirs: ["content"],
      models: [
        {
          type: "page",
          name: "Home",
          label: "Home",
          urlPath: "/",
          fields: [
            {
              type: "object",
              name: "header",
              fields: [
                { type: "string", name: "title", required: true },
                { type: "string", name: "introduction", required: true }
              ]
            },
            {
              type: "object",
              name: "story",
              fields: [
                { type: "string", name: "title", required: true },
                {
                  type: "list",
                  name: "content",
                  items: { type: "string" }
                }
              ]
            },
            { name: "sections", type: "model", models: ["HeroSection"] }
          ]
        },
        {
          type: "object",
          name: "HeroSection",
          label: "Hero Section",
          fields: [
            { type: "string", name: "id", required: true },
            { type: "string", name: "type", const: "HeroSection" },
            { type: "string", name: "heading", required: true },
            { type: "string", name: "subheading", required: true },
            {
              type: "object",
              name: "cta",
              fields: [
                {
                  type: "object",
                  name: "primary",
                  fields: [
                    { type: "string", name: "text", required: true },
                    { type: "string", name: "href", required: true },
                    { type: "string", name: "icon" }
                  ]
                }
              ]
            },
            {
              type: "object",
              name: "image",
              fields: [
                { type: "image", name: "src", required: true },
                { type: "string", name: "alt", required: true },
                { type: "number", name: "width", required: true },
                { type: "number", name: "height", required: true }
              ]
            },
            { type: "string", name: "stackbit_model_type", const: "HeroSection" }
          ]
        },
        {
          type: "object",
          name: "LocationsSection",
          label: "Locations Section",
          fields: [
            { type: "string", name: "type", const: "LocationsSection" },
            { type: "string", name: "heading", required: true },
            {
              type: "list",
              name: "locations",
              items: {
                type: "object",
                fields: [
                  { type: "string", name: "city", required: true },
                  { type: "string", name: "icon", required: true },
                  { type: "string", name: "role", required: true },
                  { type: "string", name: "experience", required: true },
                  {
                    type: "list",
                    name: "description",
                    items: { type: "string" },
                    required: true
                  }
                ]
              }
            },
            { type: "string", name: "stackbit_model_type", const: "LocationsSection" }
          ]
        },
        {
          type: "object",
          name: "PortfolioSection",
          label: "Portfolio Section",
          fields: [
            { type: "string", name: "type", const: "PortfolioSection" },
            { type: "string", name: "heading", required: true },
            {
              type: "list",
              name: "items",
              items: {
                type: "object",
                fields: [
                  { type: "string", name: "title", required: true },
                  { type: "string", name: "description", required: true },
                  { type: "string", name: "link", required: true },
                  {
                    type: "object",
                    name: "image",
                    fields: [
                      { type: "image", name: "src", required: true },
                      { type: "string", name: "alt", required: true },
                      { type: "number", name: "width", required: true },
                      { type: "number", name: "height", required: true }
                    ]
                  }
                ]
              }
            },
            { type: "string", name: "stackbit_model_type", const: "PortfolioSection" }
          ]
        },
        {
          type: "object",
          name: "ContactSection",
          label: "Contact Section",
          fields: [
            { type: "string", name: "type", const: "ContactSection" },
            { type: "string", name: "heading", required: true },
            { type: "string", name: "description", required: true },
            {
              type: "object",
              name: "form",
              fields: [
                {
                  type: "object",
                  name: "name",
                  fields: [
                    { type: "string", name: "label", required: true },
                    { type: "string", name: "placeholder", required: true },
                    { type: "boolean", name: "required", required: true }
                  ]
                },
                {
                  type: "object",
                  name: "email",
                  fields: [
                    { type: "string", name: "label", required: true },
                    { type: "string", name: "placeholder", required: true },
                    { type: "boolean", name: "required", required: true }
                  ]
                },
                {
                  type: "object",
                  name: "message",
                  fields: [
                    { type: "string", name: "label", required: true },
                    { type: "string", name: "placeholder", required: true },
                    { type: "boolean", name: "required", required: true }
                  ]
                },
                {
                  type: "object",
                  name: "submitButton",
                  fields: [
                    { type: "string", name: "text", required: true },
                    { type: "string", name: "loadingText", required: true }
                  ]
                },
                {
                  type: "object",
                  name: "successMessage",
                  fields: [
                    { type: "string", name: "title", required: true },
                    { type: "string", name: "description", required: true }
                  ]
                },
                { type: "string", name: "errorMessage", required: true }
              ]
            },
            {
              type: "object",
              name: "image",
              fields: [
                { type: "image", name: "src", required: true },
                { type: "string", name: "alt", required: true },
                { type: "number", name: "width", required: true },
                { type: "number", name: "height", required: true }
              ]
            },
            { type: "string", name: "stackbit_model_type", const: "ContactSection" }
          ]
        },
        {
          type: "data",
          name: "PortfolioItems",
          label: "Portfolio Items",
          filePath: "content/data/portfolioItems.json",
          fields: [
            { type: "string", name: "id", required: true },
            { type: "string", name: "type", const: "PortfolioItems" },
            {
              type: "list",
              name: "items",
              items: {
                type: "object",
                fields: [
                  { type: "string", name: "slug", required: true },
                  { type: "string", name: "title", required: true },
                  { type: "string", name: "description", required: true },
                  { type: "image", name: "image", required: true },
                  {
                    type: "list",
                    name: "images",
                    items: { type: "image" },
                    required: true
                  }
                ]
              }
            },
            { type: "string", name: "stackbit_model_type", const: "PortfolioItems" }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
//# sourceMappingURL=stackbit.config.H3WDZPRZ.cjs.map
