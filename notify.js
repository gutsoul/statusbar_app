var gcm = require('node-gcm');
var message = new gcm.Message();

// 輸入在Google Cloud Messaging 服務上面的 API Server Key
var server_api_key = 'AIzaSyDKed6pghFINhDlyiGf3Tpqw_qpppqSYxs';
                      
// 輸入手機向Google Cloud Messaging註冊後取得的ID
var regid = 'APA91bHwVX31ARMztkoPHS6KNh_YmQibbrBinlc4rd7kNpKgcfIvjnS34T9Gr8Rpketo6QHMLESNC8yxdFD9r3PguMq7bNXnDe97Fyeny0LP78mWIUGPjyKf9z3Li788TzpLJvwrVGSs';

// 輸入訊息標題,phonegap bug:show app name
var mytitle = '優惠通知呦！';

// 輸入訊息內容
var mymessage = '特價商品全面65折.';

// 輸入放在www目錄內的提示聲音檔
var sound = 'beep.wav';

var sender = new gcm.Sender(server_api_key);
message.addData('title',mytitle);
message.addData('message',mymessage);
message.addData('msgcnt','3');
message.addData('soundname',sound);
// 底下是訊息存留在GCM的Timeout時間，如果沒有定義時，預設值為4星期(2419200秒)
message.timeToLive = 3000;

var registrationIds = []; 
registrationIds.push(regid);
 
// 發送訊息
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});