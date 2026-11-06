"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { asset, cn } from "@/lib/utils";

/**
 * An image that opens full screen when clicked. Click anywhere or press Escape to close.
 * The <dialog> is portalled to <body>, so the image can sit inside a paragraph
 * (Markdown wraps images in <p>, where a dialog isn't allowed).
 */
export default function Zoom({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const url = asset(src);

  useEffect(() => {
    if (open) dialog.current?.showModal();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={`Enlarge image: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt} className={className} loading="lazy" decoding="async" />
      </button>
      {open &&
        createPortal(
          <dialog
            ref={dialog}
            onClick={() => dialog.current?.close()}
            onClose={() => setOpen(false)}
            className={cn(
              "m-0 h-full max-h-none w-full max-w-none cursor-zoom-out bg-transparent p-0",
              "backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
            )}
            aria-label={alt}
          >
            <div className="flex h-full w-full items-center justify-center p-4 md:p-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={alt} className="max-h-full max-w-full object-contain shadow-2xl" />
            </div>
            <span className="pointer-events-none fixed right-5 top-4 t-label text-paper">Close ✕</span>
          </dialog>,
          document.body
        )}
    </>
  );
}
