```bash
pnpm install
pnpm build
pnpm test:pass # This test will pass because mocked implementation is used
pnpm test:fail # This test will fail because real implementation is used
```
