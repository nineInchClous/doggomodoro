'use client';

import {
  settingsFormDefaultValues,
  settingsFormSchema,
  settingsMinMaxValues,
} from '@/entities/forms/settingsFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import SliderInput from '@/components/form/SliderInput';
import SwitchInput from '@/components/form/SwitchInput';

export default function SettingsForm() {
  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: settingsFormDefaultValues,
  });

  function onSubmit(values: z.infer<typeof settingsFormSchema>) {
    console.log(values);
    toast.success('Settings saved');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2 m-auto">
        <FormField
          control={form.control}
          name="workDuration"
          render={({ field }) => (
            <SliderInput
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
            <SliderInput
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
            <SliderInput
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
            <SliderInput
              label="Rounds"
              minValue={settingsMinMaxValues.roundsCountMinValue}
              maxValue={settingsMinMaxValues.roundsCountMaxValue}
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="autoStart"
          render={({ field }) => (
            <SwitchInput
              label="Auto start"
              description="Automatically start the next round when the previous one ends"
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <SwitchInput
              label="Notifications"
              description="Display a notification at the start or end of a round"
              field={field}
            />
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
