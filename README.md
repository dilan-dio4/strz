# `strz` – _Very_ Strongly Typed String Functions

- 0️⃣ No dependencies
- 🌲 Tree shakable
- 📦 Small
- 5️⃣ Typescript 5
- 📝 Strongly typed

### Why?

In projects that encourage strong typing, the standard library requires manually casting to match function parameter signatures. `strz` brings the power of strong typing to the standard library.

### Example

```ts
import { split, suffix } from 'strz'

const str = "The quick brown fox jumps over the lazy dog"

const splitStr = split(str, " ") // splitStr is of type ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
const suffixed = suffix(str, "!") // suffixed is of type "The quick brown fox jumps over the lazy dog!"
```

### Installation

```bash
npm install strz
```

### Usage

```ts
import {
  charAt,
  toLowerCase,
  toUpperCase,
  toArray,
  slice,
  uncapitalize,
  capitalize,
  prefix,
  suffix,
  split,
  trim,
  trimStart,
  trimEnd,
  replaceAll,
  replace,
  length,
} from 'strz'

const str = "The quick brown fox jumps over the lazy dog"

// Before
const char = str.charAt(0) // char is of type string
// After
const char = charAt(str, 0) // char is of type "T"

// Before
const replaced = str.replaceAll(" ", "_" ) // replaced is of type string
// After
const replaced = replaceAll(str, " ", "_" ) // replaced is of type "The_quick_brown_fox_jumps_over_the_lazy_dog"

// And so on...
```

### API

- `charAt` ✅
- `toLowerCase` ✅
- `toUpperCase` ✅
- `toArray` ✅
- `slice` ✅
  - This is a partial implementation of `slice` and does not support negative indices
- `uncapitalize` ✅
- `capitalize` ✅
- `prefix` ✅
- `suffix` ✅
- `split` ✅
- `trim` ✅
- `trimStart` ✅
- `trimEnd` ✅
- `replaceAll` ✅
  - This is a partial implementation of `replaceAll` and does not support regex
- `replace` ✅
  - This is a partial implementation of `replace` and does not support regex
- `length` ✅
