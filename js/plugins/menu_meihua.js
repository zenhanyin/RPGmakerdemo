//=============================================================================
 /*:
 * @plugindesc --菜单背景美化
 * @author zhenghanying Engine Plugins
 */
//=============================================================================
Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundSprite=new Sprite();
    var imageName;
    if(this instanceof Scene_Menu){
        imageName="ce";
    }else if(this instanceof Scene_Item){
        imageName="ce"
    }else if(this instanceof Scene_Skill){
        imageName="ce"
    }else if(this instanceof Scene_Equip){
        imageName="ce"
    }else if(this instanceof Scene_Save || this instanceof  Scene_Load) {
        imageName = "ce"
    }else{
        imageName="ce"
    }
    this._backgroundSprite.bitmap=ImageManager.loadParallax(imageName);
    this.addChild(this._backgroundSprite);
};