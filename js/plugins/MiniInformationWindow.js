//
//  TAGOST修改，修改部分请搜索[ TAGOST ]
//  1、修改了部分显示文本，更加直观
//  2、修改effect、param、traits部分代码
//
//  迷你信息窗口 ver1.03
//
// ------------------------------------------------------
// Copyright (c) 2016 Yana
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
// ------------------------------------------------------
//
// author Yana
//

var Imported = Imported || {};
Imported['MiniInformationWindow'] = 1.03;
/*:
 * @plugindesc ver1.03/定义各种信息的小窗口。
 * @author Yana
 *
 * @param 【基本設定】
 *
 * @param Switch Key
 * @desc 切换微型窗口的可视化状态键。
 * @default tab,menu
 *
 * @param Default State
 * @desc 迷你窗口初始状态。
 * open打开状态，在那个以外则关闭状态。
 * @default open
 *
 * @param Two Col Size
 * @desc 迷你窗口两排的行数。。
 * 这行数以上数据交给的话，表示2排。。
 * @default 8
 *
 * @param Window Offset X
 * @desc 迷你窗口的X坐标的补正值。
 * @default 0
 *
 * @param Window Offset Y
 * @desc 迷你窗口的Y坐标的补正值。
 * @default 0
 *
 * @param Use Scene Item
 * @desc 在道具场景中使用迷你窗口的设定。
 * @default true
 *
 * @param Use Scene Skill
 * @desc 在技能场景设定迷你窗口的设定。
 * @default true
 *
 * @param Use Scene Equip
 * @desc 装备镜头使用迷你窗口的设定。
 * @default true
 *
 * @param Use Scene Shop
 * @desc 在店铺景色使用迷你窗口的设定。
 * @default true
 *
 * @param 【用语设定】
 *
 * @param Effect Name
 * @desc 有效度的名称。
 * @default 抵抗几率
 *
 * @param Down Name
 * @desc 这是一个非常有效的方法
 * @default 抵抗几率下降
 *
 * @param Turn Text
 * @desc 在战斗等地使用的旋转的名称
 * @default 转身
 *
 * @param Escape Text
 * @desc 特殊效果　逃是逃跑的名称。
 * @default 逃跑
 *
 * @param Param Color
 * @desc 在详细的窗口显示的特征的颜色设定。
 * 顺序基本颜色，颜色，颜色，上升颜色，下降颜色。
 * @default 6,4,24,2
 *
 * @param Param Text1
 * @desc 在详细窗口显示的特征的表示。
 * 1是有效度和无效化。
 * @default  抵抗几率，削弱抵抗几率，无效化
 *
 * @param Param Text2
 * @desc 在详细窗口显示的特征的表示。
 * 2是追加能力值。
 * @default 命中率,闪避率,暴击率,暴击闪避,魔法闪避,魔法反射率,反击率,HP再生率,MP再生率,TP再生率
 *
 * @param Param Text3
 * @desc 在详细窗口显示的特征的表示。
 * 3是特殊能力值 。
 * @default 怪物仇恨率,防御效果,技能恢复效果,药物恢复效果,MP消耗率,TP补充率,受到的物理攻击,受到的魔法攻击,受到的地形伤害,杀怪经验倍率
 *
 * @param Param Text4
 * @desc 在详细窗口显示的特征的表示。
 * 4是攻击标签。
 * @default 赋予攻击属性: ,击中时有几率附加状态: ,攻击速度,攻击次数
 *
 * @param Param Text5
 * @desc 是在详细窗口上显示的特征的显示名
 * 5是技能标签。
 * @default 添加技能类型: ,技能类型封印: ,追加技能: ,技能封印: 
 *
 * @param Param Text6
 * @desc 是在详细窗口上显示的特征的显示名。
 * 6是装备标签。
 * @default 武器类型追加: ,防具类型追加: ,装備位置: ,装备封印: ,二刀流
 *
 * @param Param Text7
 * @desc 是在详细窗口上显示的特征的显示名
 * 7是其他的标签。
 * @default 行动次数追加,自带战斗,防御,替身,TP获得,消失的效果,倒计时减半,随机遇敌无效,不意打ち無効,先手率,取得金币率,掉宝率
 *
 * @param Defeat Text
 * @desc 这是一种死亡方式使用的文本
 * @default 通常,BOSS,瞬间消失,不会消失的
 *
 * @param Effects Names
 * @desc 使用效果的各种效果的名称。
 * @default HP恢复: ,HP减少: ,MP恢复: ,MP减少: ,TP増加: ,附加状态: ,状态解除: ,增益效果: ,弱化效果: ,增益解除: ,弱化解除: ,特殊效果: ,成长,习得技能: ,共同
 *
 *  @help ------------------------------------------------------
 * 插件指令
 * ------------------------------------------------------
 * 引入插件，并设置插件参数
 * ------------------------------------------------------
 * 使用方法
 * ------------------------------------------------------
 * 引入插件，设好插件参数。
 *
 *
 *通过使用记录的设定*条款和装备技能的笔记来显示的使用效果和特征可以追加信息
 * 在显示任何一个使用效果之前
 * 
 * <追加情报窗口前:xxx>
 * <AddInfoWindowP:xxx>
 *
 *
 *在显示任何一个使用效果之后
 *
 * <追加情报窗口后:xxx>
 * <AddInfoWindowA:xxx>
 *
 *你可以将信息添加到你的位置上，然后再添加一些信息。这些都是通过多记叙的方式来添加信息
 *
 * ※BattleLayout-SaGa我们不能用这个方法来补充信息
 *
 * ------------------------------------------------------
 * 利用規約
 * ------------------------------------------------------

 * ------------------------------------------------------
 * 更新履歴:
 * ver1.03:
 * YEP_StatusMenuCore修正了变量名重复未正常运作的故障。。
 * ver1.02:
 * 修正了部分参数的设置是错误的。
 * ver1.01:
 * 修改名称也要考虑窗口的宽度。
 * 为了显示mp再现率和tp再现率，调整参数的默认值。
 * ver1.00:
 * 公開
 */
 
 
 
 Game_Actor.prototype.testhasItem = function(baseItem) {
    ////if (!DataManager.isIndependent(baseItem)) return false;
    var type = (DataManager.isWeapon(baseItem)) ? 'weapon' : 'armor';
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
     if (!equip.baseItemId) continue;
      if (DataManager.isWeapon(equip) && type === 'weapon') {
        if (equip.baseItemId === baseItem.id) return true;
      } else if (DataManager.isArmor(equip) && type === 'armor') {
        if (equip.baseItemId === baseItem.id) return true;
      }
    }
    return false;
};
 
 
 

