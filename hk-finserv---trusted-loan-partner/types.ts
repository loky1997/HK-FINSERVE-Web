
export interface LoanFeature {
  title: string;
  description: string;
  icon: string;
}

export interface DocumentRequirement {
  item: string;
  description?: string;
}

export interface LoanDetail {
  label: string;
  value: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
