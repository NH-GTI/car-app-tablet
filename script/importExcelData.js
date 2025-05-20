const STRAPI_URL = "http://localhost:1337";
const STRAPI_TOKEN =
    "85441b60c04596b57fb15e1cc4bfd17b7fe9fcfe841dbee8bb15f43e385bbd9c2af148bca361d54677242efe4c0efc5cabb915beb5850b0d32111f32b3649d63f73b3cf4486638bfbdc1fb5cba605506d5fc347837f26ff97604ee93d83868d16add5722aae7e6cce8336f894f3702b78a78f500788c226dc99c2614e76c7365";

// Example data to import
const models = [
    {
        name: "CX3",
        active: true,
        brand: "13",
    },
    {
        name: "100",
        active: true,
        brand: "15",
    },
    {
        name: "200",
        active: true,
        brand: "15",
    },
    {
        name: "80",
        active: true,
        brand: "15",
    },
    {
        name: "90",
        active: true,
        brand: "15",
    },
    {
        name: "A1",
        active: true,
        brand: "15",
    },
    {
        name: "A2",
        active: true,
        brand: "15",
    },
    {
        name: "A3",
        active: true,
        brand: "15",
    },
    {
        name: "A4",
        active: true,
        brand: "15",
    },
    {
        name: "A5",
        active: true,
        brand: "15",
    },
    {
        name: "A6",
        active: true,
        brand: "15",
    },
    {
        name: "A7",
        active: true,
        brand: "15",
    },
    {
        name: "A8",
        active: true,
        brand: "15",
    },
    {
        name: "CX5",
        active: true,
        brand: "13",
    },
    {
        name: "e-tron",
        active: true,
        brand: "15",
    },
    {
        name: "Q2",
        active: true,
        brand: "15",
    },
    {
        name: "Q3",
        active: true,
        brand: "15",
    },
    {
        name: "Q5",
        active: true,
        brand: "15",
    },
    {
        name: "Q7",
        active: true,
        brand: "15",
    },
    {
        name: "Q8",
        active: true,
        brand: "15",
    },
    {
        name: "R8",
        active: true,
        brand: "15",
    },
    {
        name: "TT",
        active: true,
        brand: "15",
    },
    {
        name: "Allegro",
        active: true,
        brand: "17",
    },
    {
        name: "Healey",
        active: true,
        brand: "17",
    },
    {
        name: "Maestro",
        active: true,
        brand: "17",
    },
    {
        name: "Mini",
        active: true,
        brand: "17",
    },
    {
        name: "Mini Moke",
        active: true,
        brand: "17",
    },
    {
        name: "Montego",
        active: true,
        brand: "17",
    },
    {
        name: "Opale",
        active: true,
        brand: "19",
    },
    {
        name: "Arnage",
        active: true,
        brand: "21",
    },
    {
        name: "Mulsanne",
        active: true,
        brand: "21",
    },
    {
        name: "i3",
        active: true,
        brand: "23",
    },
    {
        name: "Série 3",
        active: true,
        brand: "23",
    },
    {
        name: "Série 5",
        active: true,
        brand: "23",
    },
    {
        name: "Série 6",
        active: true,
        brand: "23",
    },
    {
        name: "Série 7",
        active: true,
        brand: "23",
    },
    {
        name: "Série 8",
        active: true,
        brand: "23",
    },
    {
        name: "Série 1",
        active: true,
        brand: "23",
    },
    {
        name: "Série 2",
        active: true,
        brand: "23",
    },
    {
        name: "Série 4",
        active: true,
        brand: "23",
    },
    {
        name: "X1",
        active: true,
        brand: "23",
    },
    {
        name: "X2",
        active: true,
        brand: "23",
    },
    {
        name: "X3",
        active: true,
        brand: "23",
    },
    {
        name: "X4",
        active: true,
        brand: "23",
    },
    {
        name: "X5",
        active: true,
        brand: "23",
    },
    {
        name: "X6",
        active: true,
        brand: "23",
    },
    {
        name: "Z1",
        active: true,
        brand: "23",
    },
    {
        name: "Z3",
        active: true,
        brand: "23",
    },
    {
        name: "Z4",
        active: true,
        brand: "23",
    },
    {
        name: "Seville",
        active: true,
        brand: "25",
    },
    {
        name: "STS",
        active: true,
        brand: "25",
    },
    {
        name: "Barooder",
        active: true,
        brand: "27",
    },
    {
        name: "Aveo",
        active: true,
        brand: "29",
    },
    {
        name: "Camaro",
        active: true,
        brand: "29",
    },
    {
        name: "Captiva",
        active: true,
        brand: "29",
    },
    {
        name: "Corvette Stingray",
        active: true,
        brand: "29",
    },
    {
        name: "Cruze",
        active: true,
        brand: "29",
    },
    {
        name: "Epica",
        active: true,
        brand: "29",
    },
    {
        name: "Evanda",
        active: true,
        brand: "29",
    },
    {
        name: "Lacetti",
        active: true,
        brand: "29",
    },
    {
        name: "Matiz",
        active: true,
        brand: "29",
    },
    {
        name: "Nubira",
        active: true,
        brand: "29",
    },
    {
        name: "Orlando",
        active: true,
        brand: "29",
    },
    {
        name: "Spark",
        active: true,
        brand: "29",
    },
    {
        name: "Trans Sport",
        active: true,
        brand: "29",
    },
    {
        name: "300",
        active: true,
        brand: "31",
    },
    {
        name: "300M",
        active: true,
        brand: "31",
    },
    {
        name: "Crossfire",
        active: true,
        brand: "31",
    },
    {
        name: "Lebaron",
        active: true,
        brand: "31",
    },
    {
        name: "Neon",
        active: true,
        brand: "31",
    },
    {
        name: "PT Cruiser",
        active: true,
        brand: "31",
    },
    {
        name: "RAM",
        active: true,
        brand: "31",
    },
    {
        name: "Sebring",
        active: true,
        brand: "31",
    },
    {
        name: "Stratus",
        active: true,
        brand: "31",
    },
    {
        name: "Viper",
        active: true,
        brand: "31",
    },
    {
        name: "Vision",
        active: true,
        brand: "31",
    },
    {
        name: "Voyager",
        active: true,
        brand: "31",
    },
    {
        name: "2 CV",
        active: true,
        brand: "33",
    },
    {
        name: "Ami",
        active: true,
        brand: "33",
    },
    {
        name: "AX",
        active: true,
        brand: "33",
    },
    {
        name: "Berlingo",
        active: true,
        brand: "33",
    },
    {
        name: "BX",
        active: true,
        brand: "33",
    },
    {
        name: "C-Crosser",
        active: true,
        brand: "33",
    },
    {
        name: "C-Elysée",
        active: true,
        brand: "33",
    },
    {
        name: "C-Zéro",
        active: true,
        brand: "33",
    },
    {
        name: "C1",
        active: true,
        brand: "33",
    },
    {
        name: "C15",
        active: true,
        brand: "33",
    },
    {
        name: "C2",
        active: true,
        brand: "33",
    },
    {
        name: "C25",
        active: true,
        brand: "33",
    },
    {
        name: "C3 Aircross",
        active: true,
        brand: "33",
    },
    {
        name: "C3",
        active: true,
        brand: "33",
    },
    {
        name: "C3 Picasso",
        active: true,
        brand: "33",
    },
    {
        name: "C4",
        active: true,
        brand: "33",
    },
    {
        name: "C4 Aircross",
        active: true,
        brand: "33",
    },
    {
        name: "C4 Cactus",
        active: true,
        brand: "33",
    },
    {
        name: "C4 Picasso",
        active: true,
        brand: "33",
    },
    {
        name: "C5",
        active: true,
        brand: "33",
    },
    {
        name: "C5 Aircross",
        active: true,
        brand: "33",
    },
    {
        name: "C6",
        active: true,
        brand: "33",
    },
    {
        name: "C8",
        active: true,
        brand: "33",
    },
    {
        name: "Courrier",
        active: true,
        brand: "33",
    },
    {
        name: "CX",
        active: true,
        brand: "33",
    },
    {
        name: "DS",
        active: true,
        brand: "33",
    },
    {
        name: "DS3",
        active: true,
        brand: "35",
    },
    {
        name: "PL17",
        active: true,
        brand: "37",
    },
    {
        name: "DS4",
        active: true,
        brand: "35",
    },
    {
        name: "DS5",
        active: true,
        brand: "35",
    },
    {
        name: "DS7",
        active: true,
        brand: "35",
    },
    {
        name: "Dyane",
        active: true,
        brand: "33",
    },
    {
        name: "E-Mehari",
        active: true,
        brand: "33",
    },
    {
        name: "Evasion",
        active: true,
        brand: "33",
    },
    {
        name: "C4 Spacetourer",
        active: true,
        brand: "33",
    },
    {
        name: "GS",
        active: true,
        brand: "33",
    },
    {
        name: "ID",
        active: true,
        brand: "33",
    },
    {
        name: "Jumper",
        active: true,
        brand: "33",
    },
    {
        name: "Jumpy",
        active: true,
        brand: "33",
    },
    {
        name: "LNA",
        active: true,
        brand: "33",
    },
    {
        name: "Nemo",
        active: true,
        brand: "33",
    },
    {
        name: "Saxo",
        active: true,
        brand: "33",
    },
    {
        name: "SM",
        active: true,
        brand: "33",
    },
    {
        name: "Spacetourer",
        active: true,
        brand: "33",
    },
    {
        name: "Traction",
        active: true,
        brand: "33",
    },
    {
        name: "Type A",
        active: true,
        brand: "33",
    },
    {
        name: "Visa",
        active: true,
        brand: "33",
    },
    {
        name: "Xantia",
        active: true,
        brand: "33",
    },
    {
        name: "XM",
        active: true,
        brand: "33",
    },
    {
        name: "Xsara",
        active: true,
        brand: "33",
    },
    {
        name: "Xsara Picasso",
        active: true,
        brand: "33",
    },
    {
        name: "ZX",
        active: true,
        brand: "33",
    },
    {
        name: "Stingray",
        active: true,
        brand: "39",
    },
    {
        name: "Dokker",
        active: true,
        brand: "41",
    },
    {
        name: "Duster",
        active: true,
        brand: "41",
    },
    {
        name: "Lodgy",
        active: true,
        brand: "41",
    },
    {
        name: "Logan",
        active: true,
        brand: "41",
    },
    {
        name: "Sandero",
        active: true,
        brand: "41",
    },
    {
        name: "Spring",
        active: true,
        brand: "41",
    },
    {
        name: "Espero",
        active: true,
        brand: "43",
    },
    {
        name: "Kalos",
        active: true,
        brand: "43",
    },
    {
        name: "Korando",
        active: true,
        brand: "43",
    },
    {
        name: "Lanos",
        active: true,
        brand: "43",
    },
    {
        name: "Leganza",
        active: true,
        brand: "43",
    },
    {
        name: "Musso",
        active: true,
        brand: "43",
    },
    {
        name: "Nexia",
        active: true,
        brand: "43",
    },
    {
        name: "Rezzo",
        active: true,
        brand: "43",
    },
    {
        name: "Tacuma",
        active: true,
        brand: "43",
    },
    {
        name: "Charade",
        active: true,
        brand: "45",
    },
    {
        name: "Copen",
        active: true,
        brand: "45",
    },
    {
        name: "Cuore",
        active: true,
        brand: "45",
    },
    {
        name: "Feroza",
        active: true,
        brand: "45",
    },
    {
        name: "Gran move",
        active: true,
        brand: "45",
    },
    {
        name: "Materia",
        active: true,
        brand: "45",
    },
    {
        name: "Move",
        active: true,
        brand: "45",
    },
    {
        name: "Rocky",
        active: true,
        brand: "45",
    },
    {
        name: "Sirion",
        active: true,
        brand: "45",
    },
    {
        name: "Terios",
        active: true,
        brand: "45",
    },
    {
        name: "Trevis",
        active: true,
        brand: "45",
    },
    {
        name: "Daimler Double Six",
        active: true,
        brand: "47",
    },
    {
        name: "Avenger",
        active: true,
        brand: "49",
    },
    {
        name: "Caliber",
        active: true,
        brand: "49",
    },
    {
        name: "Nitro",
        active: true,
        brand: "49",
    },
    {
        name: "Vega",
        active: true,
        brand: "51",
    },
    {
        name: "308 GTB",
        active: true,
        brand: "53",
    },
    {
        name: "328",
        active: true,
        brand: "53",
    },
    {
        name: "348",
        active: true,
        brand: "53",
    },
    {
        name: "360",
        active: true,
        brand: "53",
    },
    {
        name: "458",
        active: true,
        brand: "53",
    },
    {
        name: "512 TR",
        active: true,
        brand: "53",
    },
    {
        name: "550 Maranello",
        active: true,
        brand: "53",
    },
    {
        name: "612 Scaglietti",
        active: true,
        brand: "53",
    },
    {
        name: "Dino",
        active: true,
        brand: "53",
    },
    {
        name: "F355",
        active: true,
        brand: "53",
    },
    {
        name: "F430",
        active: true,
        brand: "53",
    },
    {
        name: "Mondial",
        active: true,
        brand: "53",
    },
    {
        name: "124 Spider",
        active: true,
        brand: "55",
    },
    {
        name: "126",
        active: true,
        brand: "55",
    },
    {
        name: "127",
        active: true,
        brand: "55",
    },
    {
        name: "128",
        active: true,
        brand: "55",
    },
    {
        name: "131",
        active: true,
        brand: "55",
    },
    {
        name: "500",
        active: true,
        brand: "55",
    },
    {
        name: "500L",
        active: true,
        brand: "55",
    },
    {
        name: "500X",
        active: true,
        brand: "55",
    },
    {
        name: "600",
        active: true,
        brand: "55",
    },
    {
        name: "Barchetta",
        active: true,
        brand: "55",
    },
    {
        name: "Brava",
        active: true,
        brand: "55",
    },
    {
        name: "Bravo",
        active: true,
        brand: "55",
    },
    {
        name: "Cinquecento",
        active: true,
        brand: "55",
    },
    {
        name: "Croma",
        active: true,
        brand: "55",
    },
    {
        name: "Doblo",
        active: true,
        brand: "55",
    },
    {
        name: "Ducato",
        active: true,
        brand: "55",
    },
    {
        name: "Fiorino",
        active: true,
        brand: "55",
    },
    {
        name: "Freemont",
        active: true,
        brand: "55",
    },
    {
        name: "Full Back",
        active: true,
        brand: "55",
    },
    {
        name: "Grande Punto",
        active: true,
        brand: "55",
    },
    {
        name: "Idea",
        active: true,
        brand: "55",
    },
    {
        name: "Marea",
        active: true,
        brand: "55",
    },
    {
        name: "Multipla",
        active: true,
        brand: "55",
    },
    {
        name: "Palio",
        active: true,
        brand: "55",
    },
    {
        name: "Panda",
        active: true,
        brand: "55",
    },
    {
        name: "Punto",
        active: true,
        brand: "55",
    },
    {
        name: "Qubo",
        active: true,
        brand: "55",
    },
    {
        name: "Regatta",
        active: true,
        brand: "55",
    },
    {
        name: "Scudo",
        active: true,
        brand: "55",
    },
    {
        name: "Sedici",
        active: true,
        brand: "55",
    },
    {
        name: "Seicento",
        active: true,
        brand: "55",
    },
    {
        name: "Stilo",
        active: true,
        brand: "55",
    },
    {
        name: "Tempra",
        active: true,
        brand: "55",
    },
    {
        name: "Tipo",
        active: true,
        brand: "55",
    },
    {
        name: "Ulysse",
        active: true,
        brand: "55",
    },
    {
        name: "Uno",
        active: true,
        brand: "55",
    },
    {
        name: "Karma",
        active: true,
        brand: "57",
    },
    {
        name: "B-Max",
        active: true,
        brand: "59",
    },
    {
        name: "Capri",
        active: true,
        brand: "59",
    },
    {
        name: "Cougar",
        active: true,
        brand: "59",
    },
    {
        name: "Ecosport",
        active: true,
        brand: "59",
    },
    {
        name: "Edge",
        active: true,
        brand: "59",
    },
    {
        name: "Escort",
        active: true,
        brand: "59",
    },
    {
        name: "Explorer",
        active: true,
        brand: "59",
    },
    {
        name: "F.100",
        active: true,
        brand: "59",
    },
    {
        name: "Fiesta",
        active: true,
        brand: "59",
    },
    {
        name: "Focus",
        active: true,
        brand: "59",
    },
    {
        name: "Focus C-max",
        active: true,
        brand: "59",
    },
    {
        name: "Focus Grand C-max",
        active: true,
        brand: "59",
    },
    {
        name: "Clubman",
        active: true,
        brand: "61",
    },
    {
        name: "Fusion",
        active: true,
        brand: "59",
    },
    {
        name: "Galaxy",
        active: true,
        brand: 59,
    },
    {
        name: "Ka",
        active: true,
        brand: "59",
    },
    {
        name: "Ka+",
        active: true,
        brand: "59",
    },
    {
        name: "Kuga",
        active: true,
        brand: "59",
    },
    {
        name: "Maverick",
        active: true,
        brand: "59",
    },
    {
        name: "Mondeo",
        active: true,
        brand: "59",
    },
    {
        name: "Mustang",
        active: true,
        brand: "59",
    },
    {
        name: "Orion",
        active: true,
        brand: "59",
    },
    {
        name: "Probe",
        active: true,
        brand: "59",
    },
    {
        name: "Puma",
        active: true,
        brand: "59",
    },
    {
        name: "Ranger",
        active: true,
        brand: "59",
    },
    {
        name: "S-max",
        active: true,
        brand: "59",
    },
    {
        name: "Scorpio",
        active: true,
        brand: "59",
    },
    {
        name: "Sierra",
        active: true,
        brand: "59",
    },
    {
        name: "Tourneo",
        active: true,
        brand: "59",
    },
    {
        name: "Transit",
        active: true,
        brand: "59",
    },
    {
        name: "Accord",
        active: true,
        brand: "63",
    },
    {
        name: "Civic",
        active: true,
        brand: "63",
    },
    {
        name: "Concerto",
        active: true,
        brand: "63",
    },
    {
        name: "CR-V",
        active: true,
        brand: "63",
    },
    {
        name: "CR-X",
        active: true,
        brand: "63",
    },
    {
        name: "CR-Z",
        active: true,
        brand: "63",
    },
    {
        name: "e",
        active: true,
        brand: "63",
    },
    {
        name: "FR-V",
        active: true,
        brand: "63",
    },
    {
        name: "HR-V",
        active: true,
        brand: "63",
    },
    {
        name: "Insight",
        active: true,
        brand: "63",
    },
    {
        name: "Integra",
        active: true,
        brand: "63",
    },
    {
        name: "Jazz",
        active: true,
        brand: "63",
    },
    {
        name: "Legend",
        active: true,
        brand: "63",
    },
    {
        name: "Logo",
        active: true,
        brand: "63",
    },
    {
        name: "NSX",
        active: true,
        brand: "63",
    },
    {
        name: "Prelude",
        active: true,
        brand: "63",
    },
    {
        name: "S2000",
        active: true,
        brand: "63",
    },
    {
        name: "Shuttle",
        active: true,
        brand: "63",
    },
    {
        name: "Stream",
        active: true,
        brand: "63",
    },
    {
        name: "H1",
        active: true,
        brand: "65",
    },
    {
        name: "H2",
        active: true,
        brand: "65",
    },
    {
        name: "Elantra",
        active: true,
        brand: "61",
    },
    {
        name: "Lantra",
        active: true,
        brand: "61",
    },
    {
        name: "Accent",
        active: true,
        brand: "67",
    },
    {
        name: "Atos",
        active: true,
        brand: "67",
    },
    {
        name: "Azera",
        active: true,
        brand: "67",
    },
    {
        name: "Bayon",
        active: true,
        brand: "67",
    },
    {
        name: "Galoper",
        active: true,
        brand: "67",
    },
    {
        name: "Getz",
        active: true,
        brand: "67",
    },
    {
        name: "Grand Santa Fé",
        active: true,
        brand: "67",
    },
    {
        name: "i10",
        active: true,
        brand: "67",
    },
    {
        name: "i20",
        active: true,
        brand: "67",
    },
    {
        name: "i30",
        active: true,
        brand: "67",
    },
    {
        name: "I40",
        active: true,
        brand: "67",
    },
    {
        name: "Ioniq",
        active: true,
        brand: "67",
    },
    {
        name: "ix20",
        active: true,
        brand: "67",
    },
    {
        name: "ix35",
        active: true,
        brand: "67",
    },
    {
        name: "ix55",
        active: true,
        brand: "67",
    },
    {
        name: "Kona",
        active: true,
        brand: "67",
    },
    {
        name: "Matrix",
        active: true,
        brand: "67",
    },
    {
        name: "Pony",
        active: true,
        brand: "67",
    },
    {
        name: "Santa Fé",
        active: true,
        brand: "67",
    },
    {
        name: "Satellite",
        active: true,
        brand: "67",
    },
    {
        name: "Sonata",
        active: true,
        brand: "67",
    },
    {
        name: "Terracan",
        active: true,
        brand: "67",
    },
    {
        name: "Trajet",
        active: true,
        brand: "67",
    },
    {
        name: "Tucson",
        active: true,
        brand: "67",
    },
    {
        name: "Veloster",
        active: true,
        brand: "67",
    },
    {
        name: "FX",
        active: true,
        brand: "69",
    },
    {
        name: "G",
        active: true,
        brand: "69",
    },
    {
        name: "M",
        active: true,
        brand: "69",
    },
    {
        name: "Q30",
        active: true,
        brand: "69",
    },
    {
        name: "Q50",
        active: true,
        brand: "69",
    },
    {
        name: "Q70",
        active: true,
        brand: "69",
    },
    {
        name: "D-Max",
        active: true,
        brand: "71",
    },
    {
        name: "Trooper",
        active: true,
        brand: "71",
    },
    {
        name: "E-PACE",
        active: true,
        brand: "73",
    },
    {
        name: "E-TYPE",
        active: true,
        brand: "73",
    },
    {
        name: "F-PACE",
        active: true,
        brand: "73",
    },
    {
        name: "F-TYPE",
        active: true,
        brand: "73",
    },
    {
        name: "I-PACE",
        active: true,
        brand: "73",
    },
    {
        name: "MK2",
        active: true,
        brand: "73",
    },
    {
        name: "S-TYPE",
        active: true,
        brand: "73",
    },
    {
        name: "X-TYPE",
        active: true,
        brand: "73",
    },
    {
        name: "XE",
        active: true,
        brand: "73",
    },
    {
        name: "XF",
        active: true,
        brand: "73",
    },
    {
        name: "XJ",
        active: true,
        brand: "73",
    },
    {
        name: "XK",
        active: true,
        brand: "73",
    },
    {
        name: "Abaca",
        active: true,
        brand: "75",
    },
    {
        name: "Albizia",
        active: true,
        brand: "75",
    },
    {
        name: "Cherokee",
        active: true,
        brand: "77",
    },
    {
        name: "Commander",
        active: true,
        brand: "77",
    },
    {
        name: "Compass",
        active: true,
        brand: "77",
    },
    {
        name: "Grand Cherokee",
        active: true,
        brand: "77",
    },
    {
        name: "Patriot",
        active: true,
        brand: "77",
    },
    {
        name: "Renegade",
        active: true,
        brand: "77",
    },
    {
        name: "Wrangler",
        active: true,
        brand: "77",
    },
    {
        name: "Carens",
        active: true,
        brand: "79",
    },
    {
        name: "Carnival",
        active: true,
        brand: "79",
    },
    {
        name: "Ceed",
        active: true,
        brand: "79",
    },
    {
        name: "Cerato",
        active: true,
        brand: "79",
    },
    {
        name: "Niro",
        active: true,
        brand: "79",
    },
    {
        name: "Magentis",
        active: true,
        brand: "79",
    },
    {
        name: "5",
        active: true,
        brand: "81",
    },
    {
        name: "Opirus",
        active: true,
        brand: "79",
    },
    {
        name: "Optima",
        active: true,
        brand: "79",
    },
    {
        name: "Picanto",
        active: true,
        brand: "79",
    },
    {
        name: "Pride",
        active: true,
        brand: "79",
    },
    {
        name: "Rio",
        active: true,
        brand: "79",
    },
    {
        name: "Sephia",
        active: true,
        brand: "79",
    },
    {
        name: "Shuma",
        active: true,
        brand: "79",
    },
    {
        name: "Sorento",
        active: true,
        brand: "79",
    },
    {
        name: "Soul",
        active: true,
        brand: "79",
    },
    {
        name: "Sportage",
        active: true,
        brand: "79",
    },
    {
        name: "Stinger",
        active: true,
        brand: "79",
    },
    {
        name: "Stonic",
        active: true,
        brand: "79",
    },
    {
        name: "Venga",
        active: true,
        brand: "79",
    },
    {
        name: "Xceed",
        active: true,
        brand: "79",
    },
    {
        name: "110",
        active: true,
        brand: "83",
    },
    {
        name: "11",
        active: true,
        brand: "81",
    },
    {
        name: "Niva",
        active: true,
        brand: "83",
    },
    {
        name: "Diablo",
        active: true,
        brand: "85",
    },
    {
        name: "Beta",
        active: true,
        brand: "87",
    },
    {
        name: "Dedra",
        active: true,
        brand: "87",
    },
    {
        name: "Delta",
        active: true,
        brand: "87",
    },
    {
        name: "Epsilon",
        active: true,
        brand: "87",
    },
    {
        name: "Fulvia",
        active: true,
        brand: "87",
    },
    {
        name: "Kappa",
        active: true,
        brand: "87",
    },
    {
        name: "Lybra",
        active: true,
        brand: "87",
    },
    {
        name: "Musa",
        active: true,
        brand: "87",
    },
    {
        name: "Phedra",
        active: true,
        brand: "87",
    },
    {
        name: "Thema",
        active: true,
        brand: "87",
    },
    {
        name: "Thesis",
        active: true,
        brand: "87",
    },
    {
        name: "Y",
        active: true,
        brand: "87",
    },
    {
        name: "Y10",
        active: true,
        brand: "87",
    },
    {
        name: "Ypsilon",
        active: true,
        brand: "87",
    },
    {
        name: "Zeta",
        active: true,
        brand: "87",
    },
    {
        name: "Defender",
        active: true,
        brand: "89",
    },
    {
        name: "Discovery",
        active: true,
        brand: "89",
    },
    {
        name: "Freelander",
        active: true,
        brand: "89",
    },
    {
        name: "Range",
        active: true,
        brand: "89",
    },
    {
        name: "Range Rover Evoque",
        active: true,
        brand: "89",
    },
    {
        name: "Range Rover Velar",
        active: true,
        brand: "89",
    },
    {
        name: "Range Sport",
        active: true,
        brand: "89",
    },
    {
        name: "IS",
        active: true,
        brand: "91",
    },
    {
        name: "RX",
        active: true,
        brand: "91",
    },
    {
        name: "XTOO",
        active: true,
        brand: "93",
    },
    {
        name: "Caterham",
        active: true,
        brand: "95",
    },
    {
        name: "Elise",
        active: true,
        brand: "95",
    },
    {
        name: "Evora",
        active: true,
        brand: "95",
    },
    {
        name: "3200 GT",
        active: true,
        brand: "97",
    },
    {
        name: "Gran Turismo",
        active: true,
        brand: "97",
    },
    {
        name: "Levante",
        active: true,
        brand: "97",
    },
    {
        name: "Quattroporte",
        active: true,
        brand: "97",
    },
    {
        name: "Spyder",
        active: true,
        brand: "97",
    },
    {
        name: "121",
        active: true,
        brand: "27",
    },
    {
        name: "2",
        active: true,
        brand: "27",
    },
    {
        name: "3",
        active: true,
        brand: "27",
    },
    {
        name: "323",
        active: true,
        brand: "27",
    },
    {
        name: "5",
        active: true,
        brand: "27",
    },
    {
        name: "6",
        active: true,
        brand: "27",
    },
    {
        name: "626",
        active: true,
        brand: "27",
    },
    {
        name: "BT50",
        active: true,
        brand: "27",
    },
    {
        name: "Demio",
        active: true,
        brand: "27",
    },
    {
        name: "MPV",
        active: true,
        brand: "27",
    },
    {
        name: "MX-3",
        active: true,
        brand: "27",
    },
    {
        name: "MX-5",
        active: true,
        brand: "27",
    },
    {
        name: "Premacy",
        active: true,
        brand: "27",
    },
    {
        name: "RX-8",
        active: true,
        brand: "27",
    },
    {
        name: "Xedos",
        active: true,
        brand: "27",
    },
    {
        name: "190",
        active: true,
        brand: "99",
    },
    {
        name: "450",
        active: true,
        brand: "99",
    },
    {
        name: "Citan",
        active: true,
        brand: "99",
    },
    {
        name: "CL",
        active: true,
        brand: "99",
    },
    {
        name: "CLA",
        active: true,
        brand: "99",
    },
    {
        name: "Classe A",
        active: true,
        brand: "99",
    },
    {
        name: "Classe B",
        active: true,
        brand: "99",
    },
    {
        name: "Classe C",
        active: true,
        brand: "99",
    },
    {
        name: "Classe E",
        active: true,
        brand: "99",
    },
    {
        name: "Classe G",
        active: true,
        brand: "99",
    },
    {
        name: "Classe R",
        active: true,
        brand: "99",
    },
    {
        name: "Classe S",
        active: true,
        brand: "99",
    },
    {
        name: "Classe V",
        active: true,
        brand: "99",
    },
    {
        name: "Classe X",
        active: true,
        brand: "99",
    },
    {
        name: "CLK",
        active: true,
        brand: "99",
    },
    {
        name: "CLS",
        active: true,
        brand: "99",
    },
    {
        name: "Sprinter",
        active: true,
        brand: "99",
    },
    {
        name: "Vito",
        active: true,
        brand: "99",
    },
    {
        name: "EQV",
        active: true,
        brand: "99",
    },
    {
        name: "GLA",
        active: true,
        brand: "99",
    },
    {
        name: "GLB ",
        active: true,
        brand: "99",
    },
    {
        name: "GLC",
        active: true,
        brand: "99",
    },
    {
        name: "GLE",
        active: true,
        brand: "99",
    },
    {
        name: "GLK",
        active: true,
        brand: "99",
    },
    {
        name: "ML",
        active: true,
        brand: "99",
    },
    {
        name: "SL",
        active: true,
        brand: "99",
    },
    {
        name: "SLC",
        active: true,
        brand: "99",
    },
    {
        name: "SLK",
        active: true,
        brand: "99",
    },
    {
        name: "SLS",
        active: true,
        brand: "99",
    },
    {
        name: "Vaneo",
        active: true,
        brand: "99",
    },
    {
        name: "Viano",
        active: true,
        brand: "99",
    },
    {
        name: "W108",
        active: true,
        brand: "99",
    },
    {
        name: "W109",
        active: true,
        brand: "99",
    },
    {
        name: "W113",
        active: true,
        brand: "99",
    },
    {
        name: "W123",
        active: true,
        brand: "99",
    },
    {
        name: "By Buick Riviera",
        active: true,
        brand: "101",
    },
    {
        name: "Cadillac Brougham",
        active: true,
        brand: "101",
    },
    {
        name: "El Camino",
        active: true,
        brand: "101",
    },
    {
        name: "Mark",
        active: true,
        brand: "101",
    },
    {
        name: "MG F",
        active: true,
        brand: "101",
    },
    {
        name: "MG ZR",
        active: true,
        brand: "101",
    },
    {
        name: "MG ZS",
        active: true,
        brand: "101",
    },
    {
        name: "MG ZT",
        active: true,
        brand: "101",
    },
    {
        name: "MC1",
        active: true,
        brand: "103",
    },
    {
        name: "MC2",
        active: true,
        brand: "103",
    },
    {
        name: "Clubman",
        active: true,
        brand: "105",
    },
    {
        name: "Cooper",
        active: true,
        brand: "105",
    },
    {
        name: "Countryman",
        active: true,
        brand: "105",
    },
    {
        name: "Paceman",
        active: true,
        brand: "105",
    },
    {
        name: "3000 GT",
        active: true,
        brand: "107",
    },
    {
        name: "ASX",
        active: true,
        brand: "107",
    },
    {
        name: "Carisma",
        active: true,
        brand: "107",
    },
    {
        name: "Colt",
        active: true,
        brand: "107",
    },
    {
        name: "Eclipse",
        active: true,
        brand: "107",
    },
    {
        name: "Galant",
        active: true,
        brand: "107",
    },
    {
        name: "Grandis",
        active: true,
        brand: "107",
    },
    {
        name: "L200",
        active: true,
        brand: "107",
    },
    {
        name: "75",
        active: true,
        brand: "109",
    },
    {
        name: "100",
        active: true,
        brand: "109",
    },
    {
        name: "25",
        active: true,
        brand: "109",
    },
    {
        name: "Lancer",
        active: true,
        brand: "107",
    },
    {
        name: "Montero",
        active: true,
        brand: "107",
    },
    {
        name: "Outlander",
        active: true,
        brand: "107",
    },
    {
        name: "Pajero",
        active: true,
        brand: "107",
    },
    {
        name: "Space Runner",
        active: true,
        brand: "107",
    },
    {
        name: "Space Star",
        active: true,
        brand: "107",
    },
    {
        name: "Space Wagon",
        active: true,
        brand: "107",
    },
    {
        name: "Pick-up",
        active: true,
        brand: "111",
    },
    {
        name: "100NX",
        active: true,
        brand: "111",
    },
    {
        name: "200SX",
        active: true,
        brand: "111",
    },
    {
        name: "300ZX",
        active: true,
        brand: "111",
    },
    {
        name: "350Z",
        active: true,
        brand: "111",
    },
    {
        name: "370Z",
        active: true,
        brand: "111",
    },
    {
        name: "Almera",
        active: true,
        brand: "111",
    },
    {
        name: "Cube",
        active: true,
        brand: "111",
    },
    {
        name: "GT-R",
        active: true,
        brand: "111",
    },
    {
        name: "Juke",
        active: true,
        brand: "111",
    },
    {
        name: "Leaf",
        active: true,
        brand: "111",
    },
    {
        name: "Maxima",
        active: true,
        brand: "111",
    },
    {
        name: "Micra",
        active: true,
        brand: "111",
    },
    {
        name: "Murano",
        active: true,
        brand: "111",
    },
    {
        name: "Navara",
        active: true,
        brand: "111",
    },
    {
        name: "Note",
        active: true,
        brand: "111",
    },
    {
        name: "NP 300",
        active: true,
        brand: "111",
    },
    {
        name: "NV200",
        active: true,
        brand: "111",
    },
    {
        name: "NV400",
        active: true,
        brand: "111",
    },
    {
        name: "Trans Sport",
        active: true,
        brand: "113",
    },
    {
        name: "Pathfinder",
        active: true,
        brand: "111",
    },
    {
        name: "Patrol",
        active: true,
        brand: "111",
    },
    {
        name: "Pixo",
        active: true,
        brand: "111",
    },
    {
        name: "Primastar",
        active: true,
        brand: "111",
    },
    {
        name: "Primera",
        active: true,
        brand: "111",
    },
    {
        name: "Pulsar",
        active: true,
        brand: "111",
    },
    {
        name: "Qashqai",
        active: true,
        brand: "111",
    },
    {
        name: "Serena",
        active: true,
        brand: "111",
    },
    {
        name: "Sunny",
        active: true,
        brand: "111",
    },
    {
        name: "Terrano",
        active: true,
        brand: "111",
    },
    {
        name: "Tino",
        active: true,
        brand: "111",
    },
    {
        name: "X-trail",
        active: true,
        brand: "111",
    },
    {
        name: "Adam",
        active: true,
        brand: "115",
    },
    {
        name: "Agila",
        active: true,
        brand: "115",
    },
    {
        name: "Antara",
        active: true,
        brand: "115",
    },
    {
        name: "Astra",
        active: true,
        brand: "115",
    },
    {
        name: "Calibra",
        active: true,
        brand: "115",
    },
    {
        name: "Cascada",
        active: true,
        brand: "115",
    },
    {
        name: "Combo",
        active: true,
        brand: "115",
    },
    {
        name: "Corsa",
        active: true,
        brand: "115",
    },
    {
        name: "Crossland",
        active: true,
        brand: "115",
    },
    {
        name: "Frontera",
        active: true,
        brand: "115",
    },
    {
        name: "Grandland X",
        active: true,
        brand: "115",
    },
    {
        name: "Insignia",
        active: true,
        brand: "115",
    },
    {
        name: "Kadett",
        active: true,
        brand: "115",
    },
    {
        name: "Karl",
        active: true,
        brand: "115",
    },
    {
        name: "Meriva",
        active: true,
        brand: "115",
    },
    {
        name: "Mokka",
        active: true,
        brand: "115",
    },
    {
        name: "Monterey",
        active: true,
        brand: "115",
    },
    {
        name: "Movano",
        active: true,
        brand: "115",
    },
    {
        name: "Omega",
        active: true,
        brand: "115",
    },
    {
        name: "Signum",
        active: true,
        brand: "115",
    },
    {
        name: "Sintra",
        active: true,
        brand: "115",
    },
    {
        name: "Speedster",
        active: true,
        brand: "115",
    },
    {
        name: "Tigra",
        active: true,
        brand: "115",
    },
    {
        name: "Vectra",
        active: true,
        brand: "115",
    },
    {
        name: "Vivaro",
        active: true,
        brand: "115",
    },
    {
        name: "Zafira",
        active: true,
        brand: "115",
    },
    {
        name: "24 BT",
        active: true,
        brand: "37",
    },
    {
        name: "24 CT",
        active: true,
        brand: "37",
    },
    {
        name: "Kallista",
        active: true,
        brand: "117",
    },
    {
        name: "1007",
        active: true,
        brand: "119",
    },
    {
        name: "104",
        active: true,
        brand: "119",
    },
    {
        name: "106",
        active: true,
        brand: "119",
    },
    {
        name: "107",
        active: true,
        brand: "119",
    },
    {
        name: "108",
        active: true,
        brand: "119",
    },
    {
        name: "2008",
        active: true,
        brand: "119",
    },
    {
        name: "204",
        active: true,
        brand: "119",
    },
    {
        name: "304",
        active: true,
        brand: "119",
    },
    {
        name: "205",
        active: true,
        brand: "119",
    },
    {
        name: "206",
        active: true,
        brand: "119",
    },
    {
        name: "207",
        active: true,
        brand: "119",
    },
    {
        name: "208",
        active: true,
        brand: "119",
    },
    {
        name: "3008",
        active: true,
        brand: "119",
    },
    {
        name: "301",
        active: true,
        brand: "119",
    },
    {
        name: "305",
        active: true,
        brand: "119",
    },
    {
        name: "306",
        active: true,
        brand: "119",
    },
    {
        name: "307",
        active: true,
        brand: "119",
    },
    {
        name: "308",
        active: true,
        brand: "119",
    },
    {
        name: "309",
        active: true,
        brand: "119",
    },
    {
        name: "4007",
        active: true,
        brand: "119",
    },
    {
        name: "4008",
        active: true,
        brand: "119",
    },
    {
        name: "403",
        active: true,
        brand: "119",
    },
    {
        name: "404",
        active: true,
        brand: "119",
    },
    {
        name: "405",
        active: true,
        brand: "119",
    },
    {
        name: "406",
        active: true,
        brand: "119",
    },
    {
        name: "407",
        active: true,
        brand: "119",
    },
    {
        name: "5008",
        active: true,
        brand: "119",
    },
    {
        name: "504",
        active: true,
        brand: "119",
    },
    {
        name: "505",
        active: true,
        brand: "119",
    },
    {
        name: "508",
        active: true,
        brand: "119",
    },
    {
        name: "605",
        active: true,
        brand: "119",
    },
    {
        name: "607",
        active: true,
        brand: "119",
    },
    {
        name: "806",
        active: true,
        brand: "119",
    },
    {
        name: "807",
        active: true,
        brand: "119",
    },
    {
        name: "ASA204C",
        active: true,
        brand: "119",
    },
    {
        name: "ASA304C",
        active: true,
        brand: "119",
    },
    {
        name: "ASA404B",
        active: true,
        brand: "119",
    },
    {
        name: "ASA404C",
        active: true,
        brand: "119",
    },
    {
        name: "Bipper",
        active: true,
        brand: "119",
    },
    {
        name: "Boxer",
        active: true,
        brand: "119",
    },
    {
        name: "Expert",
        active: true,
        brand: "119",
    },
    {
        name: "Ion",
        active: true,
        brand: "119",
    },
    {
        name: "J5",
        active: true,
        brand: "119",
    },
    {
        name: "Partner",
        active: true,
        brand: "119",
    },
    {
        name: "RCZ",
        active: true,
        brand: "119",
    },
    {
        name: "Rifter",
        active: true,
        brand: "119",
    },
    {
        name: "Traveller",
        active: true,
        brand: "119",
    },
    {
        name: "911",
        active: true,
        brand: "121",
    },
    {
        name: "914",
        active: true,
        brand: "121",
    },
    {
        name: "924",
        active: true,
        brand: "121",
    },
    {
        name: "928",
        active: true,
        brand: "121",
    },
    {
        name: "944",
        active: true,
        brand: "121",
    },
    {
        name: "968",
        active: true,
        brand: "121",
    },
    {
        name: "Boxter",
        active: true,
        brand: "121",
    },
    {
        name: "Cayenne",
        active: true,
        brand: "121",
    },
    {
        name: "Cayman",
        active: true,
        brand: "121",
    },
    {
        name: "Macan",
        active: true,
        brand: "121",
    },
    {
        name: "Panamera",
        active: true,
        brand: "121",
    },
    {
        name: "12",
        active: true,
        brand: "81",
    },
    {
        name: "15",
        active: true,
        brand: "81",
    },
    {
        name: "18",
        active: true,
        brand: "81",
    },
    {
        name: "19",
        active: true,
        brand: "81",
    },
    {
        name: "20",
        active: true,
        brand: "81",
    },
    {
        name: "21",
        active: true,
        brand: "81",
    },
    {
        name: "25",
        active: true,
        brand: "81",
    },
    {
        name: "30",
        active: true,
        brand: "81",
    },
    {
        name: "4",
        active: true,
        brand: "81",
    },
    {
        name: "4 CV",
        active: true,
        brand: "81",
    },
    {
        name: "9",
        active: true,
        brand: "81",
    },
    {
        name: "Arkana",
        active: true,
        brand: "81",
    },
    {
        name: "Avantimes",
        active: true,
        brand: "81",
    },
    {
        name: "Captur",
        active: true,
        brand: "81",
    },
    {
        name: "Clio",
        active: true,
        brand: "81",
    },
    {
        name: "Dauphine",
        active: true,
        brand: "81",
    },
    {
        name: "Espace",
        active: true,
        brand: "81",
    },
    {
        name: "Express",
        active: true,
        brand: "81",
    },
    {
        name: "Fluence",
        active: true,
        brand: "81",
    },
    {
        name: "Fuego",
        active: true,
        brand: "81",
    },
    {
        name: "Scenic",
        active: true,
        brand: "81",
    },
    {
        name: "Kadjar",
        active: true,
        brand: "81",
    },
    {
        name: "Kangoo",
        active: true,
        brand: "81",
    },
    {
        name: "Koleos",
        active: true,
        brand: "81",
    },
    {
        name: "Laguna",
        active: true,
        brand: "81",
    },
    {
        name: "Latitude",
        active: true,
        brand: "81",
    },
    {
        name: "Master",
        active: true,
        brand: "81",
    },
    {
        name: "Mégane",
        active: true,
        brand: "81",
    },
    {
        name: "Modus",
        active: true,
        brand: "81",
    },
    {
        name: "Prairie",
        active: true,
        brand: "81",
    },
    {
        name: "Safrane",
        active: true,
        brand: "81",
    },
    {
        name: "Super 5",
        active: true,
        brand: "81",
    },
    {
        name: "Talisman",
        active: true,
        brand: "81",
    },
    {
        name: "Trafic",
        active: true,
        brand: "81",
    },
    {
        name: "Twingo",
        active: true,
        brand: "81",
    },
    {
        name: "Velsatis",
        active: true,
        brand: "81",
    },
    {
        name: "Wind",
        active: true,
        brand: "81",
    },
    {
        name: "Zoé",
        active: true,
        brand: "81",
    },
    {
        name: "400",
        active: true,
        brand: "109",
    },
    {
        name: "45",
        active: true,
        brand: "109",
    },
    {
        name: "800",
        active: true,
        brand: "109",
    },
    {
        name: "MG A",
        active: true,
        brand: "109",
    },
    {
        name: "9.3",
        active: true,
        brand: "123",
    },
    {
        name: "9.5",
        active: true,
        brand: "123",
    },
    {
        name: "900",
        active: true,
        brand: "123",
    },
    {
        name: "9000",
        active: true,
        brand: "123",
    },
    {
        name: "Alhambra",
        active: true,
        brand: "125",
    },
    {
        name: "Altea",
        active: true,
        brand: "125",
    },
    {
        name: "Arosa",
        active: true,
        brand: "125",
    },
    {
        name: "Ateca",
        active: true,
        brand: "125",
    },
    {
        name: "Cordoba",
        active: true,
        brand: "125",
    },
    {
        name: "Exeo",
        active: true,
        brand: "125",
    },
    {
        name: "Ibiza",
        active: true,
        brand: "125",
    },
    {
        name: "Leon",
        active: true,
        brand: "125",
    },
    {
        name: "Malaga",
        active: true,
        brand: "125",
    },
    {
        name: "Mii",
        active: true,
        brand: "125",
    },
    {
        name: "Tarraco",
        active: true,
        brand: "125",
    },
    {
        name: "Toledo",
        active: true,
        brand: "125",
    },
    {
        name: "F16",
        active: true,
        brand: "127",
    },
    {
        name: "1300 & 1500",
        active: true,
        brand: "129",
    },
    {
        name: "Citigo",
        active: true,
        brand: "131",
    },
    {
        name: "Fabia",
        active: true,
        brand: "131",
    },
    {
        name: "Felicia",
        active: true,
        brand: "131",
    },
    {
        name: "Kamiq",
        active: true,
        brand: "131",
    },
    {
        name: "Karoq",
        active: true,
        brand: "131",
    },
    {
        name: "Kodiaq",
        active: true,
        brand: "131",
    },
    {
        name: "Octavia",
        active: true,
        brand: "131",
    },
    {
        name: "Rapid",
        active: true,
        brand: "131",
    },
    {
        name: "Roomster",
        active: true,
        brand: "131",
    },
    {
        name: "Scala",
        active: true,
        brand: "131",
    },
    {
        name: "Superb",
        active: true,
        brand: "131",
    },
    {
        name: "Yeti",
        active: true,
        brand: "131",
    },
    {
        name: "For Four",
        active: true,
        brand: "133",
    },
    {
        name: "For Two",
        active: true,
        brand: "133",
    },
    {
        name: "Actyon",
        active: true,
        brand: "135",
    },
    {
        name: "Kyron",
        active: true,
        brand: "135",
    },
    {
        name: "Rexton",
        active: true,
        brand: "135",
    },
    {
        name: "Rodius",
        active: true,
        brand: "135",
    },
    {
        name: "Tivoli",
        active: true,
        brand: "135",
    },
    {
        name: "B9",
        active: true,
        brand: "137",
    },
    {
        name: "Forester",
        active: true,
        brand: "137",
    },
    {
        name: "Impreza",
        active: true,
        brand: "137",
    },
    {
        name: "Justy",
        active: true,
        brand: "137",
    },
    {
        name: "Legacy",
        active: true,
        brand: "137",
    },
    {
        name: "SVX",
        active: true,
        brand: "137",
    },
    {
        name: "XV",
        active: true,
        brand: "137",
    },
    {
        name: "Alto",
        active: true,
        brand: "139",
    },
    {
        name: "Baleno",
        active: true,
        brand: "139",
    },
    {
        name: "Wagon-R",
        active: true,
        brand: "139",
    },
    {
        name: "Murena",
        active: true,
        brand: "141",
    },
    {
        name: "Samba",
        active: true,
        brand: "141",
    },
    {
        name: "Simca 1307",
        active: true,
        brand: "141",
    },
    {
        name: "Simca CG",
        active: true,
        brand: "141",
    },
    {
        name: "Simca Horizon",
        active: true,
        brand: "141",
    },
    {
        name: "Simca Solara",
        active: true,
        brand: "141",
    },
    {
        name: "Model 3",
        active: true,
        brand: "143",
    },
    {
        name: "Model S",
        active: true,
        brand: "143",
    },
    {
        name: "Auris",
        active: true,
        brand: "145",
    },
    {
        name: "Avensis",
        active: true,
        brand: "145",
    },
    {
        name: "Aygo",
        active: true,
        brand: "145",
    },
    {
        name: "C-HR",
        active: true,
        brand: "145",
    },
    {
        name: "Camry",
        active: true,
        brand: "145",
    },
    {
        name: "Carina",
        active: true,
        brand: "145",
    },
    {
        name: "Celica",
        active: true,
        brand: "145",
    },
    {
        name: "Corolla",
        active: true,
        brand: "145",
    },
    {
        name: "6",
        active: true,
        brand: "81",
    },
    {
        name: "Hilux",
        active: true,
        brand: "145",
    },
    {
        name: "Coupé",
        active: true,
        brand: "55",
    },
    {
        name: "Land Cruiser",
        active: true,
        brand: "145",
    },
    {
        name: "MR2",
        active: true,
        brand: "145",
    },
    {
        name: "Paseo",
        active: true,
        brand: "145",
    },
    {
        name: "Picnic",
        active: true,
        brand: "145",
    },
    {
        name: "Previa",
        active: true,
        brand: "145",
    },
    {
        name: "Prius",
        active: true,
        brand: "145",
    },
    {
        name: "RAV4",
        active: true,
        brand: "145",
    },
    {
        name: "Runner",
        active: true,
        brand: "145",
    },
    {
        name: "Starlet",
        active: true,
        brand: "145",
    },
    {
        name: "Supra",
        active: true,
        brand: "145",
    },
    {
        name: "Urban-Cruiser",
        active: true,
        brand: "145",
    },
    {
        name: "Verso",
        active: true,
        brand: "145",
    },
    {
        name: "Yaris",
        active: true,
        brand: "145",
    },
    {
        name: "Spitfire",
        active: true,
        brand: "147",
    },
    {
        name: "TR3",
        active: true,
        brand: "147",
    },
    {
        name: "TR4",
        active: true,
        brand: "147",
    },
    {
        name: "TR6",
        active: true,
        brand: "147",
    },
    {
        name: "Chimaera",
        active: true,
        brand: "149",
    },
    {
        name: "Amarok",
        active: true,
        brand: "151",
    },
    {
        name: "Arteon",
        active: true,
        brand: "151",
    },
    {
        name: "Bora",
        active: true,
        brand: "151",
    },
    {
        name: "Caddy",
        active: true,
        brand: "151",
    },
    {
        name: "California",
        active: true,
        brand: "151",
    },
    {
        name: "Caravelle",
        active: true,
        brand: "151",
    },
    {
        name: "Coccinelle",
        active: true,
        brand: "151",
    },
    {
        name: "Corrado",
        active: true,
        brand: "151",
    },
    {
        name: "Crafter",
        active: true,
        brand: "151",
    },
    {
        name: "UP!",
        active: true,
        brand: "151",
    },
    {
        name: "Eos",
        active: true,
        brand: "151",
    },
    {
        name: "Fox",
        active: true,
        brand: "151",
    },
    {
        name: "Golf",
        active: true,
        brand: "151",
    },
    {
        name: "ID.3",
        active: true,
        brand: "151",
    },
    {
        name: "ID.4",
        active: true,
        brand: "151",
    },
    {
        name: "Jetta",
        active: true,
        brand: "151",
    },
    {
        name: "Lupo",
        active: true,
        brand: "151",
    },
    {
        name: "Multivan",
        active: true,
        brand: "151",
    },
    {
        name: "New Beetle",
        active: true,
        brand: "151",
    },
    {
        name: "Passat",
        active: true,
        brand: "151",
    },
    {
        name: "Phaeton",
        active: true,
        brand: "151",
    },
    {
        name: "Polo",
        active: true,
        brand: "151",
    },
    {
        name: "Scirocco",
        active: true,
        brand: "151",
    },
    {
        name: "Sharan",
        active: true,
        brand: "151",
    },
    {
        name: "T-Cross",
        active: true,
        brand: "151",
    },
    {
        name: "T-Roc",
        active: true,
        brand: "151",
    },
    {
        name: "Tiguan",
        active: true,
        brand: "151",
    },
    {
        name: "Touareg",
        active: true,
        brand: "151",
    },
    {
        name: "Touran",
        active: true,
        brand: "151",
    },
    {
        name: "Transporter",
        active: true,
        brand: "151",
    },
    {
        name: "Vento",
        active: true,
        brand: "151",
    },
    {
        name: "240",
        active: true,
        brand: "153",
    },
    {
        name: "440",
        active: true,
        brand: "153",
    },
    {
        name: "460",
        active: true,
        brand: "153",
    },
    {
        name: "480",
        active: true,
        brand: "153",
    },
    {
        name: "740",
        active: true,
        brand: "153",
    },
    {
        name: "760",
        active: true,
        brand: "153",
    },
    {
        name: "850",
        active: true,
        brand: "153",
    },
    {
        name: "Amazone",
        active: true,
        brand: "153",
    },
    {
        name: "C30",
        active: true,
        brand: "153",
    },
    {
        name: "C70",
        active: true,
        brand: "153",
    },
    {
        name: "S40",
        active: true,
        brand: "153",
    },
    {
        name: "S60",
        active: true,
        brand: "153",
    },
    {
        name: "S70",
        active: true,
        brand: "153",
    },
    {
        name: "S80",
        active: true,
        brand: "153",
    },
    {
        name: "S90",
        active: true,
        brand: "153",
    },
    {
        name: "V40",
        active: true,
        brand: "153",
    },
    {
        name: "V50",
        active: true,
        brand: "153",
    },
    {
        name: "V60",
        active: true,
        brand: "153",
    },
    {
        name: "V70",
        active: true,
        brand: "153",
    },
    {
        name: "V90",
        active: true,
        brand: "153",
    },
    {
        name: "XC40",
        active: true,
        brand: "153",
    },
    {
        name: "XC60",
        active: true,
        brand: "153",
    },
    {
        name: "XC70",
        active: true,
        brand: "153",
    },
    {
        name: "XC90",
        active: true,
        brand: "153",
    },
    {
        name: "Coupé",
        active: true,
        brand: "67",
    },
    {
        name: "Coupé",
        active: true,
        brand: "97",
    },
    {
        name: "Coupé",
        active: true,
        brand: "105",
    },
    {
        name: "Zoé",
        active: true,
        brand: "81",
    },
    {
        name: "Coupé",
        active: true,
        brand: "31",
    },
    {
        name: "Quattro",
        active: true,
        brand: "31",
    },
    {
        name: "Ghibli",
        active: true,
        brand: "97",
    },
    {
        name: "Cooper",
        active: true,
        brand: "105",
    },
    {
        name: "Cooper",
        active: true,
        brand: "105",
    },
    {
        name: "U5",
        active: true,
        brand: "0",
    },
    {
        name: "CX7",
        active: true,
        brand: "27",
    },
    {
        name: "CX30",
        active: true,
        brand: "27",
    },
    {
        name: "GS",
        active: true,
        brand: "91",
    },
    {
        name: "Countryman",
        active: true,
        brand: "105",
    },
    {
        name: "Coupé",
        active: true,
        brand: "105",
    },
    {
        name: "Paceman",
        active: true,
        brand: "105",
    },
    {
        name: "200",
        active: true,
        brand: "109",
    },
    {
        name: "Ariane",
        active: true,
        brand: "129",
    },
    {
        name: "Roadster",
        active: true,
        brand: "133",
    },
    {
        name: "Roadster",
        active: true,
        brand: "105",
    },
    {
        name: "MG B",
        active: true,
        brand: "109",
    },
    {
        name: "17",
        active: true,
        brand: "81",
    },
    {
        name: "DS9",
        active: true,
        brand: "35",
    },
    {
        name: "Formentor",
        active: true,
        brand: "155",
    },
    {
        name: "Leon",
        active: true,
        brand: "155",
    },
    {
        name: "Enyaq",
        active: true,
        brand: "131",
    },
    {
        name: "Express",
        active: true,
        brand: "141",
    },
    {
        name: "PV444",
        active: true,
        brand: "153",
    },
    {
        name: "Dyna Z",
        active: true,
        brand: "37",
    },
    {
        name: "Model Y",
        active: true,
        brand: "143",
    },
    {
        name: "JS60",
        active: true,
        brand: "93",
    },
    {
        name: "Juvaquatre",
        active: true,
        brand: "81",
    },
    {
        name: "Plus 8",
        active: true,
        brand: "157",
    },
    {
        name: "GT",
        active: true,
        brand: "115",
    },
    {
        name: "4",
        active: true,
        brand: "101",
    },
    {
        name: "408",
        active: true,
        brand: "119",
    },
    {
        name: "MG 4",
        active: true,
        brand: "101",
    },
    {
        name: "112",
        active: true,
        brand: "83",
    },
    {
        name: "402",
        active: true,
        brand: "119",
    },
    {
        name: "Austral",
        active: true,
        brand: "81",
    },
    {
        name: "Ariya",
        active: true,
        brand: "111",
    },
    {
        name: "Townstar",
        active: true,
        brand: "111",
    },
    {
        name: "Riviera",
        active: true,
        brand: "159",
    },
    {
        name: "El camino",
        active: true,
        brand: "29",
    },
    {
        name: "Brougham",
        active: true,
        brand: "25",
    },
    {
        name: "SF90",
        active: true,
        brand: "53",
    },
    {
        name: "ID.Buzz",
        active: true,
        brand: "151",
    },
    {
        name: "Taigo",
        active: true,
        brand: "151",
    },
    {
        name: "Coupé",
        active: true,
        brand: "161",
    },
    {
        name: "356",
        active: true,
        brand: "121",
    },
    {
        name: "600",
        active: true,
        brand: "109",
    },
    {
        name: "RAM",
        active: true,
        brand: "49",
    },
    {
        name: "Caravelle",
        active: true,
        brand: "81",
    },
    {
        name: "Floride",
        active: true,
        brand: "81",
    },
    {
        name: "Model X",
        active: true,
        brand: "143",
    },
    {
        name: "C40",
        active: true,
        brand: "153",
    },
    {
        name: "Seres 3",
        active: true,
        brand: "163",
    },
    {
        name: "8",
        active: true,
        brand: "129",
    },
    {
        name: "Vedette",
        active: true,
        brand: "59",
    },
    {
        name: "Plus 4",
        active: true,
        brand: "157",
    },
    {
        name: "8",
        active: true,
        brand: "81",
    },
    {
        name: "4 sur 4",
        active: true,
        brand: "157",
    },
    {
        name: "SX4",
        active: true,
        brand: "139",
    },
    {
        name: "Swift",
        active: true,
        brand: "139",
    },
    {
        name: "A721",
        active: true,
        brand: "2",
    },
    {
        name: "17",
        active: true,
        brand: "40",
    },
    {
        name: "M3",
        active: true,
        brand: "23",
    },
    {
        name: "M5",
        active: true,
        brand: "23",
    },
    {
        name: "M6",
        active: true,
        brand: "23",
    },
    {
        name: "Trax",
        active: true,
        brand: "29",
    },
    {
        name: "Born",
        active: true,
        brand: "155",
    },
    {
        name: "Matiz",
        active: true,
        brand: "43",
    },
    {
        name: "Nubira",
        active: true,
        brand: "43",
    },
    {
        name: "Viper",
        active: true,
        brand: "49",
    },
    {
        name: "850",
        active: true,
        brand: "55",
    },
    {
        name: "ZR-V",
        active: true,
        brand: "63",
    },
    {
        name: "Avenger",
        active: true,
        brand: "77",
    },
    {
        name: "EV6",
        active: true,
        brand: "79",
    },
    {
        name: "ProCeed",
        active: true,
        brand: "79",
    },
    {
        name: "111",
        active: true,
        brand: "83",
    },
    {
        name: "Voyager",
        active: true,
        brand: "87",
    },
    {
        name: "T03",
        active: true,
        brand: "165",
    },
    {
        name: "Classe T",
        active: true,
        brand: "99",
    },
    {
        name: "Clubvan",
        active: true,
        brand: "105",
    },
    {
        name: "MG F",
        active: true,
        brand: "109",
    },
    {
        name: "Korando",
        active: true,
        brand: "135",
    },
    {
        name: "Musso",
        active: true,
        brand: "135",
    },
    {
        name: "Celerio",
        active: true,
        brand: "139",
    },
    {
        name: "Grand Vitara",
        active: true,
        brand: "139",
    },
    {
        name: "Ignis",
        active: true,
        brand: "139",
    },
    {
        name: "Jimny",
        active: true,
        brand: "139",
    },
    {
        name: "Liana",
        active: true,
        brand: "139",
    },
    {
        name: "Samura",
        active: true,
        brand: "139",
    },
    {
        name: "Splash",
        active: true,
        brand: "139",
    },
    {
        name: "Vitara",
        active: true,
        brand: "139",
    },
    {
        name: "Wagon",
        active: true,
        brand: "139",
    },
    {
        name: "Swift",
        active: true,
        brand: "139",
    },
    {
        name: "GT86",
        active: true,
        brand: "145",
    },
    {
        name: "IQ",
        active: true,
        brand: "145",
    },
    {
        name: "ID.5",
        active: true,
        brand: "151",
    },
    {
        name: "900",
        active: true,
        brand: "153",
    },
    {
        name: "S2",
        active: true,
        brand: "21",
    },
    {
        name: "S3",
        active: true,
        brand: "21",
    },
    {
        name: "S2",
        active: true,
        brand: "31",
    },
    {
        name: "SQ2",
        active: true,
        brand: "31",
    },
    {
        name: "SQ5",
        active: true,
        brand: "31",
    },
    {
        name: "A751",
        active: true,
        brand: "2",
    },
    {
        name: "CITY",
        active: true,
        brand: "2",
    },
    {
        name: "ROADLINE",
        active: true,
        brand: "2",
    },
    {
        name: "SCOUTY",
        active: true,
        brand: "2",
    },
    {
        name: "145",
        active: true,
        brand: "61",
    },
    {
        name: "A741",
        active: true,
        brand: "2",
    },
    {
        name: "Tonale",
        active: true,
        brand: "7",
    },
    {
        name: "SYMBIOZ FULL HYBRID145",
        active: true,
        brand: "81",
    },
    {
        name: "ARONA",
        active: true,
        brand: "167",
    },
    {
        name: "DAILY 3",
        active: true,
        brand: "169",
    },
    {
        name: "i MiEV",
        active: true,
        brand: "107",
    },
    {
        name: "GRAND SCENIC 2",
        active: true,
        brand: "81",
    },
    {
        name: "ARONA",
        active: true,
        brand: "125",
    },
    {
        name: "ARONA phase 2",
        active: true,
        brand: "125",
    },
    {
        name: "ACTROS",
        active: true,
        brand: "99",
    },
    {
        name: "ACTROS MEGASPACE I II III",
        active: true,
        brand: "99",
    },
    {
        name: "ACTROS MEGASPACE IV",
        active: true,
        brand: "99",
    },
    {
        name: "95",
        active: true,
        brand: "171",
    },
    {
        name: "95CF",
        active: true,
        brand: "171",
    },
    {
        name: "95XF",
        active: true,
        brand: "171",
    },
    {
        name: "105XF BOITE MECANIQUE",
        active: true,
        brand: "171",
    },
    {
        name: "106 XF BOITE AUTOMATIQUE",
        active: true,
        brand: "171",
    },
    {
        name: "TGA XXL",
        active: true,
        brand: "174",
    },
    {
        name: "TGS",
        active: true,
        brand: "174",
    },
    {
        name: "TGX",
        active: true,
        brand: "174",
    },
    {
        name: "105 XF BOITE AUTOMATIQUE",
        active: true,
        brand: "171",
    },
    {
        name: "ATEGO",
        active: true,
        brand: "99",
    },
    {
        name: "AXOR",
        active: true,
        brand: "99",
    },
    {
        name: "AE",
        active: true,
        brand: "81",
    },
    {
        name: "AE FIXE",
        active: true,
        brand: "81",
    },
    {
        name: "AE PIVOTANT",
        active: true,
        brand: "81",
    },
    {
        name: "AE PRIVILEGE",
        active: true,
        brand: "81",
    },
    {
        name: "AE PRIVILEGE siege gauche pivotant siege droit fixe",
        active: true,
        brand: "81",
    },
    {
        name: "AE PRIVILEGE siege gauche pivotant siege droit pivotant",
        active: true,
        brand: "81",
    },
    {
        name: "AE PRESTIGE",
        active: true,
        brand: "81",
    },
    {
        name: "SERIE T boite automatique",
        active: true,
        brand: "81",
    },
    {
        name: "PREMIUM",
        active: true,
        brand: "81",
    },
    {
        name: "PREMIUM (LSA)",
        active: true,
        brand: "81",
    },
    {
        name: "400P",
        active: true,
        brand: "176",
    },
    {
        name: "400 R BOITE MECANIQUE",
        active: true,
        brand: "176",
    },
    {
        name: "400 R BOITE AUTOMATIQUE",
        active: true,
        brand: "176",
    },
    {
        name: "R BOITE MECANIQUE",
        active: true,
        brand: "176",
    },
    {
        name: "R BOITE AUTOMATIQUE",
        active: true,
        brand: "176",
    },
    {
        name: "FH BOITE AUTOMATIQUE",
        active: true,
        brand: "153",
    },
    {
        name: "FH BOITE MECANIQUE",
        active: true,
        brand: "153",
    },
    {
        name: "FH BOITE AUTOMATIQUE SANS VIDE POCHE",
        active: true,
        brand: "153",
    },
    {
        name: "FH BOITE AUTOMATIQUE",
        active: true,
        brand: "153",
    },
    {
        name: "EUROSTAR",
        active: true,
        brand: "169",
    },
    {
        name: "STARLIS BOITE MECANIQUE",
        active: true,
        brand: "169",
    },
    {
        name: "STARLIS BOITE AUTOMATIQUE",
        active: true,
        brand: "169",
    },
    {
        name: "STARLIS ALLBLACK BOITE MECANIQUE",
        active: true,
        brand: "169",
    },
    {
        name: "STARLIS ALLBLACK BOITE AUTOMATIQUE",
        active: true,
        brand: "169",
    },
    {
        name: "STARLIS 420 EURO 5",
        active: true,
        brand: "169",
    },
    {
        name: "DAILY 2",
        active: true,
        brand: "169",
    },
    {
        name: "DAILY 2 SERIE2",
        active: true,
        brand: "169",
    },
    {
        name: "AR6",
        active: true,
        brand: "7",
    },
    {
        name: "GT6",
        active: true,
        brand: "147",
    },
    {
        name: "TOPOLINO",
        active: true,
        brand: "55",
    },
    {
        name: "O1",
        active: true,
        brand: "180",
    },
    {
        name: "I4",
        active: true,
        brand: "23",
    },
    {
        name: "8S",
        active: true,
        brand: "81",
    },
    {
        name: "TAYCAN",
        active: true,
        brand: "121",
    },
    {
        name: "TAYCAN SPORT TURISMO",
        active: true,
        brand: "121",
    },
    {
        name: "XKEÂ  cabriolet",
        active: true,
        brand: "73",
    },
    {
        name: "A290",
        active: true,
        brand: "4",
    },
    {
        name: "iX2",
        active: true,
        brand: "23",
    },
    {
        name: "i7",
        active: true,
        brand: "23",
    },
    {
        name: "Ix",
        active: true,
        brand: "23",
    },
    {
        name: "iX1",
        active: true,
        brand: "23",
    },
    {
        name: "Z4 G29",
        active: true,
        brand: "23",
    },
    {
        name: "MG3 HYBRID+",
        active: true,
        brand: "101",
    },
    {
        name: "JOGGER HYBRID",
        active: true,
        brand: "41",
    },
    {
        name: "i5",
        active: true,
        brand: "23",
    },
    {
        name: "ONDINE",
        active: true,
        brand: "81",
    },
    {
        name: "ix3",
        active: true,
        brand: "23",
    },
    {
        name: "TYPE E 2+2",
        active: true,
        brand: "73",
    },
    {
        name: "GRAND LANDÂ  HYBRID",
        active: true,
        brand: "115",
    },
    {
        name: "XJ8 LONG",
        active: true,
        brand: "73",
    },
    {
        name: "RAFALE e-TECH HYBRID",
        active: true,
        brand: "81",
    },
    {
        name: "R5 e-TECH 100% ELECTRIQUE",
        active: true,
        brand: "81",
    },
    {
        name: "RS E-TRON GT QUATTRO",
        active: true,
        brand: "31",
    },
    {
        name: "ZS HYBRID +",
        active: true,
        brand: "101",
    },
    {
        name: "MARVEL R",
        active: true,
        brand: "101",
    },
    {
        name: "ID-7",
        active: true,
        brand: "151",
    },
    {
        name: "CYBERSTER",
        active: true,
        brand: "101",
    },
    {
        name: "HS eHS",
        active: true,
        brand: "101",
    },
    {
        name: "EX 30",
        active: true,
        brand: "153",
    },
    {
        name: "EX 90",
        active: true,
        brand: "153",
    },
    {
        name: "EX 30",
        active: true,
        brand: "27",
    },
    {
        name: "CX60",
        active: true,
        brand: "27",
    },
    {
        name: "CX80",
        active: true,
        brand: "27",
    },
    {
        name: "VITO",
        active: true,
        brand: "99",
    },
    {
        name: "MX5 I",
        active: true,
        brand: "27",
    },
    {
        name: "16",
        active: true,
        brand: "81",
    },
    {
        name: "supra MK3",
        active: true,
        brand: "145",
    },
    {
        name: "e-5008",
        active: true,
        brand: "119",
    },
    {
        name: "308 3 HYBRID NON RECHARGEABLE",
        active: true,
        brand: "119",
    },
    {
        name: "308 3 SW HYBRID NON RECHARGEABLE",
        active: true,
        brand: "119",
    },
    {
        name: "AYGO X",
        active: true,
        brand: "145",
    },
    {
        name: "BIGSTER",
        active: true,
        brand: "41",
    },
    {
        name: "ELROQ",
        active: true,
        brand: "131",
    },
];

