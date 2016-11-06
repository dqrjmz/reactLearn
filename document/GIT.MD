#版本控制工具


#GIT
GIT工具安装；  
命令行的使用； 

##问题点
-.本地仓库映射到远程仓库；
    -解决方案：
    1.在远程服务器建立仓库，然后克隆
    2.本地建立仓库，使用 git remote add origin master [仓库地址](https://github.com/dqrjmz/reactLearn.git)
-.将本地仓库提交到远程仓库不用输入用户名和密码的办法：
    -解决方案：
    1.使用git@地址进行clone
    2.见[方法二](http://www.cnblogs.com/ballwql/p/3462104.html)

##git的使用
```
git --config配置自己的git仓库门牌号
git --config user.name
git --config user.email



创建目录，切换目录
mkdir 名称
cd 目录


查看文件内容
cat 文件名


初始化git仓库
git init


创建文件
git add 文件名    
注意需要将文件放到本地的git创建的仓库中，否则git会找不到，找不到自然就不能添加到git仓库中，会将文件存放到暂存区中



将文件添加到仓库中去
git commit -m 'wrote a git第一课 file'
其中引号中的内容是说明性的东西，告诉当前的操作是什么，将暂存区中的文件放到分支上去



时刻掌握git仓库的情况状态
git status



当git仓库被改过之后
git diff
可以查看被修改过的地方，但是是修改在本地，没有上传的


退回版本

查看历史记录
git log
查看过往的

返回上个版本方式
git reset --hard head commit id 或者 git reset --hard head^[上一版] git reset --hard head^^[上两版]


返回之后，想再回到原来的版本怎么办
git reset --hard head commit id[上一个版本的commitId]


如果是在关闭git窗口后想回到原来的版本
git reflog  
找到所有的命令的历史记录



工作区和暂存区
工作区：就是一个文件夹，比如learngit
版本库：因为learngit文件夹下面有.git文件，这个文件就是版本库  =暂存区+分支【会有一个head的指针，master主分支】



撤销修改
git checkout -- 文件名
两种情况：
    1.在工作区中修改过的，没有放到暂存区；
    2.已经放到暂存区，又做了修改
    就是让文件回到最近一次的git add,git commit


如果已经添加到暂存区中，还想在没有commit之前修改
git reset head 文件名
会返回到最新版本，清空暂存区，返回工作区


删除文件
rm 文件名   删掉资源管理器中的文件，但是版本区还是存在的，但是git status可以查看到删除情况
git rm 文件名  git commit  将文件都删除掉【真心想删除】  


删除错误
使用rm 文件名 删除，版本区中存着，所以可以使用恢复
git checkout -- 文件名
```

##git使用2
```
git的远程操作

首先是几个重要命令，先记下来
git clone
git remote
git fetch
git pull 
git push



从远程主机克隆一个版本库过来
git clone 版本库网址    他会有一个默认的目录名
或者自定义
git clone 版本库网址 目录名


git的远程主机都要求有个主机名
git remote   进行这些主机名的管理
    -v

远程仓库
1.将本地仓库上传到远程仓库
2.本地git仓库和github仓库【git远程仓库】之间是使用ssh加密的
    所以
    第一步创建ssh key;
    ssh-keygen -t rsa -C[一定是大写] “邮箱” 会在主目录下创建一个.ssh的目录，中有ssh key公钥和私钥
    第二步设置github的count setting
    第三步设置一个repository仓库，注意不要创建readme文件

3.关联本地仓库和远程的github仓库        github的账户/仓库    
    git remote add origin git@github.com:dqrjmz/learngit.git
                   远程库名【默认】  
4.进行本地git仓库的github仓库推送
    git push -u origin master
  -u 参数：本地与远程的关联，并且内容的推送    


  从远程仓库克隆
  1.最好先有github仓库，再从github克隆到本地
  git clone git@github.com:dqrjmz/gitlearn.git
  所以，要想克隆一个仓库必须先知道他的仓库地址



  管理分支：
  分支的
    创建：
        创建分支就是把当前的head指针指向新创建分支上去；
        git checkout -b【切换到当前分支】 dev【分支名】  相当于：
        git branch 分支名    创建
        git checkout 分支名  切换
        git push origin <name>      将分支push到远程
        git push origin :<name>     将分支delete从远程
        [参考链接1](http://zengrong.net/post/1746.htm)
        [参考链接2](http://blog.chinaunix.net/uid-9398085-id-3164754.html)

        查看当前分支数量与名称：
        git branch
    删除：
        git branch -d 分支名
    切换：
        git checkout 分支名
    合并：
        git merge 分支名
```

 


