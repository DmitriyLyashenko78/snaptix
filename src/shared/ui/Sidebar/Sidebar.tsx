'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SidebarProvider } from '@/src/app/model/SidebarContext'
import type { SidebarItemProps, SidebarProps } from './Sidebar.types'

import s from './Sidebar.module.css'

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <SidebarProvider>
      <aside className={s.sidebarWrapper}>
        <nav className={s.sidebarNav}>{children}</nav>
      </aside>
    </SidebarProvider>
  )
}

const NavItem = ({ href, className, icon, activeIcon, onClick, disabled, children }: SidebarItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href && !disabled

  const currentIcon = isActive && activeIcon ? activeIcon : icon

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    onClick?.()
  }

  return (
    <Link
      onClick={handleClick}
      href={disabled ? '#' : href}
      className={`${s.navItem} ${isActive ? s.active : ''} ${disabled ? s.disabled : ''} ${className || ''}`}
    >
      <span>{currentIcon}</span>
      <span>{children}</span>
    </Link>
  )
}

Sidebar.Item = NavItem
