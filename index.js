/*global $*/

 $(document).ready(function() {
  console.log("ready");
    $("#getNews").on('click',function() {
    
    $.ajaxSetup ({cache:false});
    
    $.getJSON("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=", function(data) {
  //$(".message").append(data[0].content + "<p>— " + data[0].title + "</p>")

        $("#selection").html(data.articles.each.title&data.articles.each.url);
        
        
    });
    });
});