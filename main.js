var ryby = document.querySelectorAll("img");



for (let i = 0; i < ryby.length; i++) {
  ryby[i].addEventListener("click", function() {
var texty = document.querySelectorAll("p");
    texty[i].classList.toggle("visible")
  })
}
var navbar = document.querySelector(".phonenav");
  navbar.style.display = "none"
var nav = document.getElementById("navbaricon");
nav.addEventListener("click", function(){

if(navbar.style.display === "none") {
  navbar.style.display = "flex"
}
else if (navbar.style.display === "flex") {
  navbar.style.display = "none"
}
})
window.addEventListener("resize", function() {
if (window.matchMedia("(min-width: 1001px)").matches) {
  navbar.style.display = "none"
}
});

var anone = document.querySelector('input[name="anone"]:checked'.value)



//Javascript pro Quiz
var start = document.querySelector("#start");
var next = document.querySelector("#next");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var otazka = document.querySelector("#otazka");
var nextbutt = document.querySelector("#nextbutt")
var popup1 = document.querySelector("#popup1")
var popup2 = document.querySelector("#popup2")
var popup3 = document.querySelector("#popup3")


var started = function ()  { //start celého quizu, funkce, při prvním kliku na start

btn1.classList.remove("displaynone"); //zobrazení 2 tlačítek pro první otázku
btn2.classList.remove("displaynone");
document.querySelector("#celkovevyhodnoceni").style.display = "none" //Vyhodnocení se nesmí zobrazovat
otazka.classList.remove("displaynone"); //Zobrazíme otázku
start.classList.add("displaynone");//Controls nejsou potřeba
next.classList.add("displaynone");
  document.querySelector("#quickquiz").textContent = "Rychlokvíz"; //Nadpis, měníme jej při vyhodnocení

}
var skorecko = 0; // proměnná skóre pro vyhodnocení, začíná na nule
var counter = 1 // Počítá, kolikátá otázka je na řadě
start.addEventListener("click", function () {started()}, {once : true}); // Zobrazení otázky a odpovědí při zmáčknutí tlačítka START, tlačítko vypínáme po 1 stisknutí
var game = function (correct) { //definování funkce game, která spouští celou hru

var otazky = ["Je karas vyšší než kapr?", "Kolik má žralok zubů?", "Kolik kilogramů vážil největší ulovený sumec v ČR?", "Kolik kilogramů vážil kapr, který byl chycen v Maďarsku a je považován za světový rekord?"];//otazky testu
otazka.textContent = otazky[0] //první Otázka
document.querySelector("#celkovevyhodnoceni").style.display = "none" //Vyhodnocení zatím není potřeba
skorecko = 0; // Skóre je vynulováno
counter = 1; //Proměnná sloužící pro sledování pořadí otázek


var answers = [btn1, btn2, btn3, btn4]; // odpovědi v quizu, tlačítka
var correct1 = answers[correct]; // 1 správná odpověď, u první otázky určená funkcí - 0
for(let i = 0; i < answers.length; i++) { // Hráč zvolí odpověď, ať už je jakákoliv
answers[i].addEventListener("click", function(){
  next.classList.remove("displaynone")//Zobrazujeme tlačítko NEXT, odpověď byla vybrána
this.style.border = "7px solid black" // Vybraná odpověď dostává hranici, aby bylo jasné, kterou si hráč vybral
this.style.boxShadow = "none" // Protože má hranici, stín vypadá blbě, vypínáme jej
  popup1.classList.remove("displaynone"); //Zobrazujeme nápisy, hodnotící hráčův úspěch :)
  popup2.classList.remove("displaynone");
  popup3.classList.remove("displaynone");
  nextbutt.classList.add("border"); // Tlačítko NEXT dostává hranici, aby bylo jasněji vídět
  if(this == correct1) { // Jestli uživatel vybral správnou odpověď
skorecko++ //Zvýšíme skóre o 1
popup1.textContent ="Super!" //pochvaly na nápisech
popup2.textContent ="Správně!"
popup3.textContent ="Výtečně!"


    correct1.style.backgroundColor = "#34bf24"; //změna vítězné odpovědi a pozadí do krásné zelené
    document.body.style.background ="lightgreen";
    btn1.classList.add("disabled") //vypnutí tlačítek po vybrání odpovědi
    btn2.classList.add("disabled")
    btn3.classList.add("disabled")
    btn4.classList.add("disabled");
  nextbutt.style.backgroundColor ="white"; // tlačítko NEXT má bílé pozadí, mohlo být definováno v CSS
    }

  else { //pokud zvolil špatnou odpověď
    for (var a = 0; a < answers.length; a++) {
      answers[a].style.backgroundColor ="#fc0000"; //červené pozadí všech špatných možností
      correct1.style.backgroundColor ="#34bf24"; //vítězná odpověď je stále zelená
      document.body.style.background ="#ff6666"; // pozadí je červené
      answers[a].classList.add("disabled"); //vypnutí tlačítek po vybrání odpovědi
      nextbutt.style.backgroundColor ="white"; // tlačítko NEXT má bílé pozadí, mohlo být definováno v CSS
      popup1.textContent ="Špatně!" //Hodnocení na nápisech
      popup3.textContent ="Snad to příště vyjde!"
      popup2.textContent ="Bohužel!"
    }}
  })

}



nextbutt.addEventListener("click", function(){ // Při zmáčknutí tlačítka NEXT

var body = document.querySelector("body"); // Označujeme celé BODY, abychom s ním mohli pracovat
body.removeAttribute("style") // odebíráme všechny styly, poněvadž background je složitě definovaný
body.classList.add("background"); // Vracíme původní modrý lineární gradient
popup1.classList.add("displaynone"); // Vypínáme popupy
popup2.classList.add("displaynone");
popup3.classList.add("displaynone");
for (var i = 0; i < answers.length; i++) {
  answers[i].style.backgroundColor = "rgb(50, 190 , 230)"; //tlačítkům vracíme původní MODROU barvu
  answers[i].style.border = "none" //Chci zrušit hranici pouze označenému, ale vzhledem k tomu, že ostatní hranici nemají, nesejde na tom
  answers[i].style.boxShadow = "9px 9px 14px 2px rgba(0,0,0,0.85)"; //Vracím odpovědím jejich stín
  }
btn1.classList.remove("disabled"); // vypínám tlačítka
btn2.classList.remove("disabled");
btn3.classList.remove("disabled");
btn4.classList.remove("disabled");
next.classList.add("displaynone"); //Tlačítko NEXT není potřebné, a tudíž je odebráno



if (counter == 1) { //Druhá otázka

  btn3.classList.remove("displaynone"); // Zobrazení tlačítek která byla vypnutá
  btn4.classList.remove("displaynone");

  otazka.textContent = otazky[counter]; //Výběr otázky z množiny "otázky"
  counter += 1;
  btn1.textContent = "24" //možnosti
  btn2.textContent = "32"
  btn3.textContent = "47"
  btn4.textContent = "59"
  correct1 = answers[2]; //správná odpověď

}
else if (counter == 2) {
correct1 = answers[1]; // Otázka číslo 3, správná odpověď 1;
otazka.textContent = otazky[counter]
counter += 1;
btn1.textContent = "94kg"
btn2.textContent = "115kg"
btn3.textContent = "147kg"
btn4.textContent = "180kg"
}
else if (counter == 3) {
correct1 = answers[2]; // Otázka číslo 4, správná odpověď 2;
otazka.textContent = otazky[counter]
counter += 1;
btn1.textContent = "34,5kg";
btn2.textContent = "43,8kg";
btn3.textContent = "51,2kg";
btn4.textContent = "65,0kg";
document.getElementById("quickquiz").style.margin = "0"
}
else if (counter == 4) {  //Vyhodnocení
document.getElementById("quickquiz").style.margin = "40px"
  btn1.classList.add("displaynone"); //zrušení všech tlačítek
  btn2.classList.add("displaynone");
  btn3.classList.add("displaynone");
  btn4.classList.add("displaynone");
  otazka.classList.add("displaynone");
  start.classList.toggle("startcenter");
  start.classList.toggle("displaynone");
  var againorstart = document.getElementById("againorstart"); //Tlačítko start slouží dvoum účelům
  counter = 0;
  againorstart.textContent ="Play Again!"; //tlačítko start teď říká "Play again"
  document.querySelector("#quickquiz").textContent = "Shrnutí";  //Nápis rychlokvíz změněn
  document.querySelector("#startbutton").style.backgroundColor = "yellow";
  document.querySelector("#startbutton").style.border = "5px solid black";
    document.querySelector("#skore").textContent; //úkaže výsledné skóre

  document.querySelector("#vyhodnoceni").classList.remove("displaynone") //Div vyhodnocení je zobrazen
  var obrazek = document.querySelector("#vyhodnoceniimg"); //Obrázek, symbolizující hráčův úspěch, mění se
  var poznamka = document.querySelector("#poznamka") // Slovní hodnocení
if(skorecko == 3) { //hodnocení se mění podle toho, kolik bodů hráč získal
obrazek.src = "student.png";
poznamka.textContent = "Očividně ti pojem ryby není cizí!"
document.querySelector("#skore").textContent = "3";
skorecko = 0;
}
else if (skorecko == 4) {
  document.querySelector("#skore").textContent = "4";
  skorecko = 0;

}
else if(skorecko == 2) {
obrazek.src = "Prumerny.jpg";
poznamka.textContent = "Tvoje znalost ryb je průměrná, zapracuj na ní!"
document.querySelector("#skore").textContent = "2";
obrazek.classList.add("width50")
skorecko = 0;


}
else if(skorecko == 1) {
obrazek.src = "Uakari.jpg";
poznamka.textContent = "Tvá znalost ryb je nulová. Pravděpodobnost, že získáš 1 odpověď ze 4 správně je 50% - absolutní náhoda!"
document.querySelector("#skore").textContent = "1"
skorecko = 0;

}
else if(skorecko == 0) {
obrazek.src = "prase.jpg";
poznamka.textContent = "Tvá znalost ryb je otřesná, a ještě k tomu máš smůlu, že jsi ani 1 odpověď netipl správně!"
document.querySelector("#skore").textContent = "0"
skorecko = 0;


}
document.querySelector("#celkovevyhodnoceni").style.display = "flex";
if (document.querySelector("#startbutton").style.backgroundColor == "yellow") {

//restart hry při kliknutí na tlačítko "play again"
  document.querySelector("#startbutton").addEventListener("click", function() {
    window.location.reload(false);
  })
}

}
}
)
}

game(0) //game
