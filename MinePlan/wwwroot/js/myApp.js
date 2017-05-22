var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    $scope.type = 1;
    $scope.Min = 0;
    $scope.Position = 1;
    $scope.Mode = 0;
    $scope.Max = 0;
    $scope.Values = [];
    var ses=sessionStorage.getItem('values');
    if (ses != null)
        $scope.Values = JSON.parse(ses);

    $scope.add = function () {
        var newItem = {};

        newItem.type = $scope.Type;
        newItem.Position = $scope.Position;
        newItem.Min = $scope.Min;
        newItem.Mode = $scope.Mode;
        newItem.Max = $scope.Max;
        newItem.Mean = ((newItem.Min + 4 * newItem.Mode + newItem.Max) / 6).toFixed(2);
        f = (newItem.Max - newItem.Min) / 6;
        g = newItem.Mean - newItem.Min;
        h = newItem.Mean - newItem.Max;
        i = newItem.Max - newItem.Min;
        j = newItem.Max - newItem.Mean;
        newItem.A = ((g / i) * ((g * j) / (f * f) - 1)).toFixed(2);
        newItem.B = (newItem.A * (j / g)).toFixed(2);

        $scope.Values.push(newItem);
        sessionStorage.setItem('values', JSON.stringify($scope.Values));

        console.log($scope.Values);
        $scope.Position++;
    };
    $scope.ResetType = function () {
        $scope.Position = 1;
    };
    $scope.ResetSession = function () {
        sessionStorage.clear();
    };
});
