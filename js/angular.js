var app = angular.module('StarterApp', ['ngMaterial', 'bottomSheetDemo1']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}]);


angular.module('bottomSheetDemo1', ['ngMaterial'])
.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet){
  $scope.alert = '';
  var gridTemplate = '<md-bottom-sheet class="md-grid">\
  <md-list>\
    <md-item ng-repeat="item in items">\
      <a class="md-grid-item-content" aria-label="{{item.name}}" ng-click="listItemClick($index)" ng-href="{{item.urlPath}}">\
        <div class="md-icon-container">\
          <md-inline-grid-icon icon="{{item.icon}}"></md-inline-grid-icon>\
        </div>\
        <p class="md-grid-text"> {{ item.name }} </p>\
      </a>\
    </md-item>\
  </md-list>\
</md-bottom-sheet>';
  $scope.showGridBottomSheet = function($event) {
    $scope.alert = '';  
    $mdBottomSheet.show({
      template: gridTemplate,
      controller: 'GridBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' selected!';
    });
  };
})

.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'facebook', icon: 'hangout', imagesource: '', urlPath: 'https://www.facebook.com/WestinHarbourCastle' },
    { name: 'Google', icon: 'mail', imagesource: '', urlPath: 'https://plus.google.com/115723704077800451115/about' },
    { name: 'Trip Advisor', icon: 'message', urlPath: 'http://www.tripadvisor.ca/Hotel_Review-g155019-d183090-Reviews-The_Westin_Harbour_Castle-Toronto_Ontario.html' },
    { name: 'Four Square', icon: 'copy', imagesource: '', urlPath: 'https://foursquare.com/v/the-westin-harbour-castle/4ad4c05bf964a5209bf520e3' },
    { name: 'SPG', icon: 'facebook', imagesource: '', urlPath: 'http://www.starwoodhotels.com/preferredguest/property/reviews/index.html?propertyID=1084' },
    { name: 'Yelp', icon: 'twitter', imagesource: '', urlPath: 'http://www.yelp.ca/biz/the-westin-harbour-castle-toronto-toronto-2' },
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});