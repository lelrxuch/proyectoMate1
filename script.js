//agregar código para su función
function math1 (){

}
function math2 (){
       form = document.querySelector('form');
  const result = document.querySelector('#result');
  const clearButton = document.querySelector('#clearButton');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const set1 = new Set(form.querySelector('#set1').value.split(', '));
    const set2 = new Set(form.querySelector('#set2').value.split(', '));
    const union = new Set([...set1, ...set2]);
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    result.innerHTML = `Unión: ${Array.from(union).join(', ')}<br>Intersección: ${Array.from(intersection).join(', ')}`;

    // Borrar elementos de los circulos
    const vennUnion = document.querySelector('#venn-union');
    const vennIntersection = document.querySelector('#venn-intersection');

    vennUnion.textContent = Array.from(union).join(', ');
    vennIntersection.textContent = Array.from(intersection).join(', ');
  });

  clearButton.addEventListener('click', () => {
    result.innerHTML = ''; // Borra el contenido de #result

    // Restaurar el contenido de los círculos del diagrama de Venn
    const vennUnion = document.querySelector('#venn-union');
    const vennIntersection = document.querySelector('#venn-intersection');

    vennUnion.textContent = '';
    vennIntersection.textContent = '';
  });
    
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


