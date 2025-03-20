
export interface State {
  id: string;
  name: string;
  districts: District[];
}

export interface District {
  id: string;
  name: string;
  mandals: Mandal[];
}

export interface Mandal {
  id: string;
  name: string;
}

export const states: State[] = [
  {
    id: "ap",
    name: "Andhra Pradesh",
    districts: [
      {
        id: "kadapa",
        name: "YSR Kadapa",
        mandals: [
          { id: "kadapa-mandal", name: "Kadapa" },
          { id: "proddatur", name: "Proddatur" },
          { id: "rajampet", name: "Rajampet" },
          { id: "kamalapuram", name: "Kamalapuram" },
          { id: "yerraguntla", name: "Yerraguntla" }
        ]
      },
      {
        id: "chittoor",
        name: "Chittoor",
        mandals: [
          { id: "chittoor-mandal", name: "Chittoor" },
          { id: "tirupati", name: "Tirupati" },
          { id: "srikalahasti", name: "Srikalahasti" },
          { id: "madanapalle", name: "Madanapalle" },
          { id: "puttur", name: "Puttur" }
        ]
      },
      {
        id: "anantapur",
        name: "Anantapur",
        mandals: [
          { id: "anantapur-mandal", name: "Anantapur" },
          { id: "dharmavaram", name: "Dharmavaram" },
          { id: "hindupur", name: "Hindupur" },
          { id: "tadipatri", name: "Tadipatri" },
          { id: "kalyanadurgam", name: "Kalyanadurgam" }
        ]
      }
    ]
  },
  {
    id: "tg",
    name: "Telangana",
    districts: [
      {
        id: "hyderabad",
        name: "Hyderabad",
        mandals: [
          { id: "secunderabad", name: "Secunderabad" },
          { id: "charminar", name: "Charminar" },
          { id: "khairatabad", name: "Khairatabad" },
          { id: "jubilee-hills", name: "Jubilee Hills" },
          { id: "banjara-hills", name: "Banjara Hills" }
        ]
      },
      {
        id: "rangareddy",
        name: "Ranga Reddy",
        mandals: [
          { id: "shamshabad", name: "Shamshabad" },
          { id: "ibrahimpatnam", name: "Ibrahimpatnam" },
          { id: "maheshwaram", name: "Maheshwaram" },
          { id: "hayathnagar", name: "Hayathnagar" },
          { id: "rajendranagar", name: "Rajendranagar" }
        ]
      }
    ]
  }
];

export const getDistricts = (stateId: string) => {
  const state = states.find(s => s.id === stateId);
  return state ? state.districts : [];
};

export const getMandals = (stateId: string, districtId: string) => {
  const state = states.find(s => s.id === stateId);
  if (!state) return [];
  
  const district = state.districts.find(d => d.id === districtId);
  return district ? district.mandals : [];
};

export const getStateNameById = (stateId: string) => {
  const state = states.find(s => s.id === stateId);
  return state ? state.name : '';
};

export const getDistrictNameById = (stateId: string, districtId: string) => {
  const state = states.find(s => s.id === stateId);
  if (!state) return '';
  
  const district = state.districts.find(d => d.id === districtId);
  return district ? district.name : '';
};

export const getMandalNameById = (stateId: string, districtId: string, mandalId: string) => {
  const state = states.find(s => s.id === stateId);
  if (!state) return '';
  
  const district = state.districts.find(d => d.id === districtId);
  if (!district) return '';
  
  const mandal = district.mandals.find(m => m.id === mandalId);
  return mandal ? mandal.name : '';
};
