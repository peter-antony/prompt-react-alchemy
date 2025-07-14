import { User, FileText, Calendar, Bookmark, Search, Filter, Camera } from "lucide-react";

const orders = [
  {
    type: "C",
    typeColor: "bg-purple-100 text-purple-600",
    action: "Sell",
    id: "IO/0000000042",
    contract: "CON000000439",
    company: "XYZ Manufacturer Pvt. Ltd.",
    customerNo: "CUS4343200/01",
    amount: "€ 45595.00",
    orderNo: "QO0382000/32",
    date: "12-Mar-2025",
  },
  {
    type: "S",
    typeColor: "bg-red-100 text-red-500",
    action: "Buy",
    id: "IO/0000000042",
    contract: "CON000000439",
    company: "XYZ Manufacturer Pvt. Ltd.",
    customerNo: "CUS4343200/01",
    amount: "€ 45595.00",
    orderNo: "QO0382000/32",
    date: "12-Mar-2025",
  },
  {
    type: "S",
    typeColor: "bg-red-100 text-red-500",
    action: "Buy",
    id: "IO/0000000042",
    contract: "CON000000439",
    company: "XYZ Manufacturer Pvt. Ltd.",
    customerNo: "CUS4343200/01",
    amount: "€ 45595.00",
    orderNo: "QO0382000/32",
    date: "12-Mar-2025",
  },
  {
    type: "C",
    typeColor: "bg-purple-100 text-purple-600",
    action: "Buy",
    id: "IO/0000000042",
    contract: "CON000000439",
    company: "XYZ Manufacturer Pvt. Ltd.",
    customerNo: "CUS4343200/01",
    amount: "€ 45595.00",
    orderNo: "QO0382000/32",
    date: "12-Mar-2025",
  },
  {
    type: "S",
    typeColor: "bg-purple-100 text-purple-600",
    action: "Sell",
    id: "IO/0000000042",
    contract: "CON000000439",
    company: "XYZ Manufacturer Pvt. Ltd.",
    customerNo: "CUS4343200/01",
    amount: "€ 45595.00",
    orderNo: "QO0382000/38",
    date: "15-Apr-2025",
  },
];

export default function LinkedOrders() {
  return (
    <div className="bg-[#f8fafd] min-h-screen p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
        <div>
          <span className="text-lg font-semibold text-gray-800">Total Net Amount</span>
          <span className="ml-4 bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200 text-sm font-medium cursor-pointer" style={{ fontSize: "11px"}}>Customer <span className="font-bold  rounded-full bg-white">€ 45595.00</span></span>
          <span className="ml-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200 text-sm font-medium cursor-pointer" style={{ fontSize: "11px"}}>Supplier <span className="font-bold  rounded-full bg-white">€ 45595.00</span></span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded border-gray-300 pl-3 pr-3 py-2 text-sm"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" />
          </div>
          <button className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100">
            <Filter className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border p-3 min-h-[200px] flex flex-col gap-4">
            <div className="flex items-center justify-between gap-1">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${order.typeColor}`}>
                {order.type}
              </div>
              <div className="ml-2 flex-1">
                <span className="font-semibold text-gray-800 text-sm">{order.id}</span>
                <div className="text-xs text-gray-400">{order.contract}</div>
              </div>
              <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full border border-gray-300 text-xs font-medium">{order.action}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <User className="w-4 h-4 text-gray-400" />
              <span>{order.company}</span>
            </div>
            <div className="flex items-center gap-6 w-full text-sm text-gray-700">
              <div className="flex items-center gap-1 w-1/2">
                <FileText className="w-4 h-4 text-gray-400" />
                <span>{order.customerNo}</span>
              </div>
              <div className="flex items-center gap-1 w-1/2">
                <Camera className="w-4 h-4 text-gray-400" />
                <span>{order.amount}</span>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full text-sm text-gray-700">
              <div className="flex items-center gap-1 w-1/2">
                <Bookmark className="w-4 h-4 text-gray-400" />
                <span>{order.orderNo}</span>
              </div>
              <div className="flex items-center gap-1 w-1/2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{order.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 