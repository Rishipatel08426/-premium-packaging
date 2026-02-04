import { CreateInquiryData, CreateInquiryVariables, GetMaterialOfferingsData, UpdateInquiryStatusData, UpdateInquiryStatusVariables, GetMyInquiriesData, GetMyInquiriesVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateInquiry(options?: useDataConnectMutationOptions<CreateInquiryData, FirebaseError, CreateInquiryVariables>): UseDataConnectMutationResult<CreateInquiryData, CreateInquiryVariables>;
export function useCreateInquiry(dc: DataConnect, options?: useDataConnectMutationOptions<CreateInquiryData, FirebaseError, CreateInquiryVariables>): UseDataConnectMutationResult<CreateInquiryData, CreateInquiryVariables>;

export function useGetMaterialOfferings(options?: useDataConnectQueryOptions<GetMaterialOfferingsData>): UseDataConnectQueryResult<GetMaterialOfferingsData, undefined>;
export function useGetMaterialOfferings(dc: DataConnect, options?: useDataConnectQueryOptions<GetMaterialOfferingsData>): UseDataConnectQueryResult<GetMaterialOfferingsData, undefined>;

export function useUpdateInquiryStatus(options?: useDataConnectMutationOptions<UpdateInquiryStatusData, FirebaseError, UpdateInquiryStatusVariables>): UseDataConnectMutationResult<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;
export function useUpdateInquiryStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateInquiryStatusData, FirebaseError, UpdateInquiryStatusVariables>): UseDataConnectMutationResult<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;

export function useGetMyInquiries(vars: GetMyInquiriesVariables, options?: useDataConnectQueryOptions<GetMyInquiriesData>): UseDataConnectQueryResult<GetMyInquiriesData, GetMyInquiriesVariables>;
export function useGetMyInquiries(dc: DataConnect, vars: GetMyInquiriesVariables, options?: useDataConnectQueryOptions<GetMyInquiriesData>): UseDataConnectQueryResult<GetMyInquiriesData, GetMyInquiriesVariables>;
