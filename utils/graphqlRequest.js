import { API_URL } from "./urls";

export default async function graphQlRequest(query) {
  const url = `${API_URL}/graphql`;

  console.log(url);

  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });

  const resJson = await res.json();

  return resJson;
}
