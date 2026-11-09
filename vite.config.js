import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';
// Repo named username.github.io -> base '/'. Any other repo name -> '/repo-name/'
export default defineConfig({plugins:[react()],base:'/'});
