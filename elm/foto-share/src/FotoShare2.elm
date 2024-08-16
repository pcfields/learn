module FotoShare2 exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class, src)
import Html.Events exposing (onClick)


type Msg
    = Like
    | Unlike



-- Model


type alias Model =
    { url : String, desc : String, liked : Bool }


initialModel : Model
initialModel =
    { url = "https://programming-elm.com/1.jpg", desc = "Initial Photo", liked = False }



-- View


view : Model -> Html Msg
view model =
    div
        []
        [ div [ class "header" ]
            [ h1 []
                [ text "Foto Share 2" ]
            ]
        , div [ class "main-content" ]
            [ div [ class "photo-gallery" ]
                [ viewPhoto model
                ]
            ]
        ]



-- UPDATE


update : Msg -> Model -> Model
update msg model =
    case msg of
        Like ->
            { model | liked = True }

        Unlike ->
            { model | liked = False }



-- MAIN


main : Program () Model Msg
main =
    Browser.sandbox
        { init = initialModel
        , view = view
        , update = update
        }


viewPhoto : Model -> Html Msg
viewPhoto model =
    let
        buttonClass =
            if model.liked then
                "liked"

            else
                "not-liked"

        msg =
            if model.liked then
                Unlike

            else
                Like
    in
    div [ class "photo" ]
        [ img [ src model.url ]
            []
        , h2 [ class "caption" ]
            [ text model.desc ]
        , button [ class buttonClass, onClick msg ] [ text buttonClass ]
        ]
