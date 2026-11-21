import assert from 'node:assert/strict';
import { fringeSpacing } from './app.mjs';
assert.equal(fringeSpacing(12,0),Infinity);
assert.ok(Math.abs(fringeSpacing(12,60)-12)<1e-10);
assert.ok(fringeSpacing(12,5)>fringeSpacing(12,20));
