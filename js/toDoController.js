toDoList.controller('toDoController', [function() {
  var self = this;

  self.activeTasks = [
  {
    task: "Do some more coding",
    active: true,
    complete: false
  },
  {
    task: "Finish this challenge",
    active: true,
    complete: false
  }
];

  self.completedTasks = [];

  self.newActiveTask = function(taskContent) {
    self.activeTasks.push({task: taskContent, active: true, complete: false});
  };

  self.completedTask = function(task) {
    task.complete = true;
    self.completedTasks.push(task);
  };

  self.deleteTask = function(task) {
    var toDelete = self.activeTasks.indexOf(task);
    self.activeTasks.splice(toDelete, 1);
  };


}]);
