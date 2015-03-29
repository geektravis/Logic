describe('AppController', function () {
  var appController;
  var $scope;

  beforeEach(module('raybold-logic'));

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    appController = $controller('AppController', {
      $scope: $scope
    });
  }));

  it('should exist', inject(function () {
    expect(appController).to.exist;
  }));
});
