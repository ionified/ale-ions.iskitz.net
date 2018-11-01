;
~
{ re:
    { id: 'anemojii@ions.iskitz.net'
    , is: "animated emoji ions"
    , by: 'mike.lee@iskitz'
    , at: -7.20151021
    , to: -7.20181101
    , on: 14.0
    }

, do:
    [ "get emoji"
    , "wait for emoji"
    , "choose an emoji"
    , "show that emoji"
    , "wait .25 --> 1 second"
    , "repeat 20151021 times"
    ]

, emoji
:   null

, "get emoji"
:   {get:'emoji'}

, "wait for emoji"
:   function waitForEmoji (ion)
      { var anemojii        = waitForEmoji.ion
          , doing           = anemojii.do
          ; anemojii.do     = doing.slice (2)
          ; anemojii.do.ion = anemojii
          ; doing.length    = 2
          
      ~ { on:'anemojii.emoji@ions.iskitz.net'
            ,'anemojii.emoji@ions.iskitz.net'
            : function gotEmoji (ion)
                { anemojii.emoji = ion
                ~ {i:"got emoji from: "+ ion.re.id}
                ~ anemojii.do
                }
        }
      }

, "choose an emoji"
:   function chooseEmoji ()
      { var emoji      = chooseEmoji.ion.emoji
          ; emoji.next = emoji.new()
      ~ {i:"chose "+ emoji.next}
      }

, "show that emoji"
:   function showEmoji ()
      { document.title = document.body.innerHTML = showEmoji.ion.emoji.next
      }

, "wait .25 --> 1 second"
:   function wait ()
      { wait.ion.do.after = Math.random * 750 + 250 | 0
      ~ {i:"will wait "+ wait.ion.do.after +" ms before showing the next emoji"}
      }

, "repeat 20151021 times"
:   function repeat ()
      { var  doing = repeat.ion.do
        if ( doing . repeated   >   20151021) return
        setTimeout  (repeat     ,   doing.after)
           ! doing . repeated   &&  doing.pop () && (doing.repeated = 0)
             doing . repeated++ && ~doing
      ~ {i: "did " + String (doing) +" "+ doing.repeated +" time(s)"}
      }
}
;