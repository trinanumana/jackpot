function nextImage(el) {
	if (el.src.match("images/cherry_slot.PNG")){
		el.src="images/lemon_slot.PNG";
	}
	else if (el.src.match("images/lemon_slot.PNG")) {
		el.src="images/orange_slot.PNG";
	}
	else if (el.src.match("images/orange_slot.PNG")) {
		el.src="images/cherry_slot.PNG";
	}
	else {
		//do nothing
	}
}

function checkPosition(){
	if (slot1.getAttribute('src') == "images/cherry_slot.PNG" && slot2.getAttribute('src') == "images/cherry_slot.PNG" && slot3.getAttribute('src') == "images/cherry_slot.PNG") {
		slot1.classList.add("opaque");
		slot2.classList.add("opaque");
		slot3.classList.add("opaque");
		document.getElementById("slot1").onclick = null;
		document.getElementById("slot2").onclick = null;
		document.getElementById("slot3").onclick = null;
		document.getElementById("you-win").play();		
	} else {
		// do nothing until all 3 pictures are configured properly
	}
}