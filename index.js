/* part 1 */
document.addEventListener("DOMContentLoaded", function (event) {
  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName('panel');
  for (var i = 0; i < acc.length; i++) {
    setClass(acc, 'active', 'add');
    setClass(panel, 'show', 'add');
    acc[i].onclick = function () {
      var setClasses = !this.classList.contains('active');
      // setClass(acc, 'active', 'remove');
      // setClass(panel, 'show', 'remove');
      // if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
      // }
    }
  }

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
});

/* part 2 */
jQuery(document).ready(function ($) {
  $('.difference_link').click(function (e) {
    e.preventDefault()
    if ($('.tooltip-info').hasClass('show')) {
      $('.tooltip-info').removeClass('show');
      $('.tooltip-info').addClass('hide');
    } else {
      $('.tooltip-info').removeClass('hide');
      $('.tooltip-info').addClass('show');
    }
  })
  $(document).click(function (e) {
    if (!$(e.target).closest('.difference_link').length) {
      if ($('.tooltip-info').hasClass('show')) {
        $('.tooltip-info').toggleClass('show hide');
      }
    }
  });
  jQuery('.tab_section .tab_menu li').click(function (e) {
    var serviceType = $(this).data('value');
    $("#isPremium").val(serviceType === 'Premium');
  })
  jQuery('#btnSubmit').click(function (e) {
    $("#checkoutLoader").show();
    e.preventDefault();
    jQuery('form#checkoutForm').submit();
  })
  jQuery('#btnSubmitForPrimum').click(function (e) {
    $("#checkoutLoaderForPrimum").show();
    e.preventDefault();
    jQuery('form#checkoutForm').submit();
  })
  jQuery('#packageSelectBox').change(function () {
    var CurrentPrice = (parseFloat(jQuery(this).find(':selected').data('price')) / 100).toFixed(2);
    jQuery('#btnPriceSpan').html(CurrentPrice);
  });
  jQuery('#packageSelectBoxForPrimum').change(function () {
    var CurrentPrice = (parseFloat(jQuery(this).find(':selected').data('price')) / 100).toFixed(2);
    jQuery('#btnPrimumPriceSpan').html(CurrentPrice);
  });
});