Blockly.Blocks['posenet_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_HEIGHT_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_VIDEO_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "video_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SKELETON_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["N","none"],
		["Y","block"]
  ]), "skeleton_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_PERSONS_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],	  
		["No Limit","999"]	  
  ]), "persons_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SCORELIMIT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["0.1","0.1"],
		["0.2","0.2"],
		["0.3","0.3"],
		["0.4","0.4"],	  
		["0.5","0.5"],
		["0.6","0.6"],
		["0.7","0.7"],
		["0.8","0.8"],
		["0.9","0.9"]	  
  ]), "scorelimit_"); 	 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['posenet_list'] = {
  init: function() { 
  this.appendDummyInput()  
	  .appendField(Blockly.Msg.POSENET_LIST_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['posenet_person'] = {
  init: function() {
  this.appendValueInput("person_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_PERSON_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["nose","nose"],
		["leftEye","leftEye"],
		["rightEye","rightEye"],
		["leftEar","leftEar"],
		["rightEar","rightEar"],
		["leftShoulder","leftShoulder"],
		["rightShoulder","rightShoulder"],
		["leftElbow","leftElbow"],
		["rightElbow","rightElbow"],
		["leftWrist","leftWrist"],
		["rightWrist","rightWrist"],
		["leftHip","leftHip"],
		["rightHip","rightHip"],
		["leftKnee","leftKnee"],
		["rightKnee","rightKnee"],
		["leftAnkle","leftAnkle"],
		["rightAnkle","rightAnkle"],
		[" ",""]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.POSENET_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[" ",""],
		["score","score"],
		["x","x"],
		["y","y"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['posenet_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_DISTANCE_SHOW);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X0");
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y0"); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X1");
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y1");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_ANGLE_SHOW);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X0");
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y0"); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X1");
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y1");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['posenet_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['posenet_persons'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_PERSONS_NUMBER_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],	  
		["No Limit","999"]	  
  ]), "persons_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};