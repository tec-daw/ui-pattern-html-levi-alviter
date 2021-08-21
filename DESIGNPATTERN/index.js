let D = document, w = window, scrollTop;
let header = D.getElementById('sticky-header'); 

w.addEventListener('scroll',e=>{
    scrollTop = D.documentElement.scrollTop;
    if(scrollTop > 1)
        header.classList.add('headershadow');
    else
        header.classList.remove('headershadow');
});
