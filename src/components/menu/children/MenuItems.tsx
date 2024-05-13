import Link from 'next/link';
import type { RefObject } from 'react';

type MenuItemProps = {
  href: string;
  label: string;
  mobileMenuRef?: RefObject<HTMLUListElement>;
};

export const tanstackMenuItems: MenuItemProps[] = [
  { href: '/tanstack-query/hydration', label: 'Hydration' },
  { href: '/tanstack-query/initial-data', label: 'Initial data' },
];

export const apolloMenuItems: MenuItemProps[] = [
  { href: '/apollo/hydration', label: 'Hydration' },
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
