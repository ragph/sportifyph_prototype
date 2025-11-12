import { useState, useEffect, useCallback } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import PropTypes from 'prop-types'

const Carousel = ({
  images = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  height = 'h-64',
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Navigate to previous slide
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }, [images.length])

  // Navigate to next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [images.length])

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered || images.length <= 1) return

    const interval = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, goToNext, images.length])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  // Return null if no images
  if (!images || images.length === 0) {
    return (
      <div className={`${height} ${className} bg-dark-bg-secondary rounded-xl flex items-center justify-center`}>
        <p className="text-dark-text-muted">No images available</p>
      </div>
    )
  }

  return (
    <div
      className={`relative ${height} ${className} rounded-xl overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {typeof image === 'string' ? (
              // Simple image URL
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              // Image object with src, alt, and optional overlay content
              <>
                <img
                  src={image.src}
                  alt={image.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {image.overlay && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      {image.overlay.title && (
                        <h3 className="text-xl font-bold mb-2">{image.overlay.title}</h3>
                      )}
                      {image.overlay.description && (
                        <p className="text-sm opacity-90">{image.overlay.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      {showControls && images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark-bg-tertiary/80 hover:bg-dark-bg-tertiary text-dark-text p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous slide"
        >
          <IoChevronBack className="text-xl" />
        </button>
      )}

      {/* Next Button */}
      {showControls && images.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark-bg-tertiary/80 hover:bg-dark-bg-tertiary text-dark-text p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next slide"
        >
          <IoChevronForward className="text-xl" />
        </button>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string, // Simple image URL
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        overlay: PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string
        })
      })
    ])
  ).isRequired,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  height: PropTypes.string,
  className: PropTypes.string
}

export default Carousel
