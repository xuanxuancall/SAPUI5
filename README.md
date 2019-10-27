SAPUI5</br>
</br>
项目用途：表格型布局 &nbsp; ( grid layout）演示</br>
</br>
项目文件结构 </br>
WebContent</br>
&nbsp; &nbsp; >img</br>
&nbsp; &nbsp; &nbsp; &nbsp; >...</br>
&nbsp; &nbsp; >index.html </br>
</br>
index.html代码的主要构成:</br>
bootstrap</br>
Application area </br>
UI area</br>
</br>
bootstrap &nbsp; 部分</br>
data-sap-ui-libs：追加"sap.ui.layout"诱导sap.ui.layout.Grid</br>
其余不变</br>
</br>
Application area &nbsp; 部分</br>
sap.m.Image：加载图像</br>
--属性 src：图像文件存储URL的相对或绝对路径</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; decorative：是否包含装饰性图像</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; alt:图片无法显示下的替代文本</br>
</br>
sap.m.Label：标签 </br>
--构成 new sap.m.Label(sId?, mSettings?)</br>
--属性 text:显示的文本</br>
--集合 layoutData:锁定布局</br>
&nbsp; &nbsp;--sap.ui.layout.GridData：定义布局数据</br>
&nbsp; &nbsp; &nbsp; &nbsp;--方法span：大，中和小屏幕的Grid的跨度值</br>
</br>
sap.m.RadioButtonGroup() ：单选组 </br>
--集合 buttons:[]&nbsp;单选按钮的列表</br>
</br>
sap.ui.layout.Grid：表格型布局</br>
--集合 content:[]&nbsp;布局中的棋子集</br>
</br>
布局.placeAt(...)：div中展示整个布局</br>
</br>
UI area&nbsp;部分</br>
sapUiResponsiveMargin：控件和页面形成间距</br>
