function toggleDropdown(e) {
  e.preventDefault();
  const _d = $('.megamenu.dropdown'),
  _m = $('.dropdown-menu');
  setTimeout(function () {
    var shouldShow = e.type === "mouseover" || $(".dropdown-menu:hover").length > 0;
    if(e.type === "click"){shouldShow = !_m.hasClass("show");}
    _m.toggleClass('show', shouldShow);
    _d.toggleClass('show', shouldShow);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldShow);
  }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
  .on('mouseenter mouseleave', '.dropdown, .dropdown-menu', toggleDropdown)
  .on('click', '#megamenu', toggleDropdown);
