export interface CandidateDataType {
  key: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  experience: number;
  skills: string[];
  min_salary: number;
  max_salary: number;
  status: string;
}

export type CandidateResponse = {
  current_page: number;
  data: CandidateDataType[];
  next_page_url: string | number | null;
  path: string;
  per_page: string | number | null;
  prev_page_url: string | number | null;
  to: string | number | null;
  total: string | number | null;
};