async function createModel(modelData) {
    try {
        const response = await fetch(`${STRAPI_URL}/api/models`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
            body: JSON.stringify({
                data: modelData,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(
                `HTTP error! status: ${response.status}, message: ${
                    errorData?.error?.message || response.statusText
                }`
            );
        }

        const data = await response.json();
        console.log("Model created:", data);
        return data;
    } catch (error) {
        console.error("Error creating model:", error.message);
        throw error; // Re-throw to handle in importAllModels
    }
}

async function importAllModels() {
    console.log("Starting import...");
    let successCount = 0;
    let errorCount = 0;

    for (const model of models) {
        try {
            await createModel(model);
            successCount++;
            console.log(
                `Progress: ${successCount + errorCount}/${
                    models.length
                } models processed`
            );
        } catch (error) {
            errorCount++;
            console.error(`Failed to import model: ${model.name}`);
        }
    }

    console.log("Import completed!");
    console.log(`Successfully imported: ${successCount} models`);
    console.log(`Failed to import: ${errorCount} models`);
}

async function deleteAllModels() {
    try {
        const response = await fetch(`${STRAPI_URL}/api/models`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(
                `HTTP error! status: ${response.status}, message: ${
                    errorData?.error?.message || response.statusText
                }`
            );
        }

        console.log("All models deleted successfully");
    } catch (error) {
        console.error("Error deleting models:", error.message);
    }
}

// Run the import
// importAllModels();
deleteAllModels();
