import { z } from 'zod';

const settingsMinMaxValues = {
  workDurationMinValue: 5,
  workDurationMaxValue: 60,
  shortBreakDurationMinValue: 1,
  shortBreakDurationMaxValue: 30,
  longBreakDurationMinValue: 5,
  longBreakDurationMaxValue: 60,
};

const settingsFormDefaultValues = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
};

const settingsFormSchema = z.object({
  workDuration: z
    .number({
      required_error: 'Work duration is required',
      invalid_type_error: 'Work duration must be a number',
      coerce: true,
    })
    .int()
    .gte(settingsMinMaxValues.workDurationMinValue, { message: 'Working less than 5 minutes will not be useful' })
    .lte(settingsMinMaxValues.workDurationMaxValue, { message: 'Take it easy! 60 minutes of work is well enough' }),
  shortBreakDuration: z
    .number({
      required_error: 'Short break duration is required',
      invalid_type_error: 'Short break duration must be a number',
      coerce: true,
    })
    .int()
    .gte(settingsMinMaxValues.shortBreakDurationMinValue, {
      message: 'Your short break should be at least 1 minute long',
    })
    .lte(settingsMinMaxValues.shortBreakDurationMaxValue, {
      message: 'A short break of 30 minutes should be well enough to rest',
    }),
  longBreakDuration: z
    .number({
      required_error: 'Long break duration is required',
      invalid_type_error: 'Long break duration must be a number',
      coerce: true,
    })
    .int()
    .gte(settingsMinMaxValues.longBreakDurationMinValue, {
      message: 'Your long break should be at least 5 minutes long',
    })
    .lte(settingsMinMaxValues.longBreakDurationMaxValue, {
      message: 'A long break of 60 minutes should be well enough to rest',
    }),
});

export { settingsMinMaxValues, settingsFormDefaultValues, settingsFormSchema };
