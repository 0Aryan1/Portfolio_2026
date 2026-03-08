declare module 'gsap/SplitText' {
  import { gsap } from 'gsap';

  export class SplitText {
    constructor(target: gsap.TweenTarget, vars?: SplitTextVars);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    split(vars?: SplitTextVars): void;
  }

  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    position?: string;
    absolute?: boolean;
    tag?: string;
  }

  export default SplitText;
}

declare module 'gsap/ScrollSmoother' {
  import { gsap } from 'gsap';

  export class ScrollSmoother {
    constructor(vars?: ScrollSmootherVars);
    static create(vars?: ScrollSmootherVars): ScrollSmoother;
    static get(): ScrollSmoother | undefined;
    static refresh(hard?: boolean): void;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(target: gsap.TweenTarget, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    kill(): void;
    refresh(): void;
    effects(target: gsap.TweenTarget, config?: Record<string, unknown>): void;
  }

  export interface ScrollSmootherVars {
    wrapper?: string | Element;
    content?: string | Element;
    smooth?: number;
    effects?: boolean;
    smoothTouch?: boolean | number;
    normalizeScroll?: boolean;
    ignoreMobileResize?: boolean;
    preventDefault?: boolean;
    [key: string]: unknown;
  }

  export default ScrollSmoother;
}
