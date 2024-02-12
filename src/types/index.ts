export interface User {
  id: number;
  name: string;
}

export interface IUsers {
  getUsers (): User[]
}

export interface IApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export interface ILogger {
  log(type: string, message: string): void;
}

export interface IHTTP {
  get (url: string): void
}
