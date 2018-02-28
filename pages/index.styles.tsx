import css from 'styled-jsx/css'

export const indexStyles = css`
    aside {
        min-width: 280px;
        background-color: red;
    }

    section {
        display: flex;
        flex-direction: column;
        width: 100%;

        main {
            background-color: yellow;
            display: flex;
            overflow: auto;
            flex: 1 1 0;
            justify-content: flex-start;
            align-items: center;
            padding: 1em;
            flex-direction: column;
        }
    }

    .card {
        width: 640px;
        min-height: 450px;
        background-color: green;
        display: block;
        margin: 1em 0;
    }
`;
