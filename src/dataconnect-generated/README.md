# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMaterialOfferings*](#getmaterialofferings)
  - [*GetMyInquiries*](#getmyinquiries)
- [**Mutations**](#mutations)
  - [*CreateInquiry*](#createinquiry)
  - [*UpdateInquiryStatus*](#updateinquirystatus)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMaterialOfferings
You can execute the `GetMaterialOfferings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMaterialOfferings(): QueryPromise<GetMaterialOfferingsData, undefined>;

interface GetMaterialOfferingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMaterialOfferingsData, undefined>;
}
export const getMaterialOfferingsRef: GetMaterialOfferingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMaterialOfferings(dc: DataConnect): QueryPromise<GetMaterialOfferingsData, undefined>;

interface GetMaterialOfferingsRef {
  ...
  (dc: DataConnect): QueryRef<GetMaterialOfferingsData, undefined>;
}
export const getMaterialOfferingsRef: GetMaterialOfferingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMaterialOfferingsRef:
```typescript
const name = getMaterialOfferingsRef.operationName;
console.log(name);
```

### Variables
The `GetMaterialOfferings` query has no variables.
### Return Type
Recall that executing the `GetMaterialOfferings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMaterialOfferingsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetMaterialOfferings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMaterialOfferings } from '@dataconnect/generated';


// Call the `getMaterialOfferings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMaterialOfferings();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMaterialOfferings(dataConnect);

console.log(data.materialOfferings);

// Or, you can use the `Promise` API.
getMaterialOfferings().then((response) => {
  const data = response.data;
  console.log(data.materialOfferings);
});
```

### Using `GetMaterialOfferings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMaterialOfferingsRef } from '@dataconnect/generated';


// Call the `getMaterialOfferingsRef()` function to get a reference to the query.
const ref = getMaterialOfferingsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMaterialOfferingsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.materialOfferings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.materialOfferings);
});
```

## GetMyInquiries
You can execute the `GetMyInquiries` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyInquiries(vars: GetMyInquiriesVariables): QueryPromise<GetMyInquiriesData, GetMyInquiriesVariables>;

interface GetMyInquiriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMyInquiriesVariables): QueryRef<GetMyInquiriesData, GetMyInquiriesVariables>;
}
export const getMyInquiriesRef: GetMyInquiriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyInquiries(dc: DataConnect, vars: GetMyInquiriesVariables): QueryPromise<GetMyInquiriesData, GetMyInquiriesVariables>;

interface GetMyInquiriesRef {
  ...
  (dc: DataConnect, vars: GetMyInquiriesVariables): QueryRef<GetMyInquiriesData, GetMyInquiriesVariables>;
}
export const getMyInquiriesRef: GetMyInquiriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyInquiriesRef:
```typescript
const name = getMyInquiriesRef.operationName;
console.log(name);
```

### Variables
The `GetMyInquiries` query requires an argument of type `GetMyInquiriesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetMyInquiriesVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetMyInquiries` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyInquiriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetMyInquiries`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyInquiries, GetMyInquiriesVariables } from '@dataconnect/generated';

// The `GetMyInquiries` query requires an argument of type `GetMyInquiriesVariables`:
const getMyInquiriesVars: GetMyInquiriesVariables = {
  userId: ..., 
};

// Call the `getMyInquiries()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyInquiries(getMyInquiriesVars);
// Variables can be defined inline as well.
const { data } = await getMyInquiries({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyInquiries(dataConnect, getMyInquiriesVars);

console.log(data.inquiries);

// Or, you can use the `Promise` API.
getMyInquiries(getMyInquiriesVars).then((response) => {
  const data = response.data;
  console.log(data.inquiries);
});
```

### Using `GetMyInquiries`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyInquiriesRef, GetMyInquiriesVariables } from '@dataconnect/generated';

// The `GetMyInquiries` query requires an argument of type `GetMyInquiriesVariables`:
const getMyInquiriesVars: GetMyInquiriesVariables = {
  userId: ..., 
};

// Call the `getMyInquiriesRef()` function to get a reference to the query.
const ref = getMyInquiriesRef(getMyInquiriesVars);
// Variables can be defined inline as well.
const ref = getMyInquiriesRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyInquiriesRef(dataConnect, getMyInquiriesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.inquiries);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.inquiries);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateInquiry
You can execute the `CreateInquiry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createInquiry(vars: CreateInquiryVariables): MutationPromise<CreateInquiryData, CreateInquiryVariables>;

interface CreateInquiryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInquiryVariables): MutationRef<CreateInquiryData, CreateInquiryVariables>;
}
export const createInquiryRef: CreateInquiryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createInquiry(dc: DataConnect, vars: CreateInquiryVariables): MutationPromise<CreateInquiryData, CreateInquiryVariables>;

