// ─── Global TypeScript Types & Interfaces ─────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export type ServiceAccent = 'teal' | 'coral' | 'navy';
export type ServiceId = 'web' | 'apps' | 'design' | 'hardware';

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  preview: string;
  features: string[];
  accent: ServiceAccent;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export interface PaginationMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}
