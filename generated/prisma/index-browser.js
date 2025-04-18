
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AgentScalarFieldEnum = {
  AgentId: 'AgentId',
  AwsId: 'AwsId',
  UserRoleId: 'UserRoleId'
};

exports.Prisma.BasecountryScalarFieldEnum = {
  BaseCountryID: 'BaseCountryID',
  BaseCountryName: 'BaseCountryName'
};

exports.Prisma.CurrencyScalarFieldEnum = {
  CurrencyId: 'CurrencyId',
  CurrencyCode: 'CurrencyCode'
};

exports.Prisma.CustomerScalarFieldEnum = {
  CustomerId: 'CustomerId',
  Name: 'Name',
  Email: 'Email',
  ManyChatId: 'ManyChatId',
  ExpireDate: 'ExpireDate',
  UserCountry: 'UserCountry',
  ContactLink: 'ContactLink',
  AgentId: 'AgentId',
  CardID: 'CardID'
};

exports.Prisma.CustomerauditlogsScalarFieldEnum = {
  LogId: 'LogId',
  AgentId: 'AgentId',
  FieldChanged: 'FieldChanged',
  OldValue: 'OldValue',
  NewValue: 'NewValue',
  CustomerId: 'CustomerId',
  ChangeDate: 'ChangeDate'
};

exports.Prisma.ExchangeratesScalarFieldEnum = {
  ExchangeRateId: 'ExchangeRateId',
  BaseCountryId: 'BaseCountryId',
  CurrencyId: 'CurrencyId',
  ExchangeRate: 'ExchangeRate',
  CreateAt: 'CreateAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.FormstatusScalarFieldEnum = {
  FormStatusID: 'FormStatusID',
  TransactionID: 'TransactionID',
  TransactionStatusID: 'TransactionStatusID'
};

exports.Prisma.FormvisibilitystatusScalarFieldEnum = {
  VisibilityStatusId: 'VisibilityStatusId',
  AgentId: 'AgentId',
  IsFormOpen: 'IsFormOpen',
  FormTimeStamp: 'FormTimeStamp'
};

exports.Prisma.FundraiserScalarFieldEnum = {
  FundraiserID: 'FundraiserID',
  FundraiserName: 'FundraiserName',
  FundraiserEmail: 'FundraiserEmail',
  FundraiserLogo: 'FundraiserLogo',
  BaseCountryID: 'BaseCountryID',
  FundraiserCentralID: 'FundraiserCentralID'
};

exports.Prisma.Fundraiser_acceptedcurrenciesScalarFieldEnum = {
  FundraiserAcceptedCurrencyID: 'FundraiserAcceptedCurrencyID',
  FundraiserID: 'FundraiserID',
  CurrencyID: 'CurrencyID'
};

exports.Prisma.Fundraiser_contactlinksScalarFieldEnum = {
  ContactID: 'ContactID',
  FundraiserID: 'FundraiserID',
  Platform: 'Platform',
  ContactURL: 'ContactURL'
};

exports.Prisma.ManychatScalarFieldEnum = {
  ManyChatId: 'ManyChatId',
  ConversationId: 'ConversationId',
  CustomerId: 'CustomerId',
  CreateAt: 'CreateAt',
  UpdateAt: 'UpdateAt'
};

exports.Prisma.MinimumamountScalarFieldEnum = {
  MinimumAmountId: 'MinimumAmountId',
  CurrencyId: 'CurrencyId',
  Amount: 'Amount',
  CreateAt: 'CreateAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.NoteScalarFieldEnum = {
  NoteID: 'NoteID',
  Note: 'Note',
  Date: 'Date',
  AgentID: 'AgentID'
};

exports.Prisma.PlatformScalarFieldEnum = {
  PlatformID: 'PlatformID',
  PlatformName: 'PlatformName'
};

exports.Prisma.ScreenshotScalarFieldEnum = {
  ScreenShotID: 'ScreenShotID',
  TransactionID: 'TransactionID',
  ScreenShotLink: 'ScreenShotLink'
};

exports.Prisma.SupportregionScalarFieldEnum = {
  SupportRegionID: 'SupportRegionID',
  Region: 'Region'
};

