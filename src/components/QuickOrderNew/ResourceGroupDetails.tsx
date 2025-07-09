import React, { useState } from 'react';
import { X, Search, Calendar, Clock, Bookmark, Banknote, Wrench, ArrowLeft, 
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
  HousePlug, Box, BaggageClaim, Truck
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

// interface ResourceGroupDetailsFormProps {
//   open: boolean;
//   onClose: () => void;
// }

// const ResourceGroupDetailsForm = ({ open, onClose }: ResourceGroupDetailsFormProps) => {
export const ResourceGroupDetailsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlanActualsOpen, setIsPlanActualsOpen] = useState(false);


  const handleProceedToNext = () => {
    setCurrentStep(2);
  };

  const handleFirstStep = () => {
    setCurrentStep(1);
  };

  const handleSecondStep = () => {
    setCurrentStep(2);
  };

  const bulkUploadFiles = () => {

  };

  const addPlanActuals = () => {

  };

  const handleSaveDetails = () => {
    toast.success('Details saved successfully');
    console.log('Save details clicked');
  };

  const [basicDetailsData, setBasicDetailsData] = useState({});
  const [operationalDetailsData, setOperationalDetailsData] = useState({});
  const [billingDetailsData, setBillingDetailsData] = useState({});

  // Panel titles state
  const [basicDetailsTitle, setBasicDetailsTitle] = useState('Basic Details');
  const [operationalDetailsTitle, setOperationalDetailsTitle] = useState('Operational Details');
  const [billingDetailsTitle, setBillingDetailsTitle] = useState('Billing Details');

  // Panel widths state - updated for 12-column system
  // const [basicDetailsWidth, setBasicDetailsWidth] = useState<'full' | 'half' | 'third' | 'quarter' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>(12);
  // const [operationalDetailsWidth, setOperationalDetailsWidth] = useState<'full' | 'half' | 'third' | 'quarter' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>(6);
  // const [billingDetailsWidth, setBillingDetailsWidth] = useState<'full' | 'half' | 'third' | 'quarter' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>(6);

  // Panel visibility state
  const [basicDetailsVisible, setBasicDetailsVisible] = useState(true);
  const [operationalDetailsVisible, setOperationalDetailsVisible] = useState(true);
  const [billingDetailsVisible, setBillingDetailsVisible] = useState(true);

  // Basic Details Panel Configuration
  const basicDetailsConfig: PanelConfig = {
    resource: {
      id: 'resource',
      label: 'Resource',
      fieldType: 'select',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 2,
      options: [
        { label: 'Vehicle', value: 'vehicle' },
        { label: 'Equipment', value: 'equipment' },
        { label: 'Material', value: 'material' },
        { label: 'Other', value: 'other' }
      ]
    },
    resourceType: {
      id: 'resourceType',
      label: 'Resource Type',
      fieldType: 'select',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      options: [
        { label: 'Truck 4.2', value: 'truck-4.2' },
        { label: 'Truck 4.5', value: 'truck-4.5' },
        { label: 'Truck 5.2', value: 'truck-5.2' },
      ]
    },
    serviceType: {
      id: 'serviceType',
      label: 'Service Type',
      fieldType: 'select',
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
    subservice: {
      id: 'sub-service',
      label: 'Sub-Service',
      fieldType: 'select',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      options: [
        { label: 'Repair', value: 'repair' },
        { label: 'Maintenance', value: 'maintenance' },
        { label: 'Other', value: 'other' }
      ]
    }
  };

  // Operational Details Panel Configuration
  const operationalDetailsConfig: PanelConfig = {
    operationalLocation: {
      id: 'operationalLocation',
      label: 'Operational Location',
      fieldType: 'search',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 1,
      placeholder: 'Search operational location...'
    },
    departurePoint: {
      id: 'departurePoint',
      label: 'Departure Point',
      fieldType: 'select',
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
    arrivalPoint: {
      id: 'arrivalPoint',
      label: 'Arrival Point',
      fieldType: 'select',
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
    fromDate: {
      id: 'fromDate',
      label: 'From Date',
      fieldType: 'date',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 4
    },
    fromTime: {
      id: 'fromTime',
      label: 'From Time',
      fieldType: 'time',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 5
    },
    toDate: {
      id: 'toDate',
      label: 'To Date',
      fieldType: 'date',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 6
    },
    toTime: {
      id: 'toTime',
      label: 'To Time',
      fieldType: 'time',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 7
    },
    remarks: {
      id: 'remarks',
      label: 'Remarks',
      fieldType: 'text',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 8
    },
  };

  // Billing Details Panel Configuration
  const billingDetailsConfig: PanelConfig = {
    totalAmount: {
      id: 'totalAmount',
      label: 'Total Amount',
      fieldType: 'currency',
      value: '',
      mandatory: true,
      visible: true,
      editable: true,
      order: 1
    },
    taxAmount: {
      id: 'taxAmount',
      label: 'Tax Amount',
      fieldType: 'currency',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 2
    },
    discountAmount: {
      id: 'discountAmount',
      label: 'Discount Amount',
      fieldType: 'currency',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 3
    },
    billingStatus: {
      id: 'billingStatus',
      label: 'Billing Status',
      fieldType: 'select',
      value: '',
      mandatory: true,
      visible: true,
      editable: true,
      order: 4,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' }
      ]
    },
    paymentTerms: {
      id: 'paymentTerms',
      label: 'Payment Terms',
      fieldType: 'select',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      options: [
        { label: 'Net 30', value: 'net-30' },
        { label: 'Net 60', value: 'net-60' },
        { label: 'Due on Receipt', value: 'due-on-receipt' }
      ]
    },
    invoiceDate: {
      id: 'invoiceDate',
      label: 'Invoice Date',
      fieldType: 'date',
      value: '',
      mandatory: false,
      visible: true,
      editable: true,
      order: 6
    }
  };

  const [billingData, setBillingData] = useState({
    billingDetail: "DB00023/42",
    contractPrice: 1200.00,
    netAmount: 5580.00,
    billingType: 'Wagon',
    unitPrice: 1395.00,
    billingQty: 4,
    tariff: 'TAR000750 - Tariff Description',
    tariffType: 'Rate Per Block Train',
    remarks: ''
  });

  const [view, setView] = useState<"grid" | "list">("grid");
  const [tab, setTab] = useState<"planned" | "actuals">("planned");

  const summaryStats = [
    {
      icon: <Truck  className="w-5 h-5 text-blue-500"/>, // Replace with your SVG or Lucide icon
      value: "12 Nos",
      label: "Wagon Quantity",
      bg: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: <HousePlug  className="w-5 h-5 text-purple-400"/>,
      value: "12 Nos",
      label: "Container Quantity",
      bg: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      icon: <Box  className="w-5 h-5 text-red-400"/>,
      value: "23 Ton",
      label: "Product Weight",
      bg: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: <BaggageClaim  className="w-5 h-5 text-teal-400"/>,
      value: "10 Nos",
      label: "THU Quantity",
      bg: "bg-teal-50",
      iconColor: "text-teal-500"
    }
  ];
  
  const plannedData = [
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Zaccs",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Habbins",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "A type Wagon",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    }, {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Habbins",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Closed Wagon",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
  ];
  const actualData = [
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Zaccs",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Zaccs",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Zaccs",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Zaccs",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Zaccs",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
    {
      icon: <Package className="w-7 h-7 text-teal-500" />,
      code: "WAG00000001",
      name: "Zaccs",
      warning: true,
      amount: "€ 1395.00",
      location: "Frankfurt Station A - Frankfurt Station B",
      date: "12-Mar-2025 to 12-Mar-2025",
      draftBill: "DB/0000234",
    },
  ];

  // Mock functions for user config management
  const getUserPanelConfig = (userId: string, panelId: string): PanelSettings | null => {
    const stored = localStorage.getItem(`panel-config-${userId}-${panelId}`);
    return stored ? JSON.parse(stored) : null;
  };

  const saveUserPanelConfig = (userId: string, panelId: string, settings: PanelSettings): void => {
    localStorage.setItem(`panel-config-${userId}-${panelId}`, JSON.stringify(settings));
    console.log(`Saved config for panel ${panelId}:`, settings);
  };

  return (
    <div className="">
      <div className="flex h-full">
        {/* Left Side - Stepper and Main Content */}
        <div className="flex-1 flex">
          {/* Vertical Stepper */}
          <div className="w-64 p-6 border-r min-h-[500px]">
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
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gray-50 px-6 py-4 h-full overflow-y-auto">
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
                <h2 className="text-lg font-semibold">Plan and Actuals</h2>
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
                        onDataChange={setBasicDetailsData}
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
                        onDataChange={setOperationalDetailsData}
                        onTitleChange={setOperationalDetailsTitle}
                        // onWidthChange={setOperationalDetailsWidth}
                        getUserPanelConfig={getUserPanelConfig}
                        saveUserPanelConfig={saveUserPanelConfig}
                        userId="current-user"
                      // panelWidth={operationalDetailsWidth}
                      />
                    )}
                  </div>

                  <div className="w-2/5 rounded-lg bg-card text-card-foreground col-span-12 border border-gray-200 shadow-sm mb-16">
                    {billingDetailsVisible && (
                      <BillingDetailsPanel
                        panelId="billing-details"
                        panelTitle={billingDetailsTitle}
                        panelIcon={<Banknote className="w-5 h-5 text-orange-500" />}
                        panelConfig={billingDetailsConfig}
                        initialData={billingData}
                        onDataChange={setBillingData}
                        onTitleChange={setBillingDetailsTitle}
                        getUserPanelConfig={getUserPanelConfig}
                        saveUserPanelConfig={saveUserPanelConfig}
                        userId="current-user"
                      />
                    )}
                  </div>

                </div>

              </div>
            )}

            {currentStep === 2 && (
              <>
                {/* <div className="rounded-lg p-8 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <img src={PlanActIcon} alt='Add' className="w-20 h-20" />
                  </div>
                  <p className="text-gray-500 text-center mb-6 text-sm">
                    There are no items of plan and actuals available. Please click 'Add' instead.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={bulkUploadFiles} className="h-8 my-2 rounded border-blue-600 text-blue-600 hover:bg-blue-50">
                      Bulk Upload
                    </Button>
                    <Button onClick={addPlanActuals} className="h-8 my-2 bg-blue-600 rounded hover:bg-blue-700">
                      Add Plan or Actuals
                    </Button>
                  </div>
                </div> */}

                <div className="">
                  <div className="flex-1 flex flex-col">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between px-8 pt-8">
                      <div className="text-lg font-semibold text-gray-800">Plan and Actuals</div>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
                          onClick={() => setIsPlanActualsOpen(true)}>
                          <Plus className="w-4 h-4 mr-2" /> Add New
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </button>
                        <button className={`p-2 rounded ${view === "grid" ? "bg-blue-50" : ""}`} onClick={() => setView("grid")}> <LayoutGrid className={`w-5 h-5 ${view === "grid" ? "text-blue-600" : "text-gray-400"}`} /> </button>
                        <button className={`p-2 rounded ${view === "list" ? "bg-blue-50" : ""}`} onClick={() => setView("list")}> <List className={`w-5 h-5 ${view === "list" ? "text-blue-600" : "text-gray-400"}`} /> </button>
                      </div>
                    </div>

                    {/* Tabs and Stats */}
                    <div className="px-4 mt-6">
                      <div className="flex gap-2 px-6 mb-4">
                        <div className="flex bg-gray-100 rounded-full w-fit p-1">
                          <button
                            className={`px-6 py-1 rounded-full font-medium text-sm transition-colors duration-200 ${tab === "planned"
                              ? "bg-blue-600 text-white shadow"
                              : "text-gray-500"
                              }`}
                            onClick={() => setTab("planned")}
                          >
                            Planned <span className={`ml-1 rounded-full px-2 ${tab === "planned" ? "bg-white text-blue-600" : ""}`}>1</span>
                          </button>
                          <button
                            className={`px-6 py-1 rounded-full font-medium text-sm transition-colors duration-200 ${tab === "actuals"
                              ? "bg-blue-600 text-white shadow"
                              : "text-gray-500"
                              }`}
                            onClick={() => setTab("actuals")}
                          >
                            Actuals <span className={`ml-1 rounded-full px-2 ${tab === "actuals" ? "bg-white text-blue-600" : ""}`}>0</span>
                          </button>
                        </div>
                      </div>
                      <div className="px-4 mt-8">
                        <div className="bg-white rounded-xl shadow-sm flex items-center px-4  py-4 mb-2 border border-gray-100">
                          {summaryStats.map((stat, i) => (
                            <React.Fragment key={i}>
                              <div className="flex items-center min-w-[220px] gap-4">
                                <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${stat.bg}`}>
                                  <span className={stat.iconColor}>{stat.icon}</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                  <div className="font-bold text-gray-900 text-base leading-tight">{stat.value}</div>
                                  <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
                                </div>
                              </div>
                              {i !== summaryStats.length - 1 && (
                                <div className="h-12 w-px bg-gray-200 mx-8" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card/List Content */}
                    <div className="px-8 mt-8">
                      {view === "grid" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {plannedData.map((card, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 max-w-md">
                              <div className="flex items-center mb-4 justify-between">
                                <div className="flex items-center">
                                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">{card.icon}</div>
                                  <div className="ml-4">
                                    <div className="font-bold text-gray-900 text-base">{card.code}</div>
                                    <div className="text-xs text-gray-400 font-medium mt-0.5">{card.name}</div>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  {card.warning && (
                                    <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                                  )}
                                  <MoreVertical className="w-5 h-5 text-gray-400" />
                                </div>
                              </div>
                              <div className="flex items-center text-gray-700 text-sm font-medium mb-2">
                                <Camera className="w-5 h-5 text-gray-400 mr-2" />
                                {card.amount}
                              </div>
                              <div className="flex items-center text-gray-700 text-sm font-medium mb-2">
                                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                                {card.location}
                              </div>
                              <div className="flex items-center text-gray-700 text-sm font-medium mb-2">
                                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                                {card.date}
                              </div>
                              <div className="flex items-center text-blue-600 text-sm font-medium">
                                <LinkIcon className="w-5 h-5 text-blue-400 mr-2" />
                                <span className="underline cursor-pointer">Draft Bill : {card.draftBill}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4">
                          {plannedData.map((card, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-center max-w-2xl">
                              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mr-6">{card.icon}</div>
                              <div className="flex-1">
                                <div className="font-bold text-gray-900 text-base">{card.code}</div>
                                <div className="text-xs text-gray-400 font-medium mt-0.5 flex items-center">
                                  {card.name}
                                  {card.warning && (
                                    <AlertTriangle className="w-5 h-5 text-orange-400 ml-2" />
                                  )}
                                  <MoreVertical className="w-5 h-5 text-gray-400 ml-2" />
                                </div>
                                <div className="flex items-center text-gray-700 text-sm font-medium mt-2">
                                  <Camera className="w-5 h-5 text-gray-400 mr-2" />
                                  {card.amount}
                                </div>
                                <div className="flex items-center text-gray-700 text-sm font-medium mt-2">
                                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                                  {card.location}
                                </div>
                                <div className="flex items-center text-gray-700 text-sm font-medium mt-2">
                                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                                  {card.date}
                                </div>
                                <div className="flex items-center text-blue-600 text-sm font-medium mt-2">
                                  <LinkIcon className="w-5 h-5 text-blue-400 mr-2" />
                                  <span className="underline cursor-pointer">Draft Bill : {card.draftBill}</span>
                                </div>
                              </div>
                              <div>
                                {card.warning && (
                                  <AlertTriangle className="w-5 h-5 text-orange-400 mb-2" />
                                )}
                                <MoreVertical className="w-5 h-5 text-gray-400" />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Buttons */}
                    <div className="flex justify-end gap-4 px-8 py-6 border-t bg-white mt-8">
                      <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium bg-white hover:bg-blue-50">
                        Back to Resource Group
                      </button>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
                        Save Details
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="mt-2 w-full bg-white border-t flex justify-end space-x-3 absolute bottom-0 px-8">
        {currentStep === 1 && (
          <Button variant="outline" onClick={handleProceedToNext} className="h-8 my-2 rounded border-blue-600 text-blue-600 hover:bg-blue-50">
            Proceed to Next
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
    </div>
  );
};

export default ResourceGroupDetailsForm;