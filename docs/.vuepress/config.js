import dotenv from 'dotenv'

import { defaultTheme, viteBundler } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { containerPlugin } from '@vuepress/plugin-container'

dotenv.config()

const hostname = 'laravel-lang.com'

module.exports = {
    lang: 'en-US',
    title: 'Laravel Lang',
    description: 'Easily connect the necessary language packs to the application',

    head: [
        ['link', { rel: 'icon', href: `https://${ hostname }/images/logo.svg` }],
        ['meta', { name: 'twitter:image', content: `https://${ hostname }/images/social-logo.png` }]
    ],

    bundler: viteBundler(),

    theme: defaultTheme({
        hostname,
        base: '/',

        logo: `https://${ hostname }/images/logo.svg`,

        repo: 'https://github.com/Laravel-Lang/common',
        repoLabel: 'GitHub',
        docsRepo: 'https://github.com/Laravel-Lang/common',
        docsBranch: 'main',
        docsDir: 'docs',

        contributors: false,
        editLink: true,

        navbar: [
            { text: 'Quick Start', link: '/installation/index.md' },

            {
                text: 'Plugins',
                children: [
                    '/plugins/installation.md',
                    '/plugins/local.md',
                    '/plugins/community.md'
                ]
            },

            { text: 'Completion Status', link: '/statuses/index.md' }
        ],

        sidebarDepth: 1,

        sidebar: [
            {
                text: 'Prologue',
                collapsible: true,
                children: [
                    { text: 'Upgrade', link: '/installation/upgrade-guide/index.md' }
                ]
            },
            {
                text: 'Getting Started',
                collapsible: true,
                children: [
                    {
                        text: 'Installation',
                        link: '/installation/'
                    },
                    {
                        text: 'Compatibility',
                        collapsible: true,
                        link: '/installation/compatibility/index.md',
                        children: [
                            { text: 'Common', link: '/installation/compatibility/common.md' },
                            { text: 'Publisher', link: '/installation/compatibility/publisher.md' },
                            { text: 'Lang', link: '/installation/compatibility/lang.md' },
                            { text: 'Attributes', link: '/installation/compatibility/attributes.md' },
                            { text: 'HTTP Statuses', link: '/installation/compatibility/http-statuses.md' }
                        ]
                    },
                    {
                        text: 'JSON Fallback Hotfix',
                        link: '/installation/json-fallback-hotfix.md'
                    }
                ]
            },
            {
                text: 'Usage',
                collapsible: true,
                children: [
                    {
                        text: 'Basic Usage',
                        collapsible: true,
                        children: [
                            { text: 'General principles', link: '/usage/index.md' },
                            { text: 'Add locales', link: '/usage/add-locales.md' },
                            { text: 'Update locales', link: '/usage/update-locales.md' },
                            { text: 'Reset locales', link: '/usage/reset-locales.md' },
                            { text: 'Remove locales', link: '/usage/remove-locales.md' },
                            { text: 'Aliases', link: '/usage/aliases.md' }
                        ]
                    },
                    {
                        text: 'Features',
                        collapsible: true,
                        children: [
                            { text: 'Alignment', link: '/usage/features/alignment.md' },
                            { text: 'Facades', link: '/usage/features/facades.md' },
                            { text: 'Smart punctuation', link: '/usage/features/smart-punctuation.md' }
                        ]
                    }
                ]
            },
            {
                text: 'Plugins',
                children: [
                    '/plugins/installation.md',
                    '/plugins/local.md',
                    '/plugins/community.md'
                ]
            },
            {
                text: 'References',
                collapsible: true,
                children: [
                    { text: 'Referents', link: '/referents.md' },
                    { text: 'Code of Conduct', link: '/code-of-conduct.md' },
                    { text: 'Contributing', link: '/contributing.md' }
                ]
            },
            {
                text: 'License',
                link: '/license.md'
            }
        ]
    }),

    plugins: [
        docsearchPlugin({
            appId: process.env.VITE_APP_ALGOLIA_APP_ID,
            apiKey: process.env.VITE_APP_ALGOLIA_API_KEY,
            indexName: process.env.VITE_APP_ALGOLIA_INDEX_NAME
        }),

        containerPlugin({
            type: 'tip'
        })
    ]
}
