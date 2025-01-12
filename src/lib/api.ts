const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

interface APIError extends Error {
  info?: any;
  status?: number;
}

function getRequestOptions(options: RequestOptions): RequestOptions {
  return {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  };
}

async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, getRequestOptions(options));

  if (!res.ok) {
    const error: APIError = new Error('An error occurred while fetching data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export const getData = <T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> => {
  return apiRequest<T>(path, { method: 'GET', ...options });
};

export const postData = <T>(
  path: string,
  data: any,
  options: RequestOptions = {},
): Promise<T> => {
  return apiRequest<T>(path, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
};
