var pics_src = new Array("photo1.png","photo2.png","photo3.png");
var num = 0;
function go_forward(){
  if (num == 2) {
      num = 0;
  }
  else {
      num ++;
  }
  document.getElementById("mypic").src=pics_src[num];
}

function go_back(){
  if (num == 0) {
      num = 2;
  }
  else {
      num --;
  }
  document.getElementById("mypic").src=pics_src[num];
}