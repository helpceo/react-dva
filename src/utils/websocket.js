export default function websocket(url,options){
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
          reject(err)
        }
      }
    )
   return  data
}