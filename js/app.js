(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	angular
	.module('todoApp',[])
	.controller('TodoController',['$scope', todoHandler]);
	function todoHandler($scope){
		//视图模型 vm --> viewmodel
		var vm = $scope;

		//1.展示任务列表
		var todoList = [
			{id:1,name:'jack',isCompleted:true},
			{id:2,name:'tina',isCompleted:true},
			{id:3,name:'susan',isCompleted:false}
		]

		vm.todoList = todoList;

		//添加任务(用户输入的任务)
		vm.taskName = '';
			console.log(vm.taskName);
		vm.addTodo = function(){
			console.log('dd')
			if(vm.taskName.trim() === ''){
				return;
			}

			var ids,
				length = todoList.length;

			//如果数组中没有值，则任务id为 1
			//如果数组中有值，则任务id为 数组中最后一项id值 + 1
			if(length === 0){
				ids = 1;
			}else{
				ids = todoList[length - 1].id + 1;
			}

			//将创建的任务追加到数组中 并 清空输入框
			todoList.push({id:ids,name:vm.taskName,isCompleted:false});
			vm.taskName = '';
		}
	}
})(window);