interface CreateInquiryRef {
  ...
  (dc: DataConnect, vars: CreateInquiryVariables): MutationRef<CreateInquiryData, CreateInquiryVariables>;
}
export const createInquiryRef: CreateInquiryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createInquiryRef:
```typescript
const name = createInquiryRef.operationName;
console.log(name);
```

### Variables
The `CreateInquiry` mutation requires an argument of type `CreateInquiryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateInquiryVariables {
  materialOfferingId: UUIDString;
  userId: UUIDString;
  inquiryType: string;
  message?: string | null;
  quantityRequested: number;
  status: string;
}
```
### Return Type
Recall that executing the `CreateInquiry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateInquiryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateInquiryData {
  inquiry_insert: Inquiry_Key;
}
```
### Using `CreateInquiry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createInquiry, CreateInquiryVariables } from '@dataconnect/generated';

// The `CreateInquiry` mutation requires an argument of type `CreateInquiryVariables`:
const createInquiryVars: CreateInquiryVariables = {
  materialOfferingId: ..., 
  userId: ..., 
  inquiryType: ..., 
  message: ..., // optional
  quantityRequested: ..., 
  status: ..., 
};

// Call the `createInquiry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createInquiry(createInquiryVars);
// Variables can be defined inline as well.
const { data } = await createInquiry({ materialOfferingId: ..., userId: ..., inquiryType: ..., message: ..., quantityRequested: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createInquiry(dataConnect, createInquiryVars);

console.log(data.inquiry_insert);

// Or, you can use the `Promise` API.
createInquiry(createInquiryVars).then((response) => {
  const data = response.data;
  console.log(data.inquiry_insert);
});
```

### Using `CreateInquiry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createInquiryRef, CreateInquiryVariables } from '@dataconnect/generated';

// The `CreateInquiry` mutation requires an argument of type `CreateInquiryVariables`:
const createInquiryVars: CreateInquiryVariables = {
  materialOfferingId: ..., 
  userId: ..., 
  inquiryType: ..., 
  message: ..., // optional
  quantityRequested: ..., 
  status: ..., 
};

// Call the `createInquiryRef()` function to get a reference to the mutation.
const ref = createInquiryRef(createInquiryVars);
// Variables can be defined inline as well.
const ref = createInquiryRef({ materialOfferingId: ..., userId: ..., inquiryType: ..., message: ..., quantityRequested: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createInquiryRef(dataConnect, createInquiryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.inquiry_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.inquiry_insert);
});
```

## UpdateInquiryStatus
You can execute the `UpdateInquiryStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateInquiryStatus(vars: UpdateInquiryStatusVariables): MutationPromise<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;

interface UpdateInquiryStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInquiryStatusVariables): MutationRef<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;
}
export const updateInquiryStatusRef: UpdateInquiryStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateInquiryStatus(dc: DataConnect, vars: UpdateInquiryStatusVariables): MutationPromise<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;

interface UpdateInquiryStatusRef {
  ...
  (dc: DataConnect, vars: UpdateInquiryStatusVariables): MutationRef<UpdateInquiryStatusData, UpdateInquiryStatusVariables>;
}
export const updateInquiryStatusRef: UpdateInquiryStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateInquiryStatusRef:
```typescript
const name = updateInquiryStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateInquiryStatus` mutation requires an argument of type `UpdateInquiryStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateInquiryStatusVariables {
  id: UUIDString;
  status: string;
}
```
### Return Type
Recall that executing the `UpdateInquiryStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateInquiryStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateInquiryStatusData {
  inquiry_update?: Inquiry_Key | null;
}
```
### Using `UpdateInquiryStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateInquiryStatus, UpdateInquiryStatusVariables } from '@dataconnect/generated';

// The `UpdateInquiryStatus` mutation requires an argument of type `UpdateInquiryStatusVariables`:
const updateInquiryStatusVars: UpdateInquiryStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateInquiryStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateInquiryStatus(updateInquiryStatusVars);
// Variables can be defined inline as well.
const { data } = await updateInquiryStatus({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateInquiryStatus(dataConnect, updateInquiryStatusVars);

console.log(data.inquiry_update);

// Or, you can use the `Promise` API.
updateInquiryStatus(updateInquiryStatusVars).then((response) => {
  const data = response.data;
  console.log(data.inquiry_update);
});
```

### Using `UpdateInquiryStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateInquiryStatusRef, UpdateInquiryStatusVariables } from '@dataconnect/generated';

// The `UpdateInquiryStatus` mutation requires an argument of type `UpdateInquiryStatusVariables`:
const updateInquiryStatusVars: UpdateInquiryStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateInquiryStatusRef()` function to get a reference to the mutation.
const ref = updateInquiryStatusRef(updateInquiryStatusVars);
// Variables can be defined inline as well.
const ref = updateInquiryStatusRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateInquiryStatusRef(dataConnect, updateInquiryStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.inquiry_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.inquiry_update);
});
```

