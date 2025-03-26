'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const settingsFormSchema = z.object({
  workDuration: z
    .number({
      required_error: 'Work duration is required',
      invalid_type_error: 'Work duration must be a number',
      description: 'Work duration in minutes',
    })
    .int()
    .gte(5, { message: 'Working less than 5 minutes will not be useful' })
    .lte(60, { message: 'Take it easy! 60 minutes of work is well enough' }),
  shortPauseDuration: z
    .number({
      required_error: 'Short pause duration is required',
      invalid_type_error: 'Short pause duration must be a number',
      description: 'Short pause duration in minutes',
    })
    .int()
    .gte(1, { message: 'Your short pause should be at least 1 minute long' })
    .lte(30, { message: 'A short pause of 30 minutes should be well enough to rest' }),
  longPauseDuration: z
    .number({
      required_error: 'Long pause duration is required',
      invalid_type_error: 'Long pause duration must be a number',
      description: 'Long pause duration in minutes',
    })
    .int()
    .gte(5, { message: 'Your long pause should be at least 5 minutes long' })
    .lte(60, { message: 'A long pause of 60 minutes should be well enough to rest' }),
});

export default function SettingsForm() {
  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      workDuration: 25,
      shortPauseDuration: 5,
      longPauseDuration: 15,
    },
  });

  function onSubmit(values: z.infer<typeof settingsFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="workDuration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work duration</FormLabel>
              <FormControl>
                <Slider />
              </FormControl>
              <FormDescription>Description</FormDescription>
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
}
