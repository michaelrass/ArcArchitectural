export default function Header() {
	
	const handleImgFalseHover = document.querySelector('.aside-img_false');
	
	handleImgFalseHover.addEventListener("mouseover", FalseHover);
	handleImgFalseHover.addEventListener("mouseleave", TrueHover);

	function FalseHover () {
		//alert('test1');
		handleImgFalseHover.src = "/assets/images/logo/logoHoverTrue.svg"
	}
   function TrueHover (){
		//alert('test');
		handleImgFalseHover.src = "/assets/images/logo/logoHoverFalse.svg"
	}

	
}



	//function TrueHover (event) {
		//console.log( "/assets/images/logo/logoHoverFalse.svg")
	//}
	
	
	//var image = document.getElementById("asideImgTrue");

	//var image = document.getElementById("asideImgFalse");


 	//image.addEventListener('mouseover', function(){
   //image.src = "/assets/images/logo/logoHoverTrue.svg"
	//})
	//image.addEventListener('mouseout', function(){
   	// image.src = "/assets/images/logo/logoHoverFalse.svg"
  	//})


