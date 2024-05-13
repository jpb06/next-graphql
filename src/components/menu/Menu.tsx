'use client';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { Menu as MenuIcon } from 'lucide-react';
import { useRef } from 'react';

import { MotionContainer } from '@components';

import {
  tanstackMenuItems,
  MenuItem,
  apolloMenuItems,
} from './children/MenuItems';

export const Menu = () => {
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  return (
    <MotionContainer className="navbar z-50 mb-10 w-auto rounded-xl bg-gradient-to-tr from-cyan-900 to-blue-800 md:w-full md:max-w-[52rem]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MenuIcon className="h-8 w-8 text-white" />
          </div>
          <ul
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            ref={mobileMenuRef}
            className="menu dropdown-content menu-sm -ml-2 mt-3 w-[282px] rounded-box bg-base-100 bg-gradient-to-tl from-cyan-950 to-sky-900 p-2 shadow"
          >
            {tanstackMenuItems.map((item) => (
              <MenuItem
                key={item.href}
                {...item}
                mobileMenuRef={mobileMenuRef}
              />
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white" href="/">
          next-graphql
        </a>
      </div>
      <div className="flex w-full flex-col">
        <div className="navbar-start hidden w-full flex-row items-center lg:flex">
          <span className="text-white">Tanstack</span>
          <ul className="menu menu-horizontal px-1 py-0">
            {tanstackMenuItems.map((item) => (
              <MenuItem key={item.href} {...item} />
            ))}
          </ul>
        </div>
        <div className="navbar-start hidden w-full flex-row items-center lg:flex">
          <span className="text-white">Apollo</span>
          <ul className="menu menu-horizontal px-1 py-0">
            {apolloMenuItems.map((item) => (
              <MenuItem key={item.href} {...item} />
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/jpb06/next-graphql">
          <SiGithub className="h-12 w-12 text-white" />
        </a>
      </div>
    </MotionContainer>
  );
};
