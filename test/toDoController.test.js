describe('toDoController', function() {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoController');
  }));

  describe('List shows tasks that have been added', function() {
    var tasks = [
      {
        task: "Do some more coding",
        complete: false
      },
      {
        task: "Finish this challenge",
        complete: false
      }
    ];
    it('displays list of tasks', function() {
      expect(ctrl.activeTasks).toEqual(tasks);
    });

    it('I can add a new task', function() {
      ctrl.newActiveTask("a new task");
      expect(ctrl.activeTasks).toContain("a new task");
    });
  });

  describe('Changing state of tasks - completion and deletion', function() {
    it('I can set a task as completed', function() {
      ctrl.completedTask(ctrl.activeTasks[0]);
      expect(ctrl.completedTasks).toContain("Do some more coding");
    });

    it('I can delete an active task permanently', function() {
      ctrl.deleteActiveTask(ctrl.activeTasks[0]);
      expect(ctrl.activeTasks).not.toContain("Do some more coding");
    });

    it('I can delete a completed task permanently', function() {
      ctrl.completedTask(ctrl.activeTasks[0]);
      ctrl.deleteCompletedTask(ctrl.activeTasks[0]);
      expect(ctrl.completedTasks).not.toContain("Do some more coding");
    });

    it('I can delete all completed tasks permanently', function() {
      ctrl.completedTask(ctrl.activeTasks[0]);
      ctrl.completedTask(ctrl.activeTasks[0]);
      ctrl.deleteAllCompleted();
      expect(ctrl.completedTasks).not.toContain("Do some more coding");
      expect(ctrl.completedTasks).not.toContain("Finish this challenge");
    });
  });

  describe('Changing tabs', function() {
    it('The tab number starts at 1', function() {
      expect(ctrl.tab).toEqual(1);
    });

    it('I can change the tab number', function() {
      ctrl.setTab(3);
      expect(ctrl.tab).toEqual(3);
    });
  });
});
