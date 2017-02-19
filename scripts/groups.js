function setGroups() {
	var elements = document.querySelectorAll('tfoot tbody td');
	for(var i = 0; i < elements.length; i++){
		elements[i].onmouseover = function (){
			var elemItem = document.getElementsByClassName(this.getAttribute('class'));
			var specialTd = document.getElementById('special');
			var tds = document.querySelectorAll('.one>tbody td');
			for(var i = 0; i < tds.length; i++){
				tds[i].style.opacity = '.3';
			}
			specialTd.style.opacity = '1';
			for(var i = 0; i < elemItem.length; i++){
				elemItem[i].style.opacity = '1';
			}
		}
		elements[i].onmouseleave = function(){
			var tds = document.querySelectorAll('.one>tbody td');
			for(var i = 0; i < tds.length; i++){
				tds[i].style.opacity = '1';
			}
		}
	}
}