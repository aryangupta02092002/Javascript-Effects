var currStatus = document.querySelector("h5")

var btn = document.querySelector("#add")
var flag = 0

btn.addEventListener("click", function() {
    if(flag == 0){
        currStatus.innerHTML = "Friends"
        currStatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1
    }
    else{
        currStatus.innerHTML = "Stranger"
        currStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }
})