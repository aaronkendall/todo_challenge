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
  });
});
