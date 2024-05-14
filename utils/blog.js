import graphQlRequest from "./graphqlRequest";

export async function getAllCaseStudies() {
  const query = {
    query: `
        query getAllCaseStudies {
            caseStudies {
              data {
                attributes {
                  title
                  slug
                  previewText
                  displayImage {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          `,
  };

  const resJson = await graphQlRequest(query);

  const allBlogs = resJson.data.caseStudies.data;

  return allBlogs;
}

export async function getBlogPaths() {
  const query = {
    query: `query getBlogPaths {
            caseStudies {
              data{
                attributes{
                  slug
                }
              }
            }
          }`,
  };

  const resJson = await graphQlRequest(query);

  if (
    !resJson ||
    !resJson.data ||
    !resJson.data.caseStudies ||
    !resJson.data.caseStudies.data
  ) {
    // Log this error state and return an empty array to avoid crashes
    console.error("GraphQL response was not in the expected format:", resJson);
    return [];
  }

  const allBlogPaths = resJson.data.caseStudies.data;

  return allBlogPaths;
}

export async function getSingleBlogDataBySlug(slug) {
  const query = {
    query: `query getSingleBlogData{
        caseStudies(filters:{slug: {eq:"${slug}"}}){
          data{
            attributes{
              title
              content
              previewText
              client
              role
              slug
              category{
                data{
                  attributes{
                    title
                  }
                }
              }
              contenttype
              publishedAt
              completeddate
              location
              displayImage{
                data{
                  attributes{url}
                }
              }
              author
            }
          }
          
        }
      }`,
  };

  const resJson = await graphQlRequest(query);

  const singleBlogData = resJson.data.caseStudies.data[0];

  return singleBlogData;
}
