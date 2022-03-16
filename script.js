var final_list = []

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function addWords(event) {
    keys = []
    let key1 = document.getElementById('k1')
    let key2 = document.getElementById('k2')
    let key3 = document.getElementById('k3')
    let key4 = document.getElementById('k4')

    keys.push(key1.value)
    keys.push(key2.value)
    keys.push(key3.value)
    keys.push(key4.value)

    console.log("Keys: ", keys)
    const shuffled = shuffle(keys);
    
    let selected = shuffled.slice(0, 2);
    console.log("sel:", selected);
    final_list = final_list.concat(selected)
    console.log("FinalList2:",final_list);

    // show temp words
    let title = document.getElementById('temp');
    txt = document.createTextNode("Your password:")
    title.append(txt)
}
function addKeys(event){
    symbols = []
    var markedCheckbox = document.getElementsByClassName('btn-check');  
    for (var checkbox of markedCheckbox) {  
      if (checkbox.checked)  
        symbols.push(checkbox.id)
        //document.body.append(checkbox.id + ' ');  
    }
    const shuffled = shuffle(symbols);
    let selected = shuffled.slice(0, 3);
    final_list = final_list.concat(selected)
    console.log("FinalList1:",final_list); 
}
function makePass(event){
    const shuffled = shuffle(final_list);
    let list = document.getElementById('list');
    for(const elt of final_list){
        str = `${elt}`
        txt = document.createTextNode(str);
        list.appendChild(txt)
    }
    console.log("FinalList:",final_list);
    let container = document.getElementById('password');
    container.style.visibility = "visible";
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


let submitButton = document.getElementById('submit')
if(submitButton){
    submitButton.addEventListener('click', addWords)
    submitButton.addEventListener('click', addKeys)
    submitButton.addEventListener('click', makePass)
    
}

let copyBtn = document.getElementById('copy');
if(copyBtn){
  copyBtn.addEventListener('click', handleCopy);
  passAsString = ''
}

function handleCopy(){
  console.log("copy clicked!");
  let list = document.getElementById('list');
  passAsString = list.childNodes[1].wholeText;
  console.log(passAsString);
  
  copyStringToClipboard(passAsString);

  /* Alert the copied text */
  alert("Copied the text: " + passAsString);
}

function copyStringToClipboard (str) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = str;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
}



    