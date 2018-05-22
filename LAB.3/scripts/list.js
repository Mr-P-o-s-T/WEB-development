// JavaScript source code
var subList;

function changeGroup(ind) {
    var catalogue = document.getElementsByClassName('centerContent');
    catalogue[0].style.display = 'none';
    catalogue[1].style.display = 'block';

    subLists = document.getElementsByClassName('subList');
    for (var i = 0; i < subLists.length; i++) subLists[i].style.display = 'none';
    subLists[ind].style.display = 'block';
    subList = subLists[ind];

    var path = document.getElementById('path');
    var mainListItems = document.getElementsByClassName('mainListItem');
    path.innerHTML = '<a href="../index.html">Main</a> / <a href="individuals.html">For individuals</a> / ' + mainListItems[ind].innerHTML;
}

function changeClass(ind) {
    var catalogue = document.getElementsByClassName('centerContent');
    catalogue[0].style.display = 'block';
    catalogue[1].style.display = 'none';
    var path = document.getElementById('path');
    var mainListItems = document.getElementsByClassName('mainListItem');
    path.innerHTML = '<a href="../index.htm">Main</a> / <a href="individuals.html">For individuals</a> / <a href="#path">'
        + mainListItems[ind].innerHTML + '</a> / ' + subList.children[ind].firstChild.innerHTML;
}