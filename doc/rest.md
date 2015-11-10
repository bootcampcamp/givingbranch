RESTful HTTP routes the server responds to.


Every user is both a donor and a recipient.
When a user is created, that user is the implicit author of one empty branch.
  This default empty branch is in giving mode, so every user can give immediately.
To be a recipent, user creates a new branch in asking mode.
Every branch has one author.
Every branch has a sunset date, when it switches to giving mode.
All donations are given from one branch to another branch.
Giving reports are divided proportionally among upstream donors.


                        GET       POST    PUT       DELETE

/user                   index     create
/user/index             index
/user/new               new
/user/20                show              update    destroy
/user/20/edit           edit

/branch                 index
/branch/index           index
/branch/new             new
/branch/8               show              update    destroy
/branch/8/edit          edit
/user/20/branch         index     create
/user/20/branch/index   index

/branch/8/gave          index     create
/branch/8/gave/index    index
/branch/8/gave/new      new
/branch/8/gave/1        show              update    destroy
/branch/8/gave/1/edit   edit
