/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/gameendwindow/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @orderAfter CGMZ_ExitToDesktop
 * @plugindesc Manage the game end command window
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.1.1
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.7.0
 * ----------------------------------------------------------------------------
 * Description: Use this plugin to easily manage the command window in the
 * game end scene. It allows you to re-arrange commands or use JavaScript to 
 * add custom commands which are capable of calling custom plugin scenes or
 * functions.
 * ----------------------------------------------------------------------------
 * Documentation:
 * This plugin will overwrite the default game end window if keep originals is
 * off. It is best to place this below any other plugins that add commands to
 * the game end window if this option is used.
 *
 * The command symbol should be unique and not blank for every command. This
 * symbol is how the plugin knows internally which JS code to run.
 *
 * Some Command Symbols can have special meanings, mainly when they represent
 * the original commands.
 * The following symbols represent the original commands (case sensitive):
 * toTitle - Will handle like the original to title command
 * cancel - Will handle like the original cancel command
 * 
 * It is important that you do not use these strings as the Command Symbol
 * property unless you mean to refer to the original commands.
 *
 * To Title command:
 * {"Command Name":"To Title","Command Symbol":"toTitle","JS Command":"\"\""}
 *
 * Cancel command:
 * {"Command Name":"Cancel","Command Symbol":"cancel","JS Command":"\"\""}
 *
 * Exit to Desktop (if using CGMZ Exit To Desktop):
 * {"Command Name":"Exit To Desktop","Command Symbol":"CGMZ_exitToDesktop","JS Command":"\"if(Utils.isNwjs() || !CGMZ.ExitToDesktop.HideInBrowser) {\\nSceneManager.exit();\\n}\""}
 * ----------------------------Version History---------------------------------
 * Version 1.1.0
 * - Added option to use text codes in command text
 *
 * Version 1.1.1
 * - Added Spanish language help documentation
 * - This plugin no longer crashes when invalid JSON detected
 *
 * @param Visible Commands
 * @type number
 * @min 0
 * @default 3
 * @desc This is the number of commands that will be visible in the window without scrolling
 *
 * @param Alignment
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * @desc The alignment of the command text in the window
 *
 * @param Keep Original Commands
 * @type boolean
 * @default true
 * @desc Determine whether to show the original commands in their original order.
 *
 * @param Enable Text Codes
 * @type boolean
 * @default true
 * @desc Allow the use of text codes (such as colors) ?
 *
 * @param Commands
 * @type struct<Handler>[]
 * @desc Command Name and associated js commands
 * @default []
