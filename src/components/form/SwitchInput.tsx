import { ControllerRenderProps } from 'react-hook-form';

import { FormControl, FormDescription, FormItem, FormLabel } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';

interface SwitchInputProps {
  label: string;
  description?: string;
  field: ControllerRenderProps<any>;
}

export default function SwitchInput({ ...props }: SwitchInputProps) {
  return (
    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
      <div className="space-y-0.5">
        <FormLabel className="text-base">{props.label}</FormLabel>
        {props.description && <FormDescription>{props.description}</FormDescription>}
      </div>
      <FormControl>
        <Switch checked={props.field.value} onCheckedChange={props.field.onChange} />
      </FormControl>
    </FormItem>
  );
}
