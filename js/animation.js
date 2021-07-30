window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() {
        window.location.href = href
    }, 500)
}

if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    document.querySelector('body').style.opacity = 1
} else {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('document was not ready, place code here');
        document.querySelector('body').style.opacity = 1
    });
}