'use strict';



let timeoutID = null;
document.addEventListener('mousemove',(e)=>{

	if(timeoutID){
		clearTimeout(timeoutID);

	}

	timeoutID = setTimeout({}  =>{
		location.assign(`${location.origin}/pages/authorization/login.html`);
	}, 4000);


});







