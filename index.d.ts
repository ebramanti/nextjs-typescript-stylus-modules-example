import * as http from "http";

declare namespace JSX {
    interface IntrinsicElements {
        scope: any
    }
}

declare global {
    namespace NextReact {
        interface InitialProps<S> {
            isServer: boolean;
            req?: http.ServerRequest;
            res?: http.ServerResponse;
        }

        type SFC<P = {}> = StatelessComponent<P>;
        interface StatelessComponent<P = {}> extends React.StatelessComponent<P> {
            getInitialProps?: (InitialProps) => Promise<P>;
        }

        type Key = string | number;
        interface ReactElement<P> {
            type: string | React.ComponentClass<P> | SFC<P>;
            props: P;
            key: Key | null;
        }
    }
}
