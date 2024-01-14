var elem1 = document.querySelector("#elem1")
var elemImage = document.querySelector(".elem img")

elem1.addEventListener("mousemove",function(dets){
    elemImage.style.left = dets.x + "px"
    elemImage.style.top = dets.y + "px"
})

elem1.addEventListener("mousemove",function(dets){
    elemImage.style.opacity = 1
})

elem1.addEventListener("mouseleave",function(dets){
    elemImage.style.opacity = 0
})

var elem2 = document.querySelector("#elem2")

elem2.addEventListener("mousemove",function(dets){
    elemImage.style.left = dets.x + "px"
    elemImage.style.top = dets.y + "px"
})

elem2.addEventListener("mousemove",function(dets){
    elemImage.style.opacity = 1
})

elem2.addEventListener("mouseleave",function(dets){
    elemImage.style.opacity = 0
})

var elem3 = document.querySelector("#elem3")

elem3.addEventListener("mousemove",function(dets){
    elemImage.style.left = dets.x + "px"
    elemImage.style.top = dets.y + "px"
})

elem3.addEventListener("mousemove",function(dets){
    elemImage.style.opacity = 1
})

elem3.addEventListener("mouseleave",function(dets){
    elemImage.style.opacity = 0
})

var elem4 = document.querySelector("#elem4")

elem4.addEventListener("mousemove",function(dets){
    elemImage.style.left = dets.x + "px"
    elemImage.style.top = dets.y + "px"
})

elem4.addEventListener("mousemove",function(dets){
    elemImage.style.opacity = 1
})

elem4.addEventListener("mouseleave",function(dets){
    elemImage.style.opacity = 0
})
