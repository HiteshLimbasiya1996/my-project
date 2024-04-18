//This function is used to change the background color header wrap
function changeBg(){
    var ast-main-header-wrap=document.getElementById('ast-main-header-wrap');
    var scrollvalue=window.scrollY;
    if(scrollvalue<150){
        ast-main-header-wrap.classlist.remove('bgcolor');
    }
    else{
        ast-main-header-wrap.classlist.add('bgcolor');
    }
    window.addEventListener('scroll',changeBg);
}