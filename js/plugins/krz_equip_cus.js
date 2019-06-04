///////////////////////
//=============================================================================
// KRZ特制插件：套装哟！
// krz_equip_cus.js
//=============================================================================



//=============================================================================
 /*:
 * @plugindesc (v0.021) krz制作的可以搭配yep的简易套装效果（自用）.
 * @author KRZ
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 兼容yepitemcore的简易套装插件哟！
 * 我没用过别的插件所有和别的插件冲不冲突我不知道，覆盖了releaseUnequippableItems
 * 有可能会和使用了这个函数的插件冲突。
 * 简易放在插件的上面一点，比如最顶上。
 * 其实原理很简单，满足条件了自动送一件看不见的装备。
 * 因此！套装给予的装备可以用上各种插件的设置！无论是基础属性，还是yep的各种效果
 * 他都能支持！不在局限于特定几个基础属性了！
 * 当然，有了这个套装后，你判断角色是否装备着装备里面也可以判断是否有套装效果。
 *
 *  用法 armor weapon 的notes
 *        PS:如果只在套装部件内某一个写了这段文字，则必须拥有此部件，
 * 若不需要这样的设定可以在所有部件里都写一遍。
 * <CUSEQUIP: armor 5>    目标效果装备/武器 序号（将制定防具/武器设定为套装效果）
 *  armor:套装效果的种类（weapon/armor)     5:套装效果的防具/武器ID
 *
 * <CUSEQUIPNEED: armor 1>   需要的配件为 防具/武器 序号
 *  armor:配件的种类（weapon/armor)     1:需要装备的配件的防具/武器ID
 *
 * <CUSEQUIP 2: armor 5>   根据装备数量获得套装效果
 * 2：套装穿戴的数量  armor:套装效果的种类（weapon/armor)   5:套装效果的防具/武器ID
 * 
 * 
 *
 * 上面的这两个是写在配件里↑
 * 下面的这个写在套装效果里↓    (再次说明：套装效果是指定 防具/武器)
 *
 *
 * <ISCUSEQUIP> 设置目标装备为套装效果
 *  这个是目标套装效果必备的，没的话会出错。
 * 如果你装了yep的itemcore，需要再加一条
 * <Not Independent Item>
 *
 * 当然，有了这个套装后，你判断角色是否装备着装备里面也可以判断是否有套装效果。
 * ============================================================================
 * Example
 * ============================================================================
 * 防具1号的note
 * <CUSEQUIP: armor 5>  五号防具为集齐后的套装效果
 * <CUSEQUIPNEED: armor 1> <CUSEQUIPNEED: armor 2> <CUSEQUIPNEED: weapon 3> 需要
 * 防具1号，防具2号，武器3号才能组合获得一个套装效果
 * <CUSEQUIP 2: armor 4> 当集齐两件是获得4号防具的套装效果
 *
 * 防具5号（套装效果）的note
 * <ISCUSEQUIP><Not Independent Item>
 *
 * ============================================================================
 * 备注
 * ============================================================================
 * 自动设定玩家最多拥有9件套装效果
 * 套装数量限制为9件以内，需要改的话有代码基础可以自己改
 *
 * ============================================================================
 * 更新日志
 * ============================================================================
 * v0.021 修复一个小bug
 * v0.02  完成数量套装效果
 * v0.01  完成套装插件
 */
//=============================================================================


var Imported = Imported || {};
Imported.krz_equip_cus = true;

var krz = krz || {};
krz.equipcus = krz.equipcus || {};
krz.equipcus.version = 0.01;
krz.Parameters = PluginManager.parameters('krz_equip_cus');

krz.equipcus.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!krz.equipcus.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!krz._loaded_krz_equipcus) {
    DataManager.processcusEquipNotetags2($dataWeapons);
    DataManager.processcusEquipNotetags2($dataArmors);
    krz._loaded_krz_equipcus = true;
  }
  return true;
};


