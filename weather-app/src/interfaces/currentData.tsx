export interface CurrentData {
  cloud: number;
  condition: {
    code: number;
    icon: string;
    text: string;
  };
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  pressure_mb: number;
  is_day: number;
  temp_c: number;
  temp_f: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
}
