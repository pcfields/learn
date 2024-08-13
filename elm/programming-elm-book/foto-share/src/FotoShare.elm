module FotoShare exposing (main)

import Html exposing (..)
import Html.Attributes exposing (class, src)


main : Html msg
main =
    div []
        [ div [ class "header" ]
            [ h1 []
                [ text "Foto Share" ]
            ]
        , div [ class "main-content" ]
            [ div [ class "photo-gallery" ]
                [ viewPhoto "1.jpg" "surfs up"
                , viewPhoto "2.jpg" "Fox"
                , viewPhoto "3.jpg" "Evening Time"
                ]
            ]
        ]


viewPhoto : String -> String -> Html msg
viewPhoto image caption =
    div [ class "photo" ]
        [ img [ src ("https://programming-elm.com/" ++ image) ]
            []
        , h2 [ class "caption" ]
            [ text caption ]
        ]
