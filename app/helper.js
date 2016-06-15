// change color of search-icon  and option does not change, when you refresh page
$(document).ready(function(){
    $(".glyphicon-search, .search").click(function(){
        $(".glyphicon-search").toggleClass('change-search-icon');
         $(".search-input").toggleClass('show-hide');
    });

    $(document).on('change', '#SizeSelect', function(e){
        var thecomp = $('#SizeSelect').val();
        localStorage.thecomp=thecomp;
    });
    if(localStorage.getItem('thecomp')){
        $("#SizeSelect").val(localStorage.thecomp);
    }

      $(document).on('change', '#size', function(e){
        var thecomp = $('#size').val();
        localStorage.thecomp=thecomp;
    });
    if(localStorage.getItem('thecomp')){
        $("#size").val(localStorage.thecomp);
    }



});

// modal window func
var btnAdd = document.getElementById('add');
btnAdd.addEventListener("click", addElement, false);

function addElement(){
	 
	if(document.getElementById("coupon-code").value === 'new price'){
        document.getElementById("coupon-code").value = '';
		var oldPrice = document.getElementById('oldPrice');
		oldPrice.style.cssText = 'color:red;text-decoration:line-through;';
		var NewPrice = Math.round(0.8 * 160);
    	var olList = document.getElementById('NewPrice');
    	var newListItem = document.createElement('span');
    	newListItem.innerText = NewPrice ;
    	olList.appendChild(newListItem);
	} else{
		console.log('Your coupon code is not valid');
	}
}




// header change color
$(window).scroll(function(){
    if ($(window).scrollTop()==0 && $( window ).width() > 767){$(".navbar-fixed-top").removeClass("header-active");}
    else{$(".navbar-fixed-top").addClass("header-active");}
});




// add  item to cart
 var olList = document.getElementById('CartItems');
    if(!localStorage.getItem("cart") ){
        var cart = [];
        localStorage.setItem('cart',JSON.stringify(cart));
        var storageCart = JSON.parse(localStorage.getItem("cart"));
    
    }else{
        var storageCart = JSON.parse(localStorage.getItem("cart"));
        var newListItem = document.createElement('span');
         newListItem.className = 'cartItem';
        newListItem.innerText = (storageCart.length) ;
        olList.appendChild(newListItem);
}




 
function localAddItem(){

    storageCart.push({});
    localStorage.setItem('cart',JSON.stringify(storageCart));
     var temp = document.getElementsByClassName('cartItem');
    if(temp.length > 0){
       $( ".cartItem" ).remove();
    }
   
    var newListItem = document.createElement('span');
    newListItem.className = 'cartItem';
    newListItem.innerText = (storageCart.length) ;
    olList.appendChild(newListItem);
}