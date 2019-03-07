var tier = {};

tier.sss = [];
tier.ss = [];
tier.s = [];
tier.a = [];
tier.b = [];
tier.c = [];
tier.d = [];
tier.f = [];

//
// tier.s.push("tidehunter", "enigma", "lone_druid", "techies", "timbersaw");
// tier.a.push("dragon_knight","disruptor", "bounty_hunter", "medusa" ,"gyrocopter", "templar_assassin", "razor"
//     ,"queen_of_pain", "clockwerk", "beastmaster", "kunkka", "troll_warlord", "juggernaut", "necrophos", "doom", "shadow_fiend");
// tier.bplus.push("anti_mage", "lycan", "lina", "lich", "windranger", "axe");
// tier.b.push("luna", "terrorblade", "abaddon", "chaos_knight", "tinker", "crystal_maden", "");

tier.sss.push("medusa", "dragon_knight", "tidehunter","enigma");
tier.ss.push("bounty_hunter", "clockwerk", "timbersaw", "lone_druid", "disruptor", "techies");
tier.s.push("anti_mage", "doom", "kunkka", "necrophos", "gyrocopter");
tier.a.push("axe", "juggernaut", "beastmaster", "queen_of_pain", "razor", "shadow_fiend", "windranger", "templar_assassin");
tier.b.push("drow_ranger", "chaos_knight", "luna", "abaddon", "omniknight", "lycan", "viper", "troll_warlord", "lich",
    "mirana", "death_prophet");
tier.c.push("enchantress", "treant_protector", "crystal_maden", "puck", "slardar", "morphling", "phantom_assassin",
    "terrorblade", "lina", "keeper_of_the_light");
tier.d.push("tinker", "ogre_magi", "tusk", "shadow_shaman", "witch_doctor", "slark", "furion", "tiny", "sniper");
tier.f.push("bat_rider", "sand_king", "venomancer", "alchemist", "riki");
//....


function addMark() {
    Object.keys(tier).forEach(key => {
        var tier_list = tier[key]
        tier_list.forEach( name => {
            var div = document.createElement("div");
            div.innerText = key.toUpperCase();
            div.className = "tier tier_" + key;
            $("." + name).prepend(div)
        })
    })
}