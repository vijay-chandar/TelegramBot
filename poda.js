var Telegram = require('telegram-bot');
var ddg = require('ddg')
var tg = new Telegram(process.env.TELEGRAM_BOT_TOKEN);

tg.on('message', function(msg) {
  if (!msg.text) return;
  // var msg1;
  console.log(msg);
  var m = msg.text.replace("@PodaBot", "");
  ddg.query(m,function(err,data){
    //console.log(data.RelatedTopics[0].Text);
    console.log(data)
    var dat;
    if(data.Heading != '')
      if(!data.AbstractText)
        dat = data.RelatedTopics[0].Text;
      else{
        dat = data.AbstractText;
      }
  tg.sendMessage({
    text: dat,
    reply_to_message_id: msg.message_id,
    chat_id: msg.chat.id
  });
});
});
tg.start();
