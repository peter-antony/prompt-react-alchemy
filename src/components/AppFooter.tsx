
import React from 'react';
import { Settings, Printer } from 'lucide-react';

export const AppFooter: React.FC = () => {
  return (
    <footer className="h-12 w-96 bg-white border-t border-gray-200 flex items-center justify-between px-6 fixed bottom-0">
      <div className="flex items-center">
        {/* <button className="w-9 h-9 bg-white-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-300">
          <Printer size={16} className="text-gray-600" />
        </button> */}
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="px-4 py-2 text-sm text-red-200 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors">
          Cancel
        </button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground px-4 py-2 h-8 my-2 rounded border-blue-600 text-blue-600 hover:bg-blue-50">
          Save Draft
        </button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground px-4 py-2 h-8 my-2 bg-blue-200 rounded hover:bg-blue-700">
          Confirm
        </button>
      </div>
    </footer>
  );
};