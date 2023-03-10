function focusInput(focusClass) {
    var elements = document.getElementsByClassName("inputSearch");
    for (var i=0; i < elements.length; i++) {
      if (elements[i].type != "button" && elements[i].type != "submit" && elements[i].type != "reset") {
        elements[i].onfocus = function() { this.className = focusClass; }; //获取焦点时的样式
        elements[i].onblur = function() { this.className = 'inputSearch'; };  //正在状态下的样式
      }
    }
  }
  window.onload = function () {
    focusInput('focusInput');
  }

  function F_Open_dialog()
{
document.getElementById("btn_file").click();
}