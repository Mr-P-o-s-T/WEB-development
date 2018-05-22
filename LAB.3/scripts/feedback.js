function feedbackProcessing() {
    var e = document.getElementsByClassName('feedbackBackground');
    if (e[0].style.display == 'block') {
        e[0].style.display = 'none';
        e = document.getElementsByClassName('feedbackScreen')
        e[0].style.display = 'none';
    }
    else {
        e[0].style.display = 'block';
        e = document.getElementsByClassName('feedbackScreen')
        e[0].style.display = 'flex';
    }
}