exports.Prisma.TransactionagentScalarFieldEnum = {
  TransactionAgentID: 'TransactionAgentID',
  TransactionID: 'TransactionID',
  AgentID: 'AgentID',
  LogDate: 'LogDate'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  TransactionID: 'TransactionID',
  CustomerID: 'CustomerID',
  SupportRegionID: 'SupportRegionID',
  WalletID: 'WalletID',
  Amount: 'Amount',
  PaymentCheck: 'PaymentCheck',
  PaymentCheckTime: 'PaymentCheckTime',
  NoteID: 'NoteID',
  TransactionDate: 'TransactionDate',
  PaymentDenied: 'PaymentDenied',
  Month: 'Month',
  HopeFuelID: 'HopeFuelID'
};

exports.Prisma.TransactionstatusScalarFieldEnum = {
  TransactionStatusID: 'TransactionStatusID',
  TransactionStatus: 'TransactionStatus'
};

exports.Prisma.UserroleScalarFieldEnum = {
  UserRoleID: 'UserRoleID',
  UserRole: 'UserRole'
};

exports.Prisma.WalletScalarFieldEnum = {
  WalletId: 'WalletId',
  CurrencyId: 'CurrencyId',
  WalletName: 'WalletName'
};

exports.Prisma.Testing_new_tableScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.Testing_new_table2ScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.agentOrderByRelevanceFieldEnum = {
  AwsId: 'AwsId'
};

exports.Prisma.basecountryOrderByRelevanceFieldEnum = {
  BaseCountryName: 'BaseCountryName'
};

exports.Prisma.currencyOrderByRelevanceFieldEnum = {
  CurrencyCode: 'CurrencyCode'
};

exports.Prisma.customerOrderByRelevanceFieldEnum = {
  Name: 'Name',
  Email: 'Email',
  ManyChatId: 'ManyChatId',
  UserCountry: 'UserCountry',
  ContactLink: 'ContactLink'
};

exports.Prisma.customerauditlogsOrderByRelevanceFieldEnum = {
  OldValue: 'OldValue',
  NewValue: 'NewValue'
};

exports.Prisma.fundraiserOrderByRelevanceFieldEnum = {
  FundraiserName: 'FundraiserName',
  FundraiserEmail: 'FundraiserEmail',
  FundraiserLogo: 'FundraiserLogo'
};

exports.Prisma.fundraiser_contactlinksOrderByRelevanceFieldEnum = {
  ContactURL: 'ContactURL'
};

exports.Prisma.manychatOrderByRelevanceFieldEnum = {
  ConversationId: 'ConversationId'
};

exports.Prisma.noteOrderByRelevanceFieldEnum = {
  Note: 'Note'
};

exports.Prisma.platformOrderByRelevanceFieldEnum = {
  PlatformName: 'PlatformName'
};

exports.Prisma.screenshotOrderByRelevanceFieldEnum = {
  ScreenShotLink: 'ScreenShotLink'
};

exports.Prisma.supportregionOrderByRelevanceFieldEnum = {
  Region: 'Region'
};

exports.Prisma.transactionstatusOrderByRelevanceFieldEnum = {
  TransactionStatus: 'TransactionStatus'
};

exports.Prisma.userroleOrderByRelevanceFieldEnum = {
  UserRole: 'UserRole'
};

exports.Prisma.walletOrderByRelevanceFieldEnum = {
  WalletName: 'WalletName'
};

exports.Prisma.testing_new_tableOrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.testing_new_table2OrderByRelevanceFieldEnum = {
  Name: 'Name'
};
exports.customerauditlogs_FieldChanged = exports.$Enums.customerauditlogs_FieldChanged = {
  Name: 'Name',
  Email: 'Email',
  UserCountry: 'UserCountry'
};

exports.Prisma.ModelName = {
  agent: 'agent',
  basecountry: 'basecountry',
  currency: 'currency',
  customer: 'customer',
  customerauditlogs: 'customerauditlogs',
  exchangerates: 'exchangerates',
  formstatus: 'formstatus',
  formvisibilitystatus: 'formvisibilitystatus',
  fundraiser: 'fundraiser',
  fundraiser_acceptedcurrencies: 'fundraiser_acceptedcurrencies',
  fundraiser_contactlinks: 'fundraiser_contactlinks',
  manychat: 'manychat',
  minimumamount: 'minimumamount',
  note: 'note',
  platform: 'platform',
  screenshot: 'screenshot',
  supportregion: 'supportregion',
  transactionagent: 'transactionagent',
  transactions: 'transactions',
  transactionstatus: 'transactionstatus',
  userrole: 'userrole',
  wallet: 'wallet',
  testing_new_table: 'testing_new_table',
  testing_new_table2: 'testing_new_table2'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
