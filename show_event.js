function showEvent() {
  var $div = $('<div>mousedown!</div>');
  $div.css({
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '20px',
    padding: '20px',
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: '99999999'
  });
  $div.appendTo(document.body);
  $div.fadeOut(400, function() { $div.remove() });
};


document.addEventListener('mousedown',  showEvent, { capture: true });

