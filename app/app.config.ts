import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  footer: string;
  title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
  footer: 'This is my wonderful footer, injected with DI and opaque tokens!',
  title: 'This is my wonderful title, injected with DI and opaque tokens!'
};


export let APP_CONFIG = new OpaqueToken('app.config');
