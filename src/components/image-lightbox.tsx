'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

type LightboxImage = {
  src: string;
  alt: string;
  unoptimized?: boolean;
};

function getOriginalSrc(img: HTMLImageElement) {
  const src = img.currentSrc || img.src;

  try {
    const url = new URL(src, window.location.origin);
    const original = url.pathname === '/_next/image' ? url.searchParams.get('url') : null;

    if (original) return decodeURIComponent(original);

    return url.origin === window.location.origin ? `${url.pathname}${url.search}${url.hash}` : url.href;
  } catch {
    return src;
  }
}

function getConfiguredLightboxSrc(img: HTMLImageElement) {
  return img.dataset.lightboxSrc || img.closest<HTMLElement>('[data-lightbox-src]')?.dataset.lightboxSrc || null;
}

function getLightboxSrc(img: HTMLImageElement) {
  const configuredSrc = getConfiguredLightboxSrc(img);

  return configuredSrc || getOriginalSrc(img);
}

function getPageImages() {
  const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('main img'));

  return imgs
    .filter((img) => img.offsetParent !== null && Boolean(img.currentSrc || img.src))
    .map((img) => ({
      src: getLightboxSrc(img),
      alt: img.alt || '',
      unoptimized: Boolean(getConfiguredLightboxSrc(img)),
    }));
}

function getTargetImage(event: Event) {
  const target = event.target instanceof Element ? event.target.closest('main img') : null;

  return target instanceof HTMLImageElement ? target : null;
}

export function ImageLightbox() {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = activeIndex === null ? null : images[activeIndex];
  const imageCount = images.length;

  const canNavigate = imageCount > 1;

  const controls = useMemo(() => {
    if (!canNavigate || activeIndex === null) return null;

    return {
      previous: activeIndex === 0 ? imageCount - 1 : activeIndex - 1,
      next: activeIndex === imageCount - 1 ? 0 : activeIndex + 1,
    };
  }, [activeIndex, canNavigate, imageCount]);

  useEffect(() => {
    let pointerStart: { x: number; y: number; target: HTMLImageElement } | null = null;
    let lastPointerOpen = 0;

    const openImage = (target: HTMLImageElement, event: Event) => {
      const nextImages = getPageImages();
      const src = getLightboxSrc(target);
      const nextIndex = nextImages.findIndex((image) => image.src === src);

      if (nextIndex === -1) return;

      event.preventDefault();
      setImages(nextImages);
      setActiveIndex(nextIndex);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0) return;

      const target = getTargetImage(event);
      if (!target) return;

      pointerStart = { x: event.clientX, y: event.clientY, target };
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (!event.isPrimary || !pointerStart) return;

      const target = getTargetImage(event);
      const moved = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
      const isSameImage = target === pointerStart.target;
      const startTarget = pointerStart.target;
      pointerStart = null;

      if (!isSameImage || moved > 12) return;

      lastPointerOpen = Date.now();
      openImage(startTarget, event);
    };

    const handleClick = (event: MouseEvent) => {
      const target = getTargetImage(event);
      if (!target) return;

      if (Date.now() - lastPointerOpen < 700) {
        event.preventDefault();
        return;
      }

      openImage(target, event);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
        return;
      }

      if (!controls) return;

      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex(controls.previous);
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        setActiveIndex(controls.next);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, controls]);

  if (!activeImage || activeIndex === null) return null;

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setActiveIndex(null)}>
      <button className="lightbox-close" type="button" aria-label="Close image preview" onClick={() => setActiveIndex(null)}>
        ×
      </button>
      {controls ? (
        <button
          className="lightbox-nav lightbox-prev"
          type="button"
          aria-label="Previous image"
          onClick={(event) => {
            event.stopPropagation();
            setActiveIndex(controls.previous);
          }}
        >
          ‹
        </button>
      ) : null}
      <figure className="lightbox-stage" onClick={(event) => event.stopPropagation()}>
        <span className="lightbox-media">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 720px) 100vw, 1120px"
            unoptimized={activeImage.unoptimized}
          />
        </span>
        <figcaption>
          <span>{activeImage.alt}</span>
          <span>
            {activeIndex + 1} / {imageCount}
          </span>
        </figcaption>
      </figure>
      {controls ? (
        <button
          className="lightbox-nav lightbox-next"
          type="button"
          aria-label="Next image"
          onClick={(event) => {
            event.stopPropagation();
            setActiveIndex(controls.next);
          }}
        >
          ›
        </button>
      ) : null}
    </div>
  );
}
