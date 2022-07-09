

/************************** Menu Toggle */
// Toggle menu onClick

const body = document.querySelector('.body');
const header = document.querySelector('.header')
const headerContainer = document.querySelector('.header-container');
const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

const splashP = document.querySelector('.splash-head span');

//when menu icon is clicked toggle the 'active' class on these elements
hamburger.addEventListener('click', () => {
    body.classList.toggle('active');
    header.classList.toggle('active');
    headerContainer.classList.toggle('active');
    logo.classList.toggle('active');
    splashP.classList.toggle('active');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            body.classList.remove('active');
            header.classList.remove('active');
            headerContainer.classList.remove('active');
            logo.classList.remove('active');
            splashP.classList.remove('active');
        })
    }
    logo.addEventListener('click', () => {
            body.classList.remove('active');
            header.classList.remove('active');
            headerContainer.classList.remove('active');
            logo.classList.remove('active');
            splashP.classList.remove('active');
    });
});



/************************** Scroll to highlight menu option */
// Add the 'scroll-active' class to the menu nav links if they are in visible - onScroll


const section = document.querySelectorAll('section');
const menu = document.querySelectorAll('.nav-link');

window.onscroll = () => {
    section.forEach((i) => {
        const top = window.scrollY;
        const offset = i.offsetTop - 150;
        const height = i.offsetHeight;
        const id = i.getAttribute('id');

        if (top >= offset && top < offset + height) {
            menu.forEach((link) => {
                link.classList.remove('scroll-active');
                document.querySelector('.nav-link[href*=' + id + ']' ).classList.add('scroll-active');
            });
        }
    });
};


/************************** My Work selection */

const allBtn = document.getElementById('work-all-btn');
const websiteBtn = document.getElementById('work-website-btn');
const webDesignBtn = document.getElementById('work-web-design-btn');
const webAppBtn = document.getElementById('work-web-app-btn');

const project = document.querySelectorAll('.project');
const websiteProject = document.querySelectorAll('.project-website');
const webDesignProject = document.querySelectorAll('.project-web-design');
const webAppProject = document.querySelectorAll('.project-web-app');

allBtn.addEventListener('click', () => {
    if (allBtn.classList.contains('active')
        &&websiteBtn.classList.contains('active')
        &&(webDesignBtn.classList.contains('active'))
        &&(webAppBtn.classList.contains('active'))) {
            allBtn.classList.remove('active');
            websiteBtn.classList.remove('active');
            webDesignBtn.classList.remove('active');
            webAppBtn.classList.remove('active');
            websiteProject.forEach(x => x.classList.add('hide')); 
            webAppProject.forEach(x => x.classList.add('hide')); 
            webDesignProject.forEach(x => x.classList.add('hide')); 
        } else {
            allBtn.classList.add('active');
            websiteBtn.classList.add('active');
            webDesignBtn.classList.add('active');
            webAppBtn.classList.add('active');
            websiteProject.forEach(x => x.classList.remove('hide')); 
            webAppProject.forEach(x => x.classList.remove('hide')); 
            webDesignProject.forEach(x => x.classList.remove('hide')); 
        };
});

websiteBtn.addEventListener('click', () => {
    if (websiteBtn.classList.contains('active')) {
        websiteBtn.classList.remove('active');
        websiteProject.forEach(x => x.classList.add('hide')); 
    }   else {
        websiteBtn.classList.add('active');
        websiteProject.forEach(x => x.classList.remove('hide')); 
    };
    allBtn.classList.remove('active');
}); 

webDesignBtn.addEventListener('click', () => {
    if (webDesignBtn.classList.contains('active')) {
        webDesignBtn.classList.remove('active');
        webDesignProject.forEach(x => x.classList.add('hide')); 
    }   else {
        webDesignBtn.classList.add('active');
        webDesignProject.forEach(x => x.classList.remove('hide')); 
    };
    allBtn.classList.remove('active');
});

webAppBtn.addEventListener('click', () => {
    if (webAppBtn.classList.contains('active')) {
        webAppBtn.classList.remove('active');
        webAppProject.forEach(x => x.classList.add('hide')); 
    }   else {
        webAppBtn.classList.add('active');
        webAppProject.forEach(x => x.classList.remove('hide')); 
    };
    allBtn.classList.remove('active');
});

