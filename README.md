# xxformatter

> Simple universal string formatter using `"X"` pattern for any character.

A tiny, fast, and framework-agnostic function to format strings like phone numbers, credit cards, car immatriculation, license plates or anything using a flexible `"X"`-based mask.

---

## ✨ Installation

```bash
npm install xxformatter
# or
yarn add xxformatter
```

---

## 🚀 Usage

```ts
import { xxFormat } from 'xxformatter';

xxFormat("0612345678", "XX XX XX XX XX");
// => "06 12 34 56 78"

xxFormat("0612345678", "XX.XX.XX.XX.XX");
// => "06.12.34.56.78"

xxFormat("FR76567890123456", "XXXX-XXXX-XXXX-XXXX");
// => "FR76-5678-9012-3456"

xxFormat("BP328NT", "XX-XXX-XX");
// => "BP-328-NT"
```

---

## 🧩 API

```ts
xxFormat(
  input: string,
  mask: string,
  options?: {
    fillMissing?: boolean;   // fill empty positions
    fillChar?: string;       // default: "X"
  }
): string
```

### Mask rule:

| Symbol | Meaning              |
|--------|----------------------|
| `X`    | Any character        |

---

## 🧠 Example with padding

```ts
xxFormat("ABCD", "XX-XX-XX");
// => "AB-CD"

xxFormat("123", "XX-XX-XX", { fillMissing: true });
// => "12-3X-XX"
```

---

## ✅ Works with

- ✅ JavaScript (ESM / CommonJS)
- ✅ TypeScript (types included)
- ✅ Frameworks: React, Vue, Angular...
- ✅ Node.js & browsers

## 📄 License

MIT — © Manda Randriampanana