DataManager.processcusEquipNotetags2 = function(group) {
  var note0 = /<(?:CUSEQUIP):[ ](.*)[ ](\d+)>/i;
  var note1 = /<(?:CUSEQUIPNEED):[ ](.*)[ ](\d+)>/i;
   var note3 = /<(?:CUSEQUIP)[ ](\d+):[ ](.*)[ ](\d+)>/i;
  var note2 = /<(?:ISCUSEQUIP)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);
	
	obj.iscusequip = false;
    obj.cusequipneed =[];
	obj._cusquip = {};	
	obj._cusquip_1 = false;
	obj._cusquip2 = [{},{},{},{},{},{},{},{},{}];	

	obj._cusquip = new Game_Item();
for(var i = 0;i<obj._cusquip2.length;i++){
	obj._cusquip2[i] = new Game_Item();
}
    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
	  if(line.match(note0)){
		var type = String(RegExp.$1);
		var id  =   parseInt(RegExp.$2);
		obj._cusquip._dataClass=type;obj._cusquip._itemId=id;
	}else if(line.match(note1)) {
var type = String(RegExp.$1);
var id  =   parseInt(RegExp.$2);
var k = new Game_Item();
k._dataClass=type;k._itemId=id;
        obj.cusequipneed.push(k);
     }else if(line.match(note2)){
		obj.iscusequip = true;
	}else if(line.match(note3)){
		obj._cusquip_1 = true;
var type = String(RegExp.$2);
var id  =  parseInt(RegExp.$3);
var num  =  parseInt(RegExp.$1);
obj._cusquip2[num]._dataClass=type;obj._cusquip2[num]._itemId=id;
	}	  
    }
  }
};

function hascus(arr,arr2){
	
	var i =0;
	for(i = 0;i<arr.length;i++){

		
		if(arr[i]._itemId == arr2._itemId){
			return true;
		}
		

		
	}
	return false;
	
};






function removecus(arr,arr2){
	
	var i =0;
	for(i = 0;i<arr.length;i++){

		
		if(arr[i] == arr2){
			arr.splice(i,1);
			return i;
		}
		

		
	}
	
	
};



Game_Actor.prototype.changeEquip = function(slotId, item) {

	
    if (this.tradeItemWithParty(item, this.equips()[slotId]) &&(!item || this.equipSlots()[slotId] === item.etypeId)) { 
	this._equips[slotId].setObject(item);


       this.refresh();	
}
for(var n = 0;n<this.equips().length;n++){
	var item2 = null;
	if(Imported.YEP_ItemCore){	
	if(this.equips()[n]!=null){
	var equipId = this.equips()[n].baseItemId || this.equips()[n].id;
	var equipType = $dataSystem.equipTypes[n + 1];
	if (equipType === $dataSystem.equipTypes[1] ||
      ( n === 1 && this.isDualWield())) {
        item2 = $dataWeapons[equipId];
      } else {
        item2 = $dataArmors[equipId];
      }
	}  
	  
	}else{
	item2 = this.equips()[n];	
	}
	
	
	
	
if(item2!=null &&item2._cusquip != {}&&item2._cusquip._itemId!=0){
	var x = true;
for(var k =0;k<item2.cusequipneed.length;k++){
	var success = 0;	

	if(Imported.YEP_ItemCore){		

    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (!equip.baseItemId) continue;
		if(equip.baseItemId === item2.cusequipneed[k].object().id){success = 1;/*break;*/}
    }
	}
	
	if(!this.equips().contains(item2.cusequipneed[k].object())&&success==0){x=false;break;}

}

		if(x!=false){			
			if(!hascus(this._cusequips, item2._cusquip)){
			this._cusequips.push(item2._cusquip);
			this._cusequiporigin = this._cusequiporigin || [];
			this._cusequiporigin[this._cusequips.length-1] = item2;
			}
		}else{
			var rc = removecus(this._cusequips,item2._cusquip);
			if(rc) this._cusequiporigin[rc] = null;
		}
    }
	
////判断是否有第二种



	if(item2!=null && item2._cusquip_1){		//////第二种计算数量的套装效果
	var x = true;
	var success = 0;
for(var k =0;k<item2.cusequipneed.length;k++){
	var hh = 0;

	if(Imported.YEP_ItemCore){		

    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (!equip.baseItemId) continue;
		if(equip.baseItemId === item2.cusequipneed[k].object().id){hh += 1;/*break;/*/}
    }
	}
	if(hh == 0){
	if(this.equips().contains(item2.cusequipneed[k].object())){hh+=1;}
	}

	success += Math.min(hh,1);/////同一种类装备最多加一次

}
success = Math.min(item2._cusquip2.length-1,success);

for(var l = 1;l<=success;l++){
	if(item2._cusquip2[l]._itemId > 0){	
			
			if(!hascus(this._cusequips,item2._cusquip2[l])){

			this._cusequips.push(item2._cusquip2[l]);
			this._cusequiporigin = this._cusequiporigin || [];
			this._cusequiporigin[this._cusequips.length-1] = item2;
			}
	}
}		
if(success<item2._cusquip2.length-1){
for(var l = success+1;l<item2._cusquip2.length;l++){
	if(item2._cusquip2[l]._itemId > 0){	
	var rc = removecus(this._cusequips,item2._cusquip2[l]);
	if(rc) this._cusequiporigin[rc] = null;
	}
}
}			
		
	}

	
	
	
	
	
	
	
}





