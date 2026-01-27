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