// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/way-of-the-turtle',
  integrations: [
    starlight({
      title: '海龜交易法則(珍藏版)',
      description: '海龜計畫親歷者拆解順勢交易系統、資金管理與回測方法，教你建立紀律化交易心法。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        { label: '引言：幸運的一天', slug: 'unit00' },
        {
          label: '交易心理與海龜思維',
          items: [
            { label: '玩風險遊戲的交易者', slug: 'unit01' },
            { label: '揭密海龜思維', slug: 'unit02' },
            { label: '海龜訓練課程', slug: 'unit03' },
            { label: '像海龜一樣思考', slug: 'unit04' },
            { label: '發現系統優勢', slug: 'unit05' },
          ],
        },
        {
          label: '打造你的交易系統',
          items: [
            { label: '尋找交易時機', slug: 'unit06' },
            { label: '如何衡量風險', slug: 'unit07' },
            { label: '風險與資金管理', slug: 'unit08' },
            { label: '海龜式積木', slug: 'unit09' },
            { label: '海龜式交易系統', slug: 'unit10' },
          ],
        },
        {
          label: '驗證系統與克服心魔',
          items: [
            { label: '回測的謊言', slug: 'unit11' },
            { label: '回測的統計學基礎', slug: 'unit12' },
            { label: '防衛系統', slug: 'unit13' },
            { label: '掌控自己的心魔', slug: 'unit14' },
          ],
        },
        {
          label: '尾聲',
          items: [
            { label: '尾聲：萬事俱備', slug: 'unit15' },
          ],
        },
        {
          label: '附錄',
          items: [
            { label: '原版海龜法則(上)：完整交易系統與市場選擇', slug: 'unit16' },
            { label: '原版海龜法則(下)：部位規模、入市、停損與出場', slug: 'unit17' },
          ],
        },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
