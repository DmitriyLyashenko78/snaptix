import { Pagination } from '@/src/shared/ui/Pagination/Pagination'
import type { PaginationProps } from '@/src/shared/ui/Pagination/Pagination.types'

const meta = {
  title: 'UI/Pagination',
  component: Pagination,
}

export default meta

export const Default = (args: PaginationProps) => <Pagination {...args} />
Default.args = {
  currentPage: 2,
  pagesCount: 100,
}
