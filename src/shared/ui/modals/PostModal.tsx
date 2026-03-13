'use client'

import { useRouter } from 'next/navigation'

interface PostModalProps {
  postId?: string
  userId: string
}

export const PostModal = ({ postId, userId }: PostModalProps) => {
  const router = useRouter()

  // Закрываем модалку, возвращаясь на страницу профиля без query-параметров
  const closeModal = () => {
    console.log('Закрытие модалки, userId:', userId) // Для отладки
    router.back()
  }

  // Добавляем обработчик для клика по оверлею
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Закрываем только если кликнули именно на оверлей, а не на модалку
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div
      style={overlayStyle}
      onClick={handleOverlayClick} // Клик по затемненному фону тоже закрывает
    >
      <div style={modalStyle}>
        <p style={{ color: 'black' }}>Пост ID: {postId}</p>

        <button onClick={closeModal} style={buttonStyle}>
          Закрыть
        </button>
      </div>
    </div>
  )
}

// Стили для центрирования и внешнего вида
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Затемнение фона
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
}

const modalStyle: React.CSSProperties = {
  width: '200px',
  height: '200px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  position: 'relative',
}

const buttonStyle: React.CSSProperties = {
  marginTop: '10px',
  padding: '5px 15px',
  cursor: 'pointer',
}
