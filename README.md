SAPUI5</br>
</br>
项目用途：JavaScript VIEW &nbsp; ( grid layout）演示</br>
</br>
项目文件结构 </br>
WebContent</br>
&nbsp; &nbsp; >buttondemo</br>
&nbsp; &nbsp; &nbsp; &nbsp; >controller</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;>buttondemo.controller.js</br>
&nbsp; &nbsp; &nbsp; &nbsp; >view</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;>buttondemo.view.js</br>
&nbsp; &nbsp; >index.html </br>
</br>
index.html代码的主要构成:</br>
bootstrap</br>
Application area </br>
UI area</br>
</br>
bootstrap &nbsp; 部分</br>
data-sap-ui-resourceroots='{"buttondemo":"./buttondemo"}'：view的存放位置
※有以下三种方法来声明文件的位置：
Application area 声明:sap.ui.localResources("obj")
Application area 声明:jQuery.sap.registerModulePath("name","<url>")
bootstrap 声明: data-sap-ui-resourceroots='{"name": "<url>"}'
</br>
Application area &nbsp; 部分</br>
sap.m.App:UI5移动应用程序的根元素</br>
--属性 initialPage：定义最初显示页面id</br>
--方法 addPage：添加页面</br>
sap.ui.view:创建具有给定类型，名称和给定ID的视图</br>
--属性 id：视图的ID</br>
&nbsp; &nbsp;viewName:视图配置对象</br>
&nbsp; &nbsp;type:视图类型</br>
</br>
UI area&nbsp;部分</br>
sapUiResponsiveMargin：控件和页面形成间距</br>
</br>
buttondemo.view.js代码的主要构成:</br>
里面有两个函数</br>
getControllerName：用于返回 controller name</br>
createContent：返回页面的内容</br>
&nbsp; &nbsp;声明一个button，显示内容为"Please click."，响应事件为controller中的 onButtonPressed 方法</br>
</br>
buttondemo.controller.js代码的主要构成:</br>
里面有一个方法</br>
onButtonPressed 方法:显示消息"Hello"</br>
