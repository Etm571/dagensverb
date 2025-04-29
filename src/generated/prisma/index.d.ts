
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
 * Model Verb
 * 
 */
export type Verb = $Result.DefaultSelection<Prisma.$VerbPayload>
/**
 * Model OldVerb
 * 
 */
export type OldVerb = $Result.DefaultSelection<Prisma.$OldVerbPayload>
/**
 * Model VerbToday
 * 
 */
export type VerbToday = $Result.DefaultSelection<Prisma.$VerbTodayPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Verbs
 * const verbs = await prisma.verb.findMany()
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
   * // Fetch zero or more Verbs
   * const verbs = await prisma.verb.findMany()
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
   * `prisma.verb`: Exposes CRUD operations for the **Verb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verbs
    * const verbs = await prisma.verb.findMany()
    * ```
    */
  get verb(): Prisma.VerbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oldVerb`: Exposes CRUD operations for the **OldVerb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OldVerbs
    * const oldVerbs = await prisma.oldVerb.findMany()
    * ```
    */
  get oldVerb(): Prisma.OldVerbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verbToday`: Exposes CRUD operations for the **VerbToday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerbTodays
    * const verbTodays = await prisma.verbToday.findMany()
    * ```
    */
  get verbToday(): Prisma.VerbTodayDelegate<ExtArgs, ClientOptions>;
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
    Verb: 'Verb',
    OldVerb: 'OldVerb',
    VerbToday: 'VerbToday'
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
      modelProps: "verb" | "oldVerb" | "verbToday"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Verb: {
        payload: Prisma.$VerbPayload<ExtArgs>
        fields: Prisma.VerbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          findFirst: {
            args: Prisma.VerbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          findMany: {
            args: Prisma.VerbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>[]
          }
          create: {
            args: Prisma.VerbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          createMany: {
            args: Prisma.VerbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>[]
          }
          delete: {
            args: Prisma.VerbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          update: {
            args: Prisma.VerbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          deleteMany: {
            args: Prisma.VerbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>[]
          }
          upsert: {
            args: Prisma.VerbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          aggregate: {
            args: Prisma.VerbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerb>
          }
          groupBy: {
            args: Prisma.VerbGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerbGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerbCountArgs<ExtArgs>
            result: $Utils.Optional<VerbCountAggregateOutputType> | number
          }
        }
      }
      OldVerb: {
        payload: Prisma.$OldVerbPayload<ExtArgs>
        fields: Prisma.OldVerbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OldVerbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OldVerbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload>
          }
          findFirst: {
            args: Prisma.OldVerbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OldVerbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload>
          }
          findMany: {
            args: Prisma.OldVerbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload>[]
          }
          create: {
            args: Prisma.OldVerbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload>
          }
          createMany: {
            args: Prisma.OldVerbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OldVerbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload>[]
          }
          delete: {
            args: Prisma.OldVerbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload>
          }
          update: {
            args: Prisma.OldVerbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload>
          }
          deleteMany: {
            args: Prisma.OldVerbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OldVerbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OldVerbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload>[]
          }
          upsert: {
            args: Prisma.OldVerbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OldVerbPayload>
          }
          aggregate: {
            args: Prisma.OldVerbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOldVerb>
          }
          groupBy: {
            args: Prisma.OldVerbGroupByArgs<ExtArgs>
            result: $Utils.Optional<OldVerbGroupByOutputType>[]
          }
          count: {
            args: Prisma.OldVerbCountArgs<ExtArgs>
            result: $Utils.Optional<OldVerbCountAggregateOutputType> | number
          }
        }
      }
      VerbToday: {
        payload: Prisma.$VerbTodayPayload<ExtArgs>
        fields: Prisma.VerbTodayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerbTodayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerbTodayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload>
          }
          findFirst: {
            args: Prisma.VerbTodayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerbTodayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload>
          }
          findMany: {
            args: Prisma.VerbTodayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload>[]
          }
          create: {
            args: Prisma.VerbTodayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload>
          }
          createMany: {
            args: Prisma.VerbTodayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerbTodayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload>[]
          }
          delete: {
            args: Prisma.VerbTodayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload>
          }
          update: {
            args: Prisma.VerbTodayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload>
          }
          deleteMany: {
            args: Prisma.VerbTodayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerbTodayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerbTodayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload>[]
          }
          upsert: {
            args: Prisma.VerbTodayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbTodayPayload>
          }
          aggregate: {
            args: Prisma.VerbTodayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerbToday>
          }
          groupBy: {
            args: Prisma.VerbTodayGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerbTodayGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerbTodayCountArgs<ExtArgs>
            result: $Utils.Optional<VerbTodayCountAggregateOutputType> | number
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
    verb?: VerbOmit
    oldVerb?: OldVerbOmit
    verbToday?: VerbTodayOmit
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
   * Model Verb
   */

  export type AggregateVerb = {
    _count: VerbCountAggregateOutputType | null
    _avg: VerbAvgAggregateOutputType | null
    _sum: VerbSumAggregateOutputType | null
    _min: VerbMinAggregateOutputType | null
    _max: VerbMaxAggregateOutputType | null
  }

  export type VerbAvgAggregateOutputType = {
    id: number | null
  }

  export type VerbSumAggregateOutputType = {
    id: number | null
  }

  export type VerbMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type VerbMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type VerbCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type VerbAvgAggregateInputType = {
    id?: true
  }

  export type VerbSumAggregateInputType = {
    id?: true
  }

  export type VerbMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type VerbMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type VerbCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type VerbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verb to aggregate.
     */
    where?: VerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verbs to fetch.
     */
    orderBy?: VerbOrderByWithRelationInput | VerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verbs
    **/
    _count?: true | VerbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerbMaxAggregateInputType
  }

  export type GetVerbAggregateType<T extends VerbAggregateArgs> = {
        [P in keyof T & keyof AggregateVerb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerb[P]>
      : GetScalarType<T[P], AggregateVerb[P]>
  }




  export type VerbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerbWhereInput
    orderBy?: VerbOrderByWithAggregationInput | VerbOrderByWithAggregationInput[]
    by: VerbScalarFieldEnum[] | VerbScalarFieldEnum
    having?: VerbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerbCountAggregateInputType | true
    _avg?: VerbAvgAggregateInputType
    _sum?: VerbSumAggregateInputType
    _min?: VerbMinAggregateInputType
    _max?: VerbMaxAggregateInputType
  }

  export type VerbGroupByOutputType = {
    id: number
    name: string
    _count: VerbCountAggregateOutputType | null
    _avg: VerbAvgAggregateOutputType | null
    _sum: VerbSumAggregateOutputType | null
    _min: VerbMinAggregateOutputType | null
    _max: VerbMaxAggregateOutputType | null
  }

  type GetVerbGroupByPayload<T extends VerbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerbGroupByOutputType[P]>
            : GetScalarType<T[P], VerbGroupByOutputType[P]>
        }
      >
    >


  export type VerbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["verb"]>

  export type VerbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["verb"]>

  export type VerbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["verb"]>

  export type VerbSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type VerbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["verb"]>

  export type $VerbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["verb"]>
    composites: {}
  }

  type VerbGetPayload<S extends boolean | null | undefined | VerbDefaultArgs> = $Result.GetResult<Prisma.$VerbPayload, S>

  type VerbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerbCountAggregateInputType | true
    }

  export interface VerbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verb'], meta: { name: 'Verb' } }
    /**
     * Find zero or one Verb that matches the filter.
     * @param {VerbFindUniqueArgs} args - Arguments to find a Verb
     * @example
     * // Get one Verb
     * const verb = await prisma.verb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerbFindUniqueArgs>(args: SelectSubset<T, VerbFindUniqueArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerbFindUniqueOrThrowArgs} args - Arguments to find a Verb
     * @example
     * // Get one Verb
     * const verb = await prisma.verb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerbFindUniqueOrThrowArgs>(args: SelectSubset<T, VerbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbFindFirstArgs} args - Arguments to find a Verb
     * @example
     * // Get one Verb
     * const verb = await prisma.verb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerbFindFirstArgs>(args?: SelectSubset<T, VerbFindFirstArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbFindFirstOrThrowArgs} args - Arguments to find a Verb
     * @example
     * // Get one Verb
     * const verb = await prisma.verb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerbFindFirstOrThrowArgs>(args?: SelectSubset<T, VerbFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verbs
     * const verbs = await prisma.verb.findMany()
     * 
     * // Get first 10 Verbs
     * const verbs = await prisma.verb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verbWithIdOnly = await prisma.verb.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerbFindManyArgs>(args?: SelectSubset<T, VerbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verb.
     * @param {VerbCreateArgs} args - Arguments to create a Verb.
     * @example
     * // Create one Verb
     * const Verb = await prisma.verb.create({
     *   data: {
     *     // ... data to create a Verb
     *   }
     * })
     * 
     */
    create<T extends VerbCreateArgs>(args: SelectSubset<T, VerbCreateArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verbs.
     * @param {VerbCreateManyArgs} args - Arguments to create many Verbs.
     * @example
     * // Create many Verbs
     * const verb = await prisma.verb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerbCreateManyArgs>(args?: SelectSubset<T, VerbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verbs and returns the data saved in the database.
     * @param {VerbCreateManyAndReturnArgs} args - Arguments to create many Verbs.
     * @example
     * // Create many Verbs
     * const verb = await prisma.verb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verbs and only return the `id`
     * const verbWithIdOnly = await prisma.verb.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerbCreateManyAndReturnArgs>(args?: SelectSubset<T, VerbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verb.
     * @param {VerbDeleteArgs} args - Arguments to delete one Verb.
     * @example
     * // Delete one Verb
     * const Verb = await prisma.verb.delete({
     *   where: {
     *     // ... filter to delete one Verb
     *   }
     * })
     * 
     */
    delete<T extends VerbDeleteArgs>(args: SelectSubset<T, VerbDeleteArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verb.
     * @param {VerbUpdateArgs} args - Arguments to update one Verb.
     * @example
     * // Update one Verb
     * const verb = await prisma.verb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerbUpdateArgs>(args: SelectSubset<T, VerbUpdateArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verbs.
     * @param {VerbDeleteManyArgs} args - Arguments to filter Verbs to delete.
     * @example
     * // Delete a few Verbs
     * const { count } = await prisma.verb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerbDeleteManyArgs>(args?: SelectSubset<T, VerbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verbs
     * const verb = await prisma.verb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerbUpdateManyArgs>(args: SelectSubset<T, VerbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verbs and returns the data updated in the database.
     * @param {VerbUpdateManyAndReturnArgs} args - Arguments to update many Verbs.
     * @example
     * // Update many Verbs
     * const verb = await prisma.verb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verbs and only return the `id`
     * const verbWithIdOnly = await prisma.verb.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerbUpdateManyAndReturnArgs>(args: SelectSubset<T, VerbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verb.
     * @param {VerbUpsertArgs} args - Arguments to update or create a Verb.
     * @example
     * // Update or create a Verb
     * const verb = await prisma.verb.upsert({
     *   create: {
     *     // ... data to create a Verb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verb we want to update
     *   }
     * })
     */
    upsert<T extends VerbUpsertArgs>(args: SelectSubset<T, VerbUpsertArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbCountArgs} args - Arguments to filter Verbs to count.
     * @example
     * // Count the number of Verbs
     * const count = await prisma.verb.count({
     *   where: {
     *     // ... the filter for the Verbs we want to count
     *   }
     * })
    **/
    count<T extends VerbCountArgs>(
      args?: Subset<T, VerbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerbAggregateArgs>(args: Subset<T, VerbAggregateArgs>): Prisma.PrismaPromise<GetVerbAggregateType<T>>

    /**
     * Group by Verb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbGroupByArgs} args - Group by arguments.
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
      T extends VerbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerbGroupByArgs['orderBy'] }
        : { orderBy?: VerbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verb model
   */
  readonly fields: VerbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verb model
   */
  interface VerbFieldRefs {
    readonly id: FieldRef<"Verb", 'Int'>
    readonly name: FieldRef<"Verb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Verb findUnique
   */
  export type VerbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Filter, which Verb to fetch.
     */
    where: VerbWhereUniqueInput
  }

  /**
   * Verb findUniqueOrThrow
   */
  export type VerbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Filter, which Verb to fetch.
     */
    where: VerbWhereUniqueInput
  }

  /**
   * Verb findFirst
   */
  export type VerbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Filter, which Verb to fetch.
     */
    where?: VerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verbs to fetch.
     */
    orderBy?: VerbOrderByWithRelationInput | VerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verbs.
     */
    cursor?: VerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verbs.
     */
    distinct?: VerbScalarFieldEnum | VerbScalarFieldEnum[]
  }

  /**
   * Verb findFirstOrThrow
   */
  export type VerbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Filter, which Verb to fetch.
     */
    where?: VerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verbs to fetch.
     */
    orderBy?: VerbOrderByWithRelationInput | VerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verbs.
     */
    cursor?: VerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verbs.
     */
    distinct?: VerbScalarFieldEnum | VerbScalarFieldEnum[]
  }

  /**
   * Verb findMany
   */
  export type VerbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Filter, which Verbs to fetch.
     */
    where?: VerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verbs to fetch.
     */
    orderBy?: VerbOrderByWithRelationInput | VerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verbs.
     */
    cursor?: VerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verbs.
     */
    skip?: number
    distinct?: VerbScalarFieldEnum | VerbScalarFieldEnum[]
  }

  /**
   * Verb create
   */
  export type VerbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * The data needed to create a Verb.
     */
    data: XOR<VerbCreateInput, VerbUncheckedCreateInput>
  }

  /**
   * Verb createMany
   */
  export type VerbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verbs.
     */
    data: VerbCreateManyInput | VerbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verb createManyAndReturn
   */
  export type VerbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * The data used to create many Verbs.
     */
    data: VerbCreateManyInput | VerbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verb update
   */
  export type VerbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * The data needed to update a Verb.
     */
    data: XOR<VerbUpdateInput, VerbUncheckedUpdateInput>
    /**
     * Choose, which Verb to update.
     */
    where: VerbWhereUniqueInput
  }

  /**
   * Verb updateMany
   */
  export type VerbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verbs.
     */
    data: XOR<VerbUpdateManyMutationInput, VerbUncheckedUpdateManyInput>
    /**
     * Filter which Verbs to update
     */
    where?: VerbWhereInput
    /**
     * Limit how many Verbs to update.
     */
    limit?: number
  }

  /**
   * Verb updateManyAndReturn
   */
  export type VerbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * The data used to update Verbs.
     */
    data: XOR<VerbUpdateManyMutationInput, VerbUncheckedUpdateManyInput>
    /**
     * Filter which Verbs to update
     */
    where?: VerbWhereInput
    /**
     * Limit how many Verbs to update.
     */
    limit?: number
  }

  /**
   * Verb upsert
   */
  export type VerbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * The filter to search for the Verb to update in case it exists.
     */
    where: VerbWhereUniqueInput
    /**
     * In case the Verb found by the `where` argument doesn't exist, create a new Verb with this data.
     */
    create: XOR<VerbCreateInput, VerbUncheckedCreateInput>
    /**
     * In case the Verb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerbUpdateInput, VerbUncheckedUpdateInput>
  }

  /**
   * Verb delete
   */
  export type VerbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Filter which Verb to delete.
     */
    where: VerbWhereUniqueInput
  }

  /**
   * Verb deleteMany
   */
  export type VerbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verbs to delete
     */
    where?: VerbWhereInput
    /**
     * Limit how many Verbs to delete.
     */
    limit?: number
  }

  /**
   * Verb without action
   */
  export type VerbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
  }


  /**
   * Model OldVerb
   */

  export type AggregateOldVerb = {
    _count: OldVerbCountAggregateOutputType | null
    _avg: OldVerbAvgAggregateOutputType | null
    _sum: OldVerbSumAggregateOutputType | null
    _min: OldVerbMinAggregateOutputType | null
    _max: OldVerbMaxAggregateOutputType | null
  }

  export type OldVerbAvgAggregateOutputType = {
    id: number | null
  }

  export type OldVerbSumAggregateOutputType = {
    id: number | null
  }

  export type OldVerbMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OldVerbMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OldVerbCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OldVerbAvgAggregateInputType = {
    id?: true
  }

  export type OldVerbSumAggregateInputType = {
    id?: true
  }

  export type OldVerbMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OldVerbMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OldVerbCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OldVerbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OldVerb to aggregate.
     */
    where?: OldVerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OldVerbs to fetch.
     */
    orderBy?: OldVerbOrderByWithRelationInput | OldVerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OldVerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OldVerbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OldVerbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OldVerbs
    **/
    _count?: true | OldVerbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OldVerbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OldVerbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OldVerbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OldVerbMaxAggregateInputType
  }

  export type GetOldVerbAggregateType<T extends OldVerbAggregateArgs> = {
        [P in keyof T & keyof AggregateOldVerb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOldVerb[P]>
      : GetScalarType<T[P], AggregateOldVerb[P]>
  }




  export type OldVerbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OldVerbWhereInput
    orderBy?: OldVerbOrderByWithAggregationInput | OldVerbOrderByWithAggregationInput[]
    by: OldVerbScalarFieldEnum[] | OldVerbScalarFieldEnum
    having?: OldVerbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OldVerbCountAggregateInputType | true
    _avg?: OldVerbAvgAggregateInputType
    _sum?: OldVerbSumAggregateInputType
    _min?: OldVerbMinAggregateInputType
    _max?: OldVerbMaxAggregateInputType
  }

  export type OldVerbGroupByOutputType = {
    id: number
    name: string
    _count: OldVerbCountAggregateOutputType | null
    _avg: OldVerbAvgAggregateOutputType | null
    _sum: OldVerbSumAggregateOutputType | null
    _min: OldVerbMinAggregateOutputType | null
    _max: OldVerbMaxAggregateOutputType | null
  }

  type GetOldVerbGroupByPayload<T extends OldVerbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OldVerbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OldVerbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OldVerbGroupByOutputType[P]>
            : GetScalarType<T[P], OldVerbGroupByOutputType[P]>
        }
      >
    >


  export type OldVerbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["oldVerb"]>

  export type OldVerbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["oldVerb"]>

  export type OldVerbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["oldVerb"]>

  export type OldVerbSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OldVerbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["oldVerb"]>

  export type $OldVerbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OldVerb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["oldVerb"]>
    composites: {}
  }

  type OldVerbGetPayload<S extends boolean | null | undefined | OldVerbDefaultArgs> = $Result.GetResult<Prisma.$OldVerbPayload, S>

  type OldVerbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OldVerbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OldVerbCountAggregateInputType | true
    }

  export interface OldVerbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OldVerb'], meta: { name: 'OldVerb' } }
    /**
     * Find zero or one OldVerb that matches the filter.
     * @param {OldVerbFindUniqueArgs} args - Arguments to find a OldVerb
     * @example
     * // Get one OldVerb
     * const oldVerb = await prisma.oldVerb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OldVerbFindUniqueArgs>(args: SelectSubset<T, OldVerbFindUniqueArgs<ExtArgs>>): Prisma__OldVerbClient<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OldVerb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OldVerbFindUniqueOrThrowArgs} args - Arguments to find a OldVerb
     * @example
     * // Get one OldVerb
     * const oldVerb = await prisma.oldVerb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OldVerbFindUniqueOrThrowArgs>(args: SelectSubset<T, OldVerbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OldVerbClient<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OldVerb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldVerbFindFirstArgs} args - Arguments to find a OldVerb
     * @example
     * // Get one OldVerb
     * const oldVerb = await prisma.oldVerb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OldVerbFindFirstArgs>(args?: SelectSubset<T, OldVerbFindFirstArgs<ExtArgs>>): Prisma__OldVerbClient<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OldVerb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldVerbFindFirstOrThrowArgs} args - Arguments to find a OldVerb
     * @example
     * // Get one OldVerb
     * const oldVerb = await prisma.oldVerb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OldVerbFindFirstOrThrowArgs>(args?: SelectSubset<T, OldVerbFindFirstOrThrowArgs<ExtArgs>>): Prisma__OldVerbClient<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OldVerbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldVerbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OldVerbs
     * const oldVerbs = await prisma.oldVerb.findMany()
     * 
     * // Get first 10 OldVerbs
     * const oldVerbs = await prisma.oldVerb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oldVerbWithIdOnly = await prisma.oldVerb.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OldVerbFindManyArgs>(args?: SelectSubset<T, OldVerbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OldVerb.
     * @param {OldVerbCreateArgs} args - Arguments to create a OldVerb.
     * @example
     * // Create one OldVerb
     * const OldVerb = await prisma.oldVerb.create({
     *   data: {
     *     // ... data to create a OldVerb
     *   }
     * })
     * 
     */
    create<T extends OldVerbCreateArgs>(args: SelectSubset<T, OldVerbCreateArgs<ExtArgs>>): Prisma__OldVerbClient<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OldVerbs.
     * @param {OldVerbCreateManyArgs} args - Arguments to create many OldVerbs.
     * @example
     * // Create many OldVerbs
     * const oldVerb = await prisma.oldVerb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OldVerbCreateManyArgs>(args?: SelectSubset<T, OldVerbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OldVerbs and returns the data saved in the database.
     * @param {OldVerbCreateManyAndReturnArgs} args - Arguments to create many OldVerbs.
     * @example
     * // Create many OldVerbs
     * const oldVerb = await prisma.oldVerb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OldVerbs and only return the `id`
     * const oldVerbWithIdOnly = await prisma.oldVerb.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OldVerbCreateManyAndReturnArgs>(args?: SelectSubset<T, OldVerbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OldVerb.
     * @param {OldVerbDeleteArgs} args - Arguments to delete one OldVerb.
     * @example
     * // Delete one OldVerb
     * const OldVerb = await prisma.oldVerb.delete({
     *   where: {
     *     // ... filter to delete one OldVerb
     *   }
     * })
     * 
     */
    delete<T extends OldVerbDeleteArgs>(args: SelectSubset<T, OldVerbDeleteArgs<ExtArgs>>): Prisma__OldVerbClient<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OldVerb.
     * @param {OldVerbUpdateArgs} args - Arguments to update one OldVerb.
     * @example
     * // Update one OldVerb
     * const oldVerb = await prisma.oldVerb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OldVerbUpdateArgs>(args: SelectSubset<T, OldVerbUpdateArgs<ExtArgs>>): Prisma__OldVerbClient<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OldVerbs.
     * @param {OldVerbDeleteManyArgs} args - Arguments to filter OldVerbs to delete.
     * @example
     * // Delete a few OldVerbs
     * const { count } = await prisma.oldVerb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OldVerbDeleteManyArgs>(args?: SelectSubset<T, OldVerbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OldVerbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldVerbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OldVerbs
     * const oldVerb = await prisma.oldVerb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OldVerbUpdateManyArgs>(args: SelectSubset<T, OldVerbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OldVerbs and returns the data updated in the database.
     * @param {OldVerbUpdateManyAndReturnArgs} args - Arguments to update many OldVerbs.
     * @example
     * // Update many OldVerbs
     * const oldVerb = await prisma.oldVerb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OldVerbs and only return the `id`
     * const oldVerbWithIdOnly = await prisma.oldVerb.updateManyAndReturn({
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
    updateManyAndReturn<T extends OldVerbUpdateManyAndReturnArgs>(args: SelectSubset<T, OldVerbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OldVerb.
     * @param {OldVerbUpsertArgs} args - Arguments to update or create a OldVerb.
     * @example
     * // Update or create a OldVerb
     * const oldVerb = await prisma.oldVerb.upsert({
     *   create: {
     *     // ... data to create a OldVerb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OldVerb we want to update
     *   }
     * })
     */
    upsert<T extends OldVerbUpsertArgs>(args: SelectSubset<T, OldVerbUpsertArgs<ExtArgs>>): Prisma__OldVerbClient<$Result.GetResult<Prisma.$OldVerbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OldVerbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldVerbCountArgs} args - Arguments to filter OldVerbs to count.
     * @example
     * // Count the number of OldVerbs
     * const count = await prisma.oldVerb.count({
     *   where: {
     *     // ... the filter for the OldVerbs we want to count
     *   }
     * })
    **/
    count<T extends OldVerbCountArgs>(
      args?: Subset<T, OldVerbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OldVerbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OldVerb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldVerbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OldVerbAggregateArgs>(args: Subset<T, OldVerbAggregateArgs>): Prisma.PrismaPromise<GetOldVerbAggregateType<T>>

    /**
     * Group by OldVerb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldVerbGroupByArgs} args - Group by arguments.
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
      T extends OldVerbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OldVerbGroupByArgs['orderBy'] }
        : { orderBy?: OldVerbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OldVerbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOldVerbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OldVerb model
   */
  readonly fields: OldVerbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OldVerb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OldVerbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OldVerb model
   */
  interface OldVerbFieldRefs {
    readonly id: FieldRef<"OldVerb", 'Int'>
    readonly name: FieldRef<"OldVerb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OldVerb findUnique
   */
  export type OldVerbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * Filter, which OldVerb to fetch.
     */
    where: OldVerbWhereUniqueInput
  }

  /**
   * OldVerb findUniqueOrThrow
   */
  export type OldVerbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * Filter, which OldVerb to fetch.
     */
    where: OldVerbWhereUniqueInput
  }

  /**
   * OldVerb findFirst
   */
  export type OldVerbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * Filter, which OldVerb to fetch.
     */
    where?: OldVerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OldVerbs to fetch.
     */
    orderBy?: OldVerbOrderByWithRelationInput | OldVerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OldVerbs.
     */
    cursor?: OldVerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OldVerbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OldVerbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OldVerbs.
     */
    distinct?: OldVerbScalarFieldEnum | OldVerbScalarFieldEnum[]
  }

  /**
   * OldVerb findFirstOrThrow
   */
  export type OldVerbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * Filter, which OldVerb to fetch.
     */
    where?: OldVerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OldVerbs to fetch.
     */
    orderBy?: OldVerbOrderByWithRelationInput | OldVerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OldVerbs.
     */
    cursor?: OldVerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OldVerbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OldVerbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OldVerbs.
     */
    distinct?: OldVerbScalarFieldEnum | OldVerbScalarFieldEnum[]
  }

  /**
   * OldVerb findMany
   */
  export type OldVerbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * Filter, which OldVerbs to fetch.
     */
    where?: OldVerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OldVerbs to fetch.
     */
    orderBy?: OldVerbOrderByWithRelationInput | OldVerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OldVerbs.
     */
    cursor?: OldVerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OldVerbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OldVerbs.
     */
    skip?: number
    distinct?: OldVerbScalarFieldEnum | OldVerbScalarFieldEnum[]
  }

  /**
   * OldVerb create
   */
  export type OldVerbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * The data needed to create a OldVerb.
     */
    data: XOR<OldVerbCreateInput, OldVerbUncheckedCreateInput>
  }

  /**
   * OldVerb createMany
   */
  export type OldVerbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OldVerbs.
     */
    data: OldVerbCreateManyInput | OldVerbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OldVerb createManyAndReturn
   */
  export type OldVerbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * The data used to create many OldVerbs.
     */
    data: OldVerbCreateManyInput | OldVerbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OldVerb update
   */
  export type OldVerbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * The data needed to update a OldVerb.
     */
    data: XOR<OldVerbUpdateInput, OldVerbUncheckedUpdateInput>
    /**
     * Choose, which OldVerb to update.
     */
    where: OldVerbWhereUniqueInput
  }

  /**
   * OldVerb updateMany
   */
  export type OldVerbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OldVerbs.
     */
    data: XOR<OldVerbUpdateManyMutationInput, OldVerbUncheckedUpdateManyInput>
    /**
     * Filter which OldVerbs to update
     */
    where?: OldVerbWhereInput
    /**
     * Limit how many OldVerbs to update.
     */
    limit?: number
  }

  /**
   * OldVerb updateManyAndReturn
   */
  export type OldVerbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * The data used to update OldVerbs.
     */
    data: XOR<OldVerbUpdateManyMutationInput, OldVerbUncheckedUpdateManyInput>
    /**
     * Filter which OldVerbs to update
     */
    where?: OldVerbWhereInput
    /**
     * Limit how many OldVerbs to update.
     */
    limit?: number
  }

  /**
   * OldVerb upsert
   */
  export type OldVerbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * The filter to search for the OldVerb to update in case it exists.
     */
    where: OldVerbWhereUniqueInput
    /**
     * In case the OldVerb found by the `where` argument doesn't exist, create a new OldVerb with this data.
     */
    create: XOR<OldVerbCreateInput, OldVerbUncheckedCreateInput>
    /**
     * In case the OldVerb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OldVerbUpdateInput, OldVerbUncheckedUpdateInput>
  }

  /**
   * OldVerb delete
   */
  export type OldVerbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
    /**
     * Filter which OldVerb to delete.
     */
    where: OldVerbWhereUniqueInput
  }

  /**
   * OldVerb deleteMany
   */
  export type OldVerbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OldVerbs to delete
     */
    where?: OldVerbWhereInput
    /**
     * Limit how many OldVerbs to delete.
     */
    limit?: number
  }

  /**
   * OldVerb without action
   */
  export type OldVerbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OldVerb
     */
    select?: OldVerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OldVerb
     */
    omit?: OldVerbOmit<ExtArgs> | null
  }


  /**
   * Model VerbToday
   */

  export type AggregateVerbToday = {
    _count: VerbTodayCountAggregateOutputType | null
    _avg: VerbTodayAvgAggregateOutputType | null
    _sum: VerbTodaySumAggregateOutputType | null
    _min: VerbTodayMinAggregateOutputType | null
    _max: VerbTodayMaxAggregateOutputType | null
  }

  export type VerbTodayAvgAggregateOutputType = {
    id: number | null
  }

  export type VerbTodaySumAggregateOutputType = {
    id: number | null
  }

  export type VerbTodayMinAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
  }

  export type VerbTodayMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
  }

  export type VerbTodayCountAggregateOutputType = {
    id: number
    name: number
    date: number
    _all: number
  }


  export type VerbTodayAvgAggregateInputType = {
    id?: true
  }

  export type VerbTodaySumAggregateInputType = {
    id?: true
  }

  export type VerbTodayMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
  }

  export type VerbTodayMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
  }

  export type VerbTodayCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    _all?: true
  }

  export type VerbTodayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerbToday to aggregate.
     */
    where?: VerbTodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerbTodays to fetch.
     */
    orderBy?: VerbTodayOrderByWithRelationInput | VerbTodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerbTodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerbTodays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerbTodays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerbTodays
    **/
    _count?: true | VerbTodayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerbTodayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerbTodaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerbTodayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerbTodayMaxAggregateInputType
  }

  export type GetVerbTodayAggregateType<T extends VerbTodayAggregateArgs> = {
        [P in keyof T & keyof AggregateVerbToday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerbToday[P]>
      : GetScalarType<T[P], AggregateVerbToday[P]>
  }




  export type VerbTodayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerbTodayWhereInput
    orderBy?: VerbTodayOrderByWithAggregationInput | VerbTodayOrderByWithAggregationInput[]
    by: VerbTodayScalarFieldEnum[] | VerbTodayScalarFieldEnum
    having?: VerbTodayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerbTodayCountAggregateInputType | true
    _avg?: VerbTodayAvgAggregateInputType
    _sum?: VerbTodaySumAggregateInputType
    _min?: VerbTodayMinAggregateInputType
    _max?: VerbTodayMaxAggregateInputType
  }

  export type VerbTodayGroupByOutputType = {
    id: number
    name: string
    date: Date
    _count: VerbTodayCountAggregateOutputType | null
    _avg: VerbTodayAvgAggregateOutputType | null
    _sum: VerbTodaySumAggregateOutputType | null
    _min: VerbTodayMinAggregateOutputType | null
    _max: VerbTodayMaxAggregateOutputType | null
  }

  type GetVerbTodayGroupByPayload<T extends VerbTodayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerbTodayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerbTodayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerbTodayGroupByOutputType[P]>
            : GetScalarType<T[P], VerbTodayGroupByOutputType[P]>
        }
      >
    >


  export type VerbTodaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
  }, ExtArgs["result"]["verbToday"]>

  export type VerbTodaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
  }, ExtArgs["result"]["verbToday"]>

  export type VerbTodaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
  }, ExtArgs["result"]["verbToday"]>

  export type VerbTodaySelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
  }

  export type VerbTodayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date", ExtArgs["result"]["verbToday"]>

  export type $VerbTodayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerbToday"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      date: Date
    }, ExtArgs["result"]["verbToday"]>
    composites: {}
  }

  type VerbTodayGetPayload<S extends boolean | null | undefined | VerbTodayDefaultArgs> = $Result.GetResult<Prisma.$VerbTodayPayload, S>

  type VerbTodayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerbTodayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerbTodayCountAggregateInputType | true
    }

  export interface VerbTodayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerbToday'], meta: { name: 'VerbToday' } }
    /**
     * Find zero or one VerbToday that matches the filter.
     * @param {VerbTodayFindUniqueArgs} args - Arguments to find a VerbToday
     * @example
     * // Get one VerbToday
     * const verbToday = await prisma.verbToday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerbTodayFindUniqueArgs>(args: SelectSubset<T, VerbTodayFindUniqueArgs<ExtArgs>>): Prisma__VerbTodayClient<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerbToday that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerbTodayFindUniqueOrThrowArgs} args - Arguments to find a VerbToday
     * @example
     * // Get one VerbToday
     * const verbToday = await prisma.verbToday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerbTodayFindUniqueOrThrowArgs>(args: SelectSubset<T, VerbTodayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerbTodayClient<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerbToday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbTodayFindFirstArgs} args - Arguments to find a VerbToday
     * @example
     * // Get one VerbToday
     * const verbToday = await prisma.verbToday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerbTodayFindFirstArgs>(args?: SelectSubset<T, VerbTodayFindFirstArgs<ExtArgs>>): Prisma__VerbTodayClient<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerbToday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbTodayFindFirstOrThrowArgs} args - Arguments to find a VerbToday
     * @example
     * // Get one VerbToday
     * const verbToday = await prisma.verbToday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerbTodayFindFirstOrThrowArgs>(args?: SelectSubset<T, VerbTodayFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerbTodayClient<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerbTodays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbTodayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerbTodays
     * const verbTodays = await prisma.verbToday.findMany()
     * 
     * // Get first 10 VerbTodays
     * const verbTodays = await prisma.verbToday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verbTodayWithIdOnly = await prisma.verbToday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerbTodayFindManyArgs>(args?: SelectSubset<T, VerbTodayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerbToday.
     * @param {VerbTodayCreateArgs} args - Arguments to create a VerbToday.
     * @example
     * // Create one VerbToday
     * const VerbToday = await prisma.verbToday.create({
     *   data: {
     *     // ... data to create a VerbToday
     *   }
     * })
     * 
     */
    create<T extends VerbTodayCreateArgs>(args: SelectSubset<T, VerbTodayCreateArgs<ExtArgs>>): Prisma__VerbTodayClient<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerbTodays.
     * @param {VerbTodayCreateManyArgs} args - Arguments to create many VerbTodays.
     * @example
     * // Create many VerbTodays
     * const verbToday = await prisma.verbToday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerbTodayCreateManyArgs>(args?: SelectSubset<T, VerbTodayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerbTodays and returns the data saved in the database.
     * @param {VerbTodayCreateManyAndReturnArgs} args - Arguments to create many VerbTodays.
     * @example
     * // Create many VerbTodays
     * const verbToday = await prisma.verbToday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerbTodays and only return the `id`
     * const verbTodayWithIdOnly = await prisma.verbToday.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerbTodayCreateManyAndReturnArgs>(args?: SelectSubset<T, VerbTodayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerbToday.
     * @param {VerbTodayDeleteArgs} args - Arguments to delete one VerbToday.
     * @example
     * // Delete one VerbToday
     * const VerbToday = await prisma.verbToday.delete({
     *   where: {
     *     // ... filter to delete one VerbToday
     *   }
     * })
     * 
     */
    delete<T extends VerbTodayDeleteArgs>(args: SelectSubset<T, VerbTodayDeleteArgs<ExtArgs>>): Prisma__VerbTodayClient<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerbToday.
     * @param {VerbTodayUpdateArgs} args - Arguments to update one VerbToday.
     * @example
     * // Update one VerbToday
     * const verbToday = await prisma.verbToday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerbTodayUpdateArgs>(args: SelectSubset<T, VerbTodayUpdateArgs<ExtArgs>>): Prisma__VerbTodayClient<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerbTodays.
     * @param {VerbTodayDeleteManyArgs} args - Arguments to filter VerbTodays to delete.
     * @example
     * // Delete a few VerbTodays
     * const { count } = await prisma.verbToday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerbTodayDeleteManyArgs>(args?: SelectSubset<T, VerbTodayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerbTodays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbTodayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerbTodays
     * const verbToday = await prisma.verbToday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerbTodayUpdateManyArgs>(args: SelectSubset<T, VerbTodayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerbTodays and returns the data updated in the database.
     * @param {VerbTodayUpdateManyAndReturnArgs} args - Arguments to update many VerbTodays.
     * @example
     * // Update many VerbTodays
     * const verbToday = await prisma.verbToday.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerbTodays and only return the `id`
     * const verbTodayWithIdOnly = await prisma.verbToday.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerbTodayUpdateManyAndReturnArgs>(args: SelectSubset<T, VerbTodayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerbToday.
     * @param {VerbTodayUpsertArgs} args - Arguments to update or create a VerbToday.
     * @example
     * // Update or create a VerbToday
     * const verbToday = await prisma.verbToday.upsert({
     *   create: {
     *     // ... data to create a VerbToday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerbToday we want to update
     *   }
     * })
     */
    upsert<T extends VerbTodayUpsertArgs>(args: SelectSubset<T, VerbTodayUpsertArgs<ExtArgs>>): Prisma__VerbTodayClient<$Result.GetResult<Prisma.$VerbTodayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerbTodays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbTodayCountArgs} args - Arguments to filter VerbTodays to count.
     * @example
     * // Count the number of VerbTodays
     * const count = await prisma.verbToday.count({
     *   where: {
     *     // ... the filter for the VerbTodays we want to count
     *   }
     * })
    **/
    count<T extends VerbTodayCountArgs>(
      args?: Subset<T, VerbTodayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerbTodayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerbToday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbTodayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerbTodayAggregateArgs>(args: Subset<T, VerbTodayAggregateArgs>): Prisma.PrismaPromise<GetVerbTodayAggregateType<T>>

    /**
     * Group by VerbToday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbTodayGroupByArgs} args - Group by arguments.
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
      T extends VerbTodayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerbTodayGroupByArgs['orderBy'] }
        : { orderBy?: VerbTodayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerbTodayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerbTodayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerbToday model
   */
  readonly fields: VerbTodayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerbToday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerbTodayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerbToday model
   */
  interface VerbTodayFieldRefs {
    readonly id: FieldRef<"VerbToday", 'Int'>
    readonly name: FieldRef<"VerbToday", 'String'>
    readonly date: FieldRef<"VerbToday", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerbToday findUnique
   */
  export type VerbTodayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * Filter, which VerbToday to fetch.
     */
    where: VerbTodayWhereUniqueInput
  }

  /**
   * VerbToday findUniqueOrThrow
   */
  export type VerbTodayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * Filter, which VerbToday to fetch.
     */
    where: VerbTodayWhereUniqueInput
  }

  /**
   * VerbToday findFirst
   */
  export type VerbTodayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * Filter, which VerbToday to fetch.
     */
    where?: VerbTodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerbTodays to fetch.
     */
    orderBy?: VerbTodayOrderByWithRelationInput | VerbTodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerbTodays.
     */
    cursor?: VerbTodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerbTodays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerbTodays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerbTodays.
     */
    distinct?: VerbTodayScalarFieldEnum | VerbTodayScalarFieldEnum[]
  }

  /**
   * VerbToday findFirstOrThrow
   */
  export type VerbTodayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * Filter, which VerbToday to fetch.
     */
    where?: VerbTodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerbTodays to fetch.
     */
    orderBy?: VerbTodayOrderByWithRelationInput | VerbTodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerbTodays.
     */
    cursor?: VerbTodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerbTodays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerbTodays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerbTodays.
     */
    distinct?: VerbTodayScalarFieldEnum | VerbTodayScalarFieldEnum[]
  }

  /**
   * VerbToday findMany
   */
  export type VerbTodayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * Filter, which VerbTodays to fetch.
     */
    where?: VerbTodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerbTodays to fetch.
     */
    orderBy?: VerbTodayOrderByWithRelationInput | VerbTodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerbTodays.
     */
    cursor?: VerbTodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerbTodays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerbTodays.
     */
    skip?: number
    distinct?: VerbTodayScalarFieldEnum | VerbTodayScalarFieldEnum[]
  }

  /**
   * VerbToday create
   */
  export type VerbTodayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * The data needed to create a VerbToday.
     */
    data: XOR<VerbTodayCreateInput, VerbTodayUncheckedCreateInput>
  }

  /**
   * VerbToday createMany
   */
  export type VerbTodayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerbTodays.
     */
    data: VerbTodayCreateManyInput | VerbTodayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerbToday createManyAndReturn
   */
  export type VerbTodayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * The data used to create many VerbTodays.
     */
    data: VerbTodayCreateManyInput | VerbTodayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerbToday update
   */
  export type VerbTodayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * The data needed to update a VerbToday.
     */
    data: XOR<VerbTodayUpdateInput, VerbTodayUncheckedUpdateInput>
    /**
     * Choose, which VerbToday to update.
     */
    where: VerbTodayWhereUniqueInput
  }

  /**
   * VerbToday updateMany
   */
  export type VerbTodayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerbTodays.
     */
    data: XOR<VerbTodayUpdateManyMutationInput, VerbTodayUncheckedUpdateManyInput>
    /**
     * Filter which VerbTodays to update
     */
    where?: VerbTodayWhereInput
    /**
     * Limit how many VerbTodays to update.
     */
    limit?: number
  }

  /**
   * VerbToday updateManyAndReturn
   */
  export type VerbTodayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * The data used to update VerbTodays.
     */
    data: XOR<VerbTodayUpdateManyMutationInput, VerbTodayUncheckedUpdateManyInput>
    /**
     * Filter which VerbTodays to update
     */
    where?: VerbTodayWhereInput
    /**
     * Limit how many VerbTodays to update.
     */
    limit?: number
  }

  /**
   * VerbToday upsert
   */
  export type VerbTodayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * The filter to search for the VerbToday to update in case it exists.
     */
    where: VerbTodayWhereUniqueInput
    /**
     * In case the VerbToday found by the `where` argument doesn't exist, create a new VerbToday with this data.
     */
    create: XOR<VerbTodayCreateInput, VerbTodayUncheckedCreateInput>
    /**
     * In case the VerbToday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerbTodayUpdateInput, VerbTodayUncheckedUpdateInput>
  }

  /**
   * VerbToday delete
   */
  export type VerbTodayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
    /**
     * Filter which VerbToday to delete.
     */
    where: VerbTodayWhereUniqueInput
  }

  /**
   * VerbToday deleteMany
   */
  export type VerbTodayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerbTodays to delete
     */
    where?: VerbTodayWhereInput
    /**
     * Limit how many VerbTodays to delete.
     */
    limit?: number
  }

  /**
   * VerbToday without action
   */
  export type VerbTodayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbToday
     */
    select?: VerbTodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerbToday
     */
    omit?: VerbTodayOmit<ExtArgs> | null
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


  export const VerbScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type VerbScalarFieldEnum = (typeof VerbScalarFieldEnum)[keyof typeof VerbScalarFieldEnum]


  export const OldVerbScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OldVerbScalarFieldEnum = (typeof OldVerbScalarFieldEnum)[keyof typeof OldVerbScalarFieldEnum]


  export const VerbTodayScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date'
  };

  export type VerbTodayScalarFieldEnum = (typeof VerbTodayScalarFieldEnum)[keyof typeof VerbTodayScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type VerbWhereInput = {
    AND?: VerbWhereInput | VerbWhereInput[]
    OR?: VerbWhereInput[]
    NOT?: VerbWhereInput | VerbWhereInput[]
    id?: IntFilter<"Verb"> | number
    name?: StringFilter<"Verb"> | string
  }

  export type VerbOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type VerbWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: VerbWhereInput | VerbWhereInput[]
    OR?: VerbWhereInput[]
    NOT?: VerbWhereInput | VerbWhereInput[]
  }, "id" | "name">

  export type VerbOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: VerbCountOrderByAggregateInput
    _avg?: VerbAvgOrderByAggregateInput
    _max?: VerbMaxOrderByAggregateInput
    _min?: VerbMinOrderByAggregateInput
    _sum?: VerbSumOrderByAggregateInput
  }

  export type VerbScalarWhereWithAggregatesInput = {
    AND?: VerbScalarWhereWithAggregatesInput | VerbScalarWhereWithAggregatesInput[]
    OR?: VerbScalarWhereWithAggregatesInput[]
    NOT?: VerbScalarWhereWithAggregatesInput | VerbScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Verb"> | number
    name?: StringWithAggregatesFilter<"Verb"> | string
  }

  export type OldVerbWhereInput = {
    AND?: OldVerbWhereInput | OldVerbWhereInput[]
    OR?: OldVerbWhereInput[]
    NOT?: OldVerbWhereInput | OldVerbWhereInput[]
    id?: IntFilter<"OldVerb"> | number
    name?: StringFilter<"OldVerb"> | string
  }

  export type OldVerbOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OldVerbWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: OldVerbWhereInput | OldVerbWhereInput[]
    OR?: OldVerbWhereInput[]
    NOT?: OldVerbWhereInput | OldVerbWhereInput[]
  }, "id" | "name">

  export type OldVerbOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OldVerbCountOrderByAggregateInput
    _avg?: OldVerbAvgOrderByAggregateInput
    _max?: OldVerbMaxOrderByAggregateInput
    _min?: OldVerbMinOrderByAggregateInput
    _sum?: OldVerbSumOrderByAggregateInput
  }

  export type OldVerbScalarWhereWithAggregatesInput = {
    AND?: OldVerbScalarWhereWithAggregatesInput | OldVerbScalarWhereWithAggregatesInput[]
    OR?: OldVerbScalarWhereWithAggregatesInput[]
    NOT?: OldVerbScalarWhereWithAggregatesInput | OldVerbScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OldVerb"> | number
    name?: StringWithAggregatesFilter<"OldVerb"> | string
  }

  export type VerbTodayWhereInput = {
    AND?: VerbTodayWhereInput | VerbTodayWhereInput[]
    OR?: VerbTodayWhereInput[]
    NOT?: VerbTodayWhereInput | VerbTodayWhereInput[]
    id?: IntFilter<"VerbToday"> | number
    name?: StringFilter<"VerbToday"> | string
    date?: DateTimeFilter<"VerbToday"> | Date | string
  }

  export type VerbTodayOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
  }

  export type VerbTodayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    date?: Date | string
    AND?: VerbTodayWhereInput | VerbTodayWhereInput[]
    OR?: VerbTodayWhereInput[]
    NOT?: VerbTodayWhereInput | VerbTodayWhereInput[]
    name?: StringFilter<"VerbToday"> | string
  }, "id" | "date">

  export type VerbTodayOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    _count?: VerbTodayCountOrderByAggregateInput
    _avg?: VerbTodayAvgOrderByAggregateInput
    _max?: VerbTodayMaxOrderByAggregateInput
    _min?: VerbTodayMinOrderByAggregateInput
    _sum?: VerbTodaySumOrderByAggregateInput
  }

  export type VerbTodayScalarWhereWithAggregatesInput = {
    AND?: VerbTodayScalarWhereWithAggregatesInput | VerbTodayScalarWhereWithAggregatesInput[]
    OR?: VerbTodayScalarWhereWithAggregatesInput[]
    NOT?: VerbTodayScalarWhereWithAggregatesInput | VerbTodayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VerbToday"> | number
    name?: StringWithAggregatesFilter<"VerbToday"> | string
    date?: DateTimeWithAggregatesFilter<"VerbToday"> | Date | string
  }

  export type VerbCreateInput = {
    name: string
  }

  export type VerbUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type VerbUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VerbUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VerbCreateManyInput = {
    id?: number
    name: string
  }

  export type VerbUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VerbUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OldVerbCreateInput = {
    name: string
  }

  export type OldVerbUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type OldVerbUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OldVerbUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OldVerbCreateManyInput = {
    id?: number
    name: string
  }

  export type OldVerbUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OldVerbUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VerbTodayCreateInput = {
    name: string
    date: Date | string
  }

  export type VerbTodayUncheckedCreateInput = {
    id?: number
    name: string
    date: Date | string
  }

  export type VerbTodayUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerbTodayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerbTodayCreateManyInput = {
    id?: number
    name: string
    date: Date | string
  }

  export type VerbTodayUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerbTodayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type VerbCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type VerbAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VerbMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type VerbMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type VerbSumOrderByAggregateInput = {
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type OldVerbCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OldVerbAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OldVerbMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OldVerbMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OldVerbSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VerbTodayCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
  }

  export type VerbTodayAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VerbTodayMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
  }

  export type VerbTodayMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
  }

  export type VerbTodaySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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