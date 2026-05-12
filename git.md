# Git Quick Reference

## Status & Info

```bash
git status                         # show working tree status
git log --oneline                  # compact, one line per commit
git log --oneline --graph          # shows branch/merge structure
git log --oneline -n 20            # limit to last 20 commits
git log --stat                     # show files changed per commit
git log -p                         # full diff for every commit
git diff                           # unstaged changes
git diff --staged                  # staged changes (before commit)
git diff main..feature-branch      # diff between branches
```

## Staging & Committing

```bash
git add .                          # stage all changes
git add <file>                     # stage specific file
git add -p                         # interactively stage hunks
git commit -m "message"            # commit with message
git commit --amend                 # edit last commit (before push)
git stash                          # stash uncommitted changes
git stash pop                      # restore stashed changes
git stash list                     # list all stashes
```

## Branching

```bash
git branch                         # list local branches
git branch -a                      # list all branches (including remote)
git branch <name>                  # create new branch
git switch <name>                  # switch to branch
git switch -c <name>               # create and switch to new branch
git branch -d <name>               # delete branch (safe)
git branch -D <name>               # force delete branch
```

## Remote

```bash
git remote -v                      # show remote URLs
git fetch                          # fetch without merging
git pull                           # fetch + merge
git pull --rebase                  # fetch + rebase (cleaner history)
git push                           # push current branch
git push -u origin <branch>        # push and set upstream
git push --force-with-lease        # safer force push
```

## Merging & Rebasing

```bash
git merge <branch>                 # merge branch into current
git merge --no-ff <branch>         # merge with a merge commit
git rebase main                    # rebase current branch onto main
git rebase --abort                 # abort in-progress rebase
git rebase --continue              # continue after resolving conflicts
git cherry-pick <hash>             # apply a specific commit
```

## Undoing

```bash
git restore <file>                 # discard unstaged changes
git restore --staged <file>        # unstage a file
git reset HEAD~1                   # undo last commit, keep changes staged
git reset --hard HEAD~1            # undo last commit, discard changes
git revert <hash>                  # create a new commit that undoes <hash>
```

## Tagging

```bash
git tag                            # list tags
git tag v1.0.0                     # create lightweight tag
git tag -a v1.0.0 -m "message"     # create annotated tag
git push origin v1.0.0             # push a specific tag
git push origin --tags             # push all tags
```

## Utilities

```bash
git blame <file>                   # show who changed each line
git shortlog -sn                   # commit count per author
git clean -fd                      # delete untracked files/dirs (careful)
git bisect start                   # start binary search for a bug
```
