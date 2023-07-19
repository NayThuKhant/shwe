import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "မြန်မာ့ရွှေ",
                short_name: "မြန်မာ့ရွှေ",
                icons: [
                    {
                        src: "/icons/512.jpeg",
                        sizes: "512x512",
                        type: "image/jpeg",
                        purpose: "any maskable"
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
