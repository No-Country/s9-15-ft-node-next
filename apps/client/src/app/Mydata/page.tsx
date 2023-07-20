/* eslint-disable prettier/prettier */

import HeaderGlobal from '../components/header-global/Header_Global';
import Menu from '../components/menu/Menu';
import Midata from '../components/Mydata/Midata';
export default function page() {
  return (
    <div>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <Midata />
      </div>
    </div>
  );
}
