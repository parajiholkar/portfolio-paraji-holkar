const tabs = document.querySelectorAll('.tab-btn');
const tab_content = document.querySelectorAll('.content');
const sections = document.querySelectorAll('section');
const navbar_links = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + 'px';
        line.style.left = e.target.offsetLeft + 'px';

        tab_content.forEach(content=>{content.classList.remove('active')});
        tab_content[index].classList.add('active');

    });

});

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navbar_links.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

