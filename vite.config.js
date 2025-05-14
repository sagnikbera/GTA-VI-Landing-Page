import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // added for tailwind css

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  //tailwindcss() is added for tailwind css
})
