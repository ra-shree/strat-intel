export interface Citation {
  id: number;
  text: string;
  url?: string;
}

export interface TimelineEvent {
  year: string;
  date?: string;
  title: string;
  description: string;
  citation: number[];
}

export interface DynamicTimelineEvent {
  period: string;
  items: (string | string[])[];
}

export interface FinancialData {
  name: string;
  value: number;
  color: string;
}

export interface ImpactMetric {
  label: string;
  value: string | number;
  description: string;
  citation: number;
}

export interface ProfileData {
  "Key Points"?: string[];
  "Subject Overview"?: string;
  "Origins and Early History"?: {
    [key: string]: string | string[];
  };
  "Chronological Timeline"?: {
    [key: string]: string[] | (string | string[])[];
  };
  "Political Ideology and Alignment"?: {
    [key: string]: string | string[];
  };
  "Participation in Major Public Events"?: {
    [key: string]: string | string[];
  };
  "Networks and Influence"?: {
    [key: string]: string | string[];
  };
  "Controversies, Criticism, and Legal Issues"?: {
    [key: string]: string | string[];
  };
  "Current Status (January 2026)"?: string | string[];
  "Assessment and Open Questions"?: string | string[];
  "Citations"?: string;
  "Sources"?: string[];
  "Financial Intelligence"?: FinancialData[];
}

export interface DataStructure {
  [key: string]: ProfileData;
}
