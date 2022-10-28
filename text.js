var ratio = 0.1;

var options = {
    root: null, //voir quand l'élément est dans notre screen,
    rootMargin: '0px',
    threshold: 0.1 //Ratio de 10% (cf ligne 11)
};

var handleIntersect = function(entre, observer){
    entre.forEach(function(elem){
        if(elem.intersectionRatio > ratio){         // Si l'élément apparait plus que le ratio (10%) dans la page
            elem.target.classList.add("affiche_on");
            observer.unobserve(elem.target);   //Stopper l'observation après le première affichage pour ne pas avoir l'anim tout le temps
        }
    });
};

var observer = new IntersectionObserver(handleIntersect, options);  //Observe quand notre element est visible ou non (avec nos options) et appel la fonction callback à chaque changement
document.querySelectorAll("[class*='affiche_off_']").forEach(function(AllElement){      //Definir quel element on observe ( [class*='affiche_off_'] prend tout les éléments avec affiche_off_)
    observer.observe(AllElement);
});