import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateInquiryData {
  inquiry_insert: Inquiry_Key;
}

export interface CreateInquiryVariables {
  materialOfferingId: UUIDString;
  userId: UUIDString;
  inquiryType: string;
  message?: string | null;
  quantityRequested: number;
  status: string;
}

export interface GetMaterialOfferingsData {
  materialOfferings: ({
    id: UUIDString;
    material?: {
      name: string;
      description: string;
    };
      supplier?: {
        companyName: string;
        location: string;
      };
        unitPrice: number;
        minOrderQuantity: number;
  } & MaterialOffering_Key)[];
}

export interface GetMyInquiriesData {
  inquiries: ({
    id: UUIDString;
    materialOffering?: {
      id: UUIDString;
      material?: {
        name: string;
      };
    } & MaterialOffering_Key;
      createdAt: TimestampString;
      inquiryType: string;
      message?: string | null;
      quantityRequested?: number | null;
      status: string;
  } & Inquiry_Key)[];
}

export interface GetMyInquiriesVariables {
  userId: UUIDString;
}

export interface Inquiry_Key {
  id: UUIDString;
  __typename?: 'Inquiry_Key';
}

export interface MaterialOffering_Key {
  id: UUIDString;
  __typename?: 'MaterialOffering_Key';
}

export interface Material_Key {
  id: UUIDString;
  __typename?: 'Material_Key';
}

export interface Supplier_Key {
  id: UUIDString;
  __typename?: 'Supplier_Key';
}

export interface UpdateInquiryStatusData {
  inquiry_update?: Inquiry_Key | null;
}

export interface UpdateInquiryStatusVariables {
  id: UUIDString;
  status: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateInquiryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInquiryVariables): MutationRef<CreateInquiryData, CreateInquiryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInquiryVariables): MutationRef<CreateInquiryData, CreateInquiryVariables>;
  operationName: string;
}
export const createInquiryRef: CreateInquiryRef;

export function createInquiry(vars: CreateInquiryVariables): MutationPromise<CreateInquiryData, CreateInquiryVariables>;
export function createInquiry(dc: DataConnect, vars: CreateInquiryVariables): MutationPromise<CreateInquiryData, CreateInquiryVariables>;

interface GetMaterialOfferingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMaterialOfferingsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMaterialOfferingsData, undefined>;
  operationName: string;
}
export const getMaterialOfferingsRef: GetMaterialOfferingsRef;

export function getMaterialOfferings(): QueryPromise<GetMaterialOfferingsData, undefined>;
export function getMaterialOfferings(dc: DataConnect): QueryPromise<GetMaterialOfferingsData, undefined>;

interface UpdateInquiryStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInquiryStatusVariables): MutationRef<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateInquiryStatusVariables): MutationRef<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;
  operationName: string;
}
export const updateInquiryStatusRef: UpdateInquiryStatusRef;

export function updateInquiryStatus(vars: UpdateInquiryStatusVariables): MutationPromise<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;
export function updateInquiryStatus(dc: DataConnect, vars: UpdateInquiryStatusVariables): MutationPromise<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;

interface GetMyInquiriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMyInquiriesVariables): QueryRef<GetMyInquiriesData, GetMyInquiriesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMyInquiriesVariables): QueryRef<GetMyInquiriesData, GetMyInquiriesVariables>;
  operationName: string;
}
export const getMyInquiriesRef: GetMyInquiriesRef;

export function getMyInquiries(vars: GetMyInquiriesVariables): QueryPromise<GetMyInquiriesData, GetMyInquiriesVariables>;
export function getMyInquiries(dc: DataConnect, vars: GetMyInquiriesVariables): QueryPromise<GetMyInquiriesData, GetMyInquiriesVariables>;

