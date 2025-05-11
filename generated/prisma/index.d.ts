
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
 * Model Pixelart
 * 
 */
export type Pixelart = $Result.DefaultSelection<Prisma.$PixelartPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pixelarts
 * const pixelarts = await prisma.pixelart.findMany()
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
   * // Fetch zero or more Pixelarts
   * const pixelarts = await prisma.pixelart.findMany()
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
   * `prisma.pixelart`: Exposes CRUD operations for the **Pixelart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pixelarts
    * const pixelarts = await prisma.pixelart.findMany()
    * ```
    */
  get pixelart(): Prisma.PixelartDelegate<ExtArgs, ClientOptions>;
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
    Pixelart: 'Pixelart'
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
      modelProps: "pixelart"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pixelart: {
        payload: Prisma.$PixelartPayload<ExtArgs>
        fields: Prisma.PixelartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PixelartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PixelartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload>
          }
          findFirst: {
            args: Prisma.PixelartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PixelartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload>
          }
          findMany: {
            args: Prisma.PixelartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload>[]
          }
          create: {
            args: Prisma.PixelartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload>
          }
          createMany: {
            args: Prisma.PixelartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PixelartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload>[]
          }
          delete: {
            args: Prisma.PixelartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload>
          }
          update: {
            args: Prisma.PixelartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload>
          }
          deleteMany: {
            args: Prisma.PixelartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PixelartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PixelartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload>[]
          }
          upsert: {
            args: Prisma.PixelartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelartPayload>
          }
          aggregate: {
            args: Prisma.PixelartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePixelart>
          }
          groupBy: {
            args: Prisma.PixelartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PixelartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PixelartCountArgs<ExtArgs>
            result: $Utils.Optional<PixelartCountAggregateOutputType> | number
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
    pixelart?: PixelartOmit
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
   * Model Pixelart
   */

  export type AggregatePixelart = {
    _count: PixelartCountAggregateOutputType | null
    _avg: PixelartAvgAggregateOutputType | null
    _sum: PixelartSumAggregateOutputType | null
    _min: PixelartMinAggregateOutputType | null
    _max: PixelartMaxAggregateOutputType | null
  }

  export type PixelartAvgAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
  }

  export type PixelartSumAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
  }

  export type PixelartMinAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    color: string | null
  }

  export type PixelartMaxAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    color: string | null
  }

  export type PixelartCountAggregateOutputType = {
    id: number
    x: number
    y: number
    color: number
    _all: number
  }


  export type PixelartAvgAggregateInputType = {
    id?: true
    x?: true
    y?: true
  }

  export type PixelartSumAggregateInputType = {
    id?: true
    x?: true
    y?: true
  }

  export type PixelartMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
    color?: true
  }

  export type PixelartMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
    color?: true
  }

  export type PixelartCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    color?: true
    _all?: true
  }

  export type PixelartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pixelart to aggregate.
     */
    where?: PixelartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pixelarts to fetch.
     */
    orderBy?: PixelartOrderByWithRelationInput | PixelartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PixelartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pixelarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pixelarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pixelarts
    **/
    _count?: true | PixelartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PixelartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PixelartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PixelartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PixelartMaxAggregateInputType
  }

  export type GetPixelartAggregateType<T extends PixelartAggregateArgs> = {
        [P in keyof T & keyof AggregatePixelart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePixelart[P]>
      : GetScalarType<T[P], AggregatePixelart[P]>
  }




  export type PixelartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PixelartWhereInput
    orderBy?: PixelartOrderByWithAggregationInput | PixelartOrderByWithAggregationInput[]
    by: PixelartScalarFieldEnum[] | PixelartScalarFieldEnum
    having?: PixelartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PixelartCountAggregateInputType | true
    _avg?: PixelartAvgAggregateInputType
    _sum?: PixelartSumAggregateInputType
    _min?: PixelartMinAggregateInputType
    _max?: PixelartMaxAggregateInputType
  }

  export type PixelartGroupByOutputType = {
    id: number
    x: number
    y: number
    color: string
    _count: PixelartCountAggregateOutputType | null
    _avg: PixelartAvgAggregateOutputType | null
    _sum: PixelartSumAggregateOutputType | null
    _min: PixelartMinAggregateOutputType | null
    _max: PixelartMaxAggregateOutputType | null
  }

  type GetPixelartGroupByPayload<T extends PixelartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PixelartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PixelartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PixelartGroupByOutputType[P]>
            : GetScalarType<T[P], PixelartGroupByOutputType[P]>
        }
      >
    >


  export type PixelartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    color?: boolean
  }, ExtArgs["result"]["pixelart"]>

  export type PixelartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    color?: boolean
  }, ExtArgs["result"]["pixelart"]>

  export type PixelartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    color?: boolean
  }, ExtArgs["result"]["pixelart"]>

  export type PixelartSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
    color?: boolean
  }

  export type PixelartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "x" | "y" | "color", ExtArgs["result"]["pixelart"]>

  export type $PixelartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pixelart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      x: number
      y: number
      color: string
    }, ExtArgs["result"]["pixelart"]>
    composites: {}
  }

  type PixelartGetPayload<S extends boolean | null | undefined | PixelartDefaultArgs> = $Result.GetResult<Prisma.$PixelartPayload, S>

  type PixelartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PixelartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PixelartCountAggregateInputType | true
    }

  export interface PixelartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pixelart'], meta: { name: 'Pixelart' } }
    /**
     * Find zero or one Pixelart that matches the filter.
     * @param {PixelartFindUniqueArgs} args - Arguments to find a Pixelart
     * @example
     * // Get one Pixelart
     * const pixelart = await prisma.pixelart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PixelartFindUniqueArgs>(args: SelectSubset<T, PixelartFindUniqueArgs<ExtArgs>>): Prisma__PixelartClient<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pixelart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PixelartFindUniqueOrThrowArgs} args - Arguments to find a Pixelart
     * @example
     * // Get one Pixelart
     * const pixelart = await prisma.pixelart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PixelartFindUniqueOrThrowArgs>(args: SelectSubset<T, PixelartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PixelartClient<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pixelart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelartFindFirstArgs} args - Arguments to find a Pixelart
     * @example
     * // Get one Pixelart
     * const pixelart = await prisma.pixelart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PixelartFindFirstArgs>(args?: SelectSubset<T, PixelartFindFirstArgs<ExtArgs>>): Prisma__PixelartClient<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pixelart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelartFindFirstOrThrowArgs} args - Arguments to find a Pixelart
     * @example
     * // Get one Pixelart
     * const pixelart = await prisma.pixelart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PixelartFindFirstOrThrowArgs>(args?: SelectSubset<T, PixelartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PixelartClient<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pixelarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pixelarts
     * const pixelarts = await prisma.pixelart.findMany()
     * 
     * // Get first 10 Pixelarts
     * const pixelarts = await prisma.pixelart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pixelartWithIdOnly = await prisma.pixelart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PixelartFindManyArgs>(args?: SelectSubset<T, PixelartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pixelart.
     * @param {PixelartCreateArgs} args - Arguments to create a Pixelart.
     * @example
     * // Create one Pixelart
     * const Pixelart = await prisma.pixelart.create({
     *   data: {
     *     // ... data to create a Pixelart
     *   }
     * })
     * 
     */
    create<T extends PixelartCreateArgs>(args: SelectSubset<T, PixelartCreateArgs<ExtArgs>>): Prisma__PixelartClient<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pixelarts.
     * @param {PixelartCreateManyArgs} args - Arguments to create many Pixelarts.
     * @example
     * // Create many Pixelarts
     * const pixelart = await prisma.pixelart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PixelartCreateManyArgs>(args?: SelectSubset<T, PixelartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pixelarts and returns the data saved in the database.
     * @param {PixelartCreateManyAndReturnArgs} args - Arguments to create many Pixelarts.
     * @example
     * // Create many Pixelarts
     * const pixelart = await prisma.pixelart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pixelarts and only return the `id`
     * const pixelartWithIdOnly = await prisma.pixelart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PixelartCreateManyAndReturnArgs>(args?: SelectSubset<T, PixelartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pixelart.
     * @param {PixelartDeleteArgs} args - Arguments to delete one Pixelart.
     * @example
     * // Delete one Pixelart
     * const Pixelart = await prisma.pixelart.delete({
     *   where: {
     *     // ... filter to delete one Pixelart
     *   }
     * })
     * 
     */
    delete<T extends PixelartDeleteArgs>(args: SelectSubset<T, PixelartDeleteArgs<ExtArgs>>): Prisma__PixelartClient<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pixelart.
     * @param {PixelartUpdateArgs} args - Arguments to update one Pixelart.
     * @example
     * // Update one Pixelart
     * const pixelart = await prisma.pixelart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PixelartUpdateArgs>(args: SelectSubset<T, PixelartUpdateArgs<ExtArgs>>): Prisma__PixelartClient<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pixelarts.
     * @param {PixelartDeleteManyArgs} args - Arguments to filter Pixelarts to delete.
     * @example
     * // Delete a few Pixelarts
     * const { count } = await prisma.pixelart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PixelartDeleteManyArgs>(args?: SelectSubset<T, PixelartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pixelarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pixelarts
     * const pixelart = await prisma.pixelart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PixelartUpdateManyArgs>(args: SelectSubset<T, PixelartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pixelarts and returns the data updated in the database.
     * @param {PixelartUpdateManyAndReturnArgs} args - Arguments to update many Pixelarts.
     * @example
     * // Update many Pixelarts
     * const pixelart = await prisma.pixelart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pixelarts and only return the `id`
     * const pixelartWithIdOnly = await prisma.pixelart.updateManyAndReturn({
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
    updateManyAndReturn<T extends PixelartUpdateManyAndReturnArgs>(args: SelectSubset<T, PixelartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pixelart.
     * @param {PixelartUpsertArgs} args - Arguments to update or create a Pixelart.
     * @example
     * // Update or create a Pixelart
     * const pixelart = await prisma.pixelart.upsert({
     *   create: {
     *     // ... data to create a Pixelart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pixelart we want to update
     *   }
     * })
     */
    upsert<T extends PixelartUpsertArgs>(args: SelectSubset<T, PixelartUpsertArgs<ExtArgs>>): Prisma__PixelartClient<$Result.GetResult<Prisma.$PixelartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pixelarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelartCountArgs} args - Arguments to filter Pixelarts to count.
     * @example
     * // Count the number of Pixelarts
     * const count = await prisma.pixelart.count({
     *   where: {
     *     // ... the filter for the Pixelarts we want to count
     *   }
     * })
    **/
    count<T extends PixelartCountArgs>(
      args?: Subset<T, PixelartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PixelartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pixelart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PixelartAggregateArgs>(args: Subset<T, PixelartAggregateArgs>): Prisma.PrismaPromise<GetPixelartAggregateType<T>>

    /**
     * Group by Pixelart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelartGroupByArgs} args - Group by arguments.
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
      T extends PixelartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PixelartGroupByArgs['orderBy'] }
        : { orderBy?: PixelartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PixelartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPixelartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pixelart model
   */
  readonly fields: PixelartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pixelart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PixelartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Pixelart model
   */
  interface PixelartFieldRefs {
    readonly id: FieldRef<"Pixelart", 'Int'>
    readonly x: FieldRef<"Pixelart", 'Int'>
    readonly y: FieldRef<"Pixelart", 'Int'>
    readonly color: FieldRef<"Pixelart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pixelart findUnique
   */
  export type PixelartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * Filter, which Pixelart to fetch.
     */
    where: PixelartWhereUniqueInput
  }

  /**
   * Pixelart findUniqueOrThrow
   */
  export type PixelartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * Filter, which Pixelart to fetch.
     */
    where: PixelartWhereUniqueInput
  }

  /**
   * Pixelart findFirst
   */
  export type PixelartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * Filter, which Pixelart to fetch.
     */
    where?: PixelartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pixelarts to fetch.
     */
    orderBy?: PixelartOrderByWithRelationInput | PixelartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pixelarts.
     */
    cursor?: PixelartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pixelarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pixelarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pixelarts.
     */
    distinct?: PixelartScalarFieldEnum | PixelartScalarFieldEnum[]
  }

  /**
   * Pixelart findFirstOrThrow
   */
  export type PixelartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * Filter, which Pixelart to fetch.
     */
    where?: PixelartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pixelarts to fetch.
     */
    orderBy?: PixelartOrderByWithRelationInput | PixelartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pixelarts.
     */
    cursor?: PixelartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pixelarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pixelarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pixelarts.
     */
    distinct?: PixelartScalarFieldEnum | PixelartScalarFieldEnum[]
  }

  /**
   * Pixelart findMany
   */
  export type PixelartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * Filter, which Pixelarts to fetch.
     */
    where?: PixelartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pixelarts to fetch.
     */
    orderBy?: PixelartOrderByWithRelationInput | PixelartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pixelarts.
     */
    cursor?: PixelartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pixelarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pixelarts.
     */
    skip?: number
    distinct?: PixelartScalarFieldEnum | PixelartScalarFieldEnum[]
  }

  /**
   * Pixelart create
   */
  export type PixelartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * The data needed to create a Pixelart.
     */
    data: XOR<PixelartCreateInput, PixelartUncheckedCreateInput>
  }

  /**
   * Pixelart createMany
   */
  export type PixelartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pixelarts.
     */
    data: PixelartCreateManyInput | PixelartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pixelart createManyAndReturn
   */
  export type PixelartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * The data used to create many Pixelarts.
     */
    data: PixelartCreateManyInput | PixelartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pixelart update
   */
  export type PixelartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * The data needed to update a Pixelart.
     */
    data: XOR<PixelartUpdateInput, PixelartUncheckedUpdateInput>
    /**
     * Choose, which Pixelart to update.
     */
    where: PixelartWhereUniqueInput
  }

  /**
   * Pixelart updateMany
   */
  export type PixelartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pixelarts.
     */
    data: XOR<PixelartUpdateManyMutationInput, PixelartUncheckedUpdateManyInput>
    /**
     * Filter which Pixelarts to update
     */
    where?: PixelartWhereInput
    /**
     * Limit how many Pixelarts to update.
     */
    limit?: number
  }

  /**
   * Pixelart updateManyAndReturn
   */
  export type PixelartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * The data used to update Pixelarts.
     */
    data: XOR<PixelartUpdateManyMutationInput, PixelartUncheckedUpdateManyInput>
    /**
     * Filter which Pixelarts to update
     */
    where?: PixelartWhereInput
    /**
     * Limit how many Pixelarts to update.
     */
    limit?: number
  }

  /**
   * Pixelart upsert
   */
  export type PixelartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * The filter to search for the Pixelart to update in case it exists.
     */
    where: PixelartWhereUniqueInput
    /**
     * In case the Pixelart found by the `where` argument doesn't exist, create a new Pixelart with this data.
     */
    create: XOR<PixelartCreateInput, PixelartUncheckedCreateInput>
    /**
     * In case the Pixelart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PixelartUpdateInput, PixelartUncheckedUpdateInput>
  }

  /**
   * Pixelart delete
   */
  export type PixelartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
    /**
     * Filter which Pixelart to delete.
     */
    where: PixelartWhereUniqueInput
  }

  /**
   * Pixelart deleteMany
   */
  export type PixelartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pixelarts to delete
     */
    where?: PixelartWhereInput
    /**
     * Limit how many Pixelarts to delete.
     */
    limit?: number
  }

  /**
   * Pixelart without action
   */
  export type PixelartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixelart
     */
    select?: PixelartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pixelart
     */
    omit?: PixelartOmit<ExtArgs> | null
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


  export const PixelartScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y',
    color: 'color'
  };

  export type PixelartScalarFieldEnum = (typeof PixelartScalarFieldEnum)[keyof typeof PixelartScalarFieldEnum]


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


  export type PixelartWhereInput = {
    AND?: PixelartWhereInput | PixelartWhereInput[]
    OR?: PixelartWhereInput[]
    NOT?: PixelartWhereInput | PixelartWhereInput[]
    id?: IntFilter<"Pixelart"> | number
    x?: IntFilter<"Pixelart"> | number
    y?: IntFilter<"Pixelart"> | number
    color?: StringFilter<"Pixelart"> | string
  }

  export type PixelartOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
  }

  export type PixelartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PixelartWhereInput | PixelartWhereInput[]
    OR?: PixelartWhereInput[]
    NOT?: PixelartWhereInput | PixelartWhereInput[]
    x?: IntFilter<"Pixelart"> | number
    y?: IntFilter<"Pixelart"> | number
    color?: StringFilter<"Pixelart"> | string
  }, "id">

  export type PixelartOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    _count?: PixelartCountOrderByAggregateInput
    _avg?: PixelartAvgOrderByAggregateInput
    _max?: PixelartMaxOrderByAggregateInput
    _min?: PixelartMinOrderByAggregateInput
    _sum?: PixelartSumOrderByAggregateInput
  }

  export type PixelartScalarWhereWithAggregatesInput = {
    AND?: PixelartScalarWhereWithAggregatesInput | PixelartScalarWhereWithAggregatesInput[]
    OR?: PixelartScalarWhereWithAggregatesInput[]
    NOT?: PixelartScalarWhereWithAggregatesInput | PixelartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pixelart"> | number
    x?: IntWithAggregatesFilter<"Pixelart"> | number
    y?: IntWithAggregatesFilter<"Pixelart"> | number
    color?: StringWithAggregatesFilter<"Pixelart"> | string
  }

  export type PixelartCreateInput = {
    x: number
    y: number
    color: string
  }

  export type PixelartUncheckedCreateInput = {
    id?: number
    x: number
    y: number
    color: string
  }

  export type PixelartUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PixelartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PixelartCreateManyInput = {
    id?: number
    x: number
    y: number
    color: string
  }

  export type PixelartUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PixelartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
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

  export type PixelartCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
  }

  export type PixelartAvgOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type PixelartMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
  }

  export type PixelartMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
  }

  export type PixelartSumOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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