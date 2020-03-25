const pages = {
  name: "pages",
  label: "Pages",
  folder: "content/",
  create: true,
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "page"
    },
    {
      label: "Draft",
      name: "draft",
      widget: "boolean",
      default: true,
    },
    {
      label: "Title",
      name: "title",
      widget: "string"
    },
    {
      label: "Meta Title",
      name: "meta_title",
      widget: "metastring",
      required: false,
      pattern: ['.{4,}', "Must have at least 4 characters"],
    },
    {
      label: "Meta Description",
      name: "description",
      widget: "metatext",
      required: false,
      pattern: ['.{30,}', "Must have at least 30 characters"],
    },
    {
      label: "Publish Date",
      name: "date",
      widget: "datetime"
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown"
    },
    {
      label: "Images",
      name: "images",
      widget: "gallery",
    },
    {
      label: "Categories",
      name: "categories",
      widget: "categories",
      required: false,
      hint: "Add a category to this document."
    },
    {
      label: "Tags",
      name: "tags",
      widget: "tags",
      required: false,
      hint: "Add a tag(s) to this document."
    },
    {
      label: "Slug",
      name: "slug",
      widget: "string",
      required: false,
      hint: "Change the slug of this page."
    },
    {
      label: "Aliases",
      name: "aliases",
      widget: "aliases",
      hint: "Aliases allow you to add more slugs for navigating to this document."
    },
    {
      label: "Show Sidebar",
      name: "show_sidebar",
      widget: "boolean",
      default: true,
    },
    {
      label: "Show Featured Image",
      name: "show_featured_image",
      widget: "boolean",
      default: false,
    },
  ]
}

export default pages