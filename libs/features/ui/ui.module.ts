import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PIPES } from '@myworkspace/features/ui/pipes';

const MODULES = [TranslateModule];

@NgModule({
  imports: [...MODULES],
  declarations: [...PIPES],
  exports: [...MODULES, ...PIPES]
})
export class UISharedModule {}
