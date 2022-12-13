import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { readdirSync } from 'fs'
import { resolve, join } from 'path'

import baseTheme from './src/styles/baseTheme.json';

const absolutePathAliases: { [key: string]: string } = {};
// Root resources folder
const srcPath = resolve('./src/');
// Ajust the regex here to include .vue, .js, .jsx, etc.. files from the resources/ folder
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) => dirent.name.replace(/(\.ts){1}(x?)/, ''));

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = join(srcPath, directory);
});

console.warn('absolutePathAliases', JSON.stringify(absolutePathAliases, null, 2))

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // ...absolutePathAliases
    }
  },
  build: {
    rollupOptions: {
      input: '/main.tsx'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // Color Palettes
          '@blue-1': baseTheme.colorPalettes.daybreakBlue['blue-1'],
          '@blue-2': baseTheme.colorPalettes.daybreakBlue['blue-2'],
          '@blue-3': baseTheme.colorPalettes.daybreakBlue['blue-3'],
          '@blue-4': baseTheme.colorPalettes.daybreakBlue['blue-4'],
          '@blue-5': baseTheme.colorPalettes.daybreakBlue['blue-5'],
          '@blue-6': baseTheme.colorPalettes.daybreakBlue['blue-6'],
          '@blue-7': baseTheme.colorPalettes.daybreakBlue['blue-7'],
          '@blue-8': baseTheme.colorPalettes.daybreakBlue['blue-8'],
          '@blue-9': baseTheme.colorPalettes.daybreakBlue['blue-9'],
          '@blue-10': baseTheme.colorPalettes.daybreakBlue['blue-10'],
          '@marin-1': baseTheme.colorPalettes.marin['marin-1'],
          '@marin-2': baseTheme.colorPalettes.marin['marin-2'],
          '@marin-3': baseTheme.colorPalettes.marin['marin-3'],
          '@marin-4': baseTheme.colorPalettes.marin['marin-4'],
          '@marin-5': baseTheme.colorPalettes.marin['marin-5'],
          '@marin-6': baseTheme.colorPalettes.marin['marin-6'],
          '@marin-7': baseTheme.colorPalettes.marin['marin-7'],
          '@marin-8': baseTheme.colorPalettes.marin['marin-8'],
          '@marin-9': baseTheme.colorPalettes.marin['marin-9'],
          '@marin-10': baseTheme.colorPalettes.marin['marin-10'],
          '@gray-1': baseTheme.colorPalettes.gray['gray-1'],
          '@gray-2': baseTheme.colorPalettes.gray['gray-2'],
          '@gray-3': baseTheme.colorPalettes.gray['gray-3'],
          '@gray-4': baseTheme.colorPalettes.gray['gray-4'],
          '@gray-5': baseTheme.colorPalettes.gray['gray-5'],
          '@gray-6': baseTheme.colorPalettes.gray['gray-6'],
          '@gray-7': baseTheme.colorPalettes.gray['gray-7'],
          '@gray-8': baseTheme.colorPalettes.gray['gray-8'],
          '@gray-9': baseTheme.colorPalettes.gray['gray-9'],
          '@gray-10': baseTheme.colorPalettes.gray['gray-10'],

          // General
          '@primary-color': baseTheme.colorPalettes.daybreakBlue['blue-4'],
          '@font-family': baseTheme.fontName,
          '@text-selection-bg': baseTheme.main._antD_selectedTextBackground,
          '@heading-color': baseTheme.main._antD_heading,
          '@label-color': baseTheme.main._antD_textColor,
          '@text-color': baseTheme.main._antD_textColor,
          '@tooltip-bg': baseTheme.tooltip._antD_tooltipBackground,
          '@input-placeholder-color': baseTheme.main._antD_placeholder,

          // Navigation
          '@layout-header-background': baseTheme.header._antD_background,
          '@layout-trigger-background': baseTheme.sideBar._antD_background,
          '@layout-trigger-color': baseTheme.sideBar._antD_triggerColor,
          '@layout-header-color': baseTheme.header._antD_textColor,
          '@layout-sider-background': baseTheme.sideBar._antD_background,
          '@menu-item-color': baseTheme.sideBar._antD_menuItemColor,
          '@menu-inline-submenu-bg': baseTheme.sideBar._antD_background,
          '@layout-footer-background': baseTheme.footer._antD_background,

          // Main Content
          '@layout-body-background': baseTheme.main._antD_background,
          '@btn-border-radius-base': baseTheme.size.radius.md,
          '@btn-border-radius-sm': baseTheme.size.radius.md,
          '@typography-title-font-weight': baseTheme.size.weight.semiBold,

          // Button, Radio
          '@radio-button-color': baseTheme.main.textColor,
          '@btn-danger-bg': baseTheme.colorPalettes.red['red-5'],
          '@btn-danger-color': baseTheme.colorPalettes.gray['gray-1'],
          '@btn-danger-border': baseTheme.colorPalettes.red['red-5'],

          // Card
          '@card-radius': baseTheme.size.radius.md,

          // Modal
          '@modal-mask-bg': baseTheme.main._antD_modalMaskBackground,
          '@modal-footer-bg': baseTheme.colorPalettes.gray['gray-2'],
          '@modal-header-border-style': 'none',
          '@modal-header-padding-vertical': baseTheme.size.space.small,
          '@modal-header-padding-horizontal': baseTheme.size.space.small,
          '@modal-header-close-size': baseTheme.size.space.xxlarge,
          '@modal-footer-padding-vertical': baseTheme.size.space.xsmall,
          '@modal-footer-padding-horizontal': baseTheme.size.space.small,
          '@modal-body-padding': `0px ${baseTheme.size.space.small} ${baseTheme.size.space.small}`,
          '@modal-confirm-body-padding': `${baseTheme.size.space.small}`,

          // Table
          '@table-header-bg': baseTheme.main.table._antD_headerBackground,
          '@table-header-color': baseTheme.main.table._antD_headerColor,
          '@table-border-color': baseTheme.main.table._antD_border,
          '@table-border-radius-base': baseTheme.main.table._antD_borderRadius,

          // Collapse
          '@collapse-header-bg': baseTheme.main.collapse._antD_headerBackground,
          '@collapse-content-bg': baseTheme.main.collapse._antD_background,
          '@collapse-panel-border-radius': baseTheme.size.radius.lg,
          '@collapse-header-padding': `${baseTheme.size.space.small}`,
          '@collapse-content-padding': `${baseTheme.size.space.xxsmall} ${baseTheme.size.space.small} ${baseTheme.size.space.small}`,

          // Slider
          '@slider-track-background-color': baseTheme.colorPalettes.daybreakBlue['blue-4'],
          '@slider-track-background-color-hover': baseTheme.colorPalettes.daybreakBlue['blue-4'],
          '@slider-rail-background-color': baseTheme.colorPalettes.gray['gray-5'],
          '@slider-rail-background-color-hover': baseTheme.colorPalettes.gray['gray-5'],
          '@slider-handle-background-color': baseTheme.colorPalettes.gray['gray-1'],
          '@slider-handle-color': baseTheme.colorPalettes.daybreakBlue['blue-4'],
          '@slider-handle-color-hover': baseTheme.colorPalettes.daybreakBlue['blue-4'],

          // Breakpoints
          '@screen-xs': baseTheme.breakpoints.xs,
          '@screen-sm': baseTheme.breakpoints.sm,
          '@screen-md': baseTheme.breakpoints.md,
          '@screen-lg': baseTheme.breakpoints.lg,
          '@screen-xl': baseTheme.breakpoints.xl,
          '@screen-xxl': baseTheme.breakpoints.xxl,
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [react()],
})
