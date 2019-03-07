anti_mage = ['anti_mage', 'elf','demonhunter'];
treant_protector = ['treant_protector', 'elf', 'druid'];
luna = ['luna', 'elf', 'knight'];
furion = ['furion', 'elf', 'druid']
puck = ['puck', 'elf', 'dragon', 'mage'];
windranger = ['windranger', 'elf', 'hunter'];
phantom_assassin = ['phantom_assassin', 'elf', 'assassin'];
mirana = ['mirana', 'elf', 'hunter'];
templar_assassin = ['templar_assassin', 'elf', 'assassin'];

crystal_maden = ['crystal_maden', 'human', 'mage'];
omniknight = ['omniknight', 'human', 'knight']
lina = ['lina', 'human', 'mage'];
lycan = ['lycan', 'human', 'beast', 'warrior'];
kunkka = ['kunkka', 'human', 'warrior'];
keeper_of_the_light = ['keeper_of_the_light', 'human', 'mage'];
dragon_knight = ['dragon_knight', 'human', 'knight', 'dragon'];

enchantress = ['enchantress', 'beast', 'druid'];
tusk = ['tusk', 'beast', 'warrior']
venomancer = ['venomancer', 'beast', 'warlock'];
sand_king = ['sand_king', 'beast', 'assassin']
lone_druid = ['lone_druid', 'beast', 'druid'];

tinker = ['tinker', 'goblin', 'mech'];
clockwerk = ['clockwerk', 'goblin', 'mech']
bounty_hunter = ['bounty_hunter', 'goblin', 'assassin'];
timbersaw = ['timbersaw', 'goblin', 'mech']
alchemist = ['alchemist', 'goblin', 'warlock'];
techies = ['techies', 'goblin', 'mech'];

queen_of_pain = ['queen_of_pain', 'demon', 'assassin'];
chaos_knight = ['chaos_knight', 'demon', 'knight']
terrorblade = ['terrorblade', 'demon', 'demonhunter'];
shadow_fiend = ['shadow_fiend', 'demon', 'warlock']
doom = ['doom', 'demon', 'warrior'];

drow_ranger = ['drow_ranger', 'undead', 'hunter'];
abaddon = ['abaddon', 'undead', 'knight']
necrophos = ['necrophos', 'undead', 'warlock'];
lich = ['lich', 'undead', 'mage']
death_prophet = ['death_prophet', 'undead', 'warlock'];

axe = ['axe', 'orc', 'warrior'];
beastmaster = ['beastmaster', 'orc', 'hunter']
juggernaut = ['juggernaut', 'orc', 'warrior'];
disruptor = ['disruptor', 'orc', 'shaman']

slardar = ['slardar', 'naga', 'warrior'];
slark = ['slark', 'naga', 'assassin']
medusa = ['medusa', 'naga', 'hunter'];
tidehunter = ['tidehunter', 'naga', 'hunter']

tiny = ['tiny', 'elementals', 'warrior'];
morphling = ['morphling', 'elementals', 'assassin']
razor = ['razor', 'elementals', 'mage'];
enigma = ['enigma', 'elementals', 'warlock']

bat_rider = ['bat_rider', 'troll', 'knight'];
shadow_shaman = ['shadow_shaman', 'troll', 'shaman']
witch_doctor = ['witch_doctor', 'troll', 'warlock'];
troll_warlord = ['troll_warlord', 'troll', 'warrior']

viper = ['viper', 'dragon', 'assassin']

sniper = ['sniper', 'dwarf', 'hunter'];
gyrocopter = ['gyrocopter', 'dwarf', 'mech']

riki = ['riki', 'satyr', 'assassin'];

ogre_magi = ['ogre_magi', 'ogre', 'mage'];


var PROBS = [
    [100, 0, 0, 0, 0],
    [70, 30, 0, 0, 0],
    [60, 35, 5, 0, 0],
    [50, 35, 15, 0, 0],
    [40, 35, 23, 2, 0],
    [33, 30, 30, 7, 0],
    [30, 30, 30, 10, 0],
    [24, 30, 30, 15, 1],
    [22, 30, 25, 20, 3],
    [19, 25, 25, 25, 6]
];

var CHARS = [
    [axe,enchantress,ogre_magi, tusk, drow_ranger, bounty_hunter, clockwerk, shadow_shaman, bat_rider, tinker, anti_mage, tiny],
    [crystal_maden, beastmaster, juggernaut, timbersaw, queen_of_pain, puck, witch_doctor, slardar, chaos_knight, treant_protector, luna, furion, morphling, slark],
    [lycan, venomancer, omniknight, razor, windranger, phantom_assassin, abaddon, sand_king, riki, sniper, viper, shadow_fiend, lina, terrorblade, mirana],
    [doom, kunkka, troll_warlord, keeper_of_the_light, necrophos, templar_assassin, alchemist, disruptor, medusa, dragon_knight, lone_druid],
    [tidehunter, techies, gyrocopter, enigma, lich, death_prophet]
];

var level  = 1;


function get_char_cost(level) {
    var prob = PROBS[level];
    var std= []
    var sum_p = 0;
    prob.forEach(p => {
        sum_p = sum_p + Number(p);
        std.push(sum_p)
    });
    var n = Math.floor(Math.random() * 100)
    for(var i=0; i<std.length; i++) {
        if(n < std[i]) {
            return i;
        }
    }
    return std.length;
}

function get_char(cost) {
    var n = Math.floor(Math.random() * CHARS[cost].length)
    return [CHARS[cost][n], cost+1];
}
function get_roll(level, f) {
    for(var i=0; i<5; i++) {
        f(get_char(get_char_cost(level-1)));
    }
}

function disp_char(info) {
    console.log(info)
    var cost = info[1]
    var name = info[0][0];
    var kname = info[0][0];
    var class_type = info[0][1] + " " + info[0][2]
    var r = "<td><div class=\"pieces cost_" + cost + " " + name + "\"><img src=pieces\\" + name +
        ".png><div class=\"name\"><span data-tooltip-text=\"" + kname + "\">" +
        class_type + "</span></div></div></td>"
    console.log(r);
}

get_roll(4, disp_char);


