import { Form } from '@/src/widgets/form/ui/Form'
import s from './page.module.css'
export default function Home() {
  return (
    <div className={s.container}>
      <h1>Main page</h1>
      <div>Counter</div>
      <div>4 posts</div>
    </div>
  )
}
