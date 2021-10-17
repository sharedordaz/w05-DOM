const button
const input
const list

button = document.querySelector("button");
input = document.querySelector("input");
list = document.querySelector("ul");

button.addEventListener("click", function button_function() {
    let li = document.createElement("li");
    let d_button = document.createElement("button");
    d_button.innerHTML("❌");
    d_button.addEventListener("click", function d_button_function() {
        list.remove(li)
        
    })
    list.append(li, d_button);
    input.focus()
})