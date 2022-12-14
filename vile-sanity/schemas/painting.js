import imageRatio from './imageRatio'

export default {
    name: 'painting',
    title: 'Painting',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Painting title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Short description',
        type: 'string',
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
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: 'collection',
        title: 'Collection',
        type: 'array',
        of: [{type: 'reference', to: {type: 'collection'}}],
      },
      {
        name: 'alt',
        title: 'Image alt',
        type: 'string',
      },
      {
        name: 'imageRatio',
        title: 'image size type',
        type: 'string',
        options: {
          list: [
            ...imageRatio
          ],
        }
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
    ],
  }
  