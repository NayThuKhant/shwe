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
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}']
            },
            manifest: {
                name: "မြန်မာ့ရွှေ",
                short_name: "မြန်မာ့ရွှေ",
                description: "မြန်မာပြည်တွင် ဝယ်ယူ/ရောင်းချ လိုသောရွှေ ကို ဈေးနှုန်းတွက်ချက်နိုင်မည့် အက်ပလီကေးရှင်း",
                icons: [
                    {
                        src: "/icons/pwa-64x64.png",
                        sizes: "64x64",
                        type: "image/png",
                        purpose: "any maskable"
                    },
                    {
                        src: "/icons/pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any maskable"
                    },
                    {
                        src: "/icons/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
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
