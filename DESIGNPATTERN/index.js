let D = document, w = window, scrollTop;
let header = D.getElementById('header'); 

w.addEventListener('scroll',e=>{
    scrollTop = D.documentElement.scrollTop;
    if(scrollTop > 1)
        header.classList.add('headershadow');
    else
        header.classList.remove('headershadow');
});
