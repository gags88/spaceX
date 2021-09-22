export interface Core {
  core_serial: number;
  flight: number;
  block: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success: boolean;
  landing_intent: boolean;
  landing_type: string;
  landing_vehicle: string;
}
