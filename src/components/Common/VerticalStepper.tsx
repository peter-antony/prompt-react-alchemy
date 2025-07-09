import React from "react";

interface Step {
  label: string;
  subLabel?: string;
  active?: boolean;
  completed?: boolean;
  count?: number;
  color?: string;
}

interface VerticalStepperProps {
  steps: Step[];
  activeStep: number;
}

export const VerticalStepper: React.FC<VerticalStepperProps> = ({ steps, activeStep }) => {
  return (
    <div className="flex flex-col gap-0 py-8 px-6 w-72 bg-white border-r min-h-screen">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-start gap-3 relative">
          <div className="flex flex-col items-center">
            <div className={
              `w-8 h-8 rounded-full flex items-center justify-center font-bold text-base z-10 ` +
              (idx < activeStep ? "bg-green-500 text-white" : idx === activeStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400")
            }>
              {step.count ?? idx + 1}
            </div>
            {/* Connecting line except for last step */}
            {idx !== steps.length - 1 && (
              <div className="mt-4 mb-3 w-0.5 flex-1 bg-blue-500" style={{ minHeight: '32px', marginTop: '-2px' }} />
            )}
          </div>
          <div className="pt-1">
            <div className={
              `font-medium ` +
              (idx === activeStep ? "text-blue-700" : "text-gray-800")
            }>
              {step.label}
            </div>
            {step.subLabel && (
              <div className={
                `text-xs ` +
                (idx === activeStep ? "text-blue-400" : "text-gray-400")
              }>
                {step.subLabel}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}; 