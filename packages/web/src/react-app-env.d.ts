/**
 * Customized styled-components typing to reduce memory and CPU usage.
 */
declare module "styled-components" {
  // Change this type to specify DefaultTheme type.
  export type DefaultTheme = import("./components/src/Theme").Theme;

  type ExtractProps<T> = T extends (props: infer P) => any ? P : never;
  type Interpolation<Props> =
    | Interpolated
    | ((props: { theme: DefaultTheme } & Props) => Interpolated);
  type Interpolated = string | number | undefined | null | Keyframes | false;

  type InterpolationFunction<Props> = <CustomProps extends Record<string, any>>(
    first: TemplateStringsArray,
    ...interpolations: Interpolation<Props & CustomProps>[]
  ) => React.FC<Props & CustomProps>;

  interface Styled extends HTMLElementFactories {
    <Component extends React.ComponentType<any>>(
      component: Component
    ): InterpolationFunction<ExtractProps<Component>>;
  }

  type HTMLElementFactories = {
    [TTag in keyof JSX.IntrinsicElements]: InterpolationFunction<
      JSX.IntrinsicElements[TTag]
    >;
  };

  export interface Keyframes {
    getName(): string;
  }

  export function ThemeProvider(props: {
    theme: DefaultTheme;
    children: any;
  }): ReactElement<any, any>;
  export function useTheme(): DefaultTheme;

  declare const styled: Styled;
  export default styled;
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
