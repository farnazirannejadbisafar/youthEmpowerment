import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { DataServiceProvider } from '../providers/data-service/data-service';

platformBrowserDynamic().bootstrapModule(AppModule,[DataServiceProvider]);
