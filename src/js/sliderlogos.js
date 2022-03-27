var tituloempresa = document.querySelector(".tituloempresa")
var subtituloempresa = document.querySelector(".subtiloagencia")
var textagencia = document.querySelector(".textagencia")
var textagencia2 = document.querySelector(".textagencia2")
var imgagencia = document.querySelector(".logoagencia")
var trocaflex = document.querySelector(".btnlogos")
var iconbtn1 = document.querySelector(".iconbtn1")
var iconbtn2 = document.querySelector(".iconbtn2")
var iconbtn3 = document.querySelector(".iconbtn3")
var iconbtn4 = document.querySelector(".iconbtn4")
var trocalink = document.querySelector(".btn .trocalink")

var trocatitulobtn = document.querySelector(".btnlogos1")
var trocatitulobtn2 = document.querySelector(".btnlogos2")
var trocatitulobtn3 = document.querySelector(".btnlogos3")
var trocatitulobtn4 = document.querySelector(".btnlogos4")
var btnleft= document.querySelector(".left")
var btnright= document.querySelector(".right")




const max=4
var min=1
var slideft=min

btnright.addEventListener("click", function proximo(){
  slideft++;
  
  console.log(slideft)
  if(slideft>max){
    slideft=1
  }
   if (slideft === 1) {
    tituloempresa.textContent="ARQUÉ.LAB",
    subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE",
    textagencia.textContent="A Arqué.Lab é antes de mais nada um laboratório de ideias, nos empenhamos em sempre buscar soluções criativas para as estratégias de comunicação de nossos clientes. Nosso objetivo é ser vanguarda quando o assunto for comunicação. ",
    textagencia2.textContent="O que nos move é o desafio, então qual o objetivo da sua marca? Temos a certeza que podemos ser o caminho para este objetivo através de nossas estratégias de comunicação criativa."
    imgagencia.src="./src/img/astronautalab.png";
    iconbtn1.src="./src/img/iconlabblue.png";
    iconbtn2.src="./src/img/iconbrickswhite.png";
    iconbtn3.src="./src/img/icoonfilmeswhite.png";
    iconbtn4.src="./src/img/iconrpwhite.png";
    trocalink.textContent="www.arquelab.com.br";
      
  } else if(slideft === 2){
    tituloempresa.textContent="ARQUÉ.BRICKS",
    subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE";
    textagencia.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
    textagencia2.textContent="unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    imgagencia.src="./src/img/astronautabricks.png";
    iconbtn1.src="./src/img/iconlabwhite.png";
    iconbtn2.src="./src/img/iconbricksblue.png";
    iconbtn3.src="./src/img/icoonfilmeswhite.png";
    iconbtn4.src="./src/img/iconrpwhite.png";
    trocalink.textContent="www.arquebricks.com.br";

  } else if(slideft === 3){

    tituloempresa.textContent="ARQUÉ.FILMES",
    subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE";
    textagencia.textContent="There are many variations of passages of Lorem Ipsum available. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.";
    textagencia2.textContent=" It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    imgagencia.src="./src/img/astronautafilmes.png";
    iconbtn1.src="./src/img/iconlabwhite.png";
    iconbtn2.src="./src/img/iconbrickswhite.png";
    iconbtn3.src="./src/img/icoonfilmesblue.png";
    iconbtn4.src="./src/img/iconrpwhite.png";
    trocalink.textContent="www.arquefilmes.com.br"
    console.log(trocalink)

  } else if (slideft === 4){
  tituloempresa.textContent="ARQUÉ.RP",
        subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE";
        textagencia.textContent="It is a long established fact that a readeed fact that a readeed fact that a readeed fact that a reader will be distracted by the readable content of a page when looking at its layout.d to using 'Content here, content here', making it look like readable English. Many desktop pu"
        textagencia2.textContent=" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposeblishihave evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        imgagencia.src="./src/img/astronautaembreve.png";
        iconbtn1.src="./src/img/iconlabwhite.png";
        iconbtn2.src="./src/img/iconbrickswhite.png";
        iconbtn3.src="./src/img/icoonfilmeswhite.png";
        iconbtn4.src="./src/img/iconrpblue.png";
        trocalink.textContent="www.arquerp.com.br"
        }
   

})


