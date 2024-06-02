import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "Lanzou pro Api.",
    description: "Lanzou cloud files pro Api.",
    head: [['link', {rel: 'icon', href: 'image.png'}]],
    themeConfig: {
        nav: [
            {text: 'Lanzou Pro', link: '/'},
            {text: '关于我们', link: '/api-about'}
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/uyevan'}
        ],
        footer: {
            message: 'You can follow my project the <a href="https://uyclouds.com">UY Cloud</a>.',
            copyright: 'Copyright © 2024-present <a href="https://jfkj.xyz">King Evan.</a>'
        }
    }
})
