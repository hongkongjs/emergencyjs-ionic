angular.module('emergencyJs.constants', [])

.constant('SLACK', {
  API_BASE: "https://slack.com/api/",
  GROUP_TOKEN: "xoxp-4501575029-4501575033-9276716226-e1d85f"
})

.constant('CHANNEL_NAMES', {
  PREFIXES: ['Black', 'Blue', 'Brown', 'Gray', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'White', 'Yellow'],
  ROOTS: ['Basilisk','Bigfoot','BlackDog','BlackEyedBeings','BrayRoadBeast','Centaur','Cerberus','Charybdis','Chimera','Cockatrice','CountDracula','Cyclops','Cynocephalus','Demon','Doppelganger','Dragon','Echidna','Elf','Ghost','Golem','Gorgon','Medusa','Griffin','GrimReaper','Hydra','Imp','Ladon','LochNessMonster','Manticore','Medusa','Mermaids','Minotaur','Mothman','Mutants','NemeanLion','NewJerseyDevil','Ogre','Orthros','Pegasus','Phoenix','Sasquatch','Satyr','Scylla','SeaMonsters','Sea-Goat','Shade','Shapeshifters','Sirens','Sphinx','Thunderbird','Typhon','Unicorn','Vampire','Wendigo','Werewolf','Wraith','Zombie']
});