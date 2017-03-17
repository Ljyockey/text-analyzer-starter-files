// your code here!

function normalizeText(text) {
	var newText = text.split().toLowerCase();
	return newText;
};

function wordCount(text) {
	return text.length();
};

function uniqueWordCount(text) {
//still need to do this
};

function averageWordLength(text) {
	var lengthResult = 0;
	text.forEach(function(item) {
		lengthResult += item.length();
		//create average and return it
	});

};

$("button").click(function() {
	$(".hidden").show();
	var input = $(".js-input").val();
	normalizeText(input);
	$(".js-count").html(wordCount(newText));
	$(".js-unique").html(uniqueWordCount(newText));
	$(".js-average").html(averageWordLength(newText));
});

/* First, we need to return a string that is all lowercase and no special
characters. That string (or array?) will become the variable that is used as the
input for each of the rest of the functions. Then word count will just be that
word variable.length - 1; and we'll return that value as a variable that can be
used later. Unique word count will require a counter that will add 1 ONLY if the
current item in the array !== any other item within the array. The 
averageWordLength function will require a counter that takes the length of each
item in the array and then divides that by the number of items in array.
Will splice return an array if I use it in normalize text??
