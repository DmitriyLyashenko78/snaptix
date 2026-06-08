'use client'

import { useCallback, useRef, useState } from 'react'
import Cropper from 'react-easy-crop'
import type { Area, Point } from 'react-easy-crop'
import type { PhotoItem } from '../../model/useCreatePostWizard'
import s from './CropStep.module.css'

const ASPECT_RATIOS = [
  { label: '1:1', value: 1 },
  { label: '4:5', value: 4 / 5 },
  { label: '16:9', value: 16 / 9 },
]

type Props = {
  photos: PhotoItem[]
  currentIndex: number
  onSetCurrentPhoto: (index: number) => void
  onUpdateCrop: (id: string, crop: Point) => void
  onUpdateZoom: (id: string, zoom: number) => void
  onUpdateCroppedAreaPixels: (id: string, pixels: Area) => void
  onRemovePhoto: (id: string) => void
  onAddPhoto: (file: File) => boolean
}

export const CropStep = ({
  photos,
  currentIndex,
  onSetCurrentPhoto,
  onUpdateCrop,
  onUpdateZoom,
  onUpdateCroppedAreaPixels,
  onRemovePhoto,
  onAddPhoto,
}: Props) => {
  const [aspectRatio, setAspectRatio] = useState(1)
  const addInputRef = useRef<HTMLInputElement>(null)
  const current = photos[currentIndex]

  const handleCropComplete = useCallback(
    (_: Area, croppedAreaPixels: Area) => {
      if (current) onUpdateCroppedAreaPixels(current.id, croppedAreaPixels)
    },
    [current, onUpdateCroppedAreaPixels],
  )

  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) onAddPhoto(file)
    e.target.value = ''
  }

  if (!current) return null

  return (
    <div className={s.wrapper}>
      <div className={s.cropArea}>
        <Cropper
          image={current.originalSrc}
          crop={current.crop}
          zoom={current.zoom}
          aspect={aspectRatio}
          onCropChange={(crop) => onUpdateCrop(current.id, crop)}
          onZoomChange={(zoom) => onUpdateZoom(current.id, zoom)}
          onCropComplete={handleCropComplete}
        />

        <div className={s.overlayControls}>
          <div className={s.ratioButtons}>
            {ASPECT_RATIOS.map((r) => (
              <button
                key={r.label}
                className={`${s.ratioBtn} ${aspectRatio === r.value ? s.ratioBtnActive : ''}`}
                onClick={() => setAspectRatio(r.value)}
              >
                {r.label}
              </button>
            ))}
          </div>

          <div className={s.zoomControl}>
            <span className={s.zoomIcon}>−</span>
            <input
              className={s.zoomSlider}
              type="range"
              min={1}
              max={3}
              step={0.05}
              value={current.zoom}
              onChange={(e) => onUpdateZoom(current.id, Number(e.target.value))}
            />
            <span className={s.zoomIcon}>+</span>
          </div>
        </div>
      </div>

      <div className={s.thumbnailStrip}>
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            className={`${s.thumbnail} ${idx === currentIndex ? s.thumbnailActive : ''}`}
            onClick={() => onSetCurrentPhoto(idx)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.originalSrc} alt="" className={s.thumbnailImg} />
            {photos.length > 1 && (
              <button
                className={s.thumbnailRemove}
                onClick={(e) => {
                  e.stopPropagation()
                  onRemovePhoto(photo.id)
                }}
                aria-label="Remove photo"
              >
                ×
              </button>
            )}
          </div>
        ))}
        {photos.length < 10 && (
          <button className={s.addPhotoBtn} onClick={() => addInputRef.current?.click()} aria-label="Add photo">
            +
          </button>
        )}
      </div>

      <input
        ref={addInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
        className={s.fileInput}
        onChange={handleAddFile}
      />
    </div>
  )
}
