import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'assets/[name][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/styles/variables.scss";`
            }
        }
    }
});