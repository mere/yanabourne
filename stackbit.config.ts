import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "18",
  sitemap: (options) => {
    return [
      {
        urlPath: "/",
        label: "Home",
        stableId: "home",
        isHomePage: true,
      },
    ];
  },
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],

      models: [
        {
          type: "page",
          name: "YanaBourne-Site",
          label: "YanaBourne-Site",
          urlPath: "/",
          fields: [
            {
              name: "sections",
              type: "model",
              models: [],
            },
          ],
        },
        {
          type: "object",
          name: "CertificatesSection",
          label: "Certificates Section",
          fields: [
            { type: "string", name: "heading", required: true },
            {
              type: "list",
              name: "certificates",
              items: {
                type: "object",
                fields: [
                  { type: "string", name: "date", required: true },
                  { type: "string", name: "title", required: true },
                  { type: "string", name: "link", required: true },
                ],
              },
            },
          ],
        },
        {
          type: "data",
          name: "FooterSection",
          label: "Footer Section",
          fields: [
            {
              type: "list",
              name: "socialLinks",
              items: {
                type: "object",
                fields: [
                  { type: "string", name: "href", required: true },
                  { type: "string", name: "ariaLabel", required: true },
                ],
              },
            },
            { type: "string", name: "copyrightText", required: true },
          ],
        },
        {
          type: "data",
          name: "GallerySection",
          label: "Gallery Section",
          fields: [
            { type: "string", name: "type", const: "GallerySection" },
            {
              type: "string",
              name: "stackbit_model_type",
              const: "GallerySection",
            },
          ],
        },
        {
          type: "data",
          name: "Home",
          label: "Home",
          fields: [
            { type: "string", name: "id", required: true },
            { type: "string", name: "type", const: "Home" },
            {
              type: "object",
              name: "header",
              fields: [
                { type: "string", name: "title", required: true },
                { type: "string", name: "introduction", required: true },
              ],
            },
            {
              type: "object",
              name: "story",
              fields: [
                { type: "string", name: "title", required: true },
                {
                  type: "list",
                  name: "content",
                  items: { type: "string" },
                },
              ],
            },
            {
              type: "object",
              name: "contact",
              fields: [
                { type: "string", name: "title", required: true },
                { type: "string", name: "description", required: true },
                {
                  type: "list",
                  name: "methods",
                  items: {
                    type: "object",
                    fields: [
                      { type: "string", name: "type", required: true },
                      { type: "string", name: "value", required: true },
                      { type: "string", name: "label", required: true },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          type: "data",
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
                    { type: "string", name: "icon" },
                  ],
                },
              ],
            },
            {
              type: "object",
              name: "image",
              fields: [
                { type: "image", name: "src", required: true },
                { type: "string", name: "alt", required: true },
                { type: "number", name: "width", required: true },
                { type: "number", name: "height", required: true },
              ],
            },
            {
              type: "string",
              name: "stackbit_model_type",
              const: "HeroSection",
            },
          ],
        },
        {
          type: "data",
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
                    required: true,
                  },
                ],
              },
            },
            {
              type: "string",
              name: "stackbit_model_type",
              const: "LocationsSection",
            },
          ],
        },
        {
          type: "data",
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
                      { type: "number", name: "height", required: true },
                    ],
                  },
                ],
              },
            },
            {
              type: "string",
              name: "stackbit_model_type",
              const: "PortfolioSection",
            },
          ],
        },
        {
          type: "data",
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
                    { type: "boolean", name: "required", required: true },
                  ],
                },
                {
                  type: "object",
                  name: "email",
                  fields: [
                    { type: "string", name: "label", required: true },
                    { type: "string", name: "placeholder", required: true },
                    { type: "boolean", name: "required", required: true },
                  ],
                },
                {
                  type: "object",
                  name: "message",
                  fields: [
                    { type: "string", name: "label", required: true },
                    { type: "string", name: "placeholder", required: true },
                    { type: "boolean", name: "required", required: true },
                  ],
                },
                {
                  type: "object",
                  name: "submitButton",
                  fields: [
                    { type: "string", name: "text", required: true },
                    { type: "string", name: "loadingText", required: true },
                  ],
                },
                {
                  type: "object",
                  name: "successMessage",
                  fields: [
                    { type: "string", name: "title", required: true },
                    { type: "string", name: "description", required: true },
                  ],
                },
                { type: "string", name: "errorMessage", required: true },
              ],
            },
            {
              type: "object",
              name: "image",
              fields: [
                { type: "image", name: "src", required: true },
                { type: "string", name: "alt", required: true },
                { type: "number", name: "width", required: true },
                { type: "number", name: "height", required: true },
              ],
            },
            {
              type: "string",
              name: "stackbit_model_type",
              const: "ContactSection",
            },
          ],
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
                    required: true,
                  },
                ],
              },
            },
            {
              type: "string",
              name: "stackbit_model_type",
              const: "PortfolioItems",
            },
          ],
        },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/",
      },
    }),
  ],
});
