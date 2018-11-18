  var buttons = document.querySelectorAll('#container .button_hide');

    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];

      button.onclick = function() {
        var elem = this.parentNode;
        elem.style.display = "none";
      };
    }