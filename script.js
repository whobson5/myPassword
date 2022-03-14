// let btns = document.querySelectorAll('button');
// btns.forEach(function (i) {
//     console.log("new button!")
//     i.addEventListener('click', function() {
//         val = i.innerHTML
//         console.log(val)
//     })
// })

var final_list = []

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

    // show temp words
    let title = document.getElementById('temp');
    txt = document.createTextNode("Words you chose:")
    title.append(txt)
    // change list text
    let list = document.getElementById('list');
    for(const elt of keys){
        str = `${elt} `
        txt = document.createTextNode(str);
        list.appendChild(txt)
    }
}
function addKeys(event){
    symbols = []
    var markedCheckbox = document.getElementsByClassName('btn-check');  
    for (var checkbox of markedCheckbox) {  
      if (checkbox.checked)  
        symbols.push(checkbox.id)
        //document.body.append(checkbox.id + ' ');  
    }  
  

}
let submitButton = document.getElementById('submit')
if(submitButton){
    submitButton.addEventListener('click', addWords)
    submitButton.addEventListener('click', addKeys)
}





    