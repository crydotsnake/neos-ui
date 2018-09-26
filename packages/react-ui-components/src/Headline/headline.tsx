import mergeClassNames from 'classnames';
import React, {PureComponent} from 'react';

import {PickDefaultProps} from '../../types';

type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadlineTheme {
    readonly 'heading': string;
    readonly 'heading--h1': string;
}

interface HeadlineProps {
    /**
     * The contents to be rendered.
     */
    readonly children: React.ReactNode;

    /**
     * The semantic tag type of the headline.
     */
    readonly type: HeadlineType;

    /**
     * Optional style identifier, this enables the possibility to diff the
     * semantic value of the UI to the displayed style.
     */
    readonly style?: HeadlineType;

    /**
     * An optional `className` to attach to the wrapper.
     */
    readonly className?: string;

    /**
     * An optional css theme to be injected.
     */
    readonly theme?: HeadlineTheme;
}

type DefaultProps = PickDefaultProps<HeadlineProps, 'type'>;

class Headline extends PureComponent<HeadlineProps> {
    public static readonly defaultProps: DefaultProps = {
        type: 'h1',
    };

    public render(): JSX.Element {
        const {
            type,
            className,
            children,
            theme,
            style, // TODO: Discuss what this style prop should do.
            ...rest
        } = this.props;
        const classNames = mergeClassNames(theme!.heading, theme!['heading--h1'], className);

        switch (type) {
            case 'h1':
                return <h1 {...rest} className={classNames}>{children}</h1>;
            case 'h2':
                return <h2 {...rest} className={classNames}>{children}</h2>;
            case 'h3':
                return <h3 {...rest} className={classNames}>{children}</h3>;
            case 'h4':
                return <h4 {...rest} className={classNames}>{children}</h4>;
            case 'h5':
                return <h5 {...rest} className={classNames}>{children}</h5>;
            default:
                return <h6 {...rest} className={classNames}>{children}</h6>;
        }
    }
}

export default Headline;