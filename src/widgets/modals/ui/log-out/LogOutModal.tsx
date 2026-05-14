'use client'

import { useLogout } from '@/shared/api/logout/hooks/use-logout-mutation'
import { ModalLayout } from '@/widgets/modals/ui/ModalLayout'

export const LogOutModal = ({ userId, onClose }: { userId: string; onClose: () => void }) => {
  const { mutate, isPending } = useLogout()

  return (
    <ModalLayout title="Log out" onClose={onClose} onConfirm={() => mutate()} isPending={isPending}>
      Are you really want to log out of your account {userId}?
    </ModalLayout>
  )
}
