import css from 'styled-jsx/css';

export const edward = css`
    .edward {
        background-color: green;
    }
`

const { props } = (
    <scope>
        <style jsx>{`
            .coolButton {
                color: red;
            }

            .bavid {
                background-color: blue;
            }
        `}</style>
    </scope>
);



export const {
    className: buttonClassName,
    children: buttonStyles
} = props;


