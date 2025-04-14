import { ControllerRenderProps } from 'react-hook-form';

import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';

interface SliderWithLabelProps {
  label: string;
  minValue: number;
  maxValue: number;
  field: ControllerRenderProps<any>;
  step?: number;
  unit?: string;
}

export default function SliderWithLabel({ ...props }: SliderWithLabelProps) {
  return (
    <FormItem>
      <FormLabel className="text-base">
        {props.label}: {props.field.value} {props.unit}
      </FormLabel>
      <FormControl>
        <div className="w-full max-w-xl">
          <Slider
            {...props.field}
            value={[props.field.value]}
            onValueChange={(numbers) => {
              props.field.onChange(numbers[0]);
            }}
            min={props.minValue}
            max={props.maxValue}
            step={props.step ?? 1}
          />
          <div className="mt-1 flex items-center justify-between text-muted-foreground text-xs">
            <span>
              {props.minValue} {props.unit}
            </span>
            <span>
              {props.maxValue} {props.unit}
            </span>
          </div>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
