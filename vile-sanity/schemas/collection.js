export default {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'alt',
        title: 'image alt',
        type: 'string',
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
    ],
  }
  