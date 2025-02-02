// Get data
export function getData<T>(url: string): Promise<T> {
  const response = fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  return response;
}
