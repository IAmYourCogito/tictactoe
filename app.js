var app = angular.module("homepage" , []);
app.controller("counterController" , function($scope){
	this.whiteCrossCircleCounter= "white.jpg";
	this.whiteCrossCircle0 = "white.jpg";
	this.whiteCrossCircle1 = "white.jpg";
	this.whiteCrossCircle2 = "white.jpg";
	this.whiteCrossCircle3 = "white.jpg";
	this.whiteCrossCircle4 = "white.jpg";
	this.whiteCrossCircle5 = "white.jpg";
	this.whiteCrossCircle6 = "white.jpg";
	this.whiteCrossCircle7 = "white.jpg";
	this.whiteCrossCircle8 = "white.jpg";
	console.log("counterController opened");
	this.poopshoot=function(number){
		switch(number){
			case 0: 
				switch($scope.cc.whiteCrossCircle0){
					case "cross.png":
						$scope.cc.whiteCrossCircle0 = "circle.png"
					break;
					case "circle.png":
						$scope.cc.whiteCrossCircle0 = "white.jpg"
					break;
					case "white.jpg":
						$scope.cc.whiteCrossCircle0 = "cross.png"
					break;
				};
			break;
			case 1:
				switch($scope.cc.whiteCrossCircle1){
					case "cross.png":
						$scope.cc.whiteCrossCircle1 = "circle.png"
					break;
					case "circle.png":
						$scope.cc.whiteCrossCircle1 = "white.jpg"
					break;
					case "white.jpg":
						$scope.cc.whiteCrossCircle1 = "cross.png"
					break;
				};
			break;
			case 2:
				switch($scope.cc.whiteCrossCircle2){
					case "cross.png":
						$scope.cc.whiteCrossCircle2 = "circle.png"
					break;
					case "circle.png":
						$scope.cc.whiteCrossCircle2 = "white.jpg"
					break;
					case "white.jpg":
						$scope.cc.whiteCrossCircle2 = "cross.png"
					break;
				};
			break;
			case 3:
			
				switch($scope.cc.whiteCrossCircle3){
					case "cross.png":
						$scope.cc.whiteCrossCircle3 = "circle.png"
					break;
					case "circle.png":
						$scope.cc.whiteCrossCircle3 = "white.jpg"
					break;
					case "white.jpg":
						$scope.cc.whiteCrossCircle3 = "cross.png"
					break;
				};
			break;

			case 4:
			
				switch($scope.cc.whiteCrossCircle4){
					case "cross.png":
						$scope.cc.whiteCrossCircle4 = "circle.png"
					break;
					case "circle.png":
						$scope.cc.whiteCrossCircle4 = "white.jpg"
					break;
					case "white.jpg":
						$scope.cc.whiteCrossCircle4 = "cross.png"
					break;
				};
			break;

			case 5:
			
				switch($scope.cc.whiteCrossCircle5){
					case "cross.png":
						$scope.cc.whiteCrossCircle5 = "circle.png"
					break;
					case "circle.png":
						$scope.cc.whiteCrossCircle5 = "white.jpg"
					break;
					case "white.jpg":
						$scope.cc.whiteCrossCircle5 = "cross.png"
					break;
				};
			break;

			case 6:
			
				switch($scope.cc.whiteCrossCircle6){
					case "cross.png":
						$scope.cc.whiteCrossCircle6 = "circle.png"
					break;
					case "circle.png":
						$scope.cc.whiteCrossCircle6 = "white.jpg"
					break;
					case "white.jpg":
						$scope.cc.whiteCrossCircle6 = "cross.png"
					break;
				};
			break;

			case 7:
			
				switch($scope.cc.whiteCrossCircle7){
					case "cross.png":
						$scope.cc.whiteCrossCircle7 = "circle.png"
					break;
					case "circle.png":
						$scope.cc.whiteCrossCircle7 = "white.jpg"
					break;
					case "white.jpg":
						$scope.cc.whiteCrossCircle7 = "cross.png"
					break;
				};
			break;

			case 8:
			
				switch($scope.cc.whiteCrossCircle8){
					case "cross.png":
						$scope.cc.whiteCrossCircle8 = "circle.png"
					break;
					case "circle.png":
						$scope.cc.whiteCrossCircle8 = "white.jpg"
					break;
					case "white.jpg":
						$scope.cc.whiteCrossCircle8 = "cross.png"
					break;
				};
			break;
		}
	console.log($scope.cc.whiteCrossCircle0);
	console.log($scope.cc.whiteCrossCircle1);
	if($scope.cc.whiteCrossCircle0 != "white.jpg" && $scope.cc.whiteCrossCircle1 != "white.jpg" && $scope.cc.whiteCrossCircle2 != "white.jpg" && $scope.cc.whiteCrossCircle0 === $scope.cc.whiteCrossCircle1 && $scope.cc.whiteCrossCircle1 === $scope.cc.whiteCrossCircle2){alert("you win!");}
	if($scope.cc.whiteCrossCircle3 != "white.jpg" && $scope.cc.whiteCrossCircle4 != "white.jpg" && $scope.cc.whiteCrossCircle5 != "white.jpg" && $scope.cc.whiteCrossCircle3 === $scope.cc.whiteCrossCircle4 && $scope.cc.whiteCrossCircle4 === $scope.cc.whiteCrossCircle5){alert("you win!");}
	if($scope.cc.whiteCrossCircle6 != "white.jpg" && $scope.cc.whiteCrossCircle7 != "white.jpg" && $scope.cc.whiteCrossCircle8 != "white.jpg" && $scope.cc.whiteCrossCircle6 === $scope.cc.whiteCrossCircle7 && $scope.cc.whiteCrossCircle7 === $scope.cc.whiteCrossCircle8){alert("you win!");}
	if($scope.cc.whiteCrossCircle0 != "white.jpg" && $scope.cc.whiteCrossCircle3 != "white.jpg" && $scope.cc.whiteCrossCircle6 != "white.jpg" && $scope.cc.whiteCrossCircle0 === $scope.cc.whiteCrossCircle3 && $scope.cc.whiteCrossCircle3 === $scope.cc.whiteCrossCircle6){alert("you win!");}
	if($scope.cc.whiteCrossCircle1 != "white.jpg" && $scope.cc.whiteCrossCircle4 != "white.jpg" && $scope.cc.whiteCrossCircle7 != "white.jpg" && $scope.cc.whiteCrossCircle1 === $scope.cc.whiteCrossCircle4 && $scope.cc.whiteCrossCircle4 === $scope.cc.whiteCrossCircle7){alert("you win!");}
	if($scope.cc.whiteCrossCircle2 != "white.jpg" && $scope.cc.whiteCrossCircle5 != "white.jpg" && $scope.cc.whiteCrossCircle8 != "white.jpg" && $scope.cc.whiteCrossCircle2 === $scope.cc.whiteCrossCircle5 && $scope.cc.whiteCrossCircle5 === $scope.cc.whiteCrossCircle8){alert("you win!");}
	if($scope.cc.whiteCrossCircle0 != "white.jpg" && $scope.cc.whiteCrossCircle4 != "white.jpg" && $scope.cc.whiteCrossCircle8 != "white.jpg" && $scope.cc.whiteCrossCircle0 === $scope.cc.whiteCrossCircle4 && $scope.cc.whiteCrossCircle4 === $scope.cc.whiteCrossCircle8){alert("you win!");}
	if($scope.cc.whiteCrossCircle2 != "white.jpg" && $scope.cc.whiteCrossCircle4 != "white.jpg" && $scope.cc.whiteCrossCircle6 != "white.jpg" && $scope.cc.whiteCrossCircle2 === $scope.cc.whiteCrossCircle4 && $scope.cc.whiteCrossCircle4 === $scope.cc.whiteCrossCircle6){alert("you win!");}




		// $scope.cc.whiteCrossCircleCounter+=2;
		// if ($scope.cc.whiteCrossCircleCounter%3==2){
		// 	$scope.cc.whiteCrossCircle = "cross.png"
		// }
		// else if($scope.cc.whiteCrossCircleCounter%3==1){
		// 	$scope.cc.whiteCrossCircle = "circle.png"
		// }
		// else if($scope.cc.whiteCrossCircleCounter%3==0){
		// 	$scope.cc.whiteCrossCircle = "white.jpg"
/*		};*/
	};
});