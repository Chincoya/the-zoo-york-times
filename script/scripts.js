function accordion(section){
  let accs = document.getElementsByClassName("news-subgroup");
  let titles = document.getElementsByClassName("section-title-btn");
  let acc = document.getElementById(section+"-subgroup");
  let title = document.getElementById(section);
  for(let i=0; i<accs.length; i++){
    if(accs[i].getAttribute("id")!=acc.getAttribute("id")){
      accs[i].style.display = "none";
      titles[i].style.color = "#000";
    }
  }
  swapDisp(acc, title);
}

function swapDisp(node, title){
  console.log(node.style.display);
  if(node.style.display == "none"){
    node.style.display = "grid";
    title.style.color = "#b3b3b3";
  }else{
    node.style.display = "none";
    title.style.color = "#000";
  }
}
