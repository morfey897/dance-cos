import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'
import { filterUnique } from '../utils/unique';

export default defineType({
  name: 'direction',
  title: 'Direction',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Internal name',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{
        type: 'reference', to: { type: 'tag' }, options: {
          filter: filterUnique
        }
      }],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'reference', to: { type: 'asset' }, options: {
          filter: filterUnique
        }
      }],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to action',
      type: 'reference',
      to: { type: 'callToAction' },
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'headline',
      image: 'images.0.image',
    },
    prepare({ title, subtitle, image }) {
      return {
        title,
        subtitle,
        media: image,
      }
    },
  },
})
