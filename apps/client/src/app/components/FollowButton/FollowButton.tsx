/* eslint-disable prettier/prettier */
'use client';
import React, { useState } from 'react';

import CardArtist from '../CadrArtistList/CardArtist';
interface FollowButtonProps {
  followers: number;
  following: number;
}

const FollowButton: React.FC<FollowButtonProps> = () => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  const toggleFollowers = () => {
    setShowFollowers(!showFollowers);
    setShowFollowing(false);
  };

  const toggleFollowing = () => {
    setShowFollowing(!showFollowing);
    setShowFollowers(false);
  };

  return (
    <div className="mt-16">
      <nav className="flex items-center justify-center">
        <div className="bouder border-orange-400g- orange-300 flex h-[48px] w-[361px] items-center justify-center gap-10  rounded-lg  border-[3px] border-orange-500 bg-orange-300 text-center text-lg font-semibold text-black">
          <div className="ml-3 ">
            <button
              className={
                showFollowers ? 'rounded-[7px] bg-white px-10 py-[3px]  ' : 'px-10 py-[3px]'
              }
              onClick={toggleFollowers}
            >
              Siguiendo
            </button>
          </div>
          <div className="mr-3">
            <button
              className={showFollowing ? 'rounded-[7px] bg-white px-10 py-[3px]' : 'px-10 py-[3px]'}
              onClick={toggleFollowing}
            >
              Seguidores
            </button>
          </div>
        </div>
      </nav>
      <section className="ml-10 mt-16">
        {showFollowers && (
          <div>
            <CardArtist />
            <CardArtist />
            <CardArtist />
          </div>
        )}
        {showFollowing && (
          <div>
            <CardArtist />
            <CardArtist />
          </div>
        )}
      </section>
    </div>
  );
};

export default FollowButton;
