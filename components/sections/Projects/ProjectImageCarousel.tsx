"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { ProjectImage } from "@/lib/types/project/project.types"
import ProjectImageLightbox from "./ProjectImageLightbox"

interface ProjectImageCarouselProps {
  images: ProjectImage[]
}

export default function ProjectImageCarousel({
  images,
}: ProjectImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const canNavigate = images.length > 1

  if (!images.length) {
    return null
  }

  const handleImageClick = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleSelect = (carouselApi: CarouselApi) => {
    setApi(carouselApi)

    if (!carouselApi) {
      return
    }

    setCurrent(carouselApi.selectedScrollSnap())

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap())
    })
  }

  return (
    <>
      <div className="group/carousel w-full">
        <Carousel
          setApi={handleSelect}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {images.map((image, index) => (
              <CarouselItem key={`${image.src}-${index}`} className="pl-0">
                <button
                  type="button"
                  onClick={() => handleImageClick(index)}
                  className="group/image relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-background text-left"
                  aria-label={`Open ${image.alt}`}
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover/image:scale-[1.02]"
                      priority={index === 0}
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/image:bg-black/10" />

                    <div className="absolute top-3 right-3 rounded-md bg-black/55 px-2.5 py-1.5 text-[10px] font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/image:opacity-100">
                      View image
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

                    {image.caption && (
                      <div className="absolute bottom-3 left-3 rounded-md bg-black/55 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
                        {image.caption}
                      </div>
                    )}

                    {canNavigate && (
                      <div className="absolute right-3 bottom-3 rounded-md bg-black/55 px-2 py-1.5 font-mono text-[9px] text-white backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(images.length).padStart(2, "0")}
                      </div>
                    )}
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          {canNavigate && (
            <>
              <CarouselPrevious
                className={cn(
                  "left-3 size-9",
                  "border-white/20 bg-black/50 text-white",
                  "backdrop-blur-sm",
                  "opacity-0 transition-opacity duration-200",
                  "hover:bg-black/65 hover:text-white",
                  "group-hover/carousel:opacity-100"
                )}
              />

              <CarouselNext
                className={cn(
                  "right-3 size-9",
                  "border-white/20 bg-black/50 text-white",
                  "backdrop-blur-sm",
                  "opacity-0 transition-opacity duration-200",
                  "hover:bg-black/65 hover:text-white",
                  "group-hover/carousel:opacity-100"
                )}
              />
            </>
          )}
        </Carousel>

        {canNavigate && (
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {images.map((image, index) => (
              <button
                key={`${image.src}-dot`}
                type="button"
                aria-label={`View image ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                className="group/dot flex h-4 items-center"
              >
                <span
                  className={cn(
                    "block h-1 rounded-full transition-all duration-300",
                    index === current
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-border group-hover/dot:bg-muted-foreground"
                  )}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <ProjectImageLightbox
        images={images}
        open={lightboxOpen}
        initialIndex={lightboxIndex}
        onOpenChange={setLightboxOpen}
      />
    </>
  )
}
