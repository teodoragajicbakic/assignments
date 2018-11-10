$(document).ready(function() {
	//this will set the total calories to 0 on the page load

	//Cookies.set("Test Key", "Test Value");
	//alert("Hey test value is "+Cookies.get("Test Key"));


	//Cookies.set('total_calories','0');
	//alert("I set total calories to "+Cookies.get('total_calories'));

    $(".add").click(function(){
        //alert("hey you hit"+this.id);
        var calories = 0;

        //lookup the calories based on which button was hit
        if(this.id=='choc'){
        	calories = 400
        }else{
        	if(this.id=='lemon'){
        		calories = 250
        	}else{
        		calories = 300
        	}
        }
        //alert("I think this is"+calories)

        //let's get the quantity setting based on which button the user hit
        quantity_of_interest_name = this.id+"_quantity";
        quantity_of_interest = $('#' + quantity_of_interest_name).val();

        //let's fetch the cookie that holds total calories
        var total_calories = parseInt(Cookies.get('total_calories'));

        //increment total calories based on teh button that was clicked and the calories and quantity of that cookie
		Cookies.set('total_calories', total_calories + calories * quantity_of_interest);

		//redisplay the total calories
		alert("Now the total is: "+Cookies.get('total_calories'));
    }); 

});