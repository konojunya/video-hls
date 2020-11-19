import { h, JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";
import Hls from "hls.js";
import register from "preact-custom-element";

type Props = JSX.HTMLAttributes<HTMLVideoElement>;

const App = (props: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (Hls.isSupported() && ref.current != null) {
      const hls = new Hls();
      hls.loadSource(props.src || "");
      hls.attachMedia(ref.current);
    }
  }, []);

  return <video ref={ref} {...props}></video>;
};

register(
  App,
  "video-hls",
  [
    "src",
    "autoplay",
    "controls",
    "width",
    "height",
    "loop",
    "muted",
    "poster",
    "preload",
  ],
  { shadow: true }
);
