export interface UserState {
  id: string;
  username: string;
  token: string;
}

export interface CredentialsPayload {
  username: string;
  password: string;
}

export interface NotifPayload {
  message: string;
  type: 'success' | 'error';
}
