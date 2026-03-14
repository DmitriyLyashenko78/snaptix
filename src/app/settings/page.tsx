import { redirect } from 'next/navigation'
import SettingsTabs from './SettingsTabs'

interface Props {
  searchParams: Promise<{
    part?: string
  }>
}

export default async function SettingsPage({ searchParams }: Props) {
  const { part } = await searchParams

  // Валидные значения для part
  const validParts = ['info', 'devices', 'subscriptions', 'payments']

  // Если part отсутствует или невалидный, редиректим на info
  if (!part || !validParts.includes(part)) {
    redirect('/settings?part=info')
  }

  return (
    <div className="settings-container">
      <h1>Profile settings</h1>

      {/* Компонент с табами (клиентский) */}
      <SettingsTabs currentPart={part} />

      {/* Контент в зависимости от выбранного таба */}
      <div className="settings-content">
        {part === 'info' && <InfoTab />}
        {part === 'devices' && <DevicesTab />}
        {part === 'subscriptions' && <SubscriptionsTab />}
        {part === 'payments' && <PaymentsTab />}
      </div>
    </div>
  )
}

// Компоненты для каждого таба (можно вынести в отдельные файлы)
function InfoTab() {
  return (
    <div className="tab-content">
      <h2>Информация о пользователе</h2>
      <form>
        <div>
          <label>Имя:</label>
          <input type="text" defaultValue="Иван Иванов" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" defaultValue="ivan@example.com" />
        </div>
        <div>
          <label>О себе:</label>
          <textarea defaultValue="React разработчик" />
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  )
}

function DevicesTab() {
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

function SubscriptionsTab() {
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

function PaymentsTab() {
  return (
    <div className="tab-content">
      <h2>История платежей</h2>
      <table className="payments-table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Сумма</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01.03.2024</td>
            <td>999 ₽</td>
            <td>✓ Оплачено</td>
          </tr>
          <tr>
            <td>01.02.2024</td>
            <td>999 ₽</td>
            <td>✓ Оплачено</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
