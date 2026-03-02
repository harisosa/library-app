"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = ["/images/hero.svg", "/images/hero.svg", "/images/hero.svg"];

export const Carousel = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="w-full">
            <div className="flex flex-col">
                <div className="relative w-full overflow-hidden rounded-2xl aspect-video sm:aspect-21/9">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`${slides[index]}-${index}`}
                            src={slides[index]}
                            alt="Hero Banner"
                            className="absolute inset-0 h-full w-full object-contain"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatePresence>
                </div>
                <div className="mt-3 flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setIndex(i)}
                            aria-label={`Slide ${i + 1}`}
                            className={`h-2 w-2 rounded-full transition ${i === index ? 'bg-neutral-900' : 'bg-neutral-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};