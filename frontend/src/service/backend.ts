export async function backendGet(url: string, revalidateIn?: number): Promise<any> {
  const requestOptions: RequestInit = {
    headers: {
      Authorization: `bearer ${process.env.API_BEARER_TOKEN}`
    },
  };

  if (revalidateIn)
    requestOptions.next = {revalidate: revalidateIn} 

  return (await fetch(
    process.env.API_BASE_URL + '/api' + url,
    requestOptions
  )).json()
}