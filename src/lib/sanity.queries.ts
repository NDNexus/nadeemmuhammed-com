
/** Posts query to fetch all posts with defined slugs, 
 * ordered by publication date descending */
export const postsQuery = `
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    publishedAt,
    "slug": slug.current
  }
`
/** Single post query
 * @param slug - The slug of the post to retrieve
 * @return The GROQ query string to fetch a single post by slug
 * */
export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    body
  }
`;
