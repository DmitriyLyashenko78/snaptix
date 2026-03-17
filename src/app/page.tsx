import s from './page.module.css'
import { GeneralInformation } from '@/fsd-pages/generalInformation/GeneralInformation'

export default function Home() {
  return (
    <div className={s.container}>
      <h1>Main page</h1>
      <div>Counter</div>
      <div>4 posts</div>
      <GeneralInformation />
    </div>
  )
}
