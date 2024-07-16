import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/it-docs/",
  title: "IT 工具园",
  head: [['link', {rel: 'icon', href: '/it-docs/动图.gif'}]],
  description: "记录收集IT技术相关知识",
  themeConfig: {
    logo: {
      src: "/动图.gif",
      style: {
        borderRadius: "50%"
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '学习文档', link: '/学习文档/文档链接总结/学习资料' },
      {
        text: '工具软件',
        items: [
          {
            text: "编程工具",
            items: [
              {text: "VSCODE", link: "/编程软件/vscode/基础知识"},
              {text: "Chrome", link: "/编程软件/chrome/基础知识"}
            ],
          }
        ]
      },
      {
        text: "NPM包",
        items: [
          {text: "Fast-form-ui", link: "/npm-package/fast-form-ui"}
        ]

      },
      {
        text: "在线工具",
        items: [
          {text: "变量命名", link: "https://unbug.github.io/codelf/"},
          {text: "在线图标库 | iconFont", link: "https://www.iconfont.cn/?spm=a313x.manage_type_myprojects.i3.2.76273a81S0EnHT"},
          {text: "在线正则测试 | 菜鸟工具", link: "https://www.jyshare.com/front-end/854/"},
          {text: "JSON格式化工具", link: "https://www.bejson.com/jsonviewernew/"},
          {text: "Can I Use", link: "https://caniuse.com/"},
          {text: "图片文件在线编辑", link: "https://www.iloveimg.com/zh-cn"},
          {text: "PDF文件在线编辑", link: "https://www.ilovepdf.com/zh-cn"},
          {text: "Chrome插件安装 | 插件小屋", link: "https://www.chajianxw.com/"},
        ]
      },
      { text: '常见问题', link: '/常见问题/总结' }
    ],

    search: {
      provider: "local"
    },

    outline: {
      level: "deep",
      label: "页面导航"
    },

    sidebar: {
      "/编程软件/vscode/": [
        {
          text: "基础知识",
          link: "/编程软件/vscode/基础知识"
        }, {
          text: "常用插件",
          link: "/编程软件/vscode/常用插件"
        }, {
          text: "系统设置",
          link: "/编程软件/vscode/系统设置"
        }
      ],
      "/编程软件/chrome/": [
        {
          text: "基础知识2",
          link: "/编程软件/chrome/基础知识"
        }
      ],
      "/常见问题/": [
        {
          text: "总结",
          link: "/常见问题/总结"
        }
      ],
      "/学习文档/文档链接总结/": [
        {
          text: "文档链接总结",
          link: "/学习文档/文档链接总结/学习资料",
        }
      ],
      "/npm-package/": [
        {
          text: "Fast-form-ui",
          link: "/npm-package/fast-form-ui"
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 32 32" width="32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#c71d23" r="16"/><path d="m24.0987698 14.2225144h-9.0863697c-.4362899.000207-.7900048.3538292-.790326.7901191l-.0005173 1.9752185c-.0003277.4363707.353328.7902117.7896987.790326.0000712 0 .0001424 0 .0002135-.0002135l5.5317648-.0000461c.4363708-.0000102.7901221.3537352.7901257.790106 0 .0000022 0 .0000044-.0000066.0000066v.1975077.1975318c0 1.3091122-1.0612451 2.3703573-2.3703573 2.3703573h-7.5067195c-.4363081-.0000218-.790009-.353713-.7900429-.7900211l-.0002069-7.5059917c-.0001014-1.3091122 1.0611145-2.3703865 2.3702267-2.3704226.0000217 0 .0000435 0 .0000653.0000653h11.0602463c.4361793-.0004902.7898484-.35394.7906091-.79011894l.0012251-1.97521881c.0007606-.43637034-.3527683-.79033806-.7891389-.79060871-.0001634-.0000001-.0003268-.00000015-.0004901.00048976h-11.0617654c-3.27278051 0-5.92589329 2.65311278-5.92589329 5.9258933v11.0612755c0 .4363707.35374837.7901191.7901191.7901191h11.65447149c2.9454379 0 5.3331872-2.3877493 5.3331872-5.3331872v-4.5430682c0-.4363707-.3537484-.7901191-.7901191-.7901191z" fill="#fff"/></g></svg>' },
        link: 'https://gitee.com/xj_page'
      }
    ]
  }
})
