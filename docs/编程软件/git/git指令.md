---
outline: 'deep'
---


## 初始化仓库
```
git init 
git add .
git commit -m [message]
git remote add origin [repositories_url]
git push -u origin [branch_name]
```

## 创建分支
```
git checkout -b [branch_name] -t [base_branch]

git checkout -b develop -t master
```


## 合并某一次提交
```
git cherry-pick [commit_id]

git cherry-pick 6b4182a807ef4e30b7da3ea9bf7211b4de9a7b6f
```

## 合并某个文件或文件夹
```
git checkout [branch_name] 文件或文件夹地址
```


## 推送到远程仓库
```
git push origin [branch_name]

// 推送到远程分支，并将本地分支与远程分支关联
git push --set-upstream origin modify-statisAnalysis 
```


## 修改最近一次提交的message信息
```
git commit --amend -m "new message"
```


## 获取所有远程分支
```
git fetch origin
```


## 查看当前本地分支
```
git branch
```


## 查看所有分支
```
git branch -a
```


## 切换分支
```
git checkout [branch_name]
```


## 切换到远程分支
```
git checkout -b [branch_name] [origin_branch_name]
git checkout -b dev remotes/origin/dev
```


## 删除本地分支
```
git branch -d [branch_name]
```


## 删除远程分支
```
git push origin --delete [branch_name] or
git push origin -d [branch_name]
```


## 将代码提交到多个代码仓库
```
// 第一步： 申请ssh公钥
ssh-keygen -t rsa -C [邮箱地址]

// 第二步： 在github-设置-ssh key中新增公钥

// 第三步： 添加Remote
git remote add [remote_name] [地址]

// 第四步： 在.git/config文件中新增配置
[alias]
	# 动态接收提交的分支
	pushall = !git push github $1:$1 && git push gitee $1:$1

// 第五步： 正常提交

// 如果有报错，先执行git pull 操作，git pull github master --allow-unrelated-histories
// 合并代码后再次提交
```
