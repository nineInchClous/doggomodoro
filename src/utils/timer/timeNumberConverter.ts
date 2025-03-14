export const getMinutesFromTimeNumber = (seconds: number) => Math.floor(seconds / 60);
export const getSecondsFromTimeNumber = (seconds: number) => seconds % 60;
