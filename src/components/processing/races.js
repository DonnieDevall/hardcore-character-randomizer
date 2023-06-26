const races = {
    alliance: {
        human: {
            classes: ['warrior', 'paladin', 'rogue', 'priest', 'mage', 'warlock'],
            gender: {
                maleImg: '../assets/images/races/human-male.png',
                femaleImg: '../assets/images/races/human-female.png'
            }
        },
        dwarf: {
            classes: ['warrior', 'paladin', 'hunter', 'rogue', 'priest'],
            gender: {
                maleImg: '../assets/images/races/dwarf-male.png',
                femaleImg: '../assets/images/races/dwarf-female.png'
            }
        },
        nightelf: {
            classes: ['warrior', 'hunter', 'rogue', 'priest', 'druid'],
            gender: {
                maleImg: '../assets/images/races/nightelf-male.png',
                femaleImg: '../assets/images/races/nightelf-female.png'
            }
        },
        gnome: {
            classes: ['warrior', 'rogue', 'mage', 'warlock'],
            gender: {
                maleImg: '../assets/images/races/gnome-male.png',
                femaleImg: '../assets/images/races/gnome-female.png'
            }
        }
    },
    horde: {
        orc: {
            classes: ['warrior', 'hunter', 'rogue', 'shaman', 'warlock'],
            gender: {
                maleImg: '../assets/images/races/orc-male.png',
                femaleImg: '../assets/images/races/orc-female.png'
            }
        },
        undead: {
            classes: ['warrior', 'rogue', 'priest', 'mage', 'warlock'],
            gender: {
                maleImg: '../assets/images/races/undead-male.png',
                femaleImg: '../assets/images/races/undead-female.png'
            }
        },
        tauren: {
            classes: ['warrior', 'hunter', 'shaman', 'druid'],
            gender: {
                maleImg: '../assets/images/races/tauren-male.png',
                femaleImg: '../assets/images/races/tauren-female.png'
            }
        },
        troll: {
            classes: ['warrior', 'hunter', 'rogue', 'priest', 'shaman', 'mage'],
            gender: {
                maleImg: '../assets/images/races/troll-male.png',
                femaleImg: '../assets/images/races/troll-female.png'
            }
        },
    }
}

export default races;