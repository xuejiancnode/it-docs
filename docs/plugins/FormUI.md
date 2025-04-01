<script setup>
  import LinkIcon from "../components/Vue/LinkIcon.vue"
</script>

# Form

## 介绍

@xuejian/form 使用 `Vue3` + `TS` + `Element Plus` 进行封装，通过简单的配置可以快速实现表单提交功能。


## 示例
[示例](https://xuejiancnode.github.io/form/)



## 版本

@xuejian/form 目前还处于开发迭代中。

|版本|Tag|
|--|--|
| 0.1.104 | Latest |
| 0.1.103 |  |
| 0.1.102 |  |
| 0.1.101 |  |

<LinkIcon link="https://www.npmjs.com/package/@xuejian/form" />



## 安装

||版本|
|--|--|
| Node | 18 |
| TS | 5.2.2 |
| Vue | 3.3.11 |
| Vite | 5.0.8 |
| Element Plus | 2.4.4 |

### 使用包管理器

```sh
# NPM
$ npm install @xuejian/form --save

# Yarn 
$ yarn add @xuejian/form --save

# pnpm
$ pnpm install @xuejian/form --save
```



## 用法

### 完整引入

```ts
// main.ts
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Form from "@xuejian/form"

const app = createApp(App);
app.use(Form)
app.mount('#app')
```

```vue
<template>
  <Form :config="config" v-model:model="model"></Form>
</template>

<script setup lang="ts">
import { FormConfigList } from "@xuejian/form/lib/types/Form";
import { reactive } from "vue";

const model = ref({
  value: ""
})

const config = reactive<FormConfigList>([
  {
    label: "标签",
    prop: "value",
    component: "Input",
    placeholder: "请输入"
  }
])
</script>
```


### 手动导入

```html
<template>
  <Input v-model:model-value="modelValue"></Input>
</template>

<script setup lang="ts">
import { Input } from "@xuejian/form"
import { ref } from "vue";

const modelValue = ref('');
</script>
```



## 接口


### FormComponentProps

`config: FormConfigList`  &emsp;配置参数  
`model: any`  &emsp;绑定数据  
`inline?: boolean`  &emsp;是否以行内形式显示  
`labelWidth?: string`  &emsp;label标签宽度  
`labelPosition?: 'left' | 'right' | 'top'`  &emsp;label位置  
`rules?: FormRules`  &emsp;表单校验规则  
`disabled?: boolean`  &emsp;是否禁用表单  
`size?: FormSize`  &emsp;表单大小  
`gutter?: number`  &emsp;表单项的列间距  
`columns?: number`  &emsp;表单显示列数   
`autoColumn?: boolean`  &emsp;当为行排列时是否开启自动计算列数，开启后columns无效  


### FormItemConfig

`label: string`  &emsp;表单标签  
`prop: string` &emsp;表单对应的value属性  
`size?: FormSize` &emsp;表单项的尺寸  
`block?: boolean` &emsp;表单项是否独立成行  
`span?: number` &emsp;表单项所占份数，最大为24  
`asterisk?: boolean` &emsp;是否显示 * 号  
`required?: boolean` &emsp;是否必填  
`rules?: Object` &emsp;表单项的校验规则  
`style?: CSSStyleDeclaration` &emsp;表单项样式  
`labelWidth?: string` &emsp;表单标签宽度  
`showMessage?: Boolean` &emsp;是否显示校验信息  
`inlineMessage?: Boolean` &emsp;是否以行内形式展示校验信息  
`disabled?: ((cfg: FormItemConfig, model: any) => boolean) | boolean` &emsp;是否禁用表单项  
`visibled?: ((cfg: FormItemConfig, model: any) => boolean) | boolean` &emsp;是否可见  
[inputProps: InputProps](#InputProps) &emsp;输入框组件配置参数  
[buttonProps: ButtonProps](#ButtonProps)  &emsp;按钮组件配置参数  
[cascaderProps: CascaderProps](#CascaderProps)  &emsp;级联选择器配置参数  
[checkboxProps: CheckboxProps](#CheckboxProps)  &emsp;复选框组件配置参数  
[datePickerProps: DatePickerProps](#DatePickerProps)  &emsp;日期选择器配置参数  
[inputNumberProps: InputNumberProps](#InputNumberProps)  &emsp;数字输入框组件配置参数  
[radioProps: RadioProps](#RadioProps)  &emsp;单选框组件配置参数  
[selectProps: SelectProps](#SelectProps)  &emsp;下拉框组件配置参数  
[sliderProps: SliderProps](#SliderProps)  &emsp;滑块组件配置参数  
[switchProps: SwitchProps](#SwitchProps)  &emsp;开关组件配置参数  
[treeSelectProps: TreeSelectProps](#TreeSelectProps)  &emsp;树级下拉框组件配置参数  
[uploadProps: UploadProps](#uploadProps)  &emsp;文件上传组件配置参数  
[autocompleteProps: AutocompleteProps](#AutocompleteProps)  &emsp;文件上传组件配置参数  



#### InputProps 
<span id="InputProps"></span>

`component: 'Input'` <br/>
`inputProps?: InputPropsBase` <br/>

```ts
interface InputPropsBase {
  maxlength?: string | number // 输入最大长度
  placeholder?: string  // 输入框占位符
  clearable?: boolean   // 清空按钮
  type?: inputType  // input 类型
  prefixIcon?: string | Component // 输入框前置icon
  suffixIcon?: string | Component // 输入框后置icon
  inputRule?: (val: any) => boolean // 输入校验规则处理函数
}
```

#### ButtonProps
<span id="ButtonProps"></span>

`component: 'Button'`  
`buttonProps?: { buttons?: Array<ButtonPropsBase> }`

```ts
interface ButtonPropsBase {
  content?: string  // 按钮文本
  action?: string   // 按钮执行动作
  size?: FormSize   // 按钮尺寸
  plain?: boolean   // 是否为镂空按钮
  type?: ThemeType  // 按钮主题
  link?: boolean    // 是否为文本型按钮
  iconProps?: IconProps // 图标
  disabled?: boolean | (() => boolean)  // 是否禁用按钮
}
```

#### CascaderProps
<span id="CascaderProps"></span>

`component: "Cascader"`  
`cascaderProps: CascaderPropsBase`

```ts
interface CascaderPropsBase {
  options: Array<AnyProperty>
  fieldProps?: FieldProps
  placeholder?: string
  clearable?: boolean
  showAllLevels?: boolean     // 输入框中是否显示选中值的完整路径	
  collapseTags?: boolean
  collapseTagsTooltip?: boolean
  separator?: string
  filterable?: boolean
  debounce?: number
  popperClass?: string
  teleported?: boolean
  tagType?: 'success' | 'info' | 'warning' | 'danger'
  filterMethod?: (node: CascaderNode, keyword: string) => boolean
  beforeFilter?: (value: string) => boolean
}
```

#### CheckboxProps
<span id="CheckboxProps"></span>

`component: "Checkbox"`  
`checkboxProps: { options: Array<CheckboxItem>; fieldProps?: FieldProps }`

```ts
interface CheckboxItem {
  disabled?: boolean
  [key: string]: any
}
```

#### DatePickerProps
<span id="DatePickerProps"></span>

`component: "DatePicker"`  
`datePickerProps?: DatePickerPropsBase`

```ts
interface DatePickerPropsBase {
  clearable?: boolean
  placeholder?: string
  startPlaceholder?: string
  endPlaceholder?: string
  rangeSeparator?: string
  type?: DatePickerType
  defaultValue?: Date | [Date, Date]
  format?: string
  valueFormat?: string
  unlinkPanels?: boolean
  teleported?: boolean
  popperClass?: string
  prefixIcon?: string | Component
}
```

#### InputNumberProps
<span id="InputNumberProps"></span>

`component: "InputNumber"`  
`inputNumberProps?: InputNumberPropsBase`

```ts
interface InputNumberPropsBase {
  clearable?: boolean
  min?: number
  max?: number
  step?: number
  stepStrictly?: boolean
  precision?: number
  placeholder?: string
  controls?: boolean
  controlsPosition?: '' | 'right'
  valueOnClear?: number | null | 'min' | 'max'
}
```

#### RadioProps
<span id="RadioProps"></span>

`component: "Radio"`  
`radioProps?: { options: Array<RadioItem>; fieldProps?: FieldProps }`

```ts
interface RadioItem {
  disabled?: boolean
  [key: string]: any
}
```

#### SelectProps
<span id="SelectProps"></span>

`component: "Select"`  
`selectProps?: SelectPropsBase`

```ts
interface SelectPropsBase {
  options: Array<OptionItem>
  clearable?: boolean
  placeholder?: string
  multiple?: boolean
  multipleLimit?: number
  collapseTags?: boolean
  collapseTagsTooltip?: boolean
  filterable?: boolean
  popperClass?: string
  teleported?: string
  fitInputWidth?: boolean
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
  maxCollapseTags?: number
  fieldProps?: FieldProps
}
```

#### SliderProps
<span id="SliderProps"></span>

`component: 'Slider'`  
`sliderProps?: SliderPropsBase`

```ts
interface SliderPropsBase {
  min?: number
  max?: number
  step?: number
  showInput?: boolean
  showInputControls?: boolean
  debounc?: number
  showStops?: boolean
  showTooltip?: boolean
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  formatTooltip?: (value: number) => number | string
  range?: boolean
  vertical?: boolean
  height?: string
}
```

#### SwitchProps
<span id="SwitchProps"></span>

`component: "Switch"`  
`switchProps?: SwitchPropsBase`

```ts
interface SwitchPropsBase {
  loading?: boolean
  width?: string
  inlinePrompt?: boolean
  activeIcon?: string | Component
  inactiveIcon?: string | Component
  activeText?: string
  inactiveText?: string
  activeValue?: boolean | string | number
  inactiveValue?: boolean | string | number
  beforeChange?: () => Promise<boolean>
}
```

#### TreeSelectProps
<span id="TreeSelectProps"></span>

`component: "TreeSelect"`  
`treeSelectProps?: TreeSelectPropsBase`

```ts
interface TreeSelectPropsBase {
  data: Array<TreeProps | AnyProperty>
  placeholder?: string
  treeProps?: TreeProps   // 指定tree加载字段
  changeValue?: string  // 自定义change事件返回值，默认为当前选中节点
  nodeKey?: string  // 数节点的唯一标识
  renderAfterExpand?: boolean   // 是否第一次展开某个树节点后才渲染其子节点
  highlightCurrent?: boolean  // 是否高亮当前选中节点
  defaultExpandAll?: boolean  // 是否默认展开所有节点
  expandOnClickNode?: boolean   // 是否在点击节点时展开或者收缩节点
  checkOnClickNode?: boolean  // 是否在点击节点的时候选中节点
  defaultExpandedKeys?: Array<string>   // 默认展开的节点的key的数组
  showCheckbox?: boolean  // 节点是否可被选择
  checkStrictly?: boolean   // 在显示复选框的情况下，是否严格遵循父子不互相管理的做法
  defaultCheckedKeys?: Array<string>  // 默认勾选的节点的key的数组
  accordion?: boolean   // 是否每次只打开一个同级树节点
  indent?: number   // 相邻级节点间的水平缩进，单位为px
}
```

#### UploadProps
<span id="UploadProps"></span>

`component: "Upload"`  
`uploadProps?: UploadPropsBase`

```ts
interface UploadPropsBase { 
  action?: string
  headers?: Headers | Record<string, any>
  method?: string
  multiple?: boolean
  limit?: number
  data?: any
  name?: string
  withCredentials?: boolean
  showFileList?: boolean
  drag?: boolean
  accept?: string
  onExceed?: (files: File[], uploadFiles: UploadUserFile[]) => void
  listType?: 'text' | 'picture' | 'picture-card'
  autoUpload?: boolean
  button?: boolean // 是否使用按钮触发文件上传
  buttonText?: string
  trigger?: Component,
  response?: UploadResponse,
  prefixIcon?: string | Component
  suffixIcon?: string | Component
}
```


#### AutocompleteProps
<span id="AutocompleteProps"></span>

`component: "Autocomplete"`  
`uploadProps?: AutocompletePropsBase`

```ts
interface AutocompletePropsBase { 
  maxlength?: string | number
  placeholder?: string
  clearable?: boolean
  valueKey?: string
  debounce?: number
  placement?: Placement
  triggerOnFocus?: boolean
  selectWhenUnmatched?: boolean
  hideLoading?: boolean
  popperClass?: string
  teleported?: boolean
  highlightFirstItem?: boolean
  fitInputWidth?: boolean
  suggestionItem?: Component
  prepend?: string | Component
  append?: string | Component
  prefix?: string | Component
  suffix?: string | Component
  inputRule?: (value: string) => boolean
  fetchSuggestions?: (queryString: string, cb: (suggestions: any[]) => void) => void
}
```



### IconProps

```ts
interface IconProps {
  prefix?: string | Component
  suffix?: string | Component
  color?: string
  size?: number | string
  type?: IconType
}
```

### IconType

`type IconType = 'class' | 'svg' | 'img'`

### FieldProps

```ts
interface FieldProps {
  label?: string
  value?: string
}
```

### FormSize

`type FormSize = '' | 'large' | 'default' | 'small'`

### ThemeType

`type ThemeType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''`

### DatePickerType

`type DatePickerType = 'year' | 'month' | 'date' | 'dates' | 'datetime' | 'week' | 'datetimerange' | 'daterange' | 'monthrange'`

### InputType

`type InputType = 'text' | 'textarea' | 'password'`

### Placement

`type Placement = 'top' | 'top- start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'`



## 枚举

### FormEmitEventName

```ts
enum FormEmitEventName {
  updateModelValue = 'update:modelValue',
  click = "click",
  input = "input",
  change = "change",
  focus = "focus",
  blur = "blur",
  select = "select",
  beforeUpload = "beforeupload",
  uploadSuccess = "uploadsuccess",
  uploadError = "uploaderror",
}
```