// app/config/businessHoursConfig.ts

export type BusinessHoursConfig = {
  businessTimezone: string;
  workDays: number[]; // 1 = Monday, 7 = Sunday
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  closingSoonThresholdMinutes: number;
};

export const businessHoursConfig: BusinessHoursConfig = {
  businessTimezone: "Europe/Minsk",
  workDays: [1, 2, 3, 4, 5, 6],
  startHour: 9,
  startMinute: 0,
  endHour: 21,
  endMinute: 0,
  closingSoonThresholdMinutes: 120,
};