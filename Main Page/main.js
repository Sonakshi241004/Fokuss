var lightButton = $('.light');
var darkButton = $('.dark');
var site = $('.text');

lightButton.on('click', turnLight);
darkButton.on('click', turnDark);

function turnLight() {
  site.removeClass('darkmode');
  site.addClass('text');
}

function turnDark() {
  site.removeClass('text');
  site.addClass('darkmode');
}