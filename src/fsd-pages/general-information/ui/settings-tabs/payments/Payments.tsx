'use client'

export const Payments = () => {
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
