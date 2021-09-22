import { Core } from './core';
import { Failures } from './failures';
import { Fairings } from './fairings';
import { Links } from './links';

export interface Launch {
  fairings: Fairings;
  links: Links;
  static_fire_date_utc: string;
  static_fire_date_unix: string;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failures[];
  details: string;
  crew: string[];
  ships: string[];
  capsule: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_unix: number;
  date_utc: string;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core;
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string;
  id: string;
}
