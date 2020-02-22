'use strict';

goog.require('Blockly.Msg');

console.log(Blockly.Msg.CATEGORY_LOGIC);
console.log("OK");

if (Blockly.Msg.CATEGORY_LOGIC == "Logic") { 
  Blockly.Msg.TEST_SHOW = "TEST";
  Blockly.Msg.OPEN_SHOW = "Open Link";
  Blockly.Msg.CLOSE_SHOW = "Close Link";
  Blockly.Msg.OPENID_SHOW = "ID";
  Blockly.Msg.CLOSEID_SHOW = "ID";
  Blockly.Msg.URL_SHOW = "Url";
  Blockly.Msg.WIDTH_SHOW = "Width";
  Blockly.Msg.LEFT_SHOW = "Left";
  Blockly.Msg.TOP_SHOW = "Top";
  Blockly.Msg.ZINDEX_SHOW = "Z-index";
} else {
  Blockly.Msg.TEST_SHOW = "測試";
  Blockly.Msg.OPEN_SHOW = "開啟連結";
  Blockly.Msg.CLOSE_SHOW = "關閉連結";
  Blockly.Msg.OPENID_SHOW = "代碼";
  Blockly.Msg.CLOSEID_SHOW = "代碼";
  Blockly.Msg.URL_SHOW = "來源網址";
  Blockly.Msg.WIDTH_SHOW = "寬度";
  Blockly.Msg.HEIGHT_SHOW = "高度";
  Blockly.Msg.LEFT_SHOW = "靠左距離";
  Blockly.Msg.TOP_SHOW = "靠上距離";
  Blockly.Msg.ZINDEX_SHOW = "層次";
}
  
