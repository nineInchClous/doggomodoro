'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormField } from '@/components/ui/form';
import SliderWithLabel from '@/components/form/SliderWithLabel';

const workDurationMinValue = 5;
const workDurationMaxValue = 60;
const shortBreakDurationMinValue = 1;
const shortBreakDurationMaxValue = 30;
const longBreakDurationMinValue = 5;
const longBreakDurationMaxValue = 60;

const settingsFormSchema = z.object({
  workDuration: z
    .number({
      required_error: 'Work duration is required',
      invalid_type_error: 'Work duration must be a number',
    })
    .int()
    .gte(workDurationMinValue, { message: 'Working less than 5 minutes will not be useful' })
    .lte(workDurationMaxValue, { message: 'Take it easy! 60 minutes of work is well enough' }),
  shortBreakDuration: z
    .number({
      required_error: 'Short break duration is required',
      invalid_type_error: 'Short break duration must be a number',
    })
    .int()
    .gte(shortBreakDurationMinValue, { message: 'Your short break should be at least 1 minute long' })
    .lte(shortBreakDurationMaxValue, { message: 'A short break of 30 minutes should be well enough to rest' }),
  longBreakDuration: z
    .number({
      required_error: 'Long break duration is required',
      invalid_type_error: 'Long break duration must be a number',
    })
    .int()
    .gte(longBreakDurationMinValue, { message: 'Your long break should be at least 5 minutes long' })
    .lte(longBreakDurationMaxValue, { message: 'A long break of 60 minutes should be well enough to rest' }),
});

export default function SettingsForm() {
  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      workDuration: 25,
      shortBreakDuration: 5,
      longBreakDuration: 15,
    },
  });

  function onSubmit(values: z.infer<typeof settingsFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2 m-auto">
        <FormField
          control={form.control}
          name="workDuration"
          render={({ field }) => (
            <SliderWithLabel
              label={'Work duration'}
              minValue={workDurationMinValue}
              maxValue={workDurationMaxValue}
              unit={'min'}
              field={field}
            />
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="shortBreakDuration"
          render={({ field }) => (
            <SliderWithLabel
              label={'Short break duration'}
              minValue={shortBreakDurationMinValue}
              maxValue={shortBreakDurationMaxValue}
              unit={'min'}
              field={field}
            />
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="longBreakDuration"
          render={({ field }) => (
            <SliderWithLabel
              label={'Long break duration'}
              minValue={longBreakDurationMinValue}
              maxValue={longBreakDurationMaxValue}
              unit={'min'}
              field={field}
            />
          )}
        ></FormField>
      </form>
    </Form>
  );
}
