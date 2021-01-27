function BasketCtrl($scope) {
    $scope.description = 'Single ticket';
    $scope.cost = 8;
    $scope.qty = 1;
    $scope.iva = 0.12;
    $scope.ivaPor = $scope.iva * 100 + '%';
}