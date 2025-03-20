
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
    title: "Student Union Elections 2024",
    description: "Annual student body elections to elect representatives for the Student Union Council.",
    startDate: "2024-06-15T08:00:00Z",
    endDate: "2024-06-15T16:00:00Z",
    status: "current",
    type: "Student Union",
    eligibleVoters: ["All enrolled students"],
    candidates: [
      {
        id: "candidate-1",
        name: "Raj Kumar",
        party: "Progressive Students Alliance",
        age: 22,
        qualification: "B.Tech 3rd Year",
        position: "President",
        imageUrl: "https://i.pravatar.cc/300?img=1",
        votes: 245,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "kadapa-mandal"
      },
      {
        id: "candidate-2",
        name: "Priya Sharma",
        party: "Students' Unity Forum",
        age: 21,
        qualification: "B.Tech 3rd Year",
        position: "President",
        imageUrl: "https://i.pravatar.cc/300?img=5",
        votes: 213,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "kadapa-mandal"
      },
      {
        id: "candidate-3",
        name: "Karthik Reddy",
        party: "Progressive Students Alliance",
        age: 20,
        qualification: "B.Tech 2nd Year",
        position: "Vice President",
        imageUrl: "https://i.pravatar.cc/300?img=3",
        votes: 189,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "rajampet"
      },
      {
        id: "candidate-4",
        name: "Ananya Desai",
        party: "Students' Unity Forum",
        age: 20,
        qualification: "B.Tech 2nd Year",
        position: "Vice President",
        imageUrl: "https://i.pravatar.cc/300?img=4",
        votes: 167,
        stateId: "ap",
        districtId: "kadapa",
        mandalId: "rajampet"
      }
    ]
  },
  {
    id: "election-2",
    title: "Hostel Committee Elections 2023",
    description: "Elections for selecting representatives for the Hostel Management Committee.",
    startDate: "2023-11-10T09:00:00Z",
    endDate: "2023-11-10T17:00:00Z",
    status: "past",
    type: "Hostel Committee",
    eligibleVoters: ["All hostel residents"],
    candidates: [
      {
        id: "candidate-5",
        name: "Rahul Verma",
        party: "Residents Welfare Group",
        age: 22,
        qualification: "B.Tech 4th Year",
        position: "Hostel Secretary",
        imageUrl: "https://i.pravatar.cc/300?img=8",
        votes: 312,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "tirupati"
      },
      {
        id: "candidate-6",
        name: "Meena Kumari",
        party: "Students' Rights Forum",
        age: 21,
        qualification: "B.Tech 3rd Year",
        position: "Hostel Secretary",
        imageUrl: "https://i.pravatar.cc/300?img=9",
        votes: 287,
        stateId: "ap",
        districtId: "chittoor",
        mandalId: "tirupati"
      }
    ]
  },
  {
    id: "election-3",
    title: "Cultural Committee Elections 2024",
    description: "Elections for the formation of the Cultural Activities Committee for the academic year 2024-25.",
    startDate: "2024-07-20T08:00:00Z",
    endDate: "2024-07-20T16:00:00Z",
    status: "future",
    type: "Cultural Committee",
    eligibleVoters: ["All enrolled students"],
    candidates: [
      {
        id: "candidate-7",
        name: "Vikram Singh",
        party: "Creative Arts Alliance",
        age: 21,
        qualification: "B.Tech 3rd Year",
        position: "Cultural Secretary",
        imageUrl: "https://i.pravatar.cc/300?img=11",
        votes: 0,
        stateId: "tg",
        districtId: "hyderabad",
        mandalId: "secunderabad"
      },
      {
        id: "candidate-8",
        name: "Sarika Patel",
        party: "Performance Arts Guild",
        age: 20,
        qualification: "B.Tech 2nd Year",
        position: "Cultural Secretary",
        imageUrl: "https://i.pravatar.cc/300?img=10",
        votes: 0,
        stateId: "tg",
        districtId: "hyderabad",
        mandalId: "secunderabad"
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
