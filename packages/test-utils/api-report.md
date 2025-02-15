## API Report File for "@backstage/test-utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ComponentType } from 'react';
import { ErrorApi } from '@backstage/core-plugin-api';
import { ErrorContext } from '@backstage/core-plugin-api';
import { ExternalRouteRef } from '@backstage/core-plugin-api';
import { Observable } from '@backstage/core-plugin-api';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RenderResult } from '@testing-library/react';
import { RouteRef } from '@backstage/core-plugin-api';
import { StorageApi } from '@backstage/core-plugin-api';
import { StorageValueChange } from '@backstage/core-plugin-api';

// Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
// Warning: (ae-missing-release-tag) "mockBreakpoint" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function mockBreakpoint({
  matches,
}: {
  matches?: boolean | undefined;
}): void;

// Warning: (ae-missing-release-tag) "MockErrorApi" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class MockErrorApi implements ErrorApi {
  // Warning: (ae-forgotten-export) The symbol "Options" needs to be exported by the entry point index.d.ts
  constructor(options?: Options);
  // (undocumented)
  error$(): Observable<{
    error: Error;
    context?: ErrorContext;
  }>;
  // Warning: (ae-forgotten-export) The symbol "ErrorWithContext" needs to be exported by the entry point index.d.ts
  //
  // (undocumented)
  getErrors(): ErrorWithContext[];
  // (undocumented)
  post(error: Error, context?: ErrorContext): void;
  // (undocumented)
  waitForError(pattern: RegExp, timeoutMs?: number): Promise<ErrorWithContext>;
}

// Warning: (ae-missing-release-tag) "MockStorageApi" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class MockStorageApi implements StorageApi {
  // (undocumented)
  static create(data?: MockStorageBucket): MockStorageApi;
  // (undocumented)
  forBucket(name: string): StorageApi;
  // (undocumented)
  get<T>(key: string): T | undefined;
  // (undocumented)
  observe$<T>(key: string): Observable<StorageValueChange<T>>;
  // (undocumented)
  remove(key: string): Promise<void>;
  // (undocumented)
  set<T>(key: string, data: T): Promise<void>;
}

// Warning: (ae-missing-release-tag) "MockStorageBucket" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type MockStorageBucket = {
  [key: string]: any;
};

// Warning: (ae-missing-release-tag) "msw" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const msw: {
  setupDefaultHandlers: (worker: {
    listen: (t: any) => void;
    close: () => void;
    resetHandlers: () => void;
  }) => void;
};

// Warning: (ae-forgotten-export) The symbol "TestAppOptions" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "renderInTestApp" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function renderInTestApp(
  Component: ComponentType | ReactNode,
  options?: TestAppOptions,
): Promise<RenderResult>;

// Warning: (ae-missing-release-tag) "wrapInTestApp" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function wrapInTestApp(
  Component: ComponentType | ReactNode,
  options?: TestAppOptions,
): ReactElement;

export * from '@backstage/test-utils-core';
```
