function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

$(document).ready(function () {
  $('button').click(function () {
    var text = $('textarea').val();
    $('#result').text(b64_to_utf8(text));
    return false;
  });
});
