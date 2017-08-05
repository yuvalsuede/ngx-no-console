import {Injectable, Optional} from '@angular/core';

export class ConsoleServiceConfig {
  env = 'dev';
}

@Injectable()
export class NoConsoleService {

  constructor(@Optional() config: ConsoleServiceConfig) {

    if (config.env === 'prod' || config.env === 'production') { window.console.log = function() {}; }

  }


}
