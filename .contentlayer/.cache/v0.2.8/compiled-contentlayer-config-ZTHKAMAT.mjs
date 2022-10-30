// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.jpg`
  },
  og: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/og.jpg`
  },
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data/blog",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeCodeTitles]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZTHKAMAT.mjs.map
