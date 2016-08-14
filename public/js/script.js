$(function(){
  $('#butt').on('click',function(e){
    var original_text = $('#input_text').val()
    original_text = original_text.replace(' ','+')
    var url = "http://api.funtranslations.com/translate/dothraki.json?api_key="+API_KEY+"&text="+original_text
    console.log('requesting: '+url)
    $.ajax({
      url:url,
      method:"GET",
      success:function(data){
        var translated = data.contents.translated
        var text = data.contents.text

        //insert into database as string

        appendToDom(translated)




        // debugger
      }
    })
  })

  counter: 0;


  var appendToDom = function(text){
    $('#past_searches').empty();
    $('#past_searches').append('<h1>'+text+'</h1>')


  };




//CREATE/POST
// $('#butt2').on('click',function(e){
//     var original_text = $('#input_text').val()
//     original_text = original_text.replace(' ','+')
//     var url = "http://api.funtranslations.com/translate/dothraki.json?api_key="+API_KEY+"&text="+original_text
//     console.log('requesting: '+url)



// $.ajax({
//     url:url,
//     dataType: 'json',
//     type: "POST",
//     data: JSON.stringify( { "original_text": $('#input_text').val(), "original_text": $('#last-name').val() } ),
//     success: function()
//     }
// });


    });






// setTimeout(function() {
//         appendToDom.remove();
//     }, 1000);


