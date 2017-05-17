var leftIn=document.getElementById('left-in'),
	rightIn=document.getElementById('right-in'),
	leftOut=document.getElementById('left-out'),
	rightOut=document.getElementById('right-out'),
	text=document.getElementById('text'),
	box=document.getElementById('box');
window.onload=function(){
	leftIn.onclick=insertNum('left');
	rightIn.onclick=insertNum('right');
	leftOut.onclick=deleteNum('left');
	rightOut.onclick=deleteNum('left');
	
}
function insertNum(direction){
	alert(text.value);
}	
function deleteNum(direction){
	alert(text.innerHTML);
}










