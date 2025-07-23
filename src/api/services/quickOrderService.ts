import { apiClient } from "../client";
import { API_ENDPOINTS } from "../config";
import { ApiResponse, FilterPreset, FilterPresetInput } from "../types";

export const quickOrderService = {
  fetchQuickOrders: async () => {
    const response = await apiClient.get(API_ENDPOINTS.QUICK_ORDERS.LIST);
    return response.data;
  }
};
