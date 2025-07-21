import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { InputDropDown } from '../Common/InputDropDown';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Search, Clock } from 'lucide-react';
import { FieldConfig } from '@/types/dynamicPanel';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

interface FieldRendererProps {
  config: FieldConfig;
  value: any;
  onChange: (value: any) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  config,
  value,
  onChange
}) => {
  const { fieldType, editable, placeholder, options, inputType, color, fieldColour } = config;

  if (!editable) {
    return (
      <div className="text-xs text-gray-700 bg-gray-50 p-2 rounded border min-h-[32px] flex items-center">
        {value || '-'}
      </div>
    );
  }
useEffect(()=>{
  // console.log("VALUE IN FIELD RENDER : ",value)
})
  const [orderDate, setOrderDate] = useState<Date>();

  const baseInputClasses = "h-10 text-xs border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  switch (fieldType) {
    case 'text':
      return (
        <Input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseInputClasses}
        />
      );

    case 'textarea':
      return (
        <Textarea   
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="min-h-[60px] text-xs border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      );

    case 'radio':
      return (
        <RadioGroup
          value={value || ''}
          onValueChange={onChange}
          className="flex gap-4"
        >
          {options?.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`${config.id}-${option.value}`} />
              <Label htmlFor={`${config.id}-${option.value}`} className="text-xs">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      );

    case 'select':
     const selectValue = value !== undefined && value !== null ? String(value).trim() : "";
      return (
        <div className="relative">
          <select
            value={selectValue}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-10 px-3 text-xs rounded-md border border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none"
          >
            <option value="">Select...</option>
            {options?.map((option) => (
              <option key={option.value} value={String(option.value).trim()}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      );

    case "date":
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal border-gray-300 relative",
                !value && "text-muted-foreground"
              )}
            >
              {value ? format(value, "dd/MM/yyyy") : "Select date"}
              <CalendarIcon className="mr-2 h-4 w-4 absolute right-1" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={value}
              onSelect={onChange}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
        // <div className="relative">
        //   <Input
        //     type="date"
        //     value={value || ''}
        //     onChange={(e) => onChange(e.target.value)}
        //     className={baseInputClasses}
        //   />
        //   <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
        // </div>
      );

    case 'time':
      return (
        <div className="relative">
          <Input
            type="time"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
          />
          <Clock className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
        </div>
      );

    case 'currency':
      return (
        <div className="relative">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">
            €
          </span>
          <Input
            type="number"
            value={value || ''}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            placeholder="0.00"
            className={`${baseInputClasses} pl-6`}
            step="0.01"
          />
        </div>
      );

      case 'inputDropdown':
        return (
          <InputDropDown
            label={config.label}
            dropdownOptions={options?.map(opt => opt.label) || []}
            selectedOption={value?.dropdown || ''}
            onOptionChange={dropdown =>
              onChange({ ...value, dropdown })
            }
            value={value?.input || ''}
            onValueChange={input =>
              onChange({ ...value, input })
            }
          />
        );

    case 'search':
      return (
        <div className="relative">
          <Input
            type="search"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || 'Search...'}
            className={`${baseInputClasses} pr-8`}
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
        </div>
      );

    case 'card':
      const cardStyle = color ? {
        background: `linear-gradient(135deg, ${color}20, ${color}10)`,
        borderColor: `${color}40`
      } : {};
      
      return (
        <div 
          className="border rounded-lg p-4 shadow-sm transition-all duration-200 hover:shadow-md"
          style={color ? cardStyle : {}}
        >
          <div className="text-sm font-medium text-muted-foreground mb-2">
            {config.label}
          </div>
          <div 
            className="text-lg font-bold"
            style={{ color: fieldColour || 'inherit' }}
          >
            {value || '€ 0.00'}
          </div>
        </div>
      );

    // ⭐ NEW COMBO FIELD (Select + Input)
    case "combo":
      return (
        <div className="flex w-full">
          <select
            className="w-1/4 h-10 px-3 text-xs border border-gray-300
               rounded-tl-md rounded-bl-md 
               rounded-tr-none rounded-br-none 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:z-10"
            value={value?.select || ''}
            onChange={(e) => onChange({ ...value, select: e.target.value })}
          >
            <option value="">Select...</option>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <Input
            type={inputType || 'text'}
            value={value?.input || ''}
            onChange={(e) => onChange({ ...value, input: e.target.value })}
            placeholder="Enter value"
            className="w-3/4 h-10 text-xs border border-gray-300 border-l-0
               rounded-tr-md rounded-br-md 
               rounded-tl-none rounded-bl-none
               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:z-10"
          />
        </div>
      );

    default:
      return (
        <Input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseInputClasses}
        />
      );
  }
};
