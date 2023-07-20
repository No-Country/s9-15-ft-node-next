/* eslint-disable prettier/prettier */
import React from 'react';

import HeaderGlobal from '../components/header-global/Header_Global';
import Menu from '../components/menu/Menu';
import PassportUser from '../components/passport/Passport_User';

export default function page() {
  return (
    <div>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <PassportUser />
      </div>
    </div>
  );
}
