window.onload = function () {                     //实现tab效果
  var tab_list = document.querySelector("#tabs");
  var lis = tab_list.querySelectorAll("li");
  for (var i = 0; i < lis.length; i++) {
      lis[i].setAttribute("index", i);
      lis[i].onclick = function () {
          for (var i = 0; i < lis.length; i++) {
              lis[i].className = "";
          }
          this.className = "cur";
      }
  }
  focusInput('focusInput');
}

function focusInput(focusClass) {                 //点击搜索框边框变色
    var elements = document.getElementsByTagName("input");
    for (var i=0; i < elements.length; i++) {
      if (elements[i].type != "button" && elements[i].type != "submit" && elements[i].type != "reset") {
        elements[i].onfocus = function() { this.className = focusClass; }; //获取焦点时的样式
        elements[i].onblur = function() { this.className = 'input'; };  //正在状态下的样式
      }
    }
  }

function F_Open_dialog()    //弹出上传文件窗口
{
document.getElementById("btn_file").click();
}

