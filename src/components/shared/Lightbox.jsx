import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Lightbox = ({ isOpen, images = [], index = 0, onClose, onPrev, onNext }) => {
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (e) => {
            if (e.key === 'Escape') onClose?.();
            if (e.key === 'ArrowLeft') onPrev?.();
            if (e.key === 'ArrowRight') onNext?.();
        };

        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onClose, onPrev, onNext]);

    if (!isOpen) return null;

    const cur = images[index];

    return createPortal(
        <div
            className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="relative w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute -top-12 right-0 text-white/90 hover:text-white text-3xl"
                    onClick={onClose}
                    aria-label="Close"
                    type="button"
                >
                    ✕
                </button>

                {images.length > 1 && (
                    <>
                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-5xl px-3"
                            onClick={onPrev}
                            aria-label="Previous"
                            type="button"
                        >
                            ‹
                        </button>
                        <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-5xl px-3"
                            onClick={onNext}
                            aria-label="Next"
                            type="button"
                        >
                            ›
                        </button>
                    </>
                )}

                <div className="flex items-center justify-center">
                    <div className="w-[min(92vw,1100px)] max-h-[85vh] aspect-[780/680] rounded-2xl overflow-hidden shadow-2xl bg-black/10">
                        <img
                            src={cur?.src}
                            alt={cur?.alt || 'Preview'}
                            className="w-full h-full object-contain select-none"
                            draggable={false}
                        />
                    </div>
                </div>


            </div>
        </div>,
        document.body
    );
};

export default Lightbox;
