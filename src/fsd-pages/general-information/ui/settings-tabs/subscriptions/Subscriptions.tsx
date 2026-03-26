'use client'

import s from './Subscriptions.module.css'
import { useState } from 'react'
import { RadioGroup } from '@/shared/ui/radio-group/RadioGroup'
import { SUBSCRIPTION_COSTS, TYPE_SUBSCRIPTION } from '@/fsd-pages/general-information/constants/validParts'
import Link from 'next/link'
import Image from 'next/image'
import payPal from '@/public/png/payPal.png'
import stripe from '@/public/png/stripe.png'
import { Checkbox } from '@/shared/ui/checkbox/Checkbox'

export const Subscriptions = () => {
  const [accountType, setAccountType] = useState('personal')
  const [subscriptionCost, setSubcriptionCost] = useState('personal')
  const [isChecked, setIsChecked] = useState(false)

  const currentSubscription = false // на будующее

  return (
    <div className={s.tabContent}>
      {currentSubscription && (
        <>
          <h3>Current Subscription:</h3>
          <div className={s.currentSubscription}>
            <div className={s.currentSubscriptionInfo}>
              <span className={s.currentSubscriptionTitle}>Expire at</span>
              <span className={s.currentSubscriptionDate}>12.02.2022</span>
            </div>
            <div className={s.currentSubscriptionInfo}>
              <span className={s.currentSubscriptionTitle}>Next payment</span>
              <span className={s.currentSubscriptionDate}>12.02.2022</span>
            </div>
          </div>
          <div className={s.checkboxWrapper}>
            <Checkbox label="Auto-Renewal" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
          </div>
        </>
      )}

      <h3>Account type:</h3>
      <div className={s.accountType}>
        <RadioGroup
          options={TYPE_SUBSCRIPTION}
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          name="accountType"
        />
      </div>
      {accountType === 'business' ? (
        <>
          <h3>Your subscription costs:</h3>
          <div className={s.subscriptions}>
            <RadioGroup
              options={SUBSCRIPTION_COSTS}
              value={subscriptionCost}
              onChange={(e) => setSubcriptionCost(e.target.value)}
              name="subscriptionCosts"
            />
          </div>
          <div className={s.paymentMethods}>
            <Link href={'#'}>
              <Image
                src={payPal}
                alt="payment methods Pay Pal"
                width={70}
                height={48}
                className={`${s.paymentMethodsImg} ${s['paymentMethodsImg--small']}`}
              />
            </Link>
            <small>Or</small>
            <Link href={'#'}>
              <Image
                src={stripe}
                alt="payment methods stripe"
                width={70}
                height={30}
                className={`${s.paymentMethodsImg} ${s['paymentMethodsImg--large']}`}
              />
            </Link>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
