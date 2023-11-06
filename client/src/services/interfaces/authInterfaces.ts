export interface LoginInterface {
  submitHandler: (e: React.FormEvent) => Promise<void>;
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  isLoading: any;
  redirect: any;
}

export interface RegisterInterface {
  submitHandler: (e: React.FormEvent) => Promise<void>;
  name: string;
  setName: Function;
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  confirmPassword: string;
  setConfirmPassword: Function;
  isLoading: any;
  redirect: any;
}
