'use client';

import {
  settingsFormDefaultValues,
  settingsFormSchema,
  settingsMinMaxValues,
} from '@/entities/forms/settingsFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import SliderWithLabel from '@/components/form/SliderWithLabel';

export default function SettingsForm() {
  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: settingsFormDefaultValues,
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
              minValue={settingsMinMaxValues.workDurationMinValue}
              maxValue={settingsMinMaxValues.workDurationMaxValue}
              unit={'min'}
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="shortBreakDuration"
          render={({ field }) => (
            <SliderWithLabel
              label="Short break duration"
              minValue={settingsMinMaxValues.shortBreakDurationMinValue}
              maxValue={settingsMinMaxValues.shortBreakDurationMaxValue}
              unit="min"
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="longBreakDuration"
          render={({ field }) => (
            <SliderWithLabel
              label="Long break duration"
              minValue={settingsMinMaxValues.longBreakDurationMinValue}
              maxValue={settingsMinMaxValues.longBreakDurationMaxValue}
              unit="min"
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="roundsCount"
          render={({ field }) => (
            <SliderWithLabel
              label="Rounds"
              minValue={settingsMinMaxValues.roundsCountMinValue}
              maxValue={settingsMinMaxValues.roundsCountMaxValue}
              field={field}
            />
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
