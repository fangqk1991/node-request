import { CommonAPI } from './CommonAPI'

export interface RequestObserver {
  onError(error: Error, commonApi: CommonAPI): void | Promise<void>
  onRequestStart?(client: any, commonApi?: CommonAPI): void | Promise<void>
  onRequestDone?(client: any, commonApi?: CommonAPI): void | Promise<void>
}