//////未满足情况时删除套装效果
if(this._cusequips.length >= 1){
	for(var i = 0;i<this._cusequips.length;i++){
		
	var success = false;	
	for(var n = 0;n<this.equips().length;n++){
	var item2 = null;
	if(Imported.YEP_ItemCore){	
	if(this.equips()[n]!=null){
	var equipId = this.equips()[n].baseItemId || this.equips()[n].id;
	var equipType = $dataSystem.equipTypes[n + 1];
	if (equipType === $dataSystem.equipTypes[1] ||
      ( n === 1 && this.isDualWield())) {
        item2 = $dataWeapons[equipId];
      } else {
        item2 = $dataArmors[equipId];
      }
	}  
	}else{
	item2 = this.equips()[n];	
	}
	if(this._cusequiporigin[i] == item2){success = true;break;}
	}
	if(!success){
		this._cusequiporigin[i] = null;
				
	}
	
	}
	//////防止出错先不删除，在下面再删除不需要的套装效果
	for(var i = 0;i<this._cusequiporigin.length;i++){
		if(this._cusequiporigin[i] == null) this._cusequips.splice(i,1);	
	}
	
	
	
}

};



krz.equipcus.Game_Actor_equips = Game_Actor.prototype.equips;
Game_Actor.prototype.equips = function() {
	var k = krz.equipcus.Game_Actor_equips.call(this);

	this._cusequips = this._cusequips|| [];
	var h =  this._cusequips.map(function(item) {
        return item.object();
    });
    return k.concat(h);
};


///krz.equipcus.Game_Actor_releaseUnequippableItems= Game_Actor.prototype.releaseUnequippableItems;
Game_Actor.prototype.releaseUnequippableItems = function(forcing) {
    for (;;) {
        var slots = this.equipSlots();
        var equips = this.equips();
        var changed = false;
        for (var i = 0; i < equips.length; i++) {
            var item = equips[i];
            if (item && (!this.canEquip(item) || item.etypeId !== slots[i]) && item.iscusequip == false ) {
                if (!forcing) {
                    this.tradeItemWithParty(null, item);
                }
                this._equips[i].setObject(null);
                changed = true;
            }
        }
        if (!changed) {
            break;
        }
    }
};

krz.equipcus.Game_Actor_initialize = Game_Actor.prototype.initialize;
Game_Actor.prototype.initialize = function (actorId) {
	krz.equipcus.Game_Actor_initialize.call(this,actorId);
	this.changeEquip(0,this.equips()[0]);
};