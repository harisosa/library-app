"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = ["/images/hero.svg", "/images/hero.svg", "/images/hero.svg"];

export const Carousel = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="  relative w-full overflow-hidden rounded-xl h-37.5
sm:h-24
md:h-60
lg:h-116.75
xl:h-132
2xl:h-148
3xl:h-164">
            <AnimatePresence mode="wait">
                <motion.img
                    key={`${slides[index]}-${index}`}
                    src={slides[index]}
                    alt="Hero Banner"
                    className="
              w-full object-contain
h-[calc(100%-26px)]
sm:h-[calc(100%-22px)]
md:h-[calc(100%-24px)]
lg:h-[calc(100%-26px)]
xl:h-[calc(100%-28px)]
2xl:h-[calc(100%-30px)]
3xl:h-[calc(100%-32px)]
          "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                />
            </AnimatePresence>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 w-2 rounded-full transition ${i === index ? "bg-primary" : "bg-muted"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};