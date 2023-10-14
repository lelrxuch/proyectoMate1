//agregar código para su función
function math1 (){

}
function math2 (){
    
}
function math3 (){
    
}
function math4 (){
    
}
function math5 (){
    
}

function changeContent(sectionId) {
    const sections = document.querySelectorAll('.page-content');
    sections.forEach((section) => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    switch (sectionId){
        case "section1":
            math1();
            break;
        case "section2":
            math2();
            break;
        case "section3":
            math3();
            break;
        case "section4":
            math4();
            break;
        case "section5":
            math5();
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navigationLinks = document.querySelectorAll('.mdl-navigation__link');
    navigationLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const sectionId = e.target.getAttribute('href').substring(1);
            changeContent(sectionId);
        });
    });

    // Mostrar la primera sección por defecto
    changeContent('section1');
});


