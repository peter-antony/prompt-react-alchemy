let jsonData: any = null;

function setJsonData(data: any) {
  jsonData = data;
}

function getJsonData() {
  return jsonData;
}

function getQuickOrder() {
  if (jsonData && jsonData.ResponseResult) {
    return jsonData.ResponseResult.QuickOrder;
  }
  return undefined;
}

function setQuickOrder(data: any) {
  if (jsonData && jsonData.ResponseResult) {
    jsonData.ResponseResult.QuickOrder = data;
    return true;
  }
  return false;
}

const jsonStore = {
  setJsonData,
  getJsonData,
  getQuickOrder,
  setQuickOrder,
};

export default jsonStore; 