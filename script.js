function TodoCtrl($scope) {
	
	$scope.todos = [
		{title:'Z Task', text:'This is the first task', deadline:'02/10/16', done:false},
		{title:'A Task', text:'This is the middle task', deadline:'02/12/16', done:false},
		{title:'J Task', text:'This is the last task', deadline:'02/15/16', done:false}
	];

	$scope.getTotalTodos = function () {
		return $scope.todos.length;
	};

	$scope.addTodo = function () {
		if($scope.checkForm()) {
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

	$scope.checkForm = function() {
    	// regular expression to match required date format
    	re = /^\d{1,2}\/\d{1,2}\/\d{2}$/;
    	if($scope.formTodoTitle == undefined && $scope.formTodoText == undefined) {
    		window.alert("Title and/or description fields left empty");
      		return false;
    	}
    	else if($scope.formTodoDeadline == undefined) {
    		window.alert("Deadline left empty");
    		return false;
    	}
    	else if(!$scope.formTodoDeadline.match(re)) {
      		window.alert("Invalid date format (dd/mm/yy)");
      		return false;
    	}
    	return true;
	};
}