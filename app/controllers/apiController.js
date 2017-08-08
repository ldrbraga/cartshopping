cartShopping.controller('apiController', function ($scope, $http) {
    $http.get('http://api.intercase.net.br/items.json').success(function(items){
        console.log(items);
    });
});