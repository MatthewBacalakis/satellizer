import satellizer from './../src/ng1';

describe('angular annotations', () => {

  beforeEach(angular.mock.module(satellizer));

  beforeEach(() => {
    angular.mock.inject.strictDi(true);
  });

  it('should create the injector without errors', angular.mock.inject(['SatellizerAuth', (SatellizerAuth) => {
    expect(SatellizerAuth).toBeTruthy();
  }]));

});