toDoList.controller('toDoController', [function() {
  var self = this;

  self.tab = 1;

  self.activeTasks = [
  {
    task: "Do some more coding",
    complete: false
  },
  {
    task: "Finish this challenge",
    complete: false
  }
];

  self.completedTasks = [];

  self.setTab = function(tabNumber) {
    self.tab = tabNumber;
  };

  self.newActiveTask = function(taskContent) {
    self.activeTasks.push({task: taskContent, complete: false});
  };

  self.completedTask = function(task) {
    task.complete = true;
    self.completedTasks.push(task);
  };

  self.deleteActiveTask = function(task) {
    var toDelete = self.activeTasks.indexOf(task);
    self.activeTasks.splice(toDelete, 1);
  };

  self.deleteCompletedTask = function(task) {
    var completeToDelete = self.completedTasks.indexOf(task);
    self.completedTasks.splice(completeToDelete, 1);
  };


}]);
