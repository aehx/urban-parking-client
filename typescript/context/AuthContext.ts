export interface Body {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type userContextProviderType = {
  children: React.ReactNode;
};
export interface AxiosError{
  success:boolean;
  error:string;
}
export interface UserData {
  email: string;
  favorites: string[];
  token: string;
  username: string;
}

export interface UserInfo {
  email: string;
  favorites: string[];
  username: string;
}

export type JwtTokenType = {
  exp: number;
  iat: number;
  sub: string;
};

export type UserContextType = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (body: Body) => void;
  userToken: string | null;
  userInfo: UserInfo | null;
  isLoading: boolean;
  loginError:string|null
  registerError:string|null
};
