'use client'

export const Devices = () => {
  return (
    <div className="tab-content">
      <h2>Управление устройствами</h2>
      <div className="devices-list">
        <div className="device-item">
          <span>💻 Windows PC - Москва</span>
          <span className="device-active">Активно</span>
          <button>Отключить</button>
        </div>
        <div className="device-item">
          <span>📱 iPhone 14 - В пути</span>
          <span className="device-inactive">Не активно</span>
          <button>Завершить сеанс</button>
        </div>
      </div>
    </div>
  )
}
