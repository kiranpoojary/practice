let csv = require('react-csv')
let data = {
    "states": [
        {
            "value": 220,
            "label": "Alaska"
        },
        {
            "value": 228,
            "label": "Alabama"
        },
        {
            "value": 237,
            "label": "Arkansas"
        },
        {
            "value": 241,
            "label": "Arizona"
        },
        {
            "value": 256,
            "label": "California"
        },
        {
            "value": 259,
            "label": "Colorado"
        },
        {
            "value": 222,
            "label": "Connecticut"
        },
        {
            "value": 230,
            "label": "District of Columbia"
        },
        {
            "value": 261,
            "label": "Delaware"
        },
        {
            "value": 232,
            "label": "Florida"
        },
        {
            "value": 249,
            "label": "Georgia"
        },
        {
            "value": 229,
            "label": "Hawaii"
        },
        {
            "value": 255,
            "label": "Iowa"
        },
        {
            "value": 252,
            "label": "Idaho"
        },
        {
            "value": 214,
            "label": "Illinois"
        },
        {
            "value": 262,
            "label": "Indiana"
        },
        {
            "value": 242,
            "label": "Kansas"
        },
        {
            "value": 226,
            "label": "Kentucky"
        },
        {
            "value": 233,
            "label": "Louisiana"
        },
        {
            "value": 223,
            "label": "Massachusetts"
        },
        {
            "value": 239,
            "label": "Maryland"
        },
        {
            "value": 243,
            "label": "Maine"
        },
        {
            "value": 221,
            "label": "Michigan"
        },
        {
            "value": 215,
            "label": "Minnesota"
        },
        {
            "value": 250,
            "label": "Missouri"
        },
        {
            "value": 216,
            "label": "Mississippi"
        },
        {
            "value": 225,
            "label": "Montana"
        },
        {
            "value": 235,
            "label": "North Carolina"
        },
        {
            "value": 260,
            "label": "North Dakota"
        },
        {
            "value": 246,
            "label": "Nebraska"
        },
        {
            "value": 217,
            "label": "New Hampshire"
        },
        {
            "value": 240,
            "label": "New Jersey"
        },
        {
            "value": 258,
            "label": "New Mexico"
        },
        {
            "value": 224,
            "label": "Nevada"
        },
        {
            "value": 253,
            "label": "New York"
        },
        {
            "value": 254,
            "label": "Ohio"
        },
        {
            "value": 247,
            "label": "Oklahoma"
        },
        {
            "value": 218,
            "label": "Oregon"
        },
        {
            "value": 212,
            "label": "Pennsylvania"
        },
        {
            "value": 213,
            "label": "Rhode Island"
        },
        {
            "value": 238,
            "label": "South Carolina"
        },
        {
            "value": 227,
            "label": "South Dakota"
        },
        {
            "value": 236,
            "label": "Tennessee"
        },
        {
            "value": 234,
            "label": "Texas"
        },
        {
            "value": 219,
            "label": "Utah"
        },
        {
            "value": 248,
            "label": "Virginia"
        },
        {
            "value": 244,
            "label": "Vermont"
        },
        {
            "value": 251,
            "label": "Washington"
        },
        {
            "value": 245,
            "label": "Wisconsin"
        },
        {
            "value": 231,
            "label": "West Virginia"
        },
        {
            "value": 257,
            "label": "Wyoming"
        },
        {
            "value": 977,
            "label": "ZZZ"
        },
        {
            "value": 3495,
            "label": "Alberta"
        },
        {
            "value": 3494,
            "label": "British Columbia"
        },
        {
            "value": 3497,
            "label": "Manitoba"
        },
        {
            "value": 3492,
            "label": "New Brunswick"
        },
        {
            "value": 3496,
            "label": "Nunavut"
        },
        {
            "value": 3493,
            "label": "Ontario"
        },
        {
            "value": 3491,
            "label": "Quebec"
        }
    ],
    "professions": [
        {
            "value": 15,
            "label": "RN"
        },
        {
            "value": 16,
            "label": "Certified Surg Tech"
        },
        {
            "value": 17,
            "label": "LPN"
        },
        {
            "value": 18,
            "label": "CNA"
        },
        {
            "value": 48,
            "label": "PT"
        },
        {
            "value": 197,
            "label": "Data Entry Clerk"
        },
        {
            "value": 230,
            "label": "MRI Tech"
        },
        {
            "value": 238,
            "label": "SLP"
        },
        {
            "value": 246,
            "label": "Nurse Practitioner"
        },
        {
            "value": 255,
            "label": "Surgeon"
        },
        {
            "value": 266,
            "label": "IT"
        },
        {
            "value": 284,
            "label": "Coder"
        },
        {
            "value": 290,
            "label": "VET"
        },
        {
            "value": 377,
            "label": "OT"
        }
    ],
    "specialties": [
        {
            "value": 24,
            "label": "ER",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 25,
            "label": "ICU",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 26,
            "label": "NICU",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 27,
            "label": "CVICU",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 28,
            "label": "Oncology",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 29,
            "label": "PICU",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 30,
            "label": "Post Partum",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 31,
            "label": "OB/GYN",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 32,
            "label": "OR",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 33,
            "label": "IV Therapy",
            "professionId": 18,
            "jobDescription": null
        },
        {
            "value": 34,
            "label": "ER",
            "professionId": 18,
            "jobDescription": null
        },
        {
            "value": 35,
            "label": "Acute Care",
            "professionId": 18,
            "jobDescription": null
        },
        {
            "value": 36,
            "label": "NICU",
            "professionId": 18,
            "jobDescription": null
        },
        {
            "value": 37,
            "label": "L & D",
            "professionId": 18,
            "jobDescription": null
        },
        {
            "value": 38,
            "label": "Home Health",
            "professionId": 18,
            "jobDescription": null
        },
        {
            "value": 39,
            "label": "Mother Baby",
            "professionId": 18,
            "jobDescription": null
        },
        {
            "value": 40,
            "label": "ICU",
            "professionId": 18,
            "jobDescription": null
        },
        {
            "value": 41,
            "label": "Cath Lab",
            "professionId": 17,
            "jobDescription": null
        },
        {
            "value": 42,
            "label": "Hospice",
            "professionId": 17,
            "jobDescription": null
        },
        {
            "value": 43,
            "label": "CVICU",
            "professionId": 17,
            "jobDescription": null
        },
        {
            "value": 44,
            "label": "ICU",
            "professionId": 17,
            "jobDescription": null
        },
        {
            "value": 45,
            "label": "OR",
            "professionId": 16,
            "jobDescription": null
        },
        {
            "value": 46,
            "label": "Endoscopy",
            "professionId": 16,
            "jobDescription": null
        },
        {
            "value": 47,
            "label": "L & D",
            "professionId": 16,
            "jobDescription": null
        },
        {
            "value": 48,
            "label": "Sterile Processing Tech",
            "professionId": 16,
            "jobDescription": null
        },
        {
            "value": 49,
            "label": "Endocrinology",
            "professionId": 16,
            "jobDescription": null
        },
        {
            "value": 50,
            "label": "First Assist",
            "professionId": 16,
            "jobDescription": null
        },
        {
            "value": 119,
            "label": "Peds",
            "professionId": 48,
            "jobDescription": null
        },
        {
            "value": 1268,
            "label": "Stepdown",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1271,
            "label": "Case Manager",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1421,
            "label": "Entry Level",
            "professionId": 197,
            "jobDescription": null
        },
        {
            "value": 1475,
            "label": "MRI Tech",
            "professionId": 230,
            "jobDescription": null
        },
        {
            "value": 1492,
            "label": "School",
            "professionId": 238,
            "jobDescription": null
        },
        {
            "value": 1519,
            "label": "Vascular",
            "professionId": 246,
            "jobDescription": null
        },
        {
            "value": 1531,
            "label": "LTC",
            "professionId": 18,
            "jobDescription": null
        },
        {
            "value": 1533,
            "label": "Cardiothoracic",
            "professionId": 255,
            "jobDescription": null
        },
        {
            "value": 1608,
            "label": "Mother Baby",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1610,
            "label": "Test_PRN",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1613,
            "label": "Endo",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1614,
            "label": "Burn",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1615,
            "label": "PTA",
            "professionId": 48,
            "jobDescription": null
        },
        {
            "value": 1618,
            "label": "First Assist",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1619,
            "label": "IMC",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1620,
            "label": "Dialysis",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1627,
            "label": "IT-Specialty",
            "professionId": 266,
            "jobDescription": null
        },
        {
            "value": 1628,
            "label": "Test CS",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1649,
            "label": "MedSurg",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1655,
            "label": "Home Health",
            "professionId": 15,
            "jobDescription": null
        },
        {
            "value": 1668,
            "label": "Coder",
            "professionId": 284,
            "jobDescription": null
        },
        {
            "value": 1687,
            "label": "VET",
            "professionId": 290,
            "jobDescription": null
        },
        {
            "value": 1889,
            "label": "OutPatient",
            "professionId": 377,
            "jobDescription": null
        }
    ],
    "referralSources": [
        {
            "value": 5,
            "label": "Website"
        },
        {
            "value": 6,
            "label": "Email Campaign"
        },
        {
            "value": 7,
            "label": "Recruiter Phone Call"
        },
        {
            "value": 8,
            "label": "Social Media"
        },
        {
            "value": 9,
            "label": "Job Board"
        },
        {
            "value": 10,
            "label": "Conference"
        },
        {
            "value": 11,
            "label": "Other"
        },
        {
            "value": 12,
            "label": "Referral"
        },
        {
            "value": 266,
            "label": "Mobile"
        },
        {
            "value": 291,
            "label": "Online App"
        },
        {
            "value": 325,
            "label": "Radio Advertisement"
        },
        {
            "value": 328,
            "label": "TraveCon 2021"
        },
        {
            "value": 332,
            "label": "FB Advertisement"
        }
    ],
    "divisions": [
        {
            "value": 45,
            "label": "Southeast"
        },
        {
            "value": 46,
            "label": "West"
        },
        {
            "value": 57,
            "label": "East"
        },
        {
            "value": 69,
            "label": "North"
        }
    ]
}
class ToFromCSV {
    constructor() {

    }


    async arrayObjToCSV(data) {
        console.log("ok");
    }

}



let c = new ToFromCSV(data)
c.arrayObjToCSV()



