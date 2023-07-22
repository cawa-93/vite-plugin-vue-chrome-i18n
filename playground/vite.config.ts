import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {main} from "../src";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      main(),
  ],
})
