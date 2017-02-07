// print all the bookmarks when popup html file onload
var bmark_arr = [];
var a = 10;


document.addEventListener("DOMContentLoaded", function(){ chrome.bookmarks.getTree(huh);}, false);
// document.addEventListener("DOMContentLoaded", function(){ makeTable(); }, false);


function huh(bookmarks){
	// document.write("a:  " + a);
	// document.write(bmark_arr.length);
	// var title = $.parseJSON(bookmarks);
	$('html').height($('#div').height());
	var $div = $("<div style=\"overflow-x:auto;\"></div>");
	var $table = $("<table class=\"table table-responsive\"></table>");

	for(var i = 0; i < bmark_arr.length; ++i){
		var bmark = bmark_arr[i];
		// document.write(bmark.title + " ");
		var $line = $("<tr></tr>");
		$line.append($( "<td></td>" ).html( bmark.title ) );
		for(var j = 0; j < 6; ++j){
			if(i + 1 < bmark_arr.length){
				++i;
				var bmark2 = bmark_arr[i];
				// document.write(bmark2.title + " ");
				$line.append($( "<td></td>" ).html( bmark2.title ) );
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