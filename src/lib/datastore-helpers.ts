/*
 * datastore-helpers.ts
 *
 * based on assertate-debug, based on assertate.
 *
 * Created by Dr. Maximillian Dornseif 2022-03-14
 * Copyright (c) 2022 Maximillian Dornseif
 */

import { Datastore, Key } from '@google-cloud/datastore';
// import { entity } from '@google-cloud/datastore/entity';
import { entity } from '@google-cloud/datastore/build/src/entity.js';
import { assert, getAssertionMessage } from 'assertate-debug';

export function isKey(value: unknown): value is Key {
  return Datastore.isKey(value);
}
export function isKeyComplete(value: unknown): value is Key {
  return Datastore.isKey(value) && entity?.isKeyComplete(value as never);
}

export function assertIsKey(
  value: unknown,
  variableName?: string,
  additionalMessage?: string
): asserts value is Key {
  assert(
    isKey(value),
    getAssertionMessage()(value, 'Key', variableName, additionalMessage)
  );
}
export function assertIsKeyComplete(
  value: unknown,
  variableName?: string,
  additionalMessage?: string
): asserts value is Key {
  assert(
    isKeyComplete(value),
    getAssertionMessage()(
      value,
      'Complete Key',
      variableName,
      additionalMessage
    )
  );
}
