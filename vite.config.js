import {
	defineConfig,
	loadEnv
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import inject from '@rollup/plugin-inject'
// https://vitejs.dev/config/
export default ({
	mode
}) => {
	// 是否构建库版本https://blog.csdn.net/qq_34461600/article/details/126048096
	let build = {}
	const isNpm = loadEnv(mode, process.cwd()).VITE_NODE_ENV === "npm"
	if (isNpm) {
		build = {
			minify: true,
			outDir: 'dist',
			sourcemap: true,
			//cssCodeSplit: true,
			lib: {
				// Could also be a dictionary or array of multiple entry points
				entry: path.resolve(__dirname, 'packages/webppt/js/index.js'),
				name: 'Webppt',
				formats: ['es', 'umd', 'iife'],
				fileName: format => `index.${format === 'iife' ? 'min' : format}.js`
			},
			rollupOptions: { //https://cn.vitejs.dev/guide/build.html#library-mode
				// 确保外部化处理那些你不想打包进库的依赖
				external: ['vue', 'svg'],
				output: {
					// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
					globals: {
						vue: 'Vue',
					},
				}
			}
		}
	}
	return defineConfig({
		publicDir: isNpm ? false : 'public',
		plugins: [vue()],
		resolve: {
			alias: {
				'@packages': path.resolve(__dirname, "packages"),
				"@": path.resolve(__dirname, "src"),
			}
		},
		css: {
			preprocessorOptions: {
				sass: {
					javascriptEnabled: true,
				},
			}
		},
		build
	})
}
