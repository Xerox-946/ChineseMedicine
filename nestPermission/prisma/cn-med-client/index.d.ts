
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model admin_actions
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type admin_actions = $Result.DefaultSelection<Prisma.$admin_actionsPayload>
/**
 * Model admin_purview
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type admin_purview = $Result.DefaultSelection<Prisma.$admin_purviewPayload>
/**
 * Model admin_role
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type admin_role = $Result.DefaultSelection<Prisma.$admin_rolePayload>
/**
 * Model admin_role_action
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type admin_role_action = $Result.DefaultSelection<Prisma.$admin_role_actionPayload>
/**
 * Model admin_role_purview
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type admin_role_purview = $Result.DefaultSelection<Prisma.$admin_role_purviewPayload>
/**
 * Model ancient
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ancient = $Result.DefaultSelection<Prisma.$ancientPayload>
/**
 * Model illness_case
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type illness_case = $Result.DefaultSelection<Prisma.$illness_casePayload>
/**
 * Model medication
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type medication = $Result.DefaultSelection<Prisma.$medicationPayload>
/**
 * Model centre_static_data
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type centre_static_data = $Result.DefaultSelection<Prisma.$centre_static_dataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin_actions`: Exposes CRUD operations for the **admin_actions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_actions
    * const admin_actions = await prisma.admin_actions.findMany()
    * ```
    */
  get admin_actions(): Prisma.admin_actionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin_purview`: Exposes CRUD operations for the **admin_purview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_purviews
    * const admin_purviews = await prisma.admin_purview.findMany()
    * ```
    */
  get admin_purview(): Prisma.admin_purviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin_role`: Exposes CRUD operations for the **admin_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_roles
    * const admin_roles = await prisma.admin_role.findMany()
    * ```
    */
  get admin_role(): Prisma.admin_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin_role_action`: Exposes CRUD operations for the **admin_role_action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_role_actions
    * const admin_role_actions = await prisma.admin_role_action.findMany()
    * ```
    */
  get admin_role_action(): Prisma.admin_role_actionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin_role_purview`: Exposes CRUD operations for the **admin_role_purview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_role_purviews
    * const admin_role_purviews = await prisma.admin_role_purview.findMany()
    * ```
    */
  get admin_role_purview(): Prisma.admin_role_purviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ancient`: Exposes CRUD operations for the **ancient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ancients
    * const ancients = await prisma.ancient.findMany()
    * ```
    */
  get ancient(): Prisma.ancientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.illness_case`: Exposes CRUD operations for the **illness_case** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Illness_cases
    * const illness_cases = await prisma.illness_case.findMany()
    * ```
    */
  get illness_case(): Prisma.illness_caseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.medicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.centre_static_data`: Exposes CRUD operations for the **centre_static_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Centre_static_data
    * const centre_static_data = await prisma.centre_static_data.findMany()
    * ```
    */
  get centre_static_data(): Prisma.centre_static_dataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "admin_actions" | "admin_purview" | "admin_role" | "admin_role_action" | "admin_role_purview" | "ancient" | "illness_case" | "medication" | "centre_static_data"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      admin_actions: {
        payload: Prisma.$admin_actionsPayload<ExtArgs>
        fields: Prisma.admin_actionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_actionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_actionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actionsPayload>
          }
          findFirst: {
            args: Prisma.admin_actionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_actionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actionsPayload>
          }
          findMany: {
            args: Prisma.admin_actionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actionsPayload>[]
          }
          create: {
            args: Prisma.admin_actionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actionsPayload>
          }
          createMany: {
            args: Prisma.admin_actionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.admin_actionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actionsPayload>
          }
          update: {
            args: Prisma.admin_actionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actionsPayload>
          }
          deleteMany: {
            args: Prisma.admin_actionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_actionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.admin_actionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actionsPayload>
          }
          aggregate: {
            args: Prisma.Admin_actionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_actions>
          }
          groupBy: {
            args: Prisma.admin_actionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_actionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_actionsCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_actionsCountAggregateOutputType> | number
          }
        }
      }
      admin_purview: {
        payload: Prisma.$admin_purviewPayload<ExtArgs>
        fields: Prisma.admin_purviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_purviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_purviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_purviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_purviewPayload>
          }
          findFirst: {
            args: Prisma.admin_purviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_purviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_purviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_purviewPayload>
          }
          findMany: {
            args: Prisma.admin_purviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_purviewPayload>[]
          }
          create: {
            args: Prisma.admin_purviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_purviewPayload>
          }
          createMany: {
            args: Prisma.admin_purviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.admin_purviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_purviewPayload>
          }
          update: {
            args: Prisma.admin_purviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_purviewPayload>
          }
          deleteMany: {
            args: Prisma.admin_purviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_purviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.admin_purviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_purviewPayload>
          }
          aggregate: {
            args: Prisma.Admin_purviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_purview>
          }
          groupBy: {
            args: Prisma.admin_purviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_purviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_purviewCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_purviewCountAggregateOutputType> | number
          }
        }
      }
      admin_role: {
        payload: Prisma.$admin_rolePayload<ExtArgs>
        fields: Prisma.admin_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_rolePayload>
          }
          findFirst: {
            args: Prisma.admin_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_rolePayload>
          }
          findMany: {
            args: Prisma.admin_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_rolePayload>[]
          }
          create: {
            args: Prisma.admin_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_rolePayload>
          }
          createMany: {
            args: Prisma.admin_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.admin_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_rolePayload>
          }
          update: {
            args: Prisma.admin_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_rolePayload>
          }
          deleteMany: {
            args: Prisma.admin_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.admin_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_rolePayload>
          }
          aggregate: {
            args: Prisma.Admin_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_role>
          }
          groupBy: {
            args: Prisma.admin_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_roleCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_roleCountAggregateOutputType> | number
          }
        }
      }
      admin_role_action: {
        payload: Prisma.$admin_role_actionPayload<ExtArgs>
        fields: Prisma.admin_role_actionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_role_actionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_actionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_role_actionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_actionPayload>
          }
          findFirst: {
            args: Prisma.admin_role_actionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_actionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_role_actionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_actionPayload>
          }
          findMany: {
            args: Prisma.admin_role_actionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_actionPayload>[]
          }
          create: {
            args: Prisma.admin_role_actionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_actionPayload>
          }
          createMany: {
            args: Prisma.admin_role_actionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.admin_role_actionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_actionPayload>
          }
          update: {
            args: Prisma.admin_role_actionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_actionPayload>
          }
          deleteMany: {
            args: Prisma.admin_role_actionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_role_actionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.admin_role_actionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_actionPayload>
          }
          aggregate: {
            args: Prisma.Admin_role_actionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_role_action>
          }
          groupBy: {
            args: Prisma.admin_role_actionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_role_actionGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_role_actionCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_role_actionCountAggregateOutputType> | number
          }
        }
      }
      admin_role_purview: {
        payload: Prisma.$admin_role_purviewPayload<ExtArgs>
        fields: Prisma.admin_role_purviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_role_purviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_purviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_role_purviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_purviewPayload>
          }
          findFirst: {
            args: Prisma.admin_role_purviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_purviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_role_purviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_purviewPayload>
          }
          findMany: {
            args: Prisma.admin_role_purviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_purviewPayload>[]
          }
          create: {
            args: Prisma.admin_role_purviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_purviewPayload>
          }
          createMany: {
            args: Prisma.admin_role_purviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.admin_role_purviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_purviewPayload>
          }
          update: {
            args: Prisma.admin_role_purviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_purviewPayload>
          }
          deleteMany: {
            args: Prisma.admin_role_purviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_role_purviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.admin_role_purviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_role_purviewPayload>
          }
          aggregate: {
            args: Prisma.Admin_role_purviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_role_purview>
          }
          groupBy: {
            args: Prisma.admin_role_purviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_role_purviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_role_purviewCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_role_purviewCountAggregateOutputType> | number
          }
        }
      }
      ancient: {
        payload: Prisma.$ancientPayload<ExtArgs>
        fields: Prisma.ancientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ancientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ancientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ancientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ancientPayload>
          }
          findFirst: {
            args: Prisma.ancientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ancientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ancientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ancientPayload>
          }
          findMany: {
            args: Prisma.ancientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ancientPayload>[]
          }
          create: {
            args: Prisma.ancientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ancientPayload>
          }
          createMany: {
            args: Prisma.ancientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ancientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ancientPayload>
          }
          update: {
            args: Prisma.ancientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ancientPayload>
          }
          deleteMany: {
            args: Prisma.ancientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ancientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ancientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ancientPayload>
          }
          aggregate: {
            args: Prisma.AncientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAncient>
          }
          groupBy: {
            args: Prisma.ancientGroupByArgs<ExtArgs>
            result: $Utils.Optional<AncientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ancientCountArgs<ExtArgs>
            result: $Utils.Optional<AncientCountAggregateOutputType> | number
          }
        }
      }
      illness_case: {
        payload: Prisma.$illness_casePayload<ExtArgs>
        fields: Prisma.illness_caseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.illness_caseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$illness_casePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.illness_caseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$illness_casePayload>
          }
          findFirst: {
            args: Prisma.illness_caseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$illness_casePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.illness_caseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$illness_casePayload>
          }
          findMany: {
            args: Prisma.illness_caseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$illness_casePayload>[]
          }
          create: {
            args: Prisma.illness_caseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$illness_casePayload>
          }
          createMany: {
            args: Prisma.illness_caseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.illness_caseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$illness_casePayload>
          }
          update: {
            args: Prisma.illness_caseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$illness_casePayload>
          }
          deleteMany: {
            args: Prisma.illness_caseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.illness_caseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.illness_caseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$illness_casePayload>
          }
          aggregate: {
            args: Prisma.Illness_caseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIllness_case>
          }
          groupBy: {
            args: Prisma.illness_caseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Illness_caseGroupByOutputType>[]
          }
          count: {
            args: Prisma.illness_caseCountArgs<ExtArgs>
            result: $Utils.Optional<Illness_caseCountAggregateOutputType> | number
          }
        }
      }
      medication: {
        payload: Prisma.$medicationPayload<ExtArgs>
        fields: Prisma.medicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicationPayload>
          }
          findFirst: {
            args: Prisma.medicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicationPayload>
          }
          findMany: {
            args: Prisma.medicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicationPayload>[]
          }
          create: {
            args: Prisma.medicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicationPayload>
          }
          createMany: {
            args: Prisma.medicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.medicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicationPayload>
          }
          update: {
            args: Prisma.medicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicationPayload>
          }
          deleteMany: {
            args: Prisma.medicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.medicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.medicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.medicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      centre_static_data: {
        payload: Prisma.$centre_static_dataPayload<ExtArgs>
        fields: Prisma.centre_static_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.centre_static_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_static_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.centre_static_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_static_dataPayload>
          }
          findFirst: {
            args: Prisma.centre_static_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_static_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.centre_static_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_static_dataPayload>
          }
          findMany: {
            args: Prisma.centre_static_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_static_dataPayload>[]
          }
          create: {
            args: Prisma.centre_static_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_static_dataPayload>
          }
          createMany: {
            args: Prisma.centre_static_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.centre_static_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_static_dataPayload>
          }
          update: {
            args: Prisma.centre_static_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_static_dataPayload>
          }
          deleteMany: {
            args: Prisma.centre_static_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.centre_static_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.centre_static_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_static_dataPayload>
          }
          aggregate: {
            args: Prisma.Centre_static_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCentre_static_data>
          }
          groupBy: {
            args: Prisma.centre_static_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Centre_static_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.centre_static_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Centre_static_dataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: adminOmit
    admin_actions?: admin_actionsOmit
    admin_purview?: admin_purviewOmit
    admin_role?: admin_roleOmit
    admin_role_action?: admin_role_actionOmit
    admin_role_purview?: admin_role_purviewOmit
    ancient?: ancientOmit
    illness_case?: illness_caseOmit
    medication?: medicationOmit
    centre_static_data?: centre_static_dataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    ID: number | null
    RoleID: number | null
    Status: number | null
    Dateline: number | null
    LoginTime: number | null
  }

  export type AdminSumAggregateOutputType = {
    ID: number | null
    RoleID: number | null
    Status: number | null
    Dateline: number | null
    LoginTime: number | null
  }

  export type AdminMinAggregateOutputType = {
    ID: number | null
    UserName: string | null
    RoleID: number | null
    Sex: boolean | null
    Password: string | null
    Salt: string | null
    Telphone: string | null
    Status: number | null
    Dateline: number | null
    LoginTime: number | null
    LoginIP: string | null
    PowerID: boolean | null
  }

  export type AdminMaxAggregateOutputType = {
    ID: number | null
    UserName: string | null
    RoleID: number | null
    Sex: boolean | null
    Password: string | null
    Salt: string | null
    Telphone: string | null
    Status: number | null
    Dateline: number | null
    LoginTime: number | null
    LoginIP: string | null
    PowerID: boolean | null
  }

  export type AdminCountAggregateOutputType = {
    ID: number
    UserName: number
    RoleID: number
    Sex: number
    Password: number
    Salt: number
    Telphone: number
    Status: number
    Dateline: number
    LoginTime: number
    LoginIP: number
    PowerID: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    ID?: true
    RoleID?: true
    Status?: true
    Dateline?: true
    LoginTime?: true
  }

  export type AdminSumAggregateInputType = {
    ID?: true
    RoleID?: true
    Status?: true
    Dateline?: true
    LoginTime?: true
  }

  export type AdminMinAggregateInputType = {
    ID?: true
    UserName?: true
    RoleID?: true
    Sex?: true
    Password?: true
    Salt?: true
    Telphone?: true
    Status?: true
    Dateline?: true
    LoginTime?: true
    LoginIP?: true
    PowerID?: true
  }

  export type AdminMaxAggregateInputType = {
    ID?: true
    UserName?: true
    RoleID?: true
    Sex?: true
    Password?: true
    Salt?: true
    Telphone?: true
    Status?: true
    Dateline?: true
    LoginTime?: true
    LoginIP?: true
    PowerID?: true
  }

  export type AdminCountAggregateInputType = {
    ID?: true
    UserName?: true
    RoleID?: true
    Sex?: true
    Password?: true
    Salt?: true
    Telphone?: true
    Status?: true
    Dateline?: true
    LoginTime?: true
    LoginIP?: true
    PowerID?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    ID: number
    UserName: string
    RoleID: number
    Sex: boolean
    Password: string
    Salt: string
    Telphone: string | null
    Status: number
    Dateline: number
    LoginTime: number
    LoginIP: string
    PowerID: boolean | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    UserName?: boolean
    RoleID?: boolean
    Sex?: boolean
    Password?: boolean
    Salt?: boolean
    Telphone?: boolean
    Status?: boolean
    Dateline?: boolean
    LoginTime?: boolean
    LoginIP?: boolean
    PowerID?: boolean
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    ID?: boolean
    UserName?: boolean
    RoleID?: boolean
    Sex?: boolean
    Password?: boolean
    Salt?: boolean
    Telphone?: boolean
    Status?: boolean
    Dateline?: boolean
    LoginTime?: boolean
    LoginIP?: boolean
    PowerID?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "UserName" | "RoleID" | "Sex" | "Password" | "Salt" | "Telphone" | "Status" | "Dateline" | "LoginTime" | "LoginIP" | "PowerID", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      UserName: string
      RoleID: number
      Sex: boolean
      Password: string
      Salt: string
      Telphone: string | null
      Status: number
      Dateline: number
      LoginTime: number
      LoginIP: string
      PowerID: boolean | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const adminWithIDOnly = await prisma.admin.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */ 
  interface adminFieldRefs {
    readonly ID: FieldRef<"admin", 'Int'>
    readonly UserName: FieldRef<"admin", 'String'>
    readonly RoleID: FieldRef<"admin", 'Int'>
    readonly Sex: FieldRef<"admin", 'Boolean'>
    readonly Password: FieldRef<"admin", 'String'>
    readonly Salt: FieldRef<"admin", 'String'>
    readonly Telphone: FieldRef<"admin", 'String'>
    readonly Status: FieldRef<"admin", 'Int'>
    readonly Dateline: FieldRef<"admin", 'Int'>
    readonly LoginTime: FieldRef<"admin", 'Int'>
    readonly LoginIP: FieldRef<"admin", 'String'>
    readonly PowerID: FieldRef<"admin", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model admin_actions
   */

  export type AggregateAdmin_actions = {
    _count: Admin_actionsCountAggregateOutputType | null
    _avg: Admin_actionsAvgAggregateOutputType | null
    _sum: Admin_actionsSumAggregateOutputType | null
    _min: Admin_actionsMinAggregateOutputType | null
    _max: Admin_actionsMaxAggregateOutputType | null
  }

  export type Admin_actionsAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
    status: number | null
    orderby: number | null
    navid: number | null
  }

  export type Admin_actionsSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
    status: number | null
    orderby: number | null
    navid: number | null
  }

  export type Admin_actionsMinAggregateOutputType = {
    id: number | null
    parent_id: number | null
    action_name: string | null
    controller: string | null
    action: string | null
    desc: string | null
    status: number | null
    orderby: number | null
    navid: number | null
    isManage: boolean | null
  }

  export type Admin_actionsMaxAggregateOutputType = {
    id: number | null
    parent_id: number | null
    action_name: string | null
    controller: string | null
    action: string | null
    desc: string | null
    status: number | null
    orderby: number | null
    navid: number | null
    isManage: boolean | null
  }

  export type Admin_actionsCountAggregateOutputType = {
    id: number
    parent_id: number
    action_name: number
    controller: number
    action: number
    desc: number
    status: number
    orderby: number
    navid: number
    isManage: number
    _all: number
  }


  export type Admin_actionsAvgAggregateInputType = {
    id?: true
    parent_id?: true
    status?: true
    orderby?: true
    navid?: true
  }

  export type Admin_actionsSumAggregateInputType = {
    id?: true
    parent_id?: true
    status?: true
    orderby?: true
    navid?: true
  }

  export type Admin_actionsMinAggregateInputType = {
    id?: true
    parent_id?: true
    action_name?: true
    controller?: true
    action?: true
    desc?: true
    status?: true
    orderby?: true
    navid?: true
    isManage?: true
  }

  export type Admin_actionsMaxAggregateInputType = {
    id?: true
    parent_id?: true
    action_name?: true
    controller?: true
    action?: true
    desc?: true
    status?: true
    orderby?: true
    navid?: true
    isManage?: true
  }

  export type Admin_actionsCountAggregateInputType = {
    id?: true
    parent_id?: true
    action_name?: true
    controller?: true
    action?: true
    desc?: true
    status?: true
    orderby?: true
    navid?: true
    isManage?: true
    _all?: true
  }

  export type Admin_actionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_actions to aggregate.
     */
    where?: admin_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_actions to fetch.
     */
    orderBy?: admin_actionsOrderByWithRelationInput | admin_actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_actions
    **/
    _count?: true | Admin_actionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_actionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_actionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_actionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_actionsMaxAggregateInputType
  }

  export type GetAdmin_actionsAggregateType<T extends Admin_actionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_actions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_actions[P]>
      : GetScalarType<T[P], AggregateAdmin_actions[P]>
  }




  export type admin_actionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_actionsWhereInput
    orderBy?: admin_actionsOrderByWithAggregationInput | admin_actionsOrderByWithAggregationInput[]
    by: Admin_actionsScalarFieldEnum[] | Admin_actionsScalarFieldEnum
    having?: admin_actionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_actionsCountAggregateInputType | true
    _avg?: Admin_actionsAvgAggregateInputType
    _sum?: Admin_actionsSumAggregateInputType
    _min?: Admin_actionsMinAggregateInputType
    _max?: Admin_actionsMaxAggregateInputType
  }

  export type Admin_actionsGroupByOutputType = {
    id: number
    parent_id: number
    action_name: string
    controller: string
    action: string
    desc: string
    status: number
    orderby: number | null
    navid: number | null
    isManage: boolean
    _count: Admin_actionsCountAggregateOutputType | null
    _avg: Admin_actionsAvgAggregateOutputType | null
    _sum: Admin_actionsSumAggregateOutputType | null
    _min: Admin_actionsMinAggregateOutputType | null
    _max: Admin_actionsMaxAggregateOutputType | null
  }

  type GetAdmin_actionsGroupByPayload<T extends admin_actionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_actionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_actionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_actionsGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_actionsGroupByOutputType[P]>
        }
      >
    >


  export type admin_actionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    action_name?: boolean
    controller?: boolean
    action?: boolean
    desc?: boolean
    status?: boolean
    orderby?: boolean
    navid?: boolean
    isManage?: boolean
  }, ExtArgs["result"]["admin_actions"]>



  export type admin_actionsSelectScalar = {
    id?: boolean
    parent_id?: boolean
    action_name?: boolean
    controller?: boolean
    action?: boolean
    desc?: boolean
    status?: boolean
    orderby?: boolean
    navid?: boolean
    isManage?: boolean
  }

  export type admin_actionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parent_id" | "action_name" | "controller" | "action" | "desc" | "status" | "orderby" | "navid" | "isManage", ExtArgs["result"]["admin_actions"]>

  export type $admin_actionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_actions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parent_id: number
      action_name: string
      controller: string
      action: string
      desc: string
      status: number
      orderby: number | null
      navid: number | null
      isManage: boolean
    }, ExtArgs["result"]["admin_actions"]>
    composites: {}
  }

  type admin_actionsGetPayload<S extends boolean | null | undefined | admin_actionsDefaultArgs> = $Result.GetResult<Prisma.$admin_actionsPayload, S>

  type admin_actionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_actionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_actionsCountAggregateInputType | true
    }

  export interface admin_actionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_actions'], meta: { name: 'admin_actions' } }
    /**
     * Find zero or one Admin_actions that matches the filter.
     * @param {admin_actionsFindUniqueArgs} args - Arguments to find a Admin_actions
     * @example
     * // Get one Admin_actions
     * const admin_actions = await prisma.admin_actions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_actionsFindUniqueArgs>(args: SelectSubset<T, admin_actionsFindUniqueArgs<ExtArgs>>): Prisma__admin_actionsClient<$Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_actions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_actionsFindUniqueOrThrowArgs} args - Arguments to find a Admin_actions
     * @example
     * // Get one Admin_actions
     * const admin_actions = await prisma.admin_actions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_actionsFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_actionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_actionsClient<$Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actionsFindFirstArgs} args - Arguments to find a Admin_actions
     * @example
     * // Get one Admin_actions
     * const admin_actions = await prisma.admin_actions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_actionsFindFirstArgs>(args?: SelectSubset<T, admin_actionsFindFirstArgs<ExtArgs>>): Prisma__admin_actionsClient<$Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_actions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actionsFindFirstOrThrowArgs} args - Arguments to find a Admin_actions
     * @example
     * // Get one Admin_actions
     * const admin_actions = await prisma.admin_actions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_actionsFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_actionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_actionsClient<$Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_actions
     * const admin_actions = await prisma.admin_actions.findMany()
     * 
     * // Get first 10 Admin_actions
     * const admin_actions = await prisma.admin_actions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_actionsWithIdOnly = await prisma.admin_actions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends admin_actionsFindManyArgs>(args?: SelectSubset<T, admin_actionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_actions.
     * @param {admin_actionsCreateArgs} args - Arguments to create a Admin_actions.
     * @example
     * // Create one Admin_actions
     * const Admin_actions = await prisma.admin_actions.create({
     *   data: {
     *     // ... data to create a Admin_actions
     *   }
     * })
     * 
     */
    create<T extends admin_actionsCreateArgs>(args: SelectSubset<T, admin_actionsCreateArgs<ExtArgs>>): Prisma__admin_actionsClient<$Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_actions.
     * @param {admin_actionsCreateManyArgs} args - Arguments to create many Admin_actions.
     * @example
     * // Create many Admin_actions
     * const admin_actions = await prisma.admin_actions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_actionsCreateManyArgs>(args?: SelectSubset<T, admin_actionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_actions.
     * @param {admin_actionsDeleteArgs} args - Arguments to delete one Admin_actions.
     * @example
     * // Delete one Admin_actions
     * const Admin_actions = await prisma.admin_actions.delete({
     *   where: {
     *     // ... filter to delete one Admin_actions
     *   }
     * })
     * 
     */
    delete<T extends admin_actionsDeleteArgs>(args: SelectSubset<T, admin_actionsDeleteArgs<ExtArgs>>): Prisma__admin_actionsClient<$Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_actions.
     * @param {admin_actionsUpdateArgs} args - Arguments to update one Admin_actions.
     * @example
     * // Update one Admin_actions
     * const admin_actions = await prisma.admin_actions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_actionsUpdateArgs>(args: SelectSubset<T, admin_actionsUpdateArgs<ExtArgs>>): Prisma__admin_actionsClient<$Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_actions.
     * @param {admin_actionsDeleteManyArgs} args - Arguments to filter Admin_actions to delete.
     * @example
     * // Delete a few Admin_actions
     * const { count } = await prisma.admin_actions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_actionsDeleteManyArgs>(args?: SelectSubset<T, admin_actionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_actions
     * const admin_actions = await prisma.admin_actions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_actionsUpdateManyArgs>(args: SelectSubset<T, admin_actionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_actions.
     * @param {admin_actionsUpsertArgs} args - Arguments to update or create a Admin_actions.
     * @example
     * // Update or create a Admin_actions
     * const admin_actions = await prisma.admin_actions.upsert({
     *   create: {
     *     // ... data to create a Admin_actions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_actions we want to update
     *   }
     * })
     */
    upsert<T extends admin_actionsUpsertArgs>(args: SelectSubset<T, admin_actionsUpsertArgs<ExtArgs>>): Prisma__admin_actionsClient<$Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actionsCountArgs} args - Arguments to filter Admin_actions to count.
     * @example
     * // Count the number of Admin_actions
     * const count = await prisma.admin_actions.count({
     *   where: {
     *     // ... the filter for the Admin_actions we want to count
     *   }
     * })
    **/
    count<T extends admin_actionsCountArgs>(
      args?: Subset<T, admin_actionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_actionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_actionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_actionsAggregateArgs>(args: Subset<T, Admin_actionsAggregateArgs>): Prisma.PrismaPromise<GetAdmin_actionsAggregateType<T>>

    /**
     * Group by Admin_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_actionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_actionsGroupByArgs['orderBy'] }
        : { orderBy?: admin_actionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_actionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_actionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_actions model
   */
  readonly fields: admin_actionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_actions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_actionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin_actions model
   */ 
  interface admin_actionsFieldRefs {
    readonly id: FieldRef<"admin_actions", 'Int'>
    readonly parent_id: FieldRef<"admin_actions", 'Int'>
    readonly action_name: FieldRef<"admin_actions", 'String'>
    readonly controller: FieldRef<"admin_actions", 'String'>
    readonly action: FieldRef<"admin_actions", 'String'>
    readonly desc: FieldRef<"admin_actions", 'String'>
    readonly status: FieldRef<"admin_actions", 'Int'>
    readonly orderby: FieldRef<"admin_actions", 'Int'>
    readonly navid: FieldRef<"admin_actions", 'Int'>
    readonly isManage: FieldRef<"admin_actions", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * admin_actions findUnique
   */
  export type admin_actionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions to fetch.
     */
    where: admin_actionsWhereUniqueInput
  }

  /**
   * admin_actions findUniqueOrThrow
   */
  export type admin_actionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions to fetch.
     */
    where: admin_actionsWhereUniqueInput
  }

  /**
   * admin_actions findFirst
   */
  export type admin_actionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions to fetch.
     */
    where?: admin_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_actions to fetch.
     */
    orderBy?: admin_actionsOrderByWithRelationInput | admin_actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_actions.
     */
    cursor?: admin_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_actions.
     */
    distinct?: Admin_actionsScalarFieldEnum | Admin_actionsScalarFieldEnum[]
  }

  /**
   * admin_actions findFirstOrThrow
   */
  export type admin_actionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions to fetch.
     */
    where?: admin_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_actions to fetch.
     */
    orderBy?: admin_actionsOrderByWithRelationInput | admin_actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_actions.
     */
    cursor?: admin_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_actions.
     */
    distinct?: Admin_actionsScalarFieldEnum | Admin_actionsScalarFieldEnum[]
  }

  /**
   * admin_actions findMany
   */
  export type admin_actionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions to fetch.
     */
    where?: admin_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_actions to fetch.
     */
    orderBy?: admin_actionsOrderByWithRelationInput | admin_actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_actions.
     */
    cursor?: admin_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_actions.
     */
    skip?: number
    distinct?: Admin_actionsScalarFieldEnum | Admin_actionsScalarFieldEnum[]
  }

  /**
   * admin_actions create
   */
  export type admin_actionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
    /**
     * The data needed to create a admin_actions.
     */
    data: XOR<admin_actionsCreateInput, admin_actionsUncheckedCreateInput>
  }

  /**
   * admin_actions createMany
   */
  export type admin_actionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_actions.
     */
    data: admin_actionsCreateManyInput | admin_actionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_actions update
   */
  export type admin_actionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
    /**
     * The data needed to update a admin_actions.
     */
    data: XOR<admin_actionsUpdateInput, admin_actionsUncheckedUpdateInput>
    /**
     * Choose, which admin_actions to update.
     */
    where: admin_actionsWhereUniqueInput
  }

  /**
   * admin_actions updateMany
   */
  export type admin_actionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_actions.
     */
    data: XOR<admin_actionsUpdateManyMutationInput, admin_actionsUncheckedUpdateManyInput>
    /**
     * Filter which admin_actions to update
     */
    where?: admin_actionsWhereInput
    /**
     * Limit how many admin_actions to update.
     */
    limit?: number
  }

  /**
   * admin_actions upsert
   */
  export type admin_actionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
    /**
     * The filter to search for the admin_actions to update in case it exists.
     */
    where: admin_actionsWhereUniqueInput
    /**
     * In case the admin_actions found by the `where` argument doesn't exist, create a new admin_actions with this data.
     */
    create: XOR<admin_actionsCreateInput, admin_actionsUncheckedCreateInput>
    /**
     * In case the admin_actions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_actionsUpdateInput, admin_actionsUncheckedUpdateInput>
  }

  /**
   * admin_actions delete
   */
  export type admin_actionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
    /**
     * Filter which admin_actions to delete.
     */
    where: admin_actionsWhereUniqueInput
  }

  /**
   * admin_actions deleteMany
   */
  export type admin_actionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_actions to delete
     */
    where?: admin_actionsWhereInput
    /**
     * Limit how many admin_actions to delete.
     */
    limit?: number
  }

  /**
   * admin_actions without action
   */
  export type admin_actionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions
     */
    select?: admin_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions
     */
    omit?: admin_actionsOmit<ExtArgs> | null
  }


  /**
   * Model admin_purview
   */

  export type AggregateAdmin_purview = {
    _count: Admin_purviewCountAggregateOutputType | null
    _avg: Admin_purviewAvgAggregateOutputType | null
    _sum: Admin_purviewSumAggregateOutputType | null
    _min: Admin_purviewMinAggregateOutputType | null
    _max: Admin_purviewMaxAggregateOutputType | null
  }

  export type Admin_purviewAvgAggregateOutputType = {
    PurviewID: number | null
  }

  export type Admin_purviewSumAggregateOutputType = {
    PurviewID: number | null
  }

  export type Admin_purviewMinAggregateOutputType = {
    PurviewID: number | null
    Name: string | null
    Purview: string | null
  }

  export type Admin_purviewMaxAggregateOutputType = {
    PurviewID: number | null
    Name: string | null
    Purview: string | null
  }

  export type Admin_purviewCountAggregateOutputType = {
    PurviewID: number
    Name: number
    Purview: number
    _all: number
  }


  export type Admin_purviewAvgAggregateInputType = {
    PurviewID?: true
  }

  export type Admin_purviewSumAggregateInputType = {
    PurviewID?: true
  }

  export type Admin_purviewMinAggregateInputType = {
    PurviewID?: true
    Name?: true
    Purview?: true
  }

  export type Admin_purviewMaxAggregateInputType = {
    PurviewID?: true
    Name?: true
    Purview?: true
  }

  export type Admin_purviewCountAggregateInputType = {
    PurviewID?: true
    Name?: true
    Purview?: true
    _all?: true
  }

  export type Admin_purviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_purview to aggregate.
     */
    where?: admin_purviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_purviews to fetch.
     */
    orderBy?: admin_purviewOrderByWithRelationInput | admin_purviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_purviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_purviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_purviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_purviews
    **/
    _count?: true | Admin_purviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_purviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_purviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_purviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_purviewMaxAggregateInputType
  }

  export type GetAdmin_purviewAggregateType<T extends Admin_purviewAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_purview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_purview[P]>
      : GetScalarType<T[P], AggregateAdmin_purview[P]>
  }




  export type admin_purviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_purviewWhereInput
    orderBy?: admin_purviewOrderByWithAggregationInput | admin_purviewOrderByWithAggregationInput[]
    by: Admin_purviewScalarFieldEnum[] | Admin_purviewScalarFieldEnum
    having?: admin_purviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_purviewCountAggregateInputType | true
    _avg?: Admin_purviewAvgAggregateInputType
    _sum?: Admin_purviewSumAggregateInputType
    _min?: Admin_purviewMinAggregateInputType
    _max?: Admin_purviewMaxAggregateInputType
  }

  export type Admin_purviewGroupByOutputType = {
    PurviewID: number
    Name: string
    Purview: string
    _count: Admin_purviewCountAggregateOutputType | null
    _avg: Admin_purviewAvgAggregateOutputType | null
    _sum: Admin_purviewSumAggregateOutputType | null
    _min: Admin_purviewMinAggregateOutputType | null
    _max: Admin_purviewMaxAggregateOutputType | null
  }

  type GetAdmin_purviewGroupByPayload<T extends admin_purviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_purviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_purviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_purviewGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_purviewGroupByOutputType[P]>
        }
      >
    >


  export type admin_purviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PurviewID?: boolean
    Name?: boolean
    Purview?: boolean
  }, ExtArgs["result"]["admin_purview"]>



  export type admin_purviewSelectScalar = {
    PurviewID?: boolean
    Name?: boolean
    Purview?: boolean
  }

  export type admin_purviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PurviewID" | "Name" | "Purview", ExtArgs["result"]["admin_purview"]>

  export type $admin_purviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_purview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      PurviewID: number
      Name: string
      Purview: string
    }, ExtArgs["result"]["admin_purview"]>
    composites: {}
  }

  type admin_purviewGetPayload<S extends boolean | null | undefined | admin_purviewDefaultArgs> = $Result.GetResult<Prisma.$admin_purviewPayload, S>

  type admin_purviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_purviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_purviewCountAggregateInputType | true
    }

  export interface admin_purviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_purview'], meta: { name: 'admin_purview' } }
    /**
     * Find zero or one Admin_purview that matches the filter.
     * @param {admin_purviewFindUniqueArgs} args - Arguments to find a Admin_purview
     * @example
     * // Get one Admin_purview
     * const admin_purview = await prisma.admin_purview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_purviewFindUniqueArgs>(args: SelectSubset<T, admin_purviewFindUniqueArgs<ExtArgs>>): Prisma__admin_purviewClient<$Result.GetResult<Prisma.$admin_purviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_purview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_purviewFindUniqueOrThrowArgs} args - Arguments to find a Admin_purview
     * @example
     * // Get one Admin_purview
     * const admin_purview = await prisma.admin_purview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_purviewFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_purviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_purviewClient<$Result.GetResult<Prisma.$admin_purviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_purview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_purviewFindFirstArgs} args - Arguments to find a Admin_purview
     * @example
     * // Get one Admin_purview
     * const admin_purview = await prisma.admin_purview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_purviewFindFirstArgs>(args?: SelectSubset<T, admin_purviewFindFirstArgs<ExtArgs>>): Prisma__admin_purviewClient<$Result.GetResult<Prisma.$admin_purviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_purview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_purviewFindFirstOrThrowArgs} args - Arguments to find a Admin_purview
     * @example
     * // Get one Admin_purview
     * const admin_purview = await prisma.admin_purview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_purviewFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_purviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_purviewClient<$Result.GetResult<Prisma.$admin_purviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_purviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_purviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_purviews
     * const admin_purviews = await prisma.admin_purview.findMany()
     * 
     * // Get first 10 Admin_purviews
     * const admin_purviews = await prisma.admin_purview.findMany({ take: 10 })
     * 
     * // Only select the `PurviewID`
     * const admin_purviewWithPurviewIDOnly = await prisma.admin_purview.findMany({ select: { PurviewID: true } })
     * 
     */
    findMany<T extends admin_purviewFindManyArgs>(args?: SelectSubset<T, admin_purviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_purviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_purview.
     * @param {admin_purviewCreateArgs} args - Arguments to create a Admin_purview.
     * @example
     * // Create one Admin_purview
     * const Admin_purview = await prisma.admin_purview.create({
     *   data: {
     *     // ... data to create a Admin_purview
     *   }
     * })
     * 
     */
    create<T extends admin_purviewCreateArgs>(args: SelectSubset<T, admin_purviewCreateArgs<ExtArgs>>): Prisma__admin_purviewClient<$Result.GetResult<Prisma.$admin_purviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_purviews.
     * @param {admin_purviewCreateManyArgs} args - Arguments to create many Admin_purviews.
     * @example
     * // Create many Admin_purviews
     * const admin_purview = await prisma.admin_purview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_purviewCreateManyArgs>(args?: SelectSubset<T, admin_purviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_purview.
     * @param {admin_purviewDeleteArgs} args - Arguments to delete one Admin_purview.
     * @example
     * // Delete one Admin_purview
     * const Admin_purview = await prisma.admin_purview.delete({
     *   where: {
     *     // ... filter to delete one Admin_purview
     *   }
     * })
     * 
     */
    delete<T extends admin_purviewDeleteArgs>(args: SelectSubset<T, admin_purviewDeleteArgs<ExtArgs>>): Prisma__admin_purviewClient<$Result.GetResult<Prisma.$admin_purviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_purview.
     * @param {admin_purviewUpdateArgs} args - Arguments to update one Admin_purview.
     * @example
     * // Update one Admin_purview
     * const admin_purview = await prisma.admin_purview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_purviewUpdateArgs>(args: SelectSubset<T, admin_purviewUpdateArgs<ExtArgs>>): Prisma__admin_purviewClient<$Result.GetResult<Prisma.$admin_purviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_purviews.
     * @param {admin_purviewDeleteManyArgs} args - Arguments to filter Admin_purviews to delete.
     * @example
     * // Delete a few Admin_purviews
     * const { count } = await prisma.admin_purview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_purviewDeleteManyArgs>(args?: SelectSubset<T, admin_purviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_purviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_purviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_purviews
     * const admin_purview = await prisma.admin_purview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_purviewUpdateManyArgs>(args: SelectSubset<T, admin_purviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_purview.
     * @param {admin_purviewUpsertArgs} args - Arguments to update or create a Admin_purview.
     * @example
     * // Update or create a Admin_purview
     * const admin_purview = await prisma.admin_purview.upsert({
     *   create: {
     *     // ... data to create a Admin_purview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_purview we want to update
     *   }
     * })
     */
    upsert<T extends admin_purviewUpsertArgs>(args: SelectSubset<T, admin_purviewUpsertArgs<ExtArgs>>): Prisma__admin_purviewClient<$Result.GetResult<Prisma.$admin_purviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_purviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_purviewCountArgs} args - Arguments to filter Admin_purviews to count.
     * @example
     * // Count the number of Admin_purviews
     * const count = await prisma.admin_purview.count({
     *   where: {
     *     // ... the filter for the Admin_purviews we want to count
     *   }
     * })
    **/
    count<T extends admin_purviewCountArgs>(
      args?: Subset<T, admin_purviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_purviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_purview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_purviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_purviewAggregateArgs>(args: Subset<T, Admin_purviewAggregateArgs>): Prisma.PrismaPromise<GetAdmin_purviewAggregateType<T>>

    /**
     * Group by Admin_purview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_purviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_purviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_purviewGroupByArgs['orderBy'] }
        : { orderBy?: admin_purviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_purviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_purviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_purview model
   */
  readonly fields: admin_purviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_purview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_purviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin_purview model
   */ 
  interface admin_purviewFieldRefs {
    readonly PurviewID: FieldRef<"admin_purview", 'Int'>
    readonly Name: FieldRef<"admin_purview", 'String'>
    readonly Purview: FieldRef<"admin_purview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin_purview findUnique
   */
  export type admin_purviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_purview to fetch.
     */
    where: admin_purviewWhereUniqueInput
  }

  /**
   * admin_purview findUniqueOrThrow
   */
  export type admin_purviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_purview to fetch.
     */
    where: admin_purviewWhereUniqueInput
  }

  /**
   * admin_purview findFirst
   */
  export type admin_purviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_purview to fetch.
     */
    where?: admin_purviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_purviews to fetch.
     */
    orderBy?: admin_purviewOrderByWithRelationInput | admin_purviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_purviews.
     */
    cursor?: admin_purviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_purviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_purviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_purviews.
     */
    distinct?: Admin_purviewScalarFieldEnum | Admin_purviewScalarFieldEnum[]
  }

  /**
   * admin_purview findFirstOrThrow
   */
  export type admin_purviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_purview to fetch.
     */
    where?: admin_purviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_purviews to fetch.
     */
    orderBy?: admin_purviewOrderByWithRelationInput | admin_purviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_purviews.
     */
    cursor?: admin_purviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_purviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_purviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_purviews.
     */
    distinct?: Admin_purviewScalarFieldEnum | Admin_purviewScalarFieldEnum[]
  }

  /**
   * admin_purview findMany
   */
  export type admin_purviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_purviews to fetch.
     */
    where?: admin_purviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_purviews to fetch.
     */
    orderBy?: admin_purviewOrderByWithRelationInput | admin_purviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_purviews.
     */
    cursor?: admin_purviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_purviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_purviews.
     */
    skip?: number
    distinct?: Admin_purviewScalarFieldEnum | Admin_purviewScalarFieldEnum[]
  }

  /**
   * admin_purview create
   */
  export type admin_purviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
    /**
     * The data needed to create a admin_purview.
     */
    data?: XOR<admin_purviewCreateInput, admin_purviewUncheckedCreateInput>
  }

  /**
   * admin_purview createMany
   */
  export type admin_purviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_purviews.
     */
    data: admin_purviewCreateManyInput | admin_purviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_purview update
   */
  export type admin_purviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
    /**
     * The data needed to update a admin_purview.
     */
    data: XOR<admin_purviewUpdateInput, admin_purviewUncheckedUpdateInput>
    /**
     * Choose, which admin_purview to update.
     */
    where: admin_purviewWhereUniqueInput
  }

  /**
   * admin_purview updateMany
   */
  export type admin_purviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_purviews.
     */
    data: XOR<admin_purviewUpdateManyMutationInput, admin_purviewUncheckedUpdateManyInput>
    /**
     * Filter which admin_purviews to update
     */
    where?: admin_purviewWhereInput
    /**
     * Limit how many admin_purviews to update.
     */
    limit?: number
  }

  /**
   * admin_purview upsert
   */
  export type admin_purviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
    /**
     * The filter to search for the admin_purview to update in case it exists.
     */
    where: admin_purviewWhereUniqueInput
    /**
     * In case the admin_purview found by the `where` argument doesn't exist, create a new admin_purview with this data.
     */
    create: XOR<admin_purviewCreateInput, admin_purviewUncheckedCreateInput>
    /**
     * In case the admin_purview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_purviewUpdateInput, admin_purviewUncheckedUpdateInput>
  }

  /**
   * admin_purview delete
   */
  export type admin_purviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
    /**
     * Filter which admin_purview to delete.
     */
    where: admin_purviewWhereUniqueInput
  }

  /**
   * admin_purview deleteMany
   */
  export type admin_purviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_purviews to delete
     */
    where?: admin_purviewWhereInput
    /**
     * Limit how many admin_purviews to delete.
     */
    limit?: number
  }

  /**
   * admin_purview without action
   */
  export type admin_purviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_purview
     */
    select?: admin_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_purview
     */
    omit?: admin_purviewOmit<ExtArgs> | null
  }


  /**
   * Model admin_role
   */

  export type AggregateAdmin_role = {
    _count: Admin_roleCountAggregateOutputType | null
    _avg: Admin_roleAvgAggregateOutputType | null
    _sum: Admin_roleSumAggregateOutputType | null
    _min: Admin_roleMinAggregateOutputType | null
    _max: Admin_roleMaxAggregateOutputType | null
  }

  export type Admin_roleAvgAggregateOutputType = {
    ID: number | null
    AddTime: number | null
  }

  export type Admin_roleSumAggregateOutputType = {
    ID: number | null
    AddTime: number | null
  }

  export type Admin_roleMinAggregateOutputType = {
    ID: number | null
    RoleName: string | null
    Desc: string | null
    AddTime: number | null
  }

  export type Admin_roleMaxAggregateOutputType = {
    ID: number | null
    RoleName: string | null
    Desc: string | null
    AddTime: number | null
  }

  export type Admin_roleCountAggregateOutputType = {
    ID: number
    RoleName: number
    Desc: number
    AddTime: number
    _all: number
  }


  export type Admin_roleAvgAggregateInputType = {
    ID?: true
    AddTime?: true
  }

  export type Admin_roleSumAggregateInputType = {
    ID?: true
    AddTime?: true
  }

  export type Admin_roleMinAggregateInputType = {
    ID?: true
    RoleName?: true
    Desc?: true
    AddTime?: true
  }

  export type Admin_roleMaxAggregateInputType = {
    ID?: true
    RoleName?: true
    Desc?: true
    AddTime?: true
  }

  export type Admin_roleCountAggregateInputType = {
    ID?: true
    RoleName?: true
    Desc?: true
    AddTime?: true
    _all?: true
  }

  export type Admin_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_role to aggregate.
     */
    where?: admin_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_roles to fetch.
     */
    orderBy?: admin_roleOrderByWithRelationInput | admin_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_roles
    **/
    _count?: true | Admin_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_roleMaxAggregateInputType
  }

  export type GetAdmin_roleAggregateType<T extends Admin_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_role[P]>
      : GetScalarType<T[P], AggregateAdmin_role[P]>
  }




  export type admin_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_roleWhereInput
    orderBy?: admin_roleOrderByWithAggregationInput | admin_roleOrderByWithAggregationInput[]
    by: Admin_roleScalarFieldEnum[] | Admin_roleScalarFieldEnum
    having?: admin_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_roleCountAggregateInputType | true
    _avg?: Admin_roleAvgAggregateInputType
    _sum?: Admin_roleSumAggregateInputType
    _min?: Admin_roleMinAggregateInputType
    _max?: Admin_roleMaxAggregateInputType
  }

  export type Admin_roleGroupByOutputType = {
    ID: number
    RoleName: string
    Desc: string
    AddTime: number
    _count: Admin_roleCountAggregateOutputType | null
    _avg: Admin_roleAvgAggregateOutputType | null
    _sum: Admin_roleSumAggregateOutputType | null
    _min: Admin_roleMinAggregateOutputType | null
    _max: Admin_roleMaxAggregateOutputType | null
  }

  type GetAdmin_roleGroupByPayload<T extends admin_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_roleGroupByOutputType[P]>
        }
      >
    >


  export type admin_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    RoleName?: boolean
    Desc?: boolean
    AddTime?: boolean
  }, ExtArgs["result"]["admin_role"]>



  export type admin_roleSelectScalar = {
    ID?: boolean
    RoleName?: boolean
    Desc?: boolean
    AddTime?: boolean
  }

  export type admin_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "RoleName" | "Desc" | "AddTime", ExtArgs["result"]["admin_role"]>

  export type $admin_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_role"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      RoleName: string
      Desc: string
      AddTime: number
    }, ExtArgs["result"]["admin_role"]>
    composites: {}
  }

  type admin_roleGetPayload<S extends boolean | null | undefined | admin_roleDefaultArgs> = $Result.GetResult<Prisma.$admin_rolePayload, S>

  type admin_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_roleCountAggregateInputType | true
    }

  export interface admin_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_role'], meta: { name: 'admin_role' } }
    /**
     * Find zero or one Admin_role that matches the filter.
     * @param {admin_roleFindUniqueArgs} args - Arguments to find a Admin_role
     * @example
     * // Get one Admin_role
     * const admin_role = await prisma.admin_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_roleFindUniqueArgs>(args: SelectSubset<T, admin_roleFindUniqueArgs<ExtArgs>>): Prisma__admin_roleClient<$Result.GetResult<Prisma.$admin_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_roleFindUniqueOrThrowArgs} args - Arguments to find a Admin_role
     * @example
     * // Get one Admin_role
     * const admin_role = await prisma.admin_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_roleClient<$Result.GetResult<Prisma.$admin_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleFindFirstArgs} args - Arguments to find a Admin_role
     * @example
     * // Get one Admin_role
     * const admin_role = await prisma.admin_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_roleFindFirstArgs>(args?: SelectSubset<T, admin_roleFindFirstArgs<ExtArgs>>): Prisma__admin_roleClient<$Result.GetResult<Prisma.$admin_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleFindFirstOrThrowArgs} args - Arguments to find a Admin_role
     * @example
     * // Get one Admin_role
     * const admin_role = await prisma.admin_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_roleClient<$Result.GetResult<Prisma.$admin_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_roles
     * const admin_roles = await prisma.admin_role.findMany()
     * 
     * // Get first 10 Admin_roles
     * const admin_roles = await prisma.admin_role.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const admin_roleWithIDOnly = await prisma.admin_role.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends admin_roleFindManyArgs>(args?: SelectSubset<T, admin_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_role.
     * @param {admin_roleCreateArgs} args - Arguments to create a Admin_role.
     * @example
     * // Create one Admin_role
     * const Admin_role = await prisma.admin_role.create({
     *   data: {
     *     // ... data to create a Admin_role
     *   }
     * })
     * 
     */
    create<T extends admin_roleCreateArgs>(args: SelectSubset<T, admin_roleCreateArgs<ExtArgs>>): Prisma__admin_roleClient<$Result.GetResult<Prisma.$admin_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_roles.
     * @param {admin_roleCreateManyArgs} args - Arguments to create many Admin_roles.
     * @example
     * // Create many Admin_roles
     * const admin_role = await prisma.admin_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_roleCreateManyArgs>(args?: SelectSubset<T, admin_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_role.
     * @param {admin_roleDeleteArgs} args - Arguments to delete one Admin_role.
     * @example
     * // Delete one Admin_role
     * const Admin_role = await prisma.admin_role.delete({
     *   where: {
     *     // ... filter to delete one Admin_role
     *   }
     * })
     * 
     */
    delete<T extends admin_roleDeleteArgs>(args: SelectSubset<T, admin_roleDeleteArgs<ExtArgs>>): Prisma__admin_roleClient<$Result.GetResult<Prisma.$admin_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_role.
     * @param {admin_roleUpdateArgs} args - Arguments to update one Admin_role.
     * @example
     * // Update one Admin_role
     * const admin_role = await prisma.admin_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_roleUpdateArgs>(args: SelectSubset<T, admin_roleUpdateArgs<ExtArgs>>): Prisma__admin_roleClient<$Result.GetResult<Prisma.$admin_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_roles.
     * @param {admin_roleDeleteManyArgs} args - Arguments to filter Admin_roles to delete.
     * @example
     * // Delete a few Admin_roles
     * const { count } = await prisma.admin_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_roleDeleteManyArgs>(args?: SelectSubset<T, admin_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_roles
     * const admin_role = await prisma.admin_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_roleUpdateManyArgs>(args: SelectSubset<T, admin_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_role.
     * @param {admin_roleUpsertArgs} args - Arguments to update or create a Admin_role.
     * @example
     * // Update or create a Admin_role
     * const admin_role = await prisma.admin_role.upsert({
     *   create: {
     *     // ... data to create a Admin_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_role we want to update
     *   }
     * })
     */
    upsert<T extends admin_roleUpsertArgs>(args: SelectSubset<T, admin_roleUpsertArgs<ExtArgs>>): Prisma__admin_roleClient<$Result.GetResult<Prisma.$admin_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleCountArgs} args - Arguments to filter Admin_roles to count.
     * @example
     * // Count the number of Admin_roles
     * const count = await prisma.admin_role.count({
     *   where: {
     *     // ... the filter for the Admin_roles we want to count
     *   }
     * })
    **/
    count<T extends admin_roleCountArgs>(
      args?: Subset<T, admin_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_roleAggregateArgs>(args: Subset<T, Admin_roleAggregateArgs>): Prisma.PrismaPromise<GetAdmin_roleAggregateType<T>>

    /**
     * Group by Admin_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_roleGroupByArgs['orderBy'] }
        : { orderBy?: admin_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_role model
   */
  readonly fields: admin_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin_role model
   */ 
  interface admin_roleFieldRefs {
    readonly ID: FieldRef<"admin_role", 'Int'>
    readonly RoleName: FieldRef<"admin_role", 'String'>
    readonly Desc: FieldRef<"admin_role", 'String'>
    readonly AddTime: FieldRef<"admin_role", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * admin_role findUnique
   */
  export type admin_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
    /**
     * Filter, which admin_role to fetch.
     */
    where: admin_roleWhereUniqueInput
  }

  /**
   * admin_role findUniqueOrThrow
   */
  export type admin_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
    /**
     * Filter, which admin_role to fetch.
     */
    where: admin_roleWhereUniqueInput
  }

  /**
   * admin_role findFirst
   */
  export type admin_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
    /**
     * Filter, which admin_role to fetch.
     */
    where?: admin_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_roles to fetch.
     */
    orderBy?: admin_roleOrderByWithRelationInput | admin_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_roles.
     */
    cursor?: admin_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_roles.
     */
    distinct?: Admin_roleScalarFieldEnum | Admin_roleScalarFieldEnum[]
  }

  /**
   * admin_role findFirstOrThrow
   */
  export type admin_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
    /**
     * Filter, which admin_role to fetch.
     */
    where?: admin_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_roles to fetch.
     */
    orderBy?: admin_roleOrderByWithRelationInput | admin_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_roles.
     */
    cursor?: admin_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_roles.
     */
    distinct?: Admin_roleScalarFieldEnum | Admin_roleScalarFieldEnum[]
  }

  /**
   * admin_role findMany
   */
  export type admin_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
    /**
     * Filter, which admin_roles to fetch.
     */
    where?: admin_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_roles to fetch.
     */
    orderBy?: admin_roleOrderByWithRelationInput | admin_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_roles.
     */
    cursor?: admin_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_roles.
     */
    skip?: number
    distinct?: Admin_roleScalarFieldEnum | Admin_roleScalarFieldEnum[]
  }

  /**
   * admin_role create
   */
  export type admin_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
    /**
     * The data needed to create a admin_role.
     */
    data?: XOR<admin_roleCreateInput, admin_roleUncheckedCreateInput>
  }

  /**
   * admin_role createMany
   */
  export type admin_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_roles.
     */
    data: admin_roleCreateManyInput | admin_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_role update
   */
  export type admin_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
    /**
     * The data needed to update a admin_role.
     */
    data: XOR<admin_roleUpdateInput, admin_roleUncheckedUpdateInput>
    /**
     * Choose, which admin_role to update.
     */
    where: admin_roleWhereUniqueInput
  }

  /**
   * admin_role updateMany
   */
  export type admin_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_roles.
     */
    data: XOR<admin_roleUpdateManyMutationInput, admin_roleUncheckedUpdateManyInput>
    /**
     * Filter which admin_roles to update
     */
    where?: admin_roleWhereInput
    /**
     * Limit how many admin_roles to update.
     */
    limit?: number
  }

  /**
   * admin_role upsert
   */
  export type admin_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
    /**
     * The filter to search for the admin_role to update in case it exists.
     */
    where: admin_roleWhereUniqueInput
    /**
     * In case the admin_role found by the `where` argument doesn't exist, create a new admin_role with this data.
     */
    create: XOR<admin_roleCreateInput, admin_roleUncheckedCreateInput>
    /**
     * In case the admin_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_roleUpdateInput, admin_roleUncheckedUpdateInput>
  }

  /**
   * admin_role delete
   */
  export type admin_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
    /**
     * Filter which admin_role to delete.
     */
    where: admin_roleWhereUniqueInput
  }

  /**
   * admin_role deleteMany
   */
  export type admin_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_roles to delete
     */
    where?: admin_roleWhereInput
    /**
     * Limit how many admin_roles to delete.
     */
    limit?: number
  }

  /**
   * admin_role without action
   */
  export type admin_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role
     */
    select?: admin_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role
     */
    omit?: admin_roleOmit<ExtArgs> | null
  }


  /**
   * Model admin_role_action
   */

  export type AggregateAdmin_role_action = {
    _count: Admin_role_actionCountAggregateOutputType | null
    _avg: Admin_role_actionAvgAggregateOutputType | null
    _sum: Admin_role_actionSumAggregateOutputType | null
    _min: Admin_role_actionMinAggregateOutputType | null
    _max: Admin_role_actionMaxAggregateOutputType | null
  }

  export type Admin_role_actionAvgAggregateOutputType = {
    role_id: number | null
    action_id: number | null
  }

  export type Admin_role_actionSumAggregateOutputType = {
    role_id: number | null
    action_id: number | null
  }

  export type Admin_role_actionMinAggregateOutputType = {
    role_id: number | null
    action_id: number | null
  }

  export type Admin_role_actionMaxAggregateOutputType = {
    role_id: number | null
    action_id: number | null
  }

  export type Admin_role_actionCountAggregateOutputType = {
    role_id: number
    action_id: number
    _all: number
  }


  export type Admin_role_actionAvgAggregateInputType = {
    role_id?: true
    action_id?: true
  }

  export type Admin_role_actionSumAggregateInputType = {
    role_id?: true
    action_id?: true
  }

  export type Admin_role_actionMinAggregateInputType = {
    role_id?: true
    action_id?: true
  }

  export type Admin_role_actionMaxAggregateInputType = {
    role_id?: true
    action_id?: true
  }

  export type Admin_role_actionCountAggregateInputType = {
    role_id?: true
    action_id?: true
    _all?: true
  }

  export type Admin_role_actionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_role_action to aggregate.
     */
    where?: admin_role_actionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_role_actions to fetch.
     */
    orderBy?: admin_role_actionOrderByWithRelationInput | admin_role_actionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_role_actionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_role_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_role_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_role_actions
    **/
    _count?: true | Admin_role_actionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_role_actionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_role_actionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_role_actionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_role_actionMaxAggregateInputType
  }

  export type GetAdmin_role_actionAggregateType<T extends Admin_role_actionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_role_action]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_role_action[P]>
      : GetScalarType<T[P], AggregateAdmin_role_action[P]>
  }




  export type admin_role_actionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_role_actionWhereInput
    orderBy?: admin_role_actionOrderByWithAggregationInput | admin_role_actionOrderByWithAggregationInput[]
    by: Admin_role_actionScalarFieldEnum[] | Admin_role_actionScalarFieldEnum
    having?: admin_role_actionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_role_actionCountAggregateInputType | true
    _avg?: Admin_role_actionAvgAggregateInputType
    _sum?: Admin_role_actionSumAggregateInputType
    _min?: Admin_role_actionMinAggregateInputType
    _max?: Admin_role_actionMaxAggregateInputType
  }

  export type Admin_role_actionGroupByOutputType = {
    role_id: number
    action_id: number
    _count: Admin_role_actionCountAggregateOutputType | null
    _avg: Admin_role_actionAvgAggregateOutputType | null
    _sum: Admin_role_actionSumAggregateOutputType | null
    _min: Admin_role_actionMinAggregateOutputType | null
    _max: Admin_role_actionMaxAggregateOutputType | null
  }

  type GetAdmin_role_actionGroupByPayload<T extends admin_role_actionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_role_actionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_role_actionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_role_actionGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_role_actionGroupByOutputType[P]>
        }
      >
    >


  export type admin_role_actionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    action_id?: boolean
  }, ExtArgs["result"]["admin_role_action"]>



  export type admin_role_actionSelectScalar = {
    role_id?: boolean
    action_id?: boolean
  }

  export type admin_role_actionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "action_id", ExtArgs["result"]["admin_role_action"]>

  export type $admin_role_actionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_role_action"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      action_id: number
    }, ExtArgs["result"]["admin_role_action"]>
    composites: {}
  }

  type admin_role_actionGetPayload<S extends boolean | null | undefined | admin_role_actionDefaultArgs> = $Result.GetResult<Prisma.$admin_role_actionPayload, S>

  type admin_role_actionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_role_actionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_role_actionCountAggregateInputType | true
    }

  export interface admin_role_actionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_role_action'], meta: { name: 'admin_role_action' } }
    /**
     * Find zero or one Admin_role_action that matches the filter.
     * @param {admin_role_actionFindUniqueArgs} args - Arguments to find a Admin_role_action
     * @example
     * // Get one Admin_role_action
     * const admin_role_action = await prisma.admin_role_action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_role_actionFindUniqueArgs>(args: SelectSubset<T, admin_role_actionFindUniqueArgs<ExtArgs>>): Prisma__admin_role_actionClient<$Result.GetResult<Prisma.$admin_role_actionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_role_action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_role_actionFindUniqueOrThrowArgs} args - Arguments to find a Admin_role_action
     * @example
     * // Get one Admin_role_action
     * const admin_role_action = await prisma.admin_role_action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_role_actionFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_role_actionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_role_actionClient<$Result.GetResult<Prisma.$admin_role_actionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_role_action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_actionFindFirstArgs} args - Arguments to find a Admin_role_action
     * @example
     * // Get one Admin_role_action
     * const admin_role_action = await prisma.admin_role_action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_role_actionFindFirstArgs>(args?: SelectSubset<T, admin_role_actionFindFirstArgs<ExtArgs>>): Prisma__admin_role_actionClient<$Result.GetResult<Prisma.$admin_role_actionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_role_action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_actionFindFirstOrThrowArgs} args - Arguments to find a Admin_role_action
     * @example
     * // Get one Admin_role_action
     * const admin_role_action = await prisma.admin_role_action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_role_actionFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_role_actionFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_role_actionClient<$Result.GetResult<Prisma.$admin_role_actionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_role_actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_actionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_role_actions
     * const admin_role_actions = await prisma.admin_role_action.findMany()
     * 
     * // Get first 10 Admin_role_actions
     * const admin_role_actions = await prisma.admin_role_action.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const admin_role_actionWithRole_idOnly = await prisma.admin_role_action.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends admin_role_actionFindManyArgs>(args?: SelectSubset<T, admin_role_actionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_role_actionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_role_action.
     * @param {admin_role_actionCreateArgs} args - Arguments to create a Admin_role_action.
     * @example
     * // Create one Admin_role_action
     * const Admin_role_action = await prisma.admin_role_action.create({
     *   data: {
     *     // ... data to create a Admin_role_action
     *   }
     * })
     * 
     */
    create<T extends admin_role_actionCreateArgs>(args: SelectSubset<T, admin_role_actionCreateArgs<ExtArgs>>): Prisma__admin_role_actionClient<$Result.GetResult<Prisma.$admin_role_actionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_role_actions.
     * @param {admin_role_actionCreateManyArgs} args - Arguments to create many Admin_role_actions.
     * @example
     * // Create many Admin_role_actions
     * const admin_role_action = await prisma.admin_role_action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_role_actionCreateManyArgs>(args?: SelectSubset<T, admin_role_actionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_role_action.
     * @param {admin_role_actionDeleteArgs} args - Arguments to delete one Admin_role_action.
     * @example
     * // Delete one Admin_role_action
     * const Admin_role_action = await prisma.admin_role_action.delete({
     *   where: {
     *     // ... filter to delete one Admin_role_action
     *   }
     * })
     * 
     */
    delete<T extends admin_role_actionDeleteArgs>(args: SelectSubset<T, admin_role_actionDeleteArgs<ExtArgs>>): Prisma__admin_role_actionClient<$Result.GetResult<Prisma.$admin_role_actionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_role_action.
     * @param {admin_role_actionUpdateArgs} args - Arguments to update one Admin_role_action.
     * @example
     * // Update one Admin_role_action
     * const admin_role_action = await prisma.admin_role_action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_role_actionUpdateArgs>(args: SelectSubset<T, admin_role_actionUpdateArgs<ExtArgs>>): Prisma__admin_role_actionClient<$Result.GetResult<Prisma.$admin_role_actionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_role_actions.
     * @param {admin_role_actionDeleteManyArgs} args - Arguments to filter Admin_role_actions to delete.
     * @example
     * // Delete a few Admin_role_actions
     * const { count } = await prisma.admin_role_action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_role_actionDeleteManyArgs>(args?: SelectSubset<T, admin_role_actionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_role_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_actionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_role_actions
     * const admin_role_action = await prisma.admin_role_action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_role_actionUpdateManyArgs>(args: SelectSubset<T, admin_role_actionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_role_action.
     * @param {admin_role_actionUpsertArgs} args - Arguments to update or create a Admin_role_action.
     * @example
     * // Update or create a Admin_role_action
     * const admin_role_action = await prisma.admin_role_action.upsert({
     *   create: {
     *     // ... data to create a Admin_role_action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_role_action we want to update
     *   }
     * })
     */
    upsert<T extends admin_role_actionUpsertArgs>(args: SelectSubset<T, admin_role_actionUpsertArgs<ExtArgs>>): Prisma__admin_role_actionClient<$Result.GetResult<Prisma.$admin_role_actionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_role_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_actionCountArgs} args - Arguments to filter Admin_role_actions to count.
     * @example
     * // Count the number of Admin_role_actions
     * const count = await prisma.admin_role_action.count({
     *   where: {
     *     // ... the filter for the Admin_role_actions we want to count
     *   }
     * })
    **/
    count<T extends admin_role_actionCountArgs>(
      args?: Subset<T, admin_role_actionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_role_actionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_role_action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_role_actionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_role_actionAggregateArgs>(args: Subset<T, Admin_role_actionAggregateArgs>): Prisma.PrismaPromise<GetAdmin_role_actionAggregateType<T>>

    /**
     * Group by Admin_role_action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_actionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_role_actionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_role_actionGroupByArgs['orderBy'] }
        : { orderBy?: admin_role_actionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_role_actionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_role_actionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_role_action model
   */
  readonly fields: admin_role_actionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_role_action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_role_actionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin_role_action model
   */ 
  interface admin_role_actionFieldRefs {
    readonly role_id: FieldRef<"admin_role_action", 'Int'>
    readonly action_id: FieldRef<"admin_role_action", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * admin_role_action findUnique
   */
  export type admin_role_actionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_action to fetch.
     */
    where: admin_role_actionWhereUniqueInput
  }

  /**
   * admin_role_action findUniqueOrThrow
   */
  export type admin_role_actionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_action to fetch.
     */
    where: admin_role_actionWhereUniqueInput
  }

  /**
   * admin_role_action findFirst
   */
  export type admin_role_actionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_action to fetch.
     */
    where?: admin_role_actionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_role_actions to fetch.
     */
    orderBy?: admin_role_actionOrderByWithRelationInput | admin_role_actionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_role_actions.
     */
    cursor?: admin_role_actionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_role_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_role_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_role_actions.
     */
    distinct?: Admin_role_actionScalarFieldEnum | Admin_role_actionScalarFieldEnum[]
  }

  /**
   * admin_role_action findFirstOrThrow
   */
  export type admin_role_actionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_action to fetch.
     */
    where?: admin_role_actionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_role_actions to fetch.
     */
    orderBy?: admin_role_actionOrderByWithRelationInput | admin_role_actionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_role_actions.
     */
    cursor?: admin_role_actionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_role_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_role_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_role_actions.
     */
    distinct?: Admin_role_actionScalarFieldEnum | Admin_role_actionScalarFieldEnum[]
  }

  /**
   * admin_role_action findMany
   */
  export type admin_role_actionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_actions to fetch.
     */
    where?: admin_role_actionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_role_actions to fetch.
     */
    orderBy?: admin_role_actionOrderByWithRelationInput | admin_role_actionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_role_actions.
     */
    cursor?: admin_role_actionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_role_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_role_actions.
     */
    skip?: number
    distinct?: Admin_role_actionScalarFieldEnum | Admin_role_actionScalarFieldEnum[]
  }

  /**
   * admin_role_action create
   */
  export type admin_role_actionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
    /**
     * The data needed to create a admin_role_action.
     */
    data: XOR<admin_role_actionCreateInput, admin_role_actionUncheckedCreateInput>
  }

  /**
   * admin_role_action createMany
   */
  export type admin_role_actionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_role_actions.
     */
    data: admin_role_actionCreateManyInput | admin_role_actionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_role_action update
   */
  export type admin_role_actionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
    /**
     * The data needed to update a admin_role_action.
     */
    data: XOR<admin_role_actionUpdateInput, admin_role_actionUncheckedUpdateInput>
    /**
     * Choose, which admin_role_action to update.
     */
    where: admin_role_actionWhereUniqueInput
  }

  /**
   * admin_role_action updateMany
   */
  export type admin_role_actionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_role_actions.
     */
    data: XOR<admin_role_actionUpdateManyMutationInput, admin_role_actionUncheckedUpdateManyInput>
    /**
     * Filter which admin_role_actions to update
     */
    where?: admin_role_actionWhereInput
    /**
     * Limit how many admin_role_actions to update.
     */
    limit?: number
  }

  /**
   * admin_role_action upsert
   */
  export type admin_role_actionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
    /**
     * The filter to search for the admin_role_action to update in case it exists.
     */
    where: admin_role_actionWhereUniqueInput
    /**
     * In case the admin_role_action found by the `where` argument doesn't exist, create a new admin_role_action with this data.
     */
    create: XOR<admin_role_actionCreateInput, admin_role_actionUncheckedCreateInput>
    /**
     * In case the admin_role_action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_role_actionUpdateInput, admin_role_actionUncheckedUpdateInput>
  }

  /**
   * admin_role_action delete
   */
  export type admin_role_actionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
    /**
     * Filter which admin_role_action to delete.
     */
    where: admin_role_actionWhereUniqueInput
  }

  /**
   * admin_role_action deleteMany
   */
  export type admin_role_actionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_role_actions to delete
     */
    where?: admin_role_actionWhereInput
    /**
     * Limit how many admin_role_actions to delete.
     */
    limit?: number
  }

  /**
   * admin_role_action without action
   */
  export type admin_role_actionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_action
     */
    select?: admin_role_actionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_action
     */
    omit?: admin_role_actionOmit<ExtArgs> | null
  }


  /**
   * Model admin_role_purview
   */

  export type AggregateAdmin_role_purview = {
    _count: Admin_role_purviewCountAggregateOutputType | null
    _avg: Admin_role_purviewAvgAggregateOutputType | null
    _sum: Admin_role_purviewSumAggregateOutputType | null
    _min: Admin_role_purviewMinAggregateOutputType | null
    _max: Admin_role_purviewMaxAggregateOutputType | null
  }

  export type Admin_role_purviewAvgAggregateOutputType = {
    RoleID: number | null
  }

  export type Admin_role_purviewSumAggregateOutputType = {
    RoleID: number | null
  }

  export type Admin_role_purviewMinAggregateOutputType = {
    RoleID: number | null
    Purview: string | null
  }

  export type Admin_role_purviewMaxAggregateOutputType = {
    RoleID: number | null
    Purview: string | null
  }

  export type Admin_role_purviewCountAggregateOutputType = {
    RoleID: number
    Purview: number
    _all: number
  }


  export type Admin_role_purviewAvgAggregateInputType = {
    RoleID?: true
  }

  export type Admin_role_purviewSumAggregateInputType = {
    RoleID?: true
  }

  export type Admin_role_purviewMinAggregateInputType = {
    RoleID?: true
    Purview?: true
  }

  export type Admin_role_purviewMaxAggregateInputType = {
    RoleID?: true
    Purview?: true
  }

  export type Admin_role_purviewCountAggregateInputType = {
    RoleID?: true
    Purview?: true
    _all?: true
  }

  export type Admin_role_purviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_role_purview to aggregate.
     */
    where?: admin_role_purviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_role_purviews to fetch.
     */
    orderBy?: admin_role_purviewOrderByWithRelationInput | admin_role_purviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_role_purviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_role_purviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_role_purviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_role_purviews
    **/
    _count?: true | Admin_role_purviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_role_purviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_role_purviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_role_purviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_role_purviewMaxAggregateInputType
  }

  export type GetAdmin_role_purviewAggregateType<T extends Admin_role_purviewAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_role_purview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_role_purview[P]>
      : GetScalarType<T[P], AggregateAdmin_role_purview[P]>
  }




  export type admin_role_purviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_role_purviewWhereInput
    orderBy?: admin_role_purviewOrderByWithAggregationInput | admin_role_purviewOrderByWithAggregationInput[]
    by: Admin_role_purviewScalarFieldEnum[] | Admin_role_purviewScalarFieldEnum
    having?: admin_role_purviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_role_purviewCountAggregateInputType | true
    _avg?: Admin_role_purviewAvgAggregateInputType
    _sum?: Admin_role_purviewSumAggregateInputType
    _min?: Admin_role_purviewMinAggregateInputType
    _max?: Admin_role_purviewMaxAggregateInputType
  }

  export type Admin_role_purviewGroupByOutputType = {
    RoleID: number
    Purview: string
    _count: Admin_role_purviewCountAggregateOutputType | null
    _avg: Admin_role_purviewAvgAggregateOutputType | null
    _sum: Admin_role_purviewSumAggregateOutputType | null
    _min: Admin_role_purviewMinAggregateOutputType | null
    _max: Admin_role_purviewMaxAggregateOutputType | null
  }

  type GetAdmin_role_purviewGroupByPayload<T extends admin_role_purviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_role_purviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_role_purviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_role_purviewGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_role_purviewGroupByOutputType[P]>
        }
      >
    >


  export type admin_role_purviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RoleID?: boolean
    Purview?: boolean
  }, ExtArgs["result"]["admin_role_purview"]>



  export type admin_role_purviewSelectScalar = {
    RoleID?: boolean
    Purview?: boolean
  }

  export type admin_role_purviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"RoleID" | "Purview", ExtArgs["result"]["admin_role_purview"]>

  export type $admin_role_purviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_role_purview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      RoleID: number
      Purview: string
    }, ExtArgs["result"]["admin_role_purview"]>
    composites: {}
  }

  type admin_role_purviewGetPayload<S extends boolean | null | undefined | admin_role_purviewDefaultArgs> = $Result.GetResult<Prisma.$admin_role_purviewPayload, S>

  type admin_role_purviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_role_purviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_role_purviewCountAggregateInputType | true
    }

  export interface admin_role_purviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_role_purview'], meta: { name: 'admin_role_purview' } }
    /**
     * Find zero or one Admin_role_purview that matches the filter.
     * @param {admin_role_purviewFindUniqueArgs} args - Arguments to find a Admin_role_purview
     * @example
     * // Get one Admin_role_purview
     * const admin_role_purview = await prisma.admin_role_purview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_role_purviewFindUniqueArgs>(args: SelectSubset<T, admin_role_purviewFindUniqueArgs<ExtArgs>>): Prisma__admin_role_purviewClient<$Result.GetResult<Prisma.$admin_role_purviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_role_purview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_role_purviewFindUniqueOrThrowArgs} args - Arguments to find a Admin_role_purview
     * @example
     * // Get one Admin_role_purview
     * const admin_role_purview = await prisma.admin_role_purview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_role_purviewFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_role_purviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_role_purviewClient<$Result.GetResult<Prisma.$admin_role_purviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_role_purview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_purviewFindFirstArgs} args - Arguments to find a Admin_role_purview
     * @example
     * // Get one Admin_role_purview
     * const admin_role_purview = await prisma.admin_role_purview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_role_purviewFindFirstArgs>(args?: SelectSubset<T, admin_role_purviewFindFirstArgs<ExtArgs>>): Prisma__admin_role_purviewClient<$Result.GetResult<Prisma.$admin_role_purviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_role_purview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_purviewFindFirstOrThrowArgs} args - Arguments to find a Admin_role_purview
     * @example
     * // Get one Admin_role_purview
     * const admin_role_purview = await prisma.admin_role_purview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_role_purviewFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_role_purviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_role_purviewClient<$Result.GetResult<Prisma.$admin_role_purviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_role_purviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_purviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_role_purviews
     * const admin_role_purviews = await prisma.admin_role_purview.findMany()
     * 
     * // Get first 10 Admin_role_purviews
     * const admin_role_purviews = await prisma.admin_role_purview.findMany({ take: 10 })
     * 
     * // Only select the `RoleID`
     * const admin_role_purviewWithRoleIDOnly = await prisma.admin_role_purview.findMany({ select: { RoleID: true } })
     * 
     */
    findMany<T extends admin_role_purviewFindManyArgs>(args?: SelectSubset<T, admin_role_purviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_role_purviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_role_purview.
     * @param {admin_role_purviewCreateArgs} args - Arguments to create a Admin_role_purview.
     * @example
     * // Create one Admin_role_purview
     * const Admin_role_purview = await prisma.admin_role_purview.create({
     *   data: {
     *     // ... data to create a Admin_role_purview
     *   }
     * })
     * 
     */
    create<T extends admin_role_purviewCreateArgs>(args: SelectSubset<T, admin_role_purviewCreateArgs<ExtArgs>>): Prisma__admin_role_purviewClient<$Result.GetResult<Prisma.$admin_role_purviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_role_purviews.
     * @param {admin_role_purviewCreateManyArgs} args - Arguments to create many Admin_role_purviews.
     * @example
     * // Create many Admin_role_purviews
     * const admin_role_purview = await prisma.admin_role_purview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_role_purviewCreateManyArgs>(args?: SelectSubset<T, admin_role_purviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_role_purview.
     * @param {admin_role_purviewDeleteArgs} args - Arguments to delete one Admin_role_purview.
     * @example
     * // Delete one Admin_role_purview
     * const Admin_role_purview = await prisma.admin_role_purview.delete({
     *   where: {
     *     // ... filter to delete one Admin_role_purview
     *   }
     * })
     * 
     */
    delete<T extends admin_role_purviewDeleteArgs>(args: SelectSubset<T, admin_role_purviewDeleteArgs<ExtArgs>>): Prisma__admin_role_purviewClient<$Result.GetResult<Prisma.$admin_role_purviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_role_purview.
     * @param {admin_role_purviewUpdateArgs} args - Arguments to update one Admin_role_purview.
     * @example
     * // Update one Admin_role_purview
     * const admin_role_purview = await prisma.admin_role_purview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_role_purviewUpdateArgs>(args: SelectSubset<T, admin_role_purviewUpdateArgs<ExtArgs>>): Prisma__admin_role_purviewClient<$Result.GetResult<Prisma.$admin_role_purviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_role_purviews.
     * @param {admin_role_purviewDeleteManyArgs} args - Arguments to filter Admin_role_purviews to delete.
     * @example
     * // Delete a few Admin_role_purviews
     * const { count } = await prisma.admin_role_purview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_role_purviewDeleteManyArgs>(args?: SelectSubset<T, admin_role_purviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_role_purviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_purviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_role_purviews
     * const admin_role_purview = await prisma.admin_role_purview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_role_purviewUpdateManyArgs>(args: SelectSubset<T, admin_role_purviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_role_purview.
     * @param {admin_role_purviewUpsertArgs} args - Arguments to update or create a Admin_role_purview.
     * @example
     * // Update or create a Admin_role_purview
     * const admin_role_purview = await prisma.admin_role_purview.upsert({
     *   create: {
     *     // ... data to create a Admin_role_purview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_role_purview we want to update
     *   }
     * })
     */
    upsert<T extends admin_role_purviewUpsertArgs>(args: SelectSubset<T, admin_role_purviewUpsertArgs<ExtArgs>>): Prisma__admin_role_purviewClient<$Result.GetResult<Prisma.$admin_role_purviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_role_purviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_purviewCountArgs} args - Arguments to filter Admin_role_purviews to count.
     * @example
     * // Count the number of Admin_role_purviews
     * const count = await prisma.admin_role_purview.count({
     *   where: {
     *     // ... the filter for the Admin_role_purviews we want to count
     *   }
     * })
    **/
    count<T extends admin_role_purviewCountArgs>(
      args?: Subset<T, admin_role_purviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_role_purviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_role_purview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_role_purviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_role_purviewAggregateArgs>(args: Subset<T, Admin_role_purviewAggregateArgs>): Prisma.PrismaPromise<GetAdmin_role_purviewAggregateType<T>>

    /**
     * Group by Admin_role_purview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_role_purviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_role_purviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_role_purviewGroupByArgs['orderBy'] }
        : { orderBy?: admin_role_purviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_role_purviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_role_purviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_role_purview model
   */
  readonly fields: admin_role_purviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_role_purview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_role_purviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin_role_purview model
   */ 
  interface admin_role_purviewFieldRefs {
    readonly RoleID: FieldRef<"admin_role_purview", 'Int'>
    readonly Purview: FieldRef<"admin_role_purview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin_role_purview findUnique
   */
  export type admin_role_purviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_purview to fetch.
     */
    where: admin_role_purviewWhereUniqueInput
  }

  /**
   * admin_role_purview findUniqueOrThrow
   */
  export type admin_role_purviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_purview to fetch.
     */
    where: admin_role_purviewWhereUniqueInput
  }

  /**
   * admin_role_purview findFirst
   */
  export type admin_role_purviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_purview to fetch.
     */
    where?: admin_role_purviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_role_purviews to fetch.
     */
    orderBy?: admin_role_purviewOrderByWithRelationInput | admin_role_purviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_role_purviews.
     */
    cursor?: admin_role_purviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_role_purviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_role_purviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_role_purviews.
     */
    distinct?: Admin_role_purviewScalarFieldEnum | Admin_role_purviewScalarFieldEnum[]
  }

  /**
   * admin_role_purview findFirstOrThrow
   */
  export type admin_role_purviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_purview to fetch.
     */
    where?: admin_role_purviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_role_purviews to fetch.
     */
    orderBy?: admin_role_purviewOrderByWithRelationInput | admin_role_purviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_role_purviews.
     */
    cursor?: admin_role_purviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_role_purviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_role_purviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_role_purviews.
     */
    distinct?: Admin_role_purviewScalarFieldEnum | Admin_role_purviewScalarFieldEnum[]
  }

  /**
   * admin_role_purview findMany
   */
  export type admin_role_purviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
    /**
     * Filter, which admin_role_purviews to fetch.
     */
    where?: admin_role_purviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_role_purviews to fetch.
     */
    orderBy?: admin_role_purviewOrderByWithRelationInput | admin_role_purviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_role_purviews.
     */
    cursor?: admin_role_purviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_role_purviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_role_purviews.
     */
    skip?: number
    distinct?: Admin_role_purviewScalarFieldEnum | Admin_role_purviewScalarFieldEnum[]
  }

  /**
   * admin_role_purview create
   */
  export type admin_role_purviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
    /**
     * The data needed to create a admin_role_purview.
     */
    data: XOR<admin_role_purviewCreateInput, admin_role_purviewUncheckedCreateInput>
  }

  /**
   * admin_role_purview createMany
   */
  export type admin_role_purviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_role_purviews.
     */
    data: admin_role_purviewCreateManyInput | admin_role_purviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_role_purview update
   */
  export type admin_role_purviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
    /**
     * The data needed to update a admin_role_purview.
     */
    data: XOR<admin_role_purviewUpdateInput, admin_role_purviewUncheckedUpdateInput>
    /**
     * Choose, which admin_role_purview to update.
     */
    where: admin_role_purviewWhereUniqueInput
  }

  /**
   * admin_role_purview updateMany
   */
  export type admin_role_purviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_role_purviews.
     */
    data: XOR<admin_role_purviewUpdateManyMutationInput, admin_role_purviewUncheckedUpdateManyInput>
    /**
     * Filter which admin_role_purviews to update
     */
    where?: admin_role_purviewWhereInput
    /**
     * Limit how many admin_role_purviews to update.
     */
    limit?: number
  }

  /**
   * admin_role_purview upsert
   */
  export type admin_role_purviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
    /**
     * The filter to search for the admin_role_purview to update in case it exists.
     */
    where: admin_role_purviewWhereUniqueInput
    /**
     * In case the admin_role_purview found by the `where` argument doesn't exist, create a new admin_role_purview with this data.
     */
    create: XOR<admin_role_purviewCreateInput, admin_role_purviewUncheckedCreateInput>
    /**
     * In case the admin_role_purview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_role_purviewUpdateInput, admin_role_purviewUncheckedUpdateInput>
  }

  /**
   * admin_role_purview delete
   */
  export type admin_role_purviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
    /**
     * Filter which admin_role_purview to delete.
     */
    where: admin_role_purviewWhereUniqueInput
  }

  /**
   * admin_role_purview deleteMany
   */
  export type admin_role_purviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_role_purviews to delete
     */
    where?: admin_role_purviewWhereInput
    /**
     * Limit how many admin_role_purviews to delete.
     */
    limit?: number
  }

  /**
   * admin_role_purview without action
   */
  export type admin_role_purviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_role_purview
     */
    select?: admin_role_purviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_role_purview
     */
    omit?: admin_role_purviewOmit<ExtArgs> | null
  }


  /**
   * Model ancient
   */

  export type AggregateAncient = {
    _count: AncientCountAggregateOutputType | null
    _avg: AncientAvgAggregateOutputType | null
    _sum: AncientSumAggregateOutputType | null
    _min: AncientMinAggregateOutputType | null
    _max: AncientMaxAggregateOutputType | null
  }

  export type AncientAvgAggregateOutputType = {
    ID: number | null
  }

  export type AncientSumAggregateOutputType = {
    ID: number | null
  }

  export type AncientMinAggregateOutputType = {
    ID: number | null
    Name: string | null
    Author: string | null
    Dynasty: string | null
  }

  export type AncientMaxAggregateOutputType = {
    ID: number | null
    Name: string | null
    Author: string | null
    Dynasty: string | null
  }

  export type AncientCountAggregateOutputType = {
    ID: number
    Name: number
    Author: number
    Dynasty: number
    _all: number
  }


  export type AncientAvgAggregateInputType = {
    ID?: true
  }

  export type AncientSumAggregateInputType = {
    ID?: true
  }

  export type AncientMinAggregateInputType = {
    ID?: true
    Name?: true
    Author?: true
    Dynasty?: true
  }

  export type AncientMaxAggregateInputType = {
    ID?: true
    Name?: true
    Author?: true
    Dynasty?: true
  }

  export type AncientCountAggregateInputType = {
    ID?: true
    Name?: true
    Author?: true
    Dynasty?: true
    _all?: true
  }

  export type AncientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ancient to aggregate.
     */
    where?: ancientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ancients to fetch.
     */
    orderBy?: ancientOrderByWithRelationInput | ancientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ancientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ancients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ancients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ancients
    **/
    _count?: true | AncientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AncientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AncientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AncientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AncientMaxAggregateInputType
  }

  export type GetAncientAggregateType<T extends AncientAggregateArgs> = {
        [P in keyof T & keyof AggregateAncient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAncient[P]>
      : GetScalarType<T[P], AggregateAncient[P]>
  }




  export type ancientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ancientWhereInput
    orderBy?: ancientOrderByWithAggregationInput | ancientOrderByWithAggregationInput[]
    by: AncientScalarFieldEnum[] | AncientScalarFieldEnum
    having?: ancientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AncientCountAggregateInputType | true
    _avg?: AncientAvgAggregateInputType
    _sum?: AncientSumAggregateInputType
    _min?: AncientMinAggregateInputType
    _max?: AncientMaxAggregateInputType
  }

  export type AncientGroupByOutputType = {
    ID: number
    Name: string | null
    Author: string | null
    Dynasty: string | null
    _count: AncientCountAggregateOutputType | null
    _avg: AncientAvgAggregateOutputType | null
    _sum: AncientSumAggregateOutputType | null
    _min: AncientMinAggregateOutputType | null
    _max: AncientMaxAggregateOutputType | null
  }

  type GetAncientGroupByPayload<T extends ancientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AncientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AncientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AncientGroupByOutputType[P]>
            : GetScalarType<T[P], AncientGroupByOutputType[P]>
        }
      >
    >


  export type ancientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Name?: boolean
    Author?: boolean
    Dynasty?: boolean
  }, ExtArgs["result"]["ancient"]>



  export type ancientSelectScalar = {
    ID?: boolean
    Name?: boolean
    Author?: boolean
    Dynasty?: boolean
  }

  export type ancientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Name" | "Author" | "Dynasty", ExtArgs["result"]["ancient"]>

  export type $ancientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ancient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Name: string | null
      Author: string | null
      Dynasty: string | null
    }, ExtArgs["result"]["ancient"]>
    composites: {}
  }

  type ancientGetPayload<S extends boolean | null | undefined | ancientDefaultArgs> = $Result.GetResult<Prisma.$ancientPayload, S>

  type ancientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ancientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AncientCountAggregateInputType | true
    }

  export interface ancientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ancient'], meta: { name: 'ancient' } }
    /**
     * Find zero or one Ancient that matches the filter.
     * @param {ancientFindUniqueArgs} args - Arguments to find a Ancient
     * @example
     * // Get one Ancient
     * const ancient = await prisma.ancient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ancientFindUniqueArgs>(args: SelectSubset<T, ancientFindUniqueArgs<ExtArgs>>): Prisma__ancientClient<$Result.GetResult<Prisma.$ancientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ancient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ancientFindUniqueOrThrowArgs} args - Arguments to find a Ancient
     * @example
     * // Get one Ancient
     * const ancient = await prisma.ancient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ancientFindUniqueOrThrowArgs>(args: SelectSubset<T, ancientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ancientClient<$Result.GetResult<Prisma.$ancientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ancient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ancientFindFirstArgs} args - Arguments to find a Ancient
     * @example
     * // Get one Ancient
     * const ancient = await prisma.ancient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ancientFindFirstArgs>(args?: SelectSubset<T, ancientFindFirstArgs<ExtArgs>>): Prisma__ancientClient<$Result.GetResult<Prisma.$ancientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ancient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ancientFindFirstOrThrowArgs} args - Arguments to find a Ancient
     * @example
     * // Get one Ancient
     * const ancient = await prisma.ancient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ancientFindFirstOrThrowArgs>(args?: SelectSubset<T, ancientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ancientClient<$Result.GetResult<Prisma.$ancientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ancients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ancientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ancients
     * const ancients = await prisma.ancient.findMany()
     * 
     * // Get first 10 Ancients
     * const ancients = await prisma.ancient.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const ancientWithIDOnly = await prisma.ancient.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends ancientFindManyArgs>(args?: SelectSubset<T, ancientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ancientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ancient.
     * @param {ancientCreateArgs} args - Arguments to create a Ancient.
     * @example
     * // Create one Ancient
     * const Ancient = await prisma.ancient.create({
     *   data: {
     *     // ... data to create a Ancient
     *   }
     * })
     * 
     */
    create<T extends ancientCreateArgs>(args: SelectSubset<T, ancientCreateArgs<ExtArgs>>): Prisma__ancientClient<$Result.GetResult<Prisma.$ancientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ancients.
     * @param {ancientCreateManyArgs} args - Arguments to create many Ancients.
     * @example
     * // Create many Ancients
     * const ancient = await prisma.ancient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ancientCreateManyArgs>(args?: SelectSubset<T, ancientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ancient.
     * @param {ancientDeleteArgs} args - Arguments to delete one Ancient.
     * @example
     * // Delete one Ancient
     * const Ancient = await prisma.ancient.delete({
     *   where: {
     *     // ... filter to delete one Ancient
     *   }
     * })
     * 
     */
    delete<T extends ancientDeleteArgs>(args: SelectSubset<T, ancientDeleteArgs<ExtArgs>>): Prisma__ancientClient<$Result.GetResult<Prisma.$ancientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ancient.
     * @param {ancientUpdateArgs} args - Arguments to update one Ancient.
     * @example
     * // Update one Ancient
     * const ancient = await prisma.ancient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ancientUpdateArgs>(args: SelectSubset<T, ancientUpdateArgs<ExtArgs>>): Prisma__ancientClient<$Result.GetResult<Prisma.$ancientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ancients.
     * @param {ancientDeleteManyArgs} args - Arguments to filter Ancients to delete.
     * @example
     * // Delete a few Ancients
     * const { count } = await prisma.ancient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ancientDeleteManyArgs>(args?: SelectSubset<T, ancientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ancients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ancientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ancients
     * const ancient = await prisma.ancient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ancientUpdateManyArgs>(args: SelectSubset<T, ancientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ancient.
     * @param {ancientUpsertArgs} args - Arguments to update or create a Ancient.
     * @example
     * // Update or create a Ancient
     * const ancient = await prisma.ancient.upsert({
     *   create: {
     *     // ... data to create a Ancient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ancient we want to update
     *   }
     * })
     */
    upsert<T extends ancientUpsertArgs>(args: SelectSubset<T, ancientUpsertArgs<ExtArgs>>): Prisma__ancientClient<$Result.GetResult<Prisma.$ancientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ancients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ancientCountArgs} args - Arguments to filter Ancients to count.
     * @example
     * // Count the number of Ancients
     * const count = await prisma.ancient.count({
     *   where: {
     *     // ... the filter for the Ancients we want to count
     *   }
     * })
    **/
    count<T extends ancientCountArgs>(
      args?: Subset<T, ancientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AncientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ancient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AncientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AncientAggregateArgs>(args: Subset<T, AncientAggregateArgs>): Prisma.PrismaPromise<GetAncientAggregateType<T>>

    /**
     * Group by Ancient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ancientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ancientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ancientGroupByArgs['orderBy'] }
        : { orderBy?: ancientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ancientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAncientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ancient model
   */
  readonly fields: ancientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ancient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ancientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ancient model
   */ 
  interface ancientFieldRefs {
    readonly ID: FieldRef<"ancient", 'Int'>
    readonly Name: FieldRef<"ancient", 'String'>
    readonly Author: FieldRef<"ancient", 'String'>
    readonly Dynasty: FieldRef<"ancient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ancient findUnique
   */
  export type ancientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
    /**
     * Filter, which ancient to fetch.
     */
    where: ancientWhereUniqueInput
  }

  /**
   * ancient findUniqueOrThrow
   */
  export type ancientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
    /**
     * Filter, which ancient to fetch.
     */
    where: ancientWhereUniqueInput
  }

  /**
   * ancient findFirst
   */
  export type ancientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
    /**
     * Filter, which ancient to fetch.
     */
    where?: ancientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ancients to fetch.
     */
    orderBy?: ancientOrderByWithRelationInput | ancientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ancients.
     */
    cursor?: ancientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ancients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ancients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ancients.
     */
    distinct?: AncientScalarFieldEnum | AncientScalarFieldEnum[]
  }

  /**
   * ancient findFirstOrThrow
   */
  export type ancientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
    /**
     * Filter, which ancient to fetch.
     */
    where?: ancientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ancients to fetch.
     */
    orderBy?: ancientOrderByWithRelationInput | ancientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ancients.
     */
    cursor?: ancientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ancients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ancients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ancients.
     */
    distinct?: AncientScalarFieldEnum | AncientScalarFieldEnum[]
  }

  /**
   * ancient findMany
   */
  export type ancientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
    /**
     * Filter, which ancients to fetch.
     */
    where?: ancientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ancients to fetch.
     */
    orderBy?: ancientOrderByWithRelationInput | ancientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ancients.
     */
    cursor?: ancientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ancients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ancients.
     */
    skip?: number
    distinct?: AncientScalarFieldEnum | AncientScalarFieldEnum[]
  }

  /**
   * ancient create
   */
  export type ancientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
    /**
     * The data needed to create a ancient.
     */
    data: XOR<ancientCreateInput, ancientUncheckedCreateInput>
  }

  /**
   * ancient createMany
   */
  export type ancientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ancients.
     */
    data: ancientCreateManyInput | ancientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ancient update
   */
  export type ancientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
    /**
     * The data needed to update a ancient.
     */
    data: XOR<ancientUpdateInput, ancientUncheckedUpdateInput>
    /**
     * Choose, which ancient to update.
     */
    where: ancientWhereUniqueInput
  }

  /**
   * ancient updateMany
   */
  export type ancientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ancients.
     */
    data: XOR<ancientUpdateManyMutationInput, ancientUncheckedUpdateManyInput>
    /**
     * Filter which ancients to update
     */
    where?: ancientWhereInput
    /**
     * Limit how many ancients to update.
     */
    limit?: number
  }

  /**
   * ancient upsert
   */
  export type ancientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
    /**
     * The filter to search for the ancient to update in case it exists.
     */
    where: ancientWhereUniqueInput
    /**
     * In case the ancient found by the `where` argument doesn't exist, create a new ancient with this data.
     */
    create: XOR<ancientCreateInput, ancientUncheckedCreateInput>
    /**
     * In case the ancient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ancientUpdateInput, ancientUncheckedUpdateInput>
  }

  /**
   * ancient delete
   */
  export type ancientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
    /**
     * Filter which ancient to delete.
     */
    where: ancientWhereUniqueInput
  }

  /**
   * ancient deleteMany
   */
  export type ancientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ancients to delete
     */
    where?: ancientWhereInput
    /**
     * Limit how many ancients to delete.
     */
    limit?: number
  }

  /**
   * ancient without action
   */
  export type ancientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ancient
     */
    select?: ancientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ancient
     */
    omit?: ancientOmit<ExtArgs> | null
  }


  /**
   * Model illness_case
   */

  export type AggregateIllness_case = {
    _count: Illness_caseCountAggregateOutputType | null
    _avg: Illness_caseAvgAggregateOutputType | null
    _sum: Illness_caseSumAggregateOutputType | null
    _min: Illness_caseMinAggregateOutputType | null
    _max: Illness_caseMaxAggregateOutputType | null
  }

  export type Illness_caseAvgAggregateOutputType = {
    ID: number | null
    AID: number | null
  }

  export type Illness_caseSumAggregateOutputType = {
    ID: number | null
    AID: number | null
  }

  export type Illness_caseMinAggregateOutputType = {
    ID: number | null
    AID: number | null
    Case: string | null
    Medication: string | null
  }

  export type Illness_caseMaxAggregateOutputType = {
    ID: number | null
    AID: number | null
    Case: string | null
    Medication: string | null
  }

  export type Illness_caseCountAggregateOutputType = {
    ID: number
    AID: number
    Case: number
    Medication: number
    _all: number
  }


  export type Illness_caseAvgAggregateInputType = {
    ID?: true
    AID?: true
  }

  export type Illness_caseSumAggregateInputType = {
    ID?: true
    AID?: true
  }

  export type Illness_caseMinAggregateInputType = {
    ID?: true
    AID?: true
    Case?: true
    Medication?: true
  }

  export type Illness_caseMaxAggregateInputType = {
    ID?: true
    AID?: true
    Case?: true
    Medication?: true
  }

  export type Illness_caseCountAggregateInputType = {
    ID?: true
    AID?: true
    Case?: true
    Medication?: true
    _all?: true
  }

  export type Illness_caseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which illness_case to aggregate.
     */
    where?: illness_caseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of illness_cases to fetch.
     */
    orderBy?: illness_caseOrderByWithRelationInput | illness_caseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: illness_caseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` illness_cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` illness_cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned illness_cases
    **/
    _count?: true | Illness_caseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Illness_caseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Illness_caseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Illness_caseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Illness_caseMaxAggregateInputType
  }

  export type GetIllness_caseAggregateType<T extends Illness_caseAggregateArgs> = {
        [P in keyof T & keyof AggregateIllness_case]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIllness_case[P]>
      : GetScalarType<T[P], AggregateIllness_case[P]>
  }




  export type illness_caseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: illness_caseWhereInput
    orderBy?: illness_caseOrderByWithAggregationInput | illness_caseOrderByWithAggregationInput[]
    by: Illness_caseScalarFieldEnum[] | Illness_caseScalarFieldEnum
    having?: illness_caseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Illness_caseCountAggregateInputType | true
    _avg?: Illness_caseAvgAggregateInputType
    _sum?: Illness_caseSumAggregateInputType
    _min?: Illness_caseMinAggregateInputType
    _max?: Illness_caseMaxAggregateInputType
  }

  export type Illness_caseGroupByOutputType = {
    ID: number
    AID: number | null
    Case: string | null
    Medication: string | null
    _count: Illness_caseCountAggregateOutputType | null
    _avg: Illness_caseAvgAggregateOutputType | null
    _sum: Illness_caseSumAggregateOutputType | null
    _min: Illness_caseMinAggregateOutputType | null
    _max: Illness_caseMaxAggregateOutputType | null
  }

  type GetIllness_caseGroupByPayload<T extends illness_caseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Illness_caseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Illness_caseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Illness_caseGroupByOutputType[P]>
            : GetScalarType<T[P], Illness_caseGroupByOutputType[P]>
        }
      >
    >


  export type illness_caseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    AID?: boolean
    Case?: boolean
    Medication?: boolean
  }, ExtArgs["result"]["illness_case"]>



  export type illness_caseSelectScalar = {
    ID?: boolean
    AID?: boolean
    Case?: boolean
    Medication?: boolean
  }

  export type illness_caseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "AID" | "Case" | "Medication", ExtArgs["result"]["illness_case"]>

  export type $illness_casePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "illness_case"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      AID: number | null
      Case: string | null
      Medication: string | null
    }, ExtArgs["result"]["illness_case"]>
    composites: {}
  }

  type illness_caseGetPayload<S extends boolean | null | undefined | illness_caseDefaultArgs> = $Result.GetResult<Prisma.$illness_casePayload, S>

  type illness_caseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<illness_caseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Illness_caseCountAggregateInputType | true
    }

  export interface illness_caseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['illness_case'], meta: { name: 'illness_case' } }
    /**
     * Find zero or one Illness_case that matches the filter.
     * @param {illness_caseFindUniqueArgs} args - Arguments to find a Illness_case
     * @example
     * // Get one Illness_case
     * const illness_case = await prisma.illness_case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends illness_caseFindUniqueArgs>(args: SelectSubset<T, illness_caseFindUniqueArgs<ExtArgs>>): Prisma__illness_caseClient<$Result.GetResult<Prisma.$illness_casePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Illness_case that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {illness_caseFindUniqueOrThrowArgs} args - Arguments to find a Illness_case
     * @example
     * // Get one Illness_case
     * const illness_case = await prisma.illness_case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends illness_caseFindUniqueOrThrowArgs>(args: SelectSubset<T, illness_caseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__illness_caseClient<$Result.GetResult<Prisma.$illness_casePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Illness_case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {illness_caseFindFirstArgs} args - Arguments to find a Illness_case
     * @example
     * // Get one Illness_case
     * const illness_case = await prisma.illness_case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends illness_caseFindFirstArgs>(args?: SelectSubset<T, illness_caseFindFirstArgs<ExtArgs>>): Prisma__illness_caseClient<$Result.GetResult<Prisma.$illness_casePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Illness_case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {illness_caseFindFirstOrThrowArgs} args - Arguments to find a Illness_case
     * @example
     * // Get one Illness_case
     * const illness_case = await prisma.illness_case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends illness_caseFindFirstOrThrowArgs>(args?: SelectSubset<T, illness_caseFindFirstOrThrowArgs<ExtArgs>>): Prisma__illness_caseClient<$Result.GetResult<Prisma.$illness_casePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Illness_cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {illness_caseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Illness_cases
     * const illness_cases = await prisma.illness_case.findMany()
     * 
     * // Get first 10 Illness_cases
     * const illness_cases = await prisma.illness_case.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const illness_caseWithIDOnly = await prisma.illness_case.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends illness_caseFindManyArgs>(args?: SelectSubset<T, illness_caseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$illness_casePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Illness_case.
     * @param {illness_caseCreateArgs} args - Arguments to create a Illness_case.
     * @example
     * // Create one Illness_case
     * const Illness_case = await prisma.illness_case.create({
     *   data: {
     *     // ... data to create a Illness_case
     *   }
     * })
     * 
     */
    create<T extends illness_caseCreateArgs>(args: SelectSubset<T, illness_caseCreateArgs<ExtArgs>>): Prisma__illness_caseClient<$Result.GetResult<Prisma.$illness_casePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Illness_cases.
     * @param {illness_caseCreateManyArgs} args - Arguments to create many Illness_cases.
     * @example
     * // Create many Illness_cases
     * const illness_case = await prisma.illness_case.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends illness_caseCreateManyArgs>(args?: SelectSubset<T, illness_caseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Illness_case.
     * @param {illness_caseDeleteArgs} args - Arguments to delete one Illness_case.
     * @example
     * // Delete one Illness_case
     * const Illness_case = await prisma.illness_case.delete({
     *   where: {
     *     // ... filter to delete one Illness_case
     *   }
     * })
     * 
     */
    delete<T extends illness_caseDeleteArgs>(args: SelectSubset<T, illness_caseDeleteArgs<ExtArgs>>): Prisma__illness_caseClient<$Result.GetResult<Prisma.$illness_casePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Illness_case.
     * @param {illness_caseUpdateArgs} args - Arguments to update one Illness_case.
     * @example
     * // Update one Illness_case
     * const illness_case = await prisma.illness_case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends illness_caseUpdateArgs>(args: SelectSubset<T, illness_caseUpdateArgs<ExtArgs>>): Prisma__illness_caseClient<$Result.GetResult<Prisma.$illness_casePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Illness_cases.
     * @param {illness_caseDeleteManyArgs} args - Arguments to filter Illness_cases to delete.
     * @example
     * // Delete a few Illness_cases
     * const { count } = await prisma.illness_case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends illness_caseDeleteManyArgs>(args?: SelectSubset<T, illness_caseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Illness_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {illness_caseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Illness_cases
     * const illness_case = await prisma.illness_case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends illness_caseUpdateManyArgs>(args: SelectSubset<T, illness_caseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Illness_case.
     * @param {illness_caseUpsertArgs} args - Arguments to update or create a Illness_case.
     * @example
     * // Update or create a Illness_case
     * const illness_case = await prisma.illness_case.upsert({
     *   create: {
     *     // ... data to create a Illness_case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Illness_case we want to update
     *   }
     * })
     */
    upsert<T extends illness_caseUpsertArgs>(args: SelectSubset<T, illness_caseUpsertArgs<ExtArgs>>): Prisma__illness_caseClient<$Result.GetResult<Prisma.$illness_casePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Illness_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {illness_caseCountArgs} args - Arguments to filter Illness_cases to count.
     * @example
     * // Count the number of Illness_cases
     * const count = await prisma.illness_case.count({
     *   where: {
     *     // ... the filter for the Illness_cases we want to count
     *   }
     * })
    **/
    count<T extends illness_caseCountArgs>(
      args?: Subset<T, illness_caseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Illness_caseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Illness_case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Illness_caseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Illness_caseAggregateArgs>(args: Subset<T, Illness_caseAggregateArgs>): Prisma.PrismaPromise<GetIllness_caseAggregateType<T>>

    /**
     * Group by Illness_case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {illness_caseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends illness_caseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: illness_caseGroupByArgs['orderBy'] }
        : { orderBy?: illness_caseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, illness_caseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIllness_caseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the illness_case model
   */
  readonly fields: illness_caseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for illness_case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__illness_caseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the illness_case model
   */ 
  interface illness_caseFieldRefs {
    readonly ID: FieldRef<"illness_case", 'Int'>
    readonly AID: FieldRef<"illness_case", 'Int'>
    readonly Case: FieldRef<"illness_case", 'String'>
    readonly Medication: FieldRef<"illness_case", 'String'>
  }
    

  // Custom InputTypes
  /**
   * illness_case findUnique
   */
  export type illness_caseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
    /**
     * Filter, which illness_case to fetch.
     */
    where: illness_caseWhereUniqueInput
  }

  /**
   * illness_case findUniqueOrThrow
   */
  export type illness_caseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
    /**
     * Filter, which illness_case to fetch.
     */
    where: illness_caseWhereUniqueInput
  }

  /**
   * illness_case findFirst
   */
  export type illness_caseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
    /**
     * Filter, which illness_case to fetch.
     */
    where?: illness_caseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of illness_cases to fetch.
     */
    orderBy?: illness_caseOrderByWithRelationInput | illness_caseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for illness_cases.
     */
    cursor?: illness_caseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` illness_cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` illness_cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of illness_cases.
     */
    distinct?: Illness_caseScalarFieldEnum | Illness_caseScalarFieldEnum[]
  }

  /**
   * illness_case findFirstOrThrow
   */
  export type illness_caseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
    /**
     * Filter, which illness_case to fetch.
     */
    where?: illness_caseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of illness_cases to fetch.
     */
    orderBy?: illness_caseOrderByWithRelationInput | illness_caseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for illness_cases.
     */
    cursor?: illness_caseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` illness_cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` illness_cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of illness_cases.
     */
    distinct?: Illness_caseScalarFieldEnum | Illness_caseScalarFieldEnum[]
  }

  /**
   * illness_case findMany
   */
  export type illness_caseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
    /**
     * Filter, which illness_cases to fetch.
     */
    where?: illness_caseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of illness_cases to fetch.
     */
    orderBy?: illness_caseOrderByWithRelationInput | illness_caseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing illness_cases.
     */
    cursor?: illness_caseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` illness_cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` illness_cases.
     */
    skip?: number
    distinct?: Illness_caseScalarFieldEnum | Illness_caseScalarFieldEnum[]
  }

  /**
   * illness_case create
   */
  export type illness_caseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
    /**
     * The data needed to create a illness_case.
     */
    data: XOR<illness_caseCreateInput, illness_caseUncheckedCreateInput>
  }

  /**
   * illness_case createMany
   */
  export type illness_caseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many illness_cases.
     */
    data: illness_caseCreateManyInput | illness_caseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * illness_case update
   */
  export type illness_caseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
    /**
     * The data needed to update a illness_case.
     */
    data: XOR<illness_caseUpdateInput, illness_caseUncheckedUpdateInput>
    /**
     * Choose, which illness_case to update.
     */
    where: illness_caseWhereUniqueInput
  }

  /**
   * illness_case updateMany
   */
  export type illness_caseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update illness_cases.
     */
    data: XOR<illness_caseUpdateManyMutationInput, illness_caseUncheckedUpdateManyInput>
    /**
     * Filter which illness_cases to update
     */
    where?: illness_caseWhereInput
    /**
     * Limit how many illness_cases to update.
     */
    limit?: number
  }

  /**
   * illness_case upsert
   */
  export type illness_caseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
    /**
     * The filter to search for the illness_case to update in case it exists.
     */
    where: illness_caseWhereUniqueInput
    /**
     * In case the illness_case found by the `where` argument doesn't exist, create a new illness_case with this data.
     */
    create: XOR<illness_caseCreateInput, illness_caseUncheckedCreateInput>
    /**
     * In case the illness_case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<illness_caseUpdateInput, illness_caseUncheckedUpdateInput>
  }

  /**
   * illness_case delete
   */
  export type illness_caseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
    /**
     * Filter which illness_case to delete.
     */
    where: illness_caseWhereUniqueInput
  }

  /**
   * illness_case deleteMany
   */
  export type illness_caseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which illness_cases to delete
     */
    where?: illness_caseWhereInput
    /**
     * Limit how many illness_cases to delete.
     */
    limit?: number
  }

  /**
   * illness_case without action
   */
  export type illness_caseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the illness_case
     */
    select?: illness_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the illness_case
     */
    omit?: illness_caseOmit<ExtArgs> | null
  }


  /**
   * Model medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    ID: number | null
  }

  export type MedicationSumAggregateOutputType = {
    ID: number | null
  }

  export type MedicationMinAggregateOutputType = {
    ID: number | null
    Name: string | null
    Desc: string | null
  }

  export type MedicationMaxAggregateOutputType = {
    ID: number | null
    Name: string | null
    Desc: string | null
  }

  export type MedicationCountAggregateOutputType = {
    ID: number
    Name: number
    Desc: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    ID?: true
  }

  export type MedicationSumAggregateInputType = {
    ID?: true
  }

  export type MedicationMinAggregateInputType = {
    ID?: true
    Name?: true
    Desc?: true
  }

  export type MedicationMaxAggregateInputType = {
    ID?: true
    Name?: true
    Desc?: true
  }

  export type MedicationCountAggregateInputType = {
    ID?: true
    Name?: true
    Desc?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medication to aggregate.
     */
    where?: medicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medications to fetch.
     */
    orderBy?: medicationOrderByWithRelationInput | medicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type medicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicationWhereInput
    orderBy?: medicationOrderByWithAggregationInput | medicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: medicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    ID: number
    Name: string | null
    Desc: string | null
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends medicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type medicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Name?: boolean
    Desc?: boolean
  }, ExtArgs["result"]["medication"]>



  export type medicationSelectScalar = {
    ID?: boolean
    Name?: boolean
    Desc?: boolean
  }

  export type medicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Name" | "Desc", ExtArgs["result"]["medication"]>

  export type $medicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Name: string | null
      Desc: string | null
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type medicationGetPayload<S extends boolean | null | undefined | medicationDefaultArgs> = $Result.GetResult<Prisma.$medicationPayload, S>

  type medicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<medicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface medicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medication'], meta: { name: 'medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {medicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medicationFindUniqueArgs>(args: SelectSubset<T, medicationFindUniqueArgs<ExtArgs>>): Prisma__medicationClient<$Result.GetResult<Prisma.$medicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {medicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medicationFindUniqueOrThrowArgs>(args: SelectSubset<T, medicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medicationClient<$Result.GetResult<Prisma.$medicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medicationFindFirstArgs>(args?: SelectSubset<T, medicationFindFirstArgs<ExtArgs>>): Prisma__medicationClient<$Result.GetResult<Prisma.$medicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medicationFindFirstOrThrowArgs>(args?: SelectSubset<T, medicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__medicationClient<$Result.GetResult<Prisma.$medicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const medicationWithIDOnly = await prisma.medication.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends medicationFindManyArgs>(args?: SelectSubset<T, medicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {medicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends medicationCreateArgs>(args: SelectSubset<T, medicationCreateArgs<ExtArgs>>): Prisma__medicationClient<$Result.GetResult<Prisma.$medicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {medicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medicationCreateManyArgs>(args?: SelectSubset<T, medicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medication.
     * @param {medicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends medicationDeleteArgs>(args: SelectSubset<T, medicationDeleteArgs<ExtArgs>>): Prisma__medicationClient<$Result.GetResult<Prisma.$medicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {medicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medicationUpdateArgs>(args: SelectSubset<T, medicationUpdateArgs<ExtArgs>>): Prisma__medicationClient<$Result.GetResult<Prisma.$medicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {medicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medicationDeleteManyArgs>(args?: SelectSubset<T, medicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medicationUpdateManyArgs>(args: SelectSubset<T, medicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medication.
     * @param {medicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends medicationUpsertArgs>(args: SelectSubset<T, medicationUpsertArgs<ExtArgs>>): Prisma__medicationClient<$Result.GetResult<Prisma.$medicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends medicationCountArgs>(
      args?: Subset<T, medicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends medicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medicationGroupByArgs['orderBy'] }
        : { orderBy?: medicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, medicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medication model
   */
  readonly fields: medicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the medication model
   */ 
  interface medicationFieldRefs {
    readonly ID: FieldRef<"medication", 'Int'>
    readonly Name: FieldRef<"medication", 'String'>
    readonly Desc: FieldRef<"medication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * medication findUnique
   */
  export type medicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
    /**
     * Filter, which medication to fetch.
     */
    where: medicationWhereUniqueInput
  }

  /**
   * medication findUniqueOrThrow
   */
  export type medicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
    /**
     * Filter, which medication to fetch.
     */
    where: medicationWhereUniqueInput
  }

  /**
   * medication findFirst
   */
  export type medicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
    /**
     * Filter, which medication to fetch.
     */
    where?: medicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medications to fetch.
     */
    orderBy?: medicationOrderByWithRelationInput | medicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medications.
     */
    cursor?: medicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * medication findFirstOrThrow
   */
  export type medicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
    /**
     * Filter, which medication to fetch.
     */
    where?: medicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medications to fetch.
     */
    orderBy?: medicationOrderByWithRelationInput | medicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medications.
     */
    cursor?: medicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * medication findMany
   */
  export type medicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
    /**
     * Filter, which medications to fetch.
     */
    where?: medicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medications to fetch.
     */
    orderBy?: medicationOrderByWithRelationInput | medicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medications.
     */
    cursor?: medicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * medication create
   */
  export type medicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
    /**
     * The data needed to create a medication.
     */
    data: XOR<medicationCreateInput, medicationUncheckedCreateInput>
  }

  /**
   * medication createMany
   */
  export type medicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medications.
     */
    data: medicationCreateManyInput | medicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medication update
   */
  export type medicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
    /**
     * The data needed to update a medication.
     */
    data: XOR<medicationUpdateInput, medicationUncheckedUpdateInput>
    /**
     * Choose, which medication to update.
     */
    where: medicationWhereUniqueInput
  }

  /**
   * medication updateMany
   */
  export type medicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medications.
     */
    data: XOR<medicationUpdateManyMutationInput, medicationUncheckedUpdateManyInput>
    /**
     * Filter which medications to update
     */
    where?: medicationWhereInput
    /**
     * Limit how many medications to update.
     */
    limit?: number
  }

  /**
   * medication upsert
   */
  export type medicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
    /**
     * The filter to search for the medication to update in case it exists.
     */
    where: medicationWhereUniqueInput
    /**
     * In case the medication found by the `where` argument doesn't exist, create a new medication with this data.
     */
    create: XOR<medicationCreateInput, medicationUncheckedCreateInput>
    /**
     * In case the medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medicationUpdateInput, medicationUncheckedUpdateInput>
  }

  /**
   * medication delete
   */
  export type medicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
    /**
     * Filter which medication to delete.
     */
    where: medicationWhereUniqueInput
  }

  /**
   * medication deleteMany
   */
  export type medicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medications to delete
     */
    where?: medicationWhereInput
    /**
     * Limit how many medications to delete.
     */
    limit?: number
  }

  /**
   * medication without action
   */
  export type medicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medication
     */
    select?: medicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medication
     */
    omit?: medicationOmit<ExtArgs> | null
  }


  /**
   * Model centre_static_data
   */

  export type AggregateCentre_static_data = {
    _count: Centre_static_dataCountAggregateOutputType | null
    _avg: Centre_static_dataAvgAggregateOutputType | null
    _sum: Centre_static_dataSumAggregateOutputType | null
    _min: Centre_static_dataMinAggregateOutputType | null
    _max: Centre_static_dataMaxAggregateOutputType | null
  }

  export type Centre_static_dataAvgAggregateOutputType = {
    id: number | null
    updatetime: number | null
  }

  export type Centre_static_dataSumAggregateOutputType = {
    id: number | null
    updatetime: number | null
  }

  export type Centre_static_dataMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    updatetime: number | null
    isEdit: boolean | null
    enabled: boolean | null
  }

  export type Centre_static_dataMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    updatetime: number | null
    isEdit: boolean | null
    enabled: boolean | null
  }

  export type Centre_static_dataCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    updatetime: number
    isEdit: number
    enabled: number
    _all: number
  }


  export type Centre_static_dataAvgAggregateInputType = {
    id?: true
    updatetime?: true
  }

  export type Centre_static_dataSumAggregateInputType = {
    id?: true
    updatetime?: true
  }

  export type Centre_static_dataMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    updatetime?: true
    isEdit?: true
    enabled?: true
  }

  export type Centre_static_dataMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    updatetime?: true
    isEdit?: true
    enabled?: true
  }

  export type Centre_static_dataCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    updatetime?: true
    isEdit?: true
    enabled?: true
    _all?: true
  }

  export type Centre_static_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which centre_static_data to aggregate.
     */
    where?: centre_static_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centre_static_data to fetch.
     */
    orderBy?: centre_static_dataOrderByWithRelationInput | centre_static_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: centre_static_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centre_static_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centre_static_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned centre_static_data
    **/
    _count?: true | Centre_static_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Centre_static_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Centre_static_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Centre_static_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Centre_static_dataMaxAggregateInputType
  }

  export type GetCentre_static_dataAggregateType<T extends Centre_static_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateCentre_static_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentre_static_data[P]>
      : GetScalarType<T[P], AggregateCentre_static_data[P]>
  }




  export type centre_static_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: centre_static_dataWhereInput
    orderBy?: centre_static_dataOrderByWithAggregationInput | centre_static_dataOrderByWithAggregationInput[]
    by: Centre_static_dataScalarFieldEnum[] | Centre_static_dataScalarFieldEnum
    having?: centre_static_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Centre_static_dataCountAggregateInputType | true
    _avg?: Centre_static_dataAvgAggregateInputType
    _sum?: Centre_static_dataSumAggregateInputType
    _min?: Centre_static_dataMinAggregateInputType
    _max?: Centre_static_dataMaxAggregateInputType
  }

  export type Centre_static_dataGroupByOutputType = {
    id: number
    name: string
    desc: string
    updatetime: number
    isEdit: boolean | null
    enabled: boolean
    _count: Centre_static_dataCountAggregateOutputType | null
    _avg: Centre_static_dataAvgAggregateOutputType | null
    _sum: Centre_static_dataSumAggregateOutputType | null
    _min: Centre_static_dataMinAggregateOutputType | null
    _max: Centre_static_dataMaxAggregateOutputType | null
  }

  type GetCentre_static_dataGroupByPayload<T extends centre_static_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Centre_static_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Centre_static_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Centre_static_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Centre_static_dataGroupByOutputType[P]>
        }
      >
    >


  export type centre_static_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    updatetime?: boolean
    isEdit?: boolean
    enabled?: boolean
  }, ExtArgs["result"]["centre_static_data"]>



  export type centre_static_dataSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    updatetime?: boolean
    isEdit?: boolean
    enabled?: boolean
  }

  export type centre_static_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "updatetime" | "isEdit" | "enabled", ExtArgs["result"]["centre_static_data"]>

  export type $centre_static_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "centre_static_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string
      updatetime: number
      isEdit: boolean | null
      enabled: boolean
    }, ExtArgs["result"]["centre_static_data"]>
    composites: {}
  }

  type centre_static_dataGetPayload<S extends boolean | null | undefined | centre_static_dataDefaultArgs> = $Result.GetResult<Prisma.$centre_static_dataPayload, S>

  type centre_static_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<centre_static_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Centre_static_dataCountAggregateInputType | true
    }

  export interface centre_static_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['centre_static_data'], meta: { name: 'centre_static_data' } }
    /**
     * Find zero or one Centre_static_data that matches the filter.
     * @param {centre_static_dataFindUniqueArgs} args - Arguments to find a Centre_static_data
     * @example
     * // Get one Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends centre_static_dataFindUniqueArgs>(args: SelectSubset<T, centre_static_dataFindUniqueArgs<ExtArgs>>): Prisma__centre_static_dataClient<$Result.GetResult<Prisma.$centre_static_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Centre_static_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {centre_static_dataFindUniqueOrThrowArgs} args - Arguments to find a Centre_static_data
     * @example
     * // Get one Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends centre_static_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, centre_static_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__centre_static_dataClient<$Result.GetResult<Prisma.$centre_static_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centre_static_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_static_dataFindFirstArgs} args - Arguments to find a Centre_static_data
     * @example
     * // Get one Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends centre_static_dataFindFirstArgs>(args?: SelectSubset<T, centre_static_dataFindFirstArgs<ExtArgs>>): Prisma__centre_static_dataClient<$Result.GetResult<Prisma.$centre_static_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centre_static_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_static_dataFindFirstOrThrowArgs} args - Arguments to find a Centre_static_data
     * @example
     * // Get one Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends centre_static_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, centre_static_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__centre_static_dataClient<$Result.GetResult<Prisma.$centre_static_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Centre_static_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_static_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.findMany()
     * 
     * // Get first 10 Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centre_static_dataWithIdOnly = await prisma.centre_static_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends centre_static_dataFindManyArgs>(args?: SelectSubset<T, centre_static_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centre_static_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Centre_static_data.
     * @param {centre_static_dataCreateArgs} args - Arguments to create a Centre_static_data.
     * @example
     * // Create one Centre_static_data
     * const Centre_static_data = await prisma.centre_static_data.create({
     *   data: {
     *     // ... data to create a Centre_static_data
     *   }
     * })
     * 
     */
    create<T extends centre_static_dataCreateArgs>(args: SelectSubset<T, centre_static_dataCreateArgs<ExtArgs>>): Prisma__centre_static_dataClient<$Result.GetResult<Prisma.$centre_static_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Centre_static_data.
     * @param {centre_static_dataCreateManyArgs} args - Arguments to create many Centre_static_data.
     * @example
     * // Create many Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends centre_static_dataCreateManyArgs>(args?: SelectSubset<T, centre_static_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Centre_static_data.
     * @param {centre_static_dataDeleteArgs} args - Arguments to delete one Centre_static_data.
     * @example
     * // Delete one Centre_static_data
     * const Centre_static_data = await prisma.centre_static_data.delete({
     *   where: {
     *     // ... filter to delete one Centre_static_data
     *   }
     * })
     * 
     */
    delete<T extends centre_static_dataDeleteArgs>(args: SelectSubset<T, centre_static_dataDeleteArgs<ExtArgs>>): Prisma__centre_static_dataClient<$Result.GetResult<Prisma.$centre_static_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Centre_static_data.
     * @param {centre_static_dataUpdateArgs} args - Arguments to update one Centre_static_data.
     * @example
     * // Update one Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends centre_static_dataUpdateArgs>(args: SelectSubset<T, centre_static_dataUpdateArgs<ExtArgs>>): Prisma__centre_static_dataClient<$Result.GetResult<Prisma.$centre_static_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Centre_static_data.
     * @param {centre_static_dataDeleteManyArgs} args - Arguments to filter Centre_static_data to delete.
     * @example
     * // Delete a few Centre_static_data
     * const { count } = await prisma.centre_static_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends centre_static_dataDeleteManyArgs>(args?: SelectSubset<T, centre_static_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centre_static_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_static_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends centre_static_dataUpdateManyArgs>(args: SelectSubset<T, centre_static_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Centre_static_data.
     * @param {centre_static_dataUpsertArgs} args - Arguments to update or create a Centre_static_data.
     * @example
     * // Update or create a Centre_static_data
     * const centre_static_data = await prisma.centre_static_data.upsert({
     *   create: {
     *     // ... data to create a Centre_static_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Centre_static_data we want to update
     *   }
     * })
     */
    upsert<T extends centre_static_dataUpsertArgs>(args: SelectSubset<T, centre_static_dataUpsertArgs<ExtArgs>>): Prisma__centre_static_dataClient<$Result.GetResult<Prisma.$centre_static_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Centre_static_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_static_dataCountArgs} args - Arguments to filter Centre_static_data to count.
     * @example
     * // Count the number of Centre_static_data
     * const count = await prisma.centre_static_data.count({
     *   where: {
     *     // ... the filter for the Centre_static_data we want to count
     *   }
     * })
    **/
    count<T extends centre_static_dataCountArgs>(
      args?: Subset<T, centre_static_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Centre_static_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Centre_static_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Centre_static_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Centre_static_dataAggregateArgs>(args: Subset<T, Centre_static_dataAggregateArgs>): Prisma.PrismaPromise<GetCentre_static_dataAggregateType<T>>

    /**
     * Group by Centre_static_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_static_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends centre_static_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: centre_static_dataGroupByArgs['orderBy'] }
        : { orderBy?: centre_static_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, centre_static_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentre_static_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the centre_static_data model
   */
  readonly fields: centre_static_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for centre_static_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__centre_static_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the centre_static_data model
   */ 
  interface centre_static_dataFieldRefs {
    readonly id: FieldRef<"centre_static_data", 'Int'>
    readonly name: FieldRef<"centre_static_data", 'String'>
    readonly desc: FieldRef<"centre_static_data", 'String'>
    readonly updatetime: FieldRef<"centre_static_data", 'Int'>
    readonly isEdit: FieldRef<"centre_static_data", 'Boolean'>
    readonly enabled: FieldRef<"centre_static_data", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * centre_static_data findUnique
   */
  export type centre_static_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
    /**
     * Filter, which centre_static_data to fetch.
     */
    where: centre_static_dataWhereUniqueInput
  }

  /**
   * centre_static_data findUniqueOrThrow
   */
  export type centre_static_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
    /**
     * Filter, which centre_static_data to fetch.
     */
    where: centre_static_dataWhereUniqueInput
  }

  /**
   * centre_static_data findFirst
   */
  export type centre_static_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
    /**
     * Filter, which centre_static_data to fetch.
     */
    where?: centre_static_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centre_static_data to fetch.
     */
    orderBy?: centre_static_dataOrderByWithRelationInput | centre_static_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for centre_static_data.
     */
    cursor?: centre_static_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centre_static_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centre_static_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centre_static_data.
     */
    distinct?: Centre_static_dataScalarFieldEnum | Centre_static_dataScalarFieldEnum[]
  }

  /**
   * centre_static_data findFirstOrThrow
   */
  export type centre_static_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
    /**
     * Filter, which centre_static_data to fetch.
     */
    where?: centre_static_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centre_static_data to fetch.
     */
    orderBy?: centre_static_dataOrderByWithRelationInput | centre_static_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for centre_static_data.
     */
    cursor?: centre_static_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centre_static_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centre_static_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centre_static_data.
     */
    distinct?: Centre_static_dataScalarFieldEnum | Centre_static_dataScalarFieldEnum[]
  }

  /**
   * centre_static_data findMany
   */
  export type centre_static_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
    /**
     * Filter, which centre_static_data to fetch.
     */
    where?: centre_static_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centre_static_data to fetch.
     */
    orderBy?: centre_static_dataOrderByWithRelationInput | centre_static_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing centre_static_data.
     */
    cursor?: centre_static_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centre_static_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centre_static_data.
     */
    skip?: number
    distinct?: Centre_static_dataScalarFieldEnum | Centre_static_dataScalarFieldEnum[]
  }

  /**
   * centre_static_data create
   */
  export type centre_static_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a centre_static_data.
     */
    data: XOR<centre_static_dataCreateInput, centre_static_dataUncheckedCreateInput>
  }

  /**
   * centre_static_data createMany
   */
  export type centre_static_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many centre_static_data.
     */
    data: centre_static_dataCreateManyInput | centre_static_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * centre_static_data update
   */
  export type centre_static_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a centre_static_data.
     */
    data: XOR<centre_static_dataUpdateInput, centre_static_dataUncheckedUpdateInput>
    /**
     * Choose, which centre_static_data to update.
     */
    where: centre_static_dataWhereUniqueInput
  }

  /**
   * centre_static_data updateMany
   */
  export type centre_static_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update centre_static_data.
     */
    data: XOR<centre_static_dataUpdateManyMutationInput, centre_static_dataUncheckedUpdateManyInput>
    /**
     * Filter which centre_static_data to update
     */
    where?: centre_static_dataWhereInput
    /**
     * Limit how many centre_static_data to update.
     */
    limit?: number
  }

  /**
   * centre_static_data upsert
   */
  export type centre_static_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the centre_static_data to update in case it exists.
     */
    where: centre_static_dataWhereUniqueInput
    /**
     * In case the centre_static_data found by the `where` argument doesn't exist, create a new centre_static_data with this data.
     */
    create: XOR<centre_static_dataCreateInput, centre_static_dataUncheckedCreateInput>
    /**
     * In case the centre_static_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<centre_static_dataUpdateInput, centre_static_dataUncheckedUpdateInput>
  }

  /**
   * centre_static_data delete
   */
  export type centre_static_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
    /**
     * Filter which centre_static_data to delete.
     */
    where: centre_static_dataWhereUniqueInput
  }

  /**
   * centre_static_data deleteMany
   */
  export type centre_static_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which centre_static_data to delete
     */
    where?: centre_static_dataWhereInput
    /**
     * Limit how many centre_static_data to delete.
     */
    limit?: number
  }

  /**
   * centre_static_data without action
   */
  export type centre_static_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_static_data
     */
    select?: centre_static_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_static_data
     */
    omit?: centre_static_dataOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
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

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const Admin_actionsScalarFieldEnum: {
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

  export type Admin_actionsScalarFieldEnum = (typeof Admin_actionsScalarFieldEnum)[keyof typeof Admin_actionsScalarFieldEnum]


  export const Admin_purviewScalarFieldEnum: {
    PurviewID: 'PurviewID',
    Name: 'Name',
    Purview: 'Purview'
  };

  export type Admin_purviewScalarFieldEnum = (typeof Admin_purviewScalarFieldEnum)[keyof typeof Admin_purviewScalarFieldEnum]


  export const Admin_roleScalarFieldEnum: {
    ID: 'ID',
    RoleName: 'RoleName',
    Desc: 'Desc',
    AddTime: 'AddTime'
  };

  export type Admin_roleScalarFieldEnum = (typeof Admin_roleScalarFieldEnum)[keyof typeof Admin_roleScalarFieldEnum]


  export const Admin_role_actionScalarFieldEnum: {
    role_id: 'role_id',
    action_id: 'action_id'
  };

  export type Admin_role_actionScalarFieldEnum = (typeof Admin_role_actionScalarFieldEnum)[keyof typeof Admin_role_actionScalarFieldEnum]


  export const Admin_role_purviewScalarFieldEnum: {
    RoleID: 'RoleID',
    Purview: 'Purview'
  };

  export type Admin_role_purviewScalarFieldEnum = (typeof Admin_role_purviewScalarFieldEnum)[keyof typeof Admin_role_purviewScalarFieldEnum]


  export const AncientScalarFieldEnum: {
    ID: 'ID',
    Name: 'Name',
    Author: 'Author',
    Dynasty: 'Dynasty'
  };

  export type AncientScalarFieldEnum = (typeof AncientScalarFieldEnum)[keyof typeof AncientScalarFieldEnum]


  export const Illness_caseScalarFieldEnum: {
    ID: 'ID',
    AID: 'AID',
    Case: 'Case',
    Medication: 'Medication'
  };

  export type Illness_caseScalarFieldEnum = (typeof Illness_caseScalarFieldEnum)[keyof typeof Illness_caseScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    ID: 'ID',
    Name: 'Name',
    Desc: 'Desc'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const Centre_static_dataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    updatetime: 'updatetime',
    isEdit: 'isEdit',
    enabled: 'enabled'
  };

  export type Centre_static_dataScalarFieldEnum = (typeof Centre_static_dataScalarFieldEnum)[keyof typeof Centre_static_dataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const adminOrderByRelevanceFieldEnum: {
    UserName: 'UserName',
    Password: 'Password',
    Salt: 'Salt',
    Telphone: 'Telphone',
    LoginIP: 'LoginIP'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const admin_actionsOrderByRelevanceFieldEnum: {
    action_name: 'action_name',
    controller: 'controller',
    action: 'action',
    desc: 'desc'
  };

  export type admin_actionsOrderByRelevanceFieldEnum = (typeof admin_actionsOrderByRelevanceFieldEnum)[keyof typeof admin_actionsOrderByRelevanceFieldEnum]


  export const admin_purviewOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Purview: 'Purview'
  };

  export type admin_purviewOrderByRelevanceFieldEnum = (typeof admin_purviewOrderByRelevanceFieldEnum)[keyof typeof admin_purviewOrderByRelevanceFieldEnum]


  export const admin_roleOrderByRelevanceFieldEnum: {
    RoleName: 'RoleName',
    Desc: 'Desc'
  };

  export type admin_roleOrderByRelevanceFieldEnum = (typeof admin_roleOrderByRelevanceFieldEnum)[keyof typeof admin_roleOrderByRelevanceFieldEnum]


  export const admin_role_purviewOrderByRelevanceFieldEnum: {
    Purview: 'Purview'
  };

  export type admin_role_purviewOrderByRelevanceFieldEnum = (typeof admin_role_purviewOrderByRelevanceFieldEnum)[keyof typeof admin_role_purviewOrderByRelevanceFieldEnum]


  export const ancientOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Author: 'Author',
    Dynasty: 'Dynasty'
  };

  export type ancientOrderByRelevanceFieldEnum = (typeof ancientOrderByRelevanceFieldEnum)[keyof typeof ancientOrderByRelevanceFieldEnum]


  export const illness_caseOrderByRelevanceFieldEnum: {
    Case: 'Case',
    Medication: 'Medication'
  };

  export type illness_caseOrderByRelevanceFieldEnum = (typeof illness_caseOrderByRelevanceFieldEnum)[keyof typeof illness_caseOrderByRelevanceFieldEnum]


  export const medicationOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Desc: 'Desc'
  };

  export type medicationOrderByRelevanceFieldEnum = (typeof medicationOrderByRelevanceFieldEnum)[keyof typeof medicationOrderByRelevanceFieldEnum]


  export const centre_static_dataOrderByRelevanceFieldEnum: {
    name: 'name',
    desc: 'desc'
  };

  export type centre_static_dataOrderByRelevanceFieldEnum = (typeof centre_static_dataOrderByRelevanceFieldEnum)[keyof typeof centre_static_dataOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    ID?: IntFilter<"admin"> | number
    UserName?: StringFilter<"admin"> | string
    RoleID?: IntFilter<"admin"> | number
    Sex?: BoolFilter<"admin"> | boolean
    Password?: StringFilter<"admin"> | string
    Salt?: StringFilter<"admin"> | string
    Telphone?: StringNullableFilter<"admin"> | string | null
    Status?: IntFilter<"admin"> | number
    Dateline?: IntFilter<"admin"> | number
    LoginTime?: IntFilter<"admin"> | number
    LoginIP?: StringFilter<"admin"> | string
    PowerID?: BoolNullableFilter<"admin"> | boolean | null
  }

  export type adminOrderByWithRelationInput = {
    ID?: SortOrder
    UserName?: SortOrder
    RoleID?: SortOrder
    Sex?: SortOrder
    Password?: SortOrder
    Salt?: SortOrder
    Telphone?: SortOrderInput | SortOrder
    Status?: SortOrder
    Dateline?: SortOrder
    LoginTime?: SortOrder
    LoginIP?: SortOrder
    PowerID?: SortOrderInput | SortOrder
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    UserName?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    RoleID?: IntFilter<"admin"> | number
    Sex?: BoolFilter<"admin"> | boolean
    Password?: StringFilter<"admin"> | string
    Salt?: StringFilter<"admin"> | string
    Telphone?: StringNullableFilter<"admin"> | string | null
    Status?: IntFilter<"admin"> | number
    Dateline?: IntFilter<"admin"> | number
    LoginTime?: IntFilter<"admin"> | number
    LoginIP?: StringFilter<"admin"> | string
    PowerID?: BoolNullableFilter<"admin"> | boolean | null
  }, "ID" | "UserName">

  export type adminOrderByWithAggregationInput = {
    ID?: SortOrder
    UserName?: SortOrder
    RoleID?: SortOrder
    Sex?: SortOrder
    Password?: SortOrder
    Salt?: SortOrder
    Telphone?: SortOrderInput | SortOrder
    Status?: SortOrder
    Dateline?: SortOrder
    LoginTime?: SortOrder
    LoginIP?: SortOrder
    PowerID?: SortOrderInput | SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"admin"> | number
    UserName?: StringWithAggregatesFilter<"admin"> | string
    RoleID?: IntWithAggregatesFilter<"admin"> | number
    Sex?: BoolWithAggregatesFilter<"admin"> | boolean
    Password?: StringWithAggregatesFilter<"admin"> | string
    Salt?: StringWithAggregatesFilter<"admin"> | string
    Telphone?: StringNullableWithAggregatesFilter<"admin"> | string | null
    Status?: IntWithAggregatesFilter<"admin"> | number
    Dateline?: IntWithAggregatesFilter<"admin"> | number
    LoginTime?: IntWithAggregatesFilter<"admin"> | number
    LoginIP?: StringWithAggregatesFilter<"admin"> | string
    PowerID?: BoolNullableWithAggregatesFilter<"admin"> | boolean | null
  }

  export type admin_actionsWhereInput = {
    AND?: admin_actionsWhereInput | admin_actionsWhereInput[]
    OR?: admin_actionsWhereInput[]
    NOT?: admin_actionsWhereInput | admin_actionsWhereInput[]
    id?: IntFilter<"admin_actions"> | number
    parent_id?: IntFilter<"admin_actions"> | number
    action_name?: StringFilter<"admin_actions"> | string
    controller?: StringFilter<"admin_actions"> | string
    action?: StringFilter<"admin_actions"> | string
    desc?: StringFilter<"admin_actions"> | string
    status?: IntFilter<"admin_actions"> | number
    orderby?: IntNullableFilter<"admin_actions"> | number | null
    navid?: IntNullableFilter<"admin_actions"> | number | null
    isManage?: BoolFilter<"admin_actions"> | boolean
  }

  export type admin_actionsOrderByWithRelationInput = {
    id?: SortOrder
    parent_id?: SortOrder
    action_name?: SortOrder
    controller?: SortOrder
    action?: SortOrder
    desc?: SortOrder
    status?: SortOrder
    orderby?: SortOrderInput | SortOrder
    navid?: SortOrderInput | SortOrder
    isManage?: SortOrder
    _relevance?: admin_actionsOrderByRelevanceInput
  }

  export type admin_actionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: admin_actionsWhereInput | admin_actionsWhereInput[]
    OR?: admin_actionsWhereInput[]
    NOT?: admin_actionsWhereInput | admin_actionsWhereInput[]
    parent_id?: IntFilter<"admin_actions"> | number
    action_name?: StringFilter<"admin_actions"> | string
    controller?: StringFilter<"admin_actions"> | string
    action?: StringFilter<"admin_actions"> | string
    desc?: StringFilter<"admin_actions"> | string
    status?: IntFilter<"admin_actions"> | number
    orderby?: IntNullableFilter<"admin_actions"> | number | null
    navid?: IntNullableFilter<"admin_actions"> | number | null
    isManage?: BoolFilter<"admin_actions"> | boolean
  }, "id">

  export type admin_actionsOrderByWithAggregationInput = {
    id?: SortOrder
    parent_id?: SortOrder
    action_name?: SortOrder
    controller?: SortOrder
    action?: SortOrder
    desc?: SortOrder
    status?: SortOrder
    orderby?: SortOrderInput | SortOrder
    navid?: SortOrderInput | SortOrder
    isManage?: SortOrder
    _count?: admin_actionsCountOrderByAggregateInput
    _avg?: admin_actionsAvgOrderByAggregateInput
    _max?: admin_actionsMaxOrderByAggregateInput
    _min?: admin_actionsMinOrderByAggregateInput
    _sum?: admin_actionsSumOrderByAggregateInput
  }

  export type admin_actionsScalarWhereWithAggregatesInput = {
    AND?: admin_actionsScalarWhereWithAggregatesInput | admin_actionsScalarWhereWithAggregatesInput[]
    OR?: admin_actionsScalarWhereWithAggregatesInput[]
    NOT?: admin_actionsScalarWhereWithAggregatesInput | admin_actionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin_actions"> | number
    parent_id?: IntWithAggregatesFilter<"admin_actions"> | number
    action_name?: StringWithAggregatesFilter<"admin_actions"> | string
    controller?: StringWithAggregatesFilter<"admin_actions"> | string
    action?: StringWithAggregatesFilter<"admin_actions"> | string
    desc?: StringWithAggregatesFilter<"admin_actions"> | string
    status?: IntWithAggregatesFilter<"admin_actions"> | number
    orderby?: IntNullableWithAggregatesFilter<"admin_actions"> | number | null
    navid?: IntNullableWithAggregatesFilter<"admin_actions"> | number | null
    isManage?: BoolWithAggregatesFilter<"admin_actions"> | boolean
  }

  export type admin_purviewWhereInput = {
    AND?: admin_purviewWhereInput | admin_purviewWhereInput[]
    OR?: admin_purviewWhereInput[]
    NOT?: admin_purviewWhereInput | admin_purviewWhereInput[]
    PurviewID?: IntFilter<"admin_purview"> | number
    Name?: StringFilter<"admin_purview"> | string
    Purview?: StringFilter<"admin_purview"> | string
  }

  export type admin_purviewOrderByWithRelationInput = {
    PurviewID?: SortOrder
    Name?: SortOrder
    Purview?: SortOrder
    _relevance?: admin_purviewOrderByRelevanceInput
  }

  export type admin_purviewWhereUniqueInput = Prisma.AtLeast<{
    PurviewID?: number
    AND?: admin_purviewWhereInput | admin_purviewWhereInput[]
    OR?: admin_purviewWhereInput[]
    NOT?: admin_purviewWhereInput | admin_purviewWhereInput[]
    Name?: StringFilter<"admin_purview"> | string
    Purview?: StringFilter<"admin_purview"> | string
  }, "PurviewID">

  export type admin_purviewOrderByWithAggregationInput = {
    PurviewID?: SortOrder
    Name?: SortOrder
    Purview?: SortOrder
    _count?: admin_purviewCountOrderByAggregateInput
    _avg?: admin_purviewAvgOrderByAggregateInput
    _max?: admin_purviewMaxOrderByAggregateInput
    _min?: admin_purviewMinOrderByAggregateInput
    _sum?: admin_purviewSumOrderByAggregateInput
  }

  export type admin_purviewScalarWhereWithAggregatesInput = {
    AND?: admin_purviewScalarWhereWithAggregatesInput | admin_purviewScalarWhereWithAggregatesInput[]
    OR?: admin_purviewScalarWhereWithAggregatesInput[]
    NOT?: admin_purviewScalarWhereWithAggregatesInput | admin_purviewScalarWhereWithAggregatesInput[]
    PurviewID?: IntWithAggregatesFilter<"admin_purview"> | number
    Name?: StringWithAggregatesFilter<"admin_purview"> | string
    Purview?: StringWithAggregatesFilter<"admin_purview"> | string
  }

  export type admin_roleWhereInput = {
    AND?: admin_roleWhereInput | admin_roleWhereInput[]
    OR?: admin_roleWhereInput[]
    NOT?: admin_roleWhereInput | admin_roleWhereInput[]
    ID?: IntFilter<"admin_role"> | number
    RoleName?: StringFilter<"admin_role"> | string
    Desc?: StringFilter<"admin_role"> | string
    AddTime?: IntFilter<"admin_role"> | number
  }

  export type admin_roleOrderByWithRelationInput = {
    ID?: SortOrder
    RoleName?: SortOrder
    Desc?: SortOrder
    AddTime?: SortOrder
    _relevance?: admin_roleOrderByRelevanceInput
  }

  export type admin_roleWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: admin_roleWhereInput | admin_roleWhereInput[]
    OR?: admin_roleWhereInput[]
    NOT?: admin_roleWhereInput | admin_roleWhereInput[]
    RoleName?: StringFilter<"admin_role"> | string
    Desc?: StringFilter<"admin_role"> | string
    AddTime?: IntFilter<"admin_role"> | number
  }, "ID">

  export type admin_roleOrderByWithAggregationInput = {
    ID?: SortOrder
    RoleName?: SortOrder
    Desc?: SortOrder
    AddTime?: SortOrder
    _count?: admin_roleCountOrderByAggregateInput
    _avg?: admin_roleAvgOrderByAggregateInput
    _max?: admin_roleMaxOrderByAggregateInput
    _min?: admin_roleMinOrderByAggregateInput
    _sum?: admin_roleSumOrderByAggregateInput
  }

  export type admin_roleScalarWhereWithAggregatesInput = {
    AND?: admin_roleScalarWhereWithAggregatesInput | admin_roleScalarWhereWithAggregatesInput[]
    OR?: admin_roleScalarWhereWithAggregatesInput[]
    NOT?: admin_roleScalarWhereWithAggregatesInput | admin_roleScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"admin_role"> | number
    RoleName?: StringWithAggregatesFilter<"admin_role"> | string
    Desc?: StringWithAggregatesFilter<"admin_role"> | string
    AddTime?: IntWithAggregatesFilter<"admin_role"> | number
  }

  export type admin_role_actionWhereInput = {
    AND?: admin_role_actionWhereInput | admin_role_actionWhereInput[]
    OR?: admin_role_actionWhereInput[]
    NOT?: admin_role_actionWhereInput | admin_role_actionWhereInput[]
    role_id?: IntFilter<"admin_role_action"> | number
    action_id?: IntFilter<"admin_role_action"> | number
  }

  export type admin_role_actionOrderByWithRelationInput = {
    role_id?: SortOrder
    action_id?: SortOrder
  }

  export type admin_role_actionWhereUniqueInput = Prisma.AtLeast<{
    role_id_action_id?: admin_role_actionRole_idAction_idCompoundUniqueInput
    AND?: admin_role_actionWhereInput | admin_role_actionWhereInput[]
    OR?: admin_role_actionWhereInput[]
    NOT?: admin_role_actionWhereInput | admin_role_actionWhereInput[]
    role_id?: IntFilter<"admin_role_action"> | number
    action_id?: IntFilter<"admin_role_action"> | number
  }, "role_id_action_id">

  export type admin_role_actionOrderByWithAggregationInput = {
    role_id?: SortOrder
    action_id?: SortOrder
    _count?: admin_role_actionCountOrderByAggregateInput
    _avg?: admin_role_actionAvgOrderByAggregateInput
    _max?: admin_role_actionMaxOrderByAggregateInput
    _min?: admin_role_actionMinOrderByAggregateInput
    _sum?: admin_role_actionSumOrderByAggregateInput
  }

  export type admin_role_actionScalarWhereWithAggregatesInput = {
    AND?: admin_role_actionScalarWhereWithAggregatesInput | admin_role_actionScalarWhereWithAggregatesInput[]
    OR?: admin_role_actionScalarWhereWithAggregatesInput[]
    NOT?: admin_role_actionScalarWhereWithAggregatesInput | admin_role_actionScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"admin_role_action"> | number
    action_id?: IntWithAggregatesFilter<"admin_role_action"> | number
  }

  export type admin_role_purviewWhereInput = {
    AND?: admin_role_purviewWhereInput | admin_role_purviewWhereInput[]
    OR?: admin_role_purviewWhereInput[]
    NOT?: admin_role_purviewWhereInput | admin_role_purviewWhereInput[]
    RoleID?: IntFilter<"admin_role_purview"> | number
    Purview?: StringFilter<"admin_role_purview"> | string
  }

  export type admin_role_purviewOrderByWithRelationInput = {
    RoleID?: SortOrder
    Purview?: SortOrder
    _relevance?: admin_role_purviewOrderByRelevanceInput
  }

  export type admin_role_purviewWhereUniqueInput = Prisma.AtLeast<{
    RoleID_Purview?: admin_role_purviewRoleIDPurviewCompoundUniqueInput
    AND?: admin_role_purviewWhereInput | admin_role_purviewWhereInput[]
    OR?: admin_role_purviewWhereInput[]
    NOT?: admin_role_purviewWhereInput | admin_role_purviewWhereInput[]
    RoleID?: IntFilter<"admin_role_purview"> | number
    Purview?: StringFilter<"admin_role_purview"> | string
  }, "RoleID_Purview">

  export type admin_role_purviewOrderByWithAggregationInput = {
    RoleID?: SortOrder
    Purview?: SortOrder
    _count?: admin_role_purviewCountOrderByAggregateInput
    _avg?: admin_role_purviewAvgOrderByAggregateInput
    _max?: admin_role_purviewMaxOrderByAggregateInput
    _min?: admin_role_purviewMinOrderByAggregateInput
    _sum?: admin_role_purviewSumOrderByAggregateInput
  }

  export type admin_role_purviewScalarWhereWithAggregatesInput = {
    AND?: admin_role_purviewScalarWhereWithAggregatesInput | admin_role_purviewScalarWhereWithAggregatesInput[]
    OR?: admin_role_purviewScalarWhereWithAggregatesInput[]
    NOT?: admin_role_purviewScalarWhereWithAggregatesInput | admin_role_purviewScalarWhereWithAggregatesInput[]
    RoleID?: IntWithAggregatesFilter<"admin_role_purview"> | number
    Purview?: StringWithAggregatesFilter<"admin_role_purview"> | string
  }

  export type ancientWhereInput = {
    AND?: ancientWhereInput | ancientWhereInput[]
    OR?: ancientWhereInput[]
    NOT?: ancientWhereInput | ancientWhereInput[]
    ID?: IntFilter<"ancient"> | number
    Name?: StringNullableFilter<"ancient"> | string | null
    Author?: StringNullableFilter<"ancient"> | string | null
    Dynasty?: StringNullableFilter<"ancient"> | string | null
  }

  export type ancientOrderByWithRelationInput = {
    ID?: SortOrder
    Name?: SortOrderInput | SortOrder
    Author?: SortOrderInput | SortOrder
    Dynasty?: SortOrderInput | SortOrder
    _relevance?: ancientOrderByRelevanceInput
  }

  export type ancientWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: ancientWhereInput | ancientWhereInput[]
    OR?: ancientWhereInput[]
    NOT?: ancientWhereInput | ancientWhereInput[]
    Name?: StringNullableFilter<"ancient"> | string | null
    Author?: StringNullableFilter<"ancient"> | string | null
    Dynasty?: StringNullableFilter<"ancient"> | string | null
  }, "ID">

  export type ancientOrderByWithAggregationInput = {
    ID?: SortOrder
    Name?: SortOrderInput | SortOrder
    Author?: SortOrderInput | SortOrder
    Dynasty?: SortOrderInput | SortOrder
    _count?: ancientCountOrderByAggregateInput
    _avg?: ancientAvgOrderByAggregateInput
    _max?: ancientMaxOrderByAggregateInput
    _min?: ancientMinOrderByAggregateInput
    _sum?: ancientSumOrderByAggregateInput
  }

  export type ancientScalarWhereWithAggregatesInput = {
    AND?: ancientScalarWhereWithAggregatesInput | ancientScalarWhereWithAggregatesInput[]
    OR?: ancientScalarWhereWithAggregatesInput[]
    NOT?: ancientScalarWhereWithAggregatesInput | ancientScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"ancient"> | number
    Name?: StringNullableWithAggregatesFilter<"ancient"> | string | null
    Author?: StringNullableWithAggregatesFilter<"ancient"> | string | null
    Dynasty?: StringNullableWithAggregatesFilter<"ancient"> | string | null
  }

  export type illness_caseWhereInput = {
    AND?: illness_caseWhereInput | illness_caseWhereInput[]
    OR?: illness_caseWhereInput[]
    NOT?: illness_caseWhereInput | illness_caseWhereInput[]
    ID?: IntFilter<"illness_case"> | number
    AID?: IntNullableFilter<"illness_case"> | number | null
    Case?: StringNullableFilter<"illness_case"> | string | null
    Medication?: StringNullableFilter<"illness_case"> | string | null
  }

  export type illness_caseOrderByWithRelationInput = {
    ID?: SortOrder
    AID?: SortOrderInput | SortOrder
    Case?: SortOrderInput | SortOrder
    Medication?: SortOrderInput | SortOrder
    _relevance?: illness_caseOrderByRelevanceInput
  }

  export type illness_caseWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: illness_caseWhereInput | illness_caseWhereInput[]
    OR?: illness_caseWhereInput[]
    NOT?: illness_caseWhereInput | illness_caseWhereInput[]
    AID?: IntNullableFilter<"illness_case"> | number | null
    Case?: StringNullableFilter<"illness_case"> | string | null
    Medication?: StringNullableFilter<"illness_case"> | string | null
  }, "ID">

  export type illness_caseOrderByWithAggregationInput = {
    ID?: SortOrder
    AID?: SortOrderInput | SortOrder
    Case?: SortOrderInput | SortOrder
    Medication?: SortOrderInput | SortOrder
    _count?: illness_caseCountOrderByAggregateInput
    _avg?: illness_caseAvgOrderByAggregateInput
    _max?: illness_caseMaxOrderByAggregateInput
    _min?: illness_caseMinOrderByAggregateInput
    _sum?: illness_caseSumOrderByAggregateInput
  }

  export type illness_caseScalarWhereWithAggregatesInput = {
    AND?: illness_caseScalarWhereWithAggregatesInput | illness_caseScalarWhereWithAggregatesInput[]
    OR?: illness_caseScalarWhereWithAggregatesInput[]
    NOT?: illness_caseScalarWhereWithAggregatesInput | illness_caseScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"illness_case"> | number
    AID?: IntNullableWithAggregatesFilter<"illness_case"> | number | null
    Case?: StringNullableWithAggregatesFilter<"illness_case"> | string | null
    Medication?: StringNullableWithAggregatesFilter<"illness_case"> | string | null
  }

  export type medicationWhereInput = {
    AND?: medicationWhereInput | medicationWhereInput[]
    OR?: medicationWhereInput[]
    NOT?: medicationWhereInput | medicationWhereInput[]
    ID?: IntFilter<"medication"> | number
    Name?: StringNullableFilter<"medication"> | string | null
    Desc?: StringNullableFilter<"medication"> | string | null
  }

  export type medicationOrderByWithRelationInput = {
    ID?: SortOrder
    Name?: SortOrderInput | SortOrder
    Desc?: SortOrderInput | SortOrder
    _relevance?: medicationOrderByRelevanceInput
  }

  export type medicationWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: medicationWhereInput | medicationWhereInput[]
    OR?: medicationWhereInput[]
    NOT?: medicationWhereInput | medicationWhereInput[]
    Name?: StringNullableFilter<"medication"> | string | null
    Desc?: StringNullableFilter<"medication"> | string | null
  }, "ID">

  export type medicationOrderByWithAggregationInput = {
    ID?: SortOrder
    Name?: SortOrderInput | SortOrder
    Desc?: SortOrderInput | SortOrder
    _count?: medicationCountOrderByAggregateInput
    _avg?: medicationAvgOrderByAggregateInput
    _max?: medicationMaxOrderByAggregateInput
    _min?: medicationMinOrderByAggregateInput
    _sum?: medicationSumOrderByAggregateInput
  }

  export type medicationScalarWhereWithAggregatesInput = {
    AND?: medicationScalarWhereWithAggregatesInput | medicationScalarWhereWithAggregatesInput[]
    OR?: medicationScalarWhereWithAggregatesInput[]
    NOT?: medicationScalarWhereWithAggregatesInput | medicationScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"medication"> | number
    Name?: StringNullableWithAggregatesFilter<"medication"> | string | null
    Desc?: StringNullableWithAggregatesFilter<"medication"> | string | null
  }

  export type centre_static_dataWhereInput = {
    AND?: centre_static_dataWhereInput | centre_static_dataWhereInput[]
    OR?: centre_static_dataWhereInput[]
    NOT?: centre_static_dataWhereInput | centre_static_dataWhereInput[]
    id?: IntFilter<"centre_static_data"> | number
    name?: StringFilter<"centre_static_data"> | string
    desc?: StringFilter<"centre_static_data"> | string
    updatetime?: IntFilter<"centre_static_data"> | number
    isEdit?: BoolNullableFilter<"centre_static_data"> | boolean | null
    enabled?: BoolFilter<"centre_static_data"> | boolean
  }

  export type centre_static_dataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    updatetime?: SortOrder
    isEdit?: SortOrderInput | SortOrder
    enabled?: SortOrder
    _relevance?: centre_static_dataOrderByRelevanceInput
  }

  export type centre_static_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: centre_static_dataWhereInput | centre_static_dataWhereInput[]
    OR?: centre_static_dataWhereInput[]
    NOT?: centre_static_dataWhereInput | centre_static_dataWhereInput[]
    desc?: StringFilter<"centre_static_data"> | string
    updatetime?: IntFilter<"centre_static_data"> | number
    isEdit?: BoolNullableFilter<"centre_static_data"> | boolean | null
    enabled?: BoolFilter<"centre_static_data"> | boolean
  }, "id" | "name">

  export type centre_static_dataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    updatetime?: SortOrder
    isEdit?: SortOrderInput | SortOrder
    enabled?: SortOrder
    _count?: centre_static_dataCountOrderByAggregateInput
    _avg?: centre_static_dataAvgOrderByAggregateInput
    _max?: centre_static_dataMaxOrderByAggregateInput
    _min?: centre_static_dataMinOrderByAggregateInput
    _sum?: centre_static_dataSumOrderByAggregateInput
  }

  export type centre_static_dataScalarWhereWithAggregatesInput = {
    AND?: centre_static_dataScalarWhereWithAggregatesInput | centre_static_dataScalarWhereWithAggregatesInput[]
    OR?: centre_static_dataScalarWhereWithAggregatesInput[]
    NOT?: centre_static_dataScalarWhereWithAggregatesInput | centre_static_dataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"centre_static_data"> | number
    name?: StringWithAggregatesFilter<"centre_static_data"> | string
    desc?: StringWithAggregatesFilter<"centre_static_data"> | string
    updatetime?: IntWithAggregatesFilter<"centre_static_data"> | number
    isEdit?: BoolNullableWithAggregatesFilter<"centre_static_data"> | boolean | null
    enabled?: BoolWithAggregatesFilter<"centre_static_data"> | boolean
  }

  export type adminCreateInput = {
    UserName: string
    RoleID?: number
    Sex: boolean
    Password: string
    Salt: string
    Telphone?: string | null
    Status?: number
    Dateline: number
    LoginTime?: number
    LoginIP?: string
    PowerID?: boolean | null
  }

  export type adminUncheckedCreateInput = {
    ID?: number
    UserName: string
    RoleID?: number
    Sex: boolean
    Password: string
    Salt: string
    Telphone?: string | null
    Status?: number
    Dateline: number
    LoginTime?: number
    LoginIP?: string
    PowerID?: boolean | null
  }

  export type adminUpdateInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    RoleID?: IntFieldUpdateOperationsInput | number
    Sex?: BoolFieldUpdateOperationsInput | boolean
    Password?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Telphone?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Dateline?: IntFieldUpdateOperationsInput | number
    LoginTime?: IntFieldUpdateOperationsInput | number
    LoginIP?: StringFieldUpdateOperationsInput | string
    PowerID?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adminUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    RoleID?: IntFieldUpdateOperationsInput | number
    Sex?: BoolFieldUpdateOperationsInput | boolean
    Password?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Telphone?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Dateline?: IntFieldUpdateOperationsInput | number
    LoginTime?: IntFieldUpdateOperationsInput | number
    LoginIP?: StringFieldUpdateOperationsInput | string
    PowerID?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adminCreateManyInput = {
    ID?: number
    UserName: string
    RoleID?: number
    Sex: boolean
    Password: string
    Salt: string
    Telphone?: string | null
    Status?: number
    Dateline: number
    LoginTime?: number
    LoginIP?: string
    PowerID?: boolean | null
  }

  export type adminUpdateManyMutationInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    RoleID?: IntFieldUpdateOperationsInput | number
    Sex?: BoolFieldUpdateOperationsInput | boolean
    Password?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Telphone?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Dateline?: IntFieldUpdateOperationsInput | number
    LoginTime?: IntFieldUpdateOperationsInput | number
    LoginIP?: StringFieldUpdateOperationsInput | string
    PowerID?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adminUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    RoleID?: IntFieldUpdateOperationsInput | number
    Sex?: BoolFieldUpdateOperationsInput | boolean
    Password?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Telphone?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Dateline?: IntFieldUpdateOperationsInput | number
    LoginTime?: IntFieldUpdateOperationsInput | number
    LoginIP?: StringFieldUpdateOperationsInput | string
    PowerID?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type admin_actionsCreateInput = {
    parent_id?: number
    action_name?: string
    controller?: string
    action?: string
    desc: string
    status?: number
    orderby?: number | null
    navid?: number | null
    isManage?: boolean
  }

  export type admin_actionsUncheckedCreateInput = {
    id?: number
    parent_id?: number
    action_name?: string
    controller?: string
    action?: string
    desc: string
    status?: number
    orderby?: number | null
    navid?: number | null
    isManage?: boolean
  }

  export type admin_actionsUpdateInput = {
    parent_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    controller?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    orderby?: NullableIntFieldUpdateOperationsInput | number | null
    navid?: NullableIntFieldUpdateOperationsInput | number | null
    isManage?: BoolFieldUpdateOperationsInput | boolean
  }

  export type admin_actionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    controller?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    orderby?: NullableIntFieldUpdateOperationsInput | number | null
    navid?: NullableIntFieldUpdateOperationsInput | number | null
    isManage?: BoolFieldUpdateOperationsInput | boolean
  }

  export type admin_actionsCreateManyInput = {
    id?: number
    parent_id?: number
    action_name?: string
    controller?: string
    action?: string
    desc: string
    status?: number
    orderby?: number | null
    navid?: number | null
    isManage?: boolean
  }

  export type admin_actionsUpdateManyMutationInput = {
    parent_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    controller?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    orderby?: NullableIntFieldUpdateOperationsInput | number | null
    navid?: NullableIntFieldUpdateOperationsInput | number | null
    isManage?: BoolFieldUpdateOperationsInput | boolean
  }

  export type admin_actionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    controller?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    orderby?: NullableIntFieldUpdateOperationsInput | number | null
    navid?: NullableIntFieldUpdateOperationsInput | number | null
    isManage?: BoolFieldUpdateOperationsInput | boolean
  }

  export type admin_purviewCreateInput = {
    Name?: string
    Purview?: string
  }

  export type admin_purviewUncheckedCreateInput = {
    PurviewID?: number
    Name?: string
    Purview?: string
  }

  export type admin_purviewUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Purview?: StringFieldUpdateOperationsInput | string
  }

  export type admin_purviewUncheckedUpdateInput = {
    PurviewID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Purview?: StringFieldUpdateOperationsInput | string
  }

  export type admin_purviewCreateManyInput = {
    PurviewID?: number
    Name?: string
    Purview?: string
  }

  export type admin_purviewUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Purview?: StringFieldUpdateOperationsInput | string
  }

  export type admin_purviewUncheckedUpdateManyInput = {
    PurviewID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Purview?: StringFieldUpdateOperationsInput | string
  }

  export type admin_roleCreateInput = {
    RoleName?: string
    Desc?: string
    AddTime?: number
  }

  export type admin_roleUncheckedCreateInput = {
    ID?: number
    RoleName?: string
    Desc?: string
    AddTime?: number
  }

  export type admin_roleUpdateInput = {
    RoleName?: StringFieldUpdateOperationsInput | string
    Desc?: StringFieldUpdateOperationsInput | string
    AddTime?: IntFieldUpdateOperationsInput | number
  }

  export type admin_roleUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    RoleName?: StringFieldUpdateOperationsInput | string
    Desc?: StringFieldUpdateOperationsInput | string
    AddTime?: IntFieldUpdateOperationsInput | number
  }

  export type admin_roleCreateManyInput = {
    ID?: number
    RoleName?: string
    Desc?: string
    AddTime?: number
  }

  export type admin_roleUpdateManyMutationInput = {
    RoleName?: StringFieldUpdateOperationsInput | string
    Desc?: StringFieldUpdateOperationsInput | string
    AddTime?: IntFieldUpdateOperationsInput | number
  }

  export type admin_roleUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    RoleName?: StringFieldUpdateOperationsInput | string
    Desc?: StringFieldUpdateOperationsInput | string
    AddTime?: IntFieldUpdateOperationsInput | number
  }

  export type admin_role_actionCreateInput = {
    role_id: number
    action_id: number
  }

  export type admin_role_actionUncheckedCreateInput = {
    role_id: number
    action_id: number
  }

  export type admin_role_actionUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
  }

  export type admin_role_actionUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
  }

  export type admin_role_actionCreateManyInput = {
    role_id: number
    action_id: number
  }

  export type admin_role_actionUpdateManyMutationInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
  }

  export type admin_role_actionUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
  }

  export type admin_role_purviewCreateInput = {
    RoleID: number
    Purview?: string
  }

  export type admin_role_purviewUncheckedCreateInput = {
    RoleID: number
    Purview?: string
  }

  export type admin_role_purviewUpdateInput = {
    RoleID?: IntFieldUpdateOperationsInput | number
    Purview?: StringFieldUpdateOperationsInput | string
  }

  export type admin_role_purviewUncheckedUpdateInput = {
    RoleID?: IntFieldUpdateOperationsInput | number
    Purview?: StringFieldUpdateOperationsInput | string
  }

  export type admin_role_purviewCreateManyInput = {
    RoleID: number
    Purview?: string
  }

  export type admin_role_purviewUpdateManyMutationInput = {
    RoleID?: IntFieldUpdateOperationsInput | number
    Purview?: StringFieldUpdateOperationsInput | string
  }

  export type admin_role_purviewUncheckedUpdateManyInput = {
    RoleID?: IntFieldUpdateOperationsInput | number
    Purview?: StringFieldUpdateOperationsInput | string
  }

  export type ancientCreateInput = {
    ID: number
    Name?: string | null
    Author?: string | null
    Dynasty?: string | null
  }

  export type ancientUncheckedCreateInput = {
    ID: number
    Name?: string | null
    Author?: string | null
    Dynasty?: string | null
  }

  export type ancientUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Author?: NullableStringFieldUpdateOperationsInput | string | null
    Dynasty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ancientUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Author?: NullableStringFieldUpdateOperationsInput | string | null
    Dynasty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ancientCreateManyInput = {
    ID: number
    Name?: string | null
    Author?: string | null
    Dynasty?: string | null
  }

  export type ancientUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Author?: NullableStringFieldUpdateOperationsInput | string | null
    Dynasty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ancientUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Author?: NullableStringFieldUpdateOperationsInput | string | null
    Dynasty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type illness_caseCreateInput = {
    ID: number
    AID?: number | null
    Case?: string | null
    Medication?: string | null
  }

  export type illness_caseUncheckedCreateInput = {
    ID: number
    AID?: number | null
    Case?: string | null
    Medication?: string | null
  }

  export type illness_caseUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    AID?: NullableIntFieldUpdateOperationsInput | number | null
    Case?: NullableStringFieldUpdateOperationsInput | string | null
    Medication?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type illness_caseUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    AID?: NullableIntFieldUpdateOperationsInput | number | null
    Case?: NullableStringFieldUpdateOperationsInput | string | null
    Medication?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type illness_caseCreateManyInput = {
    ID: number
    AID?: number | null
    Case?: string | null
    Medication?: string | null
  }

  export type illness_caseUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    AID?: NullableIntFieldUpdateOperationsInput | number | null
    Case?: NullableStringFieldUpdateOperationsInput | string | null
    Medication?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type illness_caseUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    AID?: NullableIntFieldUpdateOperationsInput | number | null
    Case?: NullableStringFieldUpdateOperationsInput | string | null
    Medication?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicationCreateInput = {
    ID: number
    Name?: string | null
    Desc?: string | null
  }

  export type medicationUncheckedCreateInput = {
    ID: number
    Name?: string | null
    Desc?: string | null
  }

  export type medicationUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicationUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicationCreateManyInput = {
    ID: number
    Name?: string | null
    Desc?: string | null
  }

  export type medicationUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicationUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type centre_static_dataCreateInput = {
    name: string
    desc: string
    updatetime: number
    isEdit?: boolean | null
    enabled: boolean
  }

  export type centre_static_dataUncheckedCreateInput = {
    id?: number
    name: string
    desc: string
    updatetime: number
    isEdit?: boolean | null
    enabled: boolean
  }

  export type centre_static_dataUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    updatetime?: IntFieldUpdateOperationsInput | number
    isEdit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type centre_static_dataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    updatetime?: IntFieldUpdateOperationsInput | number
    isEdit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type centre_static_dataCreateManyInput = {
    id?: number
    name: string
    desc: string
    updatetime: number
    isEdit?: boolean | null
    enabled: boolean
  }

  export type centre_static_dataUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    updatetime?: IntFieldUpdateOperationsInput | number
    isEdit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type centre_static_dataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    updatetime?: IntFieldUpdateOperationsInput | number
    isEdit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    ID?: SortOrder
    UserName?: SortOrder
    RoleID?: SortOrder
    Sex?: SortOrder
    Password?: SortOrder
    Salt?: SortOrder
    Telphone?: SortOrder
    Status?: SortOrder
    Dateline?: SortOrder
    LoginTime?: SortOrder
    LoginIP?: SortOrder
    PowerID?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    ID?: SortOrder
    RoleID?: SortOrder
    Status?: SortOrder
    Dateline?: SortOrder
    LoginTime?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    ID?: SortOrder
    UserName?: SortOrder
    RoleID?: SortOrder
    Sex?: SortOrder
    Password?: SortOrder
    Salt?: SortOrder
    Telphone?: SortOrder
    Status?: SortOrder
    Dateline?: SortOrder
    LoginTime?: SortOrder
    LoginIP?: SortOrder
    PowerID?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    ID?: SortOrder
    UserName?: SortOrder
    RoleID?: SortOrder
    Sex?: SortOrder
    Password?: SortOrder
    Salt?: SortOrder
    Telphone?: SortOrder
    Status?: SortOrder
    Dateline?: SortOrder
    LoginTime?: SortOrder
    LoginIP?: SortOrder
    PowerID?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    ID?: SortOrder
    RoleID?: SortOrder
    Status?: SortOrder
    Dateline?: SortOrder
    LoginTime?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type admin_actionsOrderByRelevanceInput = {
    fields: admin_actionsOrderByRelevanceFieldEnum | admin_actionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type admin_actionsCountOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    action_name?: SortOrder
    controller?: SortOrder
    action?: SortOrder
    desc?: SortOrder
    status?: SortOrder
    orderby?: SortOrder
    navid?: SortOrder
    isManage?: SortOrder
  }

  export type admin_actionsAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    status?: SortOrder
    orderby?: SortOrder
    navid?: SortOrder
  }

  export type admin_actionsMaxOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    action_name?: SortOrder
    controller?: SortOrder
    action?: SortOrder
    desc?: SortOrder
    status?: SortOrder
    orderby?: SortOrder
    navid?: SortOrder
    isManage?: SortOrder
  }

  export type admin_actionsMinOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    action_name?: SortOrder
    controller?: SortOrder
    action?: SortOrder
    desc?: SortOrder
    status?: SortOrder
    orderby?: SortOrder
    navid?: SortOrder
    isManage?: SortOrder
  }

  export type admin_actionsSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    status?: SortOrder
    orderby?: SortOrder
    navid?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type admin_purviewOrderByRelevanceInput = {
    fields: admin_purviewOrderByRelevanceFieldEnum | admin_purviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type admin_purviewCountOrderByAggregateInput = {
    PurviewID?: SortOrder
    Name?: SortOrder
    Purview?: SortOrder
  }

  export type admin_purviewAvgOrderByAggregateInput = {
    PurviewID?: SortOrder
  }

  export type admin_purviewMaxOrderByAggregateInput = {
    PurviewID?: SortOrder
    Name?: SortOrder
    Purview?: SortOrder
  }

  export type admin_purviewMinOrderByAggregateInput = {
    PurviewID?: SortOrder
    Name?: SortOrder
    Purview?: SortOrder
  }

  export type admin_purviewSumOrderByAggregateInput = {
    PurviewID?: SortOrder
  }

  export type admin_roleOrderByRelevanceInput = {
    fields: admin_roleOrderByRelevanceFieldEnum | admin_roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type admin_roleCountOrderByAggregateInput = {
    ID?: SortOrder
    RoleName?: SortOrder
    Desc?: SortOrder
    AddTime?: SortOrder
  }

  export type admin_roleAvgOrderByAggregateInput = {
    ID?: SortOrder
    AddTime?: SortOrder
  }

  export type admin_roleMaxOrderByAggregateInput = {
    ID?: SortOrder
    RoleName?: SortOrder
    Desc?: SortOrder
    AddTime?: SortOrder
  }

  export type admin_roleMinOrderByAggregateInput = {
    ID?: SortOrder
    RoleName?: SortOrder
    Desc?: SortOrder
    AddTime?: SortOrder
  }

  export type admin_roleSumOrderByAggregateInput = {
    ID?: SortOrder
    AddTime?: SortOrder
  }

  export type admin_role_actionRole_idAction_idCompoundUniqueInput = {
    role_id: number
    action_id: number
  }

  export type admin_role_actionCountOrderByAggregateInput = {
    role_id?: SortOrder
    action_id?: SortOrder
  }

  export type admin_role_actionAvgOrderByAggregateInput = {
    role_id?: SortOrder
    action_id?: SortOrder
  }

  export type admin_role_actionMaxOrderByAggregateInput = {
    role_id?: SortOrder
    action_id?: SortOrder
  }

  export type admin_role_actionMinOrderByAggregateInput = {
    role_id?: SortOrder
    action_id?: SortOrder
  }

  export type admin_role_actionSumOrderByAggregateInput = {
    role_id?: SortOrder
    action_id?: SortOrder
  }

  export type admin_role_purviewOrderByRelevanceInput = {
    fields: admin_role_purviewOrderByRelevanceFieldEnum | admin_role_purviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type admin_role_purviewRoleIDPurviewCompoundUniqueInput = {
    RoleID: number
    Purview: string
  }

  export type admin_role_purviewCountOrderByAggregateInput = {
    RoleID?: SortOrder
    Purview?: SortOrder
  }

  export type admin_role_purviewAvgOrderByAggregateInput = {
    RoleID?: SortOrder
  }

  export type admin_role_purviewMaxOrderByAggregateInput = {
    RoleID?: SortOrder
    Purview?: SortOrder
  }

  export type admin_role_purviewMinOrderByAggregateInput = {
    RoleID?: SortOrder
    Purview?: SortOrder
  }

  export type admin_role_purviewSumOrderByAggregateInput = {
    RoleID?: SortOrder
  }

  export type ancientOrderByRelevanceInput = {
    fields: ancientOrderByRelevanceFieldEnum | ancientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ancientCountOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Author?: SortOrder
    Dynasty?: SortOrder
  }

  export type ancientAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type ancientMaxOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Author?: SortOrder
    Dynasty?: SortOrder
  }

  export type ancientMinOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Author?: SortOrder
    Dynasty?: SortOrder
  }

  export type ancientSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type illness_caseOrderByRelevanceInput = {
    fields: illness_caseOrderByRelevanceFieldEnum | illness_caseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type illness_caseCountOrderByAggregateInput = {
    ID?: SortOrder
    AID?: SortOrder
    Case?: SortOrder
    Medication?: SortOrder
  }

  export type illness_caseAvgOrderByAggregateInput = {
    ID?: SortOrder
    AID?: SortOrder
  }

  export type illness_caseMaxOrderByAggregateInput = {
    ID?: SortOrder
    AID?: SortOrder
    Case?: SortOrder
    Medication?: SortOrder
  }

  export type illness_caseMinOrderByAggregateInput = {
    ID?: SortOrder
    AID?: SortOrder
    Case?: SortOrder
    Medication?: SortOrder
  }

  export type illness_caseSumOrderByAggregateInput = {
    ID?: SortOrder
    AID?: SortOrder
  }

  export type medicationOrderByRelevanceInput = {
    fields: medicationOrderByRelevanceFieldEnum | medicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type medicationCountOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Desc?: SortOrder
  }

  export type medicationAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type medicationMaxOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Desc?: SortOrder
  }

  export type medicationMinOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Desc?: SortOrder
  }

  export type medicationSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type centre_static_dataOrderByRelevanceInput = {
    fields: centre_static_dataOrderByRelevanceFieldEnum | centre_static_dataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type centre_static_dataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    updatetime?: SortOrder
    isEdit?: SortOrder
    enabled?: SortOrder
  }

  export type centre_static_dataAvgOrderByAggregateInput = {
    id?: SortOrder
    updatetime?: SortOrder
  }

  export type centre_static_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    updatetime?: SortOrder
    isEdit?: SortOrder
    enabled?: SortOrder
  }

  export type centre_static_dataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    updatetime?: SortOrder
    isEdit?: SortOrder
    enabled?: SortOrder
  }

  export type centre_static_dataSumOrderByAggregateInput = {
    id?: SortOrder
    updatetime?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}