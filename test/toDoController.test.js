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
        active: true
      },
      {
        task: "Finish this challenge",
        active: true
      }
    ];
    it('displays list of tasks', function() {
      expect(ctrl.tasks).toEqual(tasks);
    });
  });
});
