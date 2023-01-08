import { client } from './client';

export function getUser() {
  return client.auth.currentUser;
}

export async function signUpUser(email, password) {
  let response = await client.auth.signUp({ email, password });

  return response.user;
}
export async function login(email, password) {
  let response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function signOut() {
  await client.auth.signOut();
}
