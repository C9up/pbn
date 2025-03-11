import { createDirectus, graphql } from '@directus/sdk';

type Global = {
  title: string
  description: string
}

export type Page = {
  title: string
  content: string
  url: string | null
  seo: {
    title: string
    description: string
  }
  domain?: Domain
}

export type Domain = {
    name: string
    domain: string
    status: 'published' | 'draft'
    social_image: string | null
    tags?: string[]
    id: number
}

type Schema = {
  global: Global
  Page: Page[]
  domain: Domain
}

const directus = createDirectus<Schema>('http://jupiter.c9up.com:8055').with(graphql());

export default directus;
