
angular.module('sidenav.services.SideNav', [])
  .factory('SideNav', function() {

    var menuItems = [
      {
        name: 'To-Do',
        icon: '',
        route: 'todo'
      },
      {
        name: 'About',
        icon: '',
        route: 'about'
      }
    ];

    var service = {
      getMenuItems: menuItems
    };
    return service;

  });
