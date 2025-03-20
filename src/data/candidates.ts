
export interface Candidate {
  id: string;
  name: string;
  party: string;
  age: number;
  qualification: string;
  position: string;
  imageUrl: string;
  votes: number;
  stateId: string;
  districtId: string;
  mandalId: string;
  manifesto?: string;
}

export interface Election {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'current' | 'past' | 'future';
  type: string;
  eligibleVoters: string[];
  candidates: Candidate[];
}

export const elections: Election[] = [
  {
    id: "election-1",
    title: "Lok Sabha Elections 2024",
    description: "General Elections to elect members of the 18th Lok Sabha, the lower house of India's bicameral Parliament.",
    startDate: "2024-06-15T08:00:00Z",
    endDate: "2024-06-15T16:00:00Z",
    status: "current",
    type: "General Election",
    eligibleVoters: ["All registered voters above 18 years"],
    candidates: [
      {
        id: "candidate-1",
        name: "Rajesh Kumar",
        party: "Bharatiya Janata Party",
        age: 52,
        qualification: "LLB, Delhi University",
        position: "MP Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=1",
        votes: 245,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "kadapa-mandal",
        manifesto: "Focus on infrastructure development, job creation, and national security."
      },
      {
        id: "candidate-2",
        name: "Priya Sharma",
        party: "Indian National Congress",
        age: 48,
        qualification: "MBA, IIM Ahmedabad",
        position: "MP Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=5",
        votes: 213,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "kadapa-mandal",
        manifesto: "Emphasis on inclusive growth, welfare schemes, and social justice."
      },
      {
        id: "candidate-3",
        name: "Farhan Ahmed",
        party: "Aam Aadmi Party",
        age: 43,
        qualification: "M.Tech, IIT Bombay",
        position: "MP Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=3",
        votes: 189,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "rajampet",
        manifesto: "Promoting education, healthcare reforms, and anti-corruption measures."
      },
      {
        id: "candidate-4",
        name: "Ananya Desai",
        party: "Bahujan Samaj Party",
        age: 45,
        qualification: "PhD Political Science",
        position: "MP Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=4",
        votes: 167,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "rajampet",
        manifesto: "Fighting for social equality, minority rights, and constitutional values."
      },
      {
        id: "candidate-17",
        name: "Venkatesh Rao",
        party: "Telugu Desam Party",
        age: 54,
        qualification: "B.Tech Civil Engineering",
        position: "MP Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=12",
        votes: 156,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "tirupati",
        manifesto: "Development of Andhra Pradesh with special status and industrial growth."
      },
      {
        id: "candidate-18",
        name: "Lakshmi Narayana",
        party: "YSR Congress Party",
        age: 49,
        qualification: "MSc Agriculture",
        position: "MP Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=15",
        votes: 172,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "tirupati",
        manifesto: "Welfare schemes, farmer support, and rural development."
      }
    ]
  },
  {
    id: "election-2",
    title: "Assembly Elections 2023",
    description: "State Legislative Assembly Elections to elect representatives to the State Assembly.",
    startDate: "2023-11-10T09:00:00Z",
    endDate: "2023-11-10T17:00:00Z",
    status: "past",
    type: "State Election",
    eligibleVoters: ["All registered voters of the state"],
    candidates: [
      {
        id: "candidate-5",
        name: "Rahul Verma",
        party: "Bharatiya Janata Party",
        age: 47,
        qualification: "MBA Finance",
        position: "MLA Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=8",
        votes: 312,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "tirupati",
        manifesto: "Economic development, tourism growth, and temple town infrastructure."
      },
      {
        id: "candidate-6",
        name: "Meena Kumari",
        party: "Indian National Congress",
        age: 41,
        qualification: "Masters in Public Policy",
        position: "MLA Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=9",
        votes: 287,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "tirupati",
        manifesto: "Focus on local issues, employment generation, and women empowerment."
      },
      {
        id: "candidate-19",
        name: "Arjun Reddy",
        party: "Telugu Desam Party",
        age: 39,
        qualification: "LLB",
        position: "MLA Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=23",
        votes: 275,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "kadapa-mandal",
        manifesto: "Legal reforms, transparency in governance, and industrial development."
      },
      {
        id: "candidate-20",
        name: "Sunita Devi",
        party: "YSR Congress Party",
        age: 44,
        qualification: "MA Economics",
        position: "MLA Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=32",
        votes: 298,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "kadapa-mandal",
        manifesto: "Economic policies, women welfare schemes, and education reforms."
      },
      {
        id: "candidate-21",
        name: "Mohan Krishna",
        party: "Communist Party of India",
        age: 53,
        qualification: "BA Political Science",
        position: "MLA Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=59",
        votes: 187,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "rajampet",
        manifesto: "Workers' rights, farmer issues, and social welfare."
      },
      {
        id: "candidate-22",
        name: "Jaya Prakash",
        party: "Janata Dal (United)",
        age: 49,
        qualification: "M.Com",
        position: "MLA Candidate",
        imageUrl: "https://i.pravatar.cc/300?img=55",
        votes: 165,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "rajampet",
        manifesto: "Rural development, agricultural reforms, and employment generation."
      }
    ]
  },
  {
    id: "election-3",
    title: "Panchayat Elections 2024",
    description: "Local body elections for selecting representatives for the Gram Panchayats.",
    startDate: "2024-07-20T08:00:00Z",
    endDate: "2024-07-20T16:00:00Z",
    status: "future",
    type: "Local Body Election",
    eligibleVoters: ["All registered voters of the respective Gram Panchayat"],
    candidates: [
      {
        id: "candidate-7",
        name: "Vikram Singh",
        party: "Independent",
        age: 38,
        qualification: "BSc Agriculture",
        position: "Sarpanch",
        imageUrl: "https://i.pravatar.cc/300?img=11",
        votes: 0,
        stateId: "tg",
        districtId: "hyderabad",
        mandalId: "secunderabad",
        manifesto: "Water management, sanitation, and rural infrastructure."
      },
      {
        id: "candidate-8",
        name: "Sarika Patel",
        party: "Independent",
        age: 35,
        qualification: "BEd",
        position: "Sarpanch",
        imageUrl: "https://i.pravatar.cc/300?img=10",
        votes: 0,
        stateId: "tg",
        districtId: "hyderabad",
        mandalId: "secunderabad",
        manifesto: "Focus on education, women empowerment, and healthcare facilities."
      },
      {
        id: "candidate-23",
        name: "Raju Naidu",
        party: "Bharatiya Janata Party",
        age: 42,
        qualification: "Diploma in Rural Management",
        position: "Sarpanch",
        imageUrl: "https://i.pravatar.cc/300?img=22",
        votes: 0,
        stateId: "tg",
        districtId: "hyderabad",
        mandalId: "secunderabad",
        manifesto: "Village development, road connectivity, and drinking water solutions."
      },
      {
        id: "candidate-24",
        name: "Meera Rao",
        party: "Indian National Congress",
        age: 39,
        qualification: "BA Sociology",
        position: "Sarpanch",
        imageUrl: "https://i.pravatar.cc/300?img=25",
        votes: 0,
        stateId: "tg",
        districtId: "hyderabad",
        mandalId: "secunderabad",
        manifesto: "Social harmony, village infrastructure, and employment schemes."
      }
    ]
  },
  {
    id: "election-4",
    title: "Municipal Corporation Elections 2023",
    description: "Urban local body elections to elect representatives for the Municipal Corporation.",
    startDate: "2023-09-05T08:00:00Z",
    endDate: "2023-09-05T17:00:00Z",
    status: "past",
    type: "Urban Local Body",
    eligibleVoters: ["All registered voters of the Municipal Corporation"],
    candidates: [
      {
        id: "candidate-9",
        name: "Aditya Chopra",
        party: "Bharatiya Janata Party",
        age: 45,
        qualification: "Civil Engineering",
        position: "Corporator",
        imageUrl: "https://i.pravatar.cc/300?img=20",
        votes: 345,
        stateId: "tg",
        districtId: "rangareddy",
        mandalId: "lb-nagar",
        manifesto: "Urban infrastructure, waste management, and smart city initiatives."
      },
      {
        id: "candidate-10",
        name: "Nandini Reddy",
        party: "Indian National Congress",
        age: 38,
        qualification: "Masters in Urban Planning",
        position: "Corporator",
        imageUrl: "https://i.pravatar.cc/300?img=29",
        votes: 320,
        stateId: "tg",
        districtId: "rangareddy",
        mandalId: "lb-nagar",
        manifesto: "Focus on housing for all, public transportation, and environmental conservation."
      },
      {
        id: "candidate-11",
        name: "Mohammed Imran",
        party: "All India Majlis-e-Ittehadul Muslimeen",
        age: 41,
        qualification: "MBA",
        position: "Corporator",
        imageUrl: "https://i.pravatar.cc/300?img=30",
        votes: 310,
        stateId: "tg",
        districtId: "rangareddy",
        mandalId: "lb-nagar",
        manifesto: "Focus on minority welfare, education, and healthcare facilities."
      },
      {
        id: "candidate-12",
        name: "Kavita Sharma",
        party: "Telangana Rashtra Samithi",
        age: 39,
        qualification: "MSW",
        position: "Corporator",
        imageUrl: "https://i.pravatar.cc/300?img=31",
        votes: 290,
        stateId: "tg",
        districtId: "rangareddy",
        mandalId: "lb-nagar",
        manifesto: "Social welfare, women safety, and infrastructure development."
      }
    ]
  },
  {
    id: "election-5",
    title: "Zilla Parishad Elections 2024",
    description: "District level local body elections to elect representatives for the Zilla Parishad.",
    startDate: "2024-08-15T08:00:00Z",
    endDate: "2024-08-15T17:00:00Z",
    status: "future",
    type: "District Panchayat",
    eligibleVoters: ["All registered voters of the district"],
    candidates: [
      {
        id: "candidate-13",
        name: "Prakash Raj",
        party: "Bharatiya Janata Party",
        age: 50,
        qualification: "Masters in Public Administration",
        position: "Zilla Parishad Member",
        imageUrl: "https://i.pravatar.cc/300?img=33",
        votes: 0,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "chittoor-rural",
        manifesto: "District development, education infrastructure, and healthcare."
      },
      {
        id: "candidate-14",
        name: "Lakshmi Devi",
        party: "Indian National Congress",
        age: 46,
        qualification: "BEd",
        position: "Zilla Parishad Member",
        imageUrl: "https://i.pravatar.cc/300?img=34",
        votes: 0,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "chittoor-rural",
        manifesto: "Women empowerment, education reforms, and rural connectivity."
      },
      {
        id: "candidate-15",
        name: "Ravi Teja",
        party: "Telugu Desam Party",
        age: 44,
        qualification: "LLB",
        position: "Zilla Parishad Member",
        imageUrl: "https://i.pravatar.cc/300?img=61",
        votes: 0,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "chittoor-rural",
        manifesto: "Legal awareness, administrative reforms, and transparency."
      },
      {
        id: "candidate-16",
        name: "Sujatha Naidu",
        party: "YSR Congress Party",
        age: 42,
        qualification: "MSc Agriculture",
        position: "Zilla Parishad Member",
        imageUrl: "https://i.pravatar.cc/300?img=58",
        votes: 0,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "chittoor-rural",
        manifesto: "Agricultural development, irrigation projects, and farmer welfare."
      }
    ]
  }
];

export const getCurrentElections = (): Election[] => {
  return elections.filter(election => election.status === 'current');
};

export const getPastElections = (): Election[] => {
  return elections.filter(election => election.status === 'past');
};

export const getFutureElections = (): Election[] => {
  return elections.filter(election => election.status === 'future');
};

export const getElectionById = (id: string): Election | undefined => {
  return elections.find(election => election.id === id);
};

export const getCandidatesByRegion = (
  electionId: string,
  stateId: string,
  districtId: string,
  mandalId: string
): Candidate[] => {
  const election = getElectionById(electionId);
  if (!election) return [];
  
  return election.candidates.filter(
    candidate => 
      candidate.stateId === stateId && 
      candidate.districtId === districtId && 
      candidate.mandalId === mandalId
  );
};
