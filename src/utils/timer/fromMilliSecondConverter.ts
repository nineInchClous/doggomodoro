export const getMinutesFromMilliSeconds = (milliSeconds: number) => Math.floor(milliSeconds / 60);
export const getSecondsFromMilliSeconds = (milliSeconds: number) => milliSeconds % 60;
