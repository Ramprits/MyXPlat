import { LogService } from '@myworkspace/core/services/log.service';
import { WindowService } from '@myworkspace/core/services/window.service';

export const CORE_PROVIDERS: any[] = [LogService, WindowService];

export * from '@myworkspace/core/services/log.service';
export * from '@myworkspace/core/services/window.service';
export * from '@myworkspace/core/services/tokens';
