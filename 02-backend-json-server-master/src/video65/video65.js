console.log("video 65")
const greeting = (name, callback) => {
    console.log("Xin chào, ", name)
    //hoidanit();
    callback();
}
const hello = () => {
    console.log("learn callBack...")
}
const hi = () => {
    console.log("say hi....")
}
greeting("Eric", hello);
greeting("Bla Bla", hi);