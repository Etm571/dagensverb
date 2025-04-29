
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
 * Model verbslist
 * 
 */
export type verbslist = $Result.DefaultSelection<Prisma.$verbslistPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Verbslists
 * const verbslists = await prisma.verbslist.findMany()
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
   * // Fetch zero or more Verbslists
   * const verbslists = await prisma.verbslist.findMany()
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
   * `prisma.verbslist`: Exposes CRUD operations for the **verbslist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verbslists
    * const verbslists = await prisma.verbslist.findMany()
    * ```
    */
  get verbslist(): Prisma.verbslistDelegate<ExtArgs, ClientOptions>;
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
    verbslist: 'verbslist'
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
      modelProps: "verbslist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      verbslist: {
        payload: Prisma.$verbslistPayload<ExtArgs>
        fields: Prisma.verbslistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verbslistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verbslistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload>
          }
          findFirst: {
            args: Prisma.verbslistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verbslistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload>
          }
          findMany: {
            args: Prisma.verbslistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload>[]
          }
          create: {
            args: Prisma.verbslistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload>
          }
          createMany: {
            args: Prisma.verbslistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verbslistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload>[]
          }
          delete: {
            args: Prisma.verbslistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload>
          }
          update: {
            args: Prisma.verbslistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload>
          }
          deleteMany: {
            args: Prisma.verbslistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verbslistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verbslistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload>[]
          }
          upsert: {
            args: Prisma.verbslistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verbslistPayload>
          }
          aggregate: {
            args: Prisma.VerbslistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerbslist>
          }
          groupBy: {
            args: Prisma.verbslistGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerbslistGroupByOutputType>[]
          }
          count: {
            args: Prisma.verbslistCountArgs<ExtArgs>
            result: $Utils.Optional<VerbslistCountAggregateOutputType> | number
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
    verbslist?: verbslistOmit
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
   * Model verbslist
   */

  export type AggregateVerbslist = {
    _count: VerbslistCountAggregateOutputType | null
    _avg: VerbslistAvgAggregateOutputType | null
    _sum: VerbslistSumAggregateOutputType | null
    _min: VerbslistMinAggregateOutputType | null
    _max: VerbslistMaxAggregateOutputType | null
  }

  export type VerbslistAvgAggregateOutputType = {
    id: number | null
  }

  export type VerbslistSumAggregateOutputType = {
    id: number | null
  }

  export type VerbslistMinAggregateOutputType = {
    id: number | null
  }

  export type VerbslistMaxAggregateOutputType = {
    id: number | null
  }

  export type VerbslistCountAggregateOutputType = {
    id: number
    verbs: number
    oldverbs: number
    _all: number
  }


  export type VerbslistAvgAggregateInputType = {
    id?: true
  }

  export type VerbslistSumAggregateInputType = {
    id?: true
  }

  export type VerbslistMinAggregateInputType = {
    id?: true
  }

  export type VerbslistMaxAggregateInputType = {
    id?: true
  }

  export type VerbslistCountAggregateInputType = {
    id?: true
    verbs?: true
    oldverbs?: true
    _all?: true
  }

  export type VerbslistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verbslist to aggregate.
     */
    where?: verbslistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verbslists to fetch.
     */
    orderBy?: verbslistOrderByWithRelationInput | verbslistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verbslistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verbslists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verbslists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verbslists
    **/
    _count?: true | VerbslistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerbslistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerbslistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerbslistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerbslistMaxAggregateInputType
  }

  export type GetVerbslistAggregateType<T extends VerbslistAggregateArgs> = {
        [P in keyof T & keyof AggregateVerbslist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerbslist[P]>
      : GetScalarType<T[P], AggregateVerbslist[P]>
  }




  export type verbslistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verbslistWhereInput
    orderBy?: verbslistOrderByWithAggregationInput | verbslistOrderByWithAggregationInput[]
    by: VerbslistScalarFieldEnum[] | VerbslistScalarFieldEnum
    having?: verbslistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerbslistCountAggregateInputType | true
    _avg?: VerbslistAvgAggregateInputType
    _sum?: VerbslistSumAggregateInputType
    _min?: VerbslistMinAggregateInputType
    _max?: VerbslistMaxAggregateInputType
  }

  export type VerbslistGroupByOutputType = {
    id: number
    verbs: JsonValue
    oldverbs: JsonValue
    _count: VerbslistCountAggregateOutputType | null
    _avg: VerbslistAvgAggregateOutputType | null
    _sum: VerbslistSumAggregateOutputType | null
    _min: VerbslistMinAggregateOutputType | null
    _max: VerbslistMaxAggregateOutputType | null
  }

  type GetVerbslistGroupByPayload<T extends verbslistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerbslistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerbslistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerbslistGroupByOutputType[P]>
            : GetScalarType<T[P], VerbslistGroupByOutputType[P]>
        }
      >
    >


  export type verbslistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbs?: boolean
    oldverbs?: boolean
  }, ExtArgs["result"]["verbslist"]>

  export type verbslistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbs?: boolean
    oldverbs?: boolean
  }, ExtArgs["result"]["verbslist"]>

  export type verbslistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbs?: boolean
    oldverbs?: boolean
  }, ExtArgs["result"]["verbslist"]>

  export type verbslistSelectScalar = {
    id?: boolean
    verbs?: boolean
    oldverbs?: boolean
  }

  export type verbslistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verbs" | "oldverbs", ExtArgs["result"]["verbslist"]>

  export type $verbslistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verbslist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      verbs: Prisma.JsonValue
      oldverbs: Prisma.JsonValue
    }, ExtArgs["result"]["verbslist"]>
    composites: {}
  }

  type verbslistGetPayload<S extends boolean | null | undefined | verbslistDefaultArgs> = $Result.GetResult<Prisma.$verbslistPayload, S>

  type verbslistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verbslistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerbslistCountAggregateInputType | true
    }

  export interface verbslistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verbslist'], meta: { name: 'verbslist' } }
    /**
     * Find zero or one Verbslist that matches the filter.
     * @param {verbslistFindUniqueArgs} args - Arguments to find a Verbslist
     * @example
     * // Get one Verbslist
     * const verbslist = await prisma.verbslist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verbslistFindUniqueArgs>(args: SelectSubset<T, verbslistFindUniqueArgs<ExtArgs>>): Prisma__verbslistClient<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verbslist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verbslistFindUniqueOrThrowArgs} args - Arguments to find a Verbslist
     * @example
     * // Get one Verbslist
     * const verbslist = await prisma.verbslist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verbslistFindUniqueOrThrowArgs>(args: SelectSubset<T, verbslistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verbslistClient<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verbslist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verbslistFindFirstArgs} args - Arguments to find a Verbslist
     * @example
     * // Get one Verbslist
     * const verbslist = await prisma.verbslist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verbslistFindFirstArgs>(args?: SelectSubset<T, verbslistFindFirstArgs<ExtArgs>>): Prisma__verbslistClient<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verbslist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verbslistFindFirstOrThrowArgs} args - Arguments to find a Verbslist
     * @example
     * // Get one Verbslist
     * const verbslist = await prisma.verbslist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verbslistFindFirstOrThrowArgs>(args?: SelectSubset<T, verbslistFindFirstOrThrowArgs<ExtArgs>>): Prisma__verbslistClient<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verbslists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verbslistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verbslists
     * const verbslists = await prisma.verbslist.findMany()
     * 
     * // Get first 10 Verbslists
     * const verbslists = await prisma.verbslist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verbslistWithIdOnly = await prisma.verbslist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends verbslistFindManyArgs>(args?: SelectSubset<T, verbslistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verbslist.
     * @param {verbslistCreateArgs} args - Arguments to create a Verbslist.
     * @example
     * // Create one Verbslist
     * const Verbslist = await prisma.verbslist.create({
     *   data: {
     *     // ... data to create a Verbslist
     *   }
     * })
     * 
     */
    create<T extends verbslistCreateArgs>(args: SelectSubset<T, verbslistCreateArgs<ExtArgs>>): Prisma__verbslistClient<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verbslists.
     * @param {verbslistCreateManyArgs} args - Arguments to create many Verbslists.
     * @example
     * // Create many Verbslists
     * const verbslist = await prisma.verbslist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verbslistCreateManyArgs>(args?: SelectSubset<T, verbslistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verbslists and returns the data saved in the database.
     * @param {verbslistCreateManyAndReturnArgs} args - Arguments to create many Verbslists.
     * @example
     * // Create many Verbslists
     * const verbslist = await prisma.verbslist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verbslists and only return the `id`
     * const verbslistWithIdOnly = await prisma.verbslist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verbslistCreateManyAndReturnArgs>(args?: SelectSubset<T, verbslistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verbslist.
     * @param {verbslistDeleteArgs} args - Arguments to delete one Verbslist.
     * @example
     * // Delete one Verbslist
     * const Verbslist = await prisma.verbslist.delete({
     *   where: {
     *     // ... filter to delete one Verbslist
     *   }
     * })
     * 
     */
    delete<T extends verbslistDeleteArgs>(args: SelectSubset<T, verbslistDeleteArgs<ExtArgs>>): Prisma__verbslistClient<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verbslist.
     * @param {verbslistUpdateArgs} args - Arguments to update one Verbslist.
     * @example
     * // Update one Verbslist
     * const verbslist = await prisma.verbslist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verbslistUpdateArgs>(args: SelectSubset<T, verbslistUpdateArgs<ExtArgs>>): Prisma__verbslistClient<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verbslists.
     * @param {verbslistDeleteManyArgs} args - Arguments to filter Verbslists to delete.
     * @example
     * // Delete a few Verbslists
     * const { count } = await prisma.verbslist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verbslistDeleteManyArgs>(args?: SelectSubset<T, verbslistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verbslists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verbslistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verbslists
     * const verbslist = await prisma.verbslist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verbslistUpdateManyArgs>(args: SelectSubset<T, verbslistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verbslists and returns the data updated in the database.
     * @param {verbslistUpdateManyAndReturnArgs} args - Arguments to update many Verbslists.
     * @example
     * // Update many Verbslists
     * const verbslist = await prisma.verbslist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verbslists and only return the `id`
     * const verbslistWithIdOnly = await prisma.verbslist.updateManyAndReturn({
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
    updateManyAndReturn<T extends verbslistUpdateManyAndReturnArgs>(args: SelectSubset<T, verbslistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verbslist.
     * @param {verbslistUpsertArgs} args - Arguments to update or create a Verbslist.
     * @example
     * // Update or create a Verbslist
     * const verbslist = await prisma.verbslist.upsert({
     *   create: {
     *     // ... data to create a Verbslist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verbslist we want to update
     *   }
     * })
     */
    upsert<T extends verbslistUpsertArgs>(args: SelectSubset<T, verbslistUpsertArgs<ExtArgs>>): Prisma__verbslistClient<$Result.GetResult<Prisma.$verbslistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verbslists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verbslistCountArgs} args - Arguments to filter Verbslists to count.
     * @example
     * // Count the number of Verbslists
     * const count = await prisma.verbslist.count({
     *   where: {
     *     // ... the filter for the Verbslists we want to count
     *   }
     * })
    **/
    count<T extends verbslistCountArgs>(
      args?: Subset<T, verbslistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerbslistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verbslist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbslistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerbslistAggregateArgs>(args: Subset<T, VerbslistAggregateArgs>): Prisma.PrismaPromise<GetVerbslistAggregateType<T>>

    /**
     * Group by Verbslist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verbslistGroupByArgs} args - Group by arguments.
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
      T extends verbslistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verbslistGroupByArgs['orderBy'] }
        : { orderBy?: verbslistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, verbslistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerbslistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verbslist model
   */
  readonly fields: verbslistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verbslist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verbslistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the verbslist model
   */
  interface verbslistFieldRefs {
    readonly id: FieldRef<"verbslist", 'Int'>
    readonly verbs: FieldRef<"verbslist", 'Json'>
    readonly oldverbs: FieldRef<"verbslist", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * verbslist findUnique
   */
  export type verbslistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * Filter, which verbslist to fetch.
     */
    where: verbslistWhereUniqueInput
  }

  /**
   * verbslist findUniqueOrThrow
   */
  export type verbslistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * Filter, which verbslist to fetch.
     */
    where: verbslistWhereUniqueInput
  }

  /**
   * verbslist findFirst
   */
  export type verbslistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * Filter, which verbslist to fetch.
     */
    where?: verbslistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verbslists to fetch.
     */
    orderBy?: verbslistOrderByWithRelationInput | verbslistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verbslists.
     */
    cursor?: verbslistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verbslists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verbslists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verbslists.
     */
    distinct?: VerbslistScalarFieldEnum | VerbslistScalarFieldEnum[]
  }

  /**
   * verbslist findFirstOrThrow
   */
  export type verbslistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * Filter, which verbslist to fetch.
     */
    where?: verbslistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verbslists to fetch.
     */
    orderBy?: verbslistOrderByWithRelationInput | verbslistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verbslists.
     */
    cursor?: verbslistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verbslists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verbslists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verbslists.
     */
    distinct?: VerbslistScalarFieldEnum | VerbslistScalarFieldEnum[]
  }

  /**
   * verbslist findMany
   */
  export type verbslistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * Filter, which verbslists to fetch.
     */
    where?: verbslistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verbslists to fetch.
     */
    orderBy?: verbslistOrderByWithRelationInput | verbslistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verbslists.
     */
    cursor?: verbslistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verbslists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verbslists.
     */
    skip?: number
    distinct?: VerbslistScalarFieldEnum | VerbslistScalarFieldEnum[]
  }

  /**
   * verbslist create
   */
  export type verbslistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * The data needed to create a verbslist.
     */
    data?: XOR<verbslistCreateInput, verbslistUncheckedCreateInput>
  }

  /**
   * verbslist createMany
   */
  export type verbslistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verbslists.
     */
    data: verbslistCreateManyInput | verbslistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verbslist createManyAndReturn
   */
  export type verbslistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * The data used to create many verbslists.
     */
    data: verbslistCreateManyInput | verbslistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verbslist update
   */
  export type verbslistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * The data needed to update a verbslist.
     */
    data: XOR<verbslistUpdateInput, verbslistUncheckedUpdateInput>
    /**
     * Choose, which verbslist to update.
     */
    where: verbslistWhereUniqueInput
  }

  /**
   * verbslist updateMany
   */
  export type verbslistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verbslists.
     */
    data: XOR<verbslistUpdateManyMutationInput, verbslistUncheckedUpdateManyInput>
    /**
     * Filter which verbslists to update
     */
    where?: verbslistWhereInput
    /**
     * Limit how many verbslists to update.
     */
    limit?: number
  }

  /**
   * verbslist updateManyAndReturn
   */
  export type verbslistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * The data used to update verbslists.
     */
    data: XOR<verbslistUpdateManyMutationInput, verbslistUncheckedUpdateManyInput>
    /**
     * Filter which verbslists to update
     */
    where?: verbslistWhereInput
    /**
     * Limit how many verbslists to update.
     */
    limit?: number
  }

  /**
   * verbslist upsert
   */
  export type verbslistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * The filter to search for the verbslist to update in case it exists.
     */
    where: verbslistWhereUniqueInput
    /**
     * In case the verbslist found by the `where` argument doesn't exist, create a new verbslist with this data.
     */
    create: XOR<verbslistCreateInput, verbslistUncheckedCreateInput>
    /**
     * In case the verbslist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verbslistUpdateInput, verbslistUncheckedUpdateInput>
  }

  /**
   * verbslist delete
   */
  export type verbslistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
    /**
     * Filter which verbslist to delete.
     */
    where: verbslistWhereUniqueInput
  }

  /**
   * verbslist deleteMany
   */
  export type verbslistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verbslists to delete
     */
    where?: verbslistWhereInput
    /**
     * Limit how many verbslists to delete.
     */
    limit?: number
  }

  /**
   * verbslist without action
   */
  export type verbslistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verbslist
     */
    select?: verbslistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verbslist
     */
    omit?: verbslistOmit<ExtArgs> | null
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


  export const VerbslistScalarFieldEnum: {
    id: 'id',
    verbs: 'verbs',
    oldverbs: 'oldverbs'
  };

  export type VerbslistScalarFieldEnum = (typeof VerbslistScalarFieldEnum)[keyof typeof VerbslistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type verbslistWhereInput = {
    AND?: verbslistWhereInput | verbslistWhereInput[]
    OR?: verbslistWhereInput[]
    NOT?: verbslistWhereInput | verbslistWhereInput[]
    id?: IntFilter<"verbslist"> | number
    verbs?: JsonFilter<"verbslist">
    oldverbs?: JsonFilter<"verbslist">
  }

  export type verbslistOrderByWithRelationInput = {
    id?: SortOrder
    verbs?: SortOrder
    oldverbs?: SortOrder
  }

  export type verbslistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: verbslistWhereInput | verbslistWhereInput[]
    OR?: verbslistWhereInput[]
    NOT?: verbslistWhereInput | verbslistWhereInput[]
    verbs?: JsonFilter<"verbslist">
    oldverbs?: JsonFilter<"verbslist">
  }, "id">

  export type verbslistOrderByWithAggregationInput = {
    id?: SortOrder
    verbs?: SortOrder
    oldverbs?: SortOrder
    _count?: verbslistCountOrderByAggregateInput
    _avg?: verbslistAvgOrderByAggregateInput
    _max?: verbslistMaxOrderByAggregateInput
    _min?: verbslistMinOrderByAggregateInput
    _sum?: verbslistSumOrderByAggregateInput
  }

  export type verbslistScalarWhereWithAggregatesInput = {
    AND?: verbslistScalarWhereWithAggregatesInput | verbslistScalarWhereWithAggregatesInput[]
    OR?: verbslistScalarWhereWithAggregatesInput[]
    NOT?: verbslistScalarWhereWithAggregatesInput | verbslistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"verbslist"> | number
    verbs?: JsonWithAggregatesFilter<"verbslist">
    oldverbs?: JsonWithAggregatesFilter<"verbslist">
  }

  export type verbslistCreateInput = {
    verbs?: JsonNullValueInput | InputJsonValue
    oldverbs?: JsonNullValueInput | InputJsonValue
  }

  export type verbslistUncheckedCreateInput = {
    id?: number
    verbs?: JsonNullValueInput | InputJsonValue
    oldverbs?: JsonNullValueInput | InputJsonValue
  }

  export type verbslistUpdateInput = {
    verbs?: JsonNullValueInput | InputJsonValue
    oldverbs?: JsonNullValueInput | InputJsonValue
  }

  export type verbslistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbs?: JsonNullValueInput | InputJsonValue
    oldverbs?: JsonNullValueInput | InputJsonValue
  }

  export type verbslistCreateManyInput = {
    id?: number
    verbs?: JsonNullValueInput | InputJsonValue
    oldverbs?: JsonNullValueInput | InputJsonValue
  }

  export type verbslistUpdateManyMutationInput = {
    verbs?: JsonNullValueInput | InputJsonValue
    oldverbs?: JsonNullValueInput | InputJsonValue
  }

  export type verbslistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbs?: JsonNullValueInput | InputJsonValue
    oldverbs?: JsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type verbslistCountOrderByAggregateInput = {
    id?: SortOrder
    verbs?: SortOrder
    oldverbs?: SortOrder
  }

  export type verbslistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type verbslistMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type verbslistMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type verbslistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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