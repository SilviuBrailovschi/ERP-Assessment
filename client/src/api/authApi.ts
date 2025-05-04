export interface LoginResponse {
  access_token: string;
  message: string;
}

export async function loginUser(credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  const res = await fetch('http://localhost:5500/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Login failed');
  }
  return res.json();
}
