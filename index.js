/*global $ APIKEY*/

 $(document).ready(function() {
  console.log("ready");
  
  $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/sources",
      data: {category:"technology", language:"en", country:"us", apiKey: APIKEY},
      success: function(data) {
          if(data.status === "ok"){
              console.log(data)
              for(var i=0; i < data.sources.length; i ++) {
                  var source = document.createElement("OPTION");
                  source.setAttribute("value", data.sources[i].id)
                  source.innerHTML= data.sources[i].name;
                  document.getElementById('selection').appendChild(source);
              }
          } 
      }
  })
      
      $('#source').submit(function(event) {
        event.preventDefault();
       alert(document.getElementById("selection").value)
      });
  })
//   .done(function( data ) {
//       console.log( data );
//       console.log( data ).status;
//   });

  
//     $("#getNews").on('click',function() {
    
//     $.ajaxSetup ({cache:false});
    
//     $.getJSON("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=", function(data) {
//   //$(".message").append(data[0].content + "<p>— " + data[0].title + "</p>")

//         $("#selection").html(data.articles.each.title&data.articles.each.url);
        
        
//     });
//     });
// });