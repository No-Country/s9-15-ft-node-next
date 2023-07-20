/* eslint-disable prettier/prettier */
'use client';

import FollowButton from '../FollowButton/FollowButton';

export default function Tufanbace() {
  return (
    <div className="mt-10">
      <div>
        <h2 className="pl-5 text-[32px] text-orange-500">Tu fan base</h2>
        <div className="border-greey-100 ml-5 flex  w-[98%]  items-center justify-center border-[2px] "></div>
      </div>
      <section className="h-[410px]">
        <FollowButton followers={0} following={0} />
      </section>
    </div>
  );
}
