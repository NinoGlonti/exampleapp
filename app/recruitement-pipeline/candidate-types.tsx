export interface CandidateDataType {
  key: string;
  candidate: {
    name: string;
    last_name: string;
  };
  email: string;
  phone: string;
  experience: number;
  skills: string[];
  salary: {
    minSalary: number;
    maxSalary: number;
  };
  status: string;
}

export type PaymentsResponse = {
  current_page: number;
  data: CandidateDataType[];
  next_page_url: string | number | null;
  path: string;
  per_page: string | number | null;
  prev_page_url: string | number | null;
  to: string | number | null;
  total: string | number | null;
};
