import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "Lanzou pro Api.",
    description: "Lanzou cloud files pro Api.",
    head: [['link', {rel: 'icon', href: 'image.png'}]],
    themeConfig: {
        nav: [
            {text: 'Lanzou Pro', link: '/'},
            {text: '关于我', link: '/api-about'}
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
            message: 'You can follow my project the <a href="https://uyclouds.com">UY Cloud</a>.',
            copyright: 'Copyright © 2024-present <a href="https://jfkj.xyz">King Evan.</a>'
        },
        search: {
            provider: 'local'
        }
    }
})
