;
~
{ re:
    { id: 'anemojii.emoji@ions.iskitz.net'
    , is: "anemojii's emoji"
    , by: 'mike.lee@iskitz'
    , at: -7.20151021
    , to: -7.20181101
    , on: +2.2
    , it:
        [ "creates a random ion, aesop | storie type emoji for each request"
        , "found an ionify bug where ion members named next have no .ion field"
        ]
    }

, new
:   function next ()
      { var emoji = next.ion
          , types = emoji.types
          , type  = types [Math.random * types.length | 0]
          ; return emoji.create (emoji [type])
      }

, types
:   ['aesop', 'ion'/*, 'number'*/, 'storie'/*, 'string'*/]

, create
:   function create (compose)
      { var emoji = create.ion
          , get   = emoji.choose
          , eyes  = emoji.eyes
          , eye   = Math.random * eyes.length | 0
          , ears  = emoji.ears
          , ear   = Math.random * ears.left.length | 0
          , face  = { left
                    :   { ear: ears.left [ear]
                        , eye: eyes [eye] //get (eyes) 
                        }
                    , right
                    :   { ear: ears.right [ear]
                        , eye: eyes [eye] //get (eyes)
                        }
                    , nose
                    :   get (emoji.nose)
                    }
        return compose (face)
      }

, aesop
:   function aesop (emoji)
      { with (emoji)
          return  ( left.ear
                  + "['"+ left.eye +' '+ nose +' '+ right.eye +"']"
                  + right.ear
                  )
      }

, ion
:   function ion (emoji)
      { with (emoji)
          return left.ear +"{'"+ left.eye +"':'"+ right.eye +"'}"+ right.ear
      }

, number
:   function number (emoji)
      { []^0.0^[] , []*0.0*[] , []+0.0+[] , []-0.0-[] , []|0.0|[] & []%0.0%[]
        with (emoji)
          return left.ear + '0.0' + right.ear
      }

, storie
:   function storie (emoji)
      { with (emoji) return "+/d('"+ left.eye +' '+ nose +' '+ right.eye +"')b/;"
      }

, string
:   function string (emoji)
      { []^'0 . 0'^[] & 0|'~ . ~'|0  <= /examples/
        with (emoji)
          return left.ear +"'"+ left.eye +' '+ nose +' '+ right.eye +"'"+ right.ear
      }

, choose
:   function choose (feature)
      { return feature [Math.random * feature.length | 0]
      }

, eyes
:   [ 'o', 'ô', 'õ', 'ō', 'ø', 'ó', 'ò', 'ö'
    , 'O', 'Ô', 'Õ', 'Ō', 'Ø', 'Ó', 'Ò', 'Ö'
    , '+', '-', '•', '~', '0', '*', '^'
  //, '@', '#', ' ͡°'
    ]

, ears
:   { left
    :   [ /*'d',  'q',*/'~',  '-', '+'
        , '0-' , '0^', '0*', '0+', '0>', '0&', '0%'
      //, '0>>', '0|'
        , '8-' , '8^', '8*', '8+', '8>'//'8&', '8%'
      //, '8>>', '8|'
        , '[]-', '[]^', '[]*', '[]+','[]>'//, '[]<'
        ]

    , right
    :   [ /*'b',  'p',*/';',  ';',  ';'
        ,  '-0', '^0', '*0', '+0', '<0', '&0', '%0'
      //, '<<0', '|0'
        ,  '-8', '^8', '*8', '+8', '<8'//'&8', '%8'
      //, '<<8', '|8'
        , '-[]', '^[]', '*[]', '+[]','<[]'//, '>[]'
      //, '|[]'
        ]
    }

, nose
:   [ '.', ',', ':', ';', 'ᴗ', '¿', 'ʖ', ' ͜ʖ'
, '؈', 'ډ', 'ڊ', 'ڋ', 'ڌ', 'ڍ', 'ڎ', 'ڏ', 'ڐ'
    ]
}
;