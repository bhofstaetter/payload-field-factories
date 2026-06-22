import {defineConfig} from 'vitest/config';

export default defineConfig({
    resolve: {
        tsconfigPaths: true,
    },
    test: {
        globals: true,
        clearMocks: true,
        mockReset: true,
        restoreMocks: true,
        environment: 'node',
        include: ['./test/**/*.test.ts'],
    },
});
