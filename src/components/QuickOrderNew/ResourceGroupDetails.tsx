import React, { useState, useEffect } from 'react';
import {
  X, Search, Calendar, Clock, Bookmark, Banknote, Wrench, ArrowLeft,
  FileText, BookmarkCheck,
  Plus,
  ChevronDown,
  List,
  LayoutGrid,
  MoreVertical,
  Package,
  AlertTriangle,
  Camera,
  MapPin,
  Link as LinkIcon,
  HousePlug, Box, BaggageClaim, Truck,
  CloudUpload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { DynamicPanel } from '@/components/DynamicPanel';
import { PanelConfig, PanelSettings } from '@/types/dynamicPanel';
import { Card } from '@/components/ui/card';
import { BillingDetailsPanel } from './BillingDetails';
import { toast } from 'sonner';
import PlanActIcon from './../../assets/images/planAct.png';
import { SideDrawer } from '../Common/SideDrawer';
import { PlanAndActualDetails } from './PlanAndActualDetails';
import { VerticalStepper } from "../Common/VerticalStepper";
import { ConfigurableButtonConfig } from '@/components/ui/configurable-button';
import { useNavigate } from 'react-router-dom';
import { DropdownButton } from '@/components/ui/dropdown-button';
import PlanAndActuals from './PlanAndActuals';
import BulkUpload from '@/components/QuickOrderNew/BulkUpload';
import jsonStore from '@/stores/jsonStore';
import { format } from 'date-fns';

interface ResourceGroupDetailsFormProps {
  isEditQuickOrder?: boolean
}

// const ResourceGroupDetailsForm = ({ open, onClose }: ResourceGroupDetailsFormProps) => {
export const ResourceGroupDetailsForm = ({ isEditQuickOrder }: ResourceGroupDetailsFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlanActualsOpen, setIsPlanActualsOpen] = useState(false);
  const [isPlanActualsVisible, setIsPlanActualsVisible] = useState(false);

  const handleProceedToNext = () => {
    setCurrentStep(2);
  };

  const handleFirstStep = () => {
    setCurrentStep(1);
    // Clear the flag so user can re-add plan/actuals
    localStorage.removeItem('planActualsSaved');
    setIsPlanActualsVisible(false);
  };

  const handleSecondStep = () => {
    setCurrentStep(2);
  };

  const bulkUploadFiles = () => {

  };

  const addPlanActuals = () => {

  };

  const handleSaveDetails = () => {
    // Only keep PascalCase keys for BasicDetails
    const newBasicDetails = Object.fromEntries(
      Object.entries(basicDetailsData).filter(([key]) =>
        ["Resource", "ResourceType", "ServiceType", "SubSericeType"].includes(key)
      )
    );
    // Only keep PascalCase keys for OperationalDetails
    if (operationalDetailsData) {
      const newOperationalDetails = Object.fromEntries(
        Object.entries({
          ...operationalDetailsData,
          FromDate: (operationalDetailsData as any).FromDate ? format((operationalDetailsData as any).FromDate, 'dd/MM/yyyy') : '',
          ToDate: (operationalDetailsData as any).ToDate ? format((operationalDetailsData as any).ToDate, 'dd/MM/yyyy') : '',
        }).filter(([key]) =>
          [
            "OperationalLocation",
            "DepartPoint",
            "ArrivalPoint",
            "FromDate",
            "FromTime",
            "ToDate",
            "ToTime",
            "Remarks"
          ].includes(key)
        )
      );
      jsonStore.setOperationalDetails(newOperationalDetails);
    }
    // Only keep PascalCase keys for BillingDetails
    if (billingDetailsData) {
      const newBillingDetails = Object.fromEntries(
        Object.entries({
          ...billingDetailsData,
        }).filter(([key]) =>
          [
            "DraftBillNo",
            "ContractPrice",
            "NetAmount",
            "BillingType",
            "UnitPrice",
            "BillingQty",
            "Tariff",
            "TariffType",
            "Remarks",
            "InteralOrder"
          ].includes(key)
        )
      );
      jsonStore.setBillingDetails(newBillingDetails);
    }
    // Save to store
    jsonStore.setBasicDetails(newBasicDetails);
    // jsonStore.setBillingDetails(newBillingDetails);
    const fullJson = jsonStore.getJsonData();
    console.log("FULL JSON :: ", fullJson);
    toast.success('Details saved successfully');
  };
  
  // Utility to normalize keys from store to config field IDs
  function normalizeBasicDetails(data) {
    return {
      Resource: data.Resource,
      ResourceType: data.ResourceType,
      ServiceType: data.ServiceType,
      SubSericeType: data.SubSericeType, // fix typo if needed
    };
  }

  function normalizeOperationalDetails(data) {
    if (data)
      return {
        OperationalLocation: data.OperationalLocation,
        DepartPoint: data.DepartPoint,
        ArrivalPoint: data.ArrivalPoint,
        FromDate: (data.FromDate ? parseDDMMYYYY(data.FromDate) : ""),
        FromTime: data.FromTime,
        ToDate: (data.ToDate ? parseDDMMYYYY(data.ToDate) : ""),
        ToTime: data.ToTime,
        Remarks: data.Remarks,
      };
  }
  const parseDDMMYYYY = (dateStr) => {
    // Expects dateStr in 'DD/MM/YYYY'
    const [day, month, year] = dateStr.split('/').map(Number);
    // JS Date: months are 0-based
    return new Date(year, month - 1, day);
  }

  function normalizeBillingDetails(data) {
    return {
      DraftBillNo: data.DraftBillNo,
      ContractPrice: data.ContractPrice,
      NetAmount: data.NetAmount,
      // BillingType: data.BillingType,
      UnitPrice: data.UnitPrice,
      BillingQty: data.BillingQty,
      Tariff: data.Tariff,
      TariffType: data.TariffType,
      Remarks: data.Remarks,
      InteralOrder: data.InteralOrder
    };
  }

  const getInitialBasicDetails = () =>
    isEditQuickOrder
      ? normalizeBasicDetails(jsonStore.getBasicDetails() || {})
      : {};

  const getInitialOperationalDetails = () =>
    isEditQuickOrder
      ? normalizeOperationalDetails(jsonStore.getOperationalDetails() || {})
      : {};

  const getInitialBillingDetails = () =>
    isEditQuickOrder
      ? normalizeBillingDetails(jsonStore.getBillingDetails() || {})
      : {};

  const [basicDetailsData, setBasicDetailsData] = useState(getInitialBasicDetails);
  const [operationalDetailsData, setOperationalDetailsData] = useState(getInitialOperationalDetails);
  const [billingDetailsData, setBillingDetailsData] = useState(getInitialBillingDetails);

  // Panel titles state
  const [basicDetailsTitle, setBasicDetailsTitle] = useState('Basic Details');
  const [operationalDetailsTitle, setOperationalDetailsTitle] = useState('Operational Details');
  const [billingDetailsTitle, setBillingDetailsTitle] = useState('Billing Details');

  // Panel visibility state
  const [basicDetailsVisible, setBasicDetailsVisible] = useState(true);
  const [operationalDetailsVisible, setOperationalDetailsVisible] = useState(true);
  const [billingDetailsVisible, setBillingDetailsVisible] = useState(true);

  // Basic Details Panel Configuration
  const basicDetailsConfig: PanelConfig = {
    Resource: {
      id: 'Resource',
      label: 'Resource',
      fieldType: 'select',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 2,
      options: [
        { label: 'Vehicle', value: 'Vehicle' },
        { label: 'Equipment', value: 'Equipment' },
        { label: 'Material', value: 'Material' },
        { label: 'Other', value: 'Other' }
      ]
    },
    ResourceType: {
      id: 'ResourceType',
      label: 'Resource Type',
      fieldType: 'select',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      options: [
        { label: 'Truck 4.2', value: 'Truck 4.2' },
        { label: 'Truck 4.5', value: 'Truck 4.5' },
        { label: 'Truck 5.2', value: 'truck-5.2' },
      ]
    },
    ServiceType: {
      id: 'ServiceType',
      label: 'Service Type',
      fieldType: 'select',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 4,
      options: [
        { label: 'Block Train Conventional', value: 'Block Train Conventional' },
        { label: 'Block Train Convention', value: 'Block Train Convention' },
      ]
    },
    SubSericeType: {
      id: 'SubSericeType',
      label: 'Sub-Service',
      fieldType: 'select',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      options: [
        { label: 'Repair', value: 'Repair' },
        { label: 'Maintenance', value: 'Maintenance' },
        { label: 'Other', value: 'Other' }
      ]
    }
  };

  // Operational Details Panel Configuration
  const operationalDetailsConfig: PanelConfig = {
    OperationalLocation: {
      id: 'OperationalLocation',
      label: 'Operational Location',
      fieldType: 'search',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 1,
      placeholder: 'Search operational location...'
    },
    DepartPoint: {
      id: 'DepartPoint',
      label: 'Departure Point',
      fieldType: 'select',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 2,
      options: [
        { label: '10-000471', value: '10-000471' },
        { label: '10-000481', value: '10-000481' },
        { label: '10-000491', value: '10-000491' }
      ]
    },
    ArrivalPoint: {
      id: 'ArrivalPoint',
      label: 'Arrival Point',
      fieldType: 'select',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      options: [
        { label: '10-000720', value: '10-000720' },
        { label: '10-000721', value: '10-000721' },
        { label: '10-000722', value: '10-000722' }
      ]
    },
    FromDate: {
      id: 'FromDate',
      label: 'From Date',
      fieldType: 'date',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 4
    },
    FromTime: {
      id: 'FromTime',
      label: 'From Time',
      fieldType: 'time',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 5
    },
    ToDate: {
      id: 'ToDate',
      label: 'To Date',
      fieldType: 'date',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 6
    },
    ToTime: {
      id: 'ToTime',
      label: 'To Time',
      fieldType: 'time',
      width: 'third',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 7
    },
    Remarks: {
      id: 'Remarks',
      label: 'Remarks',
      fieldType: 'text',
      width: 'two-thirds',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 8
    },
  };

  // Billing Details Panel Configuration
  const billingDetailsConfig: PanelConfig = {
    ContractPrice: {
      id: 'ContractPrice',
      label: 'Contract Price',
      fieldType: 'card',
      value: '€ 1200.00',
      mandatory: false,
      visible: true,
      editable: true,
      order: 1,
      width: 'half',
      color: '#10b981', // Emerald green background
      fieldColour: '#047857' // Dark emerald text
    },
    NetAmount: {
      id: 'NetAmount',
      label: 'Net Amount',
      fieldType: 'card',
      value: '€ 5580.00',
      mandatory: false,
      visible: true,
      editable: true,
      order: 2,
      width: 'half',
      color: '#8b5cf6', // Purple background
      fieldColour: '#6d28d9' // Dark purple text
    },
    BillingType: {
      id: 'BillingType',
      label: 'Billing Type',
      fieldType: 'select',
      value: 'Wagon',
      mandatory: true,
      visible: true,
      editable: true,
      order: 3,
      width: 'full',
      options: [
        { label: 'Wagon', value: 'Wagon' },
        { label: 'Container', value: 'Container' },
        { label: 'Block', value: 'Block' }
      ]
    },
    UnitPrice: {
      id: 'UnitPrice',
      label: 'Unit Price',
      fieldType: 'inputDropdown',
      width: 'half',
      value: { dropdown: '', input: '1395.00' },
      mandatory: false,
      visible: true,
      editable: true,
      order: 4,
      options: [
        { label: '€', value: '€' },
        { label: '$', value: '$' },
        { label: '£', value: '£' }
      ]
    },
    BillingQty: {
      id: 'BillingQty',
      label: 'Billing Qty.',
      fieldType: 'text',
      value: '4',
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      width: 'half',
    },
    Tariff: {
      id: 'Tariff',
      label: 'Tariff',
      fieldType: 'search',
      value: 'TAR000750 - Tariff Description',
      mandatory: false,
      visible: true,
      editable: true,
      order: 6,
      placeholder: 'Search tariff...',
      width: 'full',
    },
    TariffType: {
      id: 'TariffType',
      label: 'Tariff Type',
      fieldType: 'text',
      value: 'Rate Per Block Train',
      mandatory: false,
      visible: true,
      editable: false,
      order: 7,
      width: 'full',
    },
    Remarks: {
      id: 'Remarks',
      label: 'Remarks',
      fieldType: 'text',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 8,
      placeholder: 'Enter Remarks',
      width: 'full',
    }
  };

  // Remove: const [billingData, setBillingData] = useState(jsonStore.getBillingDetails() || {})

  const [view, setView] = useState<"grid" | "list">("grid");

  // Mock functions for user config management
  const getUserPanelConfig = (userId: string, panelId: string): PanelSettings | null => {
    const stored = localStorage.getItem(`panel-config-${userId}-${panelId}`);
    return stored ? JSON.parse(stored) : null;
  };

  const saveUserPanelConfig = (userId: string, panelId: string, settings: PanelSettings): void => {
    localStorage.setItem(`panel-config-${userId}-${panelId}`, JSON.stringify(settings));
    console.log(`Saved config for panel ${panelId}:`, settings);
  };
  useEffect(() => {
    if (isEditQuickOrder) {
      setBasicDetailsData(normalizeBasicDetails(jsonStore.getBasicDetails() || {}));
      setOperationalDetailsData(normalizeOperationalDetails(jsonStore.getOperationalDetails() || {}));
      setBillingDetailsData(normalizeBillingDetails(jsonStore.getBillingDetails() || {}));
    } else {
      setBasicDetailsData({});
      setOperationalDetailsData({});
      setBillingDetailsData({});
    }
    const saved = localStorage.getItem('planActualsSaved');
    setIsPlanActualsVisible(saved === 'true');

  }, [isEditQuickOrder]);
  const steps = [
    {
      label: "Resource Group Creation",
      subLabel: " - ",
      count: 1,
      completed: true,
    },
    {
      label: "Plan and Actuals",
      subLabel: "Total Items : 0",
      count: 2,
      completed: false,
    },
  ];

  const setCurrentStepIndex = () => {
    setCurrentStep(1);
  };

  const navigate = useNavigate();
  // Configurable button for Create Order (with dropdown)
  const configurableButtons: ConfigurableButtonConfig[] = [
    {
      label: "Add New",
      tooltipTitle: "Add New",
      showDropdown: true,
      onClick: () => {
        setIsPlanActualsOpen(true);
      },
      dropdownItems: [
        {
          label: "Add New",
          icon: <Plus className="h-4 w-4" />,
          onClick: () => {
            setIsPlanActualsOpen(true);
          }
        },
        {
          label: "Bulk Upload",
          icon: <CloudUpload className="h-4 w-4" />,
          onClick: () => {
            setMoreInfoOpen(true);
          }
        }
      ]
    }
  ];

  const [isMoreInfoOpen, setMoreInfoOpen] = useState(false);



  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="">
      <div className="flex h-full">
        {/* Left Side - Stepper and Main Content */}
        <div className="flex-1 flex">
          {/* Vertical Stepper */}
          <VerticalStepper
            steps={steps}
            activeStep={currentStep}
            onStepClick={handleStepClick}
          />
          {/*<div className="w-64 p-6 border-r min-h-[500px]">
            <div className="">
              <div className="flex items-start space-x-3 cursor-pointer" onClick={handleFirstStep}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep === 1 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                  }`}>
                  1
                </div>
                <div className="flex-1">
                  <h3 className={`text-sm font-medium ${currentStep === 1 ? 'text-blue-600' : 'text-gray-900'}`}>
                    Resource Group Creation
                  </h3>
                  <p className={`text-xs ${currentStep === 1 ? 'text-blue-600' : 'text-gray-500'}`}>-</p>
                </div>
              </div>
              <div className="h-8 w-px bg-blue-600 mt-2 ml-4"></div>
              <div className="flex items-start space-x-3 cursor-pointer mt-2" onClick={handleSecondStep}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                  2
                </div>
                <div className="flex-1">
                  <h3 className={`text-sm font-medium ${currentStep === 2 ? 'text-blue-600' : 'text-gray-500'}`}>
                    Plan and Actuals
                  </h3>
                  <p className={`text-xs ${currentStep === 2 ? 'text-blue-600' : 'text-gray-500'}`}>Total Items: 0</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Main Content */}
          <div className="flex-1 bg-gray-50 px-6 py-4 w-4/5 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              {currentStep === 1 && (
                <>
                  <h2 className="text-lg font-semibold">Resource Group Creation</h2>
                  <div className="flex items-center gap-4">
                    <span className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100">
                      <BookmarkCheck className="w-5 h-5 text-gray-500 cursor-pointer" />
                    </span>
                    <span className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100">
                      <FileText className="w-5 h-5 text-gray-500 cursor-pointer" />
                    </span>
                  </div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <h2 className="text-lg font-semibold">Plan and Actuals</h2>
                  {isPlanActualsVisible &&
                    (<div className="flex items-center gap-2">
                      {/* Create Order Button with Dropdown */}
                      <DropdownButton config={configurableButtons[0]} />
                      <button className={`p-2 rounded ${view === "grid" ? "bg-blue-50" : ""}`} onClick={() => setView("grid")}> <LayoutGrid className={`w-5 h-5 ${view === "grid" ? "text-blue-600" : "text-gray-400"}`} /> </button>
                      <button className={`p-2 rounded ${view === "list" ? "bg-blue-50" : ""}`} onClick={() => setView("list")}> <List className={`w-5 h-5 ${view === "list" ? "text-blue-600" : "text-gray-400"}`} /> </button>
                    </div>
                    )}
                </>
              )}

            </div>

            {currentStep === 1 && (
              <div className="space-y-8">
                {/* Basic Details Section */}
                {/* <div className="grid grid-cols-12 gap-6"> */}
                <div className="flex gap-6">
                  <div className="w-3/5">
                    {basicDetailsVisible && (
                      <DynamicPanel
                        panelId="basic-details"
                        panelTitle={basicDetailsTitle}
                        panelIcon={<Wrench className="w-5 h-5 text-lime-500" />}
                        panelConfig={basicDetailsConfig}
                        initialData={basicDetailsData}
                        onDataChange={(updatedData) => setBasicDetailsData(prev => ({ ...prev, ...updatedData }))}
                        onTitleChange={setBasicDetailsTitle}
                        // onWidthChange={setBasicDetailsWidth}
                        getUserPanelConfig={getUserPanelConfig}
                        saveUserPanelConfig={saveUserPanelConfig}
                        userId="current-user"
                      // panelWidth={basicDetailsWidth}
                      />
                    )}

                    {operationalDetailsVisible && (
                      <DynamicPanel
                        panelId="operational-details"
                        panelTitle={operationalDetailsTitle}
                        panelIcon={<Bookmark className="w-5 h-5 text-blue-500" />}
                        panelConfig={operationalDetailsConfig}
                        initialData={operationalDetailsData}
                        onDataChange={(updatedData) => setOperationalDetailsData(prev => ({ ...prev, ...updatedData }))}
                        onTitleChange={setOperationalDetailsTitle}
                        // onWidthChange={setOperationalDetailsWidth}
                        getUserPanelConfig={getUserPanelConfig}
                        saveUserPanelConfig={saveUserPanelConfig}
                        userId="current-user"
                      // panelWidth={operationalDetailsWidth}
                      />
                    )}
                  </div>

                  <div className="w-2/5 mb-6">
                    <div className="space-y-6">
                      <DynamicPanel
                        panelId="billing-snippets"
                        panelTitle={billingDetailsTitle}
                        panelIcon={<Banknote className="w-5 h-5 text-orange-500" />}
                        panelConfig={billingDetailsConfig}
                        initialData={billingDetailsData}
                        onDataChange={(updatedData) => setBillingDetailsData(prev => ({ ...prev, ...updatedData }))}
                        panelWidth="full"
                        panelSubTitle={true}
                      />
                    </div>

                  </div>

                </div>

              </div>
            )}

            {currentStep === 2 && (
              <>
                {!isPlanActualsVisible && (
                  <div className="rounded-lg px-8 py-10 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <img src={PlanActIcon} alt='Add' className="w-20 h-20" />
                    </div>
                    <p className="text-gray-500 text-center mb-6 text-sm">
                      There are no items of plan and actuals available. Please click 'Add' instead.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setMoreInfoOpen(true)} className="h-8 my-2 rounded border-blue-600 text-blue-600 hover:bg-blue-50">
                        Bulk Upload
                      </Button>
                      <Button onClick={() => setIsPlanActualsOpen(true)} className="h-8 my-2 bg-blue-600 rounded hover:bg-blue-700">
                        Add Plan or Actuals
                      </Button>
                    </div>
                  </div>
                )}
                {isPlanActualsVisible && (
                  <div className="">
                    <PlanAndActuals view={view} />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="mt-2 w-full z-50 bg-white border-t border-gray-300 flex justify-end space-x-3 absolute bottom-0 px-8">
        {currentStep === 1 && (
          <Button variant="outline" onClick={handleProceedToNext} className="h-8 my-2 rounded border-blue-600 text-blue-600 hover:bg-blue-50">
            Proceed to Next
          </Button>
        )}
        {currentStep === 2 && (
          <Button variant="outline" onClick={handleFirstStep} className="h-8 my-2 rounded border-blue-600 text-blue-600 hover:bg-blue-50">
            Back to Resource Group
          </Button>
        )}
        <Button onClick={handleSaveDetails} className="h-8 my-2 bg-blue-600 rounded hover:bg-blue-700">
          Save Details
        </Button>
      </div>

      {/* SideDrawer component */}
      <SideDrawer isOpen={isPlanActualsOpen} onClose={() => setIsPlanActualsOpen(false)} width='85%' title="Plan and Actual Details" isBack={false}>
        <div>
          <PlanAndActualDetails onCloseDrawer={() => setIsPlanActualsOpen(false)}></PlanAndActualDetails>
        </div>
      </SideDrawer>

      {/* Bulk upload component */}
      <SideDrawer isOpen={isMoreInfoOpen} onClose={() => setMoreInfoOpen(false)} width="50%" title="Add Files" isBack={false}>
        <div className="">
          <div className="mt-0 text-sm text-gray-600"><BulkUpload /></div>
        </div>
      </SideDrawer>
    </div>
  );
};

export default ResourceGroupDetailsForm;