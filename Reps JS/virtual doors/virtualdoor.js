function doorGame(door) {
	if (door==1) {
		//they chose door 1
		alert("You opened the Door 1 and you've got a cake");
	} else {
		//they did not chose door 1
		if (door==2) {
			alert("You opened the Door 2 and you've got the beer");
			//they chose door 2 ]
		} else {
			//
			if (door==3) {
				alert("You opened the Door 3 and you won a new car");
			} else {
				alert("This is not a valid option");

			}
		}
	}
}


doorGame(1);
doorGame(2);
doorGame(3);
doorGame(4);



