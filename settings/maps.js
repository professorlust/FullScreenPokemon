FullScreenPokemon.prototype.settings.maps = {
    "mapDefault": "Blank",
    "locationDefault": "Black",
    "groupTypes": ["Text", "Character", "Solid", "Scenery", "Terrain"],
    "requireEntrance": true,
    "screenAttributes": [],
    "screenVariables": {
        "boundaries": FullScreenPokemon.prototype.getAreaBoundariesReal,
        "scrollability": FullScreenPokemon.prototype.getScreenScrollability,
        "thingsById": FullScreenPokemon.prototype.generateThingsByIdContainer
    },
    "onSpawn": FullScreenPokemon.prototype.addPreThing,
    "macros": {
        "Checkered": FullScreenPokemon.prototype.macroCheckered,
        "Water": FullScreenPokemon.prototype.macroWater,
        "House": FullScreenPokemon.prototype.macroHouse,
        "HouseLarge": FullScreenPokemon.prototype.macroHouseLarge,
        "Building": FullScreenPokemon.prototype.macroBuilding,
        "Gym": FullScreenPokemon.prototype.macroGym,
        "Mountain": FullScreenPokemon.prototype.macroMountain,
        "PokeCenter": FullScreenPokemon.prototype.macroPokeCenter,
        "PokeMart": FullScreenPokemon.prototype.macroPokeMart
    },
    "entrances": {
        "Blank": FullScreenPokemon.prototype.mapEntranceBlank,
        "Normal": FullScreenPokemon.prototype.mapEntranceNormal
    },
    "library": (function (maps) {
        var library = {},
            i;

        for (i = 0; i < maps.length; i += 1) {
            library[maps[i].name] = maps[i];
        }

        return library;
    })([
        {
            "name": "Blank",
            "locationDefault": "Black",
            "locations": {
                "Black": {
                    "area": "Black",
                    "entry": "Blank"
                },
                "White": {
                    "area": "White",
                    "entry": "Blank"
                }
            },
            "areas": {
                "Black": {
                    "creation": []
                },
                "White": {
                    "background": "white",
                    "creation": []
                }
            }
        }, {
            "name": "Pallet Town",
            "locationDefault": "Player's House Door",
            "locations": {
                "Player's House Door": {
                    "area": "Land"
                },
                "Player's House Floor 1 Door": {
                    "area": "Player's House"
                },
                "Player's House Floor 1 Stairs": {
                    "area": "Player's House"
                },
                "Player's House Floor 2 Stairs": {
                    "area": "Player's House Floor 2"
                },
                "Start Game": {
                    "area": "Player's House Floor 2",
                    "xloc": 24,
                    "yloc": 40,
                    "direction": 0
                },
                "Rival's House Door": {
                    "area": "Land"
                },
                "Rival's House Floor 1 Door": {
                    "area": "Rival's House"
                },
                "Oak's Lab Door": {
                    "area": "Land"
                },
                "Oak's Lab Floor 1 Door": {
                    "area": "Oak's Lab"
                }
            },
            "areas": {
                "Land": {
                    "width": 152,
                    "height": 136,
                    "wildPokemon": {
                        "grass": [{
                            "title": "Pidgey",
                            "levels": [2, 3, 4, 5],
                            "rate": .55
                        }, {
                            "title": "Rattata",
                            "levels": [2, 3, 4],
                            "rate": .45
                        }]
                    },
                    "creation": [
                        { "thing": "AreaSpawner", "width": 152, "height": 136, "map": "Route 1", "area": "Land", "direction": 0 },
                        { "thing": "FenceWide", "width": 80 },
                        { "thing": "Grass", "x": 80, "width": 16 },
                        { "thing": "CutsceneTriggerer", "x": 80, "width": 16, "cutscene": "OakIntro", "singleUse": true, "requireOverlap": true },
                        { "thing": "FenceWide", "x": 96, "width": 64 },
                        { "thing": "FenceWide", "y": 8, "height": 128 },
                        { "thing": "DirtMedium", "width": 160 },
                        { "thing": "DirtMedium", "y": 8, "width": 16, "height": 128 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 16, "y": 8, "xnum": 16, "ynum": 2, "offset": 1 },
                        { "thing": "DirtMedium", "x": 144, "y": 8, "height": 128, "width": 16 },
                        { "thing": "FenceWide", "x": 152, "y": 8, "height": 128 },
                        { "macro": "House", "x": 32, "y": 16, "stories": 2, "door": true, "entrance": "Player's House Door", "transport": { "location": "Player's House Floor 1 Door" } },
                        { "macro": "House", "x": 96, "y": 16, "stories": 2, "door": true, "entrance": "Rival's House Door", "transport": { "location": "Rival's House Floor 1 Door" } },
                        { "thing": "DirtLight", "x": 16, "y": 24, "width": 16, "height": 16 },
                        { "thing": "DirtLight", "x": 80, "y": 24, "width": 16, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 32, "y": 24, "xnum": 6, "ynum": 2 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 96, "y": 24, "xnum": 6, "ynum": 2 },
                        { "thing": "Sign", "x": 24, "y": 32, "dialog": "%%%%%%%PLAYER%%%%%%%'s house" },
                        { "thing": "Sign", "x": 88, "y": 32, "dialog": "%%%%%%%RIVAL%%%%%%%'s house" },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 16, "y": 40, "xnum": 16, "ynum": 2 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 16, "y": 56, "xnum": 2, "ynum": 6 },
                        { "thing": "Lady", "x": 24, "y": 56, "roaming": true, "dialog": ["I'm raising %%%%%%%POKEMON%%%%%%% too!", "When they get strong, they can protect me!"] },
                        { "thing": "DirtLight", "x": 32, "y": 56, "width": 32, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 64, "y": 56, "xnum": 2, "ynum": 6 },
                        { "macro": "HouseLarge", "x": 80, "y": 56, "width": 48, "height": 32, "door": true, "stories": 2, "white": { "start": 84, "end": 96 }, "id": "Oak's Lab Door", "entrance": "Oak's Lab Door", "transport": { "location": "Oak's Lab Floor 1 Door" } },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 80, "y": 56, "xnum": 8, "ynum": 4 },
                        { "thing": "FenceVertical", "x": 32, "y": 64, "width": 24 },
                        { "thing": "Sign", "x": 56, "y": 64, "dialog": "PALLET TOWN \n Shades of your journey await!" },
                        { "thing": "DirtMedium", "x": 32, "y": 72, "width": 32, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 32, "y": 76, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 32, "y": 88, "xnum": 4, "ynum": 2 },
                        { "thing": "DirtLight", "x": 80, "y": 88, "width": 64, "height": 16 },
                        { "thing": "FenceVertical", "x": 80, "y": 96, "width": 24 },
                        { "thing": "Sign", "x": 104, "y": 96, "dialog": "Oak %%%%%%%POKEMON%%%%%%% Research Lab" },
                        { "thing": "FenceVertical", "x": 112, "y": 96, "width": 16 },
                        { "thing": "DirtMedium", "x": 16, "y": 104, "width": 16, "height": 32 },
                        { "macro": "Water", "x": 32, "y": 104, "width": 32, "height": 32, "open": [false, false, true, false] },
                        { "thing": "DirtLight", "x": 64, "y": 104, "width": 16, "height": 32 },
                        { "thing": "DirtMedium", "x": 80, "y": 104, "width": 48, "height": 16 },
                        { "thing": "Fatty", "x": 88, "y": 104, "roaming": true, "dialog": ["Technology is incredible!", "You can now store and recall items and %%%%%%%POKEMON%%%%%%% as data via PC!"] },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 80, "y": 108, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "DirtLight", "x": 128, "y": 104, "width": 16, "height": 32 },
                        { "thing": "DirtLight", "x": 80, "y": 120, "width": 48, "height": 16 },
                        { "thing": "FenceWide", "x": 64, "y": 128, "width": 88 },
                        { "thing": "FenceWide", "x": 8, "y": 128 }
                    ]
                },
                "Player's House": {
                    "invisibleWallBorders": true,
                    "creation": [
                        { "thing": "WallIndoorHorizontalBands", "width": 64 },
                        { "thing": "InvisibleWall", "width": 64 },
                        { "thing": "FloorTiledDiagonal", "y": 8, "width": 64, "height": 56 },
                        { "thing": "WindowBlinds", "x": 24 },
                        { "thing": "WindowBlinds", "x": 40 },
                        { "thing": "WindowBlinds", "x": 56 },
                        { "thing": "Bookshelf", "width": 16 },
                        { "thing": "TelevisionMonitor", "x": 24, "y": 8, "dialogDirections": true, "dialog": ["Oops, wrong side.", "Oops, wrong side.", ["There's a movie on TV. Four boys are walking on railroad tracks.", "I better go too."], "Oops, wrong side."] },
                        { "thing": "StairsUp", "x": 56, "y": 8, "entrance": "Player's House Floor 1 Stairs", "transport": "Player's House Floor 2 Stairs" },
                        { "thing": "Table2x3", "x": 24, "y": 32 },
                        { "thing": "Stool", "x": 16, "y": 32 },
                        { "thing": "Stool", "x": 16, "y": 40 },
                        { "thing": "Stool", "x": 40, "y": 32 },
                        { "thing": "Stool", "x": 40, "y": 40 },
                        { "thing": "FlowerVase", "x": 29, "y": 34 },
                        { "thing": "Mother", "x": 40, "y": 32, "direction": 3, "directionPreferred": 3, "dialog": ["MOM: Right. All boys leave home some day. It said so on TV.", "PROF.OAK, next door, is looking for you."] },
                        { "thing": "DoormatDotted", "x": 16, "y": 56, "width": 16, "entrance": "Player's House Floor 1 Door" },
                        { "thing": "HiddenTransporter", "x": 16, "y": 56, "width": 16, "transport": { "location": "Player's House Door" }, "requireDirection": 2 }
                    ]
                },
                "Player's House Floor 2": {
                    "invisibleWallBorders": true,
                    "creation": [
                        { "thing": "WallIndoorHorizontalBands", "width": 64 },
                        { "thing": "InvisibleWall", "width": 64 },
                        { "thing": "FloorTiledDiagonal", "y": 8, "width": 64, "height": 56 },
                        { "thing": "ComputerDesk" },
                        { "thing": "Table2x2", "x": 8 },
                        { "thing": "StairsDown", "x": 56, "y": 8, "entrance": "Player's House Floor 2 Stairs", "transport": "Player's House Floor 1 Stairs" },
                        { "thing": "WindowBlinds", "x": 40 },
                        { "thing": "WindowBlinds", "x": 56 },
                        { "thing": "ConsoleAndController", "x": 24, "y": 32, "dialog": "%%%%%%%PLAYER%%%%%%% is playing the SNES! ...Okay! It's time to go!" },
                        { "thing": "TelevisionMonitor", "x": 24, "y": 24 },
                        { "thing": "BedSingle", "y": 48 },
                        { "thing": "PottedPalmTree", "x": 48, "y": 48 }
                    ]
                },
                "Rival's House": {
                    "invisibleWallBorders": true,
                    "creation": [
                        { "thing": "WallIndoorHorizontalBands", "width": 64 },
                        { "thing": "InvisibleWall", "width": 64 },
                        { "thing": "FloorTiledDiagonal", "y": 8, "width": 64, "height": 56 },
                        { "thing": "Cabinet", "width": 16 },
                        { "thing": "Painting", "x": 24, "dialog": "A TOWN MAP (do town map action)" },
                        { "thing": "Window", "x": 40 },
                        { "thing": "Bookshelf", "x": 56 },
                        { "thing": "Table2x3", "x": 24, "y": 24 },
                        { "thing": "Book", "x": 24, "y": 24, "id": "Book", "dialog": "It's a big map! This is useful!" },
                        { "thing": "Daisy", "x": 16, "y": 24, "direction": 1, "directionPreferred": 1, "dialog": "Hi %%%%%%%PLAYER%%%%%%%! %%%%%%%RIVAL%%%%%%% is out at Grandpa's lab." },
                        { "thing": "Stool", "x": 16, "y": 24 },
                        { "thing": "Stool", "x": 16, "y": 32 },
                        { "thing": "Stool", "x": 40, "y": 24 },
                        { "thing": "Stool", "x": 40, "y": 32 },
                        { "thing": "PottedPalmTree", "y": 48 },
                        { "thing": "PottedPalmTree", "x": 56, "y": 48 },
                        { "thing": "DoormatDotted", "x": 16, "y": 56, "width": 16, "entrance": "Rival's House Floor 1 Door" },
                        { "thing": "HiddenTransporter", "x": 16, "y": 56, "width": 16, "transport": { "location": "Rival's House Door" }, "requireDirection": 2 }
                    ]
                },
                "Oak's Lab": {
                    "invisibleWallBorders": true,
                    "creation": [
                        { "thing": "WallIndoorLightWithDarkBottom", "width": 64 },
                        { "thing": "InvisibleWall", "width": 64 },
                        { "thing": "Table2x2", "y": 4, "width": 32 },
                        { "thing": "LabComputer", "y": 8 },
                        { "thing": "Book", "x": 16, "y": 8, "id": "BookLeft" },
                        { "thing": "Book", "x": 24, "y": 8, "id": "BookRight" },
                        { "thing": "FloorLinedHorizontal", "y": 8, "width": 80, "height": 88 },
                        { "thing": "AsianScroll", "x": 32, "dialog": "Push START to open the MENU!" },
                        { "thing": "AsianScroll", "x": 40, "dialog": "The SAVE option is on the MENU screen." },
                        { "thing": "Oak", "x": 40, "y": 16, "id": "Oak", "hidden": true },
                        { "thing": "Rival", "x": 32, "y": 24, "id": "Rival", "dialog": "Yo %%%%%%%PLAYER%%%%%%%! Gramps isn't around!" },
                        { "thing": "Table3x1", "x": 48, "y": 24 },
                        { "thing": "Pokeball", "x": 48, "y": 24, "id": "PokeballCharmander", "action": "cutscene", "cutscene": "OakIntroPokemonChoice", "pokemon": "Charmander", "description": "fire" },
                        { "thing": "Pokeball", "x": 56, "y": 24, "id": "PokeballSquirtle", "action": "cutscene", "cutscene": "OakIntroPokemonChoice", "pokemon": "Squirtle", "description": "water" },
                        { "thing": "Pokeball", "x": 64, "y": 24, "id": "PokeballBulbasaur", "action": "cutscene", "cutscene": "OakIntroPokemonChoice", "pokemon": "Bulbasaur", "description": "plant" },
                        { "thing": "Bookshelf", "x": 48, "width": 32 },
                        { "thing": "Bookshelf", "y": 48, "width": 32 },
                        { "thing": "Bookshelf", "x": 48, "y": 48, "width": 32 },
                        { "thing": "MenuTriggerer", "x": 32, "y": 56, "width": 32, "id": "OakBlocker", "pushDirection": 0, "pushSteps": [1], "keepAlive": true, "nocollide": true, "dialog": "OAK: Hey! Don't go away yet!" },
                        { "thing": "CutsceneTriggerer", "x": 32, "y": 56, "width": 32, "id": "RivalBlocker", "cutscene": "OakIntroRivalBattle", "routine": "Approach", "nocollide": true },
                        { "thing": "Lady", "x": 8, "y": 72, "dialog": ["PROF.OAK is the authority on %%%%%%%POKEMON%%%%%%%!", "Many %%%%%%%POKEMON%%%%%%% trainers hold him in high regard!"], "roaming": true, "roamingDirections": [0, 2] },
                        { "thing": "Scientist", "x": 16, "y": 80, "name": "Scientist One", "dialog": "I study %%%%%%%POKEMON%%%%%%% as PROF.OAK's aide.", "roaming": true, "roamingDirections": [] },
                        { "thing": "Scientist", "x": 64, "y": 80, "name": "Scientist Two", "dialog": "I study %%%%%%%POKEMON%%%%%%% as PROF.OAK's aide.", "roaming": true, "roamingDirections": [] },
                        { "thing": "Doormat", "x": 32, "y": 88, "id": "DoormatLeft" },
                        { "thing": "Doormat", "x": 40, "y": 88, "id": "DoormatRight", "entrance": "Oak's Lab Floor 1 Door" },
                        { "thing": "HiddenTransporter", "x": 40, "y": 88, "width": 16, "transport": { "location": "Oak's Lab Door" }, "requireDirection": 2 },
                    ]
                }
            }
        }, {
            "name": "Route 1",
            "locationDefault": "Top Path",
            "locations": {
                "Top Path": {
                    "area": "Land",
                    "xloc": 80,
                },
                "Bottom Path": {
                    "area": "Land",
                    "xloc": 80,
                    "yloc": 288
                }
            },
            "areas": {
                "Land": {
                    "width": 160,
                    "height": 296,
                    "wildPokemon": {
                        "grass": [{
                            "title": "Pidgey",
                            "levels": [2, 3, 4, 5],
                            "rate": .55
                        }, {
                            "title": "Rattata",
                            "levels": [2, 3, 4],
                            "rate": .45
                        }]
                    },
                    "creation": [
                        { "thing": "AreaSpawner", "width": 160, "map": "Viridian City", "area": "Land", "direction": 0, "offsetX": -80 },
                        { "thing": "DirtMedium", "width": 32, "height": 296 },
                        { "thing": "FenceWide", "x": 24, "height": 48 },
                        { "thing": "DirtMedium", "x": 24, "width": 56, "height": 80 },
                        { "thing": "FenceWide", "x": 72 },
                        { "thing": "DirtLight", "x": 80, "width": 16, "height": 32 },
                        { "thing": "FenceWide", "x": 96 },
                        { "thing": "DirtMedium", "x": 96, "width": 48, "height": 32 },
                        { "thing": "DirtMedium", "x": 144, "width": 16, "height": 296 },
                        { "thing": "FenceWide", "x": 144, "height": 48 },
                        { "thing": "FenceWide", "x": 32, "y": 8, "width": 48 },
                        { "thing": "FenceWide", "x": 96, "y": 8, "width": 48 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 128, "y": 20, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "DirtLight", "x": 80, "y": 32, "width": 64, "height": 16 },
                        { "thing": "PlantSmall", "x": 72, "y": 32, "height": 48 },
                        { "thing": "Ledge", "x": 32, "y": 44, "width": 40, "crumbleRight": true },
                        { "thing": "Ledge", "x": 80, "y": 44, "width": 32, "jagged": true },
                        { "thing": "PlantSmall", "x": 24, "y": 48, "height": 64 },
                        { "thing": "DirtMedium", "x": 80, "y": 48, "width": 64, "height": 32 },
                        { "thing": "Grass", "x": 80, "y": 48, "width": 64, "height": 32 },
                        { "thing": "PlantSmall", "x": 144, "y": 48, "height": 64 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 32, "y": 52, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "Ledge", "x": 32, "y": 76, "width": 40, "crumbleRight": true },
                        { "thing": "DirtMedium", "x": 32, "y": 80, "width": 64, "height": 48 },
                        { "thing": "DirtLight", "x": 96, "y": 80, "width": 48, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 48, "y": 84, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 96, "y": 96, "xnum": 2, "ynum": 2 },
                        { "thing": "DirtMedium", "x": 112, "y": 96, "width": 32, "height": 48 },
                        { "thing": "Grass", "x": 112, "y": 96, "width": 32, "height": 32 },
                        { "thing": "PlantSmall", "x": 32, "y": 104, "width": 16 },
                        { "thing": "PlantSmall", "x": 80, "y": 104, "width": 32 },
                        { "thing": "BugCatcher", "x": 120, "y": 104, "direction": 3, "roaming": true, "roamingDirections": [1, 3], "dialog": ["See those ledges along the road?", "It's a bit scary, but you can jump from them.", "You can get back to Pallet Town quicker that way."] },
                        { "thing": "Ledge", "x": 48, "y": 108, "width": 32 },
                        { "thing": "FenceWide", "x": 24, "y": 112, "height": 112 },
                        { "thing": "FenceWide", "x": 144, "y": 112, "height": 112 },
                        { "thing": "DirtLight", "x": 96, "y": 112, "width": 16, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 64, "y": 116, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "DirtMedium", "x": 32, "y": 128, "width": 16, "height": 48 },
                        { "thing": "DirtLight", "x": 48, "y": 128, "width": 64, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 112, "y": 132, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "DirtLight", "x": 48, "y": 144, "width": 16, "height": 16 },
                        { "thing": "DirtMedium", "x": 64, "y": 144, "width": 80, "height": 16 },
                        { "thing": "Ledge", "x": 32, "y": 156, "width": 8 },
                        { "thing": "LedgeOpening", "x": 40, "y": 156, "width": 8 },
                        { "thing": "Ledge", "x": 48, "y": 156, "width": 24, "crumbleLeft": true, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 72, "y": 156, "width": 8 },
                        { "thing": "Ledge", "x": 80, "y": 156, "width": 64 },
                        { "thing": "DirtLight", "x": 48, "y": 160, "width": 96, "height": 16 },
                        { "thing": "DirtMedium", "x": 32, "y": 176, "width": 96, "height": 32 },
                        { "thing": "Grass", "x": 96, "y": 176, "width": 32, "height": 32 },
                        { "thing": "DirtLight", "x": 128, "y": 176, "width": 16, "height": 32 },
                        { "thing": "PlantSmall", "x": 32, "y": 184, "width": 64 },
                        { "thing": "BugCatcher", "x": 40, "y": 192, "direction": 2, "roaming": true, "roamingDirections": [0, 2], "dialog": ["Hi! I work at a %%%%%%%POKEMON%%%%%%% MART.", "It's a convenient shop, so please visit us in VIRIDIAN CITY.", "I know, I'll give you a sample! Here you go!"], "dialogNext": "We also carry %%%%%%%POKE%%%%%%% BALLs for catching %%%%%%%POKEMON%%%%%%%!", "gift": "Potion" },
                        { "thing": "Ledge", "x": 128, "y": 188, "width": 16, "jagged": true },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 64, "y": 196, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "DirtLight", "x": 32, "y": 208, "width": 112, "height": 16 },
                        { "thing": "Sign", "x": 72, "y": 216 },
                        { "thing": "Ledge", "x": 32, "y": 220, "width": 16, "jagged": true },
                        { "thing": "Ledge", "x": 80, "y": 220, "width": 64, "jagged": true },
                        { "thing": "PlantSmall", "x": 24, "y": 224, "height": 64 },
                        { "thing": "DirtMedium", "x": 32, "y": 224, "width": 48, "height": 72 },
                        { "thing": "Grass", "x": 48, "y": 224, "width": 32, "height": 16 },
                        { "thing": "DirtLight", "x": 80, "y": 224, "width": 16, "height": 40 },
                        { "thing": "DirtMedium", "x": 96, "y": 224, "width": 48, "height": 72 },
                        { "thing": "Grass", "x": 112, "y": 224, "width": 32, "height": 16 },
                        { "thing": "PlantSmall", "x": 144, "y": 224, "height": 64 },
                        { "thing": "Grass", "x": 32, "y": 240, "width": 32, "height": 16 },
                        { "thing": "Grass", "x": 96, "y": 240, "width": 32, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 64, "y": 244, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 128, "y": 244, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "FenceWide", "x": 32, "y": 256, "width": 48 },
                        { "thing": "DirtMedium", "x": 80, "y": 256, "width": 16, "height": 40 },
                        { "thing": "Grass", "x": 80, "y": 256, "width": 16, "height": 40 },
                        { "thing": "FenceWide", "x": 96, "y": 256, "width": 48 },
                        { "thing": "FenceWide", "x": 72, "y": 264, "height": 32 },
                        { "thing": "FenceWide", "x": 96, "y": 264, "height": 32 },
                        { "thing": "FenceWide", "x": 24, "y": 288 },
                        { "thing": "FenceWide", "x": 144, "y": 288 },
                        { "thing": "AreaSpawner", "y": 288, "width": 160, "map": "Pallet Town", "area": "Land", "direction": 2 }
                    ]
                }
            }
        }, {
            "name": "Viridian City",
            "locationDefault": "PokeCenter Outside Door",
            "locations": {
                "Nicknamer House Front Door": {
                    "area": "Land"
                },
                "School Front Door": {
                    "area": "Land"
                },
                "PokeCenter Outside Door": {
                    "area": "Land"
                },
                "PokeMart Outside Door": {
                    "area": "Land"
                },
                "Nicknamer House Floor 1 Door": {
                    "area": "Nicknamer House"
                },
                "School Floor 1 Door": {
                    "area": "School"
                },
                "PokeCenter Inside Door": {
                    "area": "PokeCenter"
                },
                "PokeMart Inside Door": {
                    "area": "PokeMart"
                }
            },
            "areas": {
                "Land": {
                    "width": 320,
                    "height": 288,
                    "creation": [
                        { "thing": "AreaSpawner", "width": 320, "map": "Route 2", "area": "Land", "direction": 0, "offsetX": 48 },
                        { "thing": "AreaSpawner", "height": 288, "map": "Route 22", "area": "Land", "direction": 3, "offsetY": 64 },
                        { "macro": "Mountain", "width": 48, "height": 112, "bottom": true, "right": true },
                        { "thing": "DirtMedium", "x": 48, "width": 80, "height": 144 },
                        { "thing": "PlantSmall", "x": 48, "width": 80, "height": 32 },
                        { "thing": "DirtWhite", "x": 128, "width": 16, "height": 32 },
                        { "thing": "FenceVertical", "x": 128, "width": 8, "height": 32 },
                        { "thing": "DirtLight", "x": 144, "width": 16, "height": 16 },
                        { "thing": "DirtMedium", "x": 160, "width": 128, "height": 16 },
                        { "thing": "PlantSmall", "x": 160, "width": 32, "height": 32 },
                        { "thing": "PlantSmall", "x": 192, "width": 96, "height": 16 },
                        { "thing": "DirtMedium", "x": 288, "width": 32, "height": 256 },
                        { "thing": "PlantSmall", "x": 288, "width": 32, "height": 256 },
                        { "thing": "Sign", "x": 152, "y": 8, "dialog": ["TRAINER TIPS", "Catch %%%%%%%POKEMON%%%%%%% and expand your collection!", "The more you have, the easier it is to fight!"] },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 144, "y": 16, "xnum": 2, "ynum": 2 },
                        { "thing": "DirtMedium", "x": 160, "y": 16, "width": 32, "height": 16 },
                        { "thing": "DirtLight", "x": 192, "y": 16, "width": 96, "height": 16 },
                        { "thing": "Tree", "x": 112, "y": 32 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 128, "y": 32, "xnum": 6, "ynum": 2 },
                        { "thing": "DirtLight", "x": 176, "y": 32, "width": 48, "height": 48 },
                        { "thing": "DirtLight", "x": 224, "y": 32, "width": 48, "height": 32 },
                        { "macro": "Gym", "x": 224, "y": 32 },
                        { "thing": "DirtLight", "x": 272, "y": 32, "width": 16, "height": 64 },
                        { "thing": "FenceWide", "x": 64, "y": 40, "width": 48 },
                        { "thing": "PlantSmall", "x": 112, "y": 40, "width": 16 },
                        { "thing": "FenceWide", "x": 56, "y": 48, "height": 80 },
                        { "thing": "PlantSmall", "x": 64, "y": 48, "width": 64, "height": 88 },
                        { "thing": "DirtWhite", "x": 128, "y": 48, "width": 16, "height": 80 },
                        { "thing": "FenceVertical", "x": 128, "y": 48, "width": 8, "height": 80 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 144, "y": 48, "xnum": 2, "ynum": 12 },
                        { "thing": "DirtWhite", "x": 160, "y": 48, "width": 16, "height": 32 },
                        { "thing": "FenceVertical", "x": 160, "y": 48, "width": 8, "height": 16 },
                        { "thing": "Sign", "x": 216, "y": 56, "dialog": "VIRIDIAN CITY \n %%%%%%%POKEMON%%%%%%% GYM" },
                        { "macro": "House", "x": 160, "y": 64, "door": true, "entrance": "Nicknamer House Front Door", "transport": "Nicknamer House Floor 1 Door" },
                        { "thing": "OldMan", "x": 240, "y": 64, "name": "GymWatcher", "direction": 0, "roaming": true, "roamingDirections": [], "dialog": ["This %%%%%%%POKEMON%%%%%%% gym is always closed.", "I wonder who the LEADER is?"] },
                        { "thing": "MenuTriggerer", "x": 248, "y": 64, "dialog": "The GYM's doors are locked...", "pushDirection": 2, "pushSteps": [1] },
                        { "thing": "DirtMedium", "x": 224, "y": 64, "width": 48, "height": 16 },
                        { "thing": "Lady", "x": 136, "y": 72, "id": "CrankyGranddaughter", "direction": 1, "directionPreferred": 1, "dialog": "Oh Grandpa! Don't be so mean! \n He hasn't had his coffee yet." },
                        { "thing": "Lady", "x": 136, "y": 72, "id": "HappyGranddaughter", "alive": false, "direction": 1, "directionPreferred": 1, "dialog": "When I go to shop in PEWTER CITY, I have to take the winding trail in VIRIDIAN FOREST." },
                        { "thing": "OldMan", "x": 144, "y": 72, "id": "CrankyGrandpa", "resting": true, "pushDirection": 2, "pushSteps": [1], "dialog": "You can't go through here! This is private property!" },
                        {
                            "thing": "OldMan", "x": 144, "y": 40, "id": "HappyGrandpa", "alive": false, "roaming": true, "roamingDirections": [1, 3], "dialog": ["Ahh, I've had my coffee now and I feel great!", "Sure you can go through.", "Are you in a hurry?"], "dialogOptions":
                            {
                                "type": "Yes/No",
                                "options": {
                                    "Yes": "Time is money... Go along then.",
                                    "No": {
                                        "words": ["I see you're using a %%%%%%%POKEDEX%%%%%%%.", "When you catch a %%%%%%%POKEMON%%%%%%%, %%%%%%%POKEDEX%%%%%%% is automatically updated.", "What? Don't you know how to catch %%%%%%%POKEMON%%%%%%%?", "I'll show you how to then."],
                                        "cutscene": "OldManTraining"
                                    }
                                }
                            }
                        },
                        { "thing": "MenuTriggerer", "x": 152, "y": 72, "id": "CrankyGrandpaBlocker", "pushDirection": 2, "pushSteps": [1], "keepAlive": true, "requireOverlap": true, "dialog": "You can't go through here! This is private property!" },
                        { "thing": "Ledge", "x": 192, "y": 76, "width": 32, "jagged": true },
                        { "thing": "Ledge", "x": 224, "y": 76, "width": 48 },
                        { "thing": "Ledge", "x": 272, "y": 76, "width": 16, "jagged": true },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 160, "y": 80, "xnum": 14, "ynum": 2 },
                        { "thing": "DirtLight", "x": 160, "y": 96, "width": 128, "height": 16 },
                        { "thing": "FenceVertical", "x": 160, "y": 104, "width": 128, "height": 8 },
                        { "thing": "DirtMedium", "y": 112, "width": 56, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 160, "y": 112, "xnum": 16, "ynum": 2 },
                        { "macro": "House", "x": 160, "y": 112, "door": true, "entrance": "School Front Door", "transport": "School Floor 1 Door" },
                        { "thing": "DirtLight", "y": 128, "width": 16, "height": 24 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 16, "y": 128, "xnum": 4, "ynum": 2 },
                        { "thing": "DirtLight", "x": 128, "y": 128, "width": 16, "height": 16 },
                        { "thing": "DirtLight", "x": 160, "y": 128, "width": 32, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 192, "y": 128, "xnum": 2, "ynum": 4 },
                        { "thing": "DirtMedium", "x": 208, "y": 128, "width": 64, "height": 32 },
                        { "macro": "Building", "x": 224, "y": 128, "door": true, "label": "Mart", "transport": "PokeMart Inside Door" },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 272, "y": 128, "xnum": 2, "ynum": 4 },
                        { "thing": "Sign", "x": 136, "y": 136, "dialog": "VIRIDIAN CITY \n The Eternally Green Paradise" },
                        { "thing": "FenceVertical", "x": 160, "y": 136, "width": 32 },
                        { "macro": "Mountain", "y": 144, "width": 32, "height": 80, "top": true, "right": true, "bottom": true },
                        { "thing": "DirtLight", "x": 24, "y": 144 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 32, "y": 144, "xnum": 2, "ynum": 8 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 48, "y": 144, "xnum": 14, "ynum": 2 },
                        { "thing": "DirtMedium", "x": 160, "y": 144, "width": 32, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 160, "y": 148, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "DirtMedium", "x": 48, "y": 160, "width": 80, "height": 32 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 128, "y": 160, "xnum": 20, "ynum": 2 },
                        { "thing": "BugCatcher", "x": 104, "y": 160, "name": "WaistHappy", "direction": 1, "roaming": true, "dialog": ["Those %%%%%%%POKE%%%%%%% BALLs at your waist! You have %%%%%%%POKEMON%%%%%%%!", "It's great that you can carry and use %%%%%%%POKEMON%%%%%%% any time, anywhere!"] },
                        { "thing": "PlantSmall", "x": 32, "y": 168, "width": 32 },
                        { "thing": "Tree", "x": 64, "y": 176 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 128, "y": 176, "xnum": 2, "ynum": 4 },
                        { "thing": "DirtMedium", "x": 144, "y": 176, "width": 16, "height": 64 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 160, "y": 176, "xnum": 8, "ynum": 4 },
                        { "macro": "Building", "x": 176, "y": 176, "door": true, "label": "Poke", "entrance": "PokeCenter Outside Door", "transport": "PokeCenter Inside Door" },
                        { "thing": "DirtMedium", "x": 224, "y": 176, "width": 48, "height": 32 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 272, "y": 176, "xnum": 2, "ynum": 4 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 80, "y": 180, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 144, "y": 180, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 224, "y": 180, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "Fatty", "x": 48, "y": 184, "dialog": "Who knows?" },
                        { "thing": "PlantSmall", "x": 64, "y": 184, "width": 16 },
                        { "thing": "DirtMedium", "x": 48, "y": 192, "width": 16, "height": 32 },
                        { "macro": "Water", "x": 64, "y": 192, "width": 48, "height": 32, "open": [false, false, true, false] },
                        { "thing": "DirtMedium", "x": 112, "y": 192, "width": 16, "height": 32 },
                        { "thing": "BugCatcher", "x": 240, "y": 200, "name": "CaterpillerGuy", "roaming": true, "dialog": "You want to know about the 2 kinds of caterpillar %%%%%%%POKEMON%%%%%%%?", "dialogOptions": { "type": "Yes/No", "options": { "Yes": ["CATERPIE has no poison, but WEEDLE does.", "Watch out for its POISON STING!"], "No": "Oh, OK then!" } } },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 256, "y": 196, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "DirtLight", "x": 32, "y": 208, "width": 16, "height": 16 },
                        { "thing": "DirtLight", "x": 128, "y": 208, "width": 16, "height": 16 },
                        { "thing": "DirtLight", "x": 160, "y": 208, "width": 128, "height": 16 },
                        { "thing": "Ledge", "x": 32, "y": 220, "width": 32, "crumbleLeft": true },
                        { "thing": "Ledge", "x": 112, "y": 220, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 120, "y": 220 },
                        { "thing": "Ledge", "x": 128, "y": 220, "width": 24, "crumbleLeft": true, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 152, "y": 220 },
                        { "thing": "Ledge", "x": 160, "y": 220, "width": 128, "jagged": true },
                        { "thing": "DirtMedium", "y": 224, "width": 32, "height": 64 },
                        { "thing": "FenceWide", "x": 24, "y": 224, "height": 32 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 32, "y": 224, "xnum": 2, "ynum": 2 },
                        { "thing": "DirtMedium", "x": 48, "y": 224, "width": 80, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 128, "y": 224, "xnum": 2, "ynum": 2 },
                        { "thing": "DirtLight", "x": 160, "y": 224, "width": 16, "height": 16 },
                        { "thing": "DirtMedium", "x": 176, "y": 224, "width": 48, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 224, "y": 224, "xnum": 2, "ynum": 2 },
                        { "thing": "DirtMedium", "x": 240, "y": 224, "width": 32, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 272, "y": 224, "xnum": 2, "ynum": 2 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 48, "y": 228, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 192, "y": 228, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 240, "y": 228, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "Sign", "x": 168, "y": 232 },
                        { "thing": "DirtLight", "x": 32, "y": 240, "width": 128, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 160, "y": 240, "xnum": 2, "ynum": 6 },
                        { "thing": "DirtLight", "x": 176, "y": 240, "width": 112, "height": 16 },
                        { "thing": "FenceVertical", "x": 32, "y": 248, "width": 128 },
                        { "thing": "FenceVertical", "x": 176, "y": 248, "width": 112 },
                        { "thing": "DirtMedium", "x": 32, "y": 256, "width": 128, "height": 32 },
                        { "thing": "DirtMedium", "x": 176, "y": 256, "width": 144, "height": 32 },
                        { "thing": "FenceWide", "x": 104, "y": 256, "height": 32 },
                        { "thing": "FenceWide", "x": 152, "y": 256, "height": 32 },
                        { "thing": "FenceWide", "x": 176, "y": 256, "height": 32 },
                        { "thing": "FenceWide", "x": 224, "y": 256, "height": 32 },
                        { "thing": "AreaSpawner", "y": 280, "width": 320, "map": "Route 1", "area": "Land", "offsetX": 80 },
                    ]
                },
                "Nicknamer House": {
                    "width": 64,
                    "height": 64,
                    "invisibleWallBorders": true,
                    "creation": [
                        { "thing": "WallIndoorHorizontalBands", "width": 64 },
                        { "thing": "InvisibleWall", "width": 64 },
                        { "thing": "Cabinet", "width": 16 },
                        { "thing": "Painting", "x": 24, "dialog": "A TOWN MAP. (TO DO: TRIGGER TOWN MAP)" },
                        { "thing": "Clipboard", "x": 32, "dialog": "SPEAROW \n Name: SPEARY" },
                        { "thing": "Window", "x": 40 },
                        { "thing": "Bookshelf", "x": 56 },
                        { "thing": "FloorTiledDiagonal", "y": 8, "width": 64, "height": 56 },
                        { "thing": "Table2x3", "x": 24, "y": 24 },
                        { "thing": "Dad", "x": 40, "y": 24, "direction": 3, "roaming": true, "roamingDirections": [], "dialog": ["Coming up with nicknames is fun, but hard.", "Simple names are the easiest to remember."] },
                        { "thing": "Stool", "x": 16, "y": 24 },
                        { "thing": "Stool", "x": 40, "y": 24 },
                        { "thing": "Stool", "x": 16, "y": 32 },
                        { "thing": "Stool", "x": 40, "y": 32 },
                        { "thing": "LittleGirl", "x": 8, "y": 32, "roaming": true, "roamingDirections": [0, 2], "dialog": "My daddy loves %%%%%%%POKEMON%%%%%%% too." },
                        { "thing": "BirdPokemon", "x": 48, "y": 40, "direction": 3, "roaming": true, "roamingDirections": [1, 3], "dialog": "SPEARY: Tetweet!" },
                        { "thing": "PottedPalmTree", "y": 48 },
                        { "thing": "PottedPalmTree", "x": 56, "y": 48 },
                        { "thing": "DoormatDashed", "x": 16, "y": 56, "width": 16, "entrance": "Nicknamer House Floor 1 Door" },
                        { "thing": "HiddenTransporter", "x": 16, "y": 56, "width": 16, "transport": { "location": "Nicknamer House Front Door" }, "requireDirection": 2 }
                    ]
                },
                "School": {
                    "width": 64,
                    "height": 64,
                    "invisibleWallBorders": true,
                    "creation": [
                        { "thing": "WallIndoorHorizontalBands", "width": 64 },
                        { "thing": "InvisibleWall", "width": 64 },
                        { "thing": "Window", "x": 8 },
                        { "thing": "Blackboard", "x": 24 },
                        { "thing": "Bookshelf", "x": 56 },
                        { "thing": "FloorTiledDiagonal", "y": 8, "width": 64, "height": 56 },
                        { "thing": "Lass", "x": 32, "y": 8, "direction": 2, "directionPreferred": 2, "dialog": ["Okay!", "Be sure to read the blackboard carefully!"] },
                        { "thing": "Table2x3", "x": 24, "y": 24 },
                        { "thing": "Notepad", "x": 24, "y": 28 },
                        {
                            "thing": "DialogResponder", "x": 24, "y": 28, "dialog": ["Looked at the notebook!", "First page...", "%%%%%%%POKE%%%%%%% BALLs are used to catch %%%%%%%POKEMON%%%%%%%.", "Up to 6 %%%%%%%POKEMON%%%%%%% can be carried.", "People who raise and make %%%%%%%POKEMON%%%%%%% fight are called %%%%%%%POKEMON%%%%%%% trainers.", "Turn the page?"], "dialogOptions":
                              {
                                  "options": {
                                      "Yes": {
                                          "words": ["Second page...", "A healty %%%%%%%POKEMON%%%%%%% may be hard to catch, so weaken it first!", "Poison, burns, and other damage are effective!", "Turn the page?"],
                                          "options": {
                                              "Yes": {
                                                  "words": ["Third page...", "%%%%%%%POKEMON%%%%%%% trainers seek others to engage in %%%%%%%POKEMON%%%%%%% fights.", "Battles are constantly fought at %%%%%%%POKEMON%%%%%%% GYMs.", "Turn the page?"],
                                                  "options": {
                                                      "Yes": {
                                                          "words": ["Fourth page...", "The goal for %%%%%%%POKEMON%%%%%%% trainers is to beat the top 8 %%%%%%%POKEMON%%%%%%% GYM LEADERs.", "Do so to earn the right to face...", "The ELITE FOUR of %%%%%%%POKEMON%%%%%%% LEAGUE!", "GIRL: Hey! Don't look at my notes!"]
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                        },
                        { "thing": "Stool", "x": 24, "y": 40 },
                        { "thing": "Girl", "x": 24, "y": 40, "direction": 0, "dialog": "Whew! I'm trying to memorize all my notes." },
                        { "thing": "PottedPalmTree", "y": 48 },
                        { "thing": "PottedPalmTree", "x": 56, "y": 48 },
                        { "thing": "DoormatDashed", "x": 16, "y": 56, "width": 16, "entrance": "School Floor 1 Door" },
                        { "thing": "HiddenTransporter", "x": 16, "y": 56, "width": 16, "transport": { "location": "School Front Door" }, "requireDirection": 2 }
                    ]
                },
                "PokeCenter": {
                    "width": 112,
                    "height": 64,
                    "invisibleWallBorders": true,
                    "creation": [
                        { "macro": "PokeCenter", "entrance": "PokeCenter Inside Door", "transport": "PokeCenter Outside Door" },
                        { "thing": "CoolTrainerM", "x": 32, "y": 24, "roaming": true, "roamingDirections": [], "dialog": ["There's a %%%%%%%POKEMON%%%%%%% CENTER in every town ahead.", "They don't charge any money either!"] },
                        { "thing": "Gentleman", "x": 80, "y": 40, "direction": 0, "roaming": true, "roamingDirections": [0, 2], "dialog": ["You can use that PC in the corner.", "The receptionist told me. So kind!"] }
                    ]
                },
                "PokeMart": {
                    "width": 64,
                    "height": 64,
                    "invisibleWallBorders": true,
                    "creation": [
                        { "macro": "PokeMart", "entrance": "PokeMart Inside Door", "transport": "PokeMart Outside Door", "responderId": "CashierDetector", "responderDialog": "Okay! Say hi to PROF. Oak for me!", "items": [{ "item": "Pokeball", "cost": 200 }, { "item": "Antidote", "cost": 100 }, { "item": "Parlyz Heal", "cost": 200 }, { "item": "Burn Heal", "cost": 250 }] },
                        { "thing": "CoolTrainerM", "x": 24, "y": 24, "direction": 2, "roaming": true, "roamingDirections": [], "dialog": "No! POTIONS are all sold out." },
                        { "thing": "BugCatcher", "x": 48, "y": 40, "direction": 0, "roaming": true, "roamingDirections": [0, 2], "dialog": "This shop sells many ANTIDOTEs." },
                        { "thing": "CutsceneTriggerer", "x": 24, "y": 56, "width": 16, "id": "OakParcelPickup", "active": true, "cutscene": "OakParcelPickup" }
                    ]
                }
            }
        }, {
            "name": "Route 22",
            "locationDefault": "Pokemon League",
            "locations": {
                "Pokemon League": {
                    "area": "Land"
                }
            },
            "areas": {
                "Land": {
                    "width": 320,
                    "height": 144,
                    "wildPokemon": {
                        "grass": [{
                            "title": "Rattata",
                            "levels": [2, 3, 4],
                            "rate": .5
                        }, {
                            "title": "Spearow",
                            "levels": [3, 5],
                            "rate": .1
                        }, {
                            "title": "NidoranF",
                            "levels": [2, 3, 4],
                            "rate": .35
                        }, {
                            "title": "NidoranM",
                            "levels": [3, 4],
                            "rate": .05
                        }]
                    },
                    "creation": [
                        { "thing": "AreaSpawner", "x": 320, "height": 320, "map": "Viridian City", "area": "Land", "offsetY": -64 },
                        { "thing": "FenceWide", "width": 16, "height": 16 },
                        { "thing": "DirtLight", "width": 112, "height": 48 },
                        { "macro": "Building", "x": 16, "stories": 3, "width": 96, "door": true, "doorOffset": 48, "entrance": "Pokemon League" },
                        { "macro": "Mountain", "x": 112, "width": 208, "height": 8, "left": true },
                        { "macro": "Mountain", "x": 112, "y": 8, "width": 128, "height": 24, "right": true, "bottom": true, "left": true },
                        { "macro": "Mountain", "x": 232, "y": 8, "width": 56, "bottom": true },
                        { "macro": "Mountain", "x": 288, "y": 8, "width": 32, "height": 40, "bottom": true, "left": true },
                        { "macro": "Mountain", "y": 16, "top": true, "right": true, "width": 16, "height": 112 },
                        { "thing": "DirtMedium", "x": 240, "y": 16, "width": 48, "height": 16 },
                        { "thing": "DirtLight", "x": 112, "y": 32, "width": 16, "height": 64 },
                        { "thing": "FenceWide", "x": 112, "y": 32, "width": 16, "height": 64 },
                        { "thing": "Ledge", "x": 240, "y": 28, "width": 24, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 264, "y": 28 },
                        { "thing": "Ledge", "x": 272, "y": 28, "width": 16 },
                        { "thing": "BrickRoad", "x": 128, "y": 32, "width": 160, "height": 16 },
                        { "thing": "BrickRoad", "x": 16, "y": 48, "width": 96, "height": 16 },
                        { "thing": "CutsceneTriggerer", "x": 228, "y": 32, "height": 16, "id": "RivalTriggerer", "cutscene": "RivalRoute22" },
                        { "thing": "DirtMedium", "x": 128, "y": 48, "width": 48, "height": 16 },
                        { "macro": "Water", "x": 176, "y": 48, "width": 32, "height": 32, "open": [false, false, true, false] },
                        { "thing": "DirtMedium", "x": 208, "y": 48, "width": 80, "height": 64 },
                        { "thing": "DirtMedium", "x": 288, "y": 48, "width": 32, "height": 16 },
                        { "macro": "Mountain", "x": 208, "y": 48, "width": 32, "height": 64, "top": true, "right": true, "bottom": true, "left": true },
                        { "thing": "FenceWide", "x": 272, "y": 48, "width": 16 },
                        { "thing": "FenceWide", "x": 272, "y": 56, "height": 40 },
                        { "thing": "Ledge", "x": 128, "y": 60, "width": 48 },
                        { "thing": "Ledge", "x": 240, "y": 60, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 248, "y": 60 },
                        { "thing": "Ledge", "x": 256, "y": 60, "width": 16 },
                        { "thing": "DirtMedium", "x": 16, "y": 64, "width": 96, "height": 16 },
                        { "thing": "DirtMedium", "x": 128, "y": 64, "width": 48, "height": 32 },
                        { "thing": "Grass", "x": 128, "y": 64, "width": 48, "height": 32 },
                        { "thing": "Grass", "x": 240, "y": 64, "width": 32, "height": 32 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 288, "y": 64, "xnum": 4, "ynum": 2 },
                        { "thing": "Ledge", "x": 16, "y": 76, "width": 72, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 88, "y": 76 },
                        { "thing": "Ledge", "x": 96, "y": 76, "width": 16 },
                        { "thing": "DirtLight", "x": 16, "y": 80, "width": 96, "height": 16 },
                        { "thing": "BrickRoad", "x": 176, "y": 80, "width": 32, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 288, "y": 80, "xnum": 2, "ynum": 2 },
                        { "thing": "FenceVertical", "x": 48, "y": 88, "width": 8 },
                        { "thing": "Sign", "x": 56, "y": 88, "dialog": "POKEMON LEAGUE Front Gate" },
                        { "thing": "FenceVertical", "x": 64, "y": 88, "width": 48 },
                        { "thing": "DirtClean", "x": 304, "y": 80 },
                        { "macro": "Mountain", "x": 304, "y": 80, "top": true, "left": true, "width": 16, "height": 48 },
                        { "thing": "DirtMedium", "x": 16, "y": 96, "width": 192, "height": 16 },
                        { "thing": "DirtMedium", "x": 288, "y": 96, "width": 16, "height": 16 },
                        { "thing": "Ledge", "x": 16, "y": 108, "width": 192 },
                        { "thing": "Ledge", "x": 240, "y": 108, "width": 24, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 264, "y": 108 },
                        { "thing": "Ledge", "x": 272, "y": 108, "width": 32 },
                        { "thing": "BrickRoad", "x": 16, "y": 112, "width": 288, "height": 16 },
                        { "thing": "Mountain", "y": 128, "width": 16, "height": 16 },
                        { "thing": "Mountain", "x": 16, "y": 128, "width": 288, "height": 16, "top": true },
                        { "thing": "Mountain", "x": 304, "y": 128, "width": 16, "height": 16 }
                    ]
                }
            }
        }, {
            "name": "Route 2",
            "locationDefault": "Viridian Forest",
            "locations": {
                "Viridian Forest": {
                    "area": "Land"
                }
            },
            "areas": {
                "Land": {
                    "width": 224,
                    "height": 592,
                    "creation": [
                        { "thing": "DirtMedium", "width": 96, "height": 16 },
                        { "thing": "PlantSmall", "width": 96, "height": 16 },
                        { "thing": "DirtMedium", "x": 112, "width": 120, "height": 16 },
                        { "thing": "PlantSmall", "x": 112, "width": 120, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 96, "xnum": 2, "ynum": 10 },
                        { "thing": "DirtMedium", "y": 16, "width": 32, "height": 576 },
                        { "thing": "PlantSmall", "y": 16, "width": 32, "height": 576 },
                        { "thing": "DirtMedium", "x": 192, "y": 16, "width": 40, "height": 576 },
                        { "thing": "PlantSmall", "x": 192, "y": 16, "width": 40, "height": 576 },
                        { "thing": "DirtMedium", "x": 32, "y": 16, "width": 64, "height": 64 },
                        { "thing": "PlantSmall", "x": 32, "y": 16, "width": 64, "height": 16 },
                        { "thing": "DirtMedium", "x": 112, "y": 16, "width": 80, "height": 16 },
                        { "thing": "PlantSmall", "x": 112, "y": 16, "width": 80, "height": 16 },
                        { "thing": "Grass", "x": 32, "y": 32, "width": 64, "height": 48 },
                        { "thing": "DirtWhite", "x": 112, "y": 32, "width": 16, "height": 32 },
                        { "thing": "FenceVertical", "x": 112, "y": 32, "width": 8, "height": 32 },
                        { "thing": "DirtLight", "x": 128, "y": 32, "width": 64, "height": 32 },
                        { "thing": "DirtWhite", "x": 112, "y": 64 },
                        { "macro": "Mountain", "x": 112, "y": 64, "width": 64, "height": 32, "top": true, "right": true, "bottom": true, "left": true, "opening": true },
                        { "thing": "DirtLight", "x": 168, "y": 64, "width": 24, "height": 32 },
                        { "thing": "DirtLight", "x": 32, "y": 80, "width": 80, "height": 16 },
                        { "thing": "DirtMedium", "x": 32, "y": 96, "width": 80, "height": 48 },
                        { "thing": "PlantSmall", "x": 32, "y": 96, "width": 24 },
                        { "thing": "PlantSmall", "x": 64, "y": 96, "height": 16 },
                        { "thing": "Tree", "x": 72, "y": 96 },
                        { "thing": "PlantSmall", "x": 80, "y": 96, "width": 32 },
                        { "thing": "DirtLight", "x": 112, "y": 96, "width": 32, "height": 32 },
                        { "thing": "DirtMedium", "x": 144, "y": 96, "width": 48, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 144, "y": 100, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "PlantSmall", "x": 48, "y": 104 },
                        { "thing": "Sign", "x": 120, "y": 104 },
                        { "macro": "Building", "x": 48, "y": 112, "door": true },
                        { "thing": "DirtLight", "x": 144, "y": 112, "width": 48, "height": 16 },
                        { "thing": "DirtMedium", "x": 112, "y": 128, "width": 64, "height": 16 },
                        { "thing": "DirtLight", "x": 176, "y": 128, "width": 16, "height": 64 },
                        { "thing": "FenceWide", "x": 32, "y": 136, "width": 16 },
                        { "thing": "FenceWide", "x": 80, "y": 136, "width": 64 },
                        { "thing": "BrickRoad", "x": 32, "y": 144, "width": 64, "height": 16 },
                        { "thing": "DirtMedium", "x": 96, "y": 144, "width": 48, "height": 48 },
                        { "thing": "PlantSmall", "x": 96, "y": 144, "width": 48, "height": 48 },
                        { "thing": "DirtMedium", "x": 144, "y": 144, "width": 32, "height": 16 },
                        { "thing": "DirtLight", "x": 32, "y": 160, "width": 64, "height": 16 },
                        { "thing": "DirtLight", "x": 144, "y": 160, "width": 32, "height": 32 },
                        { "macro": "House", "x": 144, "y": 160, "door": true },
                        { "thing": "Ledge", "x": 32, "y": 172, "width": 64, "jagged": true },
                        { "thing": "DirtMedium", "x": 32, "y": 176, "width": 16, "height": 16 },
                        { "thing": "Grass", "x": 32, "y": 176, "width": 16, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 48, "y": 176, "xnum": 2, "ynum": 2 },
                        { "thing": "DirtMedium", "x": 64, "y": 176, "width": 32, "height": 16 },
                        { "thing": "Grass", "x": 64, "y": 176, "width": 32, "height": 16 },
                        { "thing": "DirtMedium", "x": 32, "y": 192, "width": 160, "height": 176 },
                        { "thing": "PlantSmall", "x": 32, "y": 192, "width": 112, "height": 128 },
                        { "thing": "PlantSmall", "x": 144, "y": 192, "height": 16 },
                        { "thing": "Tree", "x": 152, "y": 192 },
                        { "thing": "PlantSmall", "x": 160, "y": 192, "width": 32 },
                        { "thing": "Ledge", "x": 144, "y": 236, "width": 24, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 168, "y": 236 },
                        { "thing": "Ledge", "x": 176, "y": 236, "width": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 176, "y": 244, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "Ledge", "x": 144, "y": 268, "width": 24, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 168, "y": 268 },
                        { "thing": "Ledge", "x": 176, "y": 268, "width": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 176, "y": 276, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "FenceWide", "x": 144, "y": 296, "width": 16 },
                        { "thing": "FenceWide", "x": 176, "y": 296, "width": 16 },
                        { "macro": "Building", "x": 144, "y": 304, "width": 48, "door": true },
                        { "thing": "PlantSmall", "x": 32, "y": 320, "width": 24 },
                        { "thing": "PlantSmall", "x": 64, "y": 320 },
                        { "thing": "Tree", "x": 72, "y": 320 },
                        { "thing": "PlantSmall", "x": 80, "y": 320, "width": 64 },
                        { "thing": "PlantSmall", "x": 48, "y": 328 },
                        { "thing": "PlantSmall", "x": 64, "y": 328 },
                        { "thing": "PlantSmall", "x": 112, "y": 328, "width": 32, "height": 40 },
                        { "macro": "Building", "x": 48, "y": 336, "width": 32, "height": 32, "door": true, "entrance": "Viridian Forest" },
                        { "thing": "FenceWide", "x": 32, "y": 360, "width": 16 },
                        { "thing": "FenceWide", "x": 80, "y": 360, "width": 32 },
                        { "thing": "Ledge", "x": 144, "y": 364, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 152, "y": 364 },
                        { "thing": "Ledge", "x": 160, "y": 364, "width": 32 },
                        { "thing": "BrickRoad", "x": 32, "y": 368, "width": 80, "height": 16 },
                        { "thing": "DirtMedium", "x": 112, "y": 368, "width": 80, "height": 200 },
                        { "thing": "PlantSmall", "x": 120, "y": 368, "height": 64 },
                        { "thing": "Pokeball", "x": 136, "y": 376 },
                        { "thing": "DirtLight", "x": 32, "y": 384, "width": 64, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 96, "y": 384, "xnum": 2, "ynum": 2 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 160, "y": 388, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "Ledge", "x": 32, "y": 396, "width": 64, "jagged": true },
                        { "thing": "DirtMedium", "x": 32, "y": 400, "width": 16, "height": 192 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 48, "y": 400, "xnum": 2, "ynum": 12 },
                        { "thing": "DirtMedium", "x": 64, "y": 400, "width": 48, "height": 80 },
                        { "thing": "Grass", "x": 64, "y": 400, "width": 48, "height": 32 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 32, "y": 404, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "Ledge", "x": 128, "y": 412, "width": 24, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 152, "y": 412 },
                        { "thing": "Ledge", "x": 160, "y": 412, "width": 32 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 32, "y": 420, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "Tree", "x": 128, "y": 432 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 32, "y": 436, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "PlantSmall", "x": 80, "y": 440, "width": 64 },
                        { "thing": "PlantSmall", "x": 72, "y": 448, "width": 64, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 32, "y": 452, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "Pokeball", "x": 136, "y": 448 },
                        { "thing": "PlantSmall", "x": 80, "y": 464, "width": 56 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 32, "y": 468, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 144, "y": 468, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "PlantSmall", "x": 128, "y": 472, "height": 24 },
                        { "thing": "DirtLight", "x": 64, "y": 480, "width": 48, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 32, "y": 484, "xnum": 4, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 144, "y": 484, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "PlantSmall", "x": 32, "y": 496, "width": 16, "height": 96 },
                        { "thing": "DirtMedium", "x": 48, "y": 496, "width": 48, "height": 32 },
                        { "thing": "DirtLight", "x": 96, "y": 496, "width": 16, "height": 64 },
                        { "thing": "Tree", "x": 128, "y": 496 },
                        { "thing": "PlantSmall", "x": 128, "y": 504, "width": 16 },
                        { "thing": "Ledge", "x": 48, "y": 508, "width": 40, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 88, "y": 508 },
                        { "thing": "Ledge", "x": 96, "y": 508, "width": 32, "crumbleLeft": true },
                        { "thing": "Ledge", "x": 144, "y": 508, "crumbleRight": true },
                        { "thing": "LedgeOpening", "x": 152, "y": 508 },
                        { "thing": "Ledge", "x": 160, "y": 508, "width": 32 },
                        { "thing": "PlantSmall", "x": 128, "y": 512, "height": 48 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 48, "y": 516, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "DirtLight", "x": 48, "y": 528, "width": 48, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 144, "y": 532, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "thing": "Sign", "x": 72, "y": 536 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 48, "y": 544, "xnum": 2, "ynum": 4 },
                        { "thing": "DirtMedium", "x": 64, "y": 544, "width": 32, "height": 16 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 64, "y": 548, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["", "Flower"], "x": 144, "y": 548, "xnum": 8, "ynum": 2, "xwidth": 4, "yheight": 4 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 64, "y": 560, "xnum": 6, "ynum": 2 },
                        { "thing": "Tree", "x": 128, "y": 560 },
                        { "thing": "DirtMedium", "x": 112, "y": 568, "width": 80, "height": 24 },
                        { "thing": "PlantSmall", "x": 112, "y": 568, "width": 80, "height": 24 },
                        { "thing": "DirtMedium", "x": 48, "y": 576, "width": 32, "height": 16 },
                        { "thing": "PlantSmall", "x": 48, "y": 576, "width": 32, "height": 16 },
                        { "thing": "DirtWhite", "x": 80, "y": 576, "width": 16, "height": 16 },
                        { "thing": "FenceVertical", "x": 80, "y": 576, "width": 8, "height": 16 },
                        { "macro": "Checkered", "things": ["DirtClean", "DirtWhite"], "x": 96, "y": 576, "xnum": 2, "ynum": 2 },
                        { "thing": "AreaSpawner", "y": 584, "width": 608, "map": "Viridian City", "area": "Land", "offsetX": -48 }
                    ]
                }
            }
        }, {
            "name": "Viridian Forest",
            "locationDefault": "Bottom Inside Entrance",
            "locations": {
                "Bottom Inside Entrance": {
                    "area": "Forest",
                    "xloc": 80,
                    "yloc": 264,
                    //"xloc": 144,
                    //"yloc": 376
                }
            },
            "areas": {
                "Forest": {
                    "width": 272,
                    "height": 384,
                    "creation": [
                        { "thing": "DirtForest", "width": 272, "height": 384 },
                        { "thing": "Stump", "height": 208 },
                        { "thing": "Stump", "x": 24, "height": 176 },
                        { "thing": "PlantLarge", "x": 32, "height": 176 },
                        { "thing": "Stump", "x": 48, "width": 64 },
                        { "thing": "PlantLarge", "x": 112, "height": 128 },
                        { "thing": "Stump", "x": 128, "width": 144 },
                        { "thing": "Sign", "x": 16, "y": 8, "forest": true },
                        { "thing": "Stump", "x": 264, "y": 8, "height": 264 },
                        { "thing": "Stump", "x": 160, "y": 24, "width": 80 },
                        { "thing": "ForestDirt", "x": 104, "y": 28 },
                        { "thing": "ForestDirt", "x": 152, "y": 28 },
                        { "thing": "ForestDirt", "x": 248, "y": 28 },
                        { "thing": "Stump", "x": 72, "y": 32, "height": 160 },
                        { "thing": "Stump", "x": 80, "y": 32, "height": 128 },
                        { "thing": "Stump", "x": 152, "y": 32, "height": 32 },
                        { "thing": "PlantLarge", "x": 160, "y": 32, "width": 80, "height": 32 },
                        { "thing": "Stump", "x": 240, "y": 32, "height": 32 },
                        { "thing": "Grass", "x": 8, "y": 48, "width": 16, "height": 144 },
                        { "thing": "Grass", "x": 48, "y": 48, "width": 24, "height": 144 },
                        { "thing": "Grass", "x": 88, "y": 48, "width": 24, "height": 96 },
                        { "thing": "Grass", "x": 128, "y": 48, "width": 24, "height": 96 },
                        { "thing": "Grass", "x": 152, "y": 64, "width": 40, "height": 16 },
                        { "thing": "ForestDirt", "x": 216, "y": 76 },
                        { "thing": "Stump", "x": 152, "y": 80, "height": 80 },
                        { "thing": "PlantLarge", "x": 160, "y": 80, "width": 32, "height": 80 },
                        { "thing": "Stump", "x": 192, "y": 80, "height": 240 },
                        { "thing": "Stump", "x": 216, "y": 80, "height": 64 },
                        { "thing": "PlantLarge", "x": 224, "y": 80, "height": 64 },
                        { "thing": "Grass", "x": 240, "y": 80, "width": 24, "height": 64 },
                        { "thing": "Sign", "x": 208, "y": 138, "forest": true },
                        { "thing": "ForestDirt", "x": 104, "y": 156 },
                        { "thing": "ForestDirt", "x": 216, "y": 156 },
                        { "thing": "PlantLarge", "x": 80, "y": 160, "width": 112, "height": 32 },
                        { "thing": "Grass", "x": 200, "y": 160, "width": 24, "height": 96 },
                        { "thing": "PlantLarge", "x": 224, "y": 160, "height": 96 },
                        { "thing": "Stump", "x": 240, "y": 160, "height": 96 },
                        { "thing": "Grass", "x": 24, "y": 176, "height": 16 },
                        { "thing": "Sign", "x": 32, "y": 192, "forest": true },
                        { "thing": "ForestDirt", "x": 56, "y": 204 },
                        { "thing": "Stump", "x": 104, "y": 192, "height": 48 },
                        { "thing": "PlantLarge", "x": 112, "y": 192, "width": 80, "height": 48 },
                        { "thing": "PlantLarge", "y": 208, "width": 80, "height": 32 },
                        { "thing": "Stump", "x": 80, "y": 208, "height": 32 },
                        { "thing": "Stump", "y": 240, "height": 16 },
                        { "thing": "Grass", "x": 8, "y": 240, "width": 64, "height": 16 },
                        { "thing": "Stump", "x": 72, "y": 240, "height": 16 },
                        { "thing": "PlantLarge", "x": 80, "y": 240, "width": 112 },
                        { "thing": "PlantLarge", "y": 256, "width": 48, "height": 64 },
                        { "thing": "Grass", "x": 64, "y": 256, "width": 64, "height": 16 },
                        { "thing": "Sign", "x": 128, "y": 256, "forest": true },
                        { "thing": "Grass", "x": 144, "y": 256, "height": 80 },
                        { "thing": "Stump", "x": 152, "y": 256, "height": 64 },
                        { "thing": "PlantLarge", "x": 160, "y": 256, "width": 32, "height": 64 },
                        { "thing": "Grass", "x": 200, "y": 256, "height": 80 },
                        { "thing": "ForestDirt", "x": 56, "y": 268 },
                        { "thing": "ForestDirt", "x": 248, "y": 268 },
                        { "thing": "Grass", "x": 64, "y": 272, "height": 64 },
                        { "thing": "Stump", "x": 72, "y": 272, "height": 48 },
                        { "thing": "PlantLarge", "x": 80, "y": 272, "width": 32, "height": 48 },
                        { "thing": "Stump", "x": 112, "y": 272, "height": 48 },
                        { "thing": "Grass", "x": 120, "y": 272, "height": 64 },
                        { "thing": "PlantLarge", "x": 224, "y": 272, "width": 48, "height": 48 },
                        { "thing": "Stump", "y": 320, "height": 32 },
                        { "thing": "Grass", "x": 8, "y": 320, "width": 32, "height": 32 },
                        { "thing": "Grass", "x": 72, "y": 320, "width": 48, "height": 16 },
                        { "thing": "Grass", "x": 152, "y": 320, "width": 48, "height": 16 },
                        { "thing": "Sign", "x": 192, "y": 320, "forest": true },
                        { "thing": "Grass", "x": 224, "y": 320, "width": 40, "height": 32 },
                        { "thing": "Stump", "x": 264, "y": 320, "height": 32 },
                        { "thing": "PlantLarge", "x": 128, "y": 328 },
                        { "thing": "PlantLarge", "y": 352, "width": 112, "height": 32 },
                        { "thing": "Stump", "x": 112, "y": 352, "height": 32 },
                        { "thing": "Stump", "x": 152, "y": 352, "height": 32 },
                        { "thing": "PlantLarge", "x": 160, "y": 352, "width": 112, "height": 32 },
                        { "thing": "Sign", "x": 144, "y": 360, "forest": true },
                        { "thing": "GroundArrow", "x": 132, "y": 368, "width": 8 }
                    ]
                }
            }
        }
    ])
};