*/
/*~struct~Handler:
 * @param Command Name
 * @type text
 * @desc Name of the command to display in the command window.
 *
 * @param Command Symbol
 * @type text
 * @desc This symbol is used internally to recognize the command.
 * Special meaning for original commands (see documentation).
 *
 * @param JS Command
 * @type note
 * @desc JavaScript to run when command is selected.
 * @default ""
*/
/*:es
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/gameendwindow/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @orderAfter CGMZ_ExitToDesktop
 * @plugindesc Administra la ventana de comandos de finalización del juego
 * @help
 * ============================================================================
 * Para términos y condiciones de uso de este pluging en tu juego, por favor
 * visita:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * ¡Conviértete en un Patrocinador para obtener acceso a los plugings beta y
 * alfa, ademas de otras cosas geniales!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Versión: 1.1.1
 * ----------------------------------------------------------------------------
 * Compatibilidad: Sólo probado con mis CGMZ plugins.
 * Hecho para RPG Maker MZ 1.7.0
 * ----------------------------------------------------------------------------
 * Descripción: Usa este plugin para administrar fácilmente la ventana de
 * comandos en la escena final del juego. Le permite reorganizar los comandos
 * o usar JavaScript para agregar comandos personalizados que son capaces de
 * llamar a escenas o funciones de complementos personalizados.
 * ----------------------------------------------------------------------------
 * Documentación:
 * Este plugin sobrescribirá la ventana de finalización del juego
 * predeterminada si no se conservan los originales. Es mejor colocar esto
 * debajo de cualquier otro plugin que agregue comandos a la ventana de
 * finalización del juego si se usa esta opción.
 *
 * El símbolo de comando debe ser único y no estar en blanco para cada comando. 
 * Este símbolo es cómo el plugin sabe internamente qué código JS ejecutar.
 *
 * Algunos Símbolos de Comando pueden tener significados especiales,
 * principalmente cuando representan los comandos originales.
 * Los siguientes símbolos representan los comandos originales (distingue entre 
 * mayúsculas y minúsculas):
 * toTitle: se manejará como el comando original to title
 * cancel: se manejará como el comando de cancelación original
 *
 * Es importante que no use estas cadenas como la propiedad Símbolo de comando
 *  a menos que quiera hacer referencia a los comandos originales.
 *
 * Al comando Título:
 * {"Command Name":"To Title","Command Symbol":"toTitle","JS Command":"\"\""}
 *
 * Cancelar comando:
 * {"Command Name":"Cancel","Command Symbol":"cancel","JS Command":"\"\""}
 *
 * Salir al escritorio (si usa CGMZ Salir al escritorio):
 * {"Command Name":"Exit To Desktop","Command Symbol":"CGMZ_exitToDesktop","JS Command":"\"if(Utils.isNwjs() || !CGMZ.ExitToDesktop.HideInBrowser) {\\nSceneManager.exit();\\n}\""}
 * ----------------------Historial de Actualizaciones--------------------------
 * Versión 1.1.0
 * - Opción agregada para usar códigos de texto en el texto del comando
 *
 * Versión 1.1.1
 * - Added Spanish language help documentation
 * - This plugin no longer crashes when invalid JSON detected
 *
 * @param Visible Commands
 * @text Comandos Visibles
 * @type number
 * @min 0
 * @default 3
 * @desc Este es el número de comandos que serán visibles en la ventana sin necesidad de desplazarse.
 *
 * @param Alignment
 * @text Alineación
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * @desc La alineación del texto del comando en la ventana.
 *
 * @param Keep Original Commands
 * @text Mantener los comandos originales
 * @type boolean
 * @default true
 * @desc Determine si desea mostrar los comandos originales en su orden original.
 *
 * @param Enable Text Codes
 * @text Habilitar códigos de texto
 * @type boolean
 * @default true
 * @desc ¿Permitir el uso de códigos de texto (como colores)?
 *
 * @param Commands
 * @text Comandos
 * @type struct<Handler>[]
 * @desc Nombre del comando y comandos js asociados.
 * @default []
*/
/*~struct~Handler:es
 * @param Command Name
 * @text Nombre de comando
 * @type text
 * @desc Nombre del comando que se mostrará en la ventana de comandos.
 *
 * @param Command Symbol
 * @text Símbolo de comando
 * @type text
 * @desc Este símbolo se usa internamente para reconocer el comando.
 * Significado especial para comandos originales (ver documentación).
 *
 * @param JS Command
 * @text Comando JS
 * @type note
 * @desc JavaScript para ejecutar cuando se selecciona el comando.
 * @default ""
*/
var Imported = Imported || {};
Imported.CGMZ_GameEndWindow = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Game End Window"] = "1.1.1";
CGMZ.GameEnd_CommandWindow = {};
CGMZ.GameEnd_CommandWindow.parameters = PluginManager.parameters('CGMZ_GameEndWindow');
CGMZ.GameEnd_CommandWindow.Alignment = CGMZ.GameEnd_CommandWindow.parameters["Alignment"];
CGMZ.GameEnd_CommandWindow.VisibleCommands = Number(CGMZ.GameEnd_CommandWindow.parameters["Visible Commands"]);
CGMZ.GameEnd_CommandWindow.KeepOriginals = (CGMZ.GameEnd_CommandWindow.parameters["Keep Original Commands"] === "true");
CGMZ.GameEnd_CommandWindow.EnableTextCodes = (CGMZ.GameEnd_CommandWindow.parameters["Enable Text Codes"] === "true");
CGMZ.GameEnd_CommandWindow.CommandsArray = CGMZ_Utils.parseJSON(CGMZ.GameEnd_CommandWindow.parameters["Commands"], [], "CGMZ Game End Window", "Your Commands parameter had invalid JSON and could not be read.");
CGMZ.GameEnd_CommandWindow.Commands = [];
for(const commandJSON of CGMZ.GameEnd_CommandWindow.CommandsArray) {
	const command = CGMZ_Utils.parseJSON(commandJSON, null, "CGMZ Game End Window", "One of your game end commands had invalid JSON and could not be read.")
	if(!command) continue;
	CGMZ.GameEnd_CommandWindow.Commands.push(command);
}
//=============================================================================
// Scene Game End
//-----------------------------------------------------------------------------
// Handling for command window entries
//=============================================================================
//-----------------------------------------------------------------------------
// Handling for custom Commands added through the plugin
//-----------------------------------------------------------------------------
Scene_GameEnd.prototype.CGMZ_GameEndWindow_commandCustom = function() {
	for(let i = 0; i < CGMZ.GameEnd_CommandWindow.Commands.length; i++) {
		if(this._commandWindow.currentSymbol() === CGMZ.GameEnd_CommandWindow.Commands[i]["Command Symbol"]) {
			try {
				const js = CGMZ_Utils.parseJSON(CGMZ.GameEnd_CommandWindow.Commands[i]["JS Command"], null, "CGMZ Game End Window", "A game end command had invalid JSON and could not be read.");
				const hookFunc = new Function(js);
				hookFunc.call(this);
			}
			catch (e) {
				const origin = "CGMZ Game End Window";
				const suggestion = "Check your JavaScript command";
				$cgmzTemp.reportError(e.message, origin, suggestion);
			}
		}
	}
};
//-----------------------------------------------------------------------------
// Alias. Add additional commands.
//-----------------------------------------------------------------------------
const alias_CGMZ_GameEndWindow_createCommandWindow = Scene_GameEnd.prototype.createCommandWindow;
Scene_GameEnd.prototype.createCommandWindow = function() {
	alias_CGMZ_GameEndWindow_createCommandWindow.call(this);
	for(const cmd of CGMZ.GameEnd_CommandWindow.Commands) {
		if(this.CGMZ_GameEndWindow_isCustomCommand(cmd["Command Symbol"])) {
			this._commandWindow.setHandler(cmd["Command Symbol"], this.CGMZ_GameEndWindow_commandCustom.bind(this));
		}
	}
};
//-----------------------------------------------------------------------------
// Determine if command is a custom command in need of custom handler
//-----------------------------------------------------------------------------
Scene_GameEnd.prototype.CGMZ_GameEndWindow_isCustomCommand = function(symbol) {
	return (symbol !== 'cancel' && symbol !== 'toTitle');
};
//-----------------------------------------------------------------------------
// Alias. Change the rectangle height based on number of visible commands
//-----------------------------------------------------------------------------
const alias_CGMZ_GameEndWindow_commandWindowRect = Scene_GameEnd.prototype.commandWindowRect;
Scene_GameEnd.prototype.commandWindowRect = function() {
    let rect = alias_CGMZ_GameEndWindow_commandWindowRect.call(this);
	rect.height = this.calcWindowHeight(CGMZ.GameEnd_CommandWindow.VisibleCommands, true);
	return rect;
};
//=============================================================================
// Window Game End
//-----------------------------------------------------------------------------
// Change commands in the command window
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Add original commands in original order if user wishes
//-----------------------------------------------------------------------------
const alias_CGMZ_GameEndWindow_makeCommandList = Window_GameEnd.prototype.makeCommandList;
Window_GameEnd.prototype.makeCommandList = function() {
	if(CGMZ.GameEnd_CommandWindow.KeepOriginals) {
		alias_CGMZ_GameEndWindow_makeCommandList.call(this);
	}
	for(const cmd of CGMZ.GameEnd_CommandWindow.Commands) {
		this.addCommand(cmd["Command Name"], cmd["Command Symbol"], true);
	}
};
//-----------------------------------------------------------------------------
// Change alignment of command text
//-----------------------------------------------------------------------------
Window_GameEnd.prototype.itemTextAlign = function() {
    return CGMZ.GameEnd_CommandWindow.Alignment;
};
//-----------------------------------------------------------------------------
// Allow use of text codes in command
//-----------------------------------------------------------------------------
Window_GameEnd.prototype.drawItem = function(index) {
	if(CGMZ.GameEnd_CommandWindow.EnableTextCodes) {
		const rect = this.itemLineRect(index);
		const align = this.itemTextAlign();
		this.resetTextColor();
		this.changePaintOpacity(this.isCommandEnabled(index));
		this.CGMZ_drawTextLine(this.commandName(index), rect.x, rect.y, rect.width, align);
	} else {
		Window_Command.prototype.drawItem.call(this, index);
	}
};