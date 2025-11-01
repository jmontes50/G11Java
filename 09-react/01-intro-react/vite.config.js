// configuración de vite el empaquetador y aunque no suele modificarse mucho a veces para testing o agregar plugins que modifiquen el empaquetado(build) hay que agregar alguna configuración
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
