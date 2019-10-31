SAPUI5</br>
</br>
项目用途：在表格(Table)中显示ID和name</br>
</br>
项目文件结构 </br>
数据绑定之MVC绑定</br>
&nbsp; &nbsp; models</br>
&nbsp; &nbsp; &nbsp; &nbsp; >liers.json</br>
&nbsp; &nbsp; suppliers</br>
&nbsp; &nbsp; &nbsp; &nbsp; >suppliers.controller.js</br>
&nbsp; &nbsp; &nbsp; &nbsp; >suppliers.view.js</br>
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
jQuery.sap.registerModulePath("suppliers", "./suppliers") &nbsp; 声明视图路径</br>
UI area 部分</br>
~</br>
</br>
suppliers.view.js &nbsp; 部分</br>
声明一个集合在集合中添加两列,声明一个表,将列集合绑到表中，为表绑定实际数据.</br>
sap.ui.table.Column &nbsp; 列</br>
--集合 &nbsp; label &nbsp; 列标题中显示的列标签</br>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; template &nbsp; 模板，用bindProperty方法将托管模型数据与文本（sap.m.Text）绑定</br>
--函数 &nbsp; getSortProperty &nbsp; 指定目标排序</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; width &nbsp; 列宽</br>
sap.ui.table.Table &nbsp; 声明表</br>
--属性 &nbsp; width &nbsp; 表宽</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; visibleRowCount &nbsp; 可见行 </br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; firstVisibleRow &nbsp; 第一个可见行</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; editable &nbsp; 是否可编辑</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; selectionMode &nbsp; 表的选择模式,单行还是多行
--集合 &nbsp; title &nbsp; 表格标题</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; columns &nbsp; 添加列</br>
--函数 &nbsp; setModel() &nbsp; 为程序诱导模型</br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bindRows() &nbsp; 绑定实际数据</br>
sap.m.Page &nbsp; 屏幕容器</br>
--属性 &nbsp; title &nbsp; 屏幕标题</br>
--集合 &nbsp; content &nbsp; 页面内容</br>
</br>
suppliers.controller.js &nbsp; 部分</br>
使用到一个函数 &nbsp; onInit</br>
声明JSON模型函数 &nbsp; sap.ui.model.json.JSONModel &nbsp; 绑定实体models文件夹下的json文件</br>
为视图诱导模型 &nbsp; this.getView().setModel() &nbsp; </br>
