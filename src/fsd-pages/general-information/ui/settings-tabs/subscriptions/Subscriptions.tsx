'use client'

export const Subscriptions = () => {
  return (
    <div className="tab-content">
      <h2>Мои подписки</h2>
      <div className="subscriptions-list">
        <div className="subscription-item">
          <span>🌟 Премиум подписка</span>
          <span>Действует до: 31.12.2024</span>
          <button>Управлять</button>
        </div>
        <div className="subscription-item">
          <span>📰 Ежедневная рассылка</span>
          <span>Активна</span>
          <button>Отписаться</button>
        </div>
      </div>
    </div>
  )
}
