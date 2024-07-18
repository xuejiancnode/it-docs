<script setup>
  import LinkIcon from "../components/Vue/LinkIcon.vue"
</script>


# Jodit Editor

## 介绍

<LinkIcon link="https://xdsoft.net/jodit/"/>
Jodit Editor 是一个开源的富文本编辑器，使用纯TypeScript编写。

官网 Demo：  https://xdsoft.net/jodit/  
文档 | 英文：  https://xdsoft.net/jodit/docs/



## 安装

### 使用包管理器

```sh
# NPM
$ npm install jodit --save

# Yarn 
$ yarn add jodit --save

# pnpm
$ pnpm install jodit --save
```


### CDN

```javascript
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/jodit/4.0.1/es2021/jodit.min.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jodit/4.0.1/es2021/jodit.min.js"></script>
```


### unpkg

```javascript
<link
  rel="stylesheet"
  href="https://unpkg.com/jodit@4.0.1/es2021/jodit.min.css"
/>
<script src="https://unpkg.com/jodit@4.0.1/es2021/jodit.min.js"></script>
```



## 使用

### Vue3

#### 快速使用

```vue
<template>
  <div>
    <textarea id="editor"></textarea>
  </div>  
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Jodit } from 'jodit';
import 'jodit/es2021/jodit.min.css';

let jodit: Jodit;

onMounted(() => {
  jodit = Jodit.make('#editor', {});
})
</script>
```


#### 配置编辑器语言

编辑器默认的语言是 `en`，目前编辑器支持的语言包括：  
`ar` `cs_cz` `de` `en` `es` `fa` `fi` `fr` `he` `hu` `id` `it` `ja` `ko` `mn` `nl` `pl` `pt` `ru` `tr` `uz` `zh_cn` `zh_tw`。

```ts
onMounted(() => {
  jodit = Jodit.make('#editor', {
    language: 'zh_cn',
  });
})
```

**自定义**

这里以中文简体为例：
```ts
// zh_CN.ts
export default {
	'Type something': '自定义placeholder',
	Advanced: '高级',
	'About Jodit': '关于Jodit',
	'Jodit Editor': 'Jodit Editor',
  // 更多配置项参考源码文件: node_modules/jodit/esm/langs/zh_cn.d.ts
};
```

```vue
<script setup lang="ts">
import { onMounted } from "vue";
import { Jodit } from 'jodit';
// 导入自定义语言配置项
import zh_CN from "@/config/i18n/zh_CN"
import 'jodit/es2021/jodit.min.css';

let jodit: Jodit;

onMounted(() => {
  jodit = Jodit.make('#editor', {
    language: 'zh_CN',  // 使用自定义语言
    i18n: {
      'zh_CN': zhCN // 注册自定义语言
    },
  });
})
</script>
```


#### 集成多个插件

Jodit Editor 默认仅支持部分功能，想要支持更多功能需要导入相应的 Plugins。

**打印功能**

```vue
<script setup lang="ts">
// 导入打印功能插件
import 'jodit/esm/plugins/print/print';
</script>
```
![Jodit新增打印功能](../assets/Jodit%E6%96%B0%E5%A2%9E%E6%89%93%E5%8D%B0%E5%8A%9F%E8%83%BD.png)


**缩进功能**

```vue
<script setup lang="ts">
// 导入缩进功能插件
import 'jodit/esm/plugins/indent/indent';
</script>
```
![Jodit新增调整缩进功能](../assets/Jodit%E6%96%B0%E5%A2%9E%E8%B0%83%E6%95%B4%E7%BC%A9%E8%BF%9B%E5%8A%9F%E8%83%BD.png)


<details>
  <summary>点击查看更多功能支持</summary>
 
