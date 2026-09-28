import { describe, expect, it } from 'vitest';
import { template } from './index';

describe('template', () => {
  it('function return same number', () => {
    expect(template(1)).toBe(1);
  });
});
