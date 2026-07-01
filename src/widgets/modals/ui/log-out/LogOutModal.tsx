'use client'

import { useLogout } from '@/shared/api/logout/hooks/use-logout-mutation'
import { ModalLayout } from '@/widgets/modals/ui/ModalLayout'
import { useTranslations } from '@/shared/lib/i18n/TranslationsProvider'

export const LogOutModal = ({ userId, onClose }: { userId: string; onClose: () => void }) => {
  const { mutate, isPending } = useLogout()

  const dict = useTranslations()

  return (
    <ModalLayout title={dict.logOut.title} onClose={onClose} onConfirm={() => mutate()} isPending={isPending}>
      {dict.logOut.body} {userId}?
    </ModalLayout>
  )
}
