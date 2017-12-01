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
              console.log("options added");
          } 
      }
  })
      
      $('#source').submit(function(event) {
        event.preventDefault();
       // alert(document.getElementById("selection").value)
      
      
      $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines",
      data: { sources: document.getElementById('selection').value, apiKey: APIKEY},
      success: function(data2) {
          if(data2.status === "ok"){
              console.log(data2);
              for(var i=0; i < data2.articles.length; i++) {
                  var headline = document.createElement("H2");
                  // headline.setAttribute("value", data2.articles[i].title)
                  headline.innerHTML= data2.articles[i].title;
                  document.getElementById("source").appendChild(headline);
                  
                  var image = document.createElement("IMG");
                  image.setAttribute("src", data2.articles[i].urlToImage)
                  document.getElementById("source").appendChild(image);

                  // var a = document.createElement("A");
                  // a.innerHTML= data2.articles[i].url + data2.articles[i].description;
                  // document.getElementById("source").appendChild(a);
              }
          } 
      },
      // error: function(error) {
      //  console.log("failed");
      // }
  })
})
});
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