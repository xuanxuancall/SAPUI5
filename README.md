sapui5官方文档： https://sapui5.hana.ondemand.com
简单控件演示</br>
项目文件结构 </br>
WebContent</br>
&nbsp; &nbsp; >index.html </br>
代码的主要构成：</br> 
bootstrap </br>
Application area </br>
UI area</br>

第一个<script> 部分叫做 Bootstrap 负责加载和初始化 </br>
src ：UI5 所在的位置 </br>
data-sap-ui-libs ：UI5 的库（API） </br>
data-sap-ui-theme ：主题 除了默认主题，开发人员也可以自定义主题 </br>
默认主题：</br>
sap_bluecrystal </br>
sap_platium </br>
sap_goldreflection </br>
sap_hcb </br>
sap_Belize</br>
</br>
第二个<script> 部分叫做 Application area </br>
以下列出ソース中使用的API </br>
sap.ui.getCore() ：诱导sap.ui.core.Core(Core框架)，并通过sap.ui.getCore（）方法将其提供给应用程序 </br>
--方法 attachInit():立即调用目标函数</br>
</br>
sap.m.Text ：段落嵌入 </br>
--属性 text:显示的文本</br>
</br>
sap.m.Button() ：按钮 
--方法 setText()：设置文本 attachPress()：点击控件时触发 </br>
--属性 text:显示的文本 press:点击控件时触发</br>
</br>
alert() ：用于显示带有一条指定消息和一个 OK 按钮的警告框
</br>
function(oEvent) : oEvent参数是一个 event 对象 </br>
--方法 getSource()：获取触发源控件 </br>
&nbsp; &nbsp;--方法 getId():获取触发源ID</br>
</br>
sap.m.Label() ：标签 </br>
--属性 text:显示的文本</br>
</br>
sap.m.RadioButton() ：单选按钮 </br>
--属性 text:显示的文本</br>
</br>
sap.m.RadioButtonGroup() ：单选组 </br>
--属性 columns:指定一行中单选按钮的最大数量 ariaLabelledBy:关联目标控件 </br>
--方法 addButton()：添加单选按钮到组中 </br>
聚合关系:父控件(单选组),子控件(单选按钮) </br>
纵横关系:横向 父控件(单选组),子控件(单选按钮) 纵向 标签</br>
</br>
jQuery.sap.require() ：加载指定的模块并且执行,MessageBox 是静态类，在使用之前必须执行 </br>
sap.m.MessageBox.information("...",{}) ：消息对话框,自带图标和OK按钮 </br>
--...:消息主体 {title:""}：对话框抬头部分</br>
</br>
第三个 部分叫做 UI area </br>
第二部分Application area中的 </br>
API.placeAt(...) </br>
在div id="..."展示</br>
