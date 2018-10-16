;
~
{ re:
    { id: 'anemojii.re@ions.iskitz.net'
    , is: "animated emoji ions"
    , by: 'mike.lee@iskitz'
    , on: '2015.10.21-07'
    , to: '2018.10.17+09'
    , at: 9.0

    , it: "Shows emoji faces that're all valid ions. It also explores"
        + "ionified literate programming.                            "

    , im: "Exploring ion API & runtime documentation syntax via"
        + " ~I: do documentation once; only 1st time.          "
        + " ~i: do documentation every time.                   "

        + "I'd also, at some point, like to update this to generate faces based"
        + " on preset eyes, noses, mouths & head accessories like earphones:   "
        
        +   /d(~ . ~)b/
    }

, do:
    [ "get emoji faces"
    , "choose a random face"
    , "show that face"
    , "wait .5 --> 1 second"
    , "repeat 2014 times"
    ]

, "get emoji faces"
:   {I
    :" request a list of emoji faces from an external ion & pause subsequent do"
    +" actions. Next I sense when the faces are available. When I receive them,"
    +" I keep them as the faces list to simplify accessing them from other"
    +" actions. Lastly, I resume subsequent do actions."
    }

, "choose a random face"
:   {I
    :" choose a face from the faces list by first generating a random"
    +" number between 0 and the list's length. Next I use that number to"
    +" select the face at the matching position within the list. Lastly,"
    +" I save the chosen face as a property on the faces list to simplify"
    +" accessing it from other actions."
    }

, "show that face"
:   {I:" show the chosen face as my web view's title & content."
    }

, "wait .5 --> 1 second"
:   {I
    :" set the amount of time to wait after showing each face. I"
    +" generate a random length of time between 0 & 500 milliseconds"
    +" then increase it by 500 milliseconds to ensure waiting for at"
    +" least half a second before showing the next face. I keep this"
    +" time as a property of this ion's do actions list to simplify"
    +" accessing it from other actions."
    }

, "repeat 2014 times"
:   {I
    :" repeat this ion's list of things to do 2014 times after waiting"
    +" each time. On the first repeat I begin tracking the number of"
    +" times I've repeated as a property of the do actions list and"
    +" remove the repeat action to avoid unnecessarily repeating all"
    +" actions without waiting for some time after each."
    }
}
;