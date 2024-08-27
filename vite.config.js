import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
                    if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
                        return 'assets/images/[name][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'public/images/*',
                    dest: 'assets/images'
                }
            ]
        })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/styles/variables.scss";`
            }
        }
    }
});