(function () {
    ////////////////////////////////////////////////////////////////////////////////////

    var parameters = PluginManager.parameters('MiniInformationWindow');
    var switchKey = parameters['Switch Key'].split(',');
    var defaultState = parameters['Default State'] === 'open';
    var turnText = String(parameters['Turn Text'] || '回合');
    var escapeText = String(parameters['Escape Text'] || '逃跑');
    var effectNames = String(parameters['Effects Names'] || 'HP恢复: ,HP减少: ,MP恢复: ,MP减少: ,TP増加: ,附加状态: ,状态解除: ,增益效果: ,弱化效果: ,增益解除: ,弱化解除: ,特殊效果: ,成长,习得技能: ,共同').split(',');
    var defeatText = parameters['Defeat Text'].split(',');
    var paramColor = parameters['Param Color'].split(',');
    var twoColSize = Number(parameters['Two Col Size']);
    var offsetX = Number(parameters['Window Offset X']) || 0;
    var offsetY = Number(parameters['Window Offset Y']) || 0;
    var useSceneItem = parameters['Use Scene Item'] === 'true';
    var useSceneSkill = parameters['Use Scene Skill'] === 'true';
    var useSceneEquip = parameters['Use Scene Equip'] === 'true';
    var useSceneShop = parameters['Use Scene Shop'] === 'true';
    var paramVocab = [];


    for (var i = 1; i <= 7; i++) {
        var key = 'Param Text' + i;
        paramVocab[i - 1] = parameters[key].split(',');
    }

    ////////////////////////////////////////////////////////////////////////////////////

    DataManager.preInfoItem = function (item) {
        if (!item) return null;
        if (!item.note) return null;
        if (item._preInfos) return item._preInfos;
        this.makeInfoItem(item);
        return item._preInfos;
    };

    DataManager.afterInfoItem = function (item) {
        if (!item) return null;
        if (!item.note) return null;
        if (item._afterInfos) return item._afterInfos;
        this.makeInfoItem(item);
        return item._afterInfos;
    };

    DataManager.makeInfoItem = function (item) {
        item._preInfos = [];
        item._afterInfos = [];
        var texts = item.note.split('\n');
        for (var i = 0, max = texts.length; i < max; i++) {
            if (texts[i].match(/<(?:追加情报窗口|AddInfoWindow)([前后PA]):(.+)>/)) {
                if (RegExp.$1 === '前' || RegExp.$1 === 'P') item._preInfos.push(RegExp.$2);
                if (RegExp.$1 === '后' || RegExp.$1 === 'A') item._afterInfos.push(RegExp.$2);
            }
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    function Window_MiniInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_MiniInfo.prototype = Object.create(Window_Base.prototype);
    Window_MiniInfo.prototype.constructor = Window_MiniInfo;

    Window_MiniInfo.prototype.initialize = function () {
        Window_Base.prototype.initialize.call(this, 0, 0, 32, 32);
        this._showInfo = defaultState;
        this.openness = 0;
        this._maxCols = 1;
    };

    Window_MiniInfo.prototype.standardFontSize = function () {
        return 18;
    };

    Window_MiniInfo.prototype.standardPadding = function () {
        return 6;
    };

    Window_MiniInfo.prototype.processDrawIcon = function (iconIndex, textState) {
        this.drawIcon(iconIndex, textState.x + 2, textState.y + 2);
        textState.x += this.standardFontSize() + 8;
    };

    Window_MiniInfo.prototype.drawIcon = function (iconIndex, x, y) {
        var bitmap = ImageManager.loadSystem('IconSet');
        var pw = Window_Base._iconWidth;
        var ph = Window_Base._iconHeight;
        var sx = iconIndex % 16 * pw;
        var sy = Math.floor(iconIndex / 16) * ph;
        var n = Math.floor((this.contents.fontSize / 28) * Window_Base._iconWidth);
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y, n, n);
    };

    Window_MiniInfo.prototype.exRow = function () {
        if (this._item && this._item.name) return 1;
        return 0;
    };

    Window_MiniInfo.prototype.setItem = function (item, rect, maxCols) {
        this._item = item;
        this._maxCols = maxCols ? maxCols : 1;
        this.makeContents();
        if (!maxCols && this._maxCols === 1 && this._data.length > twoColSize) this._maxCols = 2;
        if (this._data.length > 0 && this._showInfo) {
            this.width = this.calcWidth();
            this.height = this.calcHeight();
            this.refresh();
            this.updatePosition(rect, rect.padding);
            this.open();
        } else {
            this.close();
        }
    };

    Window_MiniInfo.prototype.updatePosition = function (rect, padding) {
        this.x = Math.min(Math.max(0, rect.width - this.width) + rect.x, Graphics.boxWidth - this.width);
        this.y = rect.y;
        if ((this.y + this.height) > Graphics.boxHeight) {
            this.y = Math.max(rect.y - this.height - padding - rect.height, 0);
        }
        this.x += offsetX;
        this.y += offsetY;
        this.backOpacity = 200;
        this.setTone(136, 34, -200);
    };

Window_MiniInfo.prototype.makeContents = function () {
        var item = this._item;
        var color = paramColor;
        this._data = [];
        var c = '\\C[' + color[0] + ']';
        var s = '\\C[' + color[1] + ']';
        var g = '\\C[' + color[2] + ']';
        var r = '\\C[' + color[3] + ']';

        var text = '';
        var preInfos = DataManager.preInfoItem(item);
        var afterInfos = DataManager.afterInfoItem(item);
        if (preInfos) this._data = this._data.concat(preInfos);

        //TAGOST，物品类型为effects
        if (item.effects) {
            for (var i = 0, max = item.effects.length; i < max; i++) {

                var e = item.effects[i];
                text = '';

                switch (e.code) {
                    case 11: //HP，HP恢复: 100%/HP减少: 100
                        if (e.value1 > 0 && effectNames[0]) text = s + effectNames[0] + g + Math.floor(e.value1 * 100) + '%';
                        if (e.value1 < 0 && effectNames[1]) text = s + effectNames[1] + r + Math.floor(Math.abs(e.value1 * 100)) + '%';
                        if (e.value2 > 0 && effectNames[0]) text = s + effectNames[0] + g + e.value2;
                        if (e.value2 < 0 && effectNames[1]) text = s + effectNames[1] + r + Math.abs(e.value2);
                        break;
                    case 12: //MP，MP恢复: 100%/MP减少: 100
                        if (e.value1 > 0 && effectNames[2]) text = s + effectNames[2] + g + Math.floor(e.value1 * 100) + '%';
                        if (e.value1 < 0 && effectNames[3]) text = s + effectNames[3] + r + Math.floor(Math.abs(e.value1 * 100)) + '%';
                        if (e.value2 > 0 && effectNames[2]) text = s + effectNames[2] + g + e.value2;
                        if (e.value2 < 0 && effectNames[3]) text = s + effectNames[3] + r + Math.abs(e.value2);
                        break;
                    case 13: //TP，TP增加: 100
                        if (e.value1 > 0 && effectNames[4]) text = s + effectNames[4] + g + e.value1;
                        break;
                    case 21: //附加状态，附加状态: 加速
                        var state = $dataStates[e.dataId];
                        if (state) {
                            var name = state.name;
                            // if (e.value1 > 0 && effectNames[5]) text = s + effectNames[5]  + c + name + ' ' + Math.floor(Math.abs(e.value1 * 100)) + '%';
                            if (e.value1 > 0 && effectNames[5]) text = s + effectNames[5] + c + name;
                        }
						if(e.dataId == 0) text = s + '附带攻击特效' + c;
                        break;
                    case 22: //状态解除，状态解除: 中毒
                        var state = $dataStates[e.dataId];
                        if (state) {
                            var name = state.name;
                            // if (e.value1 > 0 && effectNames[6]) text = s + effectNames[6]  + c + name + ' ' + Math.floor(Math.abs(e.value1 * 100)) + '%';
                            if (e.value1 > 0 && effectNames[6]) text = s + effectNames[6] + c + name;
                        }
                        break;
                    case 31: //增益，增益效果: 敏捷增加25%，持续5回合（同物品多个相同效果加法叠加）
                        var name = TextManager.param(e.dataId);
                        // if (e.value1 > 0 && effectNames[7]) text = s + effectNames[7]  + c + name + ' ' + e.value1 + turnText;
                        if (e.value1 > 0 && effectNames[7]) text = s + effectNames[7] + c + name + s + '增加15%，持续' + c + e.value1 + s + turnText;
                        break;
                    case 32: //弱化，弱化效果: 敏捷减少25%，持续5回合（同物品多个相同效果加法叠加）
                        var name = TextManager.param(e.dataId);
                        // if (e.value1 > 0 && effectNames[8]) text = s + effectNames[8]  + c + name + ' ' + e.value1 + turnText;
                        if (e.value1 > 0 && effectNames[8]) text = s + effectNames[8] + c + name + s + '减少15%，持续' + c + e.value1 + s + turnText;
                        break;
                    case 33: //解除增益效果，解除增益效果: 敏捷
                        if (effectNames[9]) {
                            var name = TextManager.param(e.dataId);
                            text = s + effectNames[9] + c + name;
                        }
                        break;
                    case 34: //解除弱化效果，解除弱化效果: 敏捷
                        if (effectNames[10]) {
                            var name = TextManager.param(e.dataId);
                            text = s + effectNames[10] + c + name;
                        }
                        break;
                    case 41: //特殊效果，特殊效果: xx
                        if (effectNames[11]) text = s + effectNames[11] + c + escapeText;
                        break;
                    case 42: //成长提高，敏捷成长 +50
                        if (effectNames[12]) {
                            var name = TextManager.param(e.dataId);
                            text = c + name + s + effectNames[12] + c + ' +' + e.value1;
                        }
                        break;
                    case 43: //习得技能，习得技能: 自爆
                        if (effectNames[13]) {
                            var name = $dataSkills[e.dataId].name;
                            if (name) text = s + effectNames[13] + c + name;
                        }
                        break;
                    case 44:
                        /*                         if (effectNames[14]) {
                                                    var name = $dataCommonEvents[e.dataId].name;
                                                    if (name) text = s + effectNames[14] + ':' + c + name;
                                                } */
                        break;
                }
                if (text) this._data.push(text);
            }
        }


        if (item.params) {
            for (var i = 0; i < 8; i++) {
                var value = item.params[i];
                if (value !== 0) {
                    var ud = value > 0 ? g : r;
                    var sym = value > 0 ? '+' : '';
                    this._data.push(s + TextManager.param(i) + ud + sym + value);
                }
            }
        }
        //TAGOST，类型为params
/*        if (item.params) {
            for (var i = 0; i < 8; i++) {
                if($gameActors._data[1].evalParamPlus(item, i)){var value = Math.floor($gameActors._data[1].evalParamPlus(item, i))}else{var value = item.params[i];}
                if (value !== 0) {
                    var ud = value > 0 ? g : r;
                    var sym = value > 0 ? ' +' : ' -';
                    this._data.push(s + TextManager.param(i) + ud + sym + Math.abs(value));
                }
            }
        }

        //TAGOST，类型为释放距离
/*         if (item._range && item.occasion != 3) {
            if (item.wtypeId != undefined) {
                var value = item._range;
                var ud = value > 0 ? g : r;
                var sym = value > 0 ? ' +' : '';
                this._data.push(s + '释放距离: ' + ud + sym + value);
            } else {
                var value = item._range;
                var ud = value > 0 ? g : r;
                this._data.push(s + '释放距离: ' + ud + value);
            }
        }
		////技能提升
        if (item._improveskill) {
            for (var i = 0; i < item._improveskill.length; i++) {
				if($dataSkills[item._improveskill[i][0]]){
					this._data.push(s + '技能 ' + $dataSkills[item._improveskill[i][0]].name + ud + ' + ' + item._improveskill[i][1]);
				}
            }
        } */
		
        //TAGOST，类型为traits
        if (item.traits) {
            for (var i = 0, max = item.traits.length; i < max; i++) {
                var trait = item.traits[i];
                var vocab = paramVocab;
                var dataId = trait.dataId;
                var value = trait.value;

                //针对默认值100的属性
                var ud = value >= 1.0 ? g : r;
                var du = value < 1.0 ? g : r;
                var sym = value >= 1.0 ? ' +' : ' -';

                //针对抵抗几率反向显示
                var tm = value < 1.0 ? ' +' : ' -';

                //针对命中率
                var mud = value > 0 ? g : r;
                var msym = value > 0 ? ' +' : ' ';


                //TAGOST，修改百分比显示字符串，替换所有Math.floor(value * 100)
                var is100Plus = Math.abs(value < 0 || value == 1 ? value * 1000 / 10 : (1000 - value * 1000) / 10);

                text = '';
                switch (trait.code) {
                    case 11: //抵抗几率，水抵抗几率 +50%，这里的加其实是游戏里的减，实际公式是水有效度-50%，以下类推
                        if (vocab[0][0] && value !== 1.0) {
                            var ele = $dataSystem.elements[dataId];
                            text = c + ele + s + vocab[0][0] + du + tm + is100Plus + '%';
                        }
                        break;
                    case 12:
                        if (vocab[0][1] && value !== 1.0) {
                            var param = TextManager.param(dataId);
                            text = c + param + s + vocab[0][1] + ud + sym + is100Plus + '%';
                        }
                        break;
                    case 13: //抵抗几率，诅咒抵抗几率 -100%
                        if (vocab[0][0] && value !== 1.0) {
                            var state = $dataStates[dataId].name;
                            text = c + state + s + vocab[0][0] + du + tm + is100Plus + '%';
                        }
                        break;
                    case 14:
                        if (vocab[0][2]) {
                            var state = $dataStates[dataId].name;
                            text = c + state + s + vocab[0][2];
                        }
                        break;
                    case 21: //基础属性值，敏捷 +5%
                        if (value !== 1.0) {
                            var param = TextManager.param(dataId);
                            text = s + param + ud + sym + is100Plus + '%';
                        }
                        break;
                    case 22: //Param Text2 相关
                        //注意，这些属性默认为0：闪避率,暴击率,暴击闪避,魔法闪避,魔法反射率,反击率,HP再生率,MP再生率,TP再生率
                        var xparam = vocab[1][dataId];
                        if (xparam >= 0 && value !== 0) {
                            //if (dataId === 0 && xparam) xparam = TextManager.param(8);
                            //if (dataId === 1 && xparam) xparam = TextManager.param(9);
                            // if (dataId === 7 && xparam) xparam = TextManager.hpA + xparam;
                            // if (dataId === 8 && xparam) xparam = TextManager.mpA + xparam;
                            // if (dataId === 9 && xparam) xparam = TextManager.tpA + xparam;
                            ///if (dataId === 0) {
                                text = s + xparam + mud + msym + (value * 1000 / 10) + '%';
                                break;
                            ///}
                            //TAGOST，针对默认为0的属性
                            /* var ud = value < 0 ? r : g;
                            var sym = value < 0 ? ' -' : ' +';
                            text = s + xparam + ud + sym + is100Plus + '%'; */
                        }
                        break;
                    case 23: //Param Text3
                        var sparam = vocab[2][dataId];
                        if (sparam && value !== 1.0) {
                            if (dataId === 0) ud = c;
                            if (dataId === 4) {
                                sparam = TextManager.mpA + sparam;
                                // ud = du;
                            }
                            if (dataId === 5) TextManager.tpA + sparam;
                            if (dataId === 6 || dataId === 7 || dataId === 8) {
                                ud = du;
                                // sym = tm;
                            }
                            text = s + sparam + ud + sym + is100Plus + '%';
                        }
                        break;
                    case 31: //Param Text4
                        if (vocab[3][0]) {
                            var ele = $dataSystem.elements[dataId];
                            text = s + vocab[3][0] + c + ele;
                        }
                        break;
                    case 32: //Param Text4
                        if (vocab[3][1] && value > 0) {
                            var state = $dataStates[dataId].name;
                            // text = s + vocab[3][1] + c + state + ' ' + is100Plus + '%';
                            text = s + vocab[3][1] + c + state;
                        }
                        break;
                    case 33: //Param Text4 攻击速度
                        if (vocab[3][2] && value !== 0) {
                            var ud = value > 0 ? g : r;
                            var sym = value > 0 ? ' +' : ' ';
                            text = s + vocab[3][2] + ud + sym + value;
                        }
                        break;
                    case 34: //Param Text4 攻击次数
                        if (vocab[3][3] && value !== 0) {
                            var ud = value > 0 ? g : r;
                            var sym = value > 0 ? ' +' : ' ';
                            text = s + vocab[3][3] + ud + sym + value;
                        }
                        break;
                    case 41:
                    case 42:
                        var stype = $dataSystem.skillTypes[dataId];
                        var v = trait.code === 41 ? vocab[4][0] : vocab[4][1];
                        if (v && stype) text = s + v + c + stype;
                        break;
                    case 43:
                    case 44:
                        var skill = $dataSkills[dataId];
                        var v = trait.code === 43 ? vocab[4][2] : vocab[4][3];
                        if (v && skill) text = s + v + c + skill.name;
                        break;
                    case 51:
                    case 52:
                        var type = trait.code === 51 ? $dataSystem.weaponTypes[dataId] : $dataSystem.armorTypes[dataId];
                        var v = trait.code === 51 ? vocab[5][0] : vocab[5][1];
                        if (v && type) text = s + v + c + type;
                        break;
                    case 53:
                    case 54:
                        var etype = $dataSystem.equipTypes[dataId];
                        var v = trait.code === 53 ? vocab[5][2] : vocab[5][3];
                        if (v && etype) text = s + v + c + etype;
                        break;
                    case 55:
                        if (vocab[5][4]) text = s + vocab[5][4];
                        break;
                    case 61:
                        if (vocab[6][0] && value > 0) text = s + vocab[6][0] + ud + sym + (value * 100) + '%';
                        break;
                    case 62:
                        if (vocab[6][1 + dataId]) {
                            text = s + vocab[6][1 + dataId];
                        }
                        break;
                    case 63:
                        if (vocab[6][5]) text = s + vocab[6][5] + defeatText[dataId];
                        break;
                    case 64:
                        if (vocab[6][6 + dataId]) text = s + vocab[6][6 + dataId] + sym + value * 100 + '%';
                        break;
                    case 111:
                        if (vocab[0][0] && value !== 0) {
                            var ele = $dataSystem.elements[dataId];
                            // du = value < 0 ? g : r;
                            text = c + ele + s + vocab[0][0] + ud + sym + is100Plus + '%';
                        }
                        break;
                    case 112:
                        if (vocab[0][1] && value !== 0) {
                            var param = TextManager.param(dataId);
                            // du = value < 0 ? g : r;
                            text = c + param + s + vocab[0][1] + ud + sym + is100Plus + '%';
                        }
                        break;
                    case 113:
                        if (vocab[0][0] && value !== 0) {
                            var state = $dataStates[dataId].name;
                            // du = value < 0 ? g : r;
                            text = c + state + s + vocab[0][0] + ud + sym + is100Plus + '%';
                        }
                        break;
                    case 121:
                        if (value !== 0) {
                            var param = TextManager.param(dataId);
                            text = s + param + ud + sym + value;
                        }
                        break;
                    case 123:
                        var sparam = vocab[2][dataId];
                        if (sparam && value !== 0) {
                            // ud = value > 0 ? g : r;
                            // du = value < 0 ? g : r;
                            if (dataId === 0) ud = c;
                            if (dataId === 4) {
                                sparam = TextManager.mpA + sparam;
                                // ud = du;
                            }
                            if (dataId === 5) TextManager.tpA + sparam;
                            if (dataId === 6 || dataId === 7 || dataId === 8) {
                                ud = du;
                                // sym = tm;
                            }
                            text = s + sparam + ud + sym + is100Plus + '%';
                        }
                        break;
                }

                if (text) this._data.push(text);
            }
        }

        //TAGOST，修改套装效果显示
		if (item!=null &&((item._cusquip != undefined&&item._cusquip._itemId!=0) || item._cusquip_1)) {
if(this.isequip){
	if(item._cusquip != undefined&&item._cusquip._itemId!=0){
		if(hascus(this._actor._cusequips, item._cusquip)){
		this._data.push(g+item._cusquip.object().name);		
		}else{
		this._data.push(item._cusquip.object().name);		
		}
	}else{
		for(var l = 0;l<item._cusquip2.length;l++){
			if(item._cusquip2[l]._itemId > 0){	
			
			if(hascus(this._actor._cusequips, item._cusquip2[l])){	
		this._data.push("\\C[24]"+item._cusquip2[l].object().name+g+l+g+'件套:' + g+item._cusquip2[l].object().description);		
			}else{
		this._data.push("\\C[24]"+item._cusquip2[l].object().name+l+'件套:'+item._cusquip2[l].object().description);		
			}
			
			}
		}	
	}

}else{

	if(item._cusquip != undefined&&item._cusquip._itemId!=0){

	this._data.push(item._cusquip.object().name);		

		}else{
			var _cusequips = SceneManager._scene._actor._cusequips;	
	/*for(var l = 0;l<item._cusquip2.length;l++){
		
		//console.log(_cusequips)
		var ll = ll || 0;
		if(item._cusquip2[l]._itemId > 0){	
		
		if(_cusequips[ll]){
			//console.log(_cusequips[ll])
			//console.log(1)
			//this._data.push("\\C[24]"+item._cusquip2[l].object().name+l+'件套:\n'+item._cusquip2[l].object().description)+'\n';		
			this._data.push("\\C[24]"+item._cusquip2[l].object().name+l+'件套:');
			eval(item._cusquip2[l].object().description);
			var len = this._data.length;
			for(var k=0;k<len;k++){
				this._data[k]="\\C[24]"+this._data[k];
			}
		}else{
			//console.log(_cusequips[ll])
			//console.log(2)
			//this._data.push("\\C[7]"+item._cusquip2[l].object().name+l+'件套:\n'+item._cusquip2[l].object().description)+'\n';		
			this._data.push("\\C[7]"+item._cusquip2[l].object().name+l+'件套:');
			/////////////eval(item._cusquip2[l].object().description);
			var len = this._data.length;
			for(var k=0;k<len;k++){
				this._data[k]="\\C[7]"+this._data[k];
			}
		}
		ll++;
	}	
		}*/
			this._data.push("");
			if(item.cusequipneed){
				var actor = SceneManager._scene._actor;
				var suit = item.cusequipneed;
				//var suitName;
				//console.log(suit[0])
				var itm = suit[0].object();
				//console.log(itm)
				for(var kkk=0;kkk<itm._cusquip2.length;kkk++){
					if(itm._cusquip2[kkk]._itemId>0){
						var suitName = itm._cusquip2[kkk].object().name;
						/////console.log(suitName)
						this._data.push("\\C[24]"+suitName);
						this._data.push('');
						break;
					}
				}
				for(var kk=0;kk<suit.length;kk++){
					var n = suit[kk].object().name;
					if(actor.isEquipped(suit[kk].object()) || actor.testhasItem(suit[kk].object())){
						this._data.push("\\C[24]"+n);
					}else{
						this._data.push("\\C[7]"+n);
					}
				}
			}
			this._data.push("");
		for(var l = 0;l<item._cusquip2.length;l++){
				
				//console.log(_cusequips)
				var ll = ll || 0;
			if(item._cusquip2[l]._itemId > 0){	
				
				if(_cusequips[ll]){
					//console.log(_cusequips[ll])
					//console.log(1)
					//this._data.push("\\C[24]"+item._cusquip2[l].object().name+l+'件套:\n'+item._cusquip2[l].object().description)+'\n';		
					this._data.push("\\C[24]"/*+item._cusquip2[l].object().name*/+'['+l+']'+'套装效果:');
					var params = item._cusquip2[l].object().description.split('#');
					for(var k=0;k<params.length;k++){
						this._data.push("\\C[4]"+params[k]);
					}
				}else{
					//console.log(_cusequips[ll])
					//console.log(2)
					//this._data.push("\\C[7]"+item._cusquip2[l].object().name+l+'件套:\n'+item._cusquip2[l].object().description)+'\n';		
					this._data.push("\\C[7]"/*+item._cusquip2[l].object().name*/+'['+l+']'+'套装效果:');
					var params = item._cusquip2[l].object().description.split('#');
					for(var k=0;k<params.length;k++){
						this._data.push("\\C[7]"+params[k]);
					}
				}
				ll++;
			}	
		}

		}	
}
        } 		
		if (item.data) this._data = this._data.concat(item.data);
        if (afterInfos) this._data = this._data.concat(afterInfos);
		



    };

    Window_MiniInfo.prototype.calcWidth = function () {
        var w = 32;
        var ic = 0;
        var nw = 0;
        if (this._item && this._item.name) {
            var name = this._item.name;
            if (this._item.iconIndex) name = '\\I[' + this._item.iconIndex + ']' + name;
            name = name.replace(/\\C\[\d+\]/gi, '');
            name = name.replace(/\\I\[\d+\]/gi, function () {
                ic += 1;
                return '';
            }.bind(this));
            nw = this.textWidth(name) + ic * (this.standardFontSize() + 8);
        }
        for (var i = 0, max = this._data.length; i < max; i++) {
            var text = this._data[i];
            text = text.replace(/\\C\[\d+\]/gi, '');
            text = text.replace(/\\I\[\d+\]/gi, function () {
                ic += 1;
                return '';
            }.bind(this));
            var n = this.textWidth(text) + ic * (this.standardFontSize() + 8);
            if (n > w) w = n;
        }
        w = w * this._maxCols;
        w = nw > w ? nw : w;
        return w + 32;
    };

    Window_MiniInfo.prototype.calcHeight = function () {
        return (Math.ceil(this._data.length / this._maxCols) + this.exRow()) * (this.standardFontSize() + 2) + this.standardPadding() * 2 + 24;
    };

    Window_MiniInfo.prototype.refresh = function () {
        this.createContents();
        this.contents.clear();
        var fs = this.standardFontSize() + 2;
        var oy = 8;
        if (this.exRow()) {
            oy += 8;
            var name = this._item.name;
            if (this._item.iconIndex) name = '\\I[' + this._item.iconIndex + ']' + name;
            this.drawTextEx(name, 8, 4);
            this.contents.paintOpacity = 255;
            this.contents.fillRect(4, fs + 12, this.contentsWidth() - 8, 2, this.normalColor());
            this.contents.paintOpacity = 255;
        }
        for (var i = 0, max = this._data.length; i < max; i++) {
            var x = 6 + Math.floor(i / (max / this._maxCols)) * Math.floor(this.contentsWidth() / 2);
            var y = ((i % Math.ceil(max / this._maxCols)) + this.exRow()) * fs + oy;
            this.drawTextEx(this._data[i], x, y);
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////


    var __WSelectable_setHelpWindowItem = Window_Selectable.prototype.setHelpWindowItem;
    Window_Selectable.prototype.setHelpWindowItem = function(item) {
        __WSelectable_setHelpWindowItem.call(this, item);
        this.setMiniWindow(item);
    };

    var __WSelectable_deactivate = Window_Selectable.prototype.deactivate;
    Window_Selectable.prototype.deactivate = function() {
        __WSelectable_deactivate.call(this);
        if (this._miniInfoWindow) this._miniInfoWindow.close();
    };

    var __WSelectable_processHandling = Window_Selectable.prototype.processHandling;
    Window_Selectable.prototype.processHandling = function() {
        __WSelectable_processHandling.call(this);
        if (this.isOpenAndActive() && this._miniInfoWindow && this.isIwSwitchTriggered()) {
            this._miniInfoWindow._showInfo = !this._miniInfoWindow._showInfo;
            if (this._miniInfoWindow._showInfo) {
                this._miniInfoWindow.open();
                this.updateHelp();
            }
            if (!this._miniInfoWindow._showInfo) this._miniInfoWindow.close();
        }
    };

    Window_Selectable.prototype.isIwSwitchTriggered = function() {
        for (var i = 0, max = switchKey.length; i < max; i++) {
            var key = switchKey[i];
            if (Input.isTriggered(key)) return true;
        }
        return false;
    };

    Window_Selectable.prototype.setMiniWindow = function(item) {
        if (this._miniInfoWindow) {
            if (this.active && item) {
                var rect = this.itemRect(this.index());
                rect.x = rect.x + this.x;
                rect.y = rect.y + rect.height + this.y + this.standardPadding() + 4;
                rect.padding = this.standardPadding();
                this._miniInfoWindow.setItem(item, rect);
            } else {
                this._miniInfoWindow.close();
            }
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    Scene_Base.prototype.createMiniWindow = function() {
        this._miniWindow = new Window_MiniInfo();
        if (this._buyWindow) this._buyWindow._miniInfoWindow = this._miniWindow;
        if (this._sellWindow) this._sellWindow._miniInfoWindow = this._miniWindow;
        if (this._slotWindow) this._slotWindow._miniInfoWindow = this._miniWindow;
        if (this._itemWindow) this._itemWindow._miniInfoWindow = this._miniWindow;
		if(this.iscuseqip == true){this._miniWindow.isequip = true;this._miniWindow._actor = this.actor();}
        this.addChild(this._miniWindow);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SItem_create = Scene_Item.prototype.create;
    Scene_Item.prototype.create = function() {
        __SItem_create.call(this);
        if (useSceneItem){this.iscuseqip = false; this.createMiniWindow();}
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SSkill_create = Scene_Skill.prototype.create;
    Scene_Skill.prototype.create = function() {
        __SSkill_create.call(this);
        if (useSceneSkill){this.iscuseqip = false; this.createMiniWindow();}
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SEquip_create = Scene_Equip.prototype.create;
    Scene_Equip.prototype.create = function() {
        __SEquip_create.call(this);
        if (useSceneEquip){this.iscuseqip = false;this.createMiniWindow();}
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SShop_create = Scene_Shop.prototype.create;
    Scene_Shop.prototype.create = function() {
        __SShop_create.call(this);
        if (useSceneShop){this.iscuseqip = false; this.createMiniWindow();}
    };

    ////////////////////////////////////////////////////////////////////////////////////


    Window_MapSelectSkill.prototype.callUpdateHelp = function() {
        if (this.active && this._miniInfoWindow) {
            this.updateHelp();
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////////
    Scene_Base.prototype.createMiniWindow = function() {
        this._miniWindow = new Window_MiniInfo();
        if (this._buyWindow) {
            this._buyWindow._miniInfoWindow = this._miniWindow
        };
        if (this._sellWindow) {
            this._sellWindow._miniInfoWindow = this._miniWindow
        };
        if (this._slotWindow) {
            this._slotWindow._miniInfoWindow = this._miniWindow
        };
        if (this._itemWindow) {
            this._itemWindow._miniInfoWindow = this._miniWindow
        };
        if (this._mapSelectSkillWindow) {
            this._mapSelectSkillWindow._miniInfoWindow = this._miniWindow;
        }
        this.addChild(this._miniWindow);

    };
    //////////////////////////////////////////////////////////////////////////////////////////
    var __SMap_create = Scene_Map.prototype.createAllWindows
    Scene_Map.prototype.createAllWindows = function() {
        __SMap_create.call(this);
        if (useSceneSkill) {
            this.createMiniWindow();

        }
    };
	



}());