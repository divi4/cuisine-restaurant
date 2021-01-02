const foodTab = document.querySelectorAll(".drop-btn");
const foodContent = document.querySelectorAll(".dropdown-content");

Array.from(foodTab).forEach(element => element.addEventListener("click",
function(e){
	updateClasses(e);  // e represents event (click)
}, false));

function updateClasses(click){
    Array.from(foodContent).forEach(element => {
    element.classList.add("hidden");
    });
    if(click.target.innerText === "Breakfast"){
    	document.querySelector(".breakfast-content").classList.remove("hidden");
    }
    else if(click.target.innerText === "Lunch"){
    	document.querySelector(".lunch-content").classList.remove("hidden");
    }
    else if(click.target.innerText === "Dinner"){
    	document.querySelector(".dinner-content").classList.remove("hidden");
    }
    else if(click.target.innerText === "Dessert"){
    	document.querySelector(".dessert-content").classList.remove("hidden");
    }
    else if(click.target.innerText === "Shake"){
    	document.querySelector(".shake-content").classList.remove("hidden");
    }
}
