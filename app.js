// your code here!

// function normalizeText(text) {
// 	var newText = text.toLowerCase();
// 	newText.split(/[ ,!.";:-]/).sort();
// 	return newText;
// 	//not feeling super confident about this split
// };

function wordCount(text) {
	return text.length;
};

function uniqueWordCount(text) {
 /*We start with a variable that stores the counter. Then we need
 to see if a particular item in the array is in the array. If it is not, 1 can
 be added to the counter*/
 	var result = 0;
 	for (var i = 0; i < text.length; i++) {
 		if (text[i] !== text[i+1] && text[i] !== text[i-1]) {
 			result += 1;
 		}
 	}
 	return result;
};

function averageWordLength(text) {
	var lengthResult = 0;
	text.forEach(function(item) {
		lengthResult += item.length;
		//create average and return it
	});
	return lengthResult/text.length;

};

$("button").click(function(e) {
	e.preventDefault();
	$(".hidden").show();
	var input = $(".js-input").val();
	input = input.toLowerCase().replace(/\n/g, " ").split(" ").sort(); 
	//.replace(/[,!.";:-]/g, "",/[^a-z]/g, " ").trim();
	// input = input.replace(/\s+/g, " ");
	
	// input.forEach(function(item) {
	// 	if (item === "") {
	// 		input.splice(item, 1);
	// 	}
	//});
		console.log(input);	
	// normalizeText(input);
	$(".js-count").html(wordCount(input));
	$(".js-unique").html(uniqueWordCount(input));
	$(".js-average").html(averageWordLength(input));
});

/*First, we need to return a string that is all lowercase and no special
characters. That string (or array?) will become the variable that is used as the
input for each of the rest of the functions. Then word count will just be that
word variable.length; and we'll return that value as a variable that can be
used later. Unique word count will require a counter that will add 1 ONLY if the
current item in the array !== any other item within the array. The 
averageWordLength function will require a counter that takes the length of each
item in the array and then divides that by the number of items in array.
Will splice return an array if I use it in normalize text??

Ground Control to Major Tom
Ground Control to Major Tom
Take your protein pills and put your helmet on
Ground Control to Major Tom (ten, nine, eight, seven, six)
Commencing countdown, engines on (five, four, three)
Check ignition and may God's love be with you (two, one, liftoff)*/
