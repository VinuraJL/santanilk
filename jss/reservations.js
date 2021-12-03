btnres.addEventListner("click",addtores);
btnclear.addEventListner("click",clearcurrentres);
btnreserve.addEventListner("click",confirmation);
btnaddtofav.addEventListner("click",addtofav);

var t=0;
var p=0;
function addtores(){
    let guests=parseInt(txtguest.value);
    let days=parseInt(txtdays.value);

    if(document.getElementById('superior').checked){
        var x- "superior"
        var roomcost=25000;

    }else if(document.getElementById('deluxe').checked){
        var x- "Deluxe Room"
        var roomcost= 26000;

    }else if(document.getElementById('juniorSuite').checked){
        var x-  "Junior Suite Room";
        var roomcost=35000;

    }else if(document.getElementById('presidentialSuite').checked){
        var x- "Presidential Suite Room";
        var roomcost= 40000;

    }
    if(document.getElementById('bb').checked){
        var y= "Breakfast and Bed"
        var mealcost- 1500;

    }else if (document.getElementById('hb').checked){
        var y= "Half Board";
        var mealcost- 3500;
    
    }else if(document.getElementById('fb').checked){
        var y="Full Board";
        var mealcost- 5000;

    }
    var total=(roomcost+mealcost)*days;

    t=t+total;
    p+=1;
    txtres.innerHTML+=x+"/" +y+"\n" + " Room Charges            LKR"+roomcost+"*"+days+"\n"+"Service/Meal Charge and Tax    LKR"+mealcost "*"+ days +"\n" + "Total Charge for room"+rn+"   
    txtrescost.innerHTML="Total Charge          LKR"+t;
    clearform();
}

function clearform(){
    txtguest.value=null;
    txtdays.value=null;
}

function clearcurrentres(){
    txtres.innerHTML=null;
    txtrescost.innerHTML=null;
}

function addtofav(){
    var userPreferences:
    if (confirm("Add to favorites")==true) {
        userPreferences="Added to favorites";
        window.localStorage.setItem("Fvaorites",txtres);

        
    }else{
        userPreferences="Not added to favorites";
    }
    txtfinal.value=null;
    alert(userPreferences)
}

function confirmation(){
    let n=txtname.value;
    alert("Reservation has been confirmed");
    txtfinal.innerText=txtres.value;
    clearcurrentres();
}


