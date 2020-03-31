//git remote add origin git@...  连接远程git仓库
//git clone 
//git branch dev新建分支
//get brance -v 查看本地所有分支
//git checkout -b dev 切换分支
//get merge 合并分支
//get add
//git status
//git commit
//git push -u origin master 推送本地git库数据到远程库master分支 并通过 -u 关联master分支
//git push origin master 本地有修改 提交到本地库后 推送到远程库

解决多人操作的文件冲突
// #拉取远程origin库中dev分支到本地dev分支
// git pull origin dev:dev

冲突的解决办法
//a)、编辑文件，删除特殊符号。
//b）、将文件修改完毕后，保存退出。
//c)、git add [文件名]。
//d)、git commit –m “日志信息”。
//注意：此时commit时不能带文件名。