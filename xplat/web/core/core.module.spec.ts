import { FooCoreModule } from '@myworkspace/web/core/core.module';

describe('FooCoreModule', () => {
  it('should work', () => {
    expect(new FooCoreModule(null)).toBeDefined();
  });
});
