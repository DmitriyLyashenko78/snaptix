'use client'

import { useState } from 'react'
import { POST_FILTERS } from '../../model/filters'
import type { PhotoItem } from '../../model/useCreatePostWizard'
import s from './DescriptionStep.module.css'

const MAX_CHARS = 500

type Props = {
  photos: PhotoItem[]
  description: string
  onDescriptionChange: (text: string) => void
}

export const DescriptionStep = ({ photos, description, onDescriptionChange }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = photos[currentIndex]
  const src = current?.croppedSrc ?? current?.originalSrc
  const filter = POST_FILTERS.find((f) => f.id === current?.filterId) ?? POST_FILTERS[0]
  const isOver = description.length > MAX_CHARS

  if (!current) return null

  return (
    <div>
      <div className={s.layout}>
        <div className={s.photoPreview}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="Preview" className={s.photoImg} style={filter.style} />
        </div>

        <div className={s.form}>
          <div className={s.userRow}>
            <div className={s.avatar}>
              <div className={s.avatarPlaceholder}>U</div>
            </div>
            <span className={s.username}>My Profile</span>
          </div>

          <div className={s.fieldBlock}>
            <textarea
              className={s.textarea}
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
              placeholder="Add a description..."
              maxLength={MAX_CHARS}
            />
            <span className={`${s.counter} ${isOver ? s.counterOver : ''}`}>
              {description.length}/{MAX_CHARS}
            </span>
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
                onClick={() => setCurrentIndex(idx)}
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
