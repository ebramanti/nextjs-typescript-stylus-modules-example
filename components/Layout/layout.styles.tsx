import css from 'styled-jsx/css'

export const layoutStyles = css`
    header {
        background: blue;
        width: 100%;
        height: 104px;
    }

    .outer
        display flex
        height calc(100vh - 104px)

    aside
        min-width 280px
        background-color red
`;