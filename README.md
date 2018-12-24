# weaapp-Modal-components
带动画的微信小程序弹窗组件
# 组件效果
![](https://github.com/lucyonegit/weaapp-Modal-components/blob/master/images/about.gif)
# 组件使用
#### 在页面json配置文件中引入
```json
"usingComponents": {
     "Dialog":"../../components/Dialog/Dialog"
 },
```
#### 在页面wxml中引入组件
```html
<Dialog id="userModal"></Dialog>
```

#### 在页面onReady生命周期中获取组件实例
```javascript
this.userModal = this.selectComponent("#userModal");
```
#### 调用组件方法
```javascript
this.userModal.open();
this.userModal.close();
```
