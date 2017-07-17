(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	angular
	.module('todoApp',[])
	.controller('TodoController',['$scope',function($scope){
		//视图模型 vm --> viewmodel
		var vm = $scope;

		//1.展示任务列表
		var todoList = [
			{id:1,name:'jack',isCompleted:false},
			{id:2,name:'rose',isCompleted:true},
			{id:3,name:'tina',isCompleted:true},
			{id:4,name:'susan',isCompleted:false},
		]

		vm.todoList = todoList;
	}])
})(window);
