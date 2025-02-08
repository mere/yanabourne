import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: 'nextjs',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "HomeFeatures",
          type: "object",
          filePath: "content/yana/home-features.json",
          fields: [
            {
              name: "header",
              type: "object",
              fields: [
                { name: "title", type: "string", required: true },
                { name: "introduction", type: "text", required: true }
              ]
            },
            {
              name: "story",
              type: "object",
              fields: [
                { name: "title", type: "string", required: true },
                {
                  name: "content",
                  type: "list",
                  items: {
                    type: "text"
                  },
                  required: true
                }
              ]
            }
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