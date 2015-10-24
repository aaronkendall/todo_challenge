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
        active: true,
        complete: false
      },
      {
        task: "Finish this challenge",
        active: true,
        complete: false
      }
    ];
    it('displays list of tasks', function() {
      expect(ctrl.activeTasks).toEqual(tasks);
    });
  });
});
