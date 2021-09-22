import { OrbitParams } from './orbit-params';

export interface Payload {
  payload_id: string;
  norad_id: number[];
  reused: boolean;
  customers: string[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: string;
  payload_mass_lbs: string;
  orbit: string;
  orbit_params: OrbitParams;
}
