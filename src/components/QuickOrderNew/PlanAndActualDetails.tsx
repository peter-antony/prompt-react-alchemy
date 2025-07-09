import React, { useState } from "react";
import {
  X,
  Search,
  Calendar,
  Clock,
  Bookmark,
  Banknote,
  Wrench,
  BookmarkCheck,
  FileText,
  Expand,
  Bus,
  Container,
  Package,
  BaggageClaim,
  CalendarCheck,
  Info,
  Plus,
  WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { DynamicPanel } from "@/components/DynamicPanel";
import { PanelConfig, PanelSettings } from "@/types/dynamicPanel";
import { BillingDetailsPanel } from "./BillingDetails";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { SimpleDropDown } from "../Common/SimpleDropDown";

export const PlanAndActualDetails: React.FC<any> = ({ onCloseDrawer }) => {
  let currentStep = 1;
  const [planType, setPlanType] = useState("plan");
  const [isOpen, setIsOpen] = useState(false);
  const [basicDetailsVisible, setBasicDetailsVisible] = useState(true);
  const [operationalDetailsVisible, setOperationalDetailsVisible] =
    useState(true);
  const [billingDetailsVisible, setBillingDetailsVisible] = useState(true);

  const [basicDetailsTitle, setBasicDetailsTitle] = useState("Wagon Details");
  const [containerDetailsTitle, setContainerDetailsTitle] =
    useState("Container Details");
  const [productDetailsTitle, setProductDetailsTitle] =
    useState("Product Details");
  const [thuDetailsTitle, setTHUDetailsTitle] = useState("THU Details");
  const [journeyDetailsTitle, setJourneyDetailsTitle] = useState(
    "Journey and Scheduling Details"
  );
  const [otherDetailsTitle, setOtherDetailsTitle] = useState("Other Details");
  const [operationalDetailsTitle, setOperationalDetailsTitle] = useState(
    "Operational Details"
  );
  const [billingDetailsTitle, setBillingDetailsTitle] =
    useState("Billing Details");
  const [basicDetailsData, setBasicDetailsData] = useState({});
  const [containerDetailsData, setContainerDetailsData] = useState({});
  const [productDetailsData, setProductDetailsData] = useState({});
  const [thuDetailsData, setTHUDetailsData] = useState({});
  const [journeyDetailsData, setJourneyDetailsData] = useState({});
  const [otherDetailsData, setOtherDetailsData] = useState({});
  const [operationalDetailsData, setOperationalDetailsData] = useState({});
  const [billingDetailsData, setBillingDetailsData] = useState({});
  // Mock functions for user config management
  const getUserPanelConfig = (
    userId: string,
    panelId: string
  ): PanelSettings | null => {
    const stored = localStorage.getItem(`panel-config-${userId}-${panelId}`);
    return stored ? JSON.parse(stored) : null;
  };

  const saveUserPanelConfig = (
    userId: string,
    panelId: string,
    settings: PanelSettings
  ): void => {
    localStorage.setItem(
      `panel-config-${userId}-${panelId}`,
      JSON.stringify(settings)
    );
    console.log(`Saved config for panel ${panelId}:`, settings);
  };

  const handleSavePlanActuals = () => {
    onCloseDrawer();
  }
  const [billingData, setBillingData] = useState({
    billingDetail: "DB00023/42",
    contractPrice: 1200.0,
    netAmount: 5580.0,
    billingType: "Wagon",
    unitPrice: 1395.0,
    billingQty: 4,
    tariff: "TAR000750 - Tariff Description",
    tariffType: "Rate Per Block Train",
    remarks: "",
  });

  // Basic Details Panel Configuration
  const basicDetailsConfig: PanelConfig = {
    wagonType: {
      id: "wagonType",
      label: "Wagon Type",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Select Type",
      order: 1,
      options: [{ label: "Other", value: "other" }],
    },
    wagonID: {
      id: "wagonID",
      label: "Wagon ID",
      fieldType: "text",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Enter ID",
      order: 2,
    },
    wagonQuantity: {
      id: "wagonQuantity",
      label: "Wagon Quantity",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      options: [
        { label: "Vehicle", value: "vehicle" },
        { label: "Equipment", value: "equipment" },
      ],
    },
    wagonTareWeight: {
      id: "wagonTareWeight",
      label: "Wagon Tare Weight",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 4,
      options: [
        { label: "Truck 4.2", value: "truck-4.2" },
        { label: "Truck 4.5", value: "truck-4.5" },
        { label: "Truck 5.2", value: "truck-5.2" },
      ],
    },
    wagonGrossWeight: {
      id: "wagonGrossWeight",
      label: "Wagon Gross Weight",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      options: [
        {
          label: "Block Train Conventional",
          value: "Block Train Conventional",
        },
        { label: "Block Train Convention", value: "Block Train Convention" },
      ],
    },
    wagonLength: {
      id: "wagonLength",
      label: "Wagon Length",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 6,
      options: [
        { label: "Repair", value: "repair" },
        { label: "Maintenance", value: "maintenance" },
        { label: "Other", value: "other" },
      ],
    },
    wagonSequence: {
      id: "wagonSequence",
      label: "Wagon Sequence",
      fieldType: "text",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 7,
      placeholder: "Enter Wagon Sequence",
    },
  };

  // Container Details Panel Configuration
  const containerDetailsConfig: PanelConfig = {
    containerType: {
      id: "containerType",
      label: "Container Type",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Select Type",
      order: 1,
      options: [{ label: "Other", value: "other" }],
    },
    containerID: {
      id: "containerID",
      label: "Container ID",
      fieldType: "text",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Enter ID",
      order: 2,
    },
    containerQuantity: {
      id: "containerQuantity",
      label: "Container Quantity",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      options: [
        { label: "Vehicle", value: "vehicle" },
        { label: "Equipment", value: "equipment" },
      ],
    },
    containerTareWeight: {
      id: "containerTareWeight",
      label: "Container Tare Weight",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 4,
      options: [
        { label: "Truck 4.2", value: "truck-4.2" },
        { label: "Truck 4.5", value: "truck-4.5" },
        { label: "Truck 5.2", value: "truck-5.2" },
      ],
    },
    containerLoadWeight: {
      id: "containerLoadWeight",
      label: "Container Load Weight",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      options: [
        {
          label: "Block Train Conventional",
          value: "Block Train Conventional",
        },
        { label: "Block Train Convention", value: "Block Train Convention" },
      ],
    },
  };
  // Product Details Panel Configuration
  const productDetailsConfig: PanelConfig = {
    nhm: {
      id: "nhm",
      label: "NHM",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Select NHM",
      order: 1,
      options: [{ label: "NHM", value: "NHM" }],
    },
    productID: {
      id: "productID",
      label: "Product ID",
      fieldType: "text",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Wheat Muslin",
      order: 2,
    },
    productQuantity: {
      id: "productQuantity",
      label: "Product Quantity",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      options: [
        { label: "Vehicle", value: "vehicle" },
        { label: "Equipment", value: "equipment" },
      ],
    },
    classOfStores: {
      id: "classOfStores",
      label: "Container Tare Weight",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 4,
      placeholder: "Select Class of Stores",
      options: [
        { label: "Truck 4.2", value: "truck-4.2" },
        { label: "Truck 4.5", value: "truck-4.5" },
        { label: "Truck 5.2", value: "truck-5.2" },
      ],
    },
    unCode: {
      id: "unCode",
      label: "UN Code",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      placeholder: "Select UN Code",
      options: [
        { label: "Block Train Convention", value: "Block Train Convention" },
      ],
    },
    dgClass: {
      id: "dgClass",
      label: "DG Class",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      placeholder: "Select Class",
      options: [
        { label: "Block Train Convention", value: "Block Train Convention" },
      ],
    },
  };
  // THU Details Panel Configuration
  const thuDetailsConfig: PanelConfig = {
    thuID: {
      id: "thuID",
      label: "THU ID",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Select THU ID",
      order: 1,
      options: [{ label: "THU", value: "THU" }],
    },
    thuSerialNo: {
      id: "thuSerialNo",
      label: "THU Serial No.",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Select THU Serial No.",
      order: 2,
    },
    thuQuantity: {
      id: "thuQuantity",
      label: "THU Quantity",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      options: [
        { label: "Vehicle", value: "vehicle" },
        { label: "Equipment", value: "equipment" },
      ],
    },
    thuWeight: {
      id: "thuWeight",
      label: "THU Weight",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      placeholder: "Select Class",
      options: [
        { label: "Block Train Convention", value: "Block Train Convention" },
      ],
    },
  };
  // journey & scheduling Details Panel Configuration
  const journeyDetailsConfig: PanelConfig = {
    departure: {
      id: "departure",
      label: "Departure",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Select THU ID",
      order: 1,
      options: [{ label: "Departure", value: "Departure" }],
    },
    arrival: {
      id: "arrival",
      label: "Arrival",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Select THU Serial No.",
      order: 2,
      options: [{ label: "Arrival", value: "Arrival" }],
    },
    activityLocation: {
      id: "activityLocation",
      label: "Activity Location",
      fieldType: "search",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      placeholder: "Search Location",
    },
    activity: {
      id: "activity",
      label: "Activity",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      placeholder: "Select Activity",
      options: [{ label: "Loading", value: "Loading" }],
    },
    plannedDateAndTime: {
      id: "plannedDateAndTime",
      label: "Planned Date and Time",
      fieldType: "date",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 6,
      placeholder: "10-Mar-2025",
    },
    revisedDateAndTime: {
      id: "revisedDateAndTime",
      label: "Rev. Planned Date and Time",
      fieldType: "date",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 7,
      placeholder: "10-Mar-2025",
    },
    trainNo: {
      id: "trainNo",
      label: "Train No.",
      fieldType: "text",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 8,
      placeholder: "Enter Train No.",
    },
    loadType: {
      id: "loadType",
      label: "Load Type",
      fieldType: "radio",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 9,
    },
  };
  // other Details Panel Configuration
  const otherDetailsConfig: PanelConfig = {
    departure: {
      id: "departure",
      label: "Departure",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Select THU ID",
      order: 1,
      options: [{ label: "Departure", value: "Departure" }],
    },
    arrival: {
      id: "arrival",
      label: "Arrival",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      placeholder: "Select THU Serial No.",
      order: 2,
      options: [{ label: "Arrival", value: "Arrival" }],
    },
    activityLocation: {
      id: "activityLocation",
      label: "Activity Location",
      fieldType: "search",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      placeholder: "Search Location",
    },
    activity: {
      id: "activity",
      label: "Activity",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      placeholder: "Select Activity",
      options: [{ label: "Loading", value: "Loading" }],
    },
    plannedDateAndTime: {
      id: "plannedDateAndTime",
      label: "Planned Date and Time",
      fieldType: "date",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 6,
      placeholder: "10-Mar-2025",
    },
    revisedDateAndTime: {
      id: "revisedDateAndTime",
      label: "Rev. Planned Date and Time",
      fieldType: "date",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 7,
      placeholder: "10-Mar-2025",
    },
    trainNo: {
      id: "trainNo",
      label: "Train No.",
      fieldType: "text",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 8,
      placeholder: "Enter Train No.",
    },
    loadType: {
      id: "loadType",
      label: "Load Type",
      fieldType: "radio",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 9,
    },
  };

  // Operational Details Panel Configuration
  const operationalDetailsConfig: PanelConfig = {
    operationalLocation: {
      id: "operationalLocation",
      label: "Operational Location",
      fieldType: "search",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 1,
      placeholder: "Search operational location...",
    },
    departurePoint: {
      id: "departurePoint",
      label: "Departure Point",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 2,
      options: [
        { label: "10-000471", value: "10-000471" },
        { label: "10-000481", value: "10-000481" },
        { label: "10-000491", value: "10-000491" },
      ],
    },
    arrivalPoint: {
      id: "arrivalPoint",
      label: "Arrival Point",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
      options: [
        { label: "10-000720", value: "10-000720" },
        { label: "10-000721", value: "10-000721" },
        { label: "10-000722", value: "10-000722" },
      ],
    },
    fromDate: {
      id: "fromDate",
      label: "From Date",
      fieldType: "date",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 4,
    },
    fromTime: {
      id: "fromTime",
      label: "From Time",
      fieldType: "time",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
    },
    toDate: {
      id: "toDate",
      label: "To Date",
      fieldType: "date",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 6,
    },
    toTime: {
      id: "toTime",
      label: "To Time",
      fieldType: "time",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 7,
    },
    remarks: {
      id: "remarks",
      label: "Remarks",
      fieldType: "text",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 8,
    },
  };

  // Billing Details Panel Configuration
  const billingDetailsConfig: PanelConfig = {
    totalAmount: {
      id: "totalAmount",
      label: "Total Amount",
      fieldType: "currency",
      value: "",
      mandatory: true,
      visible: true,
      editable: true,
      order: 1,
    },
    taxAmount: {
      id: "taxAmount",
      label: "Tax Amount",
      fieldType: "currency",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 2,
    },
    discountAmount: {
      id: "discountAmount",
      label: "Discount Amount",
      fieldType: "currency",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 3,
    },
    billingStatus: {
      id: "billingStatus",
      label: "Billing Status",
      fieldType: "select",
      value: "",
      mandatory: true,
      visible: true,
      editable: true,
      order: 4,
      options: [
        { label: "Draft", value: "draft" },
        { label: "Pending", value: "pending" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" },
      ],
    },
    paymentTerms: {
      id: "paymentTerms",
      label: "Payment Terms",
      fieldType: "select",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 5,
      options: [
        { label: "Net 30", value: "net-30" },
        { label: "Net 60", value: "net-60" },
        { label: "Due on Receipt", value: "due-on-receipt" },
      ],
    },
    invoiceDate: {
      id: "invoiceDate",
      label: "Invoice Date",
      fieldType: "date",
      value: "",
      mandatory: false,
      visible: true,
      editable: true,
      order: 6,
    },
  };
  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };
  const resourceGroups = [
    {
      id: 1,
      name: "R01 - Wagon Rentals",
      seqNo: 1, // Optional
      default: "Y", // Optional
      description: "R01 - Wagon Rentals", // Optional
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    // Handle input change logic here
    console.log(`Field: ${field}, Value: ${value}`);
  };

  return (
    <>
      <div className="flex h-full">
        {/* Left Side - Stepper and Main Content */}
        <div className="flex-1 flex">
          {/* Vertical Stepper */}
          <div className="w-80 p-6 border-r min-h-[500px]">
            <div className="">
              <div className="flex flex-col items-start cursor-pointer gap-2">
                <div className="flex-1">
                  <h3 className={`text-sm font-medium`}>Resource Group</h3>
                </div>
                <div className="w-full">
                  <SimpleDropDown
                    list={resourceGroups}
                    value={resourceGroups[0].description}
                    onValueChange={(value) =>
                      handleInputChange("resourceGroup", value)
                    }
                  />
                </div>
              </div>
              {/* <div className="h-8 w-px bg-blue-600 mt-2 ml-4"></div> */}
            </div>
            <div className="mt-6 mb-6">
              <hr />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">All Item</h2>
              <div className="flex items-center gap-4">
                <button className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100">
                  <WandSparkles className="w-5 h-5 text-gray-500" />
                </button>
                <button className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100">
                  <Plus className="w-5 h-5 text-gray-500 cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Input type="text" placeholder="--" value={'--'} readOnly/>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gray-50 px-6 py-4 h-full overflow-y-auto">
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: "1.5rem" }}
            >
              {currentStep === 1 && (
                <div className="flex flex-col gap-4">
                  <h2 className="text-lg font-semibold">
                    What would you like to enter details?
                  </h2>
                  <div>
                    <RadioGroup
                      value={planType}
                      onValueChange={setPlanType}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="plan" id="plan" />
                        <Label htmlFor="plan" className="cursor-pointer">Plan Details</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="actual" id="actual" />
                        <Label htmlFor="actual" className="cursor-pointer">Actual Details</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}
              <div className="flex gap-4">
                <span className="bg-blue-600 rounded-lg p-3 hover:bg-blue-700 cursor-pointer">
                  <Expand className="w-4 h-4 text-white" />
                </span>
              </div>
            </div>
            {currentStep === 1 && (
              <div className="space-y-8">
                {/* Basic Details Section */}
                {/* <div className="grid grid-cols-12 gap-6"> */}
                <div className="flex gap-6">
                  <div className="w-full">
                    {basicDetailsVisible && (
                      <DynamicPanel
                        panelId="basic-details"
                        panelTitle={basicDetailsTitle}
                        panelIcon={<Bus className="w-5 h-5 text-green-600" />}
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

                    {containerDetailsConfig && (
                      <DynamicPanel
                        panelId="container-details"
                        panelTitle="Container Details"
                        panelIcon={
                          <Container className="w-5 h-5 text-purple-600" />
                        }
                        panelConfig={containerDetailsConfig}
                        initialData={containerDetailsData}
                        onDataChange={setContainerDetailsData}
                        onTitleChange={setContainerDetailsTitle}
                        getUserPanelConfig={getUserPanelConfig}
                        saveUserPanelConfig={saveUserPanelConfig}
                        userId="current-user"
                      />
                    )}

                    {productDetailsConfig && (
                      <DynamicPanel
                        panelId="product-details"
                        panelTitle="Product Details"
                        panelIcon={<Package className="w-5 h-5 text-red-600" />}
                        panelConfig={productDetailsConfig}
                        initialData={productDetailsData}
                        onDataChange={setProductDetailsData}
                        onTitleChange={setProductDetailsTitle}
                        getUserPanelConfig={getUserPanelConfig}
                        saveUserPanelConfig={saveUserPanelConfig}
                        userId="current-user"
                      />
                    )}

                    {thuDetailsConfig && (
                      <DynamicPanel
                        panelId="thu-details"
                        panelTitle="THU Details"
                        panelIcon={
                          <BaggageClaim className="w-5 h-5 text-green-500" />
                        }
                        panelConfig={thuDetailsConfig}
                        initialData={thuDetailsData}
                        onDataChange={setTHUDetailsData}
                        onTitleChange={setTHUDetailsTitle}
                        getUserPanelConfig={getUserPanelConfig}
                        saveUserPanelConfig={saveUserPanelConfig}
                        userId="current-user"
                      />
                    )}

                    {journeyDetailsConfig && (
                      <DynamicPanel
                        panelId="journey-details"
                        panelTitle="Journey and Scheduling Details"
                        panelIcon={
                          <CalendarCheck
                            className="w-5 h-5"
                            style={{ color: "#00BCD4" }}
                          />
                        }
                        panelConfig={journeyDetailsConfig}
                        initialData={journeyDetailsData}
                        onDataChange={setJourneyDetailsData}
                        onTitleChange={setJourneyDetailsTitle}
                        getUserPanelConfig={getUserPanelConfig}
                        saveUserPanelConfig={saveUserPanelConfig}
                        userId="current-user"
                      />
                    )}

                    {otherDetailsConfig && (
                      <DynamicPanel
                        panelId="other-details"
                        panelTitle="Other Details"
                        panelIcon={
                          <Info
                            className="w-5 h-5"
                            style={{ color: "brown" }}
                          />
                        }
                        panelConfig={otherDetailsConfig}
                        initialData={otherDetailsData}
                        onDataChange={setOtherDetailsData}
                        onTitleChange={setOtherDetailsTitle}
                        getUserPanelConfig={getUserPanelConfig}
                        saveUserPanelConfig={saveUserPanelConfig}
                        userId="current-user"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="mt-2 w-full bg-white border-t flex justify-end space-x-3 absolute bottom-0 px-8">
        {/* {currentStep === 1 && ( */}
        {planType === "plan" && (
          <Button
            variant="outline"
            className="h-8 my-2 rounded border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Convert Plan to Actuals
          </Button>
        )}
        {/* )} */}
        <Button className="h-8 my-2 bg-blue-600 rounded hover:bg-blue-700" onClick={handleSavePlanActuals}>
          Save {planType == "plan" ? "Plan" : "Actual"} Details
        </Button>
      </div>
    </>
  );
};
