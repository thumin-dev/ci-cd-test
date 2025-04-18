
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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

exports.Prisma.Testing_new_table3ScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.Testing_new_table4ScalarFieldEnum = {
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

exports.Prisma.testing_new_table3OrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.testing_new_table4OrderByRelevanceFieldEnum = {
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
  testing_new_table2: 'testing_new_table2',
  testing_new_table3: 'testing_new_table3',
  testing_new_table4: 'testing_new_table4'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Thu Min\\Documents\\GitHub\\ci-cd-test\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Thu Min\\Documents\\GitHub\\ci-cd-test\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "mysql://root@127.0.0.1:3306/cicd_testing"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel agent {\n  AgentId              Int                    @id @default(autoincrement())\n  AwsId                String?                @db.VarChar(191)\n  UserRoleId           Int?\n  userrole             userrole?              @relation(fields: [UserRoleId], references: [UserRoleID], onDelete: Restrict, onUpdate: Restrict, map: \"agent_ibfk_1\")\n  customer             customer[]\n  customerauditlogs    customerauditlogs[]\n  formvisibilitystatus formvisibilitystatus[]\n  note                 note[]\n  transactionagent     transactionagent[]\n\n  @@index([UserRoleId], map: \"UserRoleId\")\n}\n\nmodel basecountry {\n  BaseCountryID   Int             @id @default(autoincrement())\n  BaseCountryName String          @unique(map: \"BaseCountryName\") @db.VarChar(191)\n  exchangerates   exchangerates[]\n  fundraiser      fundraiser[]\n}\n\nmodel currency {\n  CurrencyId                    Int                             @id @default(autoincrement())\n  CurrencyCode                  String?                         @db.VarChar(10)\n  exchangerates                 exchangerates[]\n  fundraiser_acceptedcurrencies fundraiser_acceptedcurrencies[]\n  minimumamount                 minimumamount[]\n  wallet                        wallet[]\n}\n\nmodel customer {\n  CustomerId        Int                 @id @default(autoincrement())\n  Name              String?             @db.VarChar(191)\n  Email             String?             @db.VarChar(191)\n  ManyChatId        String?             @db.VarChar(191)\n  ExpireDate        DateTime?           @db.Date\n  UserCountry       String?             @db.VarChar(191)\n  ContactLink       String?             @db.VarChar(191)\n  AgentId           Int?\n  CardID            Int?\n  agent             agent?              @relation(fields: [AgentId], references: [AgentId], onDelete: Restrict, onUpdate: Restrict, map: \"customer_ibfk_1\")\n  customerauditlogs customerauditlogs[]\n  manychat          manychat[]\n  transactions      transactions[]\n\n  @@index([AgentId], map: \"AgentId\")\n}\n\nmodel customerauditlogs {\n  LogId        Int                            @id @default(autoincrement())\n  AgentId      Int\n  FieldChanged customerauditlogs_FieldChanged\n  OldValue     String?                        @db.VarChar(191)\n  NewValue     String?                        @db.VarChar(191)\n  CustomerId   Int\n  ChangeDate   DateTime                       @default(now()) @db.Timestamp(0)\n  agent        agent                          @relation(fields: [AgentId], references: [AgentId], onDelete: Cascade, onUpdate: Restrict, map: \"fk_agent\")\n  customer     customer                       @relation(fields: [CustomerId], references: [CustomerId], onDelete: Cascade, onUpdate: Restrict, map: \"fk_customer\")\n\n  @@index([AgentId], map: \"fk_agent\")\n  @@index([CustomerId], map: \"fk_customer\")\n}\n\nmodel exchangerates {\n  ExchangeRateId Int         @id @default(autoincrement())\n  BaseCountryId  Int\n  CurrencyId     Int\n  ExchangeRate   Decimal     @db.Decimal(12, 5)\n  CreateAt       DateTime    @default(now()) @db.Timestamp(0)\n  UpdatedAt      DateTime    @default(now()) @db.Timestamp(0)\n  basecountry    basecountry @relation(fields: [BaseCountryId], references: [BaseCountryID], onDelete: Cascade, onUpdate: Restrict, map: \"fk_basecountry\")\n  currency       currency    @relation(fields: [CurrencyId], references: [CurrencyId], onDelete: Cascade, onUpdate: Restrict, map: \"fk_currency\")\n\n  @@index([BaseCountryId], map: \"fk_basecountry\")\n  @@index([CurrencyId], map: \"fk_currency\")\n}\n\nmodel formstatus {\n  FormStatusID        Int                @id @default(autoincrement())\n  TransactionID       Int?\n  TransactionStatusID Int?\n  transactions        transactions?      @relation(fields: [TransactionID], references: [TransactionID], onDelete: Restrict, onUpdate: Restrict, map: \"formstatus_ibfk_1\")\n  transactionstatus   transactionstatus? @relation(fields: [TransactionStatusID], references: [TransactionStatusID], onDelete: Restrict, onUpdate: Restrict, map: \"formstatus_ibfk_2\")\n\n  @@index([TransactionID], map: \"TransactionID\")\n  @@index([TransactionStatusID], map: \"TransactionStatusID\")\n}\n\nmodel formvisibilitystatus {\n  VisibilityStatusId Int      @id @default(autoincrement())\n  AgentId            Int\n  IsFormOpen         Boolean\n  FormTimeStamp      DateTime @default(now()) @db.Timestamp(0)\n  agent              agent    @relation(fields: [AgentId], references: [AgentId], onDelete: Cascade, onUpdate: Restrict, map: \"formvisibilitystatus_ibfk_1\")\n\n  @@index([AgentId], map: \"AgentId\")\n}\n\nmodel fundraiser {\n  FundraiserID                  Int                             @id @default(autoincrement())\n  FundraiserName                String                          @db.VarChar(191)\n  FundraiserEmail               String                          @unique(map: \"FundraiserEmail\") @db.VarChar(191)\n  FundraiserLogo                String?                         @db.VarChar(191)\n  BaseCountryID                 Int?\n  FundraiserCentralID           Int?\n  basecountry                   basecountry?                    @relation(fields: [BaseCountryID], references: [BaseCountryID], onUpdate: Restrict, map: \"fundraiser_ibfk_1\")\n  fundraiser_acceptedcurrencies fundraiser_acceptedcurrencies[]\n  fundraiser_contactlinks       fundraiser_contactlinks[]\n\n  @@index([BaseCountryID], map: \"BaseCountryID\")\n}\n\nmodel fundraiser_acceptedcurrencies {\n  FundraiserAcceptedCurrencyID Int         @id @default(autoincrement())\n  FundraiserID                 Int?\n  CurrencyID                   Int?\n  fundraiser                   fundraiser? @relation(fields: [FundraiserID], references: [FundraiserID], onDelete: Cascade, onUpdate: Restrict, map: \"fundraiser_acceptedcurrencies_ibfk_1\")\n  currency                     currency?   @relation(fields: [CurrencyID], references: [CurrencyId], onDelete: Cascade, onUpdate: Restrict, map: \"fundraiser_acceptedcurrencies_ibfk_2\")\n\n  @@index([CurrencyID], map: \"CurrencyID\")\n  @@index([FundraiserID], map: \"FundraiserID\")\n}\n\nmodel fundraiser_contactlinks {\n  ContactID    Int         @id @default(autoincrement())\n  FundraiserID Int?\n  Platform     Int?\n  ContactURL   String      @db.VarChar(191)\n  fundraiser   fundraiser? @relation(fields: [FundraiserID], references: [FundraiserID], onDelete: Cascade, onUpdate: Restrict, map: \"fundraiser_contactlinks_ibfk_1\")\n\n  @@index([FundraiserID], map: \"FundraiserID\")\n}\n\nmodel manychat {\n  ManyChatId     Int      @id @default(autoincrement())\n  ConversationId String   @db.VarChar(191)\n  CustomerId     Int\n  CreateAt       DateTime @default(now()) @db.Timestamp(0)\n  UpdateAt       DateTime @default(now()) @db.Timestamp(0)\n  customer       customer @relation(fields: [CustomerId], references: [CustomerId], onDelete: Cascade, onUpdate: Restrict, map: \"fk_manychat_customer\")\n\n  @@index([CustomerId], map: \"fk_manychat_customer\")\n}\n\nmodel minimumamount {\n  MinimumAmountId Int      @id @default(autoincrement())\n  CurrencyId      Int\n  Amount          Decimal  @db.Decimal(12, 2)\n  CreateAt        DateTime @default(now()) @db.Timestamp(0)\n  UpdatedAt       DateTime @default(now()) @db.Timestamp(0)\n  currency        currency @relation(fields: [CurrencyId], references: [CurrencyId], onDelete: Cascade, onUpdate: Restrict, map: \"minimumamount_ibfk_1\")\n\n  @@index([CurrencyId], map: \"CurrencyId\")\n}\n\nmodel note {\n  NoteID       Int            @id @default(autoincrement())\n  Note         String?        @db.VarChar(191)\n  Date         DateTime?      @db.Date\n  AgentID      Int?\n  agent        agent?         @relation(fields: [AgentID], references: [AgentId], onDelete: Restrict, onUpdate: Restrict, map: \"note_ibfk_1\")\n  transactions transactions[]\n\n  @@index([AgentID], map: \"AgentID\")\n}\n\nmodel platform {\n  PlatformID   Int    @id @default(autoincrement())\n  PlatformName String @unique(map: \"PlatformName\") @db.VarChar(100)\n}\n\nmodel screenshot {\n  ScreenShotID   Int           @id @default(autoincrement())\n  TransactionID  Int?\n  ScreenShotLink String?       @db.VarChar(191)\n  transactions   transactions? @relation(fields: [TransactionID], references: [TransactionID], onDelete: Restrict, onUpdate: Restrict, map: \"screenshot_ibfk_1\")\n\n  @@index([TransactionID], map: \"TransactionID\")\n}\n\nmodel supportregion {\n  SupportRegionID Int            @id @default(autoincrement())\n  Region          String?        @db.VarChar(191)\n  transactions    transactions[]\n}\n\nmodel transactionagent {\n  TransactionAgentID Int           @id @default(autoincrement())\n  TransactionID      Int?\n  AgentID            Int?\n  LogDate            DateTime      @default(now()) @db.Timestamp(0)\n  transactions       transactions? @relation(fields: [TransactionID], references: [TransactionID], onDelete: Restrict, onUpdate: Restrict, map: \"transactionagent_ibfk_1\")\n  agent              agent?        @relation(fields: [AgentID], references: [AgentId], onDelete: Restrict, onUpdate: Restrict, map: \"transactionagent_ibfk_2\")\n\n  @@index([AgentID], map: \"AgentID\")\n  @@index([TransactionID], map: \"TransactionID\")\n}\n\nmodel transactions {\n  TransactionID    Int                @id @default(autoincrement())\n  CustomerID       Int?\n  SupportRegionID  Int?\n  WalletID         Int?\n  Amount           Float?             @db.Float\n  PaymentCheck     Boolean?\n  PaymentCheckTime DateTime           @default(now()) @db.Timestamp(0)\n  NoteID           Int?\n  TransactionDate  DateTime           @default(now()) @db.Timestamp(0)\n  PaymentDenied    Boolean?\n  Month            Int?\n  HopeFuelID       Int?\n  formstatus       formstatus[]\n  screenshot       screenshot[]\n  transactionagent transactionagent[]\n  customer         customer?          @relation(fields: [CustomerID], references: [CustomerId], onDelete: Restrict, onUpdate: Restrict, map: \"transactions_ibfk_1\")\n  supportregion    supportregion?     @relation(fields: [SupportRegionID], references: [SupportRegionID], onDelete: Restrict, onUpdate: Restrict, map: \"transactions_ibfk_2\")\n  wallet           wallet?            @relation(fields: [WalletID], references: [WalletId], onDelete: Restrict, onUpdate: Restrict, map: \"transactions_ibfk_3\")\n  note             note?              @relation(fields: [NoteID], references: [NoteID], onDelete: Restrict, onUpdate: Restrict, map: \"transactions_ibfk_4\")\n\n  @@index([CustomerID], map: \"CustomerID\")\n  @@index([NoteID], map: \"NoteID\")\n  @@index([SupportRegionID], map: \"SupportRegionID\")\n  @@index([WalletID], map: \"WalletID\")\n}\n\nmodel transactionstatus {\n  TransactionStatusID Int          @id @default(autoincrement())\n  TransactionStatus   String       @db.VarChar(191)\n  formstatus          formstatus[]\n}\n\nmodel userrole {\n  UserRoleID Int     @id @default(autoincrement())\n  UserRole   String? @db.VarChar(191)\n  agent      agent[]\n}\n\nmodel wallet {\n  WalletId     Int            @id @default(autoincrement())\n  CurrencyId   Int?\n  WalletName   String?        @db.VarChar(191)\n  transactions transactions[]\n  currency     currency?      @relation(fields: [CurrencyId], references: [CurrencyId], onDelete: Restrict, onUpdate: Restrict, map: \"wallet_ibfk_1\")\n\n  @@index([CurrencyId], map: \"CurrencyId\")\n}\n\nmodel testing_new_table {\n  Id        Int      @id @default(autoincrement())\n  Name      String   @db.VarChar(191)\n  CreatedAt DateTime @default(now()) @db.Timestamp(0)\n  UpdatedAt DateTime @default(now()) @db.Timestamp(0)\n}\n\nmodel testing_new_table2 {\n  Id        Int      @id @default(autoincrement())\n  Name      String   @db.VarChar(191)\n  CreatedAt DateTime @default(now()) @db.Timestamp(0)\n  UpdatedAt DateTime @default(now()) @db.Timestamp(0)\n}\n\nmodel testing_new_table3 {\n  Id        Int      @id @default(autoincrement())\n  Name      String   @db.VarChar(191)\n  CreatedAt DateTime @default(now()) @db.Timestamp(0)\n  UpdatedAt DateTime @default(now()) @db.Timestamp(0)\n}\n\nmodel testing_new_table4 {\n  Id        Int      @id @default(autoincrement())\n  Name      String   @db.VarChar(191)\n  CreatedAt DateTime @default(now()) @db.Timestamp(0)\n  UpdatedAt DateTime @default(now()) @db.Timestamp(0)\n}\n\nenum customerauditlogs_FieldChanged {\n  Name\n  Email\n  UserCountry\n}\n",
  "inlineSchemaHash": "fd09845bb5d3b0dc4fb951cc6a43f714f44d52d7dc2f3994e22d47688ad36166",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"agent\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"AgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AwsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserRoleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userrole\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"userrole\",\"nativeType\":null,\"relationName\":\"agentTouserrole\",\"relationFromFields\":[\"UserRoleId\"],\"relationToFields\":[\"UserRoleID\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"nativeType\":null,\"relationName\":\"agentTocustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerauditlogs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customerauditlogs\",\"nativeType\":null,\"relationName\":\"agentTocustomerauditlogs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formvisibilitystatus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formvisibilitystatus\",\"nativeType\":null,\"relationName\":\"agentToformvisibilitystatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"note\",\"nativeType\":null,\"relationName\":\"agentTonote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionagent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactionagent\",\"nativeType\":null,\"relationName\":\"agentTotransactionagent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"basecountry\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"BaseCountryID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BaseCountryName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exchangerates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exchangerates\",\"nativeType\":null,\"relationName\":\"basecountryToexchangerates\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fundraiser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fundraiser\",\"nativeType\":null,\"relationName\":\"basecountryTofundraiser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"currency\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"CurrencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CurrencyCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exchangerates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exchangerates\",\"nativeType\":null,\"relationName\":\"currencyToexchangerates\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fundraiser_acceptedcurrencies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fundraiser_acceptedcurrencies\",\"nativeType\":null,\"relationName\":\"currencyTofundraiser_acceptedcurrencies\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimumamount\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"minimumamount\",\"nativeType\":null,\"relationName\":\"currencyTominimumamount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallet\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wallet\",\"nativeType\":null,\"relationName\":\"currencyTowallet\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"customer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"CustomerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ManyChatId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExpireDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserCountry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContactLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CardID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"agent\",\"nativeType\":null,\"relationName\":\"agentTocustomer\",\"relationFromFields\":[\"AgentId\"],\"relationToFields\":[\"AgentId\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerauditlogs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customerauditlogs\",\"nativeType\":null,\"relationName\":\"customerTocustomerauditlogs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manychat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"manychat\",\"nativeType\":null,\"relationName\":\"customerTomanychat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"nativeType\":null,\"relationName\":\"customerTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"customerauditlogs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"LogId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FieldChanged\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customerauditlogs_FieldChanged\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OldValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NewValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CustomerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChangeDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"agent\",\"nativeType\":null,\"relationName\":\"agentTocustomerauditlogs\",\"relationFromFields\":[\"AgentId\"],\"relationToFields\":[\"AgentId\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"nativeType\":null,\"relationName\":\"customerTocustomerauditlogs\",\"relationFromFields\":[\"CustomerId\"],\"relationToFields\":[\"CustomerId\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"exchangerates\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ExchangeRateId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BaseCountryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CurrencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExchangeRate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"12\",\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basecountry\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"basecountry\",\"nativeType\":null,\"relationName\":\"basecountryToexchangerates\",\"relationFromFields\":[\"BaseCountryId\"],\"relationToFields\":[\"BaseCountryID\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"currency\",\"nativeType\":null,\"relationName\":\"currencyToexchangerates\",\"relationFromFields\":[\"CurrencyId\"],\"relationToFields\":[\"CurrencyId\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"formstatus\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"FormStatusID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TransactionID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TransactionStatusID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"nativeType\":null,\"relationName\":\"formstatusTotransactions\",\"relationFromFields\":[\"TransactionID\"],\"relationToFields\":[\"TransactionID\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionstatus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactionstatus\",\"nativeType\":null,\"relationName\":\"formstatusTotransactionstatus\",\"relationFromFields\":[\"TransactionStatusID\"],\"relationToFields\":[\"TransactionStatusID\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"formvisibilitystatus\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"VisibilityStatusId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IsFormOpen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FormTimeStamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"agent\",\"nativeType\":null,\"relationName\":\"agentToformvisibilitystatus\",\"relationFromFields\":[\"AgentId\"],\"relationToFields\":[\"AgentId\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"fundraiser\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"FundraiserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FundraiserName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FundraiserEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FundraiserLogo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BaseCountryID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FundraiserCentralID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basecountry\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"basecountry\",\"nativeType\":null,\"relationName\":\"basecountryTofundraiser\",\"relationFromFields\":[\"BaseCountryID\"],\"relationToFields\":[\"BaseCountryID\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fundraiser_acceptedcurrencies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fundraiser_acceptedcurrencies\",\"nativeType\":null,\"relationName\":\"fundraiserTofundraiser_acceptedcurrencies\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fundraiser_contactlinks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fundraiser_contactlinks\",\"nativeType\":null,\"relationName\":\"fundraiserTofundraiser_contactlinks\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"fundraiser_acceptedcurrencies\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"FundraiserAcceptedCurrencyID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FundraiserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CurrencyID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fundraiser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fundraiser\",\"nativeType\":null,\"relationName\":\"fundraiserTofundraiser_acceptedcurrencies\",\"relationFromFields\":[\"FundraiserID\"],\"relationToFields\":[\"FundraiserID\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"currency\",\"nativeType\":null,\"relationName\":\"currencyTofundraiser_acceptedcurrencies\",\"relationFromFields\":[\"CurrencyID\"],\"relationToFields\":[\"CurrencyId\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"fundraiser_contactlinks\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ContactID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FundraiserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Platform\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContactURL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fundraiser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fundraiser\",\"nativeType\":null,\"relationName\":\"fundraiserTofundraiser_contactlinks\",\"relationFromFields\":[\"FundraiserID\"],\"relationToFields\":[\"FundraiserID\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"manychat\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ManyChatId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ConversationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CustomerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"nativeType\":null,\"relationName\":\"customerTomanychat\",\"relationFromFields\":[\"CustomerId\"],\"relationToFields\":[\"CustomerId\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"minimumamount\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"MinimumAmountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CurrencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"12\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"currency\",\"nativeType\":null,\"relationName\":\"currencyTominimumamount\",\"relationFromFields\":[\"CurrencyId\"],\"relationToFields\":[\"CurrencyId\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"note\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"NoteID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AgentID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"agent\",\"nativeType\":null,\"relationName\":\"agentTonote\",\"relationFromFields\":[\"AgentID\"],\"relationToFields\":[\"AgentId\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"nativeType\":null,\"relationName\":\"noteTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"platform\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"PlatformID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlatformName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"screenshot\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ScreenShotID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TransactionID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ScreenShotLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"nativeType\":null,\"relationName\":\"screenshotTotransactions\",\"relationFromFields\":[\"TransactionID\"],\"relationToFields\":[\"TransactionID\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"supportregion\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SupportRegionID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"nativeType\":null,\"relationName\":\"supportregionTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"transactionagent\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TransactionAgentID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TransactionID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AgentID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LogDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"nativeType\":null,\"relationName\":\"transactionagentTotransactions\",\"relationFromFields\":[\"TransactionID\"],\"relationToFields\":[\"TransactionID\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"agent\",\"nativeType\":null,\"relationName\":\"agentTotransactionagent\",\"relationFromFields\":[\"AgentID\"],\"relationToFields\":[\"AgentId\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"transactions\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TransactionID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CustomerID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SupportRegionID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WalletID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentCheck\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentCheckTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NoteID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TransactionDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentDenied\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HopeFuelID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formstatus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formstatus\",\"nativeType\":null,\"relationName\":\"formstatusTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"screenshot\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"screenshot\",\"nativeType\":null,\"relationName\":\"screenshotTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionagent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactionagent\",\"nativeType\":null,\"relationName\":\"transactionagentTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"nativeType\":null,\"relationName\":\"customerTotransactions\",\"relationFromFields\":[\"CustomerID\"],\"relationToFields\":[\"CustomerId\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supportregion\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"supportregion\",\"nativeType\":null,\"relationName\":\"supportregionTotransactions\",\"relationFromFields\":[\"SupportRegionID\"],\"relationToFields\":[\"SupportRegionID\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallet\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wallet\",\"nativeType\":null,\"relationName\":\"transactionsTowallet\",\"relationFromFields\":[\"WalletID\"],\"relationToFields\":[\"WalletId\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"note\",\"nativeType\":null,\"relationName\":\"noteTotransactions\",\"relationFromFields\":[\"NoteID\"],\"relationToFields\":[\"NoteID\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"transactionstatus\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TransactionStatusID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TransactionStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formstatus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formstatus\",\"nativeType\":null,\"relationName\":\"formstatusTotransactionstatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"userrole\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"UserRoleID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserRole\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"agent\",\"nativeType\":null,\"relationName\":\"agentTouserrole\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wallet\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"WalletId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CurrencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WalletName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"nativeType\":null,\"relationName\":\"transactionsTowallet\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"currency\",\"nativeType\":null,\"relationName\":\"currencyTowallet\",\"relationFromFields\":[\"CurrencyId\"],\"relationToFields\":[\"CurrencyId\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"testing_new_table\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"testing_new_table2\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"testing_new_table3\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"testing_new_table4\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"191\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"customerauditlogs_FieldChanged\":{\"values\":[{\"name\":\"Name\",\"dbName\":null},{\"name\":\"Email\",\"dbName\":null},{\"name\":\"UserCountry\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")
