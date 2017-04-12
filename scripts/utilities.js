// var pointsArray=document.getElementsByClassName("point");

// function forEach(someFunction){
// 	someFunction(pointsArray);
// }
// function revealPoints(x){
// 	for(var i=0;i<x.length;i++){
// 		x[i].style.opacity=1;
//     	x[i].style.transform="scaleX(1) translateY(0)";
//     	x[i].style.msTransform="scaleX(1) translateY(0)";
//     	x[i].style.WebkitTransform="scaleX(1) translateY(0)";
//     }
// }

function forEach(a,someFunction){
	for(var i=0;i<a.length;i++){
		someFunction(a[i]);	
	}
}

