
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
 * Model ObjectType
 * 
 */
export type ObjectType = $Result.DefaultSelection<Prisma.$ObjectTypePayload>
/**
 * Model FieldDefinition
 * 
 */
export type FieldDefinition = $Result.DefaultSelection<Prisma.$FieldDefinitionPayload>
/**
 * Model Entry
 * 
 */
export type Entry = $Result.DefaultSelection<Prisma.$EntryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ObjectTypes
 * const objectTypes = await prisma.objectType.findMany()
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
   * // Fetch zero or more ObjectTypes
   * const objectTypes = await prisma.objectType.findMany()
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
   * `prisma.objectType`: Exposes CRUD operations for the **ObjectType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObjectTypes
    * const objectTypes = await prisma.objectType.findMany()
    * ```
    */
  get objectType(): Prisma.ObjectTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fieldDefinition`: Exposes CRUD operations for the **FieldDefinition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FieldDefinitions
    * const fieldDefinitions = await prisma.fieldDefinition.findMany()
    * ```
    */
  get fieldDefinition(): Prisma.FieldDefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entry`: Exposes CRUD operations for the **Entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entries
    * const entries = await prisma.entry.findMany()
    * ```
    */
  get entry(): Prisma.EntryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    ObjectType: 'ObjectType',
    FieldDefinition: 'FieldDefinition',
    Entry: 'Entry'
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
      modelProps: "objectType" | "fieldDefinition" | "entry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ObjectType: {
        payload: Prisma.$ObjectTypePayload<ExtArgs>
        fields: Prisma.ObjectTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjectTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjectTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload>
          }
          findFirst: {
            args: Prisma.ObjectTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjectTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload>
          }
          findMany: {
            args: Prisma.ObjectTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload>[]
          }
          create: {
            args: Prisma.ObjectTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload>
          }
          createMany: {
            args: Prisma.ObjectTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObjectTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload>[]
          }
          delete: {
            args: Prisma.ObjectTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload>
          }
          update: {
            args: Prisma.ObjectTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload>
          }
          deleteMany: {
            args: Prisma.ObjectTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjectTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObjectTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload>[]
          }
          upsert: {
            args: Prisma.ObjectTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectTypePayload>
          }
          aggregate: {
            args: Prisma.ObjectTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjectType>
          }
          groupBy: {
            args: Prisma.ObjectTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjectTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjectTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ObjectTypeCountAggregateOutputType> | number
          }
        }
      }
      FieldDefinition: {
        payload: Prisma.$FieldDefinitionPayload<ExtArgs>
        fields: Prisma.FieldDefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldDefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldDefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>
          }
          findFirst: {
            args: Prisma.FieldDefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldDefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>
          }
          findMany: {
            args: Prisma.FieldDefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>[]
          }
          create: {
            args: Prisma.FieldDefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>
          }
          createMany: {
            args: Prisma.FieldDefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FieldDefinitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>[]
          }
          delete: {
            args: Prisma.FieldDefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>
          }
          update: {
            args: Prisma.FieldDefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>
          }
          deleteMany: {
            args: Prisma.FieldDefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldDefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FieldDefinitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>[]
          }
          upsert: {
            args: Prisma.FieldDefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>
          }
          aggregate: {
            args: Prisma.FieldDefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFieldDefinition>
          }
          groupBy: {
            args: Prisma.FieldDefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldDefinitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldDefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<FieldDefinitionCountAggregateOutputType> | number
          }
        }
      }
      Entry: {
        payload: Prisma.$EntryPayload<ExtArgs>
        fields: Prisma.EntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findFirst: {
            args: Prisma.EntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findMany: {
            args: Prisma.EntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          create: {
            args: Prisma.EntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          createMany: {
            args: Prisma.EntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          delete: {
            args: Prisma.EntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          update: {
            args: Prisma.EntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          deleteMany: {
            args: Prisma.EntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          upsert: {
            args: Prisma.EntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          aggregate: {
            args: Prisma.EntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntry>
          }
          groupBy: {
            args: Prisma.EntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntryCountArgs<ExtArgs>
            result: $Utils.Optional<EntryCountAggregateOutputType> | number
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
    objectType?: ObjectTypeOmit
    fieldDefinition?: FieldDefinitionOmit
    entry?: EntryOmit
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
   * Count Type ObjectTypeCountOutputType
   */

  export type ObjectTypeCountOutputType = {
    entries: number
    fields: number
    fieldRelations: number
  }

  export type ObjectTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | ObjectTypeCountOutputTypeCountEntriesArgs
    fields?: boolean | ObjectTypeCountOutputTypeCountFieldsArgs
    fieldRelations?: boolean | ObjectTypeCountOutputTypeCountFieldRelationsArgs
  }

  // Custom InputTypes
  /**
   * ObjectTypeCountOutputType without action
   */
  export type ObjectTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectTypeCountOutputType
     */
    select?: ObjectTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObjectTypeCountOutputType without action
   */
  export type ObjectTypeCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
  }

  /**
   * ObjectTypeCountOutputType without action
   */
  export type ObjectTypeCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldDefinitionWhereInput
  }

  /**
   * ObjectTypeCountOutputType without action
   */
  export type ObjectTypeCountOutputTypeCountFieldRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldDefinitionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ObjectType
   */

  export type AggregateObjectType = {
    _count: ObjectTypeCountAggregateOutputType | null
    _min: ObjectTypeMinAggregateOutputType | null
    _max: ObjectTypeMaxAggregateOutputType | null
  }

  export type ObjectTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type ObjectTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type ObjectTypeCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type ObjectTypeMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type ObjectTypeMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type ObjectTypeCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type ObjectTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjectType to aggregate.
     */
    where?: ObjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectTypes to fetch.
     */
    orderBy?: ObjectTypeOrderByWithRelationInput | ObjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObjectTypes
    **/
    _count?: true | ObjectTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjectTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjectTypeMaxAggregateInputType
  }

  export type GetObjectTypeAggregateType<T extends ObjectTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateObjectType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjectType[P]>
      : GetScalarType<T[P], AggregateObjectType[P]>
  }




  export type ObjectTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectTypeWhereInput
    orderBy?: ObjectTypeOrderByWithAggregationInput | ObjectTypeOrderByWithAggregationInput[]
    by: ObjectTypeScalarFieldEnum[] | ObjectTypeScalarFieldEnum
    having?: ObjectTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjectTypeCountAggregateInputType | true
    _min?: ObjectTypeMinAggregateInputType
    _max?: ObjectTypeMaxAggregateInputType
  }

  export type ObjectTypeGroupByOutputType = {
    id: string
    name: string
    slug: string
    _count: ObjectTypeCountAggregateOutputType | null
    _min: ObjectTypeMinAggregateOutputType | null
    _max: ObjectTypeMaxAggregateOutputType | null
  }

  type GetObjectTypeGroupByPayload<T extends ObjectTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjectTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjectTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjectTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ObjectTypeGroupByOutputType[P]>
        }
      >
    >


  export type ObjectTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    entries?: boolean | ObjectType$entriesArgs<ExtArgs>
    fields?: boolean | ObjectType$fieldsArgs<ExtArgs>
    fieldRelations?: boolean | ObjectType$fieldRelationsArgs<ExtArgs>
    _count?: boolean | ObjectTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objectType"]>

  export type ObjectTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["objectType"]>

  export type ObjectTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["objectType"]>

  export type ObjectTypeSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type ObjectTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["objectType"]>
  export type ObjectTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | ObjectType$entriesArgs<ExtArgs>
    fields?: boolean | ObjectType$fieldsArgs<ExtArgs>
    fieldRelations?: boolean | ObjectType$fieldRelationsArgs<ExtArgs>
    _count?: boolean | ObjectTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObjectTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ObjectTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObjectTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObjectType"
    objects: {
      entries: Prisma.$EntryPayload<ExtArgs>[]
      fields: Prisma.$FieldDefinitionPayload<ExtArgs>[]
      fieldRelations: Prisma.$FieldDefinitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
    }, ExtArgs["result"]["objectType"]>
    composites: {}
  }

  type ObjectTypeGetPayload<S extends boolean | null | undefined | ObjectTypeDefaultArgs> = $Result.GetResult<Prisma.$ObjectTypePayload, S>

  type ObjectTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjectTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjectTypeCountAggregateInputType | true
    }

  export interface ObjectTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObjectType'], meta: { name: 'ObjectType' } }
    /**
     * Find zero or one ObjectType that matches the filter.
     * @param {ObjectTypeFindUniqueArgs} args - Arguments to find a ObjectType
     * @example
     * // Get one ObjectType
     * const objectType = await prisma.objectType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjectTypeFindUniqueArgs>(args: SelectSubset<T, ObjectTypeFindUniqueArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ObjectType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjectTypeFindUniqueOrThrowArgs} args - Arguments to find a ObjectType
     * @example
     * // Get one ObjectType
     * const objectType = await prisma.objectType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjectTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjectTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjectType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectTypeFindFirstArgs} args - Arguments to find a ObjectType
     * @example
     * // Get one ObjectType
     * const objectType = await prisma.objectType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjectTypeFindFirstArgs>(args?: SelectSubset<T, ObjectTypeFindFirstArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjectType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectTypeFindFirstOrThrowArgs} args - Arguments to find a ObjectType
     * @example
     * // Get one ObjectType
     * const objectType = await prisma.objectType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjectTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjectTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ObjectTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObjectTypes
     * const objectTypes = await prisma.objectType.findMany()
     * 
     * // Get first 10 ObjectTypes
     * const objectTypes = await prisma.objectType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objectTypeWithIdOnly = await prisma.objectType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjectTypeFindManyArgs>(args?: SelectSubset<T, ObjectTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ObjectType.
     * @param {ObjectTypeCreateArgs} args - Arguments to create a ObjectType.
     * @example
     * // Create one ObjectType
     * const ObjectType = await prisma.objectType.create({
     *   data: {
     *     // ... data to create a ObjectType
     *   }
     * })
     * 
     */
    create<T extends ObjectTypeCreateArgs>(args: SelectSubset<T, ObjectTypeCreateArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ObjectTypes.
     * @param {ObjectTypeCreateManyArgs} args - Arguments to create many ObjectTypes.
     * @example
     * // Create many ObjectTypes
     * const objectType = await prisma.objectType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjectTypeCreateManyArgs>(args?: SelectSubset<T, ObjectTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ObjectTypes and returns the data saved in the database.
     * @param {ObjectTypeCreateManyAndReturnArgs} args - Arguments to create many ObjectTypes.
     * @example
     * // Create many ObjectTypes
     * const objectType = await prisma.objectType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ObjectTypes and only return the `id`
     * const objectTypeWithIdOnly = await prisma.objectType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObjectTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ObjectTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ObjectType.
     * @param {ObjectTypeDeleteArgs} args - Arguments to delete one ObjectType.
     * @example
     * // Delete one ObjectType
     * const ObjectType = await prisma.objectType.delete({
     *   where: {
     *     // ... filter to delete one ObjectType
     *   }
     * })
     * 
     */
    delete<T extends ObjectTypeDeleteArgs>(args: SelectSubset<T, ObjectTypeDeleteArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ObjectType.
     * @param {ObjectTypeUpdateArgs} args - Arguments to update one ObjectType.
     * @example
     * // Update one ObjectType
     * const objectType = await prisma.objectType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjectTypeUpdateArgs>(args: SelectSubset<T, ObjectTypeUpdateArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ObjectTypes.
     * @param {ObjectTypeDeleteManyArgs} args - Arguments to filter ObjectTypes to delete.
     * @example
     * // Delete a few ObjectTypes
     * const { count } = await prisma.objectType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjectTypeDeleteManyArgs>(args?: SelectSubset<T, ObjectTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObjectTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObjectTypes
     * const objectType = await prisma.objectType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjectTypeUpdateManyArgs>(args: SelectSubset<T, ObjectTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObjectTypes and returns the data updated in the database.
     * @param {ObjectTypeUpdateManyAndReturnArgs} args - Arguments to update many ObjectTypes.
     * @example
     * // Update many ObjectTypes
     * const objectType = await prisma.objectType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ObjectTypes and only return the `id`
     * const objectTypeWithIdOnly = await prisma.objectType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObjectTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ObjectTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ObjectType.
     * @param {ObjectTypeUpsertArgs} args - Arguments to update or create a ObjectType.
     * @example
     * // Update or create a ObjectType
     * const objectType = await prisma.objectType.upsert({
     *   create: {
     *     // ... data to create a ObjectType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObjectType we want to update
     *   }
     * })
     */
    upsert<T extends ObjectTypeUpsertArgs>(args: SelectSubset<T, ObjectTypeUpsertArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ObjectTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectTypeCountArgs} args - Arguments to filter ObjectTypes to count.
     * @example
     * // Count the number of ObjectTypes
     * const count = await prisma.objectType.count({
     *   where: {
     *     // ... the filter for the ObjectTypes we want to count
     *   }
     * })
    **/
    count<T extends ObjectTypeCountArgs>(
      args?: Subset<T, ObjectTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjectTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObjectType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObjectTypeAggregateArgs>(args: Subset<T, ObjectTypeAggregateArgs>): Prisma.PrismaPromise<GetObjectTypeAggregateType<T>>

    /**
     * Group by ObjectType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectTypeGroupByArgs} args - Group by arguments.
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
      T extends ObjectTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjectTypeGroupByArgs['orderBy'] }
        : { orderBy?: ObjectTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObjectTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjectTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObjectType model
   */
  readonly fields: ObjectTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObjectType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjectTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends ObjectType$entriesArgs<ExtArgs> = {}>(args?: Subset<T, ObjectType$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fields<T extends ObjectType$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, ObjectType$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fieldRelations<T extends ObjectType$fieldRelationsArgs<ExtArgs> = {}>(args?: Subset<T, ObjectType$fieldRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ObjectType model
   */
  interface ObjectTypeFieldRefs {
    readonly id: FieldRef<"ObjectType", 'String'>
    readonly name: FieldRef<"ObjectType", 'String'>
    readonly slug: FieldRef<"ObjectType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ObjectType findUnique
   */
  export type ObjectTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ObjectType to fetch.
     */
    where: ObjectTypeWhereUniqueInput
  }

  /**
   * ObjectType findUniqueOrThrow
   */
  export type ObjectTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ObjectType to fetch.
     */
    where: ObjectTypeWhereUniqueInput
  }

  /**
   * ObjectType findFirst
   */
  export type ObjectTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ObjectType to fetch.
     */
    where?: ObjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectTypes to fetch.
     */
    orderBy?: ObjectTypeOrderByWithRelationInput | ObjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjectTypes.
     */
    cursor?: ObjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjectTypes.
     */
    distinct?: ObjectTypeScalarFieldEnum | ObjectTypeScalarFieldEnum[]
  }

  /**
   * ObjectType findFirstOrThrow
   */
  export type ObjectTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ObjectType to fetch.
     */
    where?: ObjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectTypes to fetch.
     */
    orderBy?: ObjectTypeOrderByWithRelationInput | ObjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjectTypes.
     */
    cursor?: ObjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjectTypes.
     */
    distinct?: ObjectTypeScalarFieldEnum | ObjectTypeScalarFieldEnum[]
  }

  /**
   * ObjectType findMany
   */
  export type ObjectTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ObjectTypes to fetch.
     */
    where?: ObjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectTypes to fetch.
     */
    orderBy?: ObjectTypeOrderByWithRelationInput | ObjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObjectTypes.
     */
    cursor?: ObjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectTypes.
     */
    skip?: number
    distinct?: ObjectTypeScalarFieldEnum | ObjectTypeScalarFieldEnum[]
  }

  /**
   * ObjectType create
   */
  export type ObjectTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ObjectType.
     */
    data: XOR<ObjectTypeCreateInput, ObjectTypeUncheckedCreateInput>
  }

  /**
   * ObjectType createMany
   */
  export type ObjectTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObjectTypes.
     */
    data: ObjectTypeCreateManyInput | ObjectTypeCreateManyInput[]
  }

  /**
   * ObjectType createManyAndReturn
   */
  export type ObjectTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ObjectTypes.
     */
    data: ObjectTypeCreateManyInput | ObjectTypeCreateManyInput[]
  }

  /**
   * ObjectType update
   */
  export type ObjectTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ObjectType.
     */
    data: XOR<ObjectTypeUpdateInput, ObjectTypeUncheckedUpdateInput>
    /**
     * Choose, which ObjectType to update.
     */
    where: ObjectTypeWhereUniqueInput
  }

  /**
   * ObjectType updateMany
   */
  export type ObjectTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObjectTypes.
     */
    data: XOR<ObjectTypeUpdateManyMutationInput, ObjectTypeUncheckedUpdateManyInput>
    /**
     * Filter which ObjectTypes to update
     */
    where?: ObjectTypeWhereInput
    /**
     * Limit how many ObjectTypes to update.
     */
    limit?: number
  }

  /**
   * ObjectType updateManyAndReturn
   */
  export type ObjectTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * The data used to update ObjectTypes.
     */
    data: XOR<ObjectTypeUpdateManyMutationInput, ObjectTypeUncheckedUpdateManyInput>
    /**
     * Filter which ObjectTypes to update
     */
    where?: ObjectTypeWhereInput
    /**
     * Limit how many ObjectTypes to update.
     */
    limit?: number
  }

  /**
   * ObjectType upsert
   */
  export type ObjectTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ObjectType to update in case it exists.
     */
    where: ObjectTypeWhereUniqueInput
    /**
     * In case the ObjectType found by the `where` argument doesn't exist, create a new ObjectType with this data.
     */
    create: XOR<ObjectTypeCreateInput, ObjectTypeUncheckedCreateInput>
    /**
     * In case the ObjectType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjectTypeUpdateInput, ObjectTypeUncheckedUpdateInput>
  }

  /**
   * ObjectType delete
   */
  export type ObjectTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    /**
     * Filter which ObjectType to delete.
     */
    where: ObjectTypeWhereUniqueInput
  }

  /**
   * ObjectType deleteMany
   */
  export type ObjectTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjectTypes to delete
     */
    where?: ObjectTypeWhereInput
    /**
     * Limit how many ObjectTypes to delete.
     */
    limit?: number
  }

  /**
   * ObjectType.entries
   */
  export type ObjectType$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    cursor?: EntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * ObjectType.fields
   */
  export type ObjectType$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    where?: FieldDefinitionWhereInput
    orderBy?: FieldDefinitionOrderByWithRelationInput | FieldDefinitionOrderByWithRelationInput[]
    cursor?: FieldDefinitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldDefinitionScalarFieldEnum | FieldDefinitionScalarFieldEnum[]
  }

  /**
   * ObjectType.fieldRelations
   */
  export type ObjectType$fieldRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    where?: FieldDefinitionWhereInput
    orderBy?: FieldDefinitionOrderByWithRelationInput | FieldDefinitionOrderByWithRelationInput[]
    cursor?: FieldDefinitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldDefinitionScalarFieldEnum | FieldDefinitionScalarFieldEnum[]
  }

  /**
   * ObjectType without action
   */
  export type ObjectTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
  }


  /**
   * Model FieldDefinition
   */

  export type AggregateFieldDefinition = {
    _count: FieldDefinitionCountAggregateOutputType | null
    _min: FieldDefinitionMinAggregateOutputType | null
    _max: FieldDefinitionMaxAggregateOutputType | null
  }

  export type FieldDefinitionMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    multiple: boolean | null
    objectTypeId: string | null
    relationToId: string | null
  }

  export type FieldDefinitionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    multiple: boolean | null
    objectTypeId: string | null
    relationToId: string | null
  }

  export type FieldDefinitionCountAggregateOutputType = {
    id: number
    name: number
    type: number
    multiple: number
    objectTypeId: number
    relationToId: number
    _all: number
  }


  export type FieldDefinitionMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    multiple?: true
    objectTypeId?: true
    relationToId?: true
  }

  export type FieldDefinitionMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    multiple?: true
    objectTypeId?: true
    relationToId?: true
  }

  export type FieldDefinitionCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    multiple?: true
    objectTypeId?: true
    relationToId?: true
    _all?: true
  }

  export type FieldDefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldDefinition to aggregate.
     */
    where?: FieldDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldDefinitions to fetch.
     */
    orderBy?: FieldDefinitionOrderByWithRelationInput | FieldDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FieldDefinitions
    **/
    _count?: true | FieldDefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldDefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldDefinitionMaxAggregateInputType
  }

  export type GetFieldDefinitionAggregateType<T extends FieldDefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateFieldDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFieldDefinition[P]>
      : GetScalarType<T[P], AggregateFieldDefinition[P]>
  }




  export type FieldDefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldDefinitionWhereInput
    orderBy?: FieldDefinitionOrderByWithAggregationInput | FieldDefinitionOrderByWithAggregationInput[]
    by: FieldDefinitionScalarFieldEnum[] | FieldDefinitionScalarFieldEnum
    having?: FieldDefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldDefinitionCountAggregateInputType | true
    _min?: FieldDefinitionMinAggregateInputType
    _max?: FieldDefinitionMaxAggregateInputType
  }

  export type FieldDefinitionGroupByOutputType = {
    id: string
    name: string
    type: string
    multiple: boolean
    objectTypeId: string
    relationToId: string | null
    _count: FieldDefinitionCountAggregateOutputType | null
    _min: FieldDefinitionMinAggregateOutputType | null
    _max: FieldDefinitionMaxAggregateOutputType | null
  }

  type GetFieldDefinitionGroupByPayload<T extends FieldDefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldDefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldDefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldDefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], FieldDefinitionGroupByOutputType[P]>
        }
      >
    >


  export type FieldDefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    multiple?: boolean
    objectTypeId?: boolean
    relationToId?: boolean
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
    relationTo?: boolean | FieldDefinition$relationToArgs<ExtArgs>
  }, ExtArgs["result"]["fieldDefinition"]>

  export type FieldDefinitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    multiple?: boolean
    objectTypeId?: boolean
    relationToId?: boolean
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
    relationTo?: boolean | FieldDefinition$relationToArgs<ExtArgs>
  }, ExtArgs["result"]["fieldDefinition"]>

  export type FieldDefinitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    multiple?: boolean
    objectTypeId?: boolean
    relationToId?: boolean
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
    relationTo?: boolean | FieldDefinition$relationToArgs<ExtArgs>
  }, ExtArgs["result"]["fieldDefinition"]>

  export type FieldDefinitionSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    multiple?: boolean
    objectTypeId?: boolean
    relationToId?: boolean
  }

  export type FieldDefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "multiple" | "objectTypeId" | "relationToId", ExtArgs["result"]["fieldDefinition"]>
  export type FieldDefinitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
    relationTo?: boolean | FieldDefinition$relationToArgs<ExtArgs>
  }
  export type FieldDefinitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
    relationTo?: boolean | FieldDefinition$relationToArgs<ExtArgs>
  }
  export type FieldDefinitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
    relationTo?: boolean | FieldDefinition$relationToArgs<ExtArgs>
  }

  export type $FieldDefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FieldDefinition"
    objects: {
      objectType: Prisma.$ObjectTypePayload<ExtArgs>
      relationTo: Prisma.$ObjectTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      multiple: boolean
      objectTypeId: string
      relationToId: string | null
    }, ExtArgs["result"]["fieldDefinition"]>
    composites: {}
  }

  type FieldDefinitionGetPayload<S extends boolean | null | undefined | FieldDefinitionDefaultArgs> = $Result.GetResult<Prisma.$FieldDefinitionPayload, S>

  type FieldDefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldDefinitionCountAggregateInputType | true
    }

  export interface FieldDefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FieldDefinition'], meta: { name: 'FieldDefinition' } }
    /**
     * Find zero or one FieldDefinition that matches the filter.
     * @param {FieldDefinitionFindUniqueArgs} args - Arguments to find a FieldDefinition
     * @example
     * // Get one FieldDefinition
     * const fieldDefinition = await prisma.fieldDefinition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldDefinitionFindUniqueArgs>(args: SelectSubset<T, FieldDefinitionFindUniqueArgs<ExtArgs>>): Prisma__FieldDefinitionClient<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FieldDefinition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldDefinitionFindUniqueOrThrowArgs} args - Arguments to find a FieldDefinition
     * @example
     * // Get one FieldDefinition
     * const fieldDefinition = await prisma.fieldDefinition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldDefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldDefinitionClient<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldDefinition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldDefinitionFindFirstArgs} args - Arguments to find a FieldDefinition
     * @example
     * // Get one FieldDefinition
     * const fieldDefinition = await prisma.fieldDefinition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldDefinitionFindFirstArgs>(args?: SelectSubset<T, FieldDefinitionFindFirstArgs<ExtArgs>>): Prisma__FieldDefinitionClient<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldDefinition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldDefinitionFindFirstOrThrowArgs} args - Arguments to find a FieldDefinition
     * @example
     * // Get one FieldDefinition
     * const fieldDefinition = await prisma.fieldDefinition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldDefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldDefinitionClient<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FieldDefinitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldDefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FieldDefinitions
     * const fieldDefinitions = await prisma.fieldDefinition.findMany()
     * 
     * // Get first 10 FieldDefinitions
     * const fieldDefinitions = await prisma.fieldDefinition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldDefinitionWithIdOnly = await prisma.fieldDefinition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldDefinitionFindManyArgs>(args?: SelectSubset<T, FieldDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FieldDefinition.
     * @param {FieldDefinitionCreateArgs} args - Arguments to create a FieldDefinition.
     * @example
     * // Create one FieldDefinition
     * const FieldDefinition = await prisma.fieldDefinition.create({
     *   data: {
     *     // ... data to create a FieldDefinition
     *   }
     * })
     * 
     */
    create<T extends FieldDefinitionCreateArgs>(args: SelectSubset<T, FieldDefinitionCreateArgs<ExtArgs>>): Prisma__FieldDefinitionClient<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FieldDefinitions.
     * @param {FieldDefinitionCreateManyArgs} args - Arguments to create many FieldDefinitions.
     * @example
     * // Create many FieldDefinitions
     * const fieldDefinition = await prisma.fieldDefinition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldDefinitionCreateManyArgs>(args?: SelectSubset<T, FieldDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FieldDefinitions and returns the data saved in the database.
     * @param {FieldDefinitionCreateManyAndReturnArgs} args - Arguments to create many FieldDefinitions.
     * @example
     * // Create many FieldDefinitions
     * const fieldDefinition = await prisma.fieldDefinition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FieldDefinitions and only return the `id`
     * const fieldDefinitionWithIdOnly = await prisma.fieldDefinition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FieldDefinitionCreateManyAndReturnArgs>(args?: SelectSubset<T, FieldDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FieldDefinition.
     * @param {FieldDefinitionDeleteArgs} args - Arguments to delete one FieldDefinition.
     * @example
     * // Delete one FieldDefinition
     * const FieldDefinition = await prisma.fieldDefinition.delete({
     *   where: {
     *     // ... filter to delete one FieldDefinition
     *   }
     * })
     * 
     */
    delete<T extends FieldDefinitionDeleteArgs>(args: SelectSubset<T, FieldDefinitionDeleteArgs<ExtArgs>>): Prisma__FieldDefinitionClient<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FieldDefinition.
     * @param {FieldDefinitionUpdateArgs} args - Arguments to update one FieldDefinition.
     * @example
     * // Update one FieldDefinition
     * const fieldDefinition = await prisma.fieldDefinition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldDefinitionUpdateArgs>(args: SelectSubset<T, FieldDefinitionUpdateArgs<ExtArgs>>): Prisma__FieldDefinitionClient<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FieldDefinitions.
     * @param {FieldDefinitionDeleteManyArgs} args - Arguments to filter FieldDefinitions to delete.
     * @example
     * // Delete a few FieldDefinitions
     * const { count } = await prisma.fieldDefinition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldDefinitionDeleteManyArgs>(args?: SelectSubset<T, FieldDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldDefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FieldDefinitions
     * const fieldDefinition = await prisma.fieldDefinition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldDefinitionUpdateManyArgs>(args: SelectSubset<T, FieldDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldDefinitions and returns the data updated in the database.
     * @param {FieldDefinitionUpdateManyAndReturnArgs} args - Arguments to update many FieldDefinitions.
     * @example
     * // Update many FieldDefinitions
     * const fieldDefinition = await prisma.fieldDefinition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FieldDefinitions and only return the `id`
     * const fieldDefinitionWithIdOnly = await prisma.fieldDefinition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FieldDefinitionUpdateManyAndReturnArgs>(args: SelectSubset<T, FieldDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FieldDefinition.
     * @param {FieldDefinitionUpsertArgs} args - Arguments to update or create a FieldDefinition.
     * @example
     * // Update or create a FieldDefinition
     * const fieldDefinition = await prisma.fieldDefinition.upsert({
     *   create: {
     *     // ... data to create a FieldDefinition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FieldDefinition we want to update
     *   }
     * })
     */
    upsert<T extends FieldDefinitionUpsertArgs>(args: SelectSubset<T, FieldDefinitionUpsertArgs<ExtArgs>>): Prisma__FieldDefinitionClient<$Result.GetResult<Prisma.$FieldDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FieldDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldDefinitionCountArgs} args - Arguments to filter FieldDefinitions to count.
     * @example
     * // Count the number of FieldDefinitions
     * const count = await prisma.fieldDefinition.count({
     *   where: {
     *     // ... the filter for the FieldDefinitions we want to count
     *   }
     * })
    **/
    count<T extends FieldDefinitionCountArgs>(
      args?: Subset<T, FieldDefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldDefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FieldDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldDefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FieldDefinitionAggregateArgs>(args: Subset<T, FieldDefinitionAggregateArgs>): Prisma.PrismaPromise<GetFieldDefinitionAggregateType<T>>

    /**
     * Group by FieldDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldDefinitionGroupByArgs} args - Group by arguments.
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
      T extends FieldDefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldDefinitionGroupByArgs['orderBy'] }
        : { orderBy?: FieldDefinitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FieldDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FieldDefinition model
   */
  readonly fields: FieldDefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FieldDefinition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldDefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objectType<T extends ObjectTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjectTypeDefaultArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relationTo<T extends FieldDefinition$relationToArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefinition$relationToArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FieldDefinition model
   */
  interface FieldDefinitionFieldRefs {
    readonly id: FieldRef<"FieldDefinition", 'String'>
    readonly name: FieldRef<"FieldDefinition", 'String'>
    readonly type: FieldRef<"FieldDefinition", 'String'>
    readonly multiple: FieldRef<"FieldDefinition", 'Boolean'>
    readonly objectTypeId: FieldRef<"FieldDefinition", 'String'>
    readonly relationToId: FieldRef<"FieldDefinition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FieldDefinition findUnique
   */
  export type FieldDefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which FieldDefinition to fetch.
     */
    where: FieldDefinitionWhereUniqueInput
  }

  /**
   * FieldDefinition findUniqueOrThrow
   */
  export type FieldDefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which FieldDefinition to fetch.
     */
    where: FieldDefinitionWhereUniqueInput
  }

  /**
   * FieldDefinition findFirst
   */
  export type FieldDefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which FieldDefinition to fetch.
     */
    where?: FieldDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldDefinitions to fetch.
     */
    orderBy?: FieldDefinitionOrderByWithRelationInput | FieldDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldDefinitions.
     */
    cursor?: FieldDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldDefinitions.
     */
    distinct?: FieldDefinitionScalarFieldEnum | FieldDefinitionScalarFieldEnum[]
  }

  /**
   * FieldDefinition findFirstOrThrow
   */
  export type FieldDefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which FieldDefinition to fetch.
     */
    where?: FieldDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldDefinitions to fetch.
     */
    orderBy?: FieldDefinitionOrderByWithRelationInput | FieldDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldDefinitions.
     */
    cursor?: FieldDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldDefinitions.
     */
    distinct?: FieldDefinitionScalarFieldEnum | FieldDefinitionScalarFieldEnum[]
  }

  /**
   * FieldDefinition findMany
   */
  export type FieldDefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which FieldDefinitions to fetch.
     */
    where?: FieldDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldDefinitions to fetch.
     */
    orderBy?: FieldDefinitionOrderByWithRelationInput | FieldDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FieldDefinitions.
     */
    cursor?: FieldDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldDefinitions.
     */
    skip?: number
    distinct?: FieldDefinitionScalarFieldEnum | FieldDefinitionScalarFieldEnum[]
  }

  /**
   * FieldDefinition create
   */
  export type FieldDefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to create a FieldDefinition.
     */
    data: XOR<FieldDefinitionCreateInput, FieldDefinitionUncheckedCreateInput>
  }

  /**
   * FieldDefinition createMany
   */
  export type FieldDefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FieldDefinitions.
     */
    data: FieldDefinitionCreateManyInput | FieldDefinitionCreateManyInput[]
  }

  /**
   * FieldDefinition createManyAndReturn
   */
  export type FieldDefinitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * The data used to create many FieldDefinitions.
     */
    data: FieldDefinitionCreateManyInput | FieldDefinitionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FieldDefinition update
   */
  export type FieldDefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to update a FieldDefinition.
     */
    data: XOR<FieldDefinitionUpdateInput, FieldDefinitionUncheckedUpdateInput>
    /**
     * Choose, which FieldDefinition to update.
     */
    where: FieldDefinitionWhereUniqueInput
  }

  /**
   * FieldDefinition updateMany
   */
  export type FieldDefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FieldDefinitions.
     */
    data: XOR<FieldDefinitionUpdateManyMutationInput, FieldDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which FieldDefinitions to update
     */
    where?: FieldDefinitionWhereInput
    /**
     * Limit how many FieldDefinitions to update.
     */
    limit?: number
  }

  /**
   * FieldDefinition updateManyAndReturn
   */
  export type FieldDefinitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * The data used to update FieldDefinitions.
     */
    data: XOR<FieldDefinitionUpdateManyMutationInput, FieldDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which FieldDefinitions to update
     */
    where?: FieldDefinitionWhereInput
    /**
     * Limit how many FieldDefinitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FieldDefinition upsert
   */
  export type FieldDefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    /**
     * The filter to search for the FieldDefinition to update in case it exists.
     */
    where: FieldDefinitionWhereUniqueInput
    /**
     * In case the FieldDefinition found by the `where` argument doesn't exist, create a new FieldDefinition with this data.
     */
    create: XOR<FieldDefinitionCreateInput, FieldDefinitionUncheckedCreateInput>
    /**
     * In case the FieldDefinition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldDefinitionUpdateInput, FieldDefinitionUncheckedUpdateInput>
  }

  /**
   * FieldDefinition delete
   */
  export type FieldDefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
    /**
     * Filter which FieldDefinition to delete.
     */
    where: FieldDefinitionWhereUniqueInput
  }

  /**
   * FieldDefinition deleteMany
   */
  export type FieldDefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldDefinitions to delete
     */
    where?: FieldDefinitionWhereInput
    /**
     * Limit how many FieldDefinitions to delete.
     */
    limit?: number
  }

  /**
   * FieldDefinition.relationTo
   */
  export type FieldDefinition$relationToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectType
     */
    select?: ObjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectType
     */
    omit?: ObjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectTypeInclude<ExtArgs> | null
    where?: ObjectTypeWhereInput
  }

  /**
   * FieldDefinition without action
   */
  export type FieldDefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldDefinition
     */
    select?: FieldDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldDefinition
     */
    omit?: FieldDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldDefinitionInclude<ExtArgs> | null
  }


  /**
   * Model Entry
   */

  export type AggregateEntry = {
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  export type EntryMinAggregateOutputType = {
    id: string | null
    objectTypeId: string | null
    createdAt: Date | null
  }

  export type EntryMaxAggregateOutputType = {
    id: string | null
    objectTypeId: string | null
    createdAt: Date | null
  }

  export type EntryCountAggregateOutputType = {
    id: number
    objectTypeId: number
    data: number
    createdAt: number
    _all: number
  }


  export type EntryMinAggregateInputType = {
    id?: true
    objectTypeId?: true
    createdAt?: true
  }

  export type EntryMaxAggregateInputType = {
    id?: true
    objectTypeId?: true
    createdAt?: true
  }

  export type EntryCountAggregateInputType = {
    id?: true
    objectTypeId?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type EntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entry to aggregate.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entries
    **/
    _count?: true | EntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryMaxAggregateInputType
  }

  export type GetEntryAggregateType<T extends EntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntry[P]>
      : GetScalarType<T[P], AggregateEntry[P]>
  }




  export type EntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithAggregationInput | EntryOrderByWithAggregationInput[]
    by: EntryScalarFieldEnum[] | EntryScalarFieldEnum
    having?: EntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryCountAggregateInputType | true
    _min?: EntryMinAggregateInputType
    _max?: EntryMaxAggregateInputType
  }

  export type EntryGroupByOutputType = {
    id: string
    objectTypeId: string
    data: JsonValue
    createdAt: Date
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  type GetEntryGroupByPayload<T extends EntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryGroupByOutputType[P]>
            : GetScalarType<T[P], EntryGroupByOutputType[P]>
        }
      >
    >


  export type EntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    objectTypeId?: boolean
    data?: boolean
    createdAt?: boolean
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    objectTypeId?: boolean
    data?: boolean
    createdAt?: boolean
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    objectTypeId?: boolean
    data?: boolean
    createdAt?: boolean
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectScalar = {
    id?: boolean
    objectTypeId?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type EntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "objectTypeId" | "data" | "createdAt", ExtArgs["result"]["entry"]>
  export type EntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
  }
  export type EntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
  }
  export type EntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectType?: boolean | ObjectTypeDefaultArgs<ExtArgs>
  }

  export type $EntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entry"
    objects: {
      objectType: Prisma.$ObjectTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      objectTypeId: string
      data: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["entry"]>
    composites: {}
  }

  type EntryGetPayload<S extends boolean | null | undefined | EntryDefaultArgs> = $Result.GetResult<Prisma.$EntryPayload, S>

  type EntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntryCountAggregateInputType | true
    }

  export interface EntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entry'], meta: { name: 'Entry' } }
    /**
     * Find zero or one Entry that matches the filter.
     * @param {EntryFindUniqueArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntryFindUniqueArgs>(args: SelectSubset<T, EntryFindUniqueArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntryFindUniqueOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntryFindUniqueOrThrowArgs>(args: SelectSubset<T, EntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntryFindFirstArgs>(args?: SelectSubset<T, EntryFindFirstArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntryFindFirstOrThrowArgs>(args?: SelectSubset<T, EntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entries
     * const entries = await prisma.entry.findMany()
     * 
     * // Get first 10 Entries
     * const entries = await prisma.entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryWithIdOnly = await prisma.entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntryFindManyArgs>(args?: SelectSubset<T, EntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entry.
     * @param {EntryCreateArgs} args - Arguments to create a Entry.
     * @example
     * // Create one Entry
     * const Entry = await prisma.entry.create({
     *   data: {
     *     // ... data to create a Entry
     *   }
     * })
     * 
     */
    create<T extends EntryCreateArgs>(args: SelectSubset<T, EntryCreateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entries.
     * @param {EntryCreateManyArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntryCreateManyArgs>(args?: SelectSubset<T, EntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entries and returns the data saved in the database.
     * @param {EntryCreateManyAndReturnArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntryCreateManyAndReturnArgs>(args?: SelectSubset<T, EntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entry.
     * @param {EntryDeleteArgs} args - Arguments to delete one Entry.
     * @example
     * // Delete one Entry
     * const Entry = await prisma.entry.delete({
     *   where: {
     *     // ... filter to delete one Entry
     *   }
     * })
     * 
     */
    delete<T extends EntryDeleteArgs>(args: SelectSubset<T, EntryDeleteArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entry.
     * @param {EntryUpdateArgs} args - Arguments to update one Entry.
     * @example
     * // Update one Entry
     * const entry = await prisma.entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntryUpdateArgs>(args: SelectSubset<T, EntryUpdateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entries.
     * @param {EntryDeleteManyArgs} args - Arguments to filter Entries to delete.
     * @example
     * // Delete a few Entries
     * const { count } = await prisma.entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntryDeleteManyArgs>(args?: SelectSubset<T, EntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntryUpdateManyArgs>(args: SelectSubset<T, EntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries and returns the data updated in the database.
     * @param {EntryUpdateManyAndReturnArgs} args - Arguments to update many Entries.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntryUpdateManyAndReturnArgs>(args: SelectSubset<T, EntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entry.
     * @param {EntryUpsertArgs} args - Arguments to update or create a Entry.
     * @example
     * // Update or create a Entry
     * const entry = await prisma.entry.upsert({
     *   create: {
     *     // ... data to create a Entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entry we want to update
     *   }
     * })
     */
    upsert<T extends EntryUpsertArgs>(args: SelectSubset<T, EntryUpsertArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryCountArgs} args - Arguments to filter Entries to count.
     * @example
     * // Count the number of Entries
     * const count = await prisma.entry.count({
     *   where: {
     *     // ... the filter for the Entries we want to count
     *   }
     * })
    **/
    count<T extends EntryCountArgs>(
      args?: Subset<T, EntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntryAggregateArgs>(args: Subset<T, EntryAggregateArgs>): Prisma.PrismaPromise<GetEntryAggregateType<T>>

    /**
     * Group by Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryGroupByArgs} args - Group by arguments.
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
      T extends EntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryGroupByArgs['orderBy'] }
        : { orderBy?: EntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entry model
   */
  readonly fields: EntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objectType<T extends ObjectTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjectTypeDefaultArgs<ExtArgs>>): Prisma__ObjectTypeClient<$Result.GetResult<Prisma.$ObjectTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Entry model
   */
  interface EntryFieldRefs {
    readonly id: FieldRef<"Entry", 'String'>
    readonly objectTypeId: FieldRef<"Entry", 'String'>
    readonly data: FieldRef<"Entry", 'Json'>
    readonly createdAt: FieldRef<"Entry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entry findUnique
   */
  export type EntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findUniqueOrThrow
   */
  export type EntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findFirst
   */
  export type EntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findFirstOrThrow
   */
  export type EntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findMany
   */
  export type EntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entries to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry create
   */
  export type EntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to create a Entry.
     */
    data: XOR<EntryCreateInput, EntryUncheckedCreateInput>
  }

  /**
   * Entry createMany
   */
  export type EntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
  }

  /**
   * Entry createManyAndReturn
   */
  export type EntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entry update
   */
  export type EntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to update a Entry.
     */
    data: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
    /**
     * Choose, which Entry to update.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry updateMany
   */
  export type EntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
  }

  /**
   * Entry updateManyAndReturn
   */
  export type EntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entry upsert
   */
  export type EntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The filter to search for the Entry to update in case it exists.
     */
    where: EntryWhereUniqueInput
    /**
     * In case the Entry found by the `where` argument doesn't exist, create a new Entry with this data.
     */
    create: XOR<EntryCreateInput, EntryUncheckedCreateInput>
    /**
     * In case the Entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
  }

  /**
   * Entry delete
   */
  export type EntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter which Entry to delete.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry deleteMany
   */
  export type EntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entries to delete
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to delete.
     */
    limit?: number
  }

  /**
   * Entry without action
   */
  export type EntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ObjectTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type ObjectTypeScalarFieldEnum = (typeof ObjectTypeScalarFieldEnum)[keyof typeof ObjectTypeScalarFieldEnum]


  export const FieldDefinitionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    multiple: 'multiple',
    objectTypeId: 'objectTypeId',
    relationToId: 'relationToId'
  };

  export type FieldDefinitionScalarFieldEnum = (typeof FieldDefinitionScalarFieldEnum)[keyof typeof FieldDefinitionScalarFieldEnum]


  export const EntryScalarFieldEnum: {
    id: 'id',
    objectTypeId: 'objectTypeId',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type EntryScalarFieldEnum = (typeof EntryScalarFieldEnum)[keyof typeof EntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ObjectTypeWhereInput = {
    AND?: ObjectTypeWhereInput | ObjectTypeWhereInput[]
    OR?: ObjectTypeWhereInput[]
    NOT?: ObjectTypeWhereInput | ObjectTypeWhereInput[]
    id?: StringFilter<"ObjectType"> | string
    name?: StringFilter<"ObjectType"> | string
    slug?: StringFilter<"ObjectType"> | string
    entries?: EntryListRelationFilter
    fields?: FieldDefinitionListRelationFilter
    fieldRelations?: FieldDefinitionListRelationFilter
  }

  export type ObjectTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    entries?: EntryOrderByRelationAggregateInput
    fields?: FieldDefinitionOrderByRelationAggregateInput
    fieldRelations?: FieldDefinitionOrderByRelationAggregateInput
  }

  export type ObjectTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ObjectTypeWhereInput | ObjectTypeWhereInput[]
    OR?: ObjectTypeWhereInput[]
    NOT?: ObjectTypeWhereInput | ObjectTypeWhereInput[]
    name?: StringFilter<"ObjectType"> | string
    entries?: EntryListRelationFilter
    fields?: FieldDefinitionListRelationFilter
    fieldRelations?: FieldDefinitionListRelationFilter
  }, "id" | "slug">

  export type ObjectTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: ObjectTypeCountOrderByAggregateInput
    _max?: ObjectTypeMaxOrderByAggregateInput
    _min?: ObjectTypeMinOrderByAggregateInput
  }

  export type ObjectTypeScalarWhereWithAggregatesInput = {
    AND?: ObjectTypeScalarWhereWithAggregatesInput | ObjectTypeScalarWhereWithAggregatesInput[]
    OR?: ObjectTypeScalarWhereWithAggregatesInput[]
    NOT?: ObjectTypeScalarWhereWithAggregatesInput | ObjectTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ObjectType"> | string
    name?: StringWithAggregatesFilter<"ObjectType"> | string
    slug?: StringWithAggregatesFilter<"ObjectType"> | string
  }

  export type FieldDefinitionWhereInput = {
    AND?: FieldDefinitionWhereInput | FieldDefinitionWhereInput[]
    OR?: FieldDefinitionWhereInput[]
    NOT?: FieldDefinitionWhereInput | FieldDefinitionWhereInput[]
    id?: StringFilter<"FieldDefinition"> | string
    name?: StringFilter<"FieldDefinition"> | string
    type?: StringFilter<"FieldDefinition"> | string
    multiple?: BoolFilter<"FieldDefinition"> | boolean
    objectTypeId?: StringFilter<"FieldDefinition"> | string
    relationToId?: StringNullableFilter<"FieldDefinition"> | string | null
    objectType?: XOR<ObjectTypeScalarRelationFilter, ObjectTypeWhereInput>
    relationTo?: XOR<ObjectTypeNullableScalarRelationFilter, ObjectTypeWhereInput> | null
  }

  export type FieldDefinitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    multiple?: SortOrder
    objectTypeId?: SortOrder
    relationToId?: SortOrderInput | SortOrder
    objectType?: ObjectTypeOrderByWithRelationInput
    relationTo?: ObjectTypeOrderByWithRelationInput
  }

  export type FieldDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FieldDefinitionWhereInput | FieldDefinitionWhereInput[]
    OR?: FieldDefinitionWhereInput[]
    NOT?: FieldDefinitionWhereInput | FieldDefinitionWhereInput[]
    name?: StringFilter<"FieldDefinition"> | string
    type?: StringFilter<"FieldDefinition"> | string
    multiple?: BoolFilter<"FieldDefinition"> | boolean
    objectTypeId?: StringFilter<"FieldDefinition"> | string
    relationToId?: StringNullableFilter<"FieldDefinition"> | string | null
    objectType?: XOR<ObjectTypeScalarRelationFilter, ObjectTypeWhereInput>
    relationTo?: XOR<ObjectTypeNullableScalarRelationFilter, ObjectTypeWhereInput> | null
  }, "id">

  export type FieldDefinitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    multiple?: SortOrder
    objectTypeId?: SortOrder
    relationToId?: SortOrderInput | SortOrder
    _count?: FieldDefinitionCountOrderByAggregateInput
    _max?: FieldDefinitionMaxOrderByAggregateInput
    _min?: FieldDefinitionMinOrderByAggregateInput
  }

  export type FieldDefinitionScalarWhereWithAggregatesInput = {
    AND?: FieldDefinitionScalarWhereWithAggregatesInput | FieldDefinitionScalarWhereWithAggregatesInput[]
    OR?: FieldDefinitionScalarWhereWithAggregatesInput[]
    NOT?: FieldDefinitionScalarWhereWithAggregatesInput | FieldDefinitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FieldDefinition"> | string
    name?: StringWithAggregatesFilter<"FieldDefinition"> | string
    type?: StringWithAggregatesFilter<"FieldDefinition"> | string
    multiple?: BoolWithAggregatesFilter<"FieldDefinition"> | boolean
    objectTypeId?: StringWithAggregatesFilter<"FieldDefinition"> | string
    relationToId?: StringNullableWithAggregatesFilter<"FieldDefinition"> | string | null
  }

  export type EntryWhereInput = {
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    id?: StringFilter<"Entry"> | string
    objectTypeId?: StringFilter<"Entry"> | string
    data?: JsonFilter<"Entry">
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    objectType?: XOR<ObjectTypeScalarRelationFilter, ObjectTypeWhereInput>
  }

  export type EntryOrderByWithRelationInput = {
    id?: SortOrder
    objectTypeId?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    objectType?: ObjectTypeOrderByWithRelationInput
  }

  export type EntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    objectTypeId?: StringFilter<"Entry"> | string
    data?: JsonFilter<"Entry">
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    objectType?: XOR<ObjectTypeScalarRelationFilter, ObjectTypeWhereInput>
  }, "id">

  export type EntryOrderByWithAggregationInput = {
    id?: SortOrder
    objectTypeId?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: EntryCountOrderByAggregateInput
    _max?: EntryMaxOrderByAggregateInput
    _min?: EntryMinOrderByAggregateInput
  }

  export type EntryScalarWhereWithAggregatesInput = {
    AND?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    OR?: EntryScalarWhereWithAggregatesInput[]
    NOT?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entry"> | string
    objectTypeId?: StringWithAggregatesFilter<"Entry"> | string
    data?: JsonWithAggregatesFilter<"Entry">
    createdAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
  }

  export type ObjectTypeCreateInput = {
    id?: string
    name: string
    slug: string
    entries?: EntryCreateNestedManyWithoutObjectTypeInput
    fields?: FieldDefinitionCreateNestedManyWithoutObjectTypeInput
    fieldRelations?: FieldDefinitionCreateNestedManyWithoutRelationToInput
  }

  export type ObjectTypeUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    entries?: EntryUncheckedCreateNestedManyWithoutObjectTypeInput
    fields?: FieldDefinitionUncheckedCreateNestedManyWithoutObjectTypeInput
    fieldRelations?: FieldDefinitionUncheckedCreateNestedManyWithoutRelationToInput
  }

  export type ObjectTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    entries?: EntryUpdateManyWithoutObjectTypeNestedInput
    fields?: FieldDefinitionUpdateManyWithoutObjectTypeNestedInput
    fieldRelations?: FieldDefinitionUpdateManyWithoutRelationToNestedInput
  }

  export type ObjectTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    entries?: EntryUncheckedUpdateManyWithoutObjectTypeNestedInput
    fields?: FieldDefinitionUncheckedUpdateManyWithoutObjectTypeNestedInput
    fieldRelations?: FieldDefinitionUncheckedUpdateManyWithoutRelationToNestedInput
  }

  export type ObjectTypeCreateManyInput = {
    id?: string
    name: string
    slug: string
  }

  export type ObjectTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ObjectTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type FieldDefinitionCreateInput = {
    id?: string
    name: string
    type?: string
    multiple?: boolean
    objectType: ObjectTypeCreateNestedOneWithoutFieldsInput
    relationTo?: ObjectTypeCreateNestedOneWithoutFieldRelationsInput
  }

  export type FieldDefinitionUncheckedCreateInput = {
    id?: string
    name: string
    type?: string
    multiple?: boolean
    objectTypeId: string
    relationToId?: string | null
  }

  export type FieldDefinitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
    objectType?: ObjectTypeUpdateOneRequiredWithoutFieldsNestedInput
    relationTo?: ObjectTypeUpdateOneWithoutFieldRelationsNestedInput
  }

  export type FieldDefinitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
    objectTypeId?: StringFieldUpdateOperationsInput | string
    relationToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FieldDefinitionCreateManyInput = {
    id?: string
    name: string
    type?: string
    multiple?: boolean
    objectTypeId: string
    relationToId?: string | null
  }

  export type FieldDefinitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FieldDefinitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
    objectTypeId?: StringFieldUpdateOperationsInput | string
    relationToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntryCreateInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    objectType: ObjectTypeCreateNestedOneWithoutEntriesInput
  }

  export type EntryUncheckedCreateInput = {
    id?: string
    objectTypeId: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objectType?: ObjectTypeUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type EntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    objectTypeId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryCreateManyInput = {
    id?: string
    objectTypeId: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    objectTypeId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EntryListRelationFilter = {
    every?: EntryWhereInput
    some?: EntryWhereInput
    none?: EntryWhereInput
  }

  export type FieldDefinitionListRelationFilter = {
    every?: FieldDefinitionWhereInput
    some?: FieldDefinitionWhereInput
    none?: FieldDefinitionWhereInput
  }

  export type EntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FieldDefinitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObjectTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ObjectTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ObjectTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ObjectTypeScalarRelationFilter = {
    is?: ObjectTypeWhereInput
    isNot?: ObjectTypeWhereInput
  }

  export type ObjectTypeNullableScalarRelationFilter = {
    is?: ObjectTypeWhereInput | null
    isNot?: ObjectTypeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FieldDefinitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    multiple?: SortOrder
    objectTypeId?: SortOrder
    relationToId?: SortOrder
  }

  export type FieldDefinitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    multiple?: SortOrder
    objectTypeId?: SortOrder
    relationToId?: SortOrder
  }

  export type FieldDefinitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    multiple?: SortOrder
    objectTypeId?: SortOrder
    relationToId?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EntryCountOrderByAggregateInput = {
    id?: SortOrder
    objectTypeId?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type EntryMaxOrderByAggregateInput = {
    id?: SortOrder
    objectTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type EntryMinOrderByAggregateInput = {
    id?: SortOrder
    objectTypeId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EntryCreateNestedManyWithoutObjectTypeInput = {
    create?: XOR<EntryCreateWithoutObjectTypeInput, EntryUncheckedCreateWithoutObjectTypeInput> | EntryCreateWithoutObjectTypeInput[] | EntryUncheckedCreateWithoutObjectTypeInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutObjectTypeInput | EntryCreateOrConnectWithoutObjectTypeInput[]
    createMany?: EntryCreateManyObjectTypeInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type FieldDefinitionCreateNestedManyWithoutObjectTypeInput = {
    create?: XOR<FieldDefinitionCreateWithoutObjectTypeInput, FieldDefinitionUncheckedCreateWithoutObjectTypeInput> | FieldDefinitionCreateWithoutObjectTypeInput[] | FieldDefinitionUncheckedCreateWithoutObjectTypeInput[]
    connectOrCreate?: FieldDefinitionCreateOrConnectWithoutObjectTypeInput | FieldDefinitionCreateOrConnectWithoutObjectTypeInput[]
    createMany?: FieldDefinitionCreateManyObjectTypeInputEnvelope
    connect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
  }

  export type FieldDefinitionCreateNestedManyWithoutRelationToInput = {
    create?: XOR<FieldDefinitionCreateWithoutRelationToInput, FieldDefinitionUncheckedCreateWithoutRelationToInput> | FieldDefinitionCreateWithoutRelationToInput[] | FieldDefinitionUncheckedCreateWithoutRelationToInput[]
    connectOrCreate?: FieldDefinitionCreateOrConnectWithoutRelationToInput | FieldDefinitionCreateOrConnectWithoutRelationToInput[]
    createMany?: FieldDefinitionCreateManyRelationToInputEnvelope
    connect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
  }

  export type EntryUncheckedCreateNestedManyWithoutObjectTypeInput = {
    create?: XOR<EntryCreateWithoutObjectTypeInput, EntryUncheckedCreateWithoutObjectTypeInput> | EntryCreateWithoutObjectTypeInput[] | EntryUncheckedCreateWithoutObjectTypeInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutObjectTypeInput | EntryCreateOrConnectWithoutObjectTypeInput[]
    createMany?: EntryCreateManyObjectTypeInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type FieldDefinitionUncheckedCreateNestedManyWithoutObjectTypeInput = {
    create?: XOR<FieldDefinitionCreateWithoutObjectTypeInput, FieldDefinitionUncheckedCreateWithoutObjectTypeInput> | FieldDefinitionCreateWithoutObjectTypeInput[] | FieldDefinitionUncheckedCreateWithoutObjectTypeInput[]
    connectOrCreate?: FieldDefinitionCreateOrConnectWithoutObjectTypeInput | FieldDefinitionCreateOrConnectWithoutObjectTypeInput[]
    createMany?: FieldDefinitionCreateManyObjectTypeInputEnvelope
    connect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
  }

  export type FieldDefinitionUncheckedCreateNestedManyWithoutRelationToInput = {
    create?: XOR<FieldDefinitionCreateWithoutRelationToInput, FieldDefinitionUncheckedCreateWithoutRelationToInput> | FieldDefinitionCreateWithoutRelationToInput[] | FieldDefinitionUncheckedCreateWithoutRelationToInput[]
    connectOrCreate?: FieldDefinitionCreateOrConnectWithoutRelationToInput | FieldDefinitionCreateOrConnectWithoutRelationToInput[]
    createMany?: FieldDefinitionCreateManyRelationToInputEnvelope
    connect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EntryUpdateManyWithoutObjectTypeNestedInput = {
    create?: XOR<EntryCreateWithoutObjectTypeInput, EntryUncheckedCreateWithoutObjectTypeInput> | EntryCreateWithoutObjectTypeInput[] | EntryUncheckedCreateWithoutObjectTypeInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutObjectTypeInput | EntryCreateOrConnectWithoutObjectTypeInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutObjectTypeInput | EntryUpsertWithWhereUniqueWithoutObjectTypeInput[]
    createMany?: EntryCreateManyObjectTypeInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutObjectTypeInput | EntryUpdateWithWhereUniqueWithoutObjectTypeInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutObjectTypeInput | EntryUpdateManyWithWhereWithoutObjectTypeInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type FieldDefinitionUpdateManyWithoutObjectTypeNestedInput = {
    create?: XOR<FieldDefinitionCreateWithoutObjectTypeInput, FieldDefinitionUncheckedCreateWithoutObjectTypeInput> | FieldDefinitionCreateWithoutObjectTypeInput[] | FieldDefinitionUncheckedCreateWithoutObjectTypeInput[]
    connectOrCreate?: FieldDefinitionCreateOrConnectWithoutObjectTypeInput | FieldDefinitionCreateOrConnectWithoutObjectTypeInput[]
    upsert?: FieldDefinitionUpsertWithWhereUniqueWithoutObjectTypeInput | FieldDefinitionUpsertWithWhereUniqueWithoutObjectTypeInput[]
    createMany?: FieldDefinitionCreateManyObjectTypeInputEnvelope
    set?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    disconnect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    delete?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    connect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    update?: FieldDefinitionUpdateWithWhereUniqueWithoutObjectTypeInput | FieldDefinitionUpdateWithWhereUniqueWithoutObjectTypeInput[]
    updateMany?: FieldDefinitionUpdateManyWithWhereWithoutObjectTypeInput | FieldDefinitionUpdateManyWithWhereWithoutObjectTypeInput[]
    deleteMany?: FieldDefinitionScalarWhereInput | FieldDefinitionScalarWhereInput[]
  }

  export type FieldDefinitionUpdateManyWithoutRelationToNestedInput = {
    create?: XOR<FieldDefinitionCreateWithoutRelationToInput, FieldDefinitionUncheckedCreateWithoutRelationToInput> | FieldDefinitionCreateWithoutRelationToInput[] | FieldDefinitionUncheckedCreateWithoutRelationToInput[]
    connectOrCreate?: FieldDefinitionCreateOrConnectWithoutRelationToInput | FieldDefinitionCreateOrConnectWithoutRelationToInput[]
    upsert?: FieldDefinitionUpsertWithWhereUniqueWithoutRelationToInput | FieldDefinitionUpsertWithWhereUniqueWithoutRelationToInput[]
    createMany?: FieldDefinitionCreateManyRelationToInputEnvelope
    set?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    disconnect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    delete?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    connect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    update?: FieldDefinitionUpdateWithWhereUniqueWithoutRelationToInput | FieldDefinitionUpdateWithWhereUniqueWithoutRelationToInput[]
    updateMany?: FieldDefinitionUpdateManyWithWhereWithoutRelationToInput | FieldDefinitionUpdateManyWithWhereWithoutRelationToInput[]
    deleteMany?: FieldDefinitionScalarWhereInput | FieldDefinitionScalarWhereInput[]
  }

  export type EntryUncheckedUpdateManyWithoutObjectTypeNestedInput = {
    create?: XOR<EntryCreateWithoutObjectTypeInput, EntryUncheckedCreateWithoutObjectTypeInput> | EntryCreateWithoutObjectTypeInput[] | EntryUncheckedCreateWithoutObjectTypeInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutObjectTypeInput | EntryCreateOrConnectWithoutObjectTypeInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutObjectTypeInput | EntryUpsertWithWhereUniqueWithoutObjectTypeInput[]
    createMany?: EntryCreateManyObjectTypeInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutObjectTypeInput | EntryUpdateWithWhereUniqueWithoutObjectTypeInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutObjectTypeInput | EntryUpdateManyWithWhereWithoutObjectTypeInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type FieldDefinitionUncheckedUpdateManyWithoutObjectTypeNestedInput = {
    create?: XOR<FieldDefinitionCreateWithoutObjectTypeInput, FieldDefinitionUncheckedCreateWithoutObjectTypeInput> | FieldDefinitionCreateWithoutObjectTypeInput[] | FieldDefinitionUncheckedCreateWithoutObjectTypeInput[]
    connectOrCreate?: FieldDefinitionCreateOrConnectWithoutObjectTypeInput | FieldDefinitionCreateOrConnectWithoutObjectTypeInput[]
    upsert?: FieldDefinitionUpsertWithWhereUniqueWithoutObjectTypeInput | FieldDefinitionUpsertWithWhereUniqueWithoutObjectTypeInput[]
    createMany?: FieldDefinitionCreateManyObjectTypeInputEnvelope
    set?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    disconnect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    delete?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    connect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    update?: FieldDefinitionUpdateWithWhereUniqueWithoutObjectTypeInput | FieldDefinitionUpdateWithWhereUniqueWithoutObjectTypeInput[]
    updateMany?: FieldDefinitionUpdateManyWithWhereWithoutObjectTypeInput | FieldDefinitionUpdateManyWithWhereWithoutObjectTypeInput[]
    deleteMany?: FieldDefinitionScalarWhereInput | FieldDefinitionScalarWhereInput[]
  }

  export type FieldDefinitionUncheckedUpdateManyWithoutRelationToNestedInput = {
    create?: XOR<FieldDefinitionCreateWithoutRelationToInput, FieldDefinitionUncheckedCreateWithoutRelationToInput> | FieldDefinitionCreateWithoutRelationToInput[] | FieldDefinitionUncheckedCreateWithoutRelationToInput[]
    connectOrCreate?: FieldDefinitionCreateOrConnectWithoutRelationToInput | FieldDefinitionCreateOrConnectWithoutRelationToInput[]
    upsert?: FieldDefinitionUpsertWithWhereUniqueWithoutRelationToInput | FieldDefinitionUpsertWithWhereUniqueWithoutRelationToInput[]
    createMany?: FieldDefinitionCreateManyRelationToInputEnvelope
    set?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    disconnect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    delete?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    connect?: FieldDefinitionWhereUniqueInput | FieldDefinitionWhereUniqueInput[]
    update?: FieldDefinitionUpdateWithWhereUniqueWithoutRelationToInput | FieldDefinitionUpdateWithWhereUniqueWithoutRelationToInput[]
    updateMany?: FieldDefinitionUpdateManyWithWhereWithoutRelationToInput | FieldDefinitionUpdateManyWithWhereWithoutRelationToInput[]
    deleteMany?: FieldDefinitionScalarWhereInput | FieldDefinitionScalarWhereInput[]
  }

  export type ObjectTypeCreateNestedOneWithoutFieldsInput = {
    create?: XOR<ObjectTypeCreateWithoutFieldsInput, ObjectTypeUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: ObjectTypeCreateOrConnectWithoutFieldsInput
    connect?: ObjectTypeWhereUniqueInput
  }

  export type ObjectTypeCreateNestedOneWithoutFieldRelationsInput = {
    create?: XOR<ObjectTypeCreateWithoutFieldRelationsInput, ObjectTypeUncheckedCreateWithoutFieldRelationsInput>
    connectOrCreate?: ObjectTypeCreateOrConnectWithoutFieldRelationsInput
    connect?: ObjectTypeWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ObjectTypeUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<ObjectTypeCreateWithoutFieldsInput, ObjectTypeUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: ObjectTypeCreateOrConnectWithoutFieldsInput
    upsert?: ObjectTypeUpsertWithoutFieldsInput
    connect?: ObjectTypeWhereUniqueInput
    update?: XOR<XOR<ObjectTypeUpdateToOneWithWhereWithoutFieldsInput, ObjectTypeUpdateWithoutFieldsInput>, ObjectTypeUncheckedUpdateWithoutFieldsInput>
  }

  export type ObjectTypeUpdateOneWithoutFieldRelationsNestedInput = {
    create?: XOR<ObjectTypeCreateWithoutFieldRelationsInput, ObjectTypeUncheckedCreateWithoutFieldRelationsInput>
    connectOrCreate?: ObjectTypeCreateOrConnectWithoutFieldRelationsInput
    upsert?: ObjectTypeUpsertWithoutFieldRelationsInput
    disconnect?: ObjectTypeWhereInput | boolean
    delete?: ObjectTypeWhereInput | boolean
    connect?: ObjectTypeWhereUniqueInput
    update?: XOR<XOR<ObjectTypeUpdateToOneWithWhereWithoutFieldRelationsInput, ObjectTypeUpdateWithoutFieldRelationsInput>, ObjectTypeUncheckedUpdateWithoutFieldRelationsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ObjectTypeCreateNestedOneWithoutEntriesInput = {
    create?: XOR<ObjectTypeCreateWithoutEntriesInput, ObjectTypeUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ObjectTypeCreateOrConnectWithoutEntriesInput
    connect?: ObjectTypeWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ObjectTypeUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<ObjectTypeCreateWithoutEntriesInput, ObjectTypeUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ObjectTypeCreateOrConnectWithoutEntriesInput
    upsert?: ObjectTypeUpsertWithoutEntriesInput
    connect?: ObjectTypeWhereUniqueInput
    update?: XOR<XOR<ObjectTypeUpdateToOneWithWhereWithoutEntriesInput, ObjectTypeUpdateWithoutEntriesInput>, ObjectTypeUncheckedUpdateWithoutEntriesInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EntryCreateWithoutObjectTypeInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EntryUncheckedCreateWithoutObjectTypeInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EntryCreateOrConnectWithoutObjectTypeInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutObjectTypeInput, EntryUncheckedCreateWithoutObjectTypeInput>
  }

  export type EntryCreateManyObjectTypeInputEnvelope = {
    data: EntryCreateManyObjectTypeInput | EntryCreateManyObjectTypeInput[]
  }

  export type FieldDefinitionCreateWithoutObjectTypeInput = {
    id?: string
    name: string
    type?: string
    multiple?: boolean
    relationTo?: ObjectTypeCreateNestedOneWithoutFieldRelationsInput
  }

  export type FieldDefinitionUncheckedCreateWithoutObjectTypeInput = {
    id?: string
    name: string
    type?: string
    multiple?: boolean
    relationToId?: string | null
  }

  export type FieldDefinitionCreateOrConnectWithoutObjectTypeInput = {
    where: FieldDefinitionWhereUniqueInput
    create: XOR<FieldDefinitionCreateWithoutObjectTypeInput, FieldDefinitionUncheckedCreateWithoutObjectTypeInput>
  }

  export type FieldDefinitionCreateManyObjectTypeInputEnvelope = {
    data: FieldDefinitionCreateManyObjectTypeInput | FieldDefinitionCreateManyObjectTypeInput[]
  }

  export type FieldDefinitionCreateWithoutRelationToInput = {
    id?: string
    name: string
    type?: string
    multiple?: boolean
    objectType: ObjectTypeCreateNestedOneWithoutFieldsInput
  }

  export type FieldDefinitionUncheckedCreateWithoutRelationToInput = {
    id?: string
    name: string
    type?: string
    multiple?: boolean
    objectTypeId: string
  }

  export type FieldDefinitionCreateOrConnectWithoutRelationToInput = {
    where: FieldDefinitionWhereUniqueInput
    create: XOR<FieldDefinitionCreateWithoutRelationToInput, FieldDefinitionUncheckedCreateWithoutRelationToInput>
  }

  export type FieldDefinitionCreateManyRelationToInputEnvelope = {
    data: FieldDefinitionCreateManyRelationToInput | FieldDefinitionCreateManyRelationToInput[]
  }

  export type EntryUpsertWithWhereUniqueWithoutObjectTypeInput = {
    where: EntryWhereUniqueInput
    update: XOR<EntryUpdateWithoutObjectTypeInput, EntryUncheckedUpdateWithoutObjectTypeInput>
    create: XOR<EntryCreateWithoutObjectTypeInput, EntryUncheckedCreateWithoutObjectTypeInput>
  }

  export type EntryUpdateWithWhereUniqueWithoutObjectTypeInput = {
    where: EntryWhereUniqueInput
    data: XOR<EntryUpdateWithoutObjectTypeInput, EntryUncheckedUpdateWithoutObjectTypeInput>
  }

  export type EntryUpdateManyWithWhereWithoutObjectTypeInput = {
    where: EntryScalarWhereInput
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyWithoutObjectTypeInput>
  }

  export type EntryScalarWhereInput = {
    AND?: EntryScalarWhereInput | EntryScalarWhereInput[]
    OR?: EntryScalarWhereInput[]
    NOT?: EntryScalarWhereInput | EntryScalarWhereInput[]
    id?: StringFilter<"Entry"> | string
    objectTypeId?: StringFilter<"Entry"> | string
    data?: JsonFilter<"Entry">
    createdAt?: DateTimeFilter<"Entry"> | Date | string
  }

  export type FieldDefinitionUpsertWithWhereUniqueWithoutObjectTypeInput = {
    where: FieldDefinitionWhereUniqueInput
    update: XOR<FieldDefinitionUpdateWithoutObjectTypeInput, FieldDefinitionUncheckedUpdateWithoutObjectTypeInput>
    create: XOR<FieldDefinitionCreateWithoutObjectTypeInput, FieldDefinitionUncheckedCreateWithoutObjectTypeInput>
  }

  export type FieldDefinitionUpdateWithWhereUniqueWithoutObjectTypeInput = {
    where: FieldDefinitionWhereUniqueInput
    data: XOR<FieldDefinitionUpdateWithoutObjectTypeInput, FieldDefinitionUncheckedUpdateWithoutObjectTypeInput>
  }

  export type FieldDefinitionUpdateManyWithWhereWithoutObjectTypeInput = {
    where: FieldDefinitionScalarWhereInput
    data: XOR<FieldDefinitionUpdateManyMutationInput, FieldDefinitionUncheckedUpdateManyWithoutObjectTypeInput>
  }

  export type FieldDefinitionScalarWhereInput = {
    AND?: FieldDefinitionScalarWhereInput | FieldDefinitionScalarWhereInput[]
    OR?: FieldDefinitionScalarWhereInput[]
    NOT?: FieldDefinitionScalarWhereInput | FieldDefinitionScalarWhereInput[]
    id?: StringFilter<"FieldDefinition"> | string
    name?: StringFilter<"FieldDefinition"> | string
    type?: StringFilter<"FieldDefinition"> | string
    multiple?: BoolFilter<"FieldDefinition"> | boolean
    objectTypeId?: StringFilter<"FieldDefinition"> | string
    relationToId?: StringNullableFilter<"FieldDefinition"> | string | null
  }

  export type FieldDefinitionUpsertWithWhereUniqueWithoutRelationToInput = {
    where: FieldDefinitionWhereUniqueInput
    update: XOR<FieldDefinitionUpdateWithoutRelationToInput, FieldDefinitionUncheckedUpdateWithoutRelationToInput>
    create: XOR<FieldDefinitionCreateWithoutRelationToInput, FieldDefinitionUncheckedCreateWithoutRelationToInput>
  }

  export type FieldDefinitionUpdateWithWhereUniqueWithoutRelationToInput = {
    where: FieldDefinitionWhereUniqueInput
    data: XOR<FieldDefinitionUpdateWithoutRelationToInput, FieldDefinitionUncheckedUpdateWithoutRelationToInput>
  }

  export type FieldDefinitionUpdateManyWithWhereWithoutRelationToInput = {
    where: FieldDefinitionScalarWhereInput
    data: XOR<FieldDefinitionUpdateManyMutationInput, FieldDefinitionUncheckedUpdateManyWithoutRelationToInput>
  }

  export type ObjectTypeCreateWithoutFieldsInput = {
    id?: string
    name: string
    slug: string
    entries?: EntryCreateNestedManyWithoutObjectTypeInput
    fieldRelations?: FieldDefinitionCreateNestedManyWithoutRelationToInput
  }

  export type ObjectTypeUncheckedCreateWithoutFieldsInput = {
    id?: string
    name: string
    slug: string
    entries?: EntryUncheckedCreateNestedManyWithoutObjectTypeInput
    fieldRelations?: FieldDefinitionUncheckedCreateNestedManyWithoutRelationToInput
  }

  export type ObjectTypeCreateOrConnectWithoutFieldsInput = {
    where: ObjectTypeWhereUniqueInput
    create: XOR<ObjectTypeCreateWithoutFieldsInput, ObjectTypeUncheckedCreateWithoutFieldsInput>
  }

  export type ObjectTypeCreateWithoutFieldRelationsInput = {
    id?: string
    name: string
    slug: string
    entries?: EntryCreateNestedManyWithoutObjectTypeInput
    fields?: FieldDefinitionCreateNestedManyWithoutObjectTypeInput
  }

  export type ObjectTypeUncheckedCreateWithoutFieldRelationsInput = {
    id?: string
    name: string
    slug: string
    entries?: EntryUncheckedCreateNestedManyWithoutObjectTypeInput
    fields?: FieldDefinitionUncheckedCreateNestedManyWithoutObjectTypeInput
  }

  export type ObjectTypeCreateOrConnectWithoutFieldRelationsInput = {
    where: ObjectTypeWhereUniqueInput
    create: XOR<ObjectTypeCreateWithoutFieldRelationsInput, ObjectTypeUncheckedCreateWithoutFieldRelationsInput>
  }

  export type ObjectTypeUpsertWithoutFieldsInput = {
    update: XOR<ObjectTypeUpdateWithoutFieldsInput, ObjectTypeUncheckedUpdateWithoutFieldsInput>
    create: XOR<ObjectTypeCreateWithoutFieldsInput, ObjectTypeUncheckedCreateWithoutFieldsInput>
    where?: ObjectTypeWhereInput
  }

  export type ObjectTypeUpdateToOneWithWhereWithoutFieldsInput = {
    where?: ObjectTypeWhereInput
    data: XOR<ObjectTypeUpdateWithoutFieldsInput, ObjectTypeUncheckedUpdateWithoutFieldsInput>
  }

  export type ObjectTypeUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    entries?: EntryUpdateManyWithoutObjectTypeNestedInput
    fieldRelations?: FieldDefinitionUpdateManyWithoutRelationToNestedInput
  }

  export type ObjectTypeUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    entries?: EntryUncheckedUpdateManyWithoutObjectTypeNestedInput
    fieldRelations?: FieldDefinitionUncheckedUpdateManyWithoutRelationToNestedInput
  }

  export type ObjectTypeUpsertWithoutFieldRelationsInput = {
    update: XOR<ObjectTypeUpdateWithoutFieldRelationsInput, ObjectTypeUncheckedUpdateWithoutFieldRelationsInput>
    create: XOR<ObjectTypeCreateWithoutFieldRelationsInput, ObjectTypeUncheckedCreateWithoutFieldRelationsInput>
    where?: ObjectTypeWhereInput
  }

  export type ObjectTypeUpdateToOneWithWhereWithoutFieldRelationsInput = {
    where?: ObjectTypeWhereInput
    data: XOR<ObjectTypeUpdateWithoutFieldRelationsInput, ObjectTypeUncheckedUpdateWithoutFieldRelationsInput>
  }

  export type ObjectTypeUpdateWithoutFieldRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    entries?: EntryUpdateManyWithoutObjectTypeNestedInput
    fields?: FieldDefinitionUpdateManyWithoutObjectTypeNestedInput
  }

  export type ObjectTypeUncheckedUpdateWithoutFieldRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    entries?: EntryUncheckedUpdateManyWithoutObjectTypeNestedInput
    fields?: FieldDefinitionUncheckedUpdateManyWithoutObjectTypeNestedInput
  }

  export type ObjectTypeCreateWithoutEntriesInput = {
    id?: string
    name: string
    slug: string
    fields?: FieldDefinitionCreateNestedManyWithoutObjectTypeInput
    fieldRelations?: FieldDefinitionCreateNestedManyWithoutRelationToInput
  }

  export type ObjectTypeUncheckedCreateWithoutEntriesInput = {
    id?: string
    name: string
    slug: string
    fields?: FieldDefinitionUncheckedCreateNestedManyWithoutObjectTypeInput
    fieldRelations?: FieldDefinitionUncheckedCreateNestedManyWithoutRelationToInput
  }

  export type ObjectTypeCreateOrConnectWithoutEntriesInput = {
    where: ObjectTypeWhereUniqueInput
    create: XOR<ObjectTypeCreateWithoutEntriesInput, ObjectTypeUncheckedCreateWithoutEntriesInput>
  }

  export type ObjectTypeUpsertWithoutEntriesInput = {
    update: XOR<ObjectTypeUpdateWithoutEntriesInput, ObjectTypeUncheckedUpdateWithoutEntriesInput>
    create: XOR<ObjectTypeCreateWithoutEntriesInput, ObjectTypeUncheckedCreateWithoutEntriesInput>
    where?: ObjectTypeWhereInput
  }

  export type ObjectTypeUpdateToOneWithWhereWithoutEntriesInput = {
    where?: ObjectTypeWhereInput
    data: XOR<ObjectTypeUpdateWithoutEntriesInput, ObjectTypeUncheckedUpdateWithoutEntriesInput>
  }

  export type ObjectTypeUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fields?: FieldDefinitionUpdateManyWithoutObjectTypeNestedInput
    fieldRelations?: FieldDefinitionUpdateManyWithoutRelationToNestedInput
  }

  export type ObjectTypeUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fields?: FieldDefinitionUncheckedUpdateManyWithoutObjectTypeNestedInput
    fieldRelations?: FieldDefinitionUncheckedUpdateManyWithoutRelationToNestedInput
  }

  export type EntryCreateManyObjectTypeInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FieldDefinitionCreateManyObjectTypeInput = {
    id?: string
    name: string
    type?: string
    multiple?: boolean
    relationToId?: string | null
  }

  export type FieldDefinitionCreateManyRelationToInput = {
    id?: string
    name: string
    type?: string
    multiple?: boolean
    objectTypeId: string
  }

  export type EntryUpdateWithoutObjectTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateWithoutObjectTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateManyWithoutObjectTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldDefinitionUpdateWithoutObjectTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
    relationTo?: ObjectTypeUpdateOneWithoutFieldRelationsNestedInput
  }

  export type FieldDefinitionUncheckedUpdateWithoutObjectTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
    relationToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FieldDefinitionUncheckedUpdateManyWithoutObjectTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
    relationToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FieldDefinitionUpdateWithoutRelationToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
    objectType?: ObjectTypeUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type FieldDefinitionUncheckedUpdateWithoutRelationToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
    objectTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type FieldDefinitionUncheckedUpdateManyWithoutRelationToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    multiple?: BoolFieldUpdateOperationsInput | boolean
    objectTypeId?: StringFieldUpdateOperationsInput | string
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