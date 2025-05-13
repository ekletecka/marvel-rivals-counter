const heroData = {
 heroes: [
 { name: "Adam Warlock", role: "Strategist", counters: ["Black Panther", "Spider-Man", "Iron Man"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Black Panther", role: "Duelist", counters: ["Luna Snow", "Rocket Raccoon", "Mantis"], counteredBy: ["Winter Soldier", "Namor", "Emma Frost"] },
 { name: "Black Widow", role: "Duelist", counters: ["Psylocke", "Iron Man", "Hawkeye"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Captain America", role: "Vanguard", counters: ["Venom", "Wolverine", "Iron Fist"], counteredBy: ["Magneto", "Groot", "Doctor Strange"] },
 { name: "Cloak & Dagger", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Magneto", "Emma Frost", "Hela"] },
 { name: "Doctor Strange", role: "Vanguard", counters: ["Spider-Man", "Iron Man", "Psylocke"], counteredBy: ["Hela", "Storm", "Magneto"] },
 { name: "Emma Frost", role: "Vanguard", counters: ["Black Panther", "Wolverine", "Iron Fist"], counteredBy: ["Storm", "Hela", "Winter Soldier"] },
 { name: "Groot", role: "Vanguard", counters: ["Spider-Man", "Venom", "Iron Man"], counteredBy: ["Hela", "Storm", "Magneto"] },
 { name: "Hawkeye", role: "Duelist", counters: ["Psylocke", "Iron Man", "Black Widow"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Hela", role: "Duelist", counters: ["Black Widow", "Hawkeye", "Psylocke"], counteredBy: ["Winter Soldier", "Storm", "Magneto"] },
 { name: "Hulk", role: "Vanguard", counters: ["Venom", "Wolverine", "Iron Fist"], counteredBy: ["Hela", "Storm", "Magneto"] },
 { name: "Human Torch", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Invisible Woman", role: "Strategist", counters: ["Black Panther", "Spider-Man", "Iron Man"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Iron Fist", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Emma Frost", "Hulk", "Captain America"] },
 { name: "Iron Man", role: "Duelist", counters: ["Psylocke", "Black Widow", "Hawkeye"], counteredBy: ["Hela", "Storm", "Doctor Strange"] },
 { name: "Jeff the Land Shark", role: "Strategist", counters: ["Black Panther", "Spider-Man", "Iron Man"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Loki", role: "Strategist", counters: ["Black Panther", "Spider-Man", "Iron Man"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Luna Snow", role: "Strategist", counters: ["Black Panther", "Spider-Man", "Iron Man"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Magik", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Magneto", role: "Vanguard", counters: ["Venom", "Wolverine", "Iron Fist"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Mantis", role: "Strategist", counters: ["Black Panther", "Spider-Man", "Iron Man"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Mister Fantastic", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Moon Knight", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Namor", role: "Duelist", counters: ["Black Panther", "Spider-Man", "Iron Man"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Peni Parker", role: "Vanguard", counters: ["Venom", "Wolverine", "Iron Fist"], counteredBy: ["Hela", "Storm", "Magneto"] },
 { name: "Psylocke", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Punisher", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Rocket Raccoon", role: "Strategist", counters: ["Black Panther", "Spider-Man", "Iron Man"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Scarlet Witch", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Spider-Man", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Doctor Strange"] },
 { name: "Squirrel Girl", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Winter Soldier"] },
 { name: "Star-Lord", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Magneto"] },
 { name: "Storm", role: "Duelist", counters: ["Black Widow", "Hawkeye", "Psylocke"], counteredBy: ["Winter Soldier", "Magneto", "Doctor Strange"] },
 { name: "The Thing", role: "Vanguard", counters: ["Venom", "Wolverine", "Iron Fist"], counteredBy: ["Hela", "Storm", "Magneto"] },
 { name: "Thor", role: "Vanguard", counters: ["Venom", "Wolverine", "Iron Fist"], counteredBy: ["Hela", "Storm", "Magneto"] },
 { name: "Venom", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Magneto"] },
 { name: "Winter Soldier", role: "Duelist", counters: ["Black Widow", "Hawkeye", "Psylocke"], counteredBy: ["Magneto", "Doctor Strange", "Groot"] },
 { name: "Wolverine", role: "Duelist", counters: ["Luna Snow", "Mantis", "Adam Warlock"], counteredBy: ["Hela", "Storm", "Magneto"] }
 ],
 maps: [
 {
 name: "Tokyo 2099: Shin-Shibuya",
 recommendedHeroes: [
 { name: "Psylocke", reason: "Psychic Stealth excels in vertical combat." },
 { name: "Hulk", reason: "Crowd control suits tight alleyways." },
 { name: "Doctor Strange", reason: "Portals aid team pushes in cramped spaces." }
 ]
 }, 
 {
 name: "Tokyo 2099: Spider-Islands",
 recommendedHeroes: [
 { name: "Iron Man", reason: "Flight and AoE dominate choke points." },
 { name: "Peni Parker", reason: "Mech breaks walls for convoy paths." },
 { name: "Rocket Raccoon", reason: "Traps and healing support pushes." }
 ]
 },
 {
 name: "Yggsard: Yggdrasil Path",
 recommendedHeroes: [
 { name: "Hela", reason: "High-damage projectiles control open spaces." },
 { name: "Thor", reason: "Map-wide abilities secure choke points." },
 { name: "Loki", reason: "Clones enhance battlefield control." }
 ]
 },
 {
 name: "Yggsard: Royal Palace",
 recommendedHeroes: [
 { name: "Doctor Strange", reason: "Portals control Throne Room choke points." },
 { name: "Hawkeye", reason: "Sniper shots hold high ground." },
 { name: "Magneto", reason: "Bubbles secure objectives." }
 ]
 },
 {
 name: "Wakanda: Hall of Djalia",
 recommendedHeroes: [
 { name: "Spider-Man", reason: "Vertical mobility controls elevated areas." },
 { name: "Storm", reason: "Area control suits open layouts." },
 { name: "Groot", reason: "Walls block convoy paths." }
 ]
 },
 {
 name: "Wakanda: Birnin T'Challa",
 recommendedHeroes: [
 { name: "Thor", reason: "Soaks damage in open zones." },
 { name: "Black Panther", reason: "Mobility suits objective skirmishes." },
 { name: "Luna Snow", reason: "Healing secures team fights." }
 ]
 },
 {
 name: "Klyntar: Symbiotic Surface",
 recommendedHeroes: [
 { name: "Winter Soldier", reason: "Balanced kit for ranged and melee." },
 { name: "Venom", reason: "Symbiote Strike ambushes tight spaces." },
 { name: "Rocket Raccoon", reason: "Healing and traps support team." }
 ]
 },
 {
 name: "Hydra Charteris Base: Hell's Heaven",
 recommendedHeroes: [
 { name: "Black Panther", reason: "Agility thrives in narrow corridors." },
 { name: "Hulk", reason: "Survivability holds objectives." },
 { name: "Mantis", reason: "Burst damage supports team fights." }
 ]
 },
 {
 name: "Empire of Eternal Night: Midtown",
 recommendedHeroes: [
 { name: "Iron Man", reason: "Flight controls choke points." },
 { name: "Doctor Strange", reason: "Portals push convoys." },
 { name: "Hawkeye", reason: "Sniping stalls attackers." }
 ]
 },
 {
 name: "Empire of Eternal Night: Central Park",
 recommendedHeroes: [
 { name: "Storm", reason: "Area control suits mixed terrain." },
 { name: "Groot", reason: "Walls isolate targets in enclosed areas." },
 { name: "Luna Snow", reason: "Healing supports team pushes." }
 ]
 },
 {
 name: "Sanctum Sanctorum",
 recommendedHeroes: [
 { name: "Moon Knight", reason: "Melee controls enclosed spaces." },
 { name: "Wolverine", reason: "Survivability dominates close fights." },
 { name: "Adam Warlock", reason: "Healing supports chaotic brawls." }
 ]
 },
 {
 name: "Intergalactic Empire of Wakanda: Royal Necropolis",
 recommendedHeroes: [
 { name: "Emma Frost", reason: "Barricades hold objectives." },
 { name: "Storm", reason: "Ranged damage secures open zones." },
 { name: "Invisible Woman", reason: "Shields protect in exposed areas." }
 ]
 }
 ]
};

// Populate hero dropdowns
document.addEventListener("DOMContentLoaded", () => {
 const dropdowns = ["enemy1", "enemy2", "enemy3", "enemy4", "enemy5", "enemy6"];
 dropdowns.forEach(id => {
 const select = document.getElementById(id);
 heroData.heroes.forEach(hero => {
 const option = document.createElement("option");
 option.value = hero.name;
 option.textContent = hero.name;
 select.appendChild(option);
 });
 });
});

// Calculate counter-picks
function getCounterPicks() {
 const enemyPicks = [
 document.getElementById("enemy1").value,
 document.getElementById("enemy2").value,
 document.getElementById("enemy3").value,
 document.getElementById("enemy4").value,
 document.getElementById("enemy5").value,
 document.getElementById("enemy6").value
 ];

 if (enemyPicks.some(pick => !pick)) {
 alert("Please select all enemy heroes.");
 return;
 }

 const scores = heroData.heroes.map(hero => {
 let score = 0;
 enemyPicks.forEach(enemy => {
 if (hero.counters.includes(enemy)) score += 1;
 if (hero.name === enemy) score = -Infinity;
 });
 return { name: hero.name, role: hero.role, score };
 });

 const sorted = scores.sort((a, b) => b.score - a.score);
 const recommended = [];
 const rolesNeeded = ["Vanguard", "Duelist", "Strategist"];
 let rolesFilled = [];

 for (let hero of sorted) {
 if (recommended.length < 6 && !enemyPicks.includes(hero.name)) {
 recommended.push(hero);
 rolesFilled.push(hero.role);
 }
 if (recommended.length === 6) break;
 }

 const resultsDiv = document.getElementById("results");
 resultsDiv.innerHTML = "<h3>Recommended Team</h3><ul>";
 recommended.forEach(hero => {
 const counters = heroData.heroes.find(h => h.name === hero.name).counters
 .filter(enemy => enemyPicks.includes(enemy));
 resultsDiv.innerHTML += `<li><strong>${hero.name}</strong> (${hero.role}): Counters ${counters.join(", ") || "none directly"} (Score: ${hero.score})</li>`;
 });
 resultsDiv.innerHTML += "</ul>";
}

// Display map recommendations
function getMapRecommendations() {
 const mapSelect = document.getElementById("map-select").value;
 const resultsDiv = document.getElementById("map-results");

 if (!mapSelect) {
 alert("Please select a map.");
 return;
 }

 const mapData = heroData.maps.find(map => map.name === mapSelect);
 resultsDiv.innerHTML = `<h3>Recommended Heroes for ${mapSelect}</h3><ul>`;
 mapData.recommendedHeroes.forEach(hero => {
 resultsDiv.innerHTML += `<li><strong>${hero.name}</strong>: ${hero.reason}</li>`;
 });
 resultsDiv.innerHTML += "</ul>";
}