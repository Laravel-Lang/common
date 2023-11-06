import dotenv from 'dotenv'

import {defaultTheme, viteBundler} from 'vuepress'
import {docsearchPlugin} from '@vuepress/plugin-docsearch'
import {containerPlugin} from '@vuepress/plugin-container'
import {githubLinkifyPlugin} from 'vuepress-plugin-github-linkify'

dotenv.config()

const hostname = 'laravel-lang.com'

module.exports = {
    lang: 'en-US',
    title: 'Laravel Lang',
    description: 'Easily connect the necessary language packs to the application',

    head: [
        ['link', {rel: 'icon', href: `https://${hostname}/images/logo.svg`}],
        ['meta', {name: 'twitter:image', content: `https://${hostname}/images/social-logo.png`}]
    ],

    bundler: viteBundler(),

    theme: defaultTheme({
        hostname,
        base: '/',

        logo: `https://${hostname}/images/logo.svg`,

        repo: 'https://github.com/Laravel-Lang/common',
        repoLabel: 'GitHub',
        docsRepo: 'https://github.com/Laravel-Lang/common',
        docsBranch: 'main',
        docsDir: 'docs',

        contributors: false,
        editLink: true,

        navbar: [
            '/installation/index.md',

            {
                text: 'Plugins',
                children: [
                    '/plugins/installation.md',
                    '/plugins/official.md',
                    '/plugins/community.md'
                ]
            },

            '/statuses/index.md'
        ],

        sidebarDepth: 1,

        sidebar: [
            {
                text: 'Prologue',
                collapsible: true,
                children: [
                    {
                        text: 'Upgrade Guide',
                        children: [
                            {
                                text: 'Common',
                                children: [
                                    '/installation/upgrade-guide/common/5.md',
                                ]
                            },
                            {
                                text: 'Publisher',
                                children: [
                                    '/installation/upgrade-guide/publisher/15.md',
                                ]
                            },
                            '/installation/upgrade-guide/laravel-lang.md',
                            '/installation/upgrade-guide/caouecs.md',
                        ]
                    },

                    '/installation/compatibility/support-policy.md',
                    '/installation/about.md'
                ]
            },
            {
                text: 'Getting Started',
                children: [
                    '/installation/index.md',

                    {
                        text: 'Compatibility',
                        children: [
                            '/installation/compatibility/common.md',
                            '/installation/compatibility/publisher.md',
                            '/installation/compatibility/lang.md',
                            '/installation/compatibility/attributes.md',
                            '/installation/compatibility/http-statuses.md'
                        ]
                    },

                    '/installation/json-fallback-hotfix.md'
                ]
            },
            {
                text: 'Usage',
                children: [
                    {
                        text: 'Locales Management',
                        children: [
                            {
                                text: 'General principles',
                                link: '/usage/general-principles.md',
                                collapsible: true,
                                children: [
                                    '/usage/available-locales.md'
                                ]
                            },
                            '/usage/add-locales.md',
                            '/usage/update-locales.md',
                            '/usage/reset-locales.md',
                            '/usage/remove-locales.md',
                            '/usage/aliases.md'
                        ]
                    },
                    {
                        text: 'Features',
                        children: [
                            '/usage/features/alignment.md',
                            '/usage/features/facades.md',
                            '/usage/features/smart-punctuation.md'
                        ]
                    }
                ]
            },
            {
                text: 'Plugins',
                children: [
                    '/plugins/installation.md',
                    '/plugins/official.md',
                    '/plugins/community.md'
                ]
            },
            {
                text: 'References',
                collapsible: true,
                children: [
                    '/referents.md',
                    '/code-of-conduct.md',
                    '/contributing.md'
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
        }),

        githubLinkifyPlugin({
            repo: 'Laravel-Lang/common'
        })
    ]
}
