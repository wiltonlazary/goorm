module.exports={msg:function(e,t){console.log(t),e.broadcast.to(t.workspace).emit("composing_message",JSON.stringify(t))}};