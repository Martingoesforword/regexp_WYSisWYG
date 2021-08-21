
//可视化正则生成工具
//有AI提示功能

var uiType = {
    TYPE_NONE: 0,
    TYPE_COMPONENTS_AREA: 1<<0,
    TYPE_REGEXP_STR_AREA: 1<<1,
    TYPE_WYS_WYG_AREA: 1<<2,
    TYPE_USER_INTERFACE_AREA: 1<<3,
    TYPE_ALL:
        this.TYPE_COMPONENTS_AREA +
        this.TYPE_REGEXP_STR_AREA +
        this.TYPE_WYS_WYG_AREA +
        this.TYPE_USER_INTERFACE_AREA,
}


var regexpME = {
    //当前正则表达式自定义对象
    regexpInfo: {

    },

    builderCurRegExpStr: function () {
        let str = "";
        return str;
    },

    //刷新用户交互界面
    refreshUserInterface: function (area) {
        if(!area) {
            return;
        }

        if(area & uiType.TYPE_COMPONENTS_AREA) {
            //获取刷新前数据
            let originData = {};
            //执行刷新UI暂时数据操作

            //执行UI变化展示
        } else if(area & uiType.TYPE_REGEXP_STR_AREA) {
            //获取刷新前数据
            let originData = {};
            //执行刷新UI暂时数据操作

            //执行UI变化展示
        } else if(area & uiType.TYPE_WYS_WYG_AREA) {
            //获取刷新前数据
            let originData = {};
            //执行刷新UI暂时数据操作

            //执行UI变化展示
        } else if(area & uiType.TYPE_USER_INTERFACE_AREA) {
            //获取刷新前数据
            let originData = {};
            //执行刷新UI暂时数据操作

            //执行UI变化展示
        }
    },

    //正则组件集合
    regexpComponents: {
        'number':{
            //名称
            'name': "number",
            //UI展示信息
            'showInfo': {
                //i18实现
                'showName': "数字"
            },
            //构建正则对象信息
            'builderInfo': {}
        }
    },

    //系统交互处理
    onSystemInterface: {
        //系统时钟回调
        onTick: function (tickInfo) {

        }
    },

    //用户交互处理
    onUserInterface: {
        //用户添加组件到正则结尾
        onAddComponent: function (component) {

        },

        //用户移动插入位置
        onMoveInsertPos: function (moveInfo) {

        },

        //用户删除某一部分
        onDeleteComponent: function (deleteInfo) {

        },

        //用户重建正则表达式
        onReset: function () {

        },

        //用户自定义组件
        onNewComponent: function (newComponentInfo) {

        },

        //复制当前正则表达式结果
        onCopy: function (language) {
            this.builderCurRegExpStr(language);

            //复制到剪切板
        }
    }
};