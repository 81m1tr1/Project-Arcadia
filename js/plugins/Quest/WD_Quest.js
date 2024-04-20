//=============================================================================
// Plugin Name: QuestLog
// Author: Winthorp Darkrites (Winter Dream Games Creator)
// Description: Create a questlog to manage your quests
// Use: Feel free to use for private and commercial projects. Feel free to edit. Please give credits.
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Custom Quest Plugin for RPG Maker MZ
 * @version 1.3
 * @author Winthorp Darkrites
 * @url https://ko-fi.com/winterdream
 *
 * @param linebreak1
 * @text ===Main options===
 * @desc The main window options
 * @default ================
 *
 * @param Title
 * @text Title
 * @desc Set the title of the QuestLog
 * @default QuestLog
 *
 * @param fontsize
 * @text Title Font Size
 * @desc The size of the font for the Scene Title
 * @default 40
 *
 * @param dynamicDescSize
 * @text Dynamic Description Font Size
 * @type boolean
 * @desc Use dynamic font size for description? The plugin will choose a fitting value from 100 to 10 font size
 * @default false
 *
 * @param descriptionSize
 * @text Quest Description Font Size
 * @desc The size of the font for the description of the Quest (If not Dynamic)
 * @default 20
 *
 * @param infoalign
 * @text Quest Info Alignment
 * @desc Select how to align the informations in the quest description (Dynamic is always left aligned)
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param listSize
 * @text Font Size in the list
 * @desc The size of the font of the Quest's name in the quests list
 * @default 20
 *
 * @param listAlign
 * @text Quest List Align
 * @desc Select how to align the quest in the QuestLog list
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param linebreak2
 * @text ===Text Options===
 * @desc Select your terms
 * @default ================
 *
 * @param giverprefix
 * @text Giver Prefix
 * @desc How the "From:" prefix is shown in the Quest Giver
 * @default From:
 *
 * @param areaprefix
 * @text Area Prefix
 * @desc How the "Area:" prefix is shown in the Quest Area
 * @default Area:
 *
 * @param statusname
 * @text Status Name
 * @desc How the "Status:" is shown for Quest Completion
 * @default Status:
 *
 * @param questcompleted
 * @text Quest Completed
 * @desc Word to show if quest is completed
 * @default Completed
 *
 * @param questongoing
 * @text Quest Ongoing
 * @desc Word to show if quest is ongoing
 * @default Ongoing
 *
 * @param questfailed
 * @text Quest Failed
 * @desc Word to show if quest is failed
 * @default Failed
 *
 * @param linebreak3
 * @text ===Command Button===
 * @desc Set the preferences for the menu command
 * @default ================
 *
 * @param menucommand
 * @type boolean
 * @text Menu Command
 * @desc Add the Quest command to the game menu
 * @default False
 *
 * @param commandname
 * @text Command Name
 * @desc Set the name of the command (if activated)
 * @default QuestLog
 *
 * @command line1
 * @text --- Quest Management ---
 * @desc Series of commands to manage your quests 
 *
 * @command CreateQuest
 * @text Create Quest
 * @desc Create a new quest.
 * @arg id
 * @type number
 * @text ID
 * @desc The ID of the quest. (Minimum 1)
 * @min 1
 *
 * @arg icon
 * @type number
 * @text Icon
 * @desc The icon index to display for the quest.
 *
 * @arg name
 * @type string
 * @text Name
 * @desc The name of the quest.
 *
 * @arg longTitle
 * @type string
 * @text Long Title
 * @desc A longer title for the description page, leave blank to use the Quest Name.
 *
 * @arg index
 * @type number
 * @text Index
 * @desc The indexing number for the quest in the list.
 *
 * @arg giver
 * @type string
 * @text Giver
 * @desc Information on the quest giver.
 *
 * @arg area
 * @type string
 * @text Area
 * @desc Information on the location of the quest.
 *
 * @arg description
 * @type string
 * @text Description
 * @desc Information on the quest.
 *
 * @arg status
 * @text Status
 * @type select
 * @option Ongoing
 * @value ongoing
 * @option Completed
 * @value completed
 * @option Failed
 * @value failed
 * @desc Whether the quest is completed, ongoing or failed.
 * @default ongoing
 *
 * @command RemoveQuestNew
 * @text Remove Quest
 * @desc Removes quest searching by ID or Name.
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to remove (leave 0 if using Name).
 *
 * @arg questName
 * @text Quest Name
 * @desc Name of the quest to be removed (leave blank if using ID).
 * @type text
 *
 * @command SetCompletion
 * @text Set Quest Completion Parameter
 * @desc Sets if a quest is completed or not searching by ID or Name.
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to edit. (Leave 0 if you use the name)
 * @default 0
 *
 * @arg questName
 * @text Quest Name
 * @desc The name of the quest to edit. (Must be exact name, leave blank if you use ID)
 * @default
 *
 * @arg status
 * @text Status
 * @type select
 * @option Ongoing
 * @value ongoing
 * @option Completed
 * @value completed
 * @option Failed
 * @value failed
 * @desc Whether the quest is completed, ongoing or failed.
 * @default ongoing
 *
 * @command EditQuestDescription
 * @text Edit Quest Description
 * @desc Edits the description of a quest by ID or name.
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to edit. (Leave 0 if you use the name)
 * @default 0
 *
 * @arg questName
 * @text Quest Name
 * @desc The name of the quest to edit. (Must be exact name, leave blank if you use ID)
 * @default
 *
 * @arg newDescription
 * @text New Description
 * @desc The new description for the quest.
 * @default
 *
 * @command EditQuestIcon
 * @text Edit Quest Icon
 * @desc Edits the Icon of a quest by ID or name.
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to edit. (Leave 0 if you use the name)
 * @default 0
 *
 * @arg questName
 * @text Quest Name
 * @desc The name of the quest to edit. (Must be exact name, leave blank if you use ID)
 * @default
 *
 * @arg iconID
 * @type number
 * @text New Icon #
 * @desc The new icon number.
 * @default 0
 *
 * @command line2
 * @text --- Plugin Functionality ---
 * @desc Series of command to change words and fonts.
 *
 * @command SetTitle
 * @text Set QuestLog Title
 * @desc Set the title of the QuestLog.
 *
 * @arg title
 * @text Title
 * @desc The new title of the QuestLog.
 * @type string
 *
 * @command SetQuestTitleFontSize
 * @text Set QuestLog Title's Font Size
 * @desc Sets the font size of the quest title.
 *
 * @arg fontSize
 * @type number
 * @text Font Size
 * @desc The new font size value for the quest title.
 *
 * @command SetQuestInfoFontSize
 * @text Set Quest Description Font Size
 * @desc Set the Font Size of the Quest Description.
 *
 * @arg fontSize
 * @type number
 * @text Font Size
 * @desc The new font size value for the quest title.
 *
 * @command SetQuestListFontSize
 * @text Set Quest List Font Size
 * @desc Set Quests' Name Font Size in the Quest List
 *
 * @arg fontSize
 * @type number
 * @text Font Size
 * @desc The new font size value for the quest title.
 *
 * @command SetGiverPrefix
 * @text Set Giver Prefix
 * @desc Set the prefix for the quest's "Giver:" descriptor.
 *
 * @arg prefix
 * @text Prefix
 * @desc The new prefix for the quest giver (include ":" if you want them).
 * @type string
 *
 * @command SetAreaPrefix
 * @text Set Area Prefix
 * @desc Set the prefix for the quest's "Area:" descriptor.
 *
 * @arg prefix
 * @text Prefix
 * @desc The new prefix for the quest area (include ":" if you want them).
 * @type string
 *
 * @command SetStatusName
 * @text Set Status Prefix
 * @desc Set the name for the quest "Status:" prefix.
 *
 * @arg name
 * @text Name
 * @desc The new name for the quest status (include ":" if you want them).
 * @type string
 *
 * @command SetQuestCompleted
 * @text Set word for "Completed"
 * @desc Set the word for a completed quest.
 *
 * @arg completed
 * @text Completed
 * @desc The word to show for a completed quest.
 * @type string
 *
 * @command SetQuestOngoing
 * @text Set word for "Ongoing"
 * @desc Set the word for an ongoing quest.
 *
 * @arg ongoing
 * @text Ongoing
 * @desc The word to show for an ongoing quest.
 * @type string
 *
 * @command SetCommandName
 * @text Set Command Name
 * @desc Sets the name of the quest command in the game menu.
 *
 * @arg commandName
 * @type string
 * @text Command Name
 * @desc The name to set for the quest command in the game menu.
 *
 * @command line3
 * @text --- Game Editor Functionality ---
 * @desc Series of command to change words and fonts.
 *
 * @command OpenQuestScene
 * @text Open Quest Scene
 * @desc Opens the Quest Scene.
 *
 * @command CheckQuestCompletion
 * @text Check if Quest is completed
 * @desc Checks if Quest is completed and stores result in a Switch or Variable.
 *
 * @arg selectMode
 * @text Use Switch or Variable
 * @type select
 * @option Switch
 * @option Variable
 * @desc Switch is TRUE if completed, FALSE if not. Variable is 0 (ongoing), 1 (completed) or 2 (failed)
 * @default Switch
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to check. (Leave 0 if you use the name)
 * @default 0
 *
 * @arg questName
 * @text Quest Name
 * @desc The name of the quest to check. (Must be exact name, leave blank if you use ID)
 * @default
 *
 * @arg switchID
 * @type number
 * @text Switch/Variable ID
 * @desc The ID of the switch or variable to set
 * @default 1
 * @min 1
 *
 * @help WD_Quest.js
 *
 * The plugin creates a QuestLog that can will store your quests.
 *
 * The QuestLog can be called via script SceneManager.push(SceneManager.Scene_Quest);
 * or via Plugin Command or you can set the Parameter Menu Command true
 * to add a command in the game Menu
 *
 * You can edit both via parameter or plugin command (useful for translations)
 * the QuestLog title, the menu command text, the From: prefix, the Area:
 * prefix, the Status: prefix and the text used for "Completed" or "Ongoing"
 * quests
 *
 * The quest can be added via Plugin Command "Create Quest" and then they
 * will be displayed in the QuestLog ordered by their index.
 * Completed quest will still be visible but grayed out and pushed to the 
 * bottom of the list.
 *
 * Quests completion can be changed via Plugin Command, either by name
 * (must be exact name) or by quest ID
 *
 * Quests can also be completely removed (if you don't want to keep them
 * visible once completed or for whatever reason) via Plugin Command
 * either by name (must be exact name) or by quest ID
 *
 * If your game has a lot of quests I strongly advice to keep track of 
 * quest ID in some kind of note as the plugin doesn't show a full
 * list of the stored quest and their IDs
 *
 * NOTE: The Quest Description text can be split in different lines
 * by adding \n in the string. This works only for that field.
 *
 * You can find more scripts and games on my Ko-Fi page:
 * https://ko-fi.com/winterdream
 * and on my Itch.io page:
 * https://winterdreamgamescreator.itch.io/
 *
 * By using this plugin you accept the Terms of Use (https://drive.google.com/file/d/1l_GadoZh3ylSvRm4hAoT2WOUXTpePpHf/view?usp=sharing)
 *
 * //////////////////////////////////////////////////
 * VERSION 1.3.2 Changelog
 * - Fixed an old part of the code creating two problems: A black layer under
 *   the scene and no centering if the Game UI was changed from the System 2
 *   tab as reported from ryf and Puppet Knight
 * VERSION 1.3.1 Changelog
 * - Hotfix for a small bug that would turn the menu command name to "true",
 *   thanks to ryf for the report!
 * VERSION 1.3 Changelog
 * - Updated the code to a newer version with, but not limited to, tweaks
 *   to the save and load functionality.
 * - Added the "Failed" status to the Quests with the needed changes to 
 *   "Add Quest", "Set Completion" and "Check Completion". Added bits of
 *   code to allow retrocompatibility with the older versions.
 * - Added the option to Autoset the Description Font Size, the plugin will
 *   range from a font size of 100 to a font size of 10, trying to fit the
 *   text both in width and height. You still need to break the lines with
 *   \n as before. The autosize text is only left aligned due to a limitation
 *   of the DrawTextEx feature used. (On the positive side, it should accept
 *   the usual RMMZ text code like \I for icons, didn't tried it)
 * - Added the possibility to add a longer title that will be displayed in the
 *   Quest Informations window (while the short name will be used for the quest
 *   list on the left). If you don't need it just leave blank the field.
 * - Minor fix on a bug that could cause the menu button to change name due to
 *   a conflict with the Quest List items
 * VERSION 1.2.2 Changelog 
 * - Hotfix for changes made in 1.2.1 as Plugin Parameters from Plugin Manager
 *   where not correctly loaded (Report by Grillmonger)
 * VERSION 1.2.1 Changelog 
 * - Fixed an issue reported by Grillmonger where QuestList would wipe if game 
 *   was closed entrely and then reloaded. Upon further investigation the fix 
 *   was extended to the other Plugin Parameters too (Such as Title Font, etc..)
 *   who would not carry over the changes if done via Plugin Command
 * VERSION 1.2 Changelog
 * - Merged "Set Completion by ID / by Name" and "Remove Quest by ID / by Name"
 * - Changed font size for the Quest List and Quest Description, you can change
 *   them via Plugin Parameters or Plugin Command 
 * - Changed the alignemnt con Quest List from "left" to "Center", can be 
 *   changed via Plugin Parameter
 * - Created a command that checks if a quest is completed and stores the
 *   result in a Switch of your choice (ON for Complete, OFF for Ongoing)
 * - Created a plugin command to change the Quest Icon searching it by ID or 
 *   Name
 * VERSION 1.1 Changelog
 * - Added new plugin command to edit an existing quest 
 *   description by ID or Quest Name
 * - Added new Plugin Command to change FontSize
 * //////////////////////////////////////////////////
 *
 */

(function() {
	// Plugin parameters
	const pluginParams = PluginManager.parameters("WD_Quest");
	let questTitle = pluginParams["Title"] || "QuestLog";
	let giverPrefix = pluginParams["giverprefix"] || "From:";
	let areaPrefix = pluginParams["areaprefix"] || "Area:";
	let statusName = pluginParams["statusname"] || "Status:";
	let questCompleted = pluginParams["questcompleted"] || "Completed";
	let questOngoing = pluginParams["questongoing"] || "Ongoing";
	let questFailed = pluginParams["questfailed"] || "Failed";
	let showMenuCommand = pluginParams["menucommand"] === "true";
	let questMenuCommandName = pluginParams["commandname"] || "QuestLog";
	let fontSize = Number(pluginParams["fontsize"]) || 40;
	let infoAlign = pluginParams["infoalign"] || "center"; 
	let descriptionSize = Number(pluginParams["descriptionSize"]) || 20;
	let listSize = Number(pluginParams["listSize"]) || 20;
	let dynamicDescSize = pluginParams["dynamicDescSize"] === "true";
	const listAlign = pluginParams["listAlign"] || "center";

	//Global Array
	let questList = [];
	let commandIndex = -1;

	//Check if a new command is wanted
	if (showMenuCommand) {
	  const alias_Window_MenuCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
	  Window_MenuCommand.prototype.addOriginalCommands = function() {
		alias_Window_MenuCommand_addOriginalCommands.call(this);
		this.addCommand(questMenuCommandName, "quest", true);
	  };

	  const alias_Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
	  Scene_Menu.prototype.createCommandWindow = function() {
		alias_Scene_Menu_createCommandWindow.call(this);
		this._commandWindow.setHandler("quest", this.commandQuest.bind(this));
	  };

	  Scene_Menu.prototype.commandQuest = function() {
		SceneManager.push(Scene_Quest);
	  };
	}
  
	// Create the Scene_Quest class
	function Scene_Quest() {
		this.initialize(...arguments);
	}

	Scene_Quest.prototype = Object.create(Scene_MenuBase.prototype);
	Scene_Quest.prototype.constructor = Scene_Quest;

	Scene_Quest.prototype.initialize = function() {
		Scene_MenuBase.prototype.initialize.call(this);
	};

	Scene_Quest.prototype.create = function() {
		Scene_MenuBase.prototype.create.call(this);
		this.createTitleWindow();
		this.createQuestListWindow();
		this.createQuestInfoWindow();
	};
	
	Scene_Quest.prototype.createTitleWindow = function () {
	  const rect = this.titleWindowRect();
	  this._titleWindow = new Window_Title(rect);
	  this.addWindow(this._titleWindow);
	};

	Scene_Quest.prototype.titleWindowRect = function() {
		const wx = 0;
		const wy = 0;
		const ww = Graphics.boxWidth;
		const wh = Graphics.boxHeight * 0.2;
		
		return new Rectangle(wx, wy, ww, wh);
	};
	
	Scene_Quest.prototype.createQuestListWindow = function () {
	  const rect = this.questListWindowRect();
	  this._questListWindow = new Window_QuestList(rect);
	  this._questListWindow.setHandler("ok", this.onQuestListOk.bind(this));
	  this._questListWindow.setHandler("cancel", this.onQuestListCancel.bind(this));
	  this.addWindow(this._questListWindow);
	};

	Scene_Quest.prototype.questListWindowRect = function() {
		const wx = 0;
		const wy = Graphics.boxHeight * 0.2;
		const ww = Graphics.boxWidth * 0.3;
		const wh = Graphics.boxHeight * 0.8;
		
		return new Rectangle(wx, wy, ww, wh);
	};
	
	Scene_Quest.prototype.createQuestInfoWindow = function () {
	  const rect = this.questInfoWindowRect();
	  this._questInfoWindow = new Window_QuestInfo(rect);
	  this.addWindow(this._questInfoWindow);
	};

	Scene_Quest.prototype.questInfoWindowRect = function() {
		const wx = Graphics.boxWidth * 0.3;
		const wy = Graphics.boxHeight * 0.2;
		const ww = Graphics.boxWidth * 0.7;
		const wh = Graphics.boxHeight * 0.8;
		
		return new Rectangle(wx, wy, ww, wh);
	};
	
	Scene_Quest.prototype.onQuestListOk = function () {
		this._questListWindow.activate();
	};
	
	Scene_Quest.prototype.onQuestListCancel = function () {
		this.popScene();
	};
	
	Scene_Quest.prototype.needsCancelButton = function() {
		return true;
	};

	// Add the Scene_Quest to the SceneManager
	SceneManager.Scene_Quest = Scene_Quest;

	// Create the Window_Title class
	function Window_Title() {
		this.initialize(...arguments);
	}

  Window_Title.prototype = Object.create(Window_Base.prototype);
  Window_Title.prototype.constructor = Window_Title;

	Window_Title.prototype.initialize = function(rect) {
	  Window_Base.prototype.initialize.call(this, rect);

	  loadParameters();
	  const spacingPercent = 0.25;
	  const spacing = this.height * spacingPercent;
	  this.fontSize = fontSize
	  this.contents.fontSize = fontSize;
	  this.drawText(questTitle, 0, spacing, this.contentsWidth(), "center");
	};

	// Create the Window_QuestList class
	function Window_QuestList() {
		this.initialize(...arguments);
	}

	Window_QuestList.prototype = Object.create(Window_Command.prototype);
	Window_QuestList.prototype.constructor = Window_QuestList;

	Window_QuestList.prototype.initialize = function(rect) {
	  this.sortQuestList();
	  Window_Command.prototype.initialize.call(this, rect);
	};

	Window_QuestList.prototype.sortQuestList = function() {
		loadQuestList();
		let questListOrdered = [];

		//Compatibility mode
		const compatibilityQuests = questList.map(checkCompatibility);

		function checkCompatibility(quest) {
			if (quest.hasOwnProperty("complete") && !quest.hasOwnProperty("status")) {
				if (quest.complete) {
					quest.status = "completed";
				} else {
					quest.status = "ongoing";
				}
			}
			return quest;
		}

		const ongoingQuests = compatibilityQuests.filter((quest) => quest.status === "ongoing");
			ongoingQuests.sort(function(a, b) {
			return a.index - b.index;
		});
		const completedQuests = compatibilityQuests.filter((quest) => quest.status === "completed");
			completedQuests.sort(function(a, b) {
			return a.index - b.index;
		});
		const failedQuests = compatibilityQuests.filter((quest) => quest.status === "failed");
			failedQuests.sort(function(a, b) {
			return a.index - b.index;
		});

		questListOrdered = ongoingQuests.concat(completedQuests, failedQuests);
		questList = questListOrdered;
		saveQuestList();
	};

	Window_QuestList.prototype.makeCommandList = function() {

	  for (let i = 0; i < questList.length; i++) {
		const quest = questList[i];
		loadParameters();
		this.fontSize = listSize
	    this.contents.fontSize = listSize;
		this.addCommand(quest.name, "questList", true, i);
	  }
	};

	Window_QuestList.prototype.itemTextAlign = function() {
	  return listAlign;
	};

	Window_QuestList.prototype.drawItem = function(index) {
	  loadQuestList();
	  const itemRect = this.itemRect(index);
	  const quest = questList[index];
	  if (quest) {
		const rect = itemRect.clone();
		//Compatibility mode
		if (quest.hasOwnProperty("complete") && !quest.hasOwnProperty("status")) {
			if (quest.complete) {
				quest.status = "completed";
			} else {
				quest.status = "ongoing";
			}
		}
		if (quest.status === "completed" || quest.status === true) { //Check boolean for older versions
		  this.changePaintOpacity(false);
		  this.changeTextColor("#808080");
		} else if (quest.status === "ongoing" || quest.status === false) { //Check boolean for older versions
		  this.changePaintOpacity(true);
		  this.resetTextColor();
		} else {
		  this.changePaintOpacity(false);
		  this.changeTextColor("#B22222");
		}

		this.drawText(this.commandName(index), rect.x, rect.y, rect.width, this.itemTextAlign());
	  }
	};

	let _alias_Window_QuestList_update = Window_QuestList.prototype.update;
	Window_QuestList.prototype.update = function() {
		_alias_Window_QuestList_update.call(this);
		const index = this.index();
		
		if (commandIndex !== index) {
			commandIndex = index;
			SceneManager._scene._questInfoWindow.refresh();
		}
	};
	
	// Create the Window_QuestInfo class
	function Window_QuestInfo() {
		this.initialize(...arguments);
	}

	Window_QuestInfo.prototype = Object.create(Window_Base.prototype);
	Window_QuestInfo.prototype.constructor = Window_QuestInfo;

	Window_QuestInfo.prototype.initialize = function(rect) {
	  Window_Base.prototype.initialize.call(this, rect);
	  this._quest = null;
	  this.refresh();
	};

	Window_QuestInfo.prototype.setQuest = function(quest) {
	  if (this._quest !== quest) {
		this._quest = quest;
		this.refresh();
	  }
	};

	Window_QuestInfo.prototype.clear = function() {
	  this.setQuest(null);
	};

	Window_QuestInfo.prototype.refresh = function() {
	  this.contents.clear();

	  if (this._quest) {
		const lineHeight = this.lineHeight();
		const quest = this._quest;
		
		//Compatibility Mode
		if (quest.hasOwnProperty("complete") && !quest.hasOwnProperty("status")) {
			quest.status = quest.complete;
		}

		this.drawQuestIcon(quest.icon);
		this.drawQuestName(quest);
		this.drawQuestGiver(quest.giver);
		this.drawQuestArea(quest.area);
		this.drawQuestInfo(quest.description);
		this.drawQuestStatus(quest.status);
	  }
	};
	
	Window_QuestInfo.prototype.checkQuestName = function(quest) {
		//Compatibility Mode
		if (!quest.hasOwnProperty("longTitle")) {
			return quest.name;
		}
		
		if (quest.longTitle === undefined || quest.longTitle === "" || quest.longTitle === "undefined") {
			return quest.name;
		} else {
			return quest.longTitle;
		}
	};

	Window_QuestInfo.prototype.drawQuestIcon = function(iconIndex) {
	  const x = 250
	  const y = 10
	  this.drawIcon(iconIndex, x, y);
	};
	
	Window_QuestInfo.prototype.drawQuestName = function(quest) {
	  const x = 0;
	  const y = this.lineHeight() * 1.5;
	  const width = this.contents.width;
	  const questDescName = this.checkQuestName(quest);
	  this.resetFontSettings();
	  this.drawText(questDescName, x, y, width, "center");
	};

	Window_QuestInfo.prototype.drawQuestGiver = function(giver) {
	  const x = 0;
	  const y = this.lineHeight() * 3;
	  const width = this.contents.width;
	  this.resetFontSettings();
	  loadParameters();
	  this.drawText(giverPrefix + " " + giver, x, y, width, "left");
	};

	Window_QuestInfo.prototype.drawQuestArea = function(area) {
	  const x = 0;
	  const y = this.lineHeight() * 4;
	  const width = this.contents.width;
	  this.resetFontSettings();
	  loadParameters();
	  this.drawText(areaPrefix + " " + area, x, y, width, "left");
	};

	Window_QuestInfo.prototype.drawQuestInfo = function(description) {
	  const x = 0;
	  const y = this.lineHeight() * 6;
	  const width = this.contents.width;
	  const lineHeight = this.lineHeight();

	  this.resetFontSettings();
	  
	  if (dynamicDescSize) {
		  let textEx = description.split("\\n").join("\n");
		  let resizingText = true;
		  let txtSize;
		  let fontInitialSize = 100;
		  
		  while (resizingText) {
			this.fontSize = fontInitialSize;
			this.contents.fontSize = fontInitialSize;
			  
			txtSize = this.textSizeExNoReset(textEx);
			if ((txtSize.width > this.contentsWidth()) || (txtSize.height > (this.contentsHeight() - y))) {
				fontInitialSize--;
				if (fontInitialSize < 10) {
					resizingText = false;
				}
			} else {
				resizingText = false;
			}
		  }
		  
		  const xSpacing = (this.contentsWidth() - txtSize.width) / 2;
		  
		  this.drawTextEx(textEx, xSpacing, y, this.contentsWidth());
	  } else {
		  // Split the description into separate lines
		  const lines = description.split("\\n");

		  // Draw each line of the description
		  for (let i = 0; i < lines.length; i++) {
			loadParameters();
			this.fontSize = descriptionSize
			this.contents.fontSize = descriptionSize;
			this.drawText(lines[i], x, y + lineHeight * i, width, infoAlign);
			this.fontSize = 26
			this.contents.fontSize = 26;
		  }
	  }
	};
	
	Window_QuestInfo.prototype.textSizeExNoReset = function(text) {
		const textState = this.createTextState(text, 0, 0, 0);
		textState.drawing = false;
		this.processAllText(textState);
		return { width: textState.outputWidth, height: textState.outputHeight };
	};
	
	Window_QuestInfo.prototype.drawQuestStatus = function(currentStatus) {
		const x = 0;
		const y = this.lineHeight() * 11;
		const width = this.contents.width;
		
		loadParameters();
		let statusText;
		switch (currentStatus) {
			case "ongoing":
			case false: //compatibility mode for old versions
				statusText = statusName + " " + questOngoing;
			break;
			
			case "completed":
			case true: //compatibility mode for old versions
				statusText = statusName + " " + questCompleted;
			break;
			
			case "failed":
				statusText = statusName + " " + questFailed;
			break;
		}
	  this.drawText(statusText, x, y, width, "right");
	};

	// Update the Scene_Quest class
	Scene_Quest.prototype.update = function() {
	  Scene_Base.prototype.update.call(this);
	  this.updateQuestInfo();
	};

	Scene_Quest.prototype.updateQuestInfo = function() {
		loadQuestList();
		const index = this._questListWindow.index();
		const quest = questList[index];
		this._questInfoWindow.setQuest(quest);
	};

	// Add the required functions to Window_QuestList
	Window_QuestList.prototype.currentQuest = function() {
		loadQuestList();
		const index = this.index();
		return questList[index];
	};

	// Plugin Commands
	PluginManager.registerCommand("WD_Quest", "CreateQuest", function(args) {
		let statusArg = args.status;
		
	//Compatibility mode
	if (args.complete !== undefined) {
		let isCompleted = args.complete === "true";
		if (isCompleted) {
		  statusArg = "completed";
		} else {
		  statusArg = "ongoing";
		}
	}
	
	const quest = {
		id: Number(args.id),
		icon: Number(args.icon),
		name: String(args.name),
		longTitle: String(args.longTitle),
		index: Number(args.index),
		giver: String(args.giver),
		area: String(args.area),
		description: String(args.description),
		status: String(statusArg)
	};
	
	questList.push(quest);
	saveQuestList();
	});
	
	PluginManager.registerCommand("WD_Quest", "SetTitle", function(args) {
	  questTitle = String(args.title);
	  saveParameters();
	});

	PluginManager.registerCommand("WD_Quest", "SetGiverPrefix", function(args) {
	  giverPrefix = String(args.prefix);
	  saveParameters();
	});

	PluginManager.registerCommand("WD_Quest", "SetAreaPrefix", function(args) {
	  areaPrefix = String(args.prefix);
	  saveParameters();
	});

	PluginManager.registerCommand("WD_Quest", "SetStatusName", function(args) {
	  statusName = String(args.name);
	  saveParameters();
	});

	PluginManager.registerCommand("WD_Quest", "SetQuestCompleted", function(args) {
	  questCompleted = String(args.completed);
	  saveParameters();
	});

	PluginManager.registerCommand("WD_Quest", "SetQuestOngoing", function(args) {
	  questOngoing = String(args.ongoing);
	  saveParameters();
	});
	
	PluginManager.registerCommand("WD_Quest", "OpenQuestScene", function() {
	  SceneManager.push(SceneManager.Scene_Quest);
	});


	PluginManager.registerCommand("WD_Quest", "SetCommandName", function (args) {
	  const commandName = args.commandName;
	  setCommandName(commandName);
	  saveParameters();
	});

	function setCommandName(commandName) {
	  questMenuCommandName = commandName;
	}
	
	PluginManager.registerCommand("WD_Quest", "EditQuestDescription", function(args) {
	  const questID = Number(args.questID);
	  const questName = String(args.questName);
	  const newDescription = String(args.newDescription);

	  // Find the quest by ID or name
	  let quest = null;
	  if (questID > 0) {
		quest = findQuestByID(questID);
	  } else if (questName !== "") {
		quest = findQuestByName(questName);
	  }

	  // If the quest is found, update the description
	  if (quest) {
		quest.description = newDescription;
		saveQuestList();
	  }
	});

	// Helper function to find a quest by ID
	function findQuestByID(questID) {
	  return questList.find(function(quest) {
		return quest.id === questID;
	  });
	}

	// Helper function to find a quest by name
	function findQuestByName(questName) {
	  return questList.find(function(quest) {
		return quest.name === questName;
	  });
	}
	
	PluginManager.registerCommand("WD_Quest", "SetQuestTitleFontSize", function(args) {
	  const newFontSize = Number(args.fontSize);
	  fontSize = newFontSize
	  saveParameters();
	});
	
	PluginManager.registerCommand("WD_Quest", "SetQuestInfoFontSize", function(args) {
	  const newInfoFontSize = Number(args.fontSize);
	  descriptionSize = newInfoFontSize
	  saveParameters();
	});
	
	PluginManager.registerCommand("WD_Quest", "SetQuestListFontSize", function(args) {
	  const newListFontSize = Number(args.fontSize);
	  listSize = newListFontSize
	  saveParameters();
	});

	PluginManager.registerCommand("WD_Quest", "SetCompletion", function(args) {
	  const questID = Number(args.questID);
	  const questName = String(args.questName);
	  let completion = args.status;
	  
	  //Compatibility mode
	  if (args.completion !== undefined && !completion) {
		  const isCompleted = args.completion === "true";
		  if (args.completion) {
			  completion = "completed";
		  } else {
			  completion = "ongoing";
		  }
	  }

	  // Find the quest by ID or name
	  let quest = null;
	  if (questID > 0) {
		quest = findQuestByID(questID);
	  } else if (questName !== "") {
		quest = findQuestByName(questName);
	  }

	  // If the quest is found, update the completion status
	  if (quest) {
		quest.status = completion;
		saveQuestList();
	  }
	});
	
	PluginManager.registerCommand("WD_Quest", "RemoveQuestNew", function(args) {
	  const questID = Number(args.questID);
	  const questName = String(args.questName);

	  // If the quest ID is provided, remove the quest by ID
	  if (questID > 0) {
		removeQuestByID(questID);
		saveQuestList();
	  } else if (questName !== "") {
		// If the quest name is provided, remove the quest by name
		removeQuestByName(questName);
		saveQuestList();
	  }
	});

	function removeQuestByID(questID) {
	  for (let i = 0; i < questList.length; i++) {
		if (questList[i].id === questID) {
		  questList.splice(i, 1);
		  break;
		}
	  }
	}

	function removeQuestByName(questName) {
	  for (let i = 0; i < questList.length; i++) {
		if (questList[i].name === questName) {
		  questList.splice(i, 1);
		  break;
		}
	  }
	}
	
	PluginManager.registerCommand("WD_Quest", "CheckQuestCompletion", function(args) {
	  const questID = Number(args.questID);
	  const questName = String(args.questName);
	  const switchID = Number(args.switchID);
	  const selectMode = String(args.selectMode);

	  // Find the quest by ID or name
	  let quest = null;
	  if (questID > 0) {
		quest = findQuestByID(questID);
	  } else if (questName !== "") {
		quest = findQuestByName(questName);
	  }

	  // If the quest is found, check the completion and set the switch
	  if (quest) {
		let completionStatus;
		if (quest.hasOwnProperty("complete") && !quest.hasOwnProperty("status")) {
			if (quest.complete) {
				completionStatus = "completed";
			} else {
				completionStatus = "ongoing";
			}
		} else {
			completionStatus = quest.status;
		}
		if (selectMode === "Variable") {
			switch (completionStatus) {
				case "completed":
					$gameVariables.setValue(switchID, 0);
				break;
				
				case "ongoing":
					$gameVariables.setValue(switchID, 1);
				break;
				
				case "failed":
					$gameVariables.setValue(switchID, 2);
				break;
			}
		} else {
			switch (completionStatus) {
				case "completed":
					$gameSwitches.setValue(switchID, true);
				break;
				
				default:
					$gameSwitches.setValue(switchID, false);
				break;
			}
		}
	  }
	});
	
	PluginManager.registerCommand("WD_Quest", "EditQuestIcon", function(args) {
	  const questID = Number(args.questID);
	  const questName = String(args.questName);
	  const newIcon = Number(args.iconID);

	  // Find the quest by ID or name
	  let quest = null;
	  if (questID > 0) {
		quest = findQuestByID(questID);
	  } else if (questName !== "") {
		quest = findQuestByName(questName);
	  }

	  // If the quest is found, update the description
	  if (quest) {
		quest.icon = newIcon;
		saveQuestList();
	  }
	});

	//Save and Load functions
	function saveQuestList() {
		$gameSystem.saveQuestList(questList);
	}

	Game_System.prototype.saveQuestList = function(questList) {
	  this._questList = questList;
	};
	
	function loadQuestList() {
		questList = $gameSystem.getQuestList();
	}
	
	Game_System.prototype.getQuestList = function() {
		if (!this._questList) {
			return [];
		} else {
			return this._questList;
		}
	};
	
	function saveParameters() {
		$gameSystem.savePluginParams();
	}
	
	Game_System.prototype.savePluginParams = function() {
	  this._questPluginParams = {
		questTitle: questTitle,
		giverPrefix: giverPrefix,
		areaPrefix: areaPrefix,
		statusName: statusName,
		questCompleted: questCompleted,
		questOngoing: questOngoing,
		questFailed: questFailed,
		questMenuCommandName: questMenuCommandName,
		fontSize: fontSize,
		descriptionSize: descriptionSize,
		listSize: listSize
	  };
	};
	
	function loadParameters() {
		const loadedData = $gameSystem.getPluginParams();
		
		questTitle = loadedData.questTitle;
		giverPrefix = loadedData.giverPrefix;
		areaPrefix = loadedData.areaPrefix;
		statusName = loadedData.statusName;
		questCompleted = loadedData.questCompleted;
		questOngoing = loadedData.questOngoing;
		questFailed = loadedData.questFailed;
		questMenuCommandName = loadedData.questMenuCommandName;
		fontSize = loadedData.fontSize;
		descriptionSize = loadedData.descriptionSize;
		listSize = loadedData.listSize;
	}
	
	Game_System.prototype.getPluginParams = function() {
		if (!this._questPluginParams) {
			return {
					questTitle: pluginParams["Title"] || "QuestLog",
					giverPrefix: pluginParams["giverprefix"] || "From:",
					areaPrefix: pluginParams["areaprefix"] || "Area:",
					statusName: pluginParams["statusname"] || "Status:",
					questCompleted: pluginParams["questcompleted"] || "Completed",
					questOngoing: pluginParams["questongoing"] || "Ongoing",
					questFailed: pluginParams["questfailed"] || "Failed",
					questMenuCommandName: pluginParams["commandname"] || "QuestLog",
					fontSize:  Number(pluginParams["fontsize"]) || 40,
					descriptionSize: Number(pluginParams["descriptionSize"]) || 20,
					listSize: Number(pluginParams["listSize"]) || 20
				  };
		} else {
			return this._questPluginParams;
		}
	};
	
})();