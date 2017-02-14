angular.module('sidenav.controllers.SideNavCtrl', [])
  .controller('SideNavCtrl', function($mdSidenav, $state, SideNav) {
    var vm = this;
    vm.selectMenuItem = selectMenuItem;
    vm.closeSideNav = closeSideNav;
    vm.menuItems = SideNav.getMenuItems;
    vm.selected = vm.menuItems[0];

    function selectMenuItem(menuItem) {
      vm.selected = menuItem;
      closeSideNav();
      $state.go(menuItem.route);
    }

    function closeSideNav() {
      $mdSidenav('left').close();
    }
  });
