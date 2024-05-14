import graphQlRequest from "./graphqlRequest";

export async function getShowcasePosts() {
  const query = {
    query: `query myQuery {
      portfolios(filters: { showcase: { eq: true } }, sort: "sortOrder:asc") {
        data {
          attributes {
            title
            snippetVideo {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }`,
  };

  const res = await graphQlRequest(query);

  const showcasePosts = res.data.portfolios.data;

  return showcasePosts;
}

export async function getallPortfolios() {
  const query = {
    query: `query myQuery {
      portfolios(sort: "sortOrder:asc") {
        data {
          attributes {
            title
            slug
            snippetVideo {
              data {
                attributes {
                  url
                }
              }
            }
            featuredImage{
              data{
                attributes{
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

  const res = await graphQlRequest(query);

  const allPosts = res.data.portfolios.data;

  return allPosts;
}

export async function getSinglePortfolio(slug) {
  const query = {
    query: `query getSinglePortfolio {
            portfolios(filters: { slug: { eq: "${slug}" } }) {
              data {
                attributes {
                  title
                  description 
                  productionRole
                  category {
                    data {
                      attributes {
                        title
                      }
                    }
                  }
                  clientName
                  snippetVideo {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  fullVideo {
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
  const singlePortfolioData = resJson.data.portfolios.data[0];

  return singlePortfolioData;
}

export async function getPortfolioSlugs() {
  const query = {
    query: `
        query getPortfolioSlugs {
  
            portfolios{
              data{attributes{slug}}
            }
            
          }
        `,
  };

  const resJson = await graphQlRequest(query);

  const porfolioSlugList = resJson.data.portfolios.data;

  return porfolioSlugList;
}
