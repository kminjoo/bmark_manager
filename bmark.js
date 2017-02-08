var bmark_arr = [];
var a = 10;

var images = new Array()

images[0] = 'beach.jpg'
images[1] = 'moon.jpg'

document.addEventListener("DOMContentLoaded", function(){ chrome.bookmarks.getTree(huh);}, false);
// document.addEventListener("DOMContentLoaded", function(){ makeTable(); }, false);


function huh(bookmarks){
	$('html').height($('#div').height());
	var $div = $("<div style=\"overflow-x:auto;\"></div>");
	var $table = $("<table class=\"table\"></table>");

	var images = new Array()
	images[0] = 'beach.jpg'
	images[1] = 'moon.jpg'

	var j = 0
	var p = images.length;
	var preBuffer = new Array()
	for(i = 0; i <p; ++i){
		preBuffer[i] = new Image()
		preBuffer[i].src = images[i]
	}
	var which_image = Math.round(Math.random()*(p-1));


	for(var i = 0; i < bmark_arr.length; ++i){
		var bmark = bmark_arr[i];
		// document.write(bmark.title + " ");
		var $line = $("<tr></tr>");
		$line.append($( "<td style=\"width:50px; height:50px; color:white; vertical-align:middle;\"></td>" ).html( bmark.title ) );
		for(var j = 0; j < 6; ++j){
			if(i + 1 < bmark_arr.length){
				++i;
				var bmark2 = bmark_arr[i];
				// document.write(bmark2.title + " ");
				console.log(images[which_image])
				$line.append($( "<td style=\"width:50px; height:50px; color:white; vertical-align:middle;\"></td>").html( "<p style=\"background-color:rgba(0, 0, 0, .5); padding: 5px;\">"+bmark2.title+"</p>" ) );
			}else{
				break;
			}
		}
		$table.append($line);
	}
	$table.appendTo($div);
	$div.appendTo(document.body);
}

function start(){
	chrome.bookmarks.getTree(huh);
	makeTable();
}

chrome.bookmarks.getTree(function(bookmarks) {
  printBookmarks(bookmarks);
});

function printBookmarks(bookmarks) {
	// /**/document.write("hi");
	 a = 20;
	// makeTable();
  	bookmarks.forEach(function(bookmark) {
    if (bookmark.children){
		bmark_arr.push(bookmark); //push the folder titles to an array	
    	console.log(bookmark.title);
      	printBookmarks(bookmark.children);
  	}
  });
}

function makeTable(){
	// document.write(bmark_arr.length);



	
}