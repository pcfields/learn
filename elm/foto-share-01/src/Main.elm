module Main exposing (main)

import Html exposing (Html, text)


main : Html msg
main =
    text (sayHello "Peter")


meaningOfLife : Int
meaningOfLife =
    42


sayHello : String -> String
sayHello name =
    "Hello, " ++ name ++ "!"


greeting : String
greeting =
    "Hello, Elm World!"
