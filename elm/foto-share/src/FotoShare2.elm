module FotoShare2 exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class, disabled, placeholder, src, type_, value)
import Html.Events exposing (onClick, onInput, onSubmit)


type Msg
    = ToggleLike
    | UpdateComment String
    | SaveComment



-- Model


type alias Model =
    { url : String, desc : String, liked : Bool, comments : List String, newComment : String }


initialModel : Model
initialModel =
    { url = "https://programming-elm.com/1.jpg", desc = "Initial Photo", liked = False, comments = [ "Cowabunga!!" ], newComment = "" }



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
        ToggleLike ->
            { model | liked = not model.liked }

        UpdateComment comment ->
            { model | newComment = comment }

        SaveComment ->
            saveNewComment model


saveNewComment : Model -> Model
saveNewComment model =
    let
        newComment =
            String.trim model.newComment
    in
    case newComment of
        "" ->
            model

        _ ->
            { model | comments = model.comments ++ [ newComment ], newComment = "" }



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
    div [ class "photo" ]
        [ img [ src model.url ] []
        , div [ class "photo-actions" ] [ viewLikeButton model ]
        , h2 [ class "caption" ] [ text model.desc ]
        , viewComments model
        ]


viewComments : Model -> Html Msg
viewComments model =
    div [ class "comments" ]
        [ viewCommentList model.comments
        , viewNewComment model
        ]


viewNewComment : Model -> Html Msg
viewNewComment model =
    form [ class "new-comment-form", onSubmit SaveComment ]
        [ input
            [ type_ "text"
            , value model.newComment
            , placeholder "add a commment"
            , onInput UpdateComment
            ]
            []
        , button
            [ class "save-comment-button"
            , disabled (String.isEmpty model.newComment)
            ]
            [ text "Save" ]
        ]


viewComment : String -> Html msg
viewComment comment =
    li [ class "comment" ]
        [ strong [] [ text "Comment:" ]
        , text (" " ++ comment)
        ]


viewCommentList : List String -> Html Msg
viewCommentList comments =
    case comments of
        [] ->
            div [] [ text "No Comments" ]

        _ ->
            div [ class "comments-list-container" ]
                [ ul [ class "comments-list" ]
                    (List.map viewComment comments)
                ]


likeButtonClass : Bool -> String
likeButtonClass liked =
    if liked then
        "liked"

    else
        "not-liked"


viewLikeButton : Model -> Html Msg
viewLikeButton model =
    let
        buttonClass =
            likeButtonClass model.liked

        buttonText =
            if model.liked then
                "Unlike"

            else
                "Like"
    in
    button [ class buttonClass, onClick ToggleLike ] [ text buttonText ]
