import axios from "axios"
//导出请求任务类型列表方法
export const getDataStatusList = (context)=>{
	//获取当前页面的页码以及对应的类型id
	let dataStatusActive = context.state.ctrl.dataStatusObj.filter(function(item){
        return item.active == true;
    })
    //请求参数
    let params = {
        userId: context.state.ctrl.userId,
        dataStatus: dataStatusActive[0].id,
        pageSize: context.state.ctrl.pageSize,
        pageIndex: context.state.ctrl.pageIndex,
    }
    //发送请求
	axios.get(
	    context.state.Config.GetTaskInfoList_url,{
	        params:params
	    }
	).then(
	    (response)=>{
	        if(response.data.errcode ==0){
	            context.state.ctrl.dataStatusObj.forEach((item,index)=>{
	                if(item.active){
	                    item.taskList = response.data.data.taskInfoData1s;
	                }
	            })
	            if(response.data.errcode==0){
	                context.commit('setDataStatusList',response.data);
	            }
	        }  
	    }).catch(function(error){
	        console.log(error)
	    })
}
export const getUserDept = (context)=>{
	let params={
		userId:context.state.ctrl.userId
	}
	axios.get(context.state.Config.GetUserDept_url,{params:params}).then((response)=>{

        if(response.data.errcode==0){
        	context.state.ctrl.userDeptCount = response.count || response.data.data.deptIdAndNames.length;
        	// context.commit('reloadFootNav',response.count);
        }
	})
}

