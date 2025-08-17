import projectShowcase from '$lib/data/projectShowcase.json';
import { slugify } from '$lib/utils/slugify.js'

export function load({ params }) {
  const project = projectShowcase.find((p) => slugify(p.name) === params.slug)

  if (!project) {
    throw new Error('Project not found')
  }

  return {
    project
  }
}