import { IValkyrieIcon } from ".";
import HTMLReactParser from "html-react-parser";
import { cx, css, keyframes } from "@emotion/css";
import { ComponentPropsWithoutRef } from "react";

interface ValkyrieProps {
  icon: IValkyrieIcon;
  rotate?: 0 | 90 | 180 | 270 | false;
  flip?: true | "x" | "y" | false;
  spin?: boolean | "pulse";
  beat?: boolean;
  fade?: boolean;
}

export default function ValkyrieIcon({
  flip = undefined,
  icon,
  rotate = undefined,
  spin = undefined,
  beat = undefined,
  fade = undefined,
  className,
  ...props
}: ValkyrieProps & ComponentPropsWithoutRef<"span">) {
  const spinAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const beatAnimation = keyframes`
    0%, 90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--vi-animation-scale, 1.4));
    }
  `;

  const fadeAnimation = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: var(--vi-animation-opacity, .4);
    }
  `;

  const viClass = css`
    height: 1em;
    width: 1em;
    min-width: 1em;
    line-height: 1em;
    box-sizing: content-box;
    display: inline-block;
    position: relative;
    overflow: visible;
    vertical-align: 0;
    flex-shrink: 0;
    transition: inherit;
  `;

  const rotateClass = css`
    transform: rotate(${rotate}deg);
    transition: transform var(--vi-transition-duration, 0.2s)
      var(--vi-transition-timing-function, ease-in-out);
  `;

  const flipClass = css`
    transform: ${flip === "x"
      ? "scaleX(-1)"
      : flip === "y"
        ? "scaleY(-1)"
        : "scale(-1)"};
  `;

  const spinClass = css`
    animation-name: ${spinAnimation};
    animation-timing-function: var(--vi-animation-timing-function, linear);
    animation-duration: var(--vi-animation-duration, 2s);
    animation-iteration-count: var(--vi-animation-iteration-count, infinite);
  `;

  const spinPulseClass = css`
    --vi-animation-timing-function: steps(var(--vi-animation-pulse-steps, 8));
    --vi-animation-duration: 1s;
  `;

  const beatClass = css`
    animation-name: ${beatAnimation};
    animation-timing-function: var(--vi-animation-timing-function, ease-in-out);
    animation-duration: var(--vi-animation-duration, 1s);
    animation-iteration-count: var(--vi-animation-iteration-count, infinite);
  `;

  const fadeClass = css`
    animation-name: ${fadeAnimation};
    animation-timing-function: var(--vi-animation-timing-function, ease-in-out);
    animation-duration: var(--vi-animation-duration, 1.5s);
    animation-iteration-count: var(--vi-animation-iteration-count, infinite);
  `;

  return (
    <span
      className={cx(className, {
        [viClass]: true,
        [rotateClass]: rotate !== null && rotate !== undefined,
        [flipClass]: !!flip,
        [spinClass]: !!spin,
        [spinPulseClass]: spin === "pulse",
        [beatClass]: beat,
        [fadeClass]: fade,
      })}
      {...props}
    >
      {HTMLReactParser(icon.data)}
    </span>
  );
}
