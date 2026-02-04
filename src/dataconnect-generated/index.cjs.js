const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'premium-packaging',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createInquiryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInquiry', inputVars);
}
createInquiryRef.operationName = 'CreateInquiry';
exports.createInquiryRef = createInquiryRef;

exports.createInquiry = function createInquiry(dcOrVars, vars) {
  return executeMutation(createInquiryRef(dcOrVars, vars));
};

const getMaterialOfferingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMaterialOfferings');
}
getMaterialOfferingsRef.operationName = 'GetMaterialOfferings';
exports.getMaterialOfferingsRef = getMaterialOfferingsRef;

exports.getMaterialOfferings = function getMaterialOfferings(dc) {
  return executeQuery(getMaterialOfferingsRef(dc));
};

const updateInquiryStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateInquiryStatus', inputVars);
}
updateInquiryStatusRef.operationName = 'UpdateInquiryStatus';
exports.updateInquiryStatusRef = updateInquiryStatusRef;

exports.updateInquiryStatus = function updateInquiryStatus(dcOrVars, vars) {
  return executeMutation(updateInquiryStatusRef(dcOrVars, vars));
};

const getMyInquiriesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyInquiries', inputVars);
}
getMyInquiriesRef.operationName = 'GetMyInquiries';
exports.getMyInquiriesRef = getMyInquiriesRef;

exports.getMyInquiries = function getMyInquiries(dcOrVars, vars) {
  return executeQuery(getMyInquiriesRef(dcOrVars, vars));
};