btnleft.addEventListener("click", function anterior(){
    slideft++;
    
    
    if(slideft>max){
      slideft=1
    }
     if (slideft === 1) {
      tituloempresa.textContent="ARQUÉ.LAB",
      subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE",
      textagencia.textContent="A Arqué.Lab é antes de mais nada um laboratório de ideias, nos empenhamos em sempre buscar soluções criativas para as estratégias de comunicação de nossos clientes. Nosso objetivo é ser vanguarda quando o assunto for comunicação. ",
      textagencia2.textContent="O que nos move é o desafio, então qual o objetivo da sua marca? Temos a certeza que podemos ser o caminho para este objetivo através de nossas estratégias de comunicação criativa."
      imgagencia.src="./src/img/astronautalab.png";
      iconbtn1.src="./src/img/iconlabblue.png";
      iconbtn2.src="./src/img/iconbrickswhite.png";
      iconbtn3.src="./src/img/icoonfilmeswhite.png";
      iconbtn4.src="./src/img/iconrpwhite.png";
      trocalink.textContent="www.arquelab.com.br"
        
    } else if(slideft === 2){
      tituloempresa.textContent="ARQUÉ.BRICKS",
      subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE";
      textagencia.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
      textagencia2.textContent="unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      imgagencia.src="./src/img/astronautabricks.png";
      iconbtn1.src="./src/img/iconlabwhite.png";
      iconbtn2.src="./src/img/iconbricksblue.png";
      iconbtn3.src="./src/img/icoonfilmeswhite.png";
      iconbtn4.src="./src/img/iconrpwhite.png";
      trocalink.textContent="www.arquebricks.com.br";
    } else if(slideft === 3){
  
      tituloempresa.textContent="ARQUÉ.FILMES",
      subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE";
      textagencia.textContent="There are many variations of passages of Lorem Ipsum available. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.";
      textagencia2.textContent=" It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
      imgagencia.src="./src/img/astronautafilmes.png";
      iconbtn1.src="./src/img/iconlabwhite.png";
      iconbtn2.src="./src/img/iconbrickswhite.png";
      iconbtn3.src="./src/img/icoonfilmesblue.png";
      iconbtn4.src="./src/img/iconrpwhite.png";
      trocalink.textContent="www.arquefilmes.com.br"
  
    } else if (slideft === 4){
    tituloempresa.textContent="ARQUÉ.RP",
          subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE";
          textagencia.textContent="It is a long established fact that a readeed fact that a readeed fact that a readeed fact that a reader will be distracted by the readable content of a page when looking at its layout.d to using 'Content here, content here', making it look like readable English. Many desktop pu"
          textagencia2.textContent=" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposeblishihave evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
          imgagencia.src="./src/img/astronautaembreve.png";
          iconbtn1.src="./src/img/iconlabwhite.png";
          iconbtn2.src="./src/img/iconbrickswhite.png";
          iconbtn3.src="./src/img/icoonfilmeswhite.png";
          iconbtn4.src="./src/img/iconrpblue.png";
          trocalink.textContent="www.arquerp.com.br"
          }
  })
    
    


trocatitulobtn.addEventListener("click",function versionone(){
    tituloempresa.textContent="ARQUÉ.LAB",
    subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE",
    textagencia.textContent="A Arqué.Lab é antes de mais nada um laboratório de ideias, nos empenhamos em sempre buscar soluções criativas para as estratégias de comunicação de nossos clientes. Nosso objetivo é ser vanguarda quando o assunto for comunicação. ",
    textagencia2.textContent="O que nos move é o desafio, então qual o objetivo da sua marca? Temos a certeza que podemos ser o caminho para este objetivo através de nossas estratégias de comunicação criativa."
    imgagencia.src="./src/img/astronautalab.png";
    iconbtn1.src="./src/img/iconlabblue.png";
    iconbtn2.src="./src/img/iconbrickswhite.png";
    iconbtn3.src="./src/img/icoonfilmeswhite.png";
    iconbtn4.src="./src/img/iconrpwhite.png";
    trocalink.textContent="www.arquelab.com.br"

})
trocatitulobtn2.addEventListener("click",function versiontwo(){
    tituloempresa.textContent="ARQUÉ.BRICKS",
    subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICEL";
    textagencia.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
    textagencia2.textContent="unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    imgagencia.src="./src/img/astronautabricks.png";
    iconbtn1.src="./src/img/iconlabwhite.png";
    iconbtn2.src="./src/img/iconbricksblue.png";
    iconbtn3.src="./src/img/icoonfilmeswhite.png";
    iconbtn4.src="./src/img/iconrpwhite.png";
    trocalink.textContent="www.arquebricks.com.br";
})
trocatitulobtn3.addEventListener("click",function versiontree(){
    tituloempresa.textContent="ARQUÉ.FILMES",
    subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE";
    textagencia.textContent="There are many variations of passages of Lorem Ipsum available. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.";
    textagencia2.textContent=" It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    imgagencia.src="./src/img/astronautafilmes.png";
    iconbtn1.src="./src/img/iconlabwhite.png";
    iconbtn2.src="./src/img/iconbrickswhite.png";
    iconbtn3.src="./src/img/icoonfilmesblue.png";
    iconbtn4.src="./src/img/iconrpwhite.png";
    trocalink.textContent="www.arquefilmes.com.br"
})
trocatitulobtn4.addEventListener("click",function versionfor(){
    tituloempresa.textContent="ARQUÉ.RP",
    subtituloempresa.textContent="AGÊNCIA DE PUBLICIDADE E MARKETING FULL SERVICE";
    textagencia.textContent="It is a long established fact that a readeed fact that a readeed fact that a readeed fact that a reader will be distracted by the readable content of a page when looking at its layout.d to using 'Content here, content here', making it look like readable English. Many desktop pu"
    textagencia2.textContent=" The point of using Lorem Ipsum is that ed fact that a readeed fact that a readeed fact that a readeed fact that a readeit has a more-or-less normal distribution of letters, as opposeblishihave evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
    imgagencia.src="./src/img/astronautaembreve.png";
    iconbtn1.src="./src/img/iconlabwhite.png";
    iconbtn2.src="./src/img/iconbrickswhite.png";
    iconbtn3.src="./src/img/icoonfilmeswhite.png";
    iconbtn4.src="./src/img/iconrpblue.png";
    trocalink.textContent="www.arquerp.com.br"
})


btnright.addEventListener("click", function(){
  if(slideft < 1){
  trocaflex.style.flexDirection="row-reverse"
}
 if (slideft > 2){
  trocaflex.style.flexDirection="row"
  console.log("trocou") 
}})
btnleft.addEventListener("click", function(){
  if(slideft < 3){
  trocaflex.style.flexDirection="row-reverse"
}
})
