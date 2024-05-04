const main=document.querySelector("main")//para coger el elemento en este caso main de html tambien puede ser. const main=document.querySelector(main)
const can=document.createElement("img")// el createdElement es para crear un nuevo elemento

//agrega en este caso una imagen de un perro que todo lo llamamos (can)
can.id="perro"
can.src="https://i.pinimg.com/originals/e5/23/52/e523526c990e1fbab2b0fbdd6c8b57d4.jpg"//puede ser local o por url
can.alt="collie"
can.width="200"
can.title="perro"
can.remove

can.setAttribute("src", "https://wakyma.com/blog/wp-content/uploads/2016/10/perro-pastor-ovejero-australiano.jpg")
//can.src="https://wakyma.com/blog/wp-content/uploads/2016/10/perro-pastor-ovejero-australiano.jpg" con este pone la imagen como objeto

main.appendChild(can)//appendchild agrega a por ej en eeste caso el main, crearemos una imagen de un perro

//para eliminar desde jvs para html
const card=document.querySelector(".card")
console.log(card)
card.classList.remove("card-body")

//para llamar a 10 animales 
const main=document.querySelector("main")

for( let i =0; i<10; i++){
    main.innerHTML +=
    <div class="card" style="width: 18rem;">
            <img src="./img/Golden1.jpg" class="card-img-top" alt="Golden1">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

}

