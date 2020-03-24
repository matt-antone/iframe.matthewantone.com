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
      widget: "draftfield",
      default: true,
      required: false,
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
      widget: "metadatetime"
    },
    {
      label: "Hero",
      name: "hero",
      widget: "hero",
      required: false,
      // default: "{text: '',urls:[]}"
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      required: false,
    },
    {
      label: "Gallery",
      name: "images",
      widget: "gallery",
      required: false,
      hint: "Attach images to this page."
    },
    {
      label: "Categories",
      name: "categories",
      widget: "categoriesPicker",
      required: false,
      hint: "Add a category to this page."
    },
    {
      label: "Tags",
      name: "tags",
      widget: "tagsPicker",
      required: false,
      hint: "Add a tag(s) to this page."
    },
    {
      label: "Slug",
      name: "slug",
      widget: "string",
      required: false,
      hint: "Change the slug of this page.",
      pattern: ['^[a-z0-9]+(?:-[a-z0-9]+)*$','You can only use alphanumeric characters and dashes.']
    },
    {
      label: "Aliases",
      name: "aliases",
      widget: "aliases",
      hint: "Aliases allow you to add more slugs for navigating to this page.",
      required: false,
    },
    {
      label: "Show Sidebar",
      name: "show_sidebar",
      widget: "boolean",
      default: true,
      required: false,
    },
    {
      label: "Show Featured Image",
      name: "show_featured_image",
      widget: "boolean",
      default: false,
      required: false,
    },
  ]
}

export default pages