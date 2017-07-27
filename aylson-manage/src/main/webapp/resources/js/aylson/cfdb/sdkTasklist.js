	/**
	 * 平台SDK广告配置
	 */
	var datagrid;
	var editor;
	
	$(function() { 
		datagrid = $('#datagrid').datagrid({
			method:'get',
			url : projectName+'/cfdb/sdkTasklist/admin/list?v_date=' + new Date(),
			pagination : true,
			pageSize : 20,
			pageList : [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ],
			fit : true,
			fitColumns : false,
			nowrap : false,
			border : false,
			idField : 'adid',
			singleSelect:true,
			rownumbers: true,
			toolbar:[{
				text:"刷新",
				iconCls : 'icon-reload',
				handler : reload
			}],
 			frozenColumns : [[{ 
				field : 'opt',
				title : '操作选项',
				align : 'center',
				width : 100,
				formatter:function(value,row,index){
					var handleHtml = '';
					handleHtml += '<a href="javascript:edit(\'' + row.adid + '\')">查看详情</a>&nbsp;';
					return handleHtml;
				}
			}, {
				title : '广告名称',
				field : 'title',
				align : 'center',
				width : 120,
				sortable:true
			}, {
				title : '应用简介',
				field : 'intro',
				align : 'center',
				width : 150,
				sortable:true
			}, {
				title : '广告Logo',
				field : 'icon',
				align : 'center',
				width : 80,
				sortable:true,
				formatter:function(value,row,index){
					if(value){
						var handleHtml = '';
						handleHtml += '<img src=\'' + value + '\' style="width:50px;height:50px"/>';
						return handleHtml;
					}
				}
			}, {
				title : '运行时间',
				field : 'runtime',
				align : 'center',
				width : 80,
				sortable:true
			}, {
				title : '任务总积分',
				field : 'score',
				align : 'center',
				width : 80,
				sortable:true
			}, {
				title : '广告APK下载地址',
				field : 'url',
				align : 'center',
				width : 120,
				sortable:true
			}, {
				title : 'app包大小',
				field : 'psize',
				align : 'center',
				width : 80,
				sortable:true
			}, {
				title : '简介下载量',
				field : 'text1',
				align : 'center',
				width : 80,
				sortable:true
			}, {
				title : '创建时间',
				field : 'createDate',
				align : 'center',
				width : 120,
				sortable:true,
				formatter:function(value,row,index){
					if(value){
						return value.substring(0,19);
					}
					return value;
				}
			}
//			, {
//				title : '更新时间',
//				field : 'updateDate',
//				align : 'center',
//				width : 120,
//				formatter:function(value,row,index){
//					if(value){
//						return value.substring(0,19);
//					}
//					return value;
//				}
//			}
			] ]
		});
		
	});
	
	//查看详情
	function edit(adid){
		win = $("<div></div>").dialog({
			title:'查看详情',
			width:480,
			height:'80%',
			maximizable:true,
			modal:true,
			href:projectName+'/cfdb/sdkTasklist/admin/toEdit?adid='+adid,
			onClose:function(){
		    		$(this).dialog("destroy");
		    },
			buttons:[{
					 text:'取消',
				     iconCls:'icon-cancel',  
				 	 handler:function(){
				 		 win.dialog('destroy');
				 	 }   
				  }]
		});
	}
	
	//刷新
	function reload(){
		$("#datagrid").datagrid("reload");
	}
	
	//搜索
	function doSearch(){
		$("#datagrid").datagrid("load", serializeObject($("#sdkTasklistForm")));
	}
	
	//重置
	function reset(){
		$("#sdkTasklistForm").form("reset");
	}
	