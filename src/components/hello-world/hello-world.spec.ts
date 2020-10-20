import { HelloWorld } from './hello-world';

describe('app', () => {
  it('builds', () => {
    expect(new HelloWorld()).toBeTruthy();
  });
});
