/** * Created by liudandan on 20164/3. */var app=angular.module('controller',[]);app.controller('homeCtrl',function ($scope,$sce) {    $scope.html=$sce.trustAsHtml('<h1>小刘书店欢迎你</h1>')})app.controller('addCtrl',function ($scope,Books,$location) {     $scope.addBook=function () {      var obj={          bookName:$scope.bookName,          bookCover:$scope.bookCover,          bookPrice:$scope.bookPrice      }      Books.save(obj).$promise.then(function () {          $location.path('/list');      })    }})app.controller('listCtrl',function ($scope,Books) {  $scope.books=Books.query();})app.controller('detailCtrl',function ($scope,Books,$routeParams,$location) {     var id=$routeParams.id;     $scope.bbk=Books.get({id});     //移除     $scope.remove=function () {        Books.delete({id}).$promise.then(function () {            $location.path('/list');        })     }     $scope.flag=true;    //修改    $scope.changeFlag=function () {       $scope.flag=false;       $scope.temp=JSON.parse(JSON.stringify($scope.bbk));    }    //保存    $scope.updata=function () {      Books.update({id},$scope.temp).$promise.then(function () {          $scope.flag=true;          $scope.bbk=$scope.temp;      })    }    //取消    $scope.cancel=function () {        $scope.flag=true;    }})