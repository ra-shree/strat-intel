import { Citation, TimelineEvent, FinancialData, ImpactMetric } from '../the-architect-of-dissent_-sudan-gurung-profile/types';

export const CITATIONS: Citation[] = [
  { id: 1, text: "Who Is Sudan Gurung? | The Civic Leader Fueling Nepal's Gen Z Uprising - YouTube" },
  { id: 2, text: "Meet Sudan Gurung, the DJ who rocked the Nepal govt - The Economic Times" },
  { id: 3, text: "The unravelling of Sudan Gurung | The Farsight Nepal" },
  { id: 4, text: "Why hasn't Sudan Gurung joined RSP? - Setopati" },
  { id: 5, text: "Who Is Sudan Gurung, The Face Of Gen Z Protests In Nepal - NDTV" },
  { id: 6, text: "Who, or what, is Hami Nepal? - Nepali Times" },
  { id: 7, text: "Youth against corruption: a global pattern of Gen-Z revolt - The Brock Press" },
  { id: 8, text: "Sudan Gurung - Wikipedia" },
  { id: 9, text: "No consensus on Hami Nepal's claim of leading the Gen-Z movement - OnlineKhabar" },
  { id: 10, text: "Who is Sudan Gurung? 36-year-old event organiser turned activist - India.Com" },
  { id: 11, text: "Hami Nepal | For the People, By the People - Official Website" },
  { id: 12, text: "Sudan Gurung's Dharan connection - Nepal News" },
  { id: 13, text: "BPKIHS's corruption and politics pains many - AawaajNews" },
  { id: 14, text: "Who is Sudan Gurung, the face of Nepal's Gen-Z protests? - The Economic Times" },
  { id: 15, text: "2025 Nepalese Gen Z protests - Wikipedia" },
  { id: 16, text: "Nepal Gen Z Protest News Highlights" },
  { id: 21, text: "We will win the election – Sudan Gurung talks to Start Here" },
  { id: 24, text: "Young activists who toppled Nepal's government now picking new leaders - The Hindu" }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1989",
    title: "Origins",
    description: "Sudan Gurung born in Gorkha district, Nepal.",
    citation: [8]
  },
  {
    year: "Pre-2015",
    title: "The 'OMG' Era",
    description: "Worked as a DJ and event manager. Owned 'OMG' Nightclub in Kathmandu. Cultivated networks among youth and elite.",
    citation: [2, 5]
  },
  {
    year: "2015",
    date: "Apr 25",
    title: "The Turning Point",
    description: "Gorkha Earthquake. Gurung loses his son in the disaster. Shifts from nightlife to disaster relief.",
    citation: [2, 5, 10]
  },
  {
    year: "2015",
    date: "Jun 16",
    title: "Hami Nepal Genesis",
    description: "First digital footprint: 'I to We' is now Hami Nepal. Start of 'Namaste Ghar' reconstruction project.",
    citation: [1, 9]
  },
  {
    year: "2020",
    date: "Aug 18",
    title: "Institutionalization",
    description: "Formally registered as NGO during COVID-19. Established plasma/oxygen banks when state infrastructure failed.",
    citation: [6, 13]
  },
  {
    year: "2021",
    title: "Save Ghopa Campaign",
    description: "Transition from aid to advocacy. 5-month sit-in at BPKIHS Dharan targeting corruption in health sector.",
    citation: [7, 12]
  },
  {
    year: "2025",
    date: "Sep 4",
    title: "The Trigger",
    description: "PM K.P. Sharma Oli's government bans 26 social media apps. Perceived as economic warfare on Gen Z.",
    citation: [1, 14]
  },
  {
    year: "2025",
    date: "Sep 8-9",
    title: "The Uprising",
    description: "Mass protests turn violent (19 dead). Gurung emerges as leader. PM Oli resigns. Infrastructure attacked.",
    citation: [1, 15]
  },
  {
    year: "2025",
    date: "Sep 12",
    title: "Interim Government",
    description: "Gen Z movement nominates Sushila Karki (via Discord vote) as Interim PM.",
    citation: [2, 8, 16]
  },
  {
    year: "2026",
    date: "Upcoming",
    title: "General Elections",
    description: "Gurung announces candidacy for Gorkha-1. Alliance building with Balen Shah and Rabi Lamichhane.",
    citation: [21, 24]
  }
];

export const FINANCIAL_DATA: FinancialData[] = [
  { name: "Expenditure", value: 543465120, color: "#ef4444" }, // Red
  { name: "Reserves", value: 6352000, color: "#3b82f6" },   // Blue
];

export const IMPACT_METRICS: ImpactMetric[] = [
  { label: "Total Funds Raised", value: "NPR 549.8M", description: "Approx. $4.13 Million USD", citation: 12 },
  { label: "Membership Base", value: "1,600+", description: "Registered active members", citation: 5 },
  { label: "Social Reach", value: "160,000+", description: "Instagram followers (Hami Nepal)", citation: 2 },
  { label: "Uprising Casualties", value: "19 Dead", description: "Sept 8-9, 2025 (300+ Injured)", citation: 15 },
];
