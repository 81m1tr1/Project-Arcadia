/*:
 * @target MZ
 * @plugindesc Plugin to detect event collisions in RPG Maker MZ.
 * @url https://www.example.com
 *
 * @command eventCollide
 * @text Event Collide
 * @desc Checks if the events with the specified IDs are colliding.
 *
 * @arg eventId1
 * @text Event ID 1
 * @type number
 * @min 1
 * @desc The ID of the first event to check.
 *
 * @arg eventId2
 * @text Event ID 2
 * @type number
 * @min 1
 * @desc The ID of the second event to check.
 *
 * @command eventsOnSamePosition
 * @text Events On Same Position
 * @desc Checks if the events with the specified IDs are on the same position.
 *
 * @arg eventId1
 * @text Event ID 1
 * @type number
 * @min 1
 * @desc The ID of the first event to check.
 *
 * @arg eventId2
 * @text Event ID 2
 * @type number
 * @min 1
 * @desc The ID of the second event to check.
 *
 * @help EventCollisionDetector.js
 *
 * This plugin provides functions and plugin commands to detect event collisions
 * in RPG Maker MZ.
 * 
 * Plugin Commands:
 *   Event Collide eventId1 eventId2   - Checks if the events with the specified
 *                                      IDs are colliding.
 *   Events On Same Position eventId1 eventId2 - Checks if the events with the
 *                                            specified IDs are on the same
 *                                            position.
 *
 * Script Calls:
 *   $gameMap.eventsCollide(eventId1, eventId2): Returns true if the events with
 *     the specified IDs are colliding with each other.
 *   $gameMap.eventsOnSamePosition(eventId1, eventId2): Returns true if the events
 *     with the specified IDs are on the same map tile.
 *
 * This plugin is released under the MIT License.
 */

(() => {
    // Function to check if two events are colliding with each other
    Game_Map.prototype.eventsCollide = function(eventId1, eventId2) {
        const event1 = this.event(eventId1);
        const event2 = this.event(eventId2);
        if (!event1 || !event2) return false;
        return event1.pos(event2.x, event2.y);
    };

    // Function to check if two events are on the same position
    Game_Map.prototype.eventsOnSamePosition = function(eventId1, eventId2) {
        const event1 = this.event(eventId1);
        const event2 = this.event(eventId2);
        if (!event1 || !event2) return false;
        return event1.x === event2.x && event1.y === event2.y;
    };

    // Plugin command to check if events are colliding
    PluginManager.registerCommand("EventCollisionDetector", "eventCollide", args => {
        const eventId1 = parseInt(args.eventId1);
        const eventId2 = parseInt(args.eventId2);
        const result = $gameMap.eventsCollide(eventId1, eventId2);
        $gameTemp.reserveCommonEvent(result ? parseInt(args.commonEventIdTrue) : parseInt(args.commonEventIdFalse));
    });

    // Plugin command to check if events are on the same position
    PluginManager.registerCommand("EventCollisionDetector", "eventsOnSamePosition", args => {
        const eventId1 = parseInt(args.eventId1);
        const eventId2 = parseInt(args.eventId2);
        const result = $gameMap.eventsOnSamePosition(eventId1, eventId2);
        $gameTemp.reserveCommonEvent(result ? parseInt(args.commonEventIdTrue) : parseInt(args.commonEventIdFalse));
    });
})();
