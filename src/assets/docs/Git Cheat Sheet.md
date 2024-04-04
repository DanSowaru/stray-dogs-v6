### Merge branch then delete old branch

        git checkout master/main
        git merge your-branch-name
        git branch -d your-branch-name 
        git push origin --delete your-branch-name

### Create and change to branch
        
        git checkout -b new-branch-name
        git push -u origin new-branch-name

### Reset to previous branch (return HEAD pointer 1 commit before)

        git reset --hard HEAD~1
        or
        git reset --soft HEAD~1