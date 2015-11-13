RESTful HTTP routes the server responds to.

Every user is both a donor and a recipient.
When a user is created, that user is the implicit author of one empty stem.
  This default empty stem is in giving mode, so every user can give immediately.
To be a recipent, user creates a new stem in asking mode.
Every stem has one author.
Every stem has a sunset date, when it switches to giving mode.
All donations are given from one stem to another stem.
Giving reports are divided proportionally among upstream donors.

                        GET       POST      PUT       DELETE

/user                   index     create
/user/new               new
/user/20                show                update    destroy
/user/20/edit           edit

/user/20/branch         index     create

/stem                   index
/stem/new               new
/stem/8                 show                update    destroy
/stem/8/edit            edit

/stem/8/offer           show      offer     update    retract
/stem/8/accept/1                  accept
/stem/8/decline/1                 decline

/stem/8/gave            index     create
/stem/8/gave/new        new
/stem/8/gave/1          show                update    destroy
/stem/8/gave/1/edit     edit
