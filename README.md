# m-best-loading

> This is a vue2.x based H5 mobile end component.

## 演示
[live demo](https://chenyangdamon.github.io/vue-m-best-loading-master/)

## 依赖
vue2.x

## 使用方式
### script标签
```html
<script src="https://unpkg.com/m-best-loading@1.0.2/dist/m-best-loading.js"></script>
<script>
  Vue.use(MBestLoading)
  ...
</script>
```
### npm安装
```javascript
import Vue from 'vue'
import App from './App.vue'
import MBestLoading from 'm-best-loading'

Vue.use(MBestLoading)
```

## 配置项

|key|description|default|options|
|:---|---|---|---|
| `type`|指定动画类型，该组件内置9种动画，`spinner`、`rolling`、<br/>`ball`、`bars`、`eclipse`、`ellipsis`、`magnify`、`pacman`|`spinner`|`String`|
|`theme`|动画的主色调|`#FF0033`|`String`
|`size`|动画尺寸|`{width:'40px',height:'40px'}`|`Object`|
|`status`|文本信息显示隐藏状态|`true`|`Boolean`|
|`text`|文本信息|`loading...`| `String` |
|`direct`| 布局方式,有水平方向、垂直方向两种，默认是水平方向 |`true`|`Boolean`|
|`show`| 控制整个loading组件显示隐藏 |`true`| `Boolean`|

