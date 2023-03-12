function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// Random made up CUSTOM place
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				lat: 48.19062894453219,
				lng:15.62174454417402,
				name: "BG/BRG St.Pölten",
				street: "Josefstraße 84, 3100 St.Pölten",
				userData: 99
			}

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


