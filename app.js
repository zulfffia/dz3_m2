let a = 1
let ggg
if (a > 0){
    ggg = function (){
        console.log("один")
    }
} else {
    ggg = function (){
        console.log("два")
    }
}
ggg()


let r = []
let x = "x"
for (let i = 0; i <= 9; i++){
    r.push(x)
    console.log(r)
}

let t = 0

function f(){
    t+=1
    console.log(t)
}
f()
f()
f()
f()
