

       //for toggle button
        document.addEventListener("DOMContentLoaded", function () {
        var button = document.getElementById("toggleButton");
        var list = document.getElementById("list");
    
        button.addEventListener("click", function () {
            list.classList.toggle("hidden");
        });
        });
    
         //Toggle Dropdown
         function toggleDropdown() {
        var toggleButton = document.getElementById('toggleButton');
        var list = document.getElementById('list');
    
        // Toggle between bars and x icons
        toggleButton.classList.toggle('fa-bars');
        toggleButton.classList.toggle('fa-times');
      }



      

      // Sample data representing car brands and models
      const carData = {
          "Chevrolet": [
              "BLAZER",
              "MALIBU",
              "CAPTIVA",
              "EQUINOX",
              "MONZA",
              "GROOVE",
              "TRACKER",
              "TRAILBLAZER",
              "TRAVERSE",
              "TRAX",
              "SUBURBAN",
              "TAHOE",
              "ONIX PLUS",
              "COLORADO",
              "MONTANA",
              "MAX",
              "SILVERADO",
              "OPTRA",
              "SAIL/AVEO",
              "MENLO",
              "ONIX",
              "ORLANDO",
              "SPIN",
              "EXPRESS",
              "N300",
              "N400"      
          ],

          "Audi": [ "AUDI QUATTRO",
              "AUDI 100 AND 200 / AUDI 500",
              "AUDI A3",
              "AUDI A4",
              "AUDI TT",
              "AUDI A6",
              "AUDI S6",
              "AUDI S3", 
              "AUDI S5",
              "AUDI R8 (TYPE 4S)",
              "AUDI Q7",
              "AUDI A8",
              "AUDI Q8 e-tron",
              "AUDI RS6",
              "AUDI ROSEMEYER",
              "AUDI Q5",
              "AUDI A5",
              "AUDI e-tron GT",
              "AUDI A7",
              "AUDI R8 (TYPE 42)",
              "AUDI RS 2 AVAT",
              "AUDI LE MANS QUATTRO",
              "AUDI COUPE",
              "AUDI A1",
              "AUDI Q5",
              "AUDI RS 6",
              "AUDI Q4 e-TRON",
              "AUDI R8C"],

          "Ford": [
              "HATCH BACK",
              "ESCORT",
              "FOCUS",
              
              "SEDAN",
              "FOCUS",
              "MONDEA/TAURUS",
              
              "STATION WAGON",
              "FOCUS",
              
              "SPORT CAR",
              "BRONCO",
              "BRONCO SPORT",
              "EDGE",
              "EDGE L",
              "EQUATOR",
              "ESCAPE",
              "EVEREST",
              "KUGA",
              "MUSTUNG", 
              
              "SUV/CROSSOVER",
              "EXPADITION ",
              "EVAS",
              "EXPLORER", 
              "EXPLORER EV",
              "EQUATOR SPORT",
              "F-SERIES",
              "MUSTUNG MECH E",
              "PUMA",
              "TERRITORY/EQUADO SPORT",
              
              "HEAVY COMMERCIAL VEHICLES",
              "CARGO",
              "E-SERIES CUTAWAY",
              "F-MAX",
              "F-SERIE",
              "TRANSIT CUTAWAY",
              "SUPER DUT",
              
              "MPV/MINI VAN",
              "TOURNEO CONNECT",
              "TOURNEO COURIER",
              
              "VAN",
              "TRANSIT",
              "TRANSIT CONNECT",
              "TRANSIT COURIER",
              "TRANSIT CUSTOM",
              
              "PICK-UP TRUCK",
              "F-150 LIGHTNING",
              "MAVERICK",
              "RANGER",
              "TRANSIT",
              "TOURNEO COURIER"
                ],

        "Honda": [
                "HATCHBACK",
                "Brio",
                "City",
                "Civic",
                "Integra",
                "Fit-Jazz-Life",
                
                "SEDAN",
                "Accord/Inspire",
                "Amaze",
                "City/Ballad",
                "Civic/Integra",
                "Crider/Envix",
                "Legend",
                "Prelude",
                "MPV/Minivan/Station Wagon",
                "Freed",
                "Mobillo",
                "Odyssey/Elysion",
                "Stepwgn",
               
               "CROSSOVER/SUV",
                "Avancier/UR-V",
                "BR-V",
                "CR-V/Breeze",
                "Crosstour",
                "Element",
                "Elevate/WR-V",
                "e:NS2/e:NP2",
                "HR-V/Vezel/XR-V",
                "Passport",
                "Pilot",
                "Prologue",
                "WR-V",
                "ZR-V/HR-V",
                "PICKUP TRUCK",
                "Ridgeline",
                
                "SPORTS/PERFORMANCE CAR",
                "Civic Type R"
                     ],

        "Lexus": [
                "250H",
                "CT200H0",
                "IS220D",
                "IS250",
                "IS250C",
                "IS300",
                "IS300C",
                "IS300H",
                "IS350",
                "IS350C",
                "LC500",
                "LC500H",
                "LFA",
                "LM300H",
                "LM350",
                "LM350H",
                "LS350",
                "LS400",
                "LS430",
                "LS460",
                "LS460L",
                "LS500",
                "LS500H",
                "LS600H",
                "LS600HL",
                "LX450",
                "LX450D",
                "LX460",
                "LX470",
                "LX500D",
                "LX570",
                "LX600",
                "NX200T",
                "NX250",
                "NX300H",
                "NX350",
                "NX350H",
                "NX450H",
                "RC F",
                "RC200T",
                "RC300",
                "RC300H",
                "RC350",
                "RX200T",
                "RX270",
                "RX300",
                "RX330",
                "RX350",
                "RX350L",
                "RX400H",
                "RX450H",
                "RX450HL",
                "RZ450E",
                "SC300",
                "SC400",
                "SC430",
                "UX2##H",
                "UX200",
                "UX250H",
                "UX300E"
                ],
        
        "Mercedes Benz": [
                "A-Class",
            
                "A 140",
                "A 140L",
                "A 140 Automatic",
                "A 140 L Automatic",
                "A 160 L",
                "A 190",
                "A 190 L",  
                "A 210 Evolution",
                "A 210 Evolution L",
                "A 32K AMG (Prototype)",
                "A 38 AMG (Prototype)",
                "A 160 CDI",
                "A 170 CDI",
                "A 170 CDI L",
                "A 150",
                "A 170",
                "A 200",
                "A 200 Turbo",
                "A 160 CDI",
                "A 180 CDI",
                "A 200 CDI",
                "A 180 2014",
                "A 180 2019",
                "A 220",
                "A 35 AMG",
                "A 45 AMG",
                "AMG GT",
                "AMG GT 43",
                "AMG GT 53",
                "AMG GT 63",
             
                "B-Class",
                
                "B 160",
                "B 170",
                "B 180",
                "B 200",
                "B 200 Turbo",
                "B 180 CDI",
                "B 200 CDI",
                "B 170 NGT",
                "B 220",
                "B 250",
                "B 180 d",
                "B 200 d",
                "B 220 d",
                "B 250 e",
             
                "C-Class",
                
                "W 202 sedan",
                "W 203 sedan",
                "W 204 sedan",
                "W 205 sedan",
                "W 206 sedan",
             
                "CLA-Class (C 117; 2013)",
             
                "CLA 180 BlueEFFICIENCY Edition",
                "CLA 180",
                "CLA 200",
                "CLA 220 4MATIC",
                "CLA 250",
                "CLA 250 Sport",
                "CLA 250 4MATIC",
                "CLA 250 4MATIC Sport",
                "CLA 45 AMG",
                "CLA 180 CDI/CLA 180 d",
                "CLA 200 CDI/CLA 200 d",
                "CLA 200 CDI 4MATIC/CLA 200 d 4MATIC",
                "CLA 220 CDI/CLA 220 d",
                "CLA 220 CDI 4MATIC/CLA 220 d 4MATIC",
                
                "CLA-Class (C 118; 2019)",
                
                "CLA 180",
                "CLA 200",
                "CLA 200 4MATIC",
                "CLA 220",
                "CLA 220 4MATIC",
                "CLA 250",
                "CLA 250 4MATIC",
                "CLA 35 AMG",
                "CLA 45 AMG 4MATIC+",
                "CLA 45 S AMG 4MATIC+",
                "CLA 180 d",
                "CLA 200 d",
                "CLA 200 d 4MATIC",
                "CLA 220 d",
                "CLA 220 d 4MATIC",
                "CLA 250 e",
                
                "E-Class",
                
                "E 200",
                "E 350",
                "E 450",
                "E 300e",
                "E 400e",
                "E 220d",
                "E 450d",
                "E 300de",
                
                "Mercedes-Benz EQE",
                
                "EQE 300",
                "EQE 350",
                "EQE 350+",
                "EQE 350",
                "4MATIC",
                "EQE 500",
                "4MATIC",
                "AMG EQE 43",
                "4MATIC",
                "AMG EQE 53",
                "4MATIC+",
                
                "Mercedes-Benz EQS",
                
                "EQS 350",
                "EQS 450+",
                "EQS 450",
                "4MATIC",
                "EQS 500",
                "4MATIC",
                "EQS 580",
                "4MATIC",
                "AMG EQS ",
                "4MATIC+",
                
                "S-Class",
                
                "S280",
                "S 300",
                "S 320",
                "S 320L",
                "S 420",
                "S 420L",
                "S 500",
                "S 500L",
                "S 600",
                "S 600L",
                "S 280",
                "S 320",
                "S 320 CD",
                "S 400 CDI",
                "S 350",
                "S 430",
                "S 500",
                "S 600",
                "S 55",
                "S 63",
                "S 65 AMG",
                "S 250 CDI",
                "S 300",
                "S 350",
                "S 400 HYBRID",
                "S 450",
                "S 550",
                "S 600"
            ],

        "Nissan": [
                "AD",
                "ALMERA",
                "ALTIMA",
                "ARMADA",
                "ARIYA",
                "ATLAS",
                "CABSTAR",
                "CARAVAN  ",
                "DAYZ",
                "ELGRAND",
                "EVALIA",
                "FRONTIER(D41)",
                "GT-R",
                "INTERSTAR",
                "JUKE",
                "KICKS",
                "LEAF",
                "LIVINA",
                "MAGNITE",
                "MICRA",
                "MURANO",
                "NAVANA/NP300(D23)",
                "NOTE",
                "NP200",
                "NT100 CLIPPER",
                "NV100/CLIPPER",
                "NV200/EVALIA",
                "PATHFINDER",
                "PATROL(Y61)",
                "PATROL(Y62)",
                "PRIMASTAR",
                "QASHQAI",
                "ROGUE",
                "ROOX",
                "SAKURA",
                "SERENA",
                "SKYLINE",
                "SYLPHY",
                "SUNNY",
                "TERRA",
                "TILDA",
                "TITAN",
                "TOWNSTAR",
                "URVAN",
                "VERSA",
                "V-DRIVE",
                "X-TERRA",
                "X-TRAIL",
                "Z"
                     ],

        "Peugeot": [
                "PEUGEOT 208",
                "PEUGEOT 3008",
                "PEUGEOT 508",
                "PEUGEOT 505",
                "PEUGEOT 2008",
                "PEUGEOT 202",
                "PEUGEOT 5008",
                "PEUGEOT 308",
                "PEUGEOT 206",
                "PEUGEOT 306",
                "SUV",
                "LANDTREK",
                "PEUGEOT 106",
                "PEUGEOT 208 GTi",
                "PEUGEOT SPORT ENGINEERED",
                "PEUGEOT 307",
                "HYPERCAR 9X8",
                "PEUGEOT 408",
                "PEUGEOT 104",
                "PEUGEOT 4007",
                "PEUGEOT 207",
                "PEUGEOT 108",
                "PEUGEOT 405",
                "PEUGEOT 508",
                "PEUGEOT 4007",
                "BOXER",
                "PEUGEOT 406", 
                "PEUGEOT RCZ VARIANTS",
                "PEUGEOT 107"
                    ],
                    
        "Suzuki": [
                "Specifications for Suzuki Japan",
                "Aerio RB21S-6",
                "Aerio RB21S-4",
                "Aerio RB21S-5",
                "Aerio RB21S",
                "Aerio RB21S-2",
                "Aerio RB21S-3",
                "Alto CN21S",
                "Alto CL11V",
                "Alto CA72V",
                "Alto HA11S",
                "Alto HA11S-2",
                "Alto CR22S",
                "Alto CL22V",
                "Alto CN11S",
                "Alto HA12S-2",
                "Alto HA12S",
                "Alto HA23S-3",
                "Alto HA24S-3",
                "Alto HA24S-4",
                "Alto HA24S-2",
                "Alto CA71V",
                "Alto HA23S-4",
                "Alto HA24S",
                "Alto HA25S",
                "Cappuccino EA21R",
                "Cappuccino EA11R",
                "Cara PG6SS",
                "Carry Truck DA63T7T",
                "Carry Truck	DA63T8T",
                "Carry Truck	DA63T9T",
                "Carry/Every	DA71T-3",
                "Carry/Every	DB71T-3",
                "Carry/Every	DA52T",
                "Carry/Every	DA64V5Y",
                "Carry/Every	DA62V-5",
                "Carry/Every	DA62V-6",
                "Carry/Every	DA64V",
                "Carry/Every	DA32W",
                "Carry/Every	DA64V-5",
                "Carry/Every	DA71T",
                "Carry/Every	DB71T",
                "Carry/Every	DA51T",
                "Carry/Every	DA41T",
                "Carry/Every	DC51T",
                "Carry/Every	DC51T-5",
                "Carry/Every	DA52T-3",
                "Carry/Every	DA52T-2",
                "Carry/Every	DA62V-4",
                "Carry/Every	DA64V-4",
                "Carry/Every	DA64V-3",
                "Carry/Every	DA64V-2",
                "Carry/Every	DA63T-9",
                "Carry/Every	DA63T-7",
                "Carry/Every	DA63T-5",
                "Carry/Every	DA63T-8",
                "Carry/Every	DA63T-6",
                "Carry/Every	DA32W-4",
                "Carry/Every	DA65T",
                "Carry/Every	DA65T-3",
                "Carry/Every	DA65T-2",
                "Carry/Every	DA64V5T",
                "Cervo	CN22S-6",
                "Cervo	CN32S",
                "Cervo	CN31S",
                "Cervo G	HG21S-4",
                "Cervo G	HG21S",
                "Cervo G	HG21S-3",
                "Cervo G	HG21S-2",
                "Chevrolet Cruize/MW	HR52S-4",
                "Chevrolet Cruize/MW	HR51S",
                "Chevrolet Cruize/MW	ME34S-7",
                "Chevrolet Cruize/MW	ME34S-6",
                "Chevrolet Cruize/MW	HR52S-2",
                "Chevrolet Cruize/MW	ME34S-5",
                "Chevrolet Cruize/MW	HR52S-3",
                "Cultus AA44S",
                "Cultus AA34S",
                "Cultus AH14S",
                "Cultus GA11S-3",
                "Cultus GA11S-2",
                "Cultus GA11S",
                "Cultus GA11S-4",
                "Cultus GC21S-5",
                "Escudo TX92W-4",
                "Escudo TL52W-3",
                "Escudo TX92W-2",
                "Escudo TA02W-2",
                "Escudo TA11W",
                "Escudo TDA4W-3",
                "Escudo TD54W",
                "Escudo TA01R-2",
                "Escudo TA01R",
                "Escudo TD54W-2",
                "Escudo TA51W-3",
                "Escudo TA01R-5",
                "Escudo TA01R-7",
                "Escudo TA02W",
                "Escudo TDA4W-4",
                "Escudo TX92W-3",
                "Fronte CP11S",
                "Jimny	JA12W",
                "Jimny	JA12W-2",
                "Jimny	JA71",
                "Jimny	JA71C-3",
                "Jimny	JA11C",
                "Jimny	JB31W",
                "Jimny JB32W-3",
                "Jimny	JB43W-2",
                "Jimny	JB43W-3",
                "Jimny	JB43W-4",
                "Jimny	JB43W-7",
                "Jimny	JB43W-6",
                "Jimny	JB43W-5",
                "Jimny	JB23W-6",
                "Jimny	JB23W-4",
                "Jimny	JB23W-5",
                "Jimny	JB23W-7",
                "Jimny	JB23W",
                "Jimny	JB32W",
                "Jimny	JB33W",
                "Jimny	JB23W8Y",
                "Jimny	JB23W-8",
                "Kei/Swift	ZC11S",
                "Kei/Swift	HN22S-9",
                "Kei/Swift	HN22S10",
                "Kei/Swift	ZC11S-4",
                "Kei/Swift	HT51S-4",
                "Kei/Swift	ZC11S-3",
                "Kei/Swift	HN22S11",
                "Kei/Swift	ZC31S-2",
                "Kei/Swift	ZC31S-3",
                "Kei/Swift	ZC72S",
                "Kei/Swift	HN11S",
                "Kei/Swift	HN12S-4",
                "Kei/Swift	HN11S-3",
                "Kei/Swift	HN11S-2",
                "Kei/Swift	ZC11S-2",
                "Kei/Swift	HN22S-6",
                "Kei/Swift	HN22S-7",
                "Kei/Swift	HN22S-5",
                "Kei/Swift	HN22S-8",
                "Kei/Swift	ZC31S",
                "Kei/Swift	HT51S",
                "Kei/Swift	HT51S-3",
                "Kei/Swift	HT51S-2",
                "Kizashi	RE91S",
                "Landy	LANDY-3",
                "Landy	LANDY2",
                "Landy	LANDY-2 (2007-2008)",
                "Landy	LANDY (2006-2007)",
                "Lapin	HE21S-6",
                "Lapin	HE22S",
                "Lapin	HE22S-2",
                "Lapin	HE21S-5",
                "Lapin	HE21S-4",
                "Lapin	HE21S-3",
                "Lapin	HE21S-2",
                "Lapin	HE21S",
                "MR Wagon MF22S-3",
                "MR Wagon MF21S",
                "MR Wagon MF33S",
                "MR Wagon MF22S-2",
                "MR Wagon MF21S-2",
                "MR Wagon MF22S",
                "Palette	MK21S-3",
                "Palette	MK21S-2",
                "Palette	MK21S",
                "SX4 YA11S-2",
                "SX4 YA11S",
                "SX4 YA11S-3",
                "Splash XB32S",
                "Twin EC22S-3",
                "Twin EC22S-2",
                "Twin EC22S",
                "Wagon R	MC12S-3",
                "Wagon R	MH23S-2",
                "Wagon R	MH23S",
                "Wagon R	MH22S-5",
                "Wagon R	MA34S-6",
                "Wagon R	MA15S",
                "Wagon R	MA34S-7",
                "Wagon R	MH23S-T",
                "Wagon R	MH22S5T",
                "Wagon R	MC22S-6",
                "Wagon R	CT21S-4",
                "Wagon R	CT21S",
                "Wagon R	MC11S-2",
                "Wagon R	MA63S",
                "Wagon R	MA64S-2",
                "Wagon R	MC22S-4",
                "Wagon R	MH21S-3",
                "Wagon R	MH21S",
                "Wagon R	MH21S-2",
                "Wagon R	MA64S-3",
                "Wagon R	MC11S",
                "Wagon R	MA61S",
                "Wagon R	MH21S-4",
                "Wagon R	MC22S-5",
                "Wagon R	MA34S-4",
                "Wagon R	MA34S-5",
                "X-90 LB11S",
                "Specifications for Suzuki Europe",
                "APV",
                "Aerio",
                "Alto- A-Star/Celerio/800/Fronte",
                "Baleno/Esteem",
                "Cappuccino",
                "Carry/Supercarry/Every",
                "Ertiga",
                "Equato",
                "Forenza/Reno",
                "Forsa/Sprint/Swift (SA)",
                "Grand Vitara",
                "Grand Vitara XL-7",
                "Ignis",
                "Jimny",
                "Kei",
                "Kizashi",
                "LJ80",
                "Liana",
                "MR Wagon",
                "SX4",
                "Samurai/SJ",
                "Sierra",
                "Splash/Ritz",
                "Swift",
                "Verona",
                "Vitara/Sidekick",
                "WagonR+",
                "X90"
                    ],

        "Toyota": [
                "AGYA",
                "ALLION",
                "ALPHARD",
                "ALTEZZA",
                "AQUA",
                "ARISTO",
                "AURION",
                "AURIS  ",
                "AVALON",
                "AVENSIS",
                "AYGO",
                "BB",
                "BELTA",
                "BLADE",
                "BLIZZARD",
                "BREVIS",
                "BZ3",
                "BZ4X",
                "C+POD",
                "C+WALK T",
                "C-HR",
                "CALDINA",
                "CALYA",
                "CAMI",
                "CAMRY",
                "CARINA",
                "CELICA",
                "CELSIOR",
                "CENTURY",
                "CHASER",
                "COASTER",
                "COMFORT",
                "COPEN",
                "COROLLA",
                "CORONA",
                "CORSA",
                "CRESSIDA",
                "CRESTA",
                "CROWN",
                "CURREN",
                "CYNOS",
                "DELIBOY",
                "DUET",
                "DYNA",
                "E'Z",
                "ECHO",
                "EQ EV",
                "ESQUIRE",
                "ESTIMA",
                "ETIOS",
                "FJ CRUISER",
                "FORTUNER",
                "FRONT LANDER",
                "FUN CARGO",
                "GAIA",
                "GLANZA",
                "GR",
                "GRANACE",
                "GRAND",
                "GRANVIA",
                "GT86",
                "HARRIER",
                "HEAVY DUTY TRUCK",
                "HIACE",
                "HIGHLANDER",
                "HILUX",
                "INNOVA",
                "IPSUM",
                "IQ",
                "ISIS",
                "IST",
                "IZOA",
                "KIJANG",
                "KLUGER",
                "LAND CRUISER",
                "LEVIN",
                "LIMO",
                "LITE",
                "LUCIDA",
                "MAJESTA",
                "MARK",
                "MASTER ACE",
                "MATRIX",
                "MEGA CRUISER",
                "MIRAI",
                "MODEL-F",
                "MR-S",
                "MR2",
                "NADIA",
                "NOAH",
                "OPA",
                "ORIGIN",
                "PASEO",
                "PASSO",
                "PICKUP",
                "PICNIC",
                "PIXIS",
                "PLATZ",
                "PORTE",
                "PREMIO",
                "PREVIA",
                "PRIUS",
                "PROBOX",
                "PROGRES",
                "PRONARD",
                "PUBLICA",
                "QUALIS",
                "QUICK",
                "RACTIS",
                "RAIZE",
                "RAUM",
                "RAV4",
                "REGIUS",
                "REIZ",
                "ROOMY",
                "RUKUS",
                "RUMION",
                "RUSH",
                "SAI",
                "SCEPTER",
                "SCION",
                "SEQUOIA",
                "SERA",
                "SIENNA",
                "SIENTA",
                "SOARER",
                "SOLARA",
                "SOLUNA",
                "SPACIO",
                "SPADE",
                "SPARKY",
                "SPRINTER",
                "STARLET",
                "STOUT",
                "SUCCEED",
                "SUPRA",
                "T.U.V",
                "T100",
                "TACOMA",
                "TANK",
                "TARAGO",
                "TERCEL",
                "TOURING HIACE",
                "TOWN",
                "TOYO",
                "TUNDRA",
                "URBAN CRUISER",
                "URBANCRUISER",
                "URBANCRUISERHYRYDER",
                "VAN",
                "VANGUARD",
                "VELLFIRE",
                "VELOZ",
                "VENZA",
                "VEROSSA",
                "VERSO",
                "VERSO-S",
                "VIOS",
                "VISTA",
                "VITZ",
                "VOLTZ",
                "VOXY",
                "WIGO",
                "WILDLANDER",
                "WILL",
                "WINDOM",
                "WISH",
                "XA",
                "YARIS",
                "YARISATIV",
                "ZELAS"
                ],

        "Volkswagen": [
                "181",
                "AMEO",
                "APOLLO",
                "ARTEON",
                "ARTEON SHOOTING BRAKE",
                "ATLANTIC",
                "ATLAS/TERAMONT",
                "BEETLE",
                "BORA",
                "BRASILIA",
                "C-TREK",
                "CABRIO T",
                "CABRIOLET",
                "CADDY LIFE",
                "CARAT",
                "CARIBE",
                "CIRI GOLF",
                "CLASICO",
                "CORRADO",
                "CORSAR",
                "COUNTRY BUGGY",
                "DASHER",
                "DERBY",
                "EOS",
                "FOX",
                "GOL",
                "GOLF PLUS",
                "GOLF SPORTSVAN",
                "GOLF VARIANT/ SPORTSWAGEN",
                "GACEL",
                "HEBMULLER CABRIOLET",
                "ILTIS",
                "ID.4",
                "ID.5",
                "ID.6",
                "ID.7",
                "ID.BUZZ",
                "JETTA/SAGUITAR/VENTO",
                "KARMANN GHIA",
                "KOMMANDEURSWAGEN",
                "KUBELWAGEN",
                "K70",
                "LAMANDO",
                "LAVIDA",
                "LOGUS",
                "LUPO",
                "MAGOTAN",
                "MULTIVAN",
                "NEW BEETLE",
                "PARATI",
                "PASSAT",
                "PASSAT (CHINA)",
                "PASSAT LINGYU",
                "PHAETON",
                "PHIDEON",
                "POINTER",
                "POLO PLAYA",
                "POLO (RUSSIA)",
                "POLO TRACK",
                "POLO",
                "PORSCHE 914",
                "QUANTUM",
                "RABBIT",
                "ROUTAN",
                "SANTANA",
                "SCIROCCO",
                "SHARAN",
                "SURAN/SPACEFOX",
                "TAIGO/NIVUS",
                "TALAGON",
                "TAOS/THARU",
                "TAVENDOR",
                "TAYRON",
                "TAYRON-X",
                "TARO",
                "T-CROSS/TACQUA/TAIGUN",
                "T-ROC",
                "TIGUAN ALLSPACE",
                "TIGUAN-X",
                "TOURAN",
                "TOUAREG",
                "TYPE 1",
                "TYPE 3",
                "TYPE 4",
                "TYPE 18A",
                "TYPE 147 KLEINLIEFERWAGEN",
                "UP",
                "VENTO",
                "VIRTUS/POLO SEDAN/LAVIDA XR",
                "VILORAN",
                "VOYAGE",
                "XL1"
        ]
          // Add more brands and models as needed
      };
      
      // Function to update the models dropdown based on the selected brand
      function updateModels() {
          const brandSelect = document.getElementById("brand");
          const modelSelect = document.getElementById("model");
      
          // Clear existing options in the model dropdown
          modelSelect.innerHTML = "";

          // Add a default or placeholder option to the models dropdown
          const defaultOption = document.createElement("option");
          defaultOption.text = "Select a model";
          defaultOption.disabled = true;
          defaultOption.selected = true;
          modelSelect.add(defaultOption);
      
          // Get the selected brand
          const selectedBrand = brandSelect.value;
      
          // Populate the model dropdown with options based on the selected brand
          carData[selectedBrand].forEach(model => {
              const option = document.createElement("option");
              option.value = model;
              option.text = model;
              modelSelect.add(option);
          });
      }
      
      // Initialize the models dropdown when the page loads
      window.onload = updateModels;


//For picture upload
document.getElementById('photo').addEventListener('change', handleFileSelect);
document.getElementById('gallery').addEventListener('change', handleFileSelect);

const maxImages = 4;

function handleFileSelect(event) {
    const fileInput = event.target;
    const previewSection = document.getElementById('preview-section');

    while (previewSection.firstChild) {
        previewSection.removeChild(previewSection.firstChild);
    }

    const files = fileInput.files;

    if (files) {
        for (let i = 0; i < files.length && i < maxImages; i++) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                previewSection.appendChild(img);
            };

            reader.readAsDataURL(files[i]);
        }
    }
    
    // Reset the file input to clear previously selected files
    fileInput.value = '';
}