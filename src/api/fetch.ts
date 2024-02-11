type OptionsRequest = {
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  headers?: [string, string][] | Record<string, string> | Headers;
  body?: string;
};

const request = async (url: string, options: OptionsRequest) => {
  const { method, headers, body } = options;

  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  if (response.ok) {
    return response;
  }

  throw new Error(response.statusText);
};

export default request;
