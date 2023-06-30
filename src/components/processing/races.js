const races = {
    human: {
        classes: ['warrior', 'paladin', 'rogue', 'priest', 'mage', 'warlock'],
        gender: {
            maleImg: '/images/races/human-male.png',
            femaleImg: '/images/races/human-female.png'
        }
    },
    dwarf: {
        classes: ['warrior', 'paladin', 'hunter', 'rogue', 'priest'],
        gender: {
            maleImg: '/images/races/dwarf-male.png',
            femaleImg: '/images/races/dwarf-female.png'
        }
    },
    nightelf: {
        classes: ['warrior', 'hunter', 'rogue', 'priest', 'druid'],
        gender: {
            maleImg: '/images/races/nightelf-male.png',
            femaleImg: '/images/races/nightelf-female.png'
        }
    },
    gnome: {
        classes: ['warrior', 'rogue', 'mage', 'warlock'],
        gender: {
            maleImg: '/images/races/gnome-male.png',
            femaleImg: '/images/races/gnome-female.png'
        }
    },
    orc: {
        classes: ['warrior', 'hunter', 'rogue', 'shaman', 'warlock'],
        gender: {
            maleImg: '/images/races/orc-male.png',
            femaleImg: '/images/races/orc-female.png'
        }
    },
    undead: {
        classes: ['warrior', 'rogue', 'priest', 'mage', 'warlock'],
        gender: {
            maleImg: '/images/races/undead-male.png',
            femaleImg: '/images/races/undead-female.png'
        }
    },
    tauren: {
        classes: ['warrior', 'hunter', 'shaman', 'druid'],
        gender: {
            maleImg: '/images/races/tauren-male.png',
            femaleImg: '/images/races/tauren-female.png'
        }
    },
    troll: {
        classes: ['warrior', 'hunter', 'rogue', 'priest', 'shaman', 'mage'],
        gender: {
            maleImg: '/images/races/troll-male.png',
            femaleImg: '/images/races/troll-female.png'
        }
    }
}

export default races;