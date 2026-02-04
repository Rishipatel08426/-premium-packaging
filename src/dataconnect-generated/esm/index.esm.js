import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'premium-packaging',
  location: 'us-east4'
};

export const createInquiryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInquiry', inputVars);
}
createInquiryRef.operationName = 'CreateInquiry';

export function createInquiry(dcOrVars, vars) {
  return executeMutation(createInquiryRef(dcOrVars, vars));
}

export const getMaterialOfferingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMaterialOfferings');
}
getMaterialOfferingsRef.operationName = 'GetMaterialOfferings';

export function getMaterialOfferings(dc) {
  return executeQuery(getMaterialOfferingsRef(dc));
}

export const updateInquiryStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateInquiryStatus', inputVars);
}
updateInquiryStatusRef.operationName = 'UpdateInquiryStatus';

export function updateInquiryStatus(dcOrVars, vars) {
  return executeMutation(updateInquiryStatusRef(dcOrVars, vars));
}

export const getMyInquiriesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyInquiries', inputVars);
}
getMyInquiriesRef.operationName = 'GetMyInquiries';

export function getMyInquiries(dcOrVars, vars) {
  return executeQuery(getMyInquiriesRef(dcOrVars, vars));
}

