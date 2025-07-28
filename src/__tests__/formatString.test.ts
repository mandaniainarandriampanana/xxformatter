import { xxFormat } from 'src/formatString';
import { describe, expect, it } from 'vitest';

describe('xxFormat', () => {
  it('formats a phone number', () => {
    expect(xxFormat('0612345678', 'XX XX XX XX XX')).toBe('06 12 34 56 78');
  });

  it('formats a phone number', () => {
    expect(xxFormat('0612345678', 'XX.XX.XX.XX.XX')).toBe('06.12.34.56.78');
  });

  it('formats credit card', () => {
    expect(xxFormat('1234567812345678', 'XXXX-XXXX-XXXX-XXXX')).toBe('1234-5678-1234-5678');
  });

  it('formats credit card and fill missing', () => {
    expect(xxFormat('1234567812345678', 'XXXX-XXXX-XXXX-XXXX-XXXX', { fillMissing: true})).toBe('1234-5678-1234-5678-XXXX');
  });

  it('formats french car immatriculation', () => {
    expect(xxFormat('BP357NE', 'XX-XXX-XX')).toBe('BP-357-NE');
  });
});
