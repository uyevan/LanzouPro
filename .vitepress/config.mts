import {defineConfig} from 'vitepress'
import timeline from "vitepress-markdown-timeline";

export default defineConfig({
    title: "Lanzou pro Api.",
    description: "Lanzou cloud files pro Api.",
    head: [['link', {rel: 'icon', href: 'logo.png'}]],
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {
                text: '生态', items: [
                    {text: 'UYCloud', link: 'https://uyclouds.com'},
                    {text: 'WowNote', link: 'https://note.jfkj.xyz'},
                    {text: 'LeYing', link: 'https://www.pgyer.com/leying'},
                    {text: 'UyClub', link: 'https://www.pgyer.com/uyclub'},
                    {text: 'HamBuk', link: 'https://hambuk.jfkj.xyz'}
                ]
            },
            {text: '关于', link: '/api-about'}
        ],

        sidebar: [
            {
                text: '参数类',
                collapsed: false,
                items: [
                    {text: 'V1类 (请求参数类)', link: '/api-dock-v1'},
                    {text: 'V2类 (路径参数类)', link: '/api-dock-v2'},
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/uyevan'}
        ],
        footer: {
            message: 'Copyright © 2024-present <a href="https://jfkj.xyz">Evan.</a>',
            copyright: 'Lanzou Pro Api . <a href="https://beian.miit.gov.cn/" target="_blank">陕ICP备2022014030号-2</a>.',
        },
        search: {
            provider: 'local'
        },
        outline: {
            level: 'deep',
            label: '本页大纲 🏷️'
        }
    },
    sitemap: {
        hostname: 'https://lanzou.uyclouds.com'
    },
    markdown: {
        config: (md) => {
            md.use(timeline);
        },
    },
})
