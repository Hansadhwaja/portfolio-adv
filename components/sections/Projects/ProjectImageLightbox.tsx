"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { ProjectImage } from "@/lib/types/project/project.types"

interface ProjectImageLightboxProps {
  images: ProjectImage[]
  open: boolean
  initialIndex?: number
  onOpenChange: (open: boolean) => void
}

export default function ProjectImageLightbox({
  images,
  open,
  initialIndex = 0,
  onOpenChange,
}: ProjectImageLightboxProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(initialIndex)

  const canNavigate = images.length > 1

  useEffect(() => {
    if (!open) return

    setCurrent(initialIndex)
  }, [open, initialIndex])

  useEffect(() => {
    if (!api || !open) return

    api.scrollTo(initialIndex)

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    onSelect()
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api, open, initialIndex])

  if (!images.length) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-[95vw] border-border bg-background/95 p-3",
          "backdrop-blur-xl sm:max-w-[92vw] lg:max-w-6xl"
        )}
      >
        <DialogTitle className="sr-only">Project image preview</DialogTitle>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            startIndex: initialIndex,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={`${image.src}-${index}`}>
                <div className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden rounded-lg bg-muted/30">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1920}
                    height={1080}
                    sizes="95vw"
                    className="max-h-[82vh] w-auto max-w-full object-contain"
                    priority={index === initialIndex}
                  />

                  {image.caption && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                      {image.caption}
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {canNavigate && (
            <>
              <CarouselPrevious className="left-3 border-white/20 bg-black/60 text-white hover:bg-black/80" />

              <CarouselNext className="right-3 border-white/20 bg-black/60 text-white hover:bg-black/80" />
            </>
          )}
        </Carousel>

        {canNavigate && (
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {images.map((image, index) => (
              <button
                key={`${image.src}-lightbox-dot`}
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
      </DialogContent>
    </Dialog>
  )
}
