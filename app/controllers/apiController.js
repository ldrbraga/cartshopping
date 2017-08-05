app.controller('apiController', function ($scope, $http) {
    $http.get('http://api.intercase.net.br/items.json').success(function(data){
        console.log(data);
    });
});