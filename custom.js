$('.code-head').click(function () {
  $('.code-input').slideToggle(400);
  $(this).toggleClass('show');
});

$('.tab_menu ul li').click(function () {
  var index = $(this).index(); $(this).addClass('active');
  $(this).siblings().removeClass('active');
  $('.tab_details').eq(index).show();
  $('.tab_details').eq(index).siblings().hide();
  return false;
});