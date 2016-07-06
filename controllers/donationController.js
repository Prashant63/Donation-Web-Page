donation.controller("donationCtrl",["$scope",function($scope){
	$scope.totalAmount = 1000;
	$scope.donatedAmount = 0;
	$scope.amount = 50;
	$scope.donerCount = 0;
	document.getElementById("slider").style.width = '0%';

	$scope.donate = function(){
		$scope.donatedAmount += Number($scope.amount);
		$scope.donerCount += 1;
		$scope.amount = 50;
		$scope.donation = $scope.totalAmount - $scope.donatedAmount;
		if($scope.donation <= 1000 && $scope.donation > 0){
			var width = ($scope.donatedAmount/$scope.totalAmount) * 100;
			document.getElementById("slider").style.width = width+'%';
		}else{
			document.getElementById("slider").style.width = 100+'%';
		}
	}
}]);