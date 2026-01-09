import { createClient } from 'next-sanity'

export const sanityClient = createClient({
    projectId: 'p5f7m1cp',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false, // dev = false, prod can be true later
})
