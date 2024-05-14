import graphQlRequest from "./graphqlRequest";

export async function getCategoryPaths() {
  const query = {
    query: `query getCategoryPaths {
            categories{
              data{
                attributes
              {title}
              }
            }
          }`,
  };

  const resJson = await graphQlRequest(query);

  const categorySlugs = resJson.data.categories.data;
  return categorySlugs;
}

export async function getPortfolioByCategory(category) {
  const query = {
    query: `query getPortfoliosByCategory {
        categories (filters: {title:{eq: "${category}"}} ){
          data{
            attributes{
              title
              portfolios{
                data{
                  attributes{
                    title
                    featuredImage {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    slug
                    snippetVideo{
                      data{attributes{url}}
                    }
                  }
                }
              }
            }
          }
        }
      }`,
  };

  const resJson = await graphQlRequest(query);
  const portfolioByCategory = resJson.data?.categories?.data[0].attributes;

  return portfolioByCategory;
}
