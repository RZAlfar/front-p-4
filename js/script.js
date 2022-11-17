function col_1()
{
  document.getElementById("view").style.gridTemplateColumns=('1fr');
  document.getElementById("btn_1").classList.add('active');
  document.getElementById("btn_2").classList.remove("active");
  document.getElementById("btn_3").classList.remove("active");
  
};

function col_2()
{
  document.getElementById("view").style.gridTemplateColumns=('repeat(2,1fr)');
  document.getElementById("btn_2").classList.add("active");
  document.getElementById("btn_1").classList.remove("active");
  document.getElementById("btn_3").classList.remove("active");
};

function col_3()
{
  document.getElementById("view").style.gridTemplateColumns=('repeat(3,1fr)');
  document.getElementById("btn_3").classList.add("active");
  document.getElementById("btn_1").classList.remove("active");
  document.getElementById("btn_2").classList.remove("active");
};

window.addEventListener("scroll",() =>{
if(window.pageYOffset>100){
  document.getElementById("scroll").style.opacity=("1");
}else{
  document.getElementById("scroll").style.opacity=("0");
}
}

)



window.addEventListener("scroll",() =>{
if(window.pageYOffset>100){
  document.getElementById("scroll").style.opacity=("1");
}else{
  document.getElementById("scroll").style.opacity=("0");
}
}

)

function grid(){
document.querySelector("shop side view-toggle span span-inner").style.width=("20px");
  document.getElementById("grid_btn").classList.add("active");
  document.getElementById("list_btn").classList.remove("active");
  document.querySelector("product-view list-view").style.display=('none');
  document.querySelector("product-view grid-view").style.display = "flex";
};

function list(){
document.querySelector("shop side view-toggle span span-inner").style.width=("50px");
  document.getElementById("grid_btn").classList.remove("active");
  document.getElementById("list_btn").classList.add("active");
    document.querySelector("product-view grid-view").style.display = "none";
    document.querySelector("product-view list-view").style.display = "flex";
};
var x = true;
function share(){
  
  if (x == 1) {
    document.querySelector("li-flex").style.opacity = "1";
    x = false;
  } else{
    document.querySelector("li-flex").style.opacity = "0";
    x = true;
  }
  
}

