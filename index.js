function add(a,b){
    console.log(a+b);
}

setImmediate(()=>{
    add(2,3);
    console.log("this is set Immediate");
})

setTimeout(()=>{
    add(3,4)
    console.log("this is set Timeout");
})

process.nextTick(()=>{
    add(4,5);
    console.log("this is Next tick")
})

console.log("function is ended");