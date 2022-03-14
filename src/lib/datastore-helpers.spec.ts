import { Key } from '@google-cloud/datastore';
import test from 'ava';

import {
  assertIsKey,
  assertIsKeyComplete,
  isKey,
  isKeyComplete,
} from './datastore-helpers';

test('isKey', (t) => {
  t.is(isKey(2), false);
  t.is(isKey({}), false);
  t.is(isKey(new Key({ path: ['a', 'b'] })), true);
});
test('isKeyComplete', (t) => {
  t.is(isKeyComplete(2), false);
  t.is(isKeyComplete(new Key({ path: ['a', 'b'] })), true);
  t.is(isKeyComplete(new Key({ path: ['a'] })), false);
});

test('assertIsKey', (t) => {
  t.notThrows(() => assertIsKey(new Key({ path: ['a', 'b'] })));
  t.notThrows(() => assertIsKey(new Key({ path: ['a', 'b', 'c'] })));
  t.throws(() => assertIsKey(2));
});

test('assertIsKeyComplete', (t) => {
  t.throws(() => assertIsKeyComplete(2));
  t.throws(() => assertIsKeyComplete(new Key({ path: ['a'] })));
  t.notThrows(() => assertIsKeyComplete(new Key({ path: ['a', 'b'] })));
  t.throws(() => assertIsKeyComplete(new Key({ path: ['a', 'b', 'c'] })));
});
