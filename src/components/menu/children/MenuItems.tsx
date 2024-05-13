import Link from 'next/link';
import type { RefObject } from 'react';

type MenuItemProps = {
  href: string;
  label: string;
  mobileMenuRef?: RefObject<HTMLUListElement>;
};

export const menuItems: MenuItemProps[] = [
  { href: '/hydration', label: 'Hydration' },
  { href: '/initial-data', label: 'Initial data' },
];

export const MenuItem = ({ href, label, mobileMenuRef }: MenuItemProps) => (
  <li className="z-50 flex flex-row items-center lg:not-first:before:text-white lg:not-first:before:content-['/']">
    <Link
      href={href}
      className="py-4 md:px-2 md:py-1"
      onClick={() => {
        mobileMenuRef?.current?.focus();
        mobileMenuRef?.current?.blur();
      }}
    >
      {label}
    </Link>
  </li>
);
