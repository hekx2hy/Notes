module.exports = {
    //开发端口
    port: "3000",
    //编译生成目录
    dest: "docs",
    base: "/Notes/",
    title: '黄钰的个人博客',
    description: '笔记,工作记录,日记等',
    //多语言配置
    //主题配置
    themeConfig: {
        //仓库地址
        // repo: "hekx2hy/Notes",
        //文档地址
        // docsRepo: "hekx2hy/Notes",
        editLinks: true,
		//顶部导航
        nav: [
            {text: '首页', link: '/'},
            {text: '发布', link: '/deploy/'},
        ],
		//左侧菜单
        sidebar: {
            "/deploy/":genSingleSideBar("发布"),
           
        }
    }
};

function genSingleSideBar(title){
    return [
        {
            title: title,
            collapsable: false,
            children: [
                "",
            ]
        }
    ]
}
