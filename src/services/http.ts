import type { IApiConfig, ILogger, User, IHTTP } from '../types';

// Service A
export class HTTP implements IHTTP {
  logger: ILogger;
  apiConfig: IApiConfig;

  static $inject = ['logger', 'apiConfig'];

  constructor(logger: ILogger, apiConfig: IApiConfig) {
    this.apiConfig = apiConfig;
    this.logger = logger;
  }

  async get(url: string) {
    const response = await fetch(`${this.apiConfig.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.log('info', `Status: ${response.status}. Response: ${JSON.stringify(responseData)}`)

      return responseData;
    } else {
      this.logger.log('error', `Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}
