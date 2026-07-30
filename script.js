/* =========================================================
   FESTIVAL SETTINGS
========================================================= */

const FESTIVAL_START =
    "2026-08-08";

const FESTIVAL_END =
    "2026-08-17";

const FESTIVAL_START_I =
    "2026-08-07";

const FESTIVAL_END_I =
    "2026-08-16";


const CALENDAR_START_HOUR =
    9;

const CALENDAR_END_HOUR =
    23;

const HOUR_HEIGHT =
    60;


/* =========================================================
   FIXED FESTIVAL FILMS
========================================================= */

const movies = [
    {
        id: 1,
        title: "2 Valid IDs",
        director: "Ma-an Asuncion-Dagnalan",
        runtime: 90,
        poster: "posters/2-valid-ids.jpeg",
        color: "#0066ff",
        plot: "Sylvia, a poor farmer, is unable to claim the money sent to her because she lacks the required two valid IDS. In her struggle to secure the IDs, Sylvia finds herself in a situation that challenges her character, beliefs, and morality.",
        availability: [
            {
                date: "2026-08-08",
                cinema: "Gateway",
                times: [
                    "15:00",
                    "18:00"
                ]
            },
            {
                date: "2026-08-08",
                cinema: "Circuit",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-08",
                cinema: "Market! Market!",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-08",
                cinema: "Trinoma",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-08",
                cinema: "Shangri-La",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-07",
                cinema: "Ayala - Manila Bay",
                times: [
                    "11:30"
                ]
            },
            {
                date: "2026-08-07",
                cinema: "Glorietta",
                times: [
                    "11:30"
                ]
            },
            {
                date: "2026-08-07",
                cinema: "Gateway",
                times: [
                    "15:00"
                ]
            },
            {
                date: "2026-08-09",
                cinema: "Gateway",
                times: [
                    "15:00"
                ]
            },
            {
                date: "2026-08-10",
                cinema: "Shangri-La",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-11",
                cinema: "Gateway",
                times: [
                    "21:00"
                ]
            },
            {
                date: "2026-08-11",
                cinema: "Ayala - Manila Bay",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-11",
                cinema: "Glorietta",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-12",
                cinema: "Gateway",
                times: [
                    "21:00"
                ]
            },
            {
                date: "2026-08-12",
                cinema: "Shangri-La",
                times: [
                    "11:30"
                ]
            },
            {
                date: "2026-08-13",
                cinema: "Gateway",
                times: [
                    "18:00",
                    "21:00"
                ]
            },
            {
                date: "2026-08-13",
                cinema: "Circuit",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-13",
                cinema: "Market! Market!",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-13",
                cinema: "Trinoma",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-13",
                cinema: "Shangri-La",
                times: [
                    "11:30",
                    "17:30"
                ]
            },
            {
                date: "2026-08-14",
                cinema: "Gateway",
                times: [
                    "18:00"
                ]
            },
            {
                date: "2026-08-14",
                cinema: "Shangri-La",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Gateway",
                times: [
                    "15:00",
                    "18:00"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Circuit",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Market! Market!",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Trinoma",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Shangri-La",
                times: [
                    "14:30",
                    "17:30"
                ]
            },
            {
                date: "2026-08-16",
                cinema: "Gateway",
                times: [
                    "15:00",
                    "21:00"
                ]
            },
            {
                date: "2026-08-16",
                cinema: "Shangri-La",
                times: [
                    "14:30"
                ]
            },
            {
                date: "2026-08-16",
                cinema: "Ayala - Manila Bay",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-16",
                cinema: "Glorietta",
                times: [
                    "20:30"
                ]
            }

        ]

    },


    {
        id: 2,
        title: "A.ni.mál",
        director: "Dustin Celestino",
        runtime: 120,
        poster: "posters/animal.jpg",
        color: "#8a2be2",
        plot: "In a provincial Philippine town, the naïve daughter of the mayor comes home with a video of a powerful family friend abusing his dog.",
        availability: [
             {
                date: "2026-08-07",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-07",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-08",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-08",
                cinema: "Shangri-La",
                times: ["11:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Ayala - Manila Bay",
                times: ["14:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Glorietta",
                times: ["14:30"]
            },

            {
                date: "2026-08-09",
                cinema: "Shangri-La",
                times: ["20:30"]
            },

            {
                date: "2026-08-10",
                cinema: "Gateway",
                times: ["15:00", "18:00", "21:00"]
            },
            {
                date: "2026-08-10",
                cinema: "Circuit",
                times: ["17:30"]
            },
            {
                date: "2026-08-10",
                cinema: "Market! Market!",
                times: ["17:30"]
            },
            {
                date: "2026-08-10",
                cinema: "Trinoma",
                times: ["17:30"]
            },
            {
                date: "2026-08-10",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-11",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-11",
                cinema: "Shangri-La",
                times: ["20:30"]
            },
            {
                date: "2026-08-11",
                cinema: "Ayala - Manila Bay",
                times: ["20:30"]
            },
            {
                date: "2026-08-11",
                cinema: "Glorietta",
                times: ["20:30"]
            },

            {
                date: "2026-08-12",
                cinema: "Gateway",
                times: ["15:00"]
            },
            {
                date: "2026-08-12",
                cinema: "Circuit",
                times: ["20:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Market! Market!",
                times: ["20:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Trinoma",
                times: ["20:30"]
            },

            {
                date: "2026-08-13",
                cinema: "Gateway",
                times: ["15:00", "18:00"]
            },

            {
                date: "2026-08-14",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-14",
                cinema: "Circuit",
                times: ["11:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Market! Market!",
                times: ["11:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Trinoma",
                times: ["11:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Shangri-La",
                times: ["11:30", "14:30"]
            },

            {
                date: "2026-08-15",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-15",
                cinema: "Shangri-La",
                times: ["20:30"]
            },
            {
                date: "2026-08-15",
                cinema: "Ayala - Manila Bay",
                times: ["17:30"]
            },
            {
                date: "2026-08-15",
                cinema: "Glorietta",
                times: ["17:30"]
            },

            {
                date: "2026-08-16",
                cinema: "Gateway",
                times: ["12:00", "15:00"]
            },
            {
                date: "2026-08-16",
                cinema: "Shangri-La",
                times: ["14:30"]
            }
        ]

    },


    {
        id: 3,
        title: "Ganggang",
        director: "JL Burgos",
        runtime: 89,
        poster: "posters/ganggang.jpg",
        color: "#00a878",
        plot: "At the first clash of their fighting spiders, Ilay and Ten-ten knew they would go home as losers. Anton, the winner of the fight, will once again lord over their school. At the sideline is Mel, a newcomer and a city boy, watching the rowdy play in awe, unaware that soon he will become an ally of Ilay and Ten-ten against the real neighborhood bully.",
        availability: [
            {
                date: "2026-08-07",
                cinema: "Gateway",
                times: ["15:00", "18:00"]
            },
            {
                date: "2026-08-07",
                cinema: "Shangri-La",
                times: ["14:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Ayala - Manila Bay",
                times: ["17:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Glorietta",
                times: ["17:30"]
            },

            {
                date: "2026-08-08",
                cinema: "Gateway",
                times: ["15:00"]
            },
            {
                date: "2026-08-08",
                cinema: "Circuit",
                times: ["14:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Market! Market!",
                times: ["14:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Trinoma",
                times: ["14:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-09",
                cinema: "Gateway",
                times: ["15:00"]
            },

            {
                date: "2026-08-10",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-10",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-11",
                cinema: "Gateway",
                times: ["15:00", "18:00"]
            },
            {
                date: "2026-08-11",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-12",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-12",
                cinema: "Shangri-La",
                times: ["20:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Ayala - Manila Bay",
                times: ["17:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Glorietta",
                times: ["17:30"]
            },

            {
                date: "2026-08-13",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-13",
                cinema: "Circuit",
                times: ["17:30"]
            },
            {
                date: "2026-08-13",
                cinema: "Market! Market!",
                times: ["17:30"]
            },
            {
                date: "2026-08-13",
                cinema: "Trinoma",
                times: ["17:30"]
            },
            {
                date: "2026-08-13",
                cinema: "Shangri-La",
                times: ["11:30"]
            },

            {
                date: "2026-08-14",
                cinema: "Gateway",
                times: ["15:00"]
            },
            {
                date: "2026-08-14",
                cinema: "Shangri-La",
                times: ["20:30"]
            },

            {
                date: "2026-08-15",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-15",
                cinema: "Shangri-La",
                times: ["14:30", "20:30"]
            },
            {
                date: "2026-08-15",
                cinema: "Ayala - Manila Bay",
                times: ["20:30"]
            },
            {
                date: "2026-08-15",
                cinema: "Glorietta",
                times: ["20:30"]
            },

            {
                date: "2026-08-16",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-16",
                cinema: "Circuit",
                times: ["20:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Market! Market!",
                times: ["20:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Trinoma",
                times: ["20:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Shangri-La",
                times: ["17:30"]
            }

        ]

    },


    {
        id: 4,
        title: "Hand of God",
        director: "Mark Duane Angos",
        runtime: 106,
        poster: "posters/hand-of-god.jpg",
        color: "#f2c500",
        plot: "In a remote village scarred by years of conflict, a young army lieutenant introduces football to children. As the game begins to heal wounds and rebuild trust, he forms a fragile bond with a child soldier — forcing both to choose between the innocence they’ve lost and the violent realities of war.",
        availability: [
            {
                date: "2026-08-07",
                cinema: "Gateway",
                times: ["12:00"]
            },
            {
                date: "2026-08-07",
                cinema: "Shangri-La",
                times: ["20:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Ayala - Manila Bay",
                times: ["14:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Glorietta",
                times: ["14:30"]
            },

            {
                date: "2026-08-08",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-08",
                cinema: "Circuit",
                times: ["11:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Market! Market!",
                times: ["11:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Trinoma",
                times: ["11:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Shangri-La",
                times: ["20:30"]
            },

            {
                date: "2026-08-09",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-10",
                cinema: "Gateway",
                times: ["15:00", "21:00"]
            },
            {
                date: "2026-08-10",
                cinema: "Ayala - Manila Bay",
                times: ["20:30"]
            },
            {
                date: "2026-08-10",
                cinema: "Glorietta",
                times: ["20:30"]
            },

            {
                date: "2026-08-11",
                cinema: "Gateway",
                times: ["15:00"]
            },
            {
                date: "2026-08-11",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-12",
                cinema: "Gateway",
                times: ["15:00", "21:00"]
            },
            {
                date: "2026-08-12",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-13",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-13",
                cinema: "Circuit",
                times: ["20:30"]
            },
            {
                date: "2026-08-13",
                cinema: "Market! Market!",
                times: ["20:30"]
            },
            {
                date: "2026-08-13",
                cinema: "Trinoma",
                times: ["20:30"]
            },
            {
                date: "2026-08-13",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-14",
                cinema: "Gateway",
                times: ["15:00", "21:00"]
            },
            {
                date: "2026-08-14",
                cinema: "Shangri-La",
                times: ["11:30", "20:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Ayala - Manila Bay",
                times: ["14:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Glorietta",
                times: ["14:30"]
            },

            {
                date: "2026-08-15",
                cinema: "Gateway",
                times: ["12:00", "15:00"]
            },
            {
                date: "2026-08-15",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-16",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-16",
                cinema: "Circuit",
                times: ["17:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Market! Market!",
                times: ["17:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Trinoma",
                times: ["17:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Shangri-La",
                times: ["17:30"]
            }

        ]

    },


    {
        id: 5,
        title: "Kaka sa Yawan",
        director: "Alpha Habin",
        runtime: 90,
        poster: "posters/kaka-sa-yawan.jpg",
        color: "#e6004c",
        plot:"A coming-of-age story of two friends in Mindoro – Niko, a Manila boy, and Ayan, a Mangyan. Their unique bond spans a whole summer of being introduced to each other’s culture and lifestyle, with Niko teaching Ayan how to read, who in turn teaches Niko how to swim.",
       availability: [
            {
                date: "2026-08-07",
                cinema: "Gateway",
                times: ["15:00", "21:00"]
            },
            {
                date: "2026-08-07",
                cinema: "Shangri-La",
                times: ["20:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Ayala - Manila Bay",
                times: ["20:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Glorietta",
                times: ["20:30"]
            },

            {
                date: "2026-08-08",
                cinema: "Gateway",
                times: ["15:00"]
            },
            {
                date: "2026-08-08",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-09",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-09",
                cinema: "Shangri-La",
                times: ["14:30", "17:30"]
            },
            {
                date: "2026-08-09",
                cinema: "Ayala - Manila Bay",
                times: ["20:30"]
            },
            {
                date: "2026-08-09",
                cinema: "Glorietta",
                times: ["20:30"]
            },

            {
                date: "2026-08-10",
                cinema: "Gateway",
                times: ["12:00", "15:00"]
            },

            {
                date: "2026-08-11",
                cinema: "Gateway",
                times: ["15:00", "21:00"]
            },
            {
                date: "2026-08-11",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-12",
                cinema: "Gateway",
                times: ["15:00"]
            },
            {
                date: "2026-08-12",
                cinema: "Circuit",
                times: ["11:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Market! Market!",
                times: ["11:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Trinoma",
                times: ["11:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-13",
                cinema: "Shangri-La",
                times: ["17:30"]
            },
            {
                date: "2026-08-13",
                cinema: "Ayala - Manila Bay",
                times: ["14:30"]
            },
            {
                date: "2026-08-13",
                cinema: "Glorietta",
                times: ["14:30"]
            },

            {
                date: "2026-08-14",
                cinema: "Gateway",
                times: ["12:00"]
            },
            {
                date: "2026-08-14",
                cinema: "Shangri-La",
                times: ["14:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Ayala - Manila Bay",
                times: ["17:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Glorietta",
                times: ["17:30"]
            },

            {
                date: "2026-08-15",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-15",
                cinema: "Shangri-La",
                times: ["20:30"]
            },

            {
                date: "2026-08-16",
                cinema: "Gateway",
                times: ["12:00", "18:00"]
            },
            {
                date: "2026-08-16",
                cinema: "Circuit",
                times: ["14:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Market! Market!",
                times: ["14:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Trinoma",
                times: ["14:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Shangri-La",
                times: ["11:30"]
            }
        ]

    },

    {
        id: 6,
        title: "Mag-iina",
        director: "Giancarlo Abrahan",
        runtime: 105,
        poster: "posters/mag-iina.png",
        color: "#ff4d00",
        plot:"Near the 40th day of her estranged father’s death, a woman returns to her family’s ancestral home where three generations of women are bound together by grief, madness, and evil thicker than blood.", 
       availability: [
            {
                date: "2026-08-07",
                cinema: "Gateway",
                times: [
                    "12:00"
                ]

            },
            {
                date: "2026-08-07",
                cinema: "Circuit",
                times: [
                    "17:30"
                ]

            },
            {
                date: "2026-08-07",
                cinema: "Market! Market",
                times: [
                    "17:30"
                ]

            },
            {
                date: "2026-08-07",
                cinema: "Trinoma",
                times: [
                    "17:30"
                ]

            },
            {
                date: "2026-08-07",
                cinema: "Shangri-La",
                times: [
                    "20:30"
                ]

            },
            {
                date: "2026-08-08",
                cinema: "Gateway",
                times: [
                    "12:00"
                ]

            },
            {
                date: "2026-08-08",
                cinema: "Shangri-La",
                times: [
                    "20:30"
                ]

            },
            {
                date: "2026-08-09",
                cinema: "Gateway",
                times: [
                    "18:00",
                    "21:00"
                ]
            },
            {
                date: "2026-08-09",
                cinema: "Ayala - Manila Bay",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-09",
                cinema: "Glorietta",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-10",
                cinema: "Gateway",
                times: [
                    "21:00"
                ]
            },
            {
                date: "2026-08-10",
                cinema: "Circuit",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-10",
                cinema: "Trinoma",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-10",
                cinema: "Market! Market!",
                times: [
                    "20:30"
                ]
            },
            {
                date: "2026-08-10",
                cinema: "Shangri-La",
                times: [
                    "14:30",
                    "20:30"
                ]
            },
            {
                date: "2026-08-11",
                cinema: "Gateway",
                times: [
                    "21:00"
                ]
            },
            {
                date: "2026-08-12",
                cinema: "Gateway",
                times: [
                    "15:00",
                    "18:00"
                ]
            },
            {
                date: "2026-08-12",
                cinema: "Shangri-La",
                times: [
                    "14:30"
                ]
            },
            {
                date: "2026-08-13",
                cinema: "Shangri-La",
                times: [
                    "14:30"
                ]
            },
            {
                date: "2026-08-13",
                cinema: "Glorietta",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-13",
                cinema: "Ayala - Manila Bay",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-14",
                cinema: "Gateway",
                times: [
                    "12:00"
                ]
            },
            {
                date: "2026-08-14",
                cinema: "Shangri-La",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Gateway",
                times: [
                    "18:00"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Trinoma",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Market! Market!",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Circuit",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-15",
                cinema: "Shangri-La",
                times: [
                    "14:30"
                ]
            },
            {
                date: "2026-08-16",
                cinema: "Gateway",
                times: [
                    "15:00",
                    "21:00"
                ]
            },
            {
                date: "2026-08-16",
                cinema: "Shangri-La",
                times: [
                    "11:30",
                    "17:30"
                ]
            },
            {
                date: "2026-08-16",
                cinema: "Glorietta",
                times: [
                    "17:30"
                ]
            },
            {
                date: "2026-08-16",
                cinema: "Ayala - Manila Bay",
                times: [
                    "17:30"
                ]
            }

        ]

    },

    {
        id: 7,
        title: "Status: Rejected",
        director: "Vahn Leinard Pascual",
        runtime: 90,
        poster: "posters/status-rejected.png",
        color: "#00a6a6",
        plot:"Longing for love and the promise of a better life, a grandmother finds herself swept into an unexpected online romance that challenges her sense of worth, family, and the dreams she refuses to let go of.",
        availability: [
            {
                date: "2026-08-07",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-07",
                cinema: "Circuit",
                times: ["17:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Market! Market!",
                times: ["17:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Trinoma",
                times: ["17:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Shangri-La",
                times: ["11:30"]
            },

            {
                date: "2026-08-08",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-08",
                cinema: "Shangri-La",
                times: ["17:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Ayala - Manila Bay",
                times: ["17:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Glorietta",
                times: ["17:30"]
            },

            {
                date: "2026-08-09",
                cinema: "Gateway",
                times: ["15:00", "21:00"]
            },
            {
                date: "2026-08-09",
                cinema: "Shangri-La",
                times: ["20:30"]
            },

            {
                date: "2026-08-10",
                cinema: "Gateway",
                times: ["18:00"]
            },

            {
                date: "2026-08-11",
                cinema: "Gateway",
                times: ["18:00", "21:00"]
            },

            {
                date: "2026-08-12",
                cinema: "Circuit",
                times: ["17:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Market! Market!",
                times: ["17:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Trinoma",
                times: ["17:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Shangri-La",
                times: ["08:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Ayala - Manila Bay",
                times: ["11:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Glorietta",
                times: ["11:30"]
            },

            {
                date: "2026-08-13",
                cinema: "Gateway",
                times: ["12:00"]
            },
            {
                date: "2026-08-13",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-14",
                cinema: "Gateway",
                times: ["18:00", "21:00"]
            },
            {
                date: "2026-08-14",
                cinema: "Shangri-La",
                times: ["14:30", "20:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Ayala - Manila Bay",
                times: ["20:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Glorietta",
                times: ["20:30"]
            },

            {
                date: "2026-08-15",
                cinema: "Gateway",
                times: ["15:00"]
            },
            {
                date: "2026-08-15",
                cinema: "Circuit",
                times: ["14:30"]
            },
            {
                date: "2026-08-15",
                cinema: "Market! Market!",
                times: ["14:30"]
            },
            {
                date: "2026-08-15",
                cinema: "Trinoma",
                times: ["14:30"]
            },
            {
                date: "2026-08-15",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-16",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-16",
                cinema: "Shangri-La",
                times: ["11:30", "17:30"]
            }
        ]

    },


    {
        id: 8,
        title: "Tayo Lang Ang Nakakaalam",
        director: "David R. Corpuz",
        runtime: 110,
        poster: "posters/tayo-lang-ang-nakakaalam.jpg",
        color: "#ff7a00",
        plot:"Bound by a love kept in silence, a man struggles to remain seen within a family that once made him feel at home.",
        availability: [
            {
                date: "2026-08-07",
                cinema: "Gateway",
                times: ["18:00", "21:00"]
            },
            {
                date: "2026-08-07",
                cinema: "Circuit",
                times: ["11:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Market! Market!",
                times: ["11:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Trinoma",
                times: ["11:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-08",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-08",
                cinema: "Shangri-La",
                times: ["20:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Ayala - Manila Bay",
                times: ["11:30"]
            },
            {
                date: "2026-08-08",
                cinema: "Glorietta",
                times: ["11:30"]
            },

            {
                date: "2026-08-09",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-09",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-10",
                cinema: "Gateway",
                times: ["15:00", "18:00"]
            },

            {
                date: "2026-08-11",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-11",
                cinema: "Circuit",
                times: ["17:30"]
            },
            {
                date: "2026-08-11",
                cinema: "Market! Market!",
                times: ["17:30"]
            },
            {
                date: "2026-08-11",
                cinema: "Trinoma",
                times: ["17:30"]
            },
            {
                date: "2026-08-11",
                cinema: "Shangri-La",
                times: ["14:30", "20:30"]
            },

            {
                date: "2026-08-12",
                cinema: "Gateway",
                times: ["12:00"]
            },
            {
                date: "2026-08-12",
                cinema: "Shangri-La",
                times: ["20:30"]
            },

            {
                date: "2026-08-13",
                cinema: "Gateway",
                times: ["15:00"]
            },
            {
                date: "2026-08-13",
                cinema: "Ayala - Manila Bay",
                times: ["20:30"]
            },
            {
                date: "2026-08-13",
                cinema: "Glorietta",
                times: ["20:30"]
            },

            {
                date: "2026-08-14",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-14",
                cinema: "Circuit",
                times: ["20:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Market! Market!",
                times: ["20:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Trinoma",
                times: ["20:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-15",
                cinema: "Gateway",
                times: ["12:00", "21:00"]
            },
            {
                date: "2026-08-15",
                cinema: "Shangri-La",
                times: ["14:30", "20:30"]
            },

            {
                date: "2026-08-16",
                cinema: "Gateway",
                times: ["15:00"]
            },
            {
                date: "2026-08-16",
                cinema: "Shangri-La",
                times: ["20:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Ayala - Manila Bay",
                times: ["14:30"]
            },
            {
                date: "2026-08-16",
                cinema: "Glorietta",
                times: ["14:30"]
            }

        ]

    },


    {
        id: 9,
        title: "Tirik",
        director: "May-i Guia Padilla",
        runtime: 90,
        poster: "posters/tirik.jpg",
        color: "#5555ff",
        plot:"Paring Bert, a priest, and his parishioner, Santos, a taxi driver, embark on a gritty journey to reconcile their moral conflicts while they elude an assassination attempt.",
        availability: [
            {
                date: "2026-08-07",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-07",
                cinema: "Circuit",
                times: ["14:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Market! Market!",
                times: ["14:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Trinoma",
                times: ["14:30"]
            },
            {
                date: "2026-08-07",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-08",
                cinema: "Gateway",
                times: ["18:00", "21:00"]
            },
            {
                date: "2026-08-08",
                cinema: "Shangri-La",
                times: ["17:30"]
            },

            {
                date: "2026-08-09",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-09",
                cinema: "Shangri-La",
                times: ["20:30"]
            },
            {
                date: "2026-08-09",
                cinema: "Ayala - Manila Bay",
                times: ["17:30"]
            },
            {
                date: "2026-08-09",
                cinema: "Glorietta",
                times: ["17:30"]
            },

            {
                date: "2026-08-11",
                cinema: "Gateway",
                times: ["12:00", "15:00"]
            },
            {
                date: "2026-08-11",
                cinema: "Circuit",
                times: ["20:30"]
            },
            {
                date: "2026-08-11",
                cinema: "Market! Market!",
                times: ["20:30"]
            },
            {
                date: "2026-08-11",
                cinema: "Trinoma",
                times: ["20:30"]
            },
            {
                date: "2026-08-11",
                cinema: "Shangri-La",
                times: ["14:30", "20:30"]
            },

            {
                date: "2026-08-12",
                cinema: "Gateway",
                times: ["18:00", "21:00"]
            },
            {
                date: "2026-08-12",
                cinema: "Shangri-La",
                times: ["17:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Ayala - Manila Bay",
                times: ["20:30"]
            },
            {
                date: "2026-08-12",
                cinema: "Glorietta",
                times: ["20:30"]
            },

            {
                date: "2026-08-13",
                cinema: "Gateway",
                times: ["21:00"]
            },

            {
                date: "2026-08-14",
                cinema: "Gateway",
                times: ["21:00"]
            },
            {
                date: "2026-08-14",
                cinema: "Circuit",
                times: ["17:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Market! Market!",
                times: ["17:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Trinoma",
                times: ["17:30"]
            },
            {
                date: "2026-08-14",
                cinema: "Shangri-La",
                times: ["14:30"]
            },

            {
                date: "2026-08-15",
                cinema: "Gateway",
                times: ["12:00", "21:00"]
            },
            {
                date: "2026-08-15",
                cinema: "Shangri-La",
                times: ["11:30", "17:30"]
            },
            {
                date: "2026-08-15",
                cinema: "Ayala - Manila Bay",
                times: ["11:30"]
            },
            {
                date: "2026-08-15",
                cinema: "Glorietta",
                times: ["11:30"]
            },

            {
                date: "2026-08-16",
                cinema: "Gateway",
                times: ["18:00"]
            },
            {
                date: "2026-08-16",
                cinema: "Shangri-La",
                times: ["14:30"]
            }
        ]

    }

];


/* =========================================================
   STATE
========================================================= */

let scheduledScreenings = [];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const moviesGrid =
    document.getElementById(
        "moviesGrid"
    );


const movieSelect =
    document.getElementById(
        "movieSelect"
    );


const dateInput =
    document.getElementById(
        "dateInput"
    );


const cinemaSelect =
    document.getElementById(
        "cinemaSelect"
    );


const startSelect =
    document.getElementById(
        "startSelect"
    );


const availabilityDisplay =
    document.getElementById(
        "availabilityDisplay"
    );


const runtimeDisplay =
    document.getElementById(
        "runtimeDisplay"
    );


const endDisplay =
    document.getElementById(
        "endDisplay"
    );


const addScreeningButton =
    document.getElementById(
        "addScreeningButton"
    );


const screeningForm =
    document.getElementById(
        "screeningForm"
    );


const screeningsList =
    document.getElementById(
        "screeningsList"
    );


const clearBtn =
    document.getElementById(
        "clearBtn"
    );


const calendar =
    document.getElementById(
        "calendar"
    );


/* =========================================================
   DATE RESTRICTION
========================================================= */

dateInput.min =
    FESTIVAL_START_I;

dateInput.max =
    FESTIVAL_END_I;


/* =========================================================
   INITIALIZE
========================================================= */

renderMovies();

populateMovieSelect();

renderScreenings();

renderCalendar();


/* =========================================================
   MOVIE CARDS
========================================================= */

function renderMovies() {

    moviesGrid.innerHTML = "";


    movies.forEach(
        (movie, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "movie-card";


            card.innerHTML = `

                <div
                    class="movie-color"
                    style="
                        background:${movie.color};
                    "
                ></div>


                <div class="movie-card-content">


                    <div class="movie-card-info">


                        <div class="movie-number">

                            FILM
                            ${String(
                                index + 1
                            ).padStart(2, "0")}

                        </div>


                        <div class="movie-title">

                            ${movie.title}

                        </div>


                        <div class="movie-director">

                            DIRECTOR

                        </div>


                        <div class="movie-director-name">

                            ${movie.director}

                        </div>

                        <div class="movie-plot">

                            

                        </div>


                        <div class="movie-plot-summary">

                            ${movie.plot}

                        </div>


                        <div class="movie-runtime">

                            ${movie.runtime} MINUTES

                        </div>


                    </div>


                    <div class="movie-poster-wrap">


                        <img
                            class="movie-poster"
                            src="${movie.poster}"
                            alt="${movie.title} poster"
                            onerror="
                                this.style.display='none';
                                this.parentElement.classList.add('poster-missing');
                            "
                        >


                        <div class="poster-placeholder">

                            NO POSTER

                        </div>


                    </div>


                </div>

            `;


            moviesGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   MOVIE DROPDOWN
========================================================= */

function populateMovieSelect() {

    movieSelect.innerHTML = `

        <option value="">
            Select Film
        </option>

    `;


    movies.forEach(
        movie => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                movie.id;


            option.textContent =
                movie.title;


            movieSelect.appendChild(
                option
            );

        }
    );

}


/* =========================================================
   MOVIE CHANGED
========================================================= */

movieSelect.addEventListener(
    "change",
    function() {

        resetSchedulingFields();

        updateRuntime();

        updateCinemaOptions();

        updateAvailableTimes();

    }
);


/* =========================================================
   DATE CHANGED
========================================================= */

dateInput.addEventListener(
    "change",
    function() {

        const selected =
            dateInput.value;


        if (
            selected < FESTIVAL_START_I ||
            selected > FESTIVAL_END_I
        ) {

            dateInput.value = "";

            resetSchedulingFields();

            alert(
                "Please select a festival date between August 7 and August 16, 2026."
            );

            return;

        }


        resetTimeOnly();

        updateCinemaOptions();

        updateAvailableTimes();

    }
);


/* =========================================================
   CINEMA CHANGED
========================================================= */

cinemaSelect.addEventListener(
    "change",
    function() {

        resetTimeOnly();

        updateAvailableTimes();

    }
);


/* =========================================================
   START TIME CHANGED
========================================================= */

startSelect.addEventListener(
    "change",
    function() {

        updateEndTime();

        updateAddButton();

    }
);


/* =========================================================
   RESET FIELDS
========================================================= */

function resetSchedulingFields() {

    cinemaSelect.innerHTML = `

        <option value="">
            Select Cinema
        </option>

    `;

    cinemaSelect.disabled =
        true;


    resetTimeOnly();


    availabilityDisplay.textContent =
        "Select a film and date.";

}


function resetTimeOnly() {

    startSelect.innerHTML = `

        <option value="">
            Select available time
        </option>

    `;

    startSelect.disabled =
        true;


    endDisplay.textContent =
        "—";


    updateAddButton();

}


/* =========================================================
   RUNTIME
========================================================= */

function updateRuntime() {

    const movie =
        getSelectedMovie();


    if (!movie) {

        runtimeDisplay.innerHTML = `

            <span>
                Runtime
            </span>

            <strong>
                ${movie.runtime} MIN
            </strong>

        `;

        return;

    }


    runtimeDisplay.innerHTML = `

        <span>
            Runtime
        </span>

        <strong>
            ${movie.runtime} MIN
        </strong>

    `;

}


/* =========================================================
   CINEMA OPTIONS
========================================================= */

function updateCinemaOptions() {

    const movie =
        getSelectedMovie();


    const date =
        dateInput.value;


    cinemaSelect.innerHTML = `

        <option value="">
            Select Cinema
        </option>

    `;


    cinemaSelect.disabled =
        true;


    if (
        !movie ||
        !date
    ) {

        availabilityDisplay.textContent =
            "Select a film and date.";

        return;

    }


    const available =
        movie.availability.filter(
            item =>
                item.date === date
        );


    if (
        available.length === 0
    ) {

        availabilityDisplay.textContent =
            "This film has no cinema availability on this date.";

        return;

    }


    const cinemas =
        [
            ...new Set(
                available.map(
                    item =>
                        item.cinema
                )
            )
        ];


    cinemas.forEach(
        cinema => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                cinema;


            option.textContent =
                cinema;


            cinemaSelect.appendChild(
                option
            );

        }
    );


    cinemaSelect.disabled =
        false;


    availabilityDisplay.textContent =
        `${cinemas.length} cinema option${cinemas.length === 1 ? "" : "s"} available for this film on this date.`;

}


/* =========================================================
   AVAILABLE TIMES
========================================================= */

function updateAvailableTimes() {

    const movie =
        getSelectedMovie();


    const date =
        dateInput.value;


    const cinema =
        cinemaSelect.value;


    startSelect.innerHTML = `

        <option value="">
            Select available time
        </option>

    `;


    startSelect.disabled =
        true;


    endDisplay.textContent =
        "—";


    if (
        !movie ||
        !date ||
        !cinema
    ) {

        updateAddButton();

        return;

    }


    const availability =
        movie.availability.find(
            item =>
                item.date === date &&
                item.cinema === cinema
        );


    if (!availability) {

        availabilityDisplay.textContent =
            "No screening times available.";

        updateAddButton();

        return;

    }


    const availableTimes =
        availability.times.filter(
            startTime =>
                isTimeAvailable(
                    movie,
                    date,
                    cinema,
                    startTime
                )
        );


    if (
        availableTimes.length === 0
    ) {

        availabilityDisplay.textContent =
            "All available times are already booked.";

        updateAddButton();

        return;

    }


    availableTimes.forEach(
        time => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                time;


            option.textContent =
                formatTime(time);


            startSelect.appendChild(
                option
            );

        }
    );


    startSelect.disabled =
        false;


    availabilityDisplay.textContent =
        `${availableTimes.length} available screening time${availableTimes.length === 1 ? "" : "s"} for ${cinema}.`;


    updateAddButton();

}


/* =========================================================
   CHECK WHETHER TIME IS AVAILABLE
========================================================= */

function isTimeAvailable(
    movie,
    date,
    cinema,
    startTime
) {

    const newStart =
        timeToMinutes(
            startTime
        );


    const newEnd =
        newStart +
        movie.runtime;


    const conflicts =
        scheduledScreenings.some(
            screening => {

                if (
                    screening.date !== date
                ) {

                    return false;

                }


                if (
                    screening.cinema !== cinema
                ) {

                    return false;

                }


                const existingStart =
                    timeToMinutes(
                        screening.start
                    );


                const existingEnd =
                    timeToMinutes(
                        screening.end
                    );


                return (
                    newStart < existingEnd &&
                    newEnd > existingStart
                );

            }
        );


    return !conflicts;

}


/* =========================================================
   END TIME
========================================================= */

function updateEndTime() {

    const movie =
        getSelectedMovie();


    const start =
        startSelect.value;


    if (
        !movie ||
        !start
    ) {

        endDisplay.textContent =
            "—";

        return;

    }


    const startMinutes =
        timeToMinutes(
            start
        );


    const endMinutes =
        startMinutes +
        movie.runtime;


    endDisplay.textContent =
        formatMinutes(
            endMinutes
        );

}


/* =========================================================
   ADD BUTTON
========================================================= */

function updateAddButton() {

    addScreeningButton.disabled =
        !(
            movieSelect.value &&
            dateInput.value &&
            cinemaSelect.value &&
            startSelect.value
        );

}


/* =========================================================
   SUBMIT SCREENING
========================================================= */

screeningForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const movie =
            getSelectedMovie();


        const date =
            dateInput.value;


        const cinema =
            cinemaSelect.value;


        const start =
            startSelect.value;


        if (
            !movie ||
            !date ||
            !cinema ||
            !start
        ) {

            return;

        }


        if (
            !isTimeAvailable(
                movie,
                date,
                cinema,
                start
            )
        ) {

            alert(
                "That cinema is already occupied during this screening."
            );

            updateAvailableTimes();

            return;

        }


        const startMinutes =
            timeToMinutes(
                start
            );


        const endMinutes =
            startMinutes +
            movie.runtime;


        const screening = {

            id:
                Date.now(),

            movieId:
                movie.id,

            title:
                movie.title,

            director:
                movie.director,

            runtime:
                movie.runtime,

            color:
                movie.color,

            date:
                date,

            cinema:
                cinema,

            start:
                start,

            end:
                minutesToTime(
                    endMinutes
                )

        };


        scheduledScreenings.push(
            screening
        );


        renderScreenings();

        renderCalendar();


        updateCinemaOptions();

        updateAvailableTimes();

        updateEndTime();

    }
);


/* =========================================================
   RENDER SCREENING LIST
========================================================= */

function renderScreenings() {

    screeningsList.innerHTML = "";


    if (
        scheduledScreenings.length === 0
    ) {

        screeningsList.innerHTML = `

            <div class="empty-state">
                NO SCREENINGS YET
            </div>

        `;

        return;

    }


    const sorted =
        [...scheduledScreenings]
        .sort(
            (a, b) => {

                const dateCompare =
                    a.date.localeCompare(
                        b.date
                    );


                if (
                    dateCompare !== 0
                ) {

                    return dateCompare;

                }


                return (
                    timeToMinutes(a.start) -
                    timeToMinutes(b.start)
                );

            }
        );


    sorted.forEach(
        screening => {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "screening-row";


            row.innerHTML = `

                <div class="screening-movie">

                    ${screening.title}

                </div>


                <div>

                    ${formatDate(
                        screening.date
                    )}

                </div>


                <div>

                    ${screening.cinema}

                </div>


                <div class="screening-time">

                    ${formatTime(
                        screening.start
                    )}

                    —

                    ${formatTime(
                        screening.end
                    )}

                </div>


                <div>

                    <button
                        class="delete-screening"
                        type="button"
                        data-id="${screening.id}"
                        title="Delete screening"
                    >
                        ×
                    </button>

                </div>

            `;


            screeningsList.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   DELETE SCREENING
========================================================= */

screeningsList.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".delete-screening"
            );


        if (!button) {

            return;

        }


        const id =
            Number(
                button.dataset.id
            );


        scheduledScreenings =
            scheduledScreenings.filter(
                screening =>
                    screening.id !== id
            );


        renderScreenings();

        renderCalendar();


        updateCinemaOptions();

        updateAvailableTimes();

    }
);


/* =========================================================
   CLEAR ALL
========================================================= */

clearBtn.addEventListener(
    "click",
    function() {

        if (
            scheduledScreenings.length === 0
        ) {

            return;

        }


        const confirmed =
            confirm(
                "Clear the entire festival schedule?"
            );


        if (!confirmed) {

            return;

        }


        scheduledScreenings = [];


        renderScreenings();

        renderCalendar();


        updateCinemaOptions();

        updateAvailableTimes();

    }
);


/* =========================================================
   RENDER CALENDAR
========================================================= */

function renderCalendar() {

    calendar.innerHTML = "";


    const dates =
        getFestivalDates();


    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "calendar-grid";


    /* ================================================
       HEADER
    ================================================= */

    const header =
        document.createElement(
            "div"
        );


    header.className =
        "calendar-header";


    header.style.gridTemplateColumns =
        `80px repeat(
            ${dates.length},
            minmax(100px, 1fr)
        )`;


    const timeHeader =
        document.createElement(
            "div"
        );


    timeHeader.textContent =
        "TIME";


    header.appendChild(
        timeHeader
    );


    dates.forEach(
        date => {

            const dateHeader =
                document.createElement(
                    "div"
                );


            dateHeader.innerHTML =
                formatCalendarDate(
                    date
                );


            header.appendChild(
                dateHeader
            );

        }
    );


    wrapper.appendChild(
        header
    );


    /* ================================================
       BODY
    ================================================= */

    const body =
        document.createElement(
            "div"
        );


    body.className =
        "calendar-body";


    body.style.gridTemplateColumns =
        `80px repeat(
            ${dates.length},
            minmax(100px, 1fr)
        )`;


    const totalHours =
        CALENDAR_END_HOUR -
        CALENDAR_START_HOUR +
        1;


    /* ================================================
       TIME COLUMN
    ================================================= */

    const timeColumn =
        document.createElement(
            "div"
        );


    timeColumn.className =
        "calendar-time-column";


    timeColumn.style.height =
        `${totalHours * HOUR_HEIGHT}px`;


    for (
        let hour = CALENDAR_START_HOUR;
        hour <= CALENDAR_END_HOUR;
        hour++
    ) {

        const label =
            document.createElement(
                "div"
            );


        label.className =
            "time-label";


        label.style.height =
            `${HOUR_HEIGHT}px`;


        label.textContent =
            formatMinutes(
                hour * 60
            );


        timeColumn.appendChild(
            label
        );

    }


    body.appendChild(
        timeColumn
    );


    /* ================================================
       DATE COLUMNS
    ================================================= */

    dates.forEach(
        date => {

            const column =
                document.createElement(
                    "div"
                );


            column.className =
                "calendar-date-column";


            column.style.height =
                `${totalHours * HOUR_HEIGHT}px`;


            /* HOUR LINES */

            for (
                let hour = CALENDAR_START_HOUR;
                hour <= CALENDAR_END_HOUR;
                hour++
            ) {

                const line =
                    document.createElement(
                        "div"
                    );


                line.className =
                    "calendar-hour-line";


                line.style.top =
                    `${(
                        hour -
                        CALENDAR_START_HOUR
                    ) * HOUR_HEIGHT}px`;


                column.appendChild(
                    line
                );

            }


            /* SCREENINGS */

            const dayScreenings =
                scheduledScreenings.filter(
                    screening =>
                        screening.date === date
                );


            /*
                IMPORTANT:

                Every screening gets created
                exactly ONCE.

                Its height represents its
                runtime.
            */

            dayScreenings.forEach(
                screening => {

                    createCalendarCard(
                        column,
                        screening
                    );

                }
            );


            body.appendChild(
                column
            );

        }
    );


    wrapper.appendChild(
        body
    );


    calendar.appendChild(
        wrapper
    );

}


/* =========================================================
   CREATE ONE CALENDAR CARD
========================================================= */

function createCalendarCard(
    column,
    screening
) {

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "calendar-screening";


    const startMinutes =
        timeToMinutes(
            screening.start
        );


    const endMinutes =
        timeToMinutes(
            screening.end
        );


    const calendarStartMinutes =
        CALENDAR_START_HOUR * 60;


    const top =
        startMinutes -
        calendarStartMinutes;


    const duration =
        endMinutes -
        startMinutes;


    /*
        TOP = starting time

        HEIGHT = runtime

        So a 10:00–11:45 movie
        becomes ONE 105px card.
    */

    card.style.top =
        `${top}px`;


    card.style.height =
        `${Math.max(
            duration - 4,
            45
        )}px`;


    card.style.borderTop =
        `8px solid ${screening.color}`;


    card.innerHTML = `

        <div class="calendar-screening-title">

            ${screening.title}

        </div>


        <div class="calendar-cinema">

            ${screening.cinema}

        </div>


        <div class="calendar-screening-time">

            ${formatTime(
                screening.start
            )}

            —

            ${formatTime(
                screening.end
            )}

        </div>

    `;


    column.appendChild(
        card
    );

}


/* =========================================================
   GET SELECTED MOVIE
========================================================= */

function getSelectedMovie() {

    const id =
        Number(
            movieSelect.value
        );


    if (!id) {

        return null;

    }


    return movies.find(
        movie =>
            movie.id === id
    );

}


/* =========================================================
   FESTIVAL DATES
========================================================= */

function getFestivalDates() {

    const dates = [];


    const start =
        new Date(
            `${FESTIVAL_START}T00:00:00`
        );


    const end =
        new Date(
            `${FESTIVAL_END}T00:00:00`
        );


    for (
        let date = new Date(start);
        date <= end;
        date.setDate(
            date.getDate() + 1
        )
    ) {

        dates.push(
            date
                .toISOString()
                .split("T")[0]
        );

    }


    return dates;

}


/* =========================================================
   TIME → MINUTES
========================================================= */

function timeToMinutes(
    time
) {

    const [
        hours,
        minutes
    ] =
        time
        .split(":")
        .map(Number);


    return (
        hours * 60 +
        minutes
    );

}


/* =========================================================
   MINUTES → TIME
========================================================= */

function minutesToTime(
    totalMinutes
) {

    const hours =
        Math.floor(
            totalMinutes / 60
        );


    const minutes =
        totalMinutes % 60;


    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0")
    );

}


/* =========================================================
   FORMAT TIME
========================================================= */

function formatTime(
    time
) {

    const totalMinutes =
        timeToMinutes(
            time
        );


    return formatMinutes(
        totalMinutes
    );

}


/* =========================================================
   FORMAT MINUTES
========================================================= */

function formatMinutes(
    totalMinutes
) {

    let hours =
        Math.floor(
            totalMinutes / 60
        );


    const minutes =
        totalMinutes % 60;


    const period =
        hours >= 12
            ? "PM"
            : "AM";


    if (hours === 0) {

        hours = 12;

    }
    else if (hours > 12) {

        hours -= 12;

    }


    return (
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")} ` +
        period
    );

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(
    dateString
) {

    const date =
        new Date(
            `${dateString}T00:00:00`
        );


    return date.toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    );

}


/* =========================================================
   FORMAT CALENDAR DATE
========================================================= */

function formatCalendarDate(
    dateString
) {

    const date =
        new Date(
            `${dateString}T00:00:00`
        );


    const weekday =
        date.toLocaleDateString(
            "en-US",
            {
                weekday: "short"
            }
        );


    const month =
        date.toLocaleDateString(
            "en-US",
            {
                month: "short"
            }
        );


    const day =
        date.getDate();


    return `

        <div>

            <div>
                ${weekday}
            </div>

            <strong>
                ${month} ${day}
            </strong>

        </div>

    `;

}

/* =========================================================
   SAVE CALENDAR AS IMAGE
========================================================= */

const saveCalendarBtn = document.getElementById("saveCalendarBtn");

if (saveCalendarBtn) {

    saveCalendarBtn.addEventListener("click", async () => {

        const calendar = document.querySelector(".calendar-grid");

        if (!calendar) {
            alert("Calendar not found.");
            return;
        }


        const originalText = saveCalendarBtn.textContent;

        saveCalendarBtn.textContent = "Saving...";
        saveCalendarBtn.disabled = true;


        try {

            const canvas = await html2canvas(calendar, {

                backgroundColor: "#ffffff",

                scale: 2,

                useCORS: true,

                allowTaint: true,

                logging: false,

                width: calendar.scrollWidth,

                height: calendar.scrollHeight,

                windowWidth: calendar.scrollWidth,

                windowHeight: calendar.scrollHeight

            });


            const link = document.createElement("a");

            link.download = "Cinemalaya-2026-Festival-Calendar.png";

            link.href = canvas.toDataURL("image/png");

            link.click();


        } catch (error) {

            console.error("Calendar export failed:", error);

            alert("Unable to save the calendar image.");

        }


        saveCalendarBtn.textContent = originalText;

        saveCalendarBtn.disabled = false;

    });

}
