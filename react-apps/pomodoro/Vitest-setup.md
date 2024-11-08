```
npm install
  vitest
  @testing-library/react
  @testing-library/jest-dom
  jsdom
  global-jsdom
  --save-dev
```

https://testing-library.com/docs/react-testing-library/setup#using-without-jest

In package.json add test script command

```
 "scripts": {
    // ... options here
    "test":"vitest"
  }
```

If using Vite add types for Vitest 3 in `vite.config.ts` file

```
/// <reference types="vitest/config" />
```

Full config

```
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
```

Then add `test` property to config and add JSDom enviroment

```
export default defineConfig({
  // ... Specify options here.
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests.setup.ts'
  },
})
```

If not using Vite, create a `vitest.config.ts` file (https://vitest.dev/guide/#configuring-vitest)[Configure Vitest Documentation]
and add `test` property to config and add JSDom enviroment

```
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // ... Specify options here.
  test: {
    // ... Specify test options here.
    environment: 'jsdom'
  },
})
```