`import 'jodit/esm/plugins/add-new-line/add-new-line';`  
`import 'jodit/esm/plugins/backspace/backspace';`  
`import 'jodit/esm/plugins/delete/delete';`  
`import 'jodit/esm/plugins/bold/bold';`  
`import 'jodit/esm/plugins/class-span/class-span';`  
`import 'jodit/esm/plugins/clean-html/clean-html';`  
`import 'jodit/esm/plugins/clipboard/clipboard';`  
`import 'jodit/esm/plugins/color/color';`  
`import 'jodit/esm/plugins/copy-format/copy-format';`  
`import 'jodit/esm/plugins/drag-and-drop/drag-and-drop';`  
`import 'jodit/esm/plugins/drag-and-drop-element/drag-and-drop-element';`  
`import 'jodit/esm/plugins/enter/enter';`  
`import 'jodit/esm/plugins/file/file';`  
`import 'jodit/esm/plugins/focus/focus';`  
`import 'jodit/esm/plugins/font/font';`  
`import 'jodit/esm/plugins/format-block/format-block';`  
`import 'jodit/esm/plugins/fullsize/fullsize';`  
`import 'jodit/esm/plugins/hotkeys/hotkeys';`  
`import 'jodit/esm/plugins/hr/hr';`  
`import 'jodit/esm/plugins/iframe/iframe';`  
`import 'jodit/esm/plugins/image/image';`  
`import 'jodit/esm/plugins/image-processor/image-processor';`  
`import 'jodit/esm/plugins/image-properties/image-properties';`  
`import 'jodit/esm/plugins/inline-popup/inline-popup';`  
`import 'jodit/esm/plugins/justify/justify';`  
`import 'jodit/esm/plugins/key-arrow-outside/key-arrow-outside';`  
`import 'jodit/esm/plugins/limit/limit';`  
`import 'jodit/esm/plugins/line-height/line-height';`  
`import 'jodit/esm/plugins/link/link';`  
`import 'jodit/esm/plugins/media/media';`  
`import 'jodit/esm/plugins/ordered-list/ordered-list';`  
`import 'jodit/esm/plugins/paste/paste';`  
`import 'jodit/esm/plugins/paste-from-word/paste-from-word';`  
`import 'jodit/esm/plugins/paste-storage/paste-storage';`  
`import 'jodit/esm/plugins/placeholder/placeholder';`  
`import 'jodit/esm/plugins/powered-by-jodit/powered-by-jodit';`  
`import 'jodit/esm/plugins/preview/preview';`  
`import 'jodit/esm/plugins/print/print';`  
`import 'jodit/esm/plugins/redo-undo/redo-undo';`  
`import 'jodit/esm/plugins/resize-cells/resize-cells';`  
`import 'jodit/esm/plugins/resize-handler/resize-handler';`  
`import 'jodit/esm/plugins/resizer/resizer';`  
`import 'jodit/esm/plugins/search/search';`  
`import 'jodit/esm/plugins/select/select';`  
`import 'jodit/esm/plugins/select-cells/select-cells';`  
`import 'jodit/esm/plugins/size/size';`  
`import 'jodit/esm/plugins/source/source';`  
`import 'jodit/esm/plugins/spellcheck/spellcheck';`  
`import 'jodit/esm/plugins/stat/stat';`  
`import 'jodit/esm/plugins/sticky/sticky';`  
`import 'jodit/esm/plugins/symbols/symbols';`  
`import 'jodit/esm/plugins/ai-assistant/ai-assistant';`  
`import 'jodit/esm/plugins/tab/tab';`  
`import 'jodit/esm/plugins/table/table';`  
`import 'jodit/esm/plugins/table-keyboard-navigation/table-keyboard-navigation';`  
`import 'jodit/esm/plugins/video/video';`  
`import 'jodit/esm/plugins/wrap-nodes/wrap-nodes';`  
`import 'jodit/esm/plugins/dtd/dtd';`  
`import 'jodit/esm/plugins/xpath/xpath';`  
</details>


#### 常用API

`Jodit.make(selector: string, options)` 初始化编辑器  

**实例方法**  

`jodit.setEditorValue(value: string)` 设置编辑器内容  
`jodit.history` 读取编辑器操作历史记录  
`jodit.execCommand(commandName: string)`  收到调用编辑器指令

更多API参考官方文档 <LinkIcon link="https://xdsoft.net/jodit/docs/"/>  
源码位置  `node_modules/jodit/esm/jodit.js`



### 其他问题


#### 隐藏版权信息

```ts
Jodit.make('#editor', {
  hidePoweredByJodit: true,
})
```


#### 隐藏单词统计

```ts
Jodit.make('#editor', {
  showWordsCounter: false,
})
```



#### 表格

表格功能缺失，无法删除。需要导入两个插件：

`import 'jodit/esm/plugins/select/select';`  
`import 'jodit/esm/plugins/select-cells/select-cells';`  


#### 调整toolbar位置

按钮对应名称可以在官网查看 <LinkIcon link="https://xdsoft.net/jodit/play.html?currentTab=Buttons" />

<img style="height: 300px;" object-fit="contain" src="../assets/Jodit%E6%8C%89%E9%92%AE%E5%90%8D%E7%A7%B0.png" />

