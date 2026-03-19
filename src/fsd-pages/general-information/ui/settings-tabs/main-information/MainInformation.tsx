'use client'

export const MainInformation = () => {
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
