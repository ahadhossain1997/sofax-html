
var e = document.getElementById("filt-monthly"),
    d = document.getElementById("filt-hourly"),
    t = document.getElementById("switcher"),
    m = document.getElementById("monthly"),
    y = document.getElementById("yearly");

e.addEventListener("click", function(){
  t.checked = false;
  e.classList.add("toggler--is-activee");
  d.classList.remove("toggler--is-activee");
  m.classList.remove("hide");
  y.classList.add("hide");
});

d.addEventListener("click", function(){
  t.checked = true;
  d.classList.add("toggler--is-activee");
  e.classList.remove("toggler--is-activee");
  m.classList.add("hide");
  y.classList.remove("hide");
});

t.addEventListener("click", function(){
  d.classList.toggle("toggler--is-activee");
  e.classList.toggle("toggler--is-activee");
  m.classList.toggle("hide");
  y.classList.toggle("hide");
})