```ts
Jodit.make('#editor', {
  // 调整按钮位置
  buttons: ["undo", "redo", "brush", "eraser", "copyformat",
    "|", "paragraph", "font", "fontsize", 
    "|", "bold", "italic", "underline", "strikethrough", "link", "subscript", "superscript", "hr", 
    "|", "align", "lineHeight", 
    "|", "ul", "ol", "indent", "outdent", 
    "|", "image", "video", "source", "table", 
    "|", "preview", "print", "fullsize"],
})
```


#### 无法实现首行缩进

源码当中的缩进功能采用的是调整`p`标签的css属性`maringLeft`来控制的，所以会导致整个`p`标签下的内容都会缩进。

解决方案：重写 Indent 插件，通过控制css属性的`text-indent`来控制内容缩进

```javascript
// indent.js
import {
  BR,
  PARAGRAPH,
} from 'jodit/esm/core/constants.js';

import { Dom } from 'jodit/esm/core/dom/index.js';
import { pluginSystem } from 'jodit/esm/core/global.js';
import { getKey } from 'jodit/esm/plugins/indent/helpers.js';

import './config.js';

/**
 * Indents the line containing the selection or insertion point.
 */
export function indent(editor) {
    editor
        .registerButton({
        name: 'indent',
        group: 'indent',
    })
        .registerButton({
        name: 'outdent',
        group: 'indent'
    });
    const callback = (command) => {
        const processedElements = [];
        editor.s.eachSelection((current) => {
            editor.s.save();
            let currentBox = current
                ? Dom.up(current, Dom.isBlock, editor.editor)
                : false;
            const { enter } = editor.o;
            if (!currentBox && current) {
                currentBox = Dom.wrapInline(current, enter !== BR ? enter : PARAGRAPH, editor);
            }
            if (!currentBox) {
                editor.s.restore();
                return false;
            }
          const alreadyIndented = processedElements.includes(currentBox);
          console.log(alreadyIndented);
            if (currentBox && !alreadyIndented) {
              const key = getKey(editor.o.direction, currentBox);
              let indent = Number(currentBox.dataset.indent)
              if (!indent) indent = 0;
              processedElements.push(currentBox);
              console.log(processedElements);
                let value = currentBox.style[key]
                    ? parseInt(currentBox.style[key], 10)
                    : 0;
                    value +=
                editor.o.indentMargin * (command === 'outdent' ? -1 : 1);
              indent = indent + (command === 'outdent' ? -1 : 1)
              currentBox.dataset.indent = indent
              // currentBox.style[key] = value > 0 ? value + 'px' : '';
                currentBox.style['text-indent'] = indent > 0 ? indent * 10 + 'px' : '';
                if (!attr(currentBox, 'style')) {
                    attr(currentBox, 'style', null);
                }
            }
            editor.s.restore();
        });
        editor.synchronizeValues();
        return false;
    };
    editor.registerCommand('indent', {
        exec: callback,
        hotkeys: ['ctrl+]', 'cmd+]']
    });
    editor.registerCommand('outdent', {
        exec: callback,
        hotkeys: ['ctrl+[', 'cmd+[']
    });
}
pluginSystem.add('indent', indent);
```

```javascript
// config.js
import { Config } from 'jodit/esm/config.js';
import { Dom } from 'jodit/esm/core/dom/index.js';
import { Icon } from 'jodit/esm/core/ui/icon.js';
import { getKey } from 'jodit/esm/plugins/indent/helpers.js';
import indentIcon from 'jodit/esm/plugins/indent/icons/indent.svg.js';
import outdentIcon from 'jodit/esm/plugins/indent/icons/outdent.svg.js';

Icon.set('indent', indentIcon).set('outdent', outdentIcon);
Config.prototype.controls.indent = {
    tooltip: 'Increase Indent'
};
Config.prototype.controls.outdent = {
    isDisabled: (editor) => {
        const current = editor.s.current();
        if (current) {
            const currentBox = Dom.closest(current, Dom.isBlock, editor.editor);
            if (currentBox) {
                const arrow = getKey(editor.o.direction, currentBox);
                let indent = currentBox.dataset.indent
                console.log('indent',indent);
                // return (!currentBox.style[arrow] ||
                //     parseInt(currentBox.style[arrow], 10) <= 0);
                return !indent || parseInt(indent) <= 0
            }
        }
        return true;
    },
    tooltip: 'Decrease Indent'
};
Config.prototype.indentMargin = 10;
```


#### 手动打印

Jodit Editor 虽然提供了`execCommand`方法来调用编辑器的内部指令，但是调用`print`指令时会导致编辑器以外的内容也会被打印，这个不符合逻辑。需要通过手动调用`print`插件的`exec`方法来实现。

```ts
function print() {
  jodit.options.controls.print.exec(jodit)
}
```