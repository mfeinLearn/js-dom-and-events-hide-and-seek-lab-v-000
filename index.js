function getFirstSelector(selector){
  //console.log(selector)
  return document.querySelector(selector);
}

function nestedTarget() {
  //document.getElementsByClassName('#nested .target')
  //querySelector
return document.getElementsByTagName('div')[4]
}

function increaseRankBy(n) {
// parseInt(document.getElementsByTagName('ul.ranked-list')[1].children[0].textContent) + n;
// parseInt(document.getElementsByTagName('ul')[0].children[0].textContent) + n;
    const lis = document
      .querySelectorAll('.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    //lis[i].innerHTML = (parseInt(lis[i].innerHTML) + 1).toString();
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }

}

function deepestChild() {

  const someship = document.getElementById('grand-node')
  return someship.getElementsByTagName('div')[3];


}
