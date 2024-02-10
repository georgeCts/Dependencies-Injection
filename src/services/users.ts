import type { IApiConfig, User, IHTTP, IUsers} from '../types';

// Class Main
export class Users implements IUsers {
  private _http: IHTTP;
  private _apiConfig: IApiConfig;

  static $inject = ['http', 'apiConfig'];

  constructor(http: IHTTP, apiConfig: IApiConfig) {
    this._http = http;
    this._apiConfig = apiConfig;
  }

  getUsers() {
    return this._http.get(this._apiConfig.resources.users) as unknown as User[];
  }
}
