const AJAXAPI = "https://develop.dahuasurvey.com:9333/MLS";
let Config ={
    //请求配置文件
    Role_url: AJAXAPI + '/Home/GetUserInfoByCode', //根据code返回当前登陆用户信息
    ScheduleDetail_url: AJAXAPI + '/People/GetAllDeptAndUserList', //获取疏浚所有的人员【交建通获取，
    GetUserDept_url: AJAXAPI + '/Home/GetUserDept', //根据用户id获取领导管辖的部门列表
    GetDeptTaskList_url: AJAXAPI + '/Task/GetDeptTaskList',//根据部门id获取部门下面员工所属的任务计划列表
    GetTaskInfoList_url: AJAXAPI + '/Task/GetTaskInfoList',//根据用户id和数据状态【1：提交，2：草稿，3：归档】
    GetUnreadTaskList_url: AJAXAPI + '/Task/GetReadOrUnreadTask',//根据用户id和数据状态【0:待阅，1：已阅】
    InsertTaskAndSaveAsDraft_url: AJAXAPI + '/Task/InsertTaskAndSaveAsDraft',//新增草稿
    GetTaskInfoByTaskInfoId_url: AJAXAPI + '/Task/GetTaskInfoByTaskInfoId',//根据任务计划ID列表查找任务计划具体信息列表
    InsertTaskFile_url: AJAXAPI + '/Task/InsertTaskFile',//新增附件
    FileOrCancelTaskList_url: AJAXAPI + '/Task/FileOrCancelTaskList',//任务切换状态
    DeleteTaskList_url: AJAXAPI + '/Task/DeleteTaskList',//根据任务计划id删除已建好的任务计划草稿
    GetReadOrUnreadTask_url: AJAXAPI + '/Task/GetReadOrUnreadTask',//获取待阅或者以阅列表
    SearchTaskByKeyWord_url: AJAXAPI + '/Task/SearchTaskByKeyWord',//根据关键词搜索
    SearchTaskByCondition_url: AJAXAPI + '/Task/SearchTaskByCondition', //根据类型搜索
    SearchReadAndUnread_url: AJAXAPI + '/Task/SearchReadAndUnread', //已阅待阅按关键词搜索
    SearchReadByCondition_url: AJAXAPI + '/Task/SearchReadByCondition',//已阅待阅按类型搜索
    EditTaskInfo_url: AJAXAPI + '/Task/EditTaskInfo',//编辑草稿
    InsertTaskReply_url: AJAXAPI + '/Task/InsertTaskReply',//新增任务回复
    ReceiveNewTaskRemind: AJAXAPI + '/Task/ReceiveNewTaskRemind', //对接收到新任务计划的用户进行消息推送
    InsertTaskInfoToTaskUser_url: AJAXAPI + '/Task/InsertTaskInfoToTaskUser',//已建好的任务计划发送至用户
    GetDetialUserInfo_url: AJAXAPI + '/People/GetDetialUserInfo',//获取用户详细信息
    UploadTaskFile_url: AJAXAPI + '/Task/UploadTaskFile',//新增任务附件
    GetFileListByTaskId_url: AJAXAPI + '/Task/GetFileListByTaskId', //根据taskId查找所有附件信息
    InsertReceiveTask_url: AJAXAPI + '/Task/InsertReceiveTask', //新增接收到的任务计划,
    GetTaskReply_url: AJAXAPI + '/Task/GetTaskReply',
    ReceiveNewTaskRemind_url: AJAXAPI + '/Task/ReceiveNewTaskRemind',  //对接收到新任务计划的用户进行消息推送
    UpdateReceiveTask_url: AJAXAPI + '/Task/UpdateReceiveTask',//修改接收到的任务计划的数据状态
    successMsg: '操作成功',
    approveTipBtn: '确定',
    isError: false,
    //登录id
    loginUserID: "loginUserID",
    //登录用户姓名
    loginUserName: "loginUserName",
};
let Ctrl={
    loginUserId:'',  //登录用户id
    loginUserName:'', //登录用户姓名
    pageIndex:'0', //页面索引
    pageSize:'10', //页面显示数
}
export default {
    Config,//默认配置信息
    Ctrl,//控制器参数
};
