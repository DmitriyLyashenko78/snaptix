'use client'

import { POST_FILTERS } from '../../model/filters'
import type { PhotoItem } from '../../model/useCreatePostWizard'
import s from './FilterStep.module.css'

type Props = {
  photos: PhotoItem[]
  currentIndex: number
  onSetCurrentPhoto: (index: number) => void
  onSetFilter: (id: string, filterId: string) => void
}

export const FilterStep = ({ photos, currentIndex, onSetCurrentPhoto, onSetFilter }: Props) => {
  const current = photos[currentIndex]
  const src = current?.croppedSrc ?? current?.originalSrc
  const currentFilter = POST_FILTERS.find((f) => f.id === current?.filterId) ?? POST_FILTERS[0]

  if (!current) return null

  return (
    <div>
      <div className={s.layout}>
        <div className={s.preview}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="Preview" className={s.previewImg} style={currentFilter.style} />
        </div>

        <div className={s.sidebar}>
          <div className={s.filterGrid}>
            {POST_FILTERS.map((filter) => {
              const isActive = current.filterId === filter.id
              return (
                <button
                  key={filter.id}
                  className={`${s.filterItem} ${isActive ? s.filterItemActive : ''}`}
                  onClick={() => onSetFilter(current.id, filter.id)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={filter.label} className={s.filterThumb} style={filter.style} />
                  <span className={`${s.filterLabel} ${isActive ? s.filterLabelActive : ''}`}>{filter.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {photos.length > 1 && (
        <div className={s.thumbnailStrip}>
          {photos.map((photo, idx) => {
            const thumbSrc = photo.croppedSrc ?? photo.originalSrc
            const photoFilter = POST_FILTERS.find((f) => f.id === photo.filterId) ?? POST_FILTERS[0]
            return (
              <button
                key={photo.id}
                className={`${s.thumbBtn} ${idx === currentIndex ? s.thumbBtnActive : ''}`}
                onClick={() => onSetCurrentPhoto(idx)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumbSrc} alt="" className={s.thumbImg} style={photoFilter.style} />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
