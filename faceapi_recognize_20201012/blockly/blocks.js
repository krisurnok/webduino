Blockly.Blocks['faceapirecognize_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_SHOW);	 
  this.appendValueInput("faceimagepath")
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACEIMAGEPATH_SHOW);
  this.appendValueInput("facelabel")
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACELABEL_SHOW); 
  this.appendValueInput("faceimagecount")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACEIMAGECOUNT_SHOW); 
  this.appendValueInput("distancelimit")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_DISTANCELIMIT_SHOW); 
  this.appendValueInput("timer")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_TIMER_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
		]), "result"); 	 
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_detect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_DETECT_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_number'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_NUMBER_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['faceapirecognize_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_GET_SHOW); 
  this.appendValueInput("index")
	  .setCheck("Number");  
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.FACEAPIRECOGNIZE_NAME_SHOW,"name"],
		[Blockly.Msg.FACEAPIRECOGNIZE_DISTANCE_SHOW,"distance"]	  
  ]), "column"); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['faceapirecognize_clear'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.FACEAPIRECOGNIZE_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.FACEAPIRECOGNIZE_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};