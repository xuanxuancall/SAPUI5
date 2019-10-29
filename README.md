SAPUI5</br>
</br>
项目用途：XML VIEW &nbsp; ( grid layout）演示</br>
</br>
项目文件结构 </br>
WebContent</br>
&nbsp; &nbsp; >buttondemo</br>
&nbsp; &nbsp; &nbsp; &nbsp; >button.controller.js</br>
&nbsp; &nbsp; &nbsp; &nbsp; >button.view.xml</br>
&nbsp; &nbsp; >index.html </br>
</br>
index.html代码的主要构成:</br>
bootstrap</br>
Application area </br>
UI area</br>
</br>
bootstrap &nbsp; 部分</br>
~</br>
</br>
Application area &nbsp; 部分</br>
jQuery.sap.registerModulePath("buttondemo","./buttondemo")：声明view位置
sap.m.App:UI5移动应用程序的根元素</br>
--属性 initialPage：定义最初显示页面id</br>
--方法 addPage：添加页面</br>
sap.ui.view:创建具有给定类型，名称和给定ID的视图</br>
--属性 id：视图的ID</br>
&nbsp; &nbsp;viewName:视图配置对象</br>
&nbsp; &nbsp;type:视图类型</br>
--sap.ui.core.mvc.ViewType.XML：XML类型，也可以直接写成‘XML’,或者把sap.ui.view替换成sap.ui.xmlview</br>
</br>
UI area&nbsp;部分</br>
~</br>
</br>
button.view.xml代码的主要构成:</br>
里面有四层标签</br>
core:View：主要是声明namespace和controller name</br>
Page：页面标签</br>
--属性 title：页面抬头</br>
content：内容标签</br>
Button：按钮标签</br>
--属性 text：按钮文本“Please click.”</br>
&nbsp; &nbsp;press：响应事件为controller中的 onButtonPressed 方法</br>
</br>
button.controller.js代码的主要构成:</br>
里面有一个方法</br>
onButtonPressed 方法:显示消息"Hello"</br>
