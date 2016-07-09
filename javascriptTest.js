/* JAVACRIPT ДЛЯ ТЕСТА!!!*/

var searchName;
searchName = document.forms.test;

function checkRadBox () {
   var score;
   score = 0;
   if (document.getElementById("linkTeg1").checked) {
      score = score + 1;
   }
   if (document.getElementById("listTeg3").checked) {
      score = score + 1;
   }
   if (document.getElementById("infoServiceTeg3").checked) {
      score = score + 1;
   }
   if (searchName.elements.tebleTeg2.checked && searchName.elements.tebleTeg4.checked && !searchName.elements.tebleTeg1.checked && !searchName.elements.tebleTeg3.checked) {
      score = score + 1;
   }
   if (searchName.elements.formAtr1.checked && searchName.elements.formAtr2.checked && !searchName.elements.formAtr3.checked && !searchName.elements.formAtr3.checked) {
      score = score + 1;
   }
   alert("Вы набрали " + score + " баллов и " + score * 20 + " процентов верных ответов");
   // Обнуляем все выбранные счетчики (точки и галочки) НАЧАЛО
   for (var i = 0; i < searchName.elements.length; ++i) {
    if (searchName.elements[i].checked) {
       searchName.elements[i].checked = false;
      }
   }
   // Обнуляем все выбранные счетчики (точки и галочки) КОНЕЦ

}
searchName.elements.bottonTest.onclick = checkRadBox;


/*Попытка обнулить выбранные счетчики (точки и галочки). ОБЯЗАТЕЛЬНО спросить у Макса, почему так, в этом месте, не работает (не внутри функции, по идее тут: если клацаешь, то все обнуляется... но так не работает)

if (searchName.elements.bottonTest.onclick = checkRadBox) {
   for (var i = 0; i < searchName.elements.length; ++i) {
      if (searchName.elements[i].checked) {
       searchName.elements[i].checked = false;
      }
   }
}*/



