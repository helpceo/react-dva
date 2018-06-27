export default function websocket(url,options){
    if (!("WebSocket" in window)){
      console.log("您的浏览器不支持 WebSocket!");
    }
    let ws = new WebSocket(url);
    let data = new Promise(
      function (resolve, reject) {
        //与服务器建立连接
        ws.onopen = function(evt) { 
          //发送数据
          ws.send(options.body);
        };
        //接收数据
        ws.onmessage = function(evt) {
          resolve(evt.data)
          //关闭连接
          ws.close();
        };
        //请求错误的处理
        ws.onerror = function(err){
          switch(err.target.readyState){
            case 0:
              reject({
                readyState:0,
                message:'连接尚未建立'
              })
              break;
            case 1:
              reject({
                readyState:1,
                message:'连接已建立，可以进行通信'
              })
              break;
            case 2:
              reject({
                readyState:2,
                message:'连接正在进行关闭'
              })
              break;
            case 3:
              reject({
                readyState:3,
                message:'连接已经关闭或者连接不能打开'
              })
              break;
            default:
              reject(err)
          }
        }
      }
    )
   return  data
}