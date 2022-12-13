export interface ButtonComponentProps {
    backgroundColor: string;
    textColor: string;
    isDisabled?: boolean;
    onPressed: () => void;
    title: string;
    icon?: Element;
    iconLeft?: Element;
    textSize?: number;
    borderRadius?: number;
    borderColor?: string;
    borderWidth?: number;
    font?: string;
    fontSize?: boolean;
    textLeft?: boolean;
    amount?: string | false;
    size?: number | 'small' | 'large';
    loaderColor?: string;
    noLoader?: boolean;
}

export interface LoaderProps {
    color?: string;
    size?: number | 'small' | 'large';
}

export interface RenderProfileProps {
    index: number;
    item: {[key: string]: string | {[key: string]: string}};
    onPress: (value: {[key: string]: string | {[key: string]: string}}) => void;
}
