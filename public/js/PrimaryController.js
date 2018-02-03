var myApp = angular.module('devicePrimaryPanelApp', []);
myApp.controller('PrimaryController', function ($scope, $http) {



    $http.get('/googlereviews').
    then(function(response) {

        if(response.data === "error"){
            console.log("Error retrieving reviews");
            return;
        }
            var myObj = JSON.parse(response.data);
            $scope.reviews = myObj.result.reviews;
            console.log($scope.reviews);

    });

});