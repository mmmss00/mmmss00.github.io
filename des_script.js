$(function() {
  $('#haneda_tag').click(function() {
    $('#haneda_tag').css('background-color','rgba(235,134,206,1)')
    $('#narita_tag').css('background-color','rgba(235,134,206,0.5)')
    $('.airport_list li').css('opacity','1');
    $('.li_narita').css('opacity','0.3');
  });

  $('#narita_tag').click(function() {
    $('#narita_tag').css('background-color','rgba(235,134,206,1)')
    $('#haneda_tag').css('background-color','rgba(235,134,206,0.5)')
    $('.airport_list li').css('opacity','0.3');
    $('.li_narita').css('opacity','1');
  });

});
