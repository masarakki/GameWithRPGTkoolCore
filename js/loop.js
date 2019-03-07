var BaseClass = Scene_Map;

function Scene_Blank() {
  this.initialize.apply(this, arguments);
}

Scene_Blank.prototype.constructor = Scene_Blank;
Scene_Blank.prototype = Object.create(BaseClass.prototype);
Scene_Blank.prototype.initialize = function() {
  BaseClass.prototype.initialize.call(this);
  this._interpreter = new Game_Interpreter();
};
Scene_Blank.prototype.create = function() {
  Scene_Base.prototype.create.call(this);
  this.createWindowLayer();
  this.createMessageWindow();
  this.setupScript();
};
Scene_Blank.prototype.update = function() {
  this.updateInterpreter();
//  if (this.isSceneChangeOk()) {
//    this.updateScene();
//  }
  Scene_Base.prototype.update.call(this);
};
Scene_Blank.prototype.isReady = function() {
  return Scene_Base.prototype.isReady.call(this);
};
Scene_Blank.prototype.updateInterpreter = function() {
  for (;;) {
    this._interpreter.update();
    if (this._interpreter.isRunning()) {
      return;
    }
    if (this._interpreter.eventId() > 0) {
      //this.unlockEvent(this._interpreter.eventId());
      this._interpreter.clear();
    }
    if (this.setupScript()) {
      return;
    }
  }
};
Scene_Blank.prototype.setupScript = function() {
  this._interpreter.setup([
    {code: 101, indent: 0, parameters: ["", 0, 1, 2]},
    {code: 401, indent: 0, parameters: ["  13歳女子"]},
    {code: 401, indent: 0, parameters: ["ふぇぇ・・・"]},

    {code: 101, indent: 0, parameters: ["", 0, 1, 2]},
    {code: 401, indent: 0, parameters: ["  13歳女子"]},
    {code: 401, indent: 0, parameters: ["このゲームのURLを貼ると逮捕されちゃうんだって..."]},

    {code: 118, indent: 0, parameters: ["question1"]},
    {code: 101, indent: 0, parameters: ["", 0, 1, 2]},
    {code: 401, indent: 0, parameters: ["  13歳女子"]},
    {code: 401, indent: 0, parameters: ["そんなことないよね? 兵庫県警のおじちゃん?"]},

    {code: 118, indent: 0, parameters: ["question2"]},
    {code: 102, indent: 0, parameters: [["問題ないよ", "逮捕だ!!!!!!"], 1,0,1,0]},

    {code: 402, indent: 0, parameters: [0, "問題ないよ"]},

    {code: 101, indent: 1, parameters: ["", 0, 1, 2]},
    {code: 401, indent: 1, parameters: ["  13歳女子"]},
    {code: 401, indent: 1, parameters: ["ほんとに? ほんとに大丈夫?"]},
    {code: 119, indent: 1, parameters: ["question2"]},
    {code: 0, indent: 1, parameters: []},

    {code: 402, indent: 0, parameters: [1, "逮捕だ!!!!!!"]},

    {code: 101, indent: 1, parameters: ["", 0, 1, 2]},
    {code: 401, indent: 1, parameters: ["  13歳女子"]},
    {code: 401, indent: 1, parameters: ["ふぇぇ・・・"]},
    {code: 119, indent: 1, parameters: ["question1"]},
    {code: 0, indent: 1, parameters: []},
    {code: 404, indent: 0, parameters: []},
    {code: 0, indent: 0, parameters: []},
  ], 1);
  return true;
};

$gameSystem = {
  windowTone: () => ([0,0,0,0]),
  isChinese: () => (false),
  isKorean: () => (false),
};

$dataSystem = {
  currencyUnit: () => ('yen'),
};

$gameMessage = new Game_Message();
$gameMap = new Game_Map();
$gameParty = new Game_Party();
$gamePlayer = new Game_Player();
