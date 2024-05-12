'use client';

import { Icon } from '@iconify/react';
//import { useRef } from 'react';

import { MotionContainer } from '../motion-container/MotionContainer';

import { menuItems, MenuItem } from './children/MenuItems';

export const Menu = () => (
  //const mobileMenuRef = useRef<HTMLUListElement>(null);

  <MotionContainer className="navbar z-50 mb-10 w-auto rounded-xl bg-gradient-to-tr from-cyan-900 to-blue-800 md:w-full md:max-w-[52rem]">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <Icon
            icon="heroicons-solid:menu-alt-1"
            className="h-8 w-8 text-white"
          />
        </div>
        <ul
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          // ref={mobileMenuRef}
          className="menu dropdown-content menu-sm -ml-2 mt-3 w-[282px] rounded-box bg-base-100 bg-gradient-to-tl from-cyan-950 to-sky-900 p-2 shadow"
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.href}
              {...item}
              //  mobileMenuRef={mobileMenuRef}
            />
          ))}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl text-white" href="/">
        next-graphql
      </a>
    </div>
    <div className="navbar-center hidden flex-col lg:flex">
      <ul className="menu menu-horizontal px-1 py-0">
        {menuItems.map((item) => (
          <MenuItem key={item.href} {...item} />
        ))}
      </ul>
    </div>
    <div className="navbar-end">
      <a href="https://github.com/jpb06/next-graphql">
        <Icon icon="mdi:github" className="h-12 w-12 text-white" />
      </a>
    </div>
  </MotionContainer>
);