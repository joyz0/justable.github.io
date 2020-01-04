常用 git 命令
git init
git status
git diff _.txt
git diff HEAD -- _.txt
git add _.txt
(把指定的修改放到暂存区 Stage)
git add -A
(把所有修改放到暂存区 Stage)
git add .
(不包括删除文件)
git add -u
(不包括新增文件)
git commit -m "add distributed"
git log <--pretty=oneline>
git log --graph --pretty=oneline --abbrev-commit
(git log --graph 命令可以看到分支合并图)
git reset --hard HEAD^
(回退到某个版本，HEAD 代表当前，HEAD^代表上一个，HEAD~100 代表之前 100，也可以用 commit id)
git reflog
(记录你的每一次命令)
git checkout -- _.txt
(把*.txt 文件在工作区的修改全部撤销，这里有两种情况：
一种是*.txt 自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
一种是*.txt 已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
总之，就是让这个文件回到最近一次 git commit 或 git add 时的状态。)
git clone --depth 1 https://github.com:justable/learngit.git
(只 clone 所有文件的最近一次 commit)
git reset HEAD *.txt
(把暂存区的修改撤销掉 unstage，重新放回工作区)
git rm \*.txt
git remote add origin git@github.com:justable/learngit.git
(常常用在把本地代码第一次关联到远程仓库时，不过此命令只是新增了一条远程地址并未关联，origin 是后面远程地址的默认别名，后面远程地址的格式支持 https，ssh 等)
git remote set-url origin https://github.com:justable/learngit.git
(修改远程仓库地址)
git branch --set-upstream branch-name origin/branch-name
git push origin localbranch:localbranch
创建远程分支
git push -u origin master
(此命令将会关联 origin 的 master 分支，Once you've pushed with -u, both git push and git pull will work as expected)
git push origin dev
(推送时，要指定本地分支，这样，Git 就会把该分支推送到远程库对应的远程分支上)
git checkout -b dev 等价于 git branch dev + git checkout dev
将远程 git 仓库里的指定分支拉取到本地
git checkout -b branch-name origin/branch-name
git branch -d
git merge
(Fast forward 模式)
git merge --no-ff -m "merge with no-ff" dev
(普通模式)
git stash
(把当前工作现场“储藏”起来，等以后恢复现场后继续工作)
git stash list
git stash pop
(恢复的同时把 stash 内容也删了)
git stash apply stash@{0}
(恢复后，stash 内容并不删除)
git rebase
(变基)
git tag v1.39.0-20180520 <commit id> + git push origin v1.39.0-20180520
(默认标签是打在最新提交的 commit 上的，也可指定对于 commit id)
git push origin --tags
(一次性推送全部尚未推送到远程的本地标签)
git tag -a v0.1 -m "version 0.1 released" 1094adb
(还可以创建带有说明的标签，用-a 指定标签名，-m 指定说明文字)
git show <tagname>
(查看标签信息)
git remote show [remote-name](查看某个远程仓库的详细信息，包括分支的track信息)
\$ git tag -d v0.1
git push origin :refs/tags/v0.9
(先从本地删除，然后，从远程删除)
git config --system --list
(查看系统 config)
git config --global --list
(查看当前用户 global 配置)
git config --local --list
(查看当前仓库配置信息)
git config --global credential.helper foo
git config --local credential.helper 'store --file=../.git-credentials'

pull request 步骤
1.fork 原始仓库
2.clone 自己的仓库 3.在 master 分支添加原始仓库为远程分支 git remote add upstream 远程仓库 4.自己分支开发，如 dev 分支开发：git checkout -b dev 5.本地 dev 提交 6.切换 master 分支，同步原始仓库：git checkout master， git pull upstream master 7.切换本地 dev 分支，合并本地 master 分支（已经和原始仓库同步），可能需要解冲突 8.提交本地 dev 分支到自己的远程 dev 仓库 9.现在才是给原始仓库发 pull request 请求 10.等待原作者回复（接受/拒绝）

问题解决
1.(git push 时出现 The current branch dev has no upstream branch.
出现这种情况主要是由于远程仓库太多，且分支较多。在默认情况下，git push 时一般会上传到 origin 下的 master 分支上，然而当 repository 和 branch 过多，而又没有设置关联时，git 就会产生疑问，因为它无法判断你的 push 目标。
解决办法其实就是确定这两个值，方法有两种：
第一种如上图中的提示：git push --set-upstream origin master。其中的 origin 是你在 clone 远程代码时，git 为你创建的指向这个远程代码库的标签，它指向 repository。为了能清楚了解你要指向的 repository，可以用命令 git remote -v 进行查看。master 是你远程的 branch，可以用 git branch -a 查看所有分支，远程分支是红色的部分。然后确定好这两个值后，将命令中标粗的参数换掉即可。
另一种方法是：git push -u origin master。同样根据自己的需要，替换 origin 和 master。
两个命令的区别是第一条命令是要保证你的远程分支存在，如果不存在，也就无法进行关联。而第二条指令即使远程没有你要关联的分支，它也会自动创建一个出来，以实现关联。)

2.refusing to merge unrelated histories
git pull origin master --allow-unrelated-histories

特殊 git 命令
git submodule foreach git push origin 本地分支名:远程分支名
git branch -vv
git branch --set-upstream news origin/news 已被 git branch --track feature origin/feature 替代 --track 往往用于 new branch --set-upstream-to 用于重定向
等价于 git branch --set-upstream-to=origin/feature feature 或者 git branch -u origin/zhuzy-remote zhuzy-remote

\$ git push origin :master

# 等同于

\$ git push origin --delete master

git remote -v 查看 fetch 地址

git merge 和 git rebase 区别
master: 123
-> check master to dev
master: 123
dev: 123
-> commit dev 4,5
master: 123
dev: 12345
-> commit master 6,7
master: 12367
dev: 12345
(
情况一
-> dev rebase master
master: 12367
dev: 1236745
如果 45 和 67 有冲突，会 merge
情况二
-> dev merge master
master: 12367
dev: 123458
merge 会把 67 和 45 的差别合成 8
)
dev 分支的提交历史会出现区别，情况一是条直线，情况二会显示 merge 过程
