
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
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
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

exports.Prisma.AdminScalarFieldEnum = {
  ID: 'ID',
  UserName: 'UserName',
  RoleID: 'RoleID',
  Sex: 'Sex',
  Password: 'Password',
  Salt: 'Salt',
  Telphone: 'Telphone',
  Status: 'Status',
  Dateline: 'Dateline',
  LoginTime: 'LoginTime',
  LoginIP: 'LoginIP',
  PowerID: 'PowerID'
};

exports.Prisma.Admin_actionsScalarFieldEnum = {
  id: 'id',
  parent_id: 'parent_id',
  action_name: 'action_name',
  controller: 'controller',
  action: 'action',
  desc: 'desc',
  status: 'status',
  orderby: 'orderby',
  navid: 'navid',
  isManage: 'isManage'
};

exports.Prisma.Admin_purviewScalarFieldEnum = {
  PurviewID: 'PurviewID',
  Name: 'Name',
  Purview: 'Purview'
};

exports.Prisma.Admin_roleScalarFieldEnum = {
  ID: 'ID',
  RoleName: 'RoleName',
  Desc: 'Desc',
  AddTime: 'AddTime'
};

exports.Prisma.Admin_role_actionScalarFieldEnum = {
  role_id: 'role_id',
  action_id: 'action_id'
};

exports.Prisma.Admin_role_purviewScalarFieldEnum = {
  RoleID: 'RoleID',
  Purview: 'Purview'
};

exports.Prisma.AncientScalarFieldEnum = {
  ID: 'ID',
  Name: 'Name',
  Author: 'Author',
  Dynasty: 'Dynasty'
};

exports.Prisma.Illness_caseScalarFieldEnum = {
  ID: 'ID',
  AID: 'AID',
  Case: 'Case',
  Medication: 'Medication'
};

exports.Prisma.MedicationScalarFieldEnum = {
  ID: 'ID',
  Name: 'Name',
  Desc: 'Desc'
};

exports.Prisma.Centre_static_dataScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  updatetime: 'updatetime',
  isEdit: 'isEdit',
  enabled: 'enabled'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.adminOrderByRelevanceFieldEnum = {
  UserName: 'UserName',
  Password: 'Password',
  Salt: 'Salt',
  Telphone: 'Telphone',
  LoginIP: 'LoginIP'
};

exports.Prisma.admin_actionsOrderByRelevanceFieldEnum = {
  action_name: 'action_name',
  controller: 'controller',
  action: 'action',
  desc: 'desc'
};

exports.Prisma.admin_purviewOrderByRelevanceFieldEnum = {
  Name: 'Name',
  Purview: 'Purview'
};

exports.Prisma.admin_roleOrderByRelevanceFieldEnum = {
  RoleName: 'RoleName',
  Desc: 'Desc'
};

exports.Prisma.admin_role_purviewOrderByRelevanceFieldEnum = {
  Purview: 'Purview'
};

exports.Prisma.ancientOrderByRelevanceFieldEnum = {
  Name: 'Name',
  Author: 'Author',
  Dynasty: 'Dynasty'
};

exports.Prisma.illness_caseOrderByRelevanceFieldEnum = {
  Case: 'Case',
  Medication: 'Medication'
};

exports.Prisma.medicationOrderByRelevanceFieldEnum = {
  Name: 'Name',
  Desc: 'Desc'
};

exports.Prisma.centre_static_dataOrderByRelevanceFieldEnum = {
  name: 'name',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  admin: 'admin',
  admin_actions: 'admin_actions',
  admin_purview: 'admin_purview',
  admin_role: 'admin_role',
  admin_role_action: 'admin_role_action',
  admin_role_purview: 'admin_role_purview',
  ancient: 'ancient',
  illness_case: 'illness_case',
  medication: 'medication',
  centre_static_data: 'centre_static_data'
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
