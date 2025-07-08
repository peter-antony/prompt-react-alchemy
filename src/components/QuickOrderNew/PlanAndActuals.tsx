import { useState } from "react";
import { Truck, HousePlug, Box,BaggageClaim  } from "lucide-react";

import {
  Plus,
  ChevronDown,
  List,
  LayoutGrid,
  MoreVertical,
  Package,
  AlertTriangle,
  Camera,
  MapPin,
  Calendar,
  Link as LinkIcon,
} from "lucide-react";
import { VerticalStepper } from "../Common/VerticalStepper";
import React from "react";

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
export default function PlanAndActuals() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [tab, setTab] = useState<"planned" | "actuals">("planned");

  const steps = [
    {
      label: "Resource Group Creation",
      subLabel: "R01 - Wagon Rentals",
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

  return (
    <div className="flex min-h-screen bg-[#f8fafd]">
      {/* Left Stepper */}
      {/* <VerticalStepper steps={steps} activeStep={1} /> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-8 pt-8">
          <div className="text-lg font-semibold text-gray-800">Plan and Actuals</div>
          <div className="flex items-center gap-2">
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
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
  );
} 