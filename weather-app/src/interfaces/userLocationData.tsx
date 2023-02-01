export interface UserLocationData {
  current: {
    temp_c: number;
    condition: {
      icon: string;
    };
  };
  location: {
    country: string;
    name: string;
  };
}
