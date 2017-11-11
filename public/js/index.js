var socket = io();
document.getElementById("send").addEventListener("click",()=>{
    socket.emit("createMsg", {
        msg: document.getElementById("msg").value
    });
    document.getElementById("messages-box").innerHTML = "<p>" +"<strong>You:</strong> "+ document.getElementById("msg").value+"</p>" +document.getElementById("messages-box").innerHTML;
    document.getElementById("msg").value="";
});
socket.on('connect',function(){
    console.log("connected to server");
    
    // socket.emit("createMsg",{
    //     from: "blaze",
    //     msg: "hello everyone"
    // })
    
    socket.on("newMsg",function(msg){
        document.getElementById("messages-box").innerHTML= "<p class=\"right\">" +"<strong>Them:</strong> "+ msg.msg +"</p>" +document.getElementById("messages-box").innerHTML;
    });
});
socket.on('disconnect', function(){
   console.log("disconnected from server");
});

