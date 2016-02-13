function TodoCtrl($scope) {
	
	$scope.todos = [
		{title:'Z Task', text:'This is the A task', deadline:'2016-02-10', done:false},
		{title:'B Task', text:'This is the B task', deadline:'2016-02-12', done:false}
	];

	$scope.getTotalTodos = function () {
		return $scope.todos.length;
	};

	$scope.addTodo = function () {
		if($scope.formTodoTitle != undefined && $scope.formTodoText != undefined) {
			$scope.todos.push({title:$scope.formTodoTitle, text:$scope.formTodoText, deadline:$scope.formTodoDeadline, done:false});
			$scope.formTodoTitle = '';
			$scope.formTodoText = '';
			$scope.formTodoDeadline = '';
		}
	};

	$scope.deleteTodo = function (index) {
		$scope.todos.splice(index, 1);
	};

	$scope.filterFunction = function(element) {
		return element.name.match(/^Ma/) ? true : false;
	};
}