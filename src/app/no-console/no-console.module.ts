import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {ConsoleServiceConfig, NoConsoleService} from './no-console.service';

export function initConfigFactory() {
  return () => {};
}

@NgModule({
  providers: []
})
export class NoConsoleModule {

  static forRoot(config: ConsoleServiceConfig): ModuleWithProviders {

    return {
      ngModule: NoConsoleModule,
      providers: [
        { provide: ConsoleServiceConfig,  useValue: config },
        NoConsoleService,
        { provide : APP_INITIALIZER,
          useFactory: initConfigFactory,
          deps : [
            NoConsoleService
          ],
          multi: true }
      ]
    };

  }
}
