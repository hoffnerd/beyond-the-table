"use client"

// React/Next -----------------------------------------------------------------------
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Styles ---------------------------------------------------------------------------
import 'react-lazy-load-image-component/src/effects/blur.css';
// Components -----------------------------------------------------------------------
// Render Functions -----------------------------------------------------------------
// Data ----------------------------------------------------------------------------
// Other ----------------------------------------------------------------------------


//______________________________________________________________________________________
// ===== Component =====

const LazyLoadImageWrapper = ({ alt, effect="blur", src, placeholderSrc, width, height, style }) => (
    <LazyLoadImage
        alt={alt}
        effect={effect}
        src={src}
        placeholderSrc={placeholderSrc}
        width={width} 
        height={height}
        style={style} 
    />
)
export default LazyLoadImageWrapper;