import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  rewrites: {
    'en/:rest*': ':rest*'
  },

  themeConfig: {
    logo: '/logo.png',

    search: {
      provider: 'local',
      options: {
        locales: {
          ...zhSearch()
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuxian-space/bookmarks.wuxian.space' }
    ],
  },

  sitemap: {
    hostname: 'https://bookmarks.wuxian.space'
  },

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Wuxian Bookmarks - To use browser bookmarks more comfortably.' }],
    ['meta', { property: 'og:site_name', content: 'Wuxian Bookmarks' }],
    ['meta', { property: 'og:url', content: 'https://bookmarks.wuxian.space' }],
  ],

  locales: {
    root: {
      label: 'English',
      ...en()
    },

    zh: {
      label: '简体中文',
      ...zh()
    },
  },

  vite: {
    base: '/',
    server: {
      port: 13834,
      host: true
    }
  }
})

function en() {
  return defineConfig({
    lang: 'en-US',
    title: "Wuxian Bookmarks",
    description: "More comfortable to use the browser bookmarking feature, which can also be automatically deployed as your navigation station.",

    themeConfig: {
      nav: [
        { text: 'Guide', link: '/guide/quick-start', activeMatch: '/guide/' },
        { text: 'Install', link: '/install' }
      ],

      sidebar: {
        '/guide/': {
          base: '/guide/',
          items: [
            { text: 'Quick Start', link: 'quick-start' },
            { text: 'Sync Github', link: 'sync-github' },
            { text: 'Auto Deploy', link: 'auto-deploy' }
          ]
        }
      },

      editLink: {
        pattern: 'https://github.com/wuxian-space/bookmarks.wuxian.space/edit/main/:path',
        text: 'Edit this page on GitHub'
      },

      footer: {
        message: 'Released under the MIT License.',
        copyright: `Copyright © ${new Date().getFullYear()} Yue Xiaoliang`
      }
    }
  })
}

function zh() {
  return defineConfig({
    lang: 'zh-Hans',
    title: "无限书签",
    description: '更舒适的使用浏览器书签功能，还可以自动部署为你的导航站。',
    themeConfig: {
      nav: [
        { text: '指南', link: '/zh/guide/quick-start', activeMatch: '/guide/' },
        { text: '安装', link: '/zh/install' }
      ],

      sidebar: {
        '/zh/guide/': {
          base: '/zh/guide/',
          items: [
            { text: '快速开始', link: 'quick-start' },
            { text: '同步 Github', link: 'sync-github' },
            { text: '自动部署', link: 'auto-deploy' }
          ]
        }
      },

      editLink: {
        pattern: 'https://github.com/wuxian-space/bookmarks.wuxian.space/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页面'
      },

      footer: {
        message: '基于 MIT 许可发布',
        copyright: `版权所有 © ${new Date().getFullYear()} 岳晓亮`
      },

      docFooter: {
        prev: '上一页',
        next: '下一页'
      },

      outline: {
        label: '页面导航'
      },

      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },

      langMenuLabel: '多语言',
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '菜单',
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式'
    }
  })
}
export function zhSearch(): DefaultTheme.AlgoliaSearchOptions['locales'] {
  return {
    zh: {
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }

    }
  }